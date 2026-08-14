// The single source of truth for the 8-bit design language.
// Sampled pixel-exact from Anton's logo (public/logo8bit.png).
//
// Consumed by:
//   - tailwind.config.mjs            (color scales, pixel type sizes)
//   - scripts/sync-tokens.mjs        (generates src/styles/tokens.css vars)
//   - scripts/px-gradients.mjs       (dithered sky ramps)
//   - scripts/px-sprites.mjs         (sprite pixel-map palette)
//   - src/pages/design-system.astro  (renders the palette docs)
//
// After editing, run: node scripts/sync-tokens.mjs && node scripts/px-gradients.mjs && node scripts/px-sprites.mjs

export const palette = {
  // Logo coral-ruby family (letters #ff5545, shadow #7c000a)
  ruby: {
    50: "#fff1f0",
    100: "#ffe0dd",
    200: "#ffc4bf",
    300: "#ff9d94",
    400: "#ff6e60",
    500: "#ff5545",
    600: "#e03427",
    700: "#b52e27",
    800: "#8f1610",
    900: "#7c000a",
    950: "#4a0006",
  },
  // Logo sky family (dither blues #62bbee / #3ea3dd)
  sky: {
    50: "#f0f9ff",
    100: "#e1f2fc",
    200: "#c3e5f9",
    300: "#93d2f4",
    400: "#62bbee",
    500: "#3ea3dd",
    600: "#2b86bd",
    700: "#236a97",
    800: "#1d5378",
    900: "#123a57",
    950: "#0a2740",
  },
  // Logo royal blues (SAN FRANCISCO badge #0047eb on #002d95)
  indigo: {
    50: "#eef3ff",
    100: "#dbe5ff",
    200: "#b8caff",
    300: "#8aa6fc",
    400: "#5379f6",
    500: "#0047eb",
    600: "#003cc7",
    700: "#002d95",
    800: "#022571",
    900: "#071f56",
    950: "#04123a",
  },
  // Coral-light stand-in so legacy ruby→pink gradients stay coherent
  pink: {
    50: "#fff2f0",
    100: "#ffe4e0",
    200: "#ffcdc6",
    300: "#ffaba0",
    400: "#ff8d82",
    500: "#ff6e60",
    600: "#ff5545",
    700: "#c73325",
    800: "#8f1610",
    900: "#7c000a",
    950: "#4a0006",
  },
  // Coin gold + CONFERENCE-bar orange
  gold: {
    100: "#fff3bf",
    300: "#ffe14d",
    400: "#fcd21f",
    500: "#f4c700",
    600: "#c8a300",
    700: "#8f7500",
  },
  pumpkin: {
    500: "#da5513",
    600: "#b14416",
  },
  // Island grass / python greens (sampled from the logo island)
  grass: {
    300: "#91c568",
    500: "#46b957",
    700: "#2f7d3a",
  },
  // Neutral grays (UI text and surfaces)
  dark: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  // Outline ink (pure black, per the logo) + fog shade + paper white
  ink: "#000000",
  white: "#ffffff",
  cloudshade: "#c4d6ef",

  // Third-party brand colors (social buttons, sprite tints). Registered here
  // so no raw hex leaks into components; 500 is the brand color, higher
  // steps are hover/darker variants.
  slack: {
    500: "#4a154b",
    600: "#3e1240",
  },
  substack: {
    500: "#ff6719",
    600: "#e55a14",
    700: "#c24e00",
    800: "#a84400",
  },
  bluesky: {
    500: "#0085ff",
    600: "#0070d6",
    700: "#0060bf",
    800: "#004d99",
  },
  linkedin: {
    500: "#0a66c2",
    600: "#084d94",
  },
  youtube: {
    500: "#ff0000",
    600: "#cc0000",
  },
  python: {
    blue: "#4b8bbe",
    yellow: "#ffd43b",
  },
};

// ---------------------------------------------------------------------------
// oklch derivation. Hex stays the machine source (PNG generators and the
// game canvas need RGB bytes); everything CSS-facing is emitted as oklch so
// colors and gradient interpolation live in a perceptual space.
// sRGB -> OKLab math per Björn Ottosson (https://bottosson.github.io/posts/oklab/).

function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function hexToOklch(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = srgbToLinear(((n >> 16) & 255) / 255);
  const g = srgbToLinear(((n >> 8) & 255) / 255);
  const b = srgbToLinear((n & 255) / 255);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s2 = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s2;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s2;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s2;
  const C = Math.sqrt(A * A + B * B);
  let H = (Math.atan2(B, A) * 180) / Math.PI;
  if (H < 0) H += 360;
  if (C < 0.0002) H = 0;
  const round = (v, d) => Number(v.toFixed(d));
  return { l: round(L * 100, 2), c: round(C, 4), h: round(H, 2) };
}

/** oklch() string; pass alpha "<alpha-value>" for Tailwind opacity support */
export function oklch(hex, alpha) {
  const { l, c, h } = hexToOklch(hex);
  return alpha !== undefined
    ? `oklch(${l}% ${c} ${h} / ${alpha})`
    : `oklch(${l}% ${c} ${h})`;
}

const mapValues = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));

/** The palette as oklch strings with Tailwind alpha placeholders */
export const cssPalette = mapValues(palette, (v) =>
  typeof v === "string" ? oklch(v, "<alpha-value>") : mapValues(v, (hex) => oklch(hex, "<alpha-value>")),
);

// Press Start 2P renders on an 8px grid; these are the only sizes we use.
// Classes: text-px8 / text-px9 / text-px10 (with .px-font / font-pixel).
export const pixelSizes = {
  px8: ["0.5rem", { lineHeight: "1.6" }],
  px9: ["0.5625rem", { lineHeight: "1.6" }],
  px10: ["0.625rem", { lineHeight: "1.6" }],
};

// Hard "sprite" shadows (no blur) — ink at 90%.
export const shadowInk = "rgba(0, 0, 0, 0.9)";

// CSS custom properties written to src/styles/tokens.css by sync-tokens.mjs
// (values are converted to oklch at generation time).
export const cssVars = {
  "px-sky": palette.sky[400],
  "px-sky-deep": palette.sky[500],
  "px-ruby": palette.ruby[500],
  "px-ruby-light": palette.ruby[400],
  "px-ruby-dark": palette.ruby[900],
  "px-blue": palette.indigo[500],
  "px-blue-dark": palette.indigo[700],
  "px-gold": palette.gold[500],
  "px-orange": palette.pumpkin[500],
  "px-ink": palette.ink,
  "px-cloud": palette.white,
  "px-cloud-shade": palette.cloudshade,
  "px-paper": palette.sky[50],
  "px-paper-gold": "#fff7e6",
};

// Dithered sky ramps (scripts/px-gradients.mjs).
export const skyRamps = {
  // Anton's logo sky: nearly flat, slightly darker up top and lighter
  // toward the ground (his PRESS START sits navy-on-light). The full-height
  // dither between the two logo blues reproduces that drift.
  "px-sky-day": {
    height: 384,
    stops: [palette.sky[500], palette.sky[400]],
  },
  // Dusk: calm dark sky, lighter toward the ground like the logo,
  // dark enough throughout for white hero text.
  "px-sky-dusk": {
    height: 256,
    stops: [palette.sky[800], palette.sky[700]],
  },
  "px-royal": {
    height: 192,
    stops: [palette.indigo[500], palette.indigo[700]],
  },
};

// Sprite pixel-map legend (scripts/px-sprites.mjs).
export const spriteColors = {
  ".": null, // transparent
  K: palette.ink, // outline
  W: palette.white, // paper / glint
  S: palette.cloudshade, // fog shade
  R: palette.ruby[500], // coral ruby
  r: palette.ruby[700], // ruby shadow
  L: palette.ruby[300], // coral highlight
  G: palette.gold[500], // coin gold
  g: palette.gold[600], // gold shadow
  N: palette.grass[500], // python green (sampled from the island grass)
  n: palette.grass[300], // python light
  m: palette.grass[700], // python shade
};
