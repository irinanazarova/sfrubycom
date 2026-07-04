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

const SPRITES = {
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
  execSync(`magick ${tmp} public/${name}.png`);
  unlinkSync(tmp);
  console.log(`public/${name}.png  ${rows[0].length}x${rows.length}`);
}
