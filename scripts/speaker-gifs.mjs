// Shareable speaker GIFs: one animated card per speaker, for the speaker to
// post when they announce their talk.
//
//   node scripts/speaker-gifs.mjs              # everyone
//   node scripts/speaker-gifs.mjs jp-camara    # one, or several, by key
//   node scripts/speaker-gifs.mjs --png        # also keep a still frame
//
// Writes public/speaker-card/<key>.gif (1280x720, ~3s, loops). The still is
// public/speaker-card/<key>.png, the frame a network shows before the GIF
// plays. Both are committed: the site is static, so a download button can only
// point at a file that is already there.
//
// Content is buildProfiles(), the same merge /speakers and the schedule card
// read, so a card can never name a talk differently from the site. That also
// means the CFP app owns the titles here: when a speaker publishes or edits
// one, refresh the snapshot (npm run fetch-data) and re-run this.
//
// How a frame is made: scripts/speaker-gif-template.html is served over a
// static server rooted at public/, so its font and sprite URLs resolve exactly
// as they do in production. Playwright steps window.setFrame(i) and
// screenshots each frame; ffmpeg builds one shared palette and encodes the
// GIF. Nothing animates on a timer, so a rebuild of an unchanged speaker
// produces the same bytes.
//
// Needs: the chromium Playwright downloads (npx playwright install chromium)
// and ffmpeg on PATH.
import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

import { conferenceSpeakers, cfpNameAliases } from "../src/data/conference-2026.js";
import { buildProfiles } from "../src/utils/speakerProfiles.js";
import { palette, shadowInk } from "../src/design/tokens.mjs";

const OUT_DIR = "public/speaker-card";
const TEMPLATE = "scripts/speaker-gif-template.html";
const WIDTH = 1280;
const HEIGHT = 720;
const FRAMES = 24;
const FPS = 10;

const args = process.argv.slice(2);
const keepPng = args.includes("--png");
const only = new Set(args.filter((a) => !a.startsWith("--")));

// ---------------------------------------------------------------- content

const cfpTalks = JSON.parse(readFileSync("src/content/cfp-talks.json", "utf8"));
const { profiles } = buildProfiles(cfpTalks, conferenceSpeakers, cfpNameAliases);

// An abstract is written for a page, not a poster. The card sets whatever it
// is given smaller until it fits, so this is only the backstop for an abstract
// far longer than the CFP form allows (400 characters today). It cuts at the
// last sentence that fits, never mid-clause.
//
// A sentence ends at punctuation followed by a space. Requiring the space is
// the whole trick: without it "Solid Queue 1.0 was released" ends a sentence
// at "1." and everything before it is dropped on the floor.
function posterAbstract(text, budget = 420) {
  const clean = String(text ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= budget) return clean;
  let cut = 0;
  for (const m of clean.matchAll(/[.!?]["')\]]?(?=\s)/g)) {
    const end = m.index + m[0].length;
    if (end > budget) break;
    cut = end;
  }
  if (cut > 0) return clean.slice(0, cut);
  // No sentence ends inside the budget: fall back to a word boundary.
  const head = clean.slice(0, budget);
  return head.slice(0, head.lastIndexOf(" ")).replace(/[,;:\s]+$/, "") + "…";
}

const cards = profiles
  .filter((p) => p.pixel && p.title)
  .filter((p) => only.size === 0 || only.has(p.key))
  .map((p) => ({
    key: p.key,
    name: p.name,
    title: p.title,
    // The CFP abstract is the talk in the speaker's own words. A speaker whose
    // entry is still a stub gets their roster line, which is never empty.
    abstract: posterAbstract(p.abstract || p.bio),
    slot: p.slot,
    pixel: p.pixel,
    keynote: Boolean(p.keynote),
    frames: FRAMES,
  }));

if (cards.length === 0) {
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

    const gif = join(OUT_DIR, `${card.key}.gif`);
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
    console.log(`  ${card.key.padEnd(20)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
  } catch (error) {
    failed++;
    console.error(`  ${card.key}: ${error.message}`);
  }
}

await rm(tmp, { recursive: true, force: true });
await browser.close();
server.close();

console.log(`\n${cards.length - failed}/${cards.length} cards written to ${OUT_DIR}/`);
if (failed) process.exit(1);
