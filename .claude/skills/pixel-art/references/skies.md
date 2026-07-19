# Dithered gradient skies

The site's gradient backgrounds (`px-sky-day`, `px-sky-dusk`, `px-royal`) are
**vertical Bayer 4×4 ordered-dither** ramps between two palette stops — the same
checker-dither the logo's sky uses. They're generated, not hand-drawn.

## How they work

`scripts/px-gradients.mjs` walks each row, computes where it falls between the
palette stops, and picks the lower or upper color per pixel using a 4×4 Bayer
threshold matrix. The output is a tiny **8px-wide** PNG the height of the ramp;
CSS stretches it (`background-size: auto 100%; background-repeat: repeat-x;
image-rendering: pixelated`) so the checker stays square at any viewport width.

The ramps are declared as data in `skyRamps` (`src/design/tokens.mjs`):

```js
export const skyRamps = {
  "px-sky-day":  { height: 384, stops: [palette.sky[500],   palette.sky[400]] },
  "px-sky-dusk": { height: 256, stops: [palette.sky[800],   palette.sky[700]] },
  "px-royal":    { height: 192, stops: [palette.indigo[500], palette.indigo[700]] },
};
```

## Adding a new sky

1. Add an entry to `skyRamps` with a `height` (px) and two-or-more `stops` from
   the palette. Keep the two stops **close in value** — the logo skies are nearly
   flat, just a gentle drift. Wide contrast reads as a banded gradient, not the
   subtle logo dither.
2. Regenerate: `node scripts/px-gradients.mjs` (writes `public/<name>.png`).
3. Add the matching CSS class in `src/styles/pixel.css` alongside
   `.px-sky-grad-day` — set `background-image: url("/<name>.png")`, a
   `background-color` fallback (use `oklch(...)` of the mid color), `background-size:
   auto 100%; background-repeat: repeat-x; image-rendering: pixelated;`.

## Notes

- Stops must be palette hexes — same color-discipline rule as sprites.
- More than two stops works: the ramp dithers between each adjacent pair in
  sequence down the height.
- The pure-CSS `.px-dither-sky` / `.px-dither-royal` classes are a different,
  simpler thing — a flat 2×2 conic-gradient checker with no vertical drift. Use
  those for a flat dithered fill; use a generated ramp when you want the sky to
  get lighter/darker down the section.
