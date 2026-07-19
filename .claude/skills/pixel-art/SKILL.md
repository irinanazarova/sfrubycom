---
name: pixel-art
description: >-
  Author new 8-bit / NES-style pixel-art sprites, item icons, and dithered
  gradient skies for the SF Ruby site (sfruby.com), indistinguishable from the
  existing px-* assets. Use this whenever the user wants to create, add, draw, or
  design a new pixel icon, item sprite, badge, coin, gem, mascot bit, or any
  8-bit graphic/asset in this repo — e.g. "add an 8-bit icon for jobs", "make a
  pixel sprite of a laptop", "new px- asset", "draw a pixel-art trophy", "give me
  a dithered sky for the dusk section". The skill is expertise in authoring the
  ASCII pixel maps in the site's exact style; the repo already owns the rendering
  (scripts/px-sprites.mjs + src/design/tokens.mjs). Reach for it even when the
  user doesn't say "pixel art" but clearly wants a small 8-bit graphic that
  matches the site.
---

# SF Ruby 8-bit Pixel Art

**The rendering is already solved.** `scripts/px-sprites.mjs` turns an ASCII
pixel map into a `public/px-*.png` using the logo palette in
`src/design/tokens.mjs`; `scripts/px-gradients.mjs` does the skies. You don't
build or duplicate any of that.

**Your job is the pixel map** — and only that. A sprite here is a named array of
equal-length strings, one character per pixel:

```js
"px-ruby": [
  "..............",
  "...KKKKKKKK...",
  "..KLWWRRRRRK..",
  // ...
],
```

Authoring that map so it reads clearly and sits indistinguishably beside the
existing icons is a craft — silhouette, black keyline, light direction, and
strict palette discipline. This skill makes you expert at it. Everything below is
about drawing well; the last short step just hands your map to the generator.

**Scope:** small item sprites/icons (like `px-ruby`, `px-snake`, `px-heart`,
`px-coin`) and Bayer-dithered gradient skies. Not the large scene illustrations
(`px-island.png`, `px-scene-cfp.png`, the logo) — those were cut and downscaled
from Anton's source artwork, not authored as maps.

## The two hard rules

1. **Colors come only from the legend.** Never introduce an arbitrary hex. The
   palette is sampled pixel-exact from the logo; using anything else is the #1
   way a sprite reads as "not from this set." If you genuinely need a new object
   color, add a triad (base + light + shadow, same family) to `spriteColors` in
   `src/design/tokens.mjs` rather than inventing a one-off — but reuse existing
   colors first.
2. **1 pixel per cell, hard edges, no anti-aliasing.** Every cell is one full
   palette color or transparent. Never blur, gradient within a shape, or scale
   up. The site enlarges sprites at display time with `image-rendering: pixelated`,
   so you author at true 1× resolution.

## Palette legend

The characters you draw with. Source of truth: `spriteColors` in
`src/design/tokens.mjs`.

| Char | Hex       | Role |
|------|-----------|------|
| `.`  | —         | transparent |
| `K`  | `#000000` | **outline** — pure-black keyline around every shape |
| `W`  | `#ffffff` | white — paper, specular glint |
| `S`  | `#c4d6ef` | fog shade — underside of white/paper shapes (cloud, envelope) |
| `R`  | `#ff5545` | coral ruby — base |
| `r`  | `#b52e27` | ruby shadow |
| `L`  | `#ff9d94` | coral highlight |
| `G`  | `#f4c700` | coin gold — base |
| `g`  | `#c8a300` | gold shadow |
| `N`  | `#46b957` | python green — base |
| `n`  | `#91c568` | python light |
| `m`  | `#2f7d3a` | python shade |
| `P`  | `#eeb188` | warm skin (faces) — base |
| `p`  | `#bd7748` | skin shadow |

Convention: **UPPERCASE = base, lowercase = its shadow.** A color family is a
triad — light / base / shadow (`L`/`R`/`r`, `n`/`N`/`m`). Gold ships base+shadow
only; use `W` for a gold glint, or add `#ffe14d` for a true gold highlight.

The triads are already **hue-shifted**, not just darkened: the coral shadow `r`
is deeper *and* cooler than `R`, the highlight `L` warmer. That's why they look
alive. If you add a new triad, do the same — shadow shifts cooler/toward the sky
hue and desaturates slightly, highlight shifts warmer — never a flat
brightness-only ramp.

**No neutral gray on purpose.** For silver / steel / chrome / any gray metal,
don't invent a gray triad — reuse `W` (lit face) + `S` (`#c4d6ef`, the cool fog
shade) as the metal's mid/shadow, with a `W` specular glint. That's how the
existing white shapes are grounded, so a laptop, wrench head, or robot body built
from `W`/`S` sits in the family for free. Reach for a real added triad only for a
saturated hue the palette genuinely lacks (a blue book, a terracotta pot).

## The craft — what makes a map indistinguishable

These are the traits every existing sprite shares. Internalize them; they're the
whole skill.

- **Silhouette first, one idea per icon.** The sprite must be recognizable as a
  solid black blob before any interior detail — if the outline shape is ambiguous,
  no shading will save it. At 12–34px you have room for exactly one defining
  feature: exaggerate it (an oversized lens, a fat coin, a chunky cup) and cut the
  rest. Iconography beats realism; a symbolic form reads, a shrunk-down realistic
  one turns to mush.
- **Continuous black keyline.** Wrap the entire silhouette in a 1px `K` outline —
  the single most defining trait of the set; no shape floats without it. Use `K`
  for bold internal *creases* too (envelope flap, snake segments, glasses frames).
  But for a *shading* step within one color, use that color's shadow tone, not
  `K` — pure black inside a fill reads muddy and heavy. Keyline black is for
  edges and structure, not for darkening.
- **1px transparent margin.** Top and bottom rows are all `.`; keep a `.` in the
  first and last column. And keep ≥1px between separate forms so the outline
  doesn't fuse them into one blob.
- **Keep it small.** Item sprites are ~12–18px tall, ~12–34px wide. A bigger
  canvas doesn't read as "more detail," it reads as out-of-scale next to its
  siblings. Match their weight.
- **One light direction — top-left — for the whole set.** Highlight (`L`, `n`, `W`
  glint) on the top and left edges; shadow (`r`, `g`, `m`) on the bottom and
  right. Gems and eyes get a 1–2px `W` specular block in the top-left. Every
  sprite must agree on this, or the family looks lit by different suns.
- **Never pillow-shade.** Don't put the highlight in the *center* with shadow
  radiating out to every edge — that has no light source and looks blurry. Commit
  the shadow to the side away from the light (bottom-right) and leave it there.
  For a round or cylindrical form (a mug, a bulb, a coin), run a *diagonal* ramp
  — lit corner top-left, base through the middle, shadow draining to the
  bottom-right corner — instead of flat horizontal bands; it reads as volume.
- **Three tones max per object**, plus the outline: light / base / shadow. A
  fourth reads busy, not detailed — flatter is more authentically 8-bit. Cut any
  two near-tones that don't clearly differ.
- **Match the warmth of its neighbors.** A sprite has to fit *tonally*, not just
  technically. The set skews warm (coral, gold, warm skin `P`); a cold white/gray
  object dropped among coral icons reads as foreign — and on a face, cold plus
  detailed tips straight into uncanny. Before finalizing, picture it beside the
  icons it will sit next to and confirm it belongs to the same palette family.

### Clean lines (anti-jaggies)

Sloppy edges are the fastest tell of amateur pixel art. At this scale:

- **Consistent stair-steps.** Build a diagonal from runs of equal length — all
  1s, or all 2s — never a 1 then a 3 then a 2. Irregular steps read as a jagged,
  wobbling edge.
- **No orphan pixels.** Every pixel belongs to a shape. A lone speck or a single
  1px nub sticking off an edge reads as noise, not detail — delete it.
- **No banding.** Don't run two parallel, equal-length tone lines right along an
  edge; it hugs the grid and flattens the form. Stagger the step.
- **No exterior anti-aliasing.** The black keyline *is* the edge treatment. Never
  add semi-tone pixels to smooth the outer silhouette — they read as fringe on
  the site's varied backgrounds.

## The method — how to actually draw one

1. **Adapt, don't start blank.** Open `references/existing-sprites.md` and copy
   the closest sprite (a gem→start from `px-ruby`; a boxy object→`px-briefcase`;
   a white/paper thing→`px-envelope`). You inherit correct outline weight, size,
   and light direction for free.
2. **Silhouette first.** Block the shape in one base color inside its `K` outline,
   on the smallest grid that holds it. Get the outline reading as the object
   before any shading.
3. **Then shade.** Add the highlight along the top-left edge and the shadow along
   the bottom-right — a 1px lip is usually enough. Add a `W` glint last.
4. **Count your columns.** Every row must be the same width or the generator
   throws. Lay features on a mental grid; symmetric objects should mirror exactly
   around the center column.
5. **Iterate against your eyes** (see Verify). Expect 2–3 passes — reading a map
   in your head lies; the render tells the truth.

**Tiny faces** are the hardest thing here — easy to make creepy. The `px-matz`
sprite went through a cold, scary first draft (white skin, a solid black
glasses-bar, a mustache) before landing warm and friendly. The recipe that works:

- **Warm skin, never white/gray.** Build the face from the skin triad `P`/`p`, not
  `W`. A pale face among the warm coral icons reads foreign, and cold + detailed
  reads as a ghost or robot. Warmth is the single biggest lever on "friendly."
- **Eyes need a pupil *and* a glint.** A dark `K` pupil (nudged toward the viewer /
  slightly down) inside a lighter lens, with a 1px `W` glint, reads alive and
  kind. Blank white eyes look vacant; a solid dark slot looks menacing. Both eyes
  on the same baseline.
- **A clear upturned smile is the friendliness anchor** — commit real pixels to
  it. It does more than any other feature.
- **Keep black masses off the face.** A solid dark glasses bar, thick frames, or a
  black mustache bar read as a visor / frown / sternness. For glasses, draw light
  *round* lens rims (corners cut with skin) with a bright interior and the pupil
  showing through — not filled boxes.
- **Facial hair in a soft tone, never `K`.** A mustache/beard drawn in pure black
  reads as a stern bar and kills the smile. Use the skin-shadow `p` (or an added
  soft brown) and keep it sparse, so it reads as hair while the smile still
  dominates. `px-matz` gained a soft-brown mustache + goatee this way and stayed
  friendly.
- **Rosy cheeks** (a single `R` pixel each side) add instant warmth.

So: warm skin + rosy cheeks + big eyes with pupils + a clear smile. Spend pixels
there; a nose or ears just add noise.

**Drawing a real person?** Pull up a reference photo first — a caricature from
memory drifts. The photo is what tells you the *actual* glasses shape (Matz's are
oval, not square), the facial-hair style, and the expression to lean into (his
broad, warm smile). Then stylize from the reference, keeping the friendly-face
recipe above.

**Common pitfalls** (each has bitten a real sprite): a solid horizontal bar meant
as two features (e.g. glasses) reads as one — separate them with a gap or a
light-row. Fog shade (`S`) on the underside of a *face* reads as a collar/beard;
keep it to a thin sliver or omit it. Filling a tiny lens fully with `K` kills the
eye — leave a `W` glint. Asymmetry in a shape that should be symmetric is
instantly visible when magnified.

## Hand it to the generator

Add your finished entry to the `SPRITES` object in **`scripts/px-sprites.mjs`**
(the exact file every existing sprite lives in), then:

```bash
node scripts/px-sprites.mjs
```

It regenerates every sprite (idempotent), writes your `public/px-<name>.png` at
1:1, loads colors from `src/design/tokens.mjs`, and throws on any character not in
the legend — a free typo check. That's the entire render step.

Heads-up: it re-encodes *every* PNG, so `git status` will show all the existing
`public/px-*.png` as modified even though only yours changed in content (the rest
are byte-identical re-encodes — verify with `magick compare -metric AE`). Stage
only your new file and `git checkout -- ` the untouched ones.

## Verify — actually look

Magnify 16× and compare against a sibling magnified the same way:

```bash
magick public/px-<name>.png -filter point -resize 1600% /tmp/px-new.png
magick public/px-ruby.png   -filter point -resize 1600% /tmp/px-ref.png
```

Check: continuous 1px outline with nothing leaking past it; light top-left /
shadow bottom-right; only legend colors; same visual weight and canvas size as
its neighbors; silhouette still legible shrunk back to 1×. If any fail, fix the
map and re-run. Numbers don't confirm style — eyes do.

## Wire it up (if it ships)

Sprites are referenced by `/px-<name>.png` and displayed with `image-rendering:
pixelated` (via `.px-pixelated` / `.px-island-btn__item`). Follow existing usages
— e.g. `src/components/IslandNav.astro` (`{ item: { src: "/px-<name>.png", ... } }`)
or the icon rows in `src/pages/scholarship.astro`.

## Dithered skies

For gradient backgrounds (not sprites), add a two-stop ramp to `skyRamps` in
`src/design/tokens.mjs` and run `node scripts/px-gradients.mjs` — same
already-built pattern. See `references/skies.md`.

## Reference files

- `references/existing-sprites.md` — every current sprite's pixel map + the full
  legend. Your example bank; adapt from these.
- `references/skies.md` — the dithered-sky recipe.
