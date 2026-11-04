// Shareable speaker GIFs: one animated card per speaker, for the speaker to
// post when they announce their talk.
//
//   node scripts/speaker-gifs.mjs                 # everyone
//   node scripts/speaker-gifs.mjs jp-camara       # one, or several, by key
//   node scripts/speaker-gifs.mjs --changed       # only cards the content has outrun
//   node scripts/speaker-gifs.mjs --list-changed  # print those keys, render nothing
//   node scripts/speaker-gifs.mjs --png           # also keep a still frame
//
// Writes public/speaker-card/<key>.gif (1280x720, ~3s, loops). The still is
// public/speaker-card/<key>.png, the frame a network shows before the GIF
// plays. Both are committed: the site is static, so a download button can only
// point at a file that is already there.
//
// Content is buildProfiles(), the same merge /speakers and the schedule card
// read from the same snapshot, and the CFP app owns the titles here too. Each
// card's content hash goes in src/content/speaker-card-hashes.json, and the site
// shows a card only while that hash matches (src/utils/speakerCard.js).
// .github/workflows/speaker-cards.yml refreshes the snapshot and runs --changed
// every hour. By hand, refresh first (node scripts/fetch-cfp-talks.js) or this
// redraws the old text.
//
// How a frame is made: scripts/speaker-gif-template.html is served over a
// static server rooted at public/, so its font and sprite URLs resolve exactly
// as they do in production. Playwright steps window.setFrame(i) and
// screenshots each frame; ffmpeg builds one shared palette and encodes the
// GIF. Nothing animates on a timer, so two renders with the same tools match,
// and a new ffmpeg or browser changes the bytes without changing the pixels.
// That is why a template change needs a full run: the hash covers the content,
// so --changed will not notice.
//
// Needs: the chromium Playwright downloads (npx playwright install chromium)
// and ffmpeg on PATH. --list-changed needs neither, nor an npm install.
import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { spawn } from "node:child_process";

import { conferenceSpeakers, cfpNameAliases } from "../src/data/conference-2026.js";
import { buildProfiles } from "../src/utils/speakerProfiles.js";
import {
  CARD_DIR,
  CARD_HASHES,
  cardContent,
  cardFile,
  cardHash,
  hasCard,
  isCardCurrent,
  readCardHashes,
} from "../src/utils/speakerCard.js";
import { palette, shadowInk } from "../src/design/tokens.mjs";

const OUT_DIR = CARD_DIR;
const TEMPLATE = "scripts/speaker-gif-template.html";
const WIDTH = 1280;
const HEIGHT = 720;
const FRAMES = 24;
const FPS = 10;

const args = process.argv.slice(2);
const keepPng = args.includes("--png");
const listChanged = args.includes("--list-changed");
const changedOnly = listChanged || args.includes("--changed");
const only = new Set(args.filter((a) => !a.startsWith("--")));

// ---------------------------------------------------------------- content

const cfpTalks = JSON.parse(readFileSync("src/content/cfp-talks.json", "utf8"));
const { profiles } = buildProfiles(cfpTalks, conferenceSpeakers, cfpNameAliases);

const everyone = profiles.filter(hasCard).map(cardContent);
const hashes = readCardHashes();

const cards = everyone
  .filter((c) => only.size === 0 || only.has(c.key))
  .filter((c) => !changedOnly || !isCardCurrent(c, hashes))
  .map((c) => ({ ...c, frames: FRAMES }));

// Sorted, so a run that changes one card changes one line of the file. A speaker
// who no longer has a card loses their entry.
async function saveHashes() {
  const keys = new Set(everyone.map((c) => c.key));
  const kept = Object.keys(hashes)
    .filter((key) => keys.has(key))
    .sort()
    .map((key) => [key, hashes[key]]);
  await writeFile(CARD_HASHES, JSON.stringify(Object.fromEntries(kept), null, 2) + "\n");
}

if (listChanged) {
  for (const card of cards) console.log(card.key);
  process.exit(0);
}

if (cards.length === 0) {
  if (changedOnly) {
    await saveHashes();
    console.log("Every card is current.");
    process.exit(0);
  }
  console.error(
    only.size > 0
      ? `No speaker matched: ${[...only].join(", ")}`
      : "No speakers with both a sprite and a title.",
  );
  process.exit(1);
}

// ------------------------------------------------------------- the server

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

// Rooted at public/, so every URL in the template is the production one. The
// template itself is the single exception, served from scripts/.
function serve() {
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const file =
      path === "/__card" ? TEMPLATE : join("public", normalize(path).replace(/^(\.\.[/\\])+/, ""));
    if (!existsSync(file)) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

function run(cmd, cmdArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, cmdArgs, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}\n${err}`)),
    );
  });
}

// ---------------------------------------------------------------- render

const { server, port } = await serve();
const base = `http://127.0.0.1:${port}`;
await mkdir(OUT_DIR, { recursive: true });

// Imported here so --list-changed runs before anything is installed.
const { chromium } = await import("playwright");
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1,
});

// The card reads its colors from here, so the palette has one home.
const cssVars = {
  "--sky": palette.sky[500],
  "--gold": palette.gold[500],
  "--white": palette.white,
  "--ink": palette.ink,
  "--shadow": shadowInk,
  "--shadow-soft": palette.sky[900],
};

const tmp = join(
  process.env.TMPDIR ?? "/tmp",
  `sfruby-speaker-gif-${process.pid}`,
);

let failed = 0;
for (const card of cards) {
  try {
    await rm(tmp, { recursive: true, force: true });
    await mkdir(tmp, { recursive: true });

    await page.addInitScript((payload) => {
      window.__SPEAKER__ = payload;
    }, card);
    await page.goto(`${base}/__card`, { waitUntil: "load" });
    await page.addStyleTag({
      content: `:root{${Object.entries(cssVars)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")}}`,
    });
    // Fonts decide every measurement the template makes, so re-fit after they
    // load rather than screenshotting a card laid out in the fallback face.
    await page.waitForFunction(() => document.documentElement.dataset.ready === "1");

    for (let i = 0; i < FRAMES; i++) {
      await page.evaluate((n) => window.setFrame(n), i);
      await page.screenshot({
        path: join(tmp, `${String(i).padStart(3, "0")}.png`),
        animations: "disabled",
      });
    }

    const gif = cardFile(card.key);
    // One palette for the whole loop (stats_mode=full): a per-frame palette
    // makes the static left column shimmer between frames. diff_mode=rectangle
    // then stores only the box that changed, which is why the card keeps its
    // motion on one side.
    await run("ffmpeg", [
      "-y", "-v", "error",
      "-framerate", String(FPS),
      "-i", join(tmp, "%03d.png"),
      "-filter_complex",
      "[0:v]split[a][b];[a]palettegen=max_colors=64:stats_mode=full[p];" +
        "[b][p]paletteuse=dither=none:diff_mode=rectangle",
      "-loop", "0",
      gif,
    ]);

    if (keepPng) {
      await run("ffmpeg", [
        "-y", "-v", "error",
        "-i", join(tmp, "000.png"),
        join(OUT_DIR, `${card.key}.png`),
      ]);
    }

    const { size } = await readdir(OUT_DIR).then(async () => {
      const { statSync } = await import("node:fs");
      return statSync(gif);
    });
    // Only after the file is written, so a card that fails keeps its old hash
    // and stays hidden until a run renders it.
    const { frames: _frames, ...content } = card;
    hashes[card.key] = cardHash(content);
    console.log(`  ${card.key.padEnd(20)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
  } catch (error) {
    failed++;
    console.error(`  ${card.key}: ${error.message}`);
  }
}

await rm(tmp, { recursive: true, force: true });
await browser.close();
server.close();
await saveHashes();

console.log(`\n${cards.length - failed}/${cards.length} cards written to ${OUT_DIR}/`);
if (failed) process.exit(1);
