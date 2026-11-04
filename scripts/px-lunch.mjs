// Draws the /lunch map and its item sprites.
//
//   node scripts/px-lunch.mjs   (requires `magick` on PATH; not part of the build)
//
// Writes public/px-lunch-map.png, public/lunch/*.png and
// src/data/lunch-map-2026.json (where each pin and street label sits, as a
// percentage of the image). The map is real geometry drawn the way the Pier's
// map looks: OpenStreetMap streets and building footprints, in an isometric
// projection aligned to the street grid, as an island floating in the sky.
// scripts/data/hayes-valley-osm.json is a trimmed extract of OSM, so a redraw
// needs no network. Colors come from the token registry. Also prints each
// place's walk, for `walk` in src/data/lunch-2026.js.
import { readFileSync, writeFileSync, mkdirSync, unlinkSync } from "node:fs";
import { execSync } from "node:child_process";
import { palette, spriteColors } from "../src/design/tokens.mjs";
import { places, afterTalks, VENUE } from "../src/data/lunch-2026.js";

const osm = JSON.parse(readFileSync("scripts/data/hayes-valley-osm.json", "utf8"));
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const c = (h) => hex(h);
const INK = c(palette.ink);
const hash = (s) => {
  let h = 2166136261;
  for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
};

// --- Geometry: metres on the street grid, origin at the SFJAZZ door --------
// Hayes Valley's grid runs 9 degrees off north (bearing of Franklin St in OSM).
const SIN = Math.sin((9.05 * Math.PI) / 180);
const COS = Math.cos((9.05 * Math.PI) / 180);
const toEN = (lat, lon) => {
  const dx = (lon - VENUE.lon) * Math.cos((VENUE.lat * Math.PI) / 180) * 111320;
  const dy = (lat - VENUE.lat) * 110950;
  return [dx * COS + dy * SIN, -dx * SIN + dy * COS];
};
const BOUNDS = { e0: -425, e1: 175, n0: -200, n1: 172 };
const K = 0.8; // screen pixels per metre along the ground
const Z = 0.62; // screen pixels per metre of building height
const TOP = 46; // sky above the island's back corner, for the tall buildings
const SIDE = 16; // pixels of rock under the island
const PAD = 10;
const OX = PAD - K * (BOUNDS.e0 + BOUNDS.n0);
const OY = TOP - (K * (BOUNDS.e0 - BOUNDS.n1)) / 2;
const W = Math.ceil(PAD * 2 + K * (BOUNDS.e1 + BOUNDS.n1 - BOUNDS.e0 - BOUNDS.n0));
const H = Math.ceil(TOP + (K * (BOUNDS.e1 - BOUNDS.n0 - BOUNDS.e0 + BOUNDS.n1)) / 2 + SIDE + 6);
const project = ([e, n], z = 0) => [OX + K * (e + n), OY + (K * (e - n)) / 2 - z * Z];

// --- Raster ----------------------------------------------------------------
const buf = new Uint8Array(W * H * 4);
const put = (x, y, col) => {
  x = Math.round(x);
  y = Math.round(y);
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = (y * W + x) * 4;
  buf[i] = col[0];
  buf[i + 1] = col[1];
  buf[i + 2] = col[2];
  buf[i + 3] = 255;
};
const fill = (pts, paint) => {
  if (pts.length < 3) return;
  const ys = pts.map((p) => p[1]);
  for (let y = Math.max(0, Math.floor(Math.min(...ys))); y <= Math.min(H - 1, Math.ceil(Math.max(...ys))); y++) {
    const xs = [];
    for (let i = 0; i < pts.length; i++) {
      const [ax, ay] = pts[i];
      const [bx, by] = pts[(i + 1) % pts.length];
      if (ay <= y + 0.5 !== by <= y + 0.5) xs.push(ax + ((y + 0.5 - ay) / (by - ay)) * (bx - ax));
    }
    xs.sort((a, b) => a - b);
    for (let i = 0; i + 1 < xs.length; i += 2) {
      for (let x = Math.round(xs[i]); x < Math.round(xs[i + 1]); x++) {
        put(x, y, typeof paint === "function" ? paint(x, y) : paint);
      }
    }
  }
};
const line = ([x0, y0], [x1, y1], col) => {
  const n = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0))) || 1;
  for (let i = 0; i <= n; i++) put(x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n, col);
};

// Sutherland-Hodgman against the island's rectangle, in grid metres.
const clip = (poly) => {
  const edges = [
    [(p) => p[0] >= BOUNDS.e0, 0, BOUNDS.e0],
    [(p) => p[0] <= BOUNDS.e1, 0, BOUNDS.e1],
    [(p) => p[1] >= BOUNDS.n0, 1, BOUNDS.n0],
    [(p) => p[1] <= BOUNDS.n1, 1, BOUNDS.n1],
  ];
  let out = poly;
  for (const [inside, axis, v] of edges) {
    const input = out;
    out = [];
    input.forEach((a, i) => {
      const b = input[(i + 1) % input.length];
      if (inside(a)) out.push(a);
      if (inside(a) !== inside(b)) {
        const t = (v - a[axis]) / (b[axis] - a[axis]);
        out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
      }
    });
    if (!out.length) return out;
  }
  return out;
};

// --- Ground ----------------------------------------------------------------
const corners = [
  [BOUNDS.e0, BOUNDS.n0],
  [BOUNDS.e1, BOUNDS.n0],
  [BOUNDS.e1, BOUNDS.n1],
  [BOUNDS.e0, BOUNDS.n1],
];
const GRASS = c(palette.grass[500]);
const GRASS_LIGHT = c(palette.grass[300]);
const GRASS_DARK = c(palette.grass[700]);
const ROCK = c(palette.stone[500]);
const ROCK_LIGHT = c(palette.stone[300]);
const ROCK_DARK = c(palette.stone[700]);

// The rock under the two front edges: a grass lip, dithered stone, a broken
// bottom edge, the island sprite's own colors.
const skirt = (a, b, shade) => {
  const [ax, ay] = project(a);
  const [bx, by] = project(b);
  for (let x = Math.round(ax); x <= Math.round(bx); x++) {
    const top = ay + ((x - ax) / (bx - ax || 1)) * (by - ay);
    const depth = SIDE - (hash(x >> 1) % 7);
    for (let d = 0; d < depth; d++) {
      const col =
        d < 3 ? (d === 2 ? GRASS_DARK : GRASS)
        : (x + d) % 5 === 0 ? ROCK_LIGHT
        : (x * 3 + d) % 7 === 0 ? ROCK_DARK
        : shade;
      put(x, top + d, col);
    }
  }
};
skirt(corners[0], corners[1], ROCK);
skirt(corners[1], corners[2], ROCK_DARK);
fill(corners.map((p) => project(p)), (x, y) => ((x * 7 + y * 13) % 41 === 0 ? GRASS_LIGHT : GRASS));

// Parks, then the trees on them after the buildings.
const parks = osm.parks.map((p) => clip(p.pts.map(([la, lo]) => toEN(la, lo)))).filter((p) => p.length > 2);
for (const p of parks) fill(p.map((q) => project(q)), (x, y) => ((x + y) % 6 === 0 ? GRASS_LIGHT : GRASS));

// --- Streets ---------------------------------------------------------------
const SIDEWALK = c(palette.dark[300]);
const ASPHALT = c(palette.dark[600]);
const DASH = c(palette.gold[300]);
const WIDTHS = { major: 15, street: 11, alley: 6 };
const ALLEYS = /Linden|Hickory|Ivy|Rose|Lily|Birch|Lech|Stevenson|Colton|Colusa|Brady|Chase/;
const MAJOR = /Fell|Oak|Gough|Franklin|Market/;
const clipSegment = (a, b) => {
  const c0 = clip([a, b, b]);
  if (c0.length < 2) return null;
  // The degenerate triangle comes back as its clipped end points.
  const far = c0.reduce((m, p) => (Math.hypot(p[0] - c0[0][0], p[1] - c0[0][1]) > Math.hypot(m[0] - c0[0][0], m[1] - c0[0][1]) ? p : m), c0[0]);
  return Math.hypot(far[0] - c0[0][0], far[1] - c0[0][1]) < 0.5 ? null : [c0[0], far];
};
const roads = osm.roads.flatMap((r) => {
  // Octavia is several parallel ways in OSM, so each one draws narrow.
  const width = ALLEYS.test(r.name) || /Octavia/.test(r.name) ? WIDTHS.alley : MAJOR.test(r.name) ? WIDTHS.major : WIDTHS.street;
  const pts = r.pts.map(([la, lo]) => toEN(la, lo));
  const segs = [];
  for (let i = 0; i + 1 < pts.length; i++) {
    const s = clipSegment(pts[i], pts[i + 1]);
    if (s) segs.push({ name: r.name, width, a: s[0], b: s[1] });
  }
  return segs;
});
const band = (a, b, w) => {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const ex = ((b[0] - a[0]) / len) * (w / 2);
  const ey = ((b[1] - a[1]) / len) * (w / 2);
  const nx = -ey;
  const ny = ex;
  return clip([
    [a[0] - ex + nx, a[1] - ey + ny],
    [b[0] + ex + nx, b[1] + ey + ny],
    [b[0] + ex - nx, b[1] + ey - ny],
    [a[0] - ex - nx, a[1] - ey - ny],
  ]).map((p) => project(p));
};
// No sidewalks on Octavia's parallel ways: they read as zebra stripes, and the
// boulevard's medians are planted.
for (const s of roads) if (!/Octavia/.test(s.name)) fill(band(s.a, s.b, s.width + 6), SIDEWALK);
for (const s of roads) fill(band(s.a, s.b, s.width), ASPHALT);
for (const s of roads) {
  if (s.width !== WIDTHS.major) continue;
  const len = Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1]);
  for (let d = 4; d < len; d += 22) {
    const t = d / len;
    const t2 = Math.min(1, (d + 6) / len);
    line(
      project([s.a[0] + (s.b[0] - s.a[0]) * t, s.a[1] + (s.b[1] - s.a[1]) * t]),
      project([s.a[0] + (s.b[0] - s.a[0]) * t2, s.a[1] + (s.b[1] - s.a[1]) * t2]),
      DASH,
    );
  }
}

// --- Buildings -------------------------------------------------------------
const WALLS = [
  palette.ruby[300], palette.sky[300], palette.gold[300], palette.skin[500],
  palette.cloudshade, palette.ruby[200], palette.sky[200], palette.gold[100],
  palette.grass[300], palette.indigo[300], palette.pink[300], palette.dark[200],
].map(c);
const ROOFS = [palette.stone[700], palette.stone[500], palette.ruby[700], palette.sky[700], palette.dark[600], palette.skin[700]].map(c);
const GLASS = c(palette.sky[800]);
const inPoly = ([x, y], poly) => {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};
const centroid = (p) => [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length];
const buildings = osm.buildings
  .map((b) => {
    const pts = clip(b.pts.map(([la, lo]) => toEN(la, lo)));
    return pts.length > 2 ? { ...b, en: pts, c: centroid(pts) } : null;
  })
  .filter(Boolean);

// A place's building: the footprint its address falls in, or the nearest one.
const highlight = new Map();
const everyone = [...places, ...afterTalks];
const isEvening = (p) => afterTalks.includes(p);
for (const p of everyone) {
  const at = toEN(p.lat, p.lon);
  let b = buildings.find((x) => inPoly(at, x.en));
  if (!b) b = buildings.reduce((m, x) => (Math.hypot(x.c[0] - at[0], x.c[1] - at[1]) < Math.hypot(m.c[0] - at[0], m.c[1] - at[1]) ? x : m));
  // Biergarten is an open lot, so its nearest building is someone else's.
  if (p.id !== "biergarten" && !highlight.has(b)) highlight.set(b, p);
  p._b = b;
  p._at = at;
}
const isVenue = (b) => b.name === "SFJAZZ Center";

const drawBuilding = (b) => {
  const seed = hash(b.name || b.c.join());
  const star = highlight.has(b);
  const venue = isVenue(b);
  const height = venue ? 26 : Math.min(b.h ?? 11 + (seed % 5) * 2, star ? 16 : 22);
  const wall = venue ? c(palette.white) : star ? c(palette.gold[100]) : WALLS[seed % WALLS.length];
  const roof = venue ? c(palette.dark[200])
    : star ? c(isEvening(highlight.get(b)) ? palette.indigo[500] : palette.ruby[500])
    : ROOFS[(seed >>> 5) % ROOFS.length];
  const outline = mix(roof, INK, 0.55);
  // Winding: make the polygon counter-clockwise so an edge's outward side is known.
  const en = b.en;
  const area = en.reduce((s, p, i) => {
    const q = en[(i + 1) % en.length];
    return s + p[0] * q[1] - q[0] * p[1];
  }, 0);
  const ring = area > 0 ? en : [...en].reverse();
  ring.forEach((a, i) => {
    const q = ring[(i + 1) % ring.length];
    const nx = q[1] - a[1];
    const ny = -(q[0] - a[0]);
    // The viewer stands to the south-east, so walls facing that way show.
    if (nx - ny <= 0) return;
    const facingE = nx > -ny;
    const face = facingE ? mix(wall, INK, 0.04) : mix(wall, INK, 0.28);
    const quad = [project(a), project(q), project(q, height), project(a, height)];
    const glassy = venue && !facingE;
    fill(quad, (x, y) => {
      if (glassy) return (x % 4 === 0 || y % 4 === 0) ? c(palette.dark[300]) : c(palette.sky[500]);
      if (venue) return (x % 5 < 3 && y % 5 < 2) ? c(palette.sky[300]) : face;
      return x % 3 === 1 && y % 4 === 1 ? GLASS : face;
    });
    line(project(a), project(a, height), mix(face, INK, 0.4));
  });
  const top = ring.map((p) => project(p, height));
  fill(top, venue ? (x, y) => ((x + y) % 7 === 0 ? c(palette.dark[300]) : roof) : roof);
  top.forEach((p, i) => line(p, top[(i + 1) % top.length], star ? c(palette.gold[500]) : outline));
};

// A round-topped tree, drawn from the trunk up.
const tree = ([x, y]) => {
  x = Math.round(x);
  y = Math.round(y);
  put(x, y, c(palette.skin[700]));
  put(x, y - 1, c(palette.skin[700]));
  [[-1, -2], [0, -2], [1, -2], [-2, -3], [-1, -3], [0, -3], [1, -3], [2, -3], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [-1, -5], [0, -5], [1, -5]]
    .forEach(([dx, dy]) => put(x + dx, y + dy, dy > -4 && dx >= 0 ? GRASS_DARK : dx < 0 && dy < -3 ? GRASS_LIGHT : GRASS));
};
const trees = [];
for (const p of parks) {
  const es = p.map((q) => q[0]);
  const ns = p.map((q) => q[1]);
  for (let e = Math.min(...es); e < Math.max(...es); e += 15) {
    for (let n = Math.min(...ns); n < Math.max(...ns); n += 15) {
      const at = [e + (hash(`${e}${n}`) % 7), n + (hash(`${n}${e}`) % 7)];
      if (inPoly(at, p) && !buildings.some((b) => inPoly(at, b.en))) trees.push(at);
    }
  }
}

// Painter's order: whatever is further from the viewer goes down first.
const order = [
  ...buildings.map((b) => ({ d: b.c[0] - b.c[1], draw: () => drawBuilding(b) })),
  ...trees.map((t) => ({ d: t[0] - t[1], draw: () => tree(project(t)) })),
].sort((a, b) => a.d - b.d);
order.forEach((o) => o.draw());

// --- Pins: where each pole starts on the roof and where the HTML plate sits ---
// The poles are drawn over the image in the page, so a set can be hidden with its
// pins. Each set is spread by hand, so plates never cover each other at 390 wide.
const SPREAD = {
  pacifico: [0, 54],
  pokebola: [42, -46],
  "lers-ros": [78, -87],
  nojo: [88, -15],
  "dumpling-home": [0, -51],
  "rt-rotisserie": [0, -41],
  arbor: [76, -108],
  "the-bird": [42, -86],
  "a-mano": [-1, -59],
  sforno: [89, -92],
  "double-decker": [67, -95],
  "la-boulangerie": [43, -87],
  souvla: [18, -90],
  patxis: [-54, -90],
  gioia: [-71, -62],
  "linden-room": [-16, -37],
  absinthe: [38, -40],
  "afterwork-bar": [-28, -52],
  "ebb-and-flow": [50, -83],
  "happy-crane": [-14, -59],
  biergarten: [0, -28],
};
const pct = (v, of) => +((v / of) * 100).toFixed(2);
const pins = {};
for (const p of everyone) {
  const [bx, by] = project(p._at, 14);
  const [dx, dy] = SPREAD[p.id] ?? [0, -22];
  const [fx, fy] = [bx + dx, by + dy];
  pins[p.id] = {
    x: pct(fx, W),
    y: pct(fy, H),
    bx: Math.round(bx),
    by: Math.round(by),
    fx: Math.round(fx),
    fy: Math.round(fy),
  };
  console.log(`${p.id.padEnd(15)} walk ${Math.ceil((Math.abs(p._at[0]) + Math.abs(p._at[1])) / 75)} min`);
}
const venueB = buildings.find(isVenue);
const [vx, vy] = project(venueB.c, 26);
pins.venue = { x: pct(vx, W), y: pct(vy - 14, H) };

// Street names, placed on the road and turned to run along it.
const label = (text, e, n, along) => {
  const [x, y] = project([e, n]);
  return { text, x: pct(x, W), y: pct(y, H), along };
};
const streets = [
  label("Hayes", -255, 57, "e"),
  label("Fell", -215, -36, "e"),
  label("Oak", -250, -158, "e"),
  label("Franklin", 8, 108, "n"),
  label("Gough", -112, 96, "n"),
  label("Laguna", -345, -90, "n"),
];

mkdirSync("public/lunch", { recursive: true });
const writeRaw = (file, w, h, bytes) => {
  const tmp = `${file}.rgba`;
  writeFileSync(tmp, bytes);
  execSync(`magick -size ${w}x${h} -depth 8 rgba:${tmp} -define png:compression-level=9 -strip ${file}`);
  unlinkSync(tmp);
};
writeRaw("public/px-lunch-map.png", W, H, buf);
writeFileSync(
  "src/data/lunch-map-2026.json",
  `${JSON.stringify({ width: W, height: H, pins, streets }, null, 2)}\n`,
);
console.log(`map ${W}x${H}`);

// --- Item sprites ----------------------------------------------------------
const SPRITES = {
  drumstick: [
    "............", ".....KKKK...", "....KPPPPK..", "...KPPPPPPK.", "...KPPPPPpK.", "...KPPPPpK..",
    "..KKPPppK...", ".KWKKKKK....", "KWWK........", ".KKWK.......", "...K........", "............",
  ],
  dumpling: [
    "............", "............", "....K.K.K...", "...KWKWKWK..", "..KWWWWWWWK.", ".KWWWWWWWWWK",
    ".KWWWWWWWWSK", ".KWWWWWWWSSK", "..KSSSSSSSK.", "...KKKKKKK..", "............", "............",
  ],
  bowl: [
    "............", "...g.R.g....", "..gGgGgGg...", ".gGGGRGGGGg.", "KKKKKKKKKKKK", "KBBBBBBBBBBK",
    "KBABBBBBBBbK", ".KBBBBBBBbK.", "..KBBBBBbK..", "...KKKKKK...", "............", "............",
  ],
  burger: [
    "............", "...KKKKKK...", "..KGGGGGGK..", ".KGGWGGWGGK.", ".KKKKKKKKKK.", ".KNnNnNnNnK.",
    ".KrrrrrrrrK.", ".KLLGLLGLLK.", ".KGGGGGGggK.", "..KKKKKKKK..", "............", "............",
  ],
  chick: [
    "............", "....KKKK....", "...KGGGGK...", "..KGGKGGGKK.", "..KGGGGGGRRK", "..KGGGGGGKK.",
    ".KKGGGGGGK..", "KGGGGGGGGK..", "KgGGGGGGgK..", ".KgggggKK...", "...K..K.....", "..KK.KK.....",
  ],
  pasta: [
    "............", "...GGgGG....", "..GgGGgGGg..", ".GGgGRGgGGg.", ".gGGRRGGgGG.", "KKKKKKKKKKKK",
    "KWWWWWWWWWWK", ".KWWWWWWWSK.", "..KKKKKKKK..", "............", "............", "............",
  ],
  pita: [
    "............", "...KKKKKK...", "..KPNnRNPK..", ".KPPnNRnPPK.", ".KPPPPPPPPK.", ".KWWWWWWWWK.",
    ".KWSWWSWWSK.", ".KWWSWWSWWK.", "..KWWWWWSK..", "...KKKKKK...", "............", "............",
  ],
  pie: [
    "............", "...KKKKKK...", "..KgGGGGgK..", ".KgGRGGRGgK.", ".KgGGGGGGgK.", ".KgGGRGNGgK.",
    ".KgGNGGRGgK.", ".KgGGGGGGgK.", "..KgGGGGgK..", "...KKKKKK...", "............", "............",
  ],
  slice: [
    "............", ".KKKKKKKKKK.", ".KpPPPPPPpK.", ".KKGGGGGGKK.", "..KGRGGRGK..", "..KGGGGGGK..",
    "...KGRGGK...", "...KGGGGK...", "....KGGK....", "....KGGK....", ".....KK.....", "............",
  ],
  beer: [
    "............", "..KKKKKKK...", ".KWWWSWWWK..", ".KWSWWWSWKKK", ".KGGGGGGGK.K", ".KGGgGGGGK.K",
    ".KGGgGGgGK.K", ".KGGgGGgGKKK", ".KGGGGGgGK..", ".KGGGGGGGK..", "..KKKKKKK...", "............",
  ],
  leaf: [
    "............", ".......KKKK.", ".....KKnnNK.", "....KnnNNNK.", "...KnnNmNNK.", "...KnNmNNK..",
    "...KNmNNNK..", "...KmNNKK...", "..KmKKK.....", ".KmK........", ".KK.........", "............",
  ],
  croissant: [
    "............", "............", "...KKKKKK...", "..KGGgGGgGK.", ".KGgGGgGGgGK", ".KGGgGGgGGgK",
    "KgGGgGGgGGgK", "KggKKKKKKggK", ".KK......KK.", "............", "............", "............",
  ],
  cocktail: [
    "............", ".KKKKKKKKKK.", "..KAAAAAAK..", "...KAAAAK.R.", "....KAAK.RR.", ".....KK.....",
    ".....KK.....", ".....KK.....", ".....KK.....", "...KKKKKK...", "............", "............",
  ],
  wine: [
    "............", "...KKKKKK...", "...KWWWWK...", "...KWWWWK...", "...KRRRRK...", "...KRRRrK...",
    "....KrrK....", ".....KK.....", ".....KK.....", "...KKKKKK...", "............", "............",
  ],
  star: [
    "............", ".....KK.....", ".....KK.....", "....KGGK....", "KKKKKGGKKKKK", "KGGGGGGGGGgK",
    ".KGGGGGGGgK.", "..KGGGGGgK..", "..KGGKKGgK..", ".KGKK..KKgK.", ".KK......KK.", "............",
  ],
  fish: [
    "............", "............", "....KKKKK..K", "..KKAAAAAK.K", ".KAWKAAAAAKK", ".KAAAAAABBAK",
    ".KAAAAABBBAK", "..KKBBBBBKKK", "....KKKKK..K", "...........K", "............", "............",
  ],
};
for (const [name, rows] of Object.entries(SPRITES)) {
  const out = new Uint8Array(12 * 12 * 4);
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const col = spriteColors[ch];
      if (!col) return;
      out.set([...hex(col), 255], (y * 12 + x) * 4);
    });
  });
  writeRaw(`public/lunch/${name}.png`, 12, 12, out);
}
