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
  // Outline ink (pure black, per the logo) + fog shade
  ink: "#000000",
  cloudshade: "#c4d6ef",
};

// Press Start 2P renders on an 8px grid; these are the only sizes we use.
// Classes: text-px8 / text-px9 / text-px10 (with .px-font / font-pixel).
export const pixelSizes = {
  px8: ["0.5rem", { lineHeight: "1.6" }],
  px9: ["0.5625rem", { lineHeight: "1.6" }],
  px10: ["0.625rem", { lineHeight: "1.6" }],
};

// Hard "sprite" shadows (no blur) — ink at 90%.
export const shadowInk = "rgba(0, 0, 0, 0.9)";

// CSS custom properties written to src/styles/tokens.css by sync-tokens.mjs.
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
  "px-cloud": "#ffffff",
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
  "px-sky-deep": {
    height: 576,
    stops: [
      palette.sky[400],
      palette.sky[500],
      palette.sky[600],
      palette.sky[700],
      palette.sky[800],
      palette.sky[900],
      palette.indigo[900],
    ],
  },
  "px-sky-dusk": {
    height: 256,
    stops: [palette.sky[700], palette.sky[800], palette.sky[900], palette.indigo[900]],
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
  W: "#ffffff", // paper / glint
  S: palette.cloudshade, // fog shade
  R: palette.ruby[500], // coral ruby
  r: palette.ruby[700], // ruby shadow
  L: palette.ruby[300], // coral highlight
  G: palette.gold[500], // coin gold
  g: palette.gold[600], // gold shadow
};
