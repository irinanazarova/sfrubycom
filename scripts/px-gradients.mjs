// Regenerates the 8-bit dithered gradient skies in public/ (px-sky-day.png,
// px-sky-deep.png, px-royal.png) from the logo palette (public/logo8bit.png).
// Vertical ordered-dither (Bayer 4x4) blends between adjacent palette stops,
// written as tiny PPMs and converted with ImageMagick.
//
// Usage: node scripts/px-gradients.mjs   (requires `magick` on PATH)
import { writeFileSync, unlinkSync } from "node:fs";
import { execSync } from "node:child_process";

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];
const W = 8;

function ppm(height, hexes) {
  const pal = hexes.map((h) => {
    const n = parseInt(h.replace("#", ""), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  });
  const K = pal.length;
  let body = "";
  for (let y = 0; y < height; y++) {
    const t = (y / (height - 1)) * (K - 1);
    const i = Math.min(Math.floor(t), K - 2);
    const f = t - i;
    for (let x = 0; x < W; x++) {
      const th = (BAYER[y % 4][x % 4] + 0.5) / 16;
      const c = pal[f > th ? i + 1 : i];
      body += `${c[0]} ${c[1]} ${c[2]} `;
    }
    body += "\n";
  }
  return `P3\n${W} ${height}\n255\n${body}`;
}

const GRADIENTS = {
  // day sky: conference + sponsor heroes
  "px-sky-day": { height: 384, stops: ["#62bbee", "#3ea3dd", "#2b86bd", "#236a97"] },
  // deep sky: homepage hero, landing on the news masthead navy (#071f56)
  "px-sky-deep": {
    height: 576,
    stops: ["#62bbee", "#3ea3dd", "#2b86bd", "#236a97", "#1d5378", "#123a57", "#071f56"],
  },
  // dusk: interior page heroes (jobs, videos, startups, host)
  "px-sky-dusk": { height: 256, stops: ["#236a97", "#1d5378", "#123a57", "#071f56"] },
  // royal: notify/CTA sections (the SAN FRANCISCO badge blues)
  "px-royal": { height: 192, stops: ["#0047eb", "#002d95"] },
};

for (const [name, { height, stops }] of Object.entries(GRADIENTS)) {
  const tmp = `/tmp/${name}.ppm`;
  writeFileSync(tmp, ppm(height, stops));
  execSync(`magick ${tmp} public/${name}.png`);
  unlinkSync(tmp);
  console.log(`public/${name}.png  ${W}x${height}  ${stops.length} stops`);
}
