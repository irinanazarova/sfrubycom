// Refresh speaker sprites from the characters people generate at
// clouds.sfruby.com:
//
//     node scripts/fetch-speaker-sprites.js [--dry-run]
//
// Unlike the other fetch scripts this is NOT part of `npm run fetch-data`. The
// sprites are committed assets under public/, and a generated character is a
// person's own likeness: it lands in the repo when someone runs this and looks
// at the result, not silently on every deploy.
//
// The roster's own art is a hand-cut sprite from an announcement card
// (scripts/cut-speaker-sprite.py). A cards-app character is the same pixel
// style at a different framing, so it is normalised to the convention the grid
// expects: 256x256 transparent, figure ~240 tall, centred, standing on the
// bottom edge. SpeakerRoster.astro and the hero grid both assume that square.
import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { conferenceSpeakers } from "../src/data/conference-2026.js";
import { speakerKey } from "../src/utils/cfpTalks.js";

const API = "https://clouds.sfruby.com/api/characters?limit=50";

// Attendees type their own names, so a few disagree with the roster the same
// way the CFP feed does. Maps the cards-app spelling to the roster name.
const NAME_ALIASES = { "Vova Dementyev": "Vladimir Dementyev" };

// People who prefer the sprite already in the repo. Their character stays on
// clouds.sfruby.com; the site keeps the hand-cut art.
const KEEP_EXISTING = ["Irina Nazarova"];

const dryRun = process.argv.includes("--dry-run");
const publicDir = fileURLToPath(new URL("../public/", import.meta.url));

const res = await fetch(API, { signal: AbortSignal.timeout(20_000) });
if (!res.ok) throw new Error(`characters API: HTTP ${res.status}`);
const { characters } = await res.json();

const keepExisting = new Set(KEEP_EXISTING.map(speakerKey));
// Only speakers already carrying a `pixel` path are rewritten: the path in
// conference-2026.js is the file this writes, so someone without one needs a
// roster edit first, not a silently invented filename.
const wanted = new Map(
  conferenceSpeakers
    .filter((s) => s.pixel && !keepExisting.has(speakerKey(s.name)))
    .map((s) => [speakerKey(s.name), s]),
);

let written = 0;
for (const character of characters ?? []) {
  const speaker = wanted.get(
    speakerKey(NAME_ALIASES[character.name?.trim()] ?? character.name),
  );
  if (!speaker) continue;

  const out = `${publicDir}${speaker.pixel.replace(/^\//, "")}`;
  const before = existsSync(out) ? statSync(out).size : 0;

  const image = await fetch(character.image_url, {
    signal: AbortSignal.timeout(30_000),
  });
  if (!image.ok) {
    console.warn(`  ${speaker.name}: image HTTP ${image.status}, skipped`);
    continue;
  }
  const source = Buffer.from(await image.arrayBuffer());

  // -trim drops the transparent margin the crop leaves, so every figure is
  // scaled by its own height rather than by whatever padding it arrived with.
  // Downscaled with the default filter, not point: at these ratios nearest
  // leaves neighbouring art pixels different widths, and that jitter reads
  // worse than a slightly softer edge.
  //
  // -colors 256 is the whole file-size story: the downscale leaves ~9500
  // colours in art drawn from a few dozen, and quantising takes a sprite from
  // ~45KB to ~12KB at an RMSE under 2%. Not PNG8, which would flatten alpha to
  // on/off and leave the soft edge the resize just created looking chewed;
  // a palette with tRNS keeps enough levels to hide it.
  const sprite = execFileSync(
    "magick",
    ["-", "-trim", "+repage", "-resize", "x240", "-background", "none",
     "-gravity", "south", "-extent", "256x256",
     "-strip", "-colors", "256", "-define", "png:compression-level=9", "png:-"],
    { input: source, maxBuffer: 32 * 1024 * 1024 },
  );

  console.log(
    `  ${speaker.name}: ${speaker.pixel} ${(before / 1024).toFixed(0)}KB -> ${(sprite.length / 1024).toFixed(0)}KB${dryRun ? " (dry run)" : ""}`,
  );
  if (!dryRun) writeFileSync(out, sprite);
  written += 1;
}

console.log(
  `speaker-sprites: ${written} of ${wanted.size} roster sprites have a character on clouds.sfruby.com` +
    (KEEP_EXISTING.length ? `; keeping the existing art for ${KEEP_EXISTING.join(", ")}` : ""),
);
