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

const SPRITES = {
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
