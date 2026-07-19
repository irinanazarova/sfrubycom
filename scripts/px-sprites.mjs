// Generates the small hand-drawn item sprites in public/ (px-envelope.png,
// px-ticket.png) used by the interactive islands. Pixel maps use the logo
// palette (public/logo8bit.png). The coin (public/px-coin.png) is not drawn
// here; it is the '26 coin cut from the logo itself.
//
// Usage: node scripts/px-sprites.mjs   (requires `magick` on PATH)
import { writeFileSync, unlinkSync } from "node:fs";
import { execSync } from "node:child_process";
import { spriteColors } from "../src/design/tokens.mjs";

const PALETTE = spriteColors;

// Clouds are built rather than hand-typed: a union of circles clipped to a
// flat underside, shaded on the bottom rows, outlined where the fill meets
// air. Same style as the hand-drawn px-cloud, at sizes that read as depth
// when a hero scatters all three.
function cloud(w, h, base, blobs) {
  const inside = (x, y) =>
    x >= 0 && x < w && y >= 0 && y <= base &&
    blobs.some(([cx, cy, r]) => (x - cx) ** 2 + (y - cy) ** 2 <= r * r);
  const rows = [];
  for (let y = 0; y < h; y++) {
    let row = "";
    for (let x = 0; x < w; x++) {
      if (!inside(x, y)) row += ".";
      else if (
        !inside(x - 1, y) || !inside(x + 1, y) || !inside(x, y - 1) || !inside(x, y + 1)
      )
        row += "K";
      else if (y >= base - 2) row += "S";
      else row += "W";
    }
    rows.push(row);
  }
  return rows;
}

// Ground tile: a grass lip over stone, in the island's own colours (no ink
// outline, like the island). Repeats horizontally; .px-ground stretches it.
function ground() {
  const w = 32, h = 24;
  const rows = [];
  for (let y = 0; y < h; y++) {
    let row = "";
    for (let x = 0; x < w; x++) {
      const scallop = (x % 8 === 3 || x % 8 === 4) ? 1 : 0;
      if (y === 0) row += x % 5 === 2 ? "N" : "n";
      else if (y < 5 + scallop) row += (y === 4 + scallop || (x % 8 === 0 && y > 2)) ? "m" : "N";
      else if (y < 7 + scallop) row += "d";
      else {
        // stone with a brick-ish break every 6 rows and a few highlights
        const brick = (y - 7) % 6;
        const shift = Math.floor((y - 7) / 6) % 2 === 0 ? 0 : 5;
        if (brick === 5) row += "d";
        else if ((x + shift) % 10 === 0) row += "d";
        else if (brick === 0 && (x + shift) % 10 === 1) row += "T";
        else row += "t";
      }
    }
    rows.push(row);
  }
  return rows;
}

// Party balloon: a filled oval with a glint, a knot and a wavy string. One
// map, three colourways, so the celebration reads in the palette's own tones.
function balloon(fill, shade, light) {
  const map = [
    "....KKKK....",
    "...KFFFFK...",
    "..KFLLFFFK..",
    ".KFFLFFFFFK.",
    ".KFFFFFFFFK.",
    ".KFFFFFFFFK.",
    ".KFFFFFFFFK.",
    ".KSFFFFFFSK.",
    "..KSFFFFSK..",
    "...KSSSSK...",
    "....KKKK....",
    ".....KK.....",
    "....KSSK....",
    ".....KK.....",
    "......K.....",
    ".....K......",
    "......K.....",
    ".....K......",
  ];
  return map.map((row) =>
    row.replace(/F/g, fill).replace(/S/g, shade).replace(/L/g, light),
  );
}

// San Francisco skyline, the silhouette over the footer's night sky. A
// 192px tile that repeats horizontally: Coit Tower on Telegraph Hill, the
// Transamerica Pyramid, Salesforce Tower, and plain blocks between them with
// a few lit windows. Everything is the night navy (D) with gold windows (G),
// so it reads as the city at dusk against the evening band above it.
function skyline() {
  const w = 192, h = 40, ground = h - 1;
  const grid = Array.from({ length: h }, () => Array(w).fill("."));
  const fill = (x0, x1, top) => {
    for (let x = Math.max(0, x0); x <= Math.min(w - 1, x1); x++)
      for (let y = Math.max(0, top); y <= ground; y++) grid[y][x] = "D";
  };
  // deterministic "random" so the tile is the same on every run
  const lit = (x, y) => ((x * 73856093) ^ (y * 19349663)) % 7 === 0;
  const block = (x, bw, bh) => {
    const top = ground - bh + 1;
    fill(x, x + bw - 1, top);
    for (let y = top + 2; y < ground - 1; y += 3)
      for (let xx = x + 1; xx < x + bw - 1; xx += 2)
        if (lit(xx, y)) grid[y][xx] = "G";
  };
  // Telegraph Hill and Coit Tower
  for (let x = 2; x <= 30; x++) {
    const t = (x - 16) / 14;
    fill(x, x, ground - Math.round(7 * Math.sqrt(Math.max(0, 1 - t * t))));
  }
  fill(15, 17, ground - 21); // the column
  fill(14, 18, ground - 21); // crown
  grid[ground - 22][16] = "D";
  // blocks, left to right
  [[32, 7, 12], [40, 5, 17], [46, 8, 10], [55, 6, 21]].forEach((b) => block(...b));
  // Transamerica Pyramid: tapers to a spire, with the two small wings
  const px = 68, base = 6;
  for (let y = ground; y >= ground - 30; y--) {
    const half = Math.max(0, Math.round(base * (y - (ground - 30)) / 30));
    fill(px - half, px + half, y);
  }
  fill(px, px, ground - 34);
  fill(px - 3, px - 2, ground - 20);
  fill(px + 2, px + 3, ground - 20);
  [[77, 7, 15], [85, 9, 24], [95, 6, 13], [102, 8, 19]].forEach((b) => block(...b));
  // Salesforce Tower: the tallest, with a rounded crown
  const sx = 112, sw = 9, sh = 37;
  fill(sx, sx + sw - 1, ground - sh + 4);
  fill(sx + 1, sx + sw - 2, ground - sh + 2);
  fill(sx + 2, sx + sw - 3, ground - sh + 1);
  fill(sx + 3, sx + sw - 4, ground - sh);
  for (let y = ground - sh + 7; y < ground - 1; y += 3)
    for (let xx = sx + 2; xx < sx + sw - 2; xx += 2) if (lit(xx, y)) grid[y][xx] = "G";
  [[122, 6, 22], [129, 8, 16], [138, 5, 26], [144, 7, 11], [152, 9, 18], [162, 6, 9], [169, 8, 14], [178, 6, 20], [185, 7, 8]].forEach((b) => block(...b));
  // an antenna on the 26-high block
  fill(140, 140, ground - 30);
  return grid.map((r) => r.join(""));
}

const SPRITES = {
  "px-skyline": skyline(),
  "px-balloon-ruby": balloon("R", "r", "L"),
  "px-balloon-gold": balloon("G", "g", "W"),
  "px-balloon-blue": balloon("B", "b", "A"),
  // Hot-air balloon: striped envelope, a basket on two ropes. Floats over
  // the Pier map.
  "px-hotair": [
    ".......KKKKKKKK.......",
    ".....KKRRGGRRGGKK.....",
    "....KRRRGGRRGGRRK.....",
    "...KRRRRGGRRGGRRRK....",
    "..KRRRRRGGRRGGRRRRK...",
    "..KRRRRRGGRRGGRRRRK...",
    ".KRRRRRRGGRRGGRRRRRK..",
    ".KRRRRRRGGRRGGRRRRRK..",
    ".KRRRRRRGGRRGGRRRRRK..",
    ".KrRRRRRGGRRGGRRRRrK..",
    ".KrRRRRRGGRRGGRRRRrK..",
    "..KrRRRRGGRRGGRRRrK...",
    "..KrrRRRGGRRGGRRrrK...",
    "...KrrRRGGRRGGRRrK....",
    "....KrrRGGRRGGrrK.....",
    ".....KKrrGGGGrrKK.....",
    ".......KKrrrrKK.......",
    ".........KKKK.........",
    "........K....K........",
    ".......K......K.......",
    ".......KKKKKKKK.......",
    ".......KggggggK.......",
    ".......KgGGGGgK.......",
    ".......KKKKKKKK.......",
  ],
  "px-cloud-md": cloud(48, 20, 16, [[11, 12, 7], [22, 9, 9], [34, 11, 8], [41, 13, 5]]),
  "px-cloud-lg": cloud(72, 28, 22, [[13, 16, 9], [28, 11, 12], [45, 13, 11], [59, 17, 8], [65, 19, 5]]),
  "px-ground": ground(),
  // four-point star, gold with a white core: the select-screen sparkle
  "px-sparkle": [
    "...W...",
    "...G...",
    "..GWG..",
    "WGWWWGW",
    "..GWG..",
    "...G...",
    "...W...",
  ],
  "px-envelope": [
    "........................",
    ".KKKKKKKKKKKKKKKKKKKKKK.",
    ".KWWWWWWWWWWWWWWWWWWWWK.",
    ".KWKWWWWWWWWWWWWWWWWKWK.",
    ".KWWKKWWWWWWWWWWWWKKWWK.",
    ".KWWWWKKWWWWWWWWKKWWWWK.",
    ".KWWWWWWKKWWWWKKWWWWWWK.",
    ".KWWWWWWWWKKKKWWWWWWWWK.",
    ".KWSWWWWWWWWWWWWWWWWSWK.",
    ".KWSSWWWWWWWWWWWWWWSSWK.",
    ".KWSSSSSSSSSSSSSSSSSSWK.",
    ".KKKKKKKKKKKKKKKKKKKKKK.",
    "........................",
  ],
  "px-ticket": [
    "..........................",
    ".KKKKKKKKKKKKKKKKKKKKKKKK.",
    ".KLLLLLLLLKWKLLLLLLLLLLLK.",
    ".KLRRRRRRRKrKRRRRRRRRRRLK.",
    ".KLRRWWRRRKWKRRWWWWWRRRLK.",
    ".KLRRRRRRRKrKRRRRRRRRRRLK.",
    ".KLRRRRRRRKWKRRRRRRRRRRLK.",
    ".KLRRWWRRRKrKRRWWWWWRRRLK.",
    ".KrRRRRRRRKWKRRRRRRRRRRrK.",
    ".KrrrrrrrrKrKrrrrrrrrrrrK.",
    ".KKKKKKKKKKKKKKKKKKKKKKKK.",
    "..........................",
  ],
  "px-cloud": [
    "..................................",
    "..........KKKKK...................",
    "........KKWWWWWKK.....KKKK........",
    "......KKWWWWWWWWWK..KKWWWWK.......",
    ".....KWWWWWWWWWWWWKKWWWWWWWK......",
    "...KKWWWWWWWWWWWWWWWWWWWWWWWKK....",
    "..KWWWWWWWWWWWWWWWWWWWWWWWWWWWK...",
    ".KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWK..",
    ".KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWK..",
    ".KWSSWWWWWWWWWWWWWWWWWWWWWWWSSWK..",
    "..KSSSSWWWWWWWWWWWWWWWWWWWSSSSK...",
    "...KKSSSSSSSSSSSSSSSSSSSSSSSKK....",
    ".....KKKKKKKKKKKKKKKKKKKKKKK......",
    "..................................",
  ],
  "px-ruby": [
    "..............",
    "...KKKKKKKK...",
    "..KLWWRRRRRK..",
    ".KLRWRRRRRRRK.",
    "KKRRRRRRRRRRKK",
    ".KrRRRRRRRRrK.",
    "..KrRRRRRRrK..",
    "...KrRRRRrK...",
    "....KrRRrK....",
    ".....KrrK.....",
    "......KK......",
    "..............",
  ],
  "px-snake": [
    "..................",
    "..KKKK............",
    ".KNNWNK...........",
    "RKNNNNK...........",
    "..KNnNK...........",
    "..KNnNK...KKKKK...",
    "..KNnNK..KNnnnNK..",
    "..KNnNK.KNnNNNnNK.",
    "..KNnNNKNNmK.KNNK.",
    "...KNNNNNmK..KNK..",
    "....KKKKKK...KK...",
    "..................",
  ],
  "px-heart": [
    "..............",
    "..KKK....KKK..",
    ".KLLRK..KRRRK.",
    "KLLRRRKKRRRRRK",
    "KLRRRRRRRRRRRK",
    "KRRRRRRRRRRRRK",
    ".KRRRRRRRRRRK.",
    "..KrRRRRRRrK..",
    "...KrRRRRrK...",
    "....KrRRrK....",
    ".....KrrK.....",
    "......KK......",
    "..............",
  ],
  "px-play": [
    "..............",
    ".KKKKKKKKKKKK.",
    ".KWWWWWWWWWWK.",
    ".KWWWRWWWWWWK.",
    ".KWWWRRWWWWWK.",
    ".KWWWRRRWWWWK.",
    ".KWWWRRRRWWWK.",
    ".KWWWRRRWWWWK.",
    ".KWWWRRWWWWWK.",
    ".KWWWRWWWWWWK.",
    ".KWWWWWWWWWWK.",
    ".KKKKKKKKKKKK.",
    "..............",
  ],
  // Matz (MINASWAN): a warm, friendly caricature drawn from a real photo — full
  // tousled dark hair (with a cowlick) framing an OVAL head that tapers to a
  // rounded chin (a square head reads robotic), oval glasses, big eyes with a W
  // glint + K pupil looking at you, coral cheeks, a broad smile, and a soft-brown
  // (p, not black) mustache + goatee. Warm skin (P/p) throughout. Sits friendly
  // next to the coral ticket/heart on /scholarship.
  "px-matz": [
    "..................",
    ".........K........",
    "......KKKKKK......",
    "....KKKKKKKKKK....",
    "...KKKKKKKKKKKK...",
    "..KKKKKKKKKKKKKK..",
    "..KKKKKKKKKKKKKK..",
    "..KKKKPPPPPPKKKK..",
    "..KPPKKPPPPKKPPK..",
    "..KPKWWKPPKWWKPK..",
    "..KPKWKKPPKKWKPK..",
    "..KPPKKPPPPKKPPK..",
    "..KPPPPPPPPPPPPK..",
    "..KRPPPppppPPPRK..",
    "..KPPPKPPPPKPPPK..",
    "..KPPPPKKKKPPPPK..",
    "..KPPPPPppPPPPpK..",
    "...KPPPPPPPPppK...",
    "....KPPPPPPPPK....",
    ".....KKKKKKKK.....",
    "..................",
  ],
  "px-briefcase": [
    "..................",
    "......KKKKKK......",
    "......KggggK......",
    ".KKKKKKKKKKKKKKKK.",
    ".KGGGGGGGGGGGGGGK.",
    ".KGGGGGGKKGGGGGGK.",
    ".KggggggKKggggggK.",
    ".KggggggggggggggK.",
    ".KggggggggggggggK.",
    ".KKKKKKKKKKKKKKKK.",
    "..................",
  ],
};

function toPam(rows) {
  const h = rows.length;
  const w = rows[0].length;
  const buf = Buffer.alloc(w * h * 4);
  rows.forEach((row, y) => {
    if (row.length !== w) throw new Error(`row ${y} width ${row.length} != ${w}`);
    [...row].forEach((ch, x) => {
      const hex = PALETTE[ch];
      if (hex === undefined) throw new Error(`unknown pixel '${ch}'`);
      const i = (y * w + x) * 4;
      if (hex === null) return; // stays transparent (zero-filled)
      const n = parseInt(hex.slice(1), 16);
      buf[i] = (n >> 16) & 255;
      buf[i + 1] = (n >> 8) & 255;
      buf[i + 2] = n & 255;
      buf[i + 3] = 255;
    });
  });
  const header = `P7\nWIDTH ${w}\nHEIGHT ${h}\nDEPTH 4\nMAXVAL 255\nTUPLTYPE RGB_ALPHA\nENDHDR\n`;
  return Buffer.concat([Buffer.from(header, "ascii"), buf]);
}

for (const [name, rows] of Object.entries(SPRITES)) {
  const tmp = `/tmp/${name}.pam`;
  writeFileSync(tmp, toPam(rows));
  // compression-level 9 + strip: the committed px-*.png are kept small, and
  // plain `magick` would inflate every sprite this script touches.
  execSync(`magick ${tmp} -define png:compression-level=9 -strip public/${name}.png`);
  unlinkSync(tmp);
  console.log(`public/${name}.png  ${rows[0].length}x${rows.length}`);
}
