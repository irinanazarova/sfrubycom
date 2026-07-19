# Existing sprites — the example bank

Every shippable sprite on the site lives as a pixel map in
`scripts/px-sprites.mjs`. Copy the closest one and adapt it — starting from a
working sprite is how you inherit the correct outline weight, light direction,
and size. All maps below are current source.

## Legend (from `spriteColors` in `src/design/tokens.mjs`)

```
.  transparent
K  #000000  outline (pure-black keyline)
W  #ffffff  white / glint / paper
S  #c4d6ef  fog shade (underside of white shapes)
R  #ff5545  coral ruby (base)
r  #b52e27  ruby shadow
L  #ff9d94  coral highlight
G  #f4c700  coin gold (base)
g  #c8a300  gold shadow
N  #46b957  python green (base)
n  #91c568  python light
m  #2f7d3a  python shade
P  #eeb188  warm skin (faces) — base
p  #bd7748  skin shadow
```

UPPERCASE = base color, lowercase = its shadow. Triads are light / base / shadow.

## px-ruby (14×12) — faceted gem, the canonical shape

Top-left `W` glint, `L` highlight above the `R` body, `r` shadow tapering to a
point. Symmetric. This is the template for any gem/jewel.

```
..............
...KKKKKKKK...
..KLWWRRRRRK..
.KLRWRRRRRRRK.
KKRRRRRRRRRRKK
.KrRRRRRRRRrK.
..KrRRRRRRrK..
...KrRRRRrK...
....KrRRrK....
.....KrrK.....
......KK......
..............
```

## px-heart (14×13) — two lobes, same gem shading

Note the `L` highlight on the upper-left lobe and the `r` shadow draining to the
point, mirroring the ruby.

```
..............
..KKK....KKK..
.KLLRK..KRRRK.
KLLRRRKKRRRRRK
KLRRRRRRRRRRRK
KRRRRRRRRRRRRK
.KRRRRRRRRRRK.
..KrRRRRRRrK..
...KrRRRRrK...
....KrRRrK....
.....KrrK.....
......KK......
..............
```

## px-snake (18×12) — python green triad + white eye

Body uses `N` base with an `n` light stripe down the middle and `m` shade where
segments cross. `W` eye, single `R` pixel for the tongue. Good example of a
green-family object and of an internal `K` line dividing overlapping body.

```
..................
..KKKK............
.KNNWNK...........
RKNNNNK...........
..KNnNK...........
..KNnNK...KKKKK...
..KNnNK..KNnnnNK..
..KNnNK.KNnNNNnNK.
..KNnNNKNNmK.KNNK.
...KNNNNNmK..KNK..
....KKKKKK...KK...
..................
```

## px-briefcase (18×11) — gold object

Gold triad: `G` base, `g` shadow lower half + handle. Shows the base/shadow split
for a boxy object (upper half lit `G`, lower half `g`).

```
..................
......KKKKKK......
......KggggK......
.KKKKKKKKKKKKKKKK.
.KGGGGGGGGGGGGGGK.
.KGGGGGGKKGGGGGGK.
.KggggggKKggggggK.
.KggggggggggggggK.
.KggggggggggggggK.
.KKKKKKKKKKKKKKKK.
..................
```

## px-envelope (24×13) — white/paper object with fog shade

White body, `K` outline and internal flap creases, `S` fog shade along the bottom
two rows — the standard way to ground a white shape.

```
........................
.KKKKKKKKKKKKKKKKKKKKKK.
.KWWWWWWWWWWWWWWWWWWWWK.
.KWKWWWWWWWWWWWWWWWWKWK.
.KWWKKWWWWWWWWWWWWKKWWK.
.KWWWWKKWWWWWWWWKKWWWWK.
.KWWWWWWKKWWWWKKWWWWWWK.
.KWWWWWWWWKKKKWWWWWWWWK.
.KWSWWWWWWWWWWWWWWWWSWK.
.KWSSWWWWWWWWWWWWWWSSWK.
.KWSSSSSSSSSSSSSSSSSSWK.
.KKKKKKKKKKKKKKKKKKKKKK.
........................
```

## px-ticket (26×12) — coral panel with a perforation seam

`L` top-left highlight edge, `R` body, `r` bottom shadow row, `K` dashed
perforation column (`KrKWKrK...` alternating) down the middle. White `W` stub
marks. Template for a card/badge/plate object.

```
..........................
.KKKKKKKKKKKKKKKKKKKKKKKK.
.KLLLLLLLLKWKLLLLLLLLLLLK.
.KLRRRRRRRKrKRRRRRRRRRRLK.
.KLRRWWRRRKWKRRWWWWWRRRLK.
.KLRRRRRRRKrKRRRRRRRRRRLK.
.KLRRRRRRRKWKRRRRRRRRRRLK.
.KLRRWWRRRKrKRRWWWWWRRRLK.
.KrRRRRRRRKWKRRRRRRRRRRrK.
.KrrrrrrrrKrKrrrrrrrrrrrK.
.KKKKKKKKKKKKKKKKKKKKKKKK.
..........................
```

## px-cloud (34×14) — big white shape, all fog-shaded underside

Two-bump silhouette, `S` shade only on the bottom curve. Shows how to build a
larger white form while keeping the tone count low.

```
..................................
..........KKKKK...................
........KKWWWWWKK.....KKKK........
......KKWWWWWWWWWK..KKWWWWK.......
.....KWWWWWWWWWWWWKKWWWWWWWK......
...KKWWWWWWWWWWWWWWWWWWWWWWWKK....
..KWWWWWWWWWWWWWWWWWWWWWWWWWWWK...
.KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWK..
.KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWK..
.KWSSWWWWWWWWWWWWWWWWWWWWWWWSSWK..
..KSSSSWWWWWWWWWWWWWWWWWWWSSSSK...
...KKSSSSSSSSSSSSSSSSSSSSSSSKK....
.....KKKKKKKKKKKKKKKKKKKKKKK......
..................................
```

## px-play (14×13) — simple UI glyph

A `W` rounded square with a `R` play triangle. Template for flat UI icons: white
plate, black outline, one accent color for the glyph.

```
..............
.KKKKKKKKKKKK.
.KWWWWWWWWWWK.
.KWWWRWWWWWWK.
.KWWWRRWWWWWK.
.KWWWRRRWWWWK.
.KWWWRRRRWWWK.
.KWWWRRRWWWWK.
.KWWWRRWWWWWK.
.KWWWRWWWWWWK.
.KWWWWWWWWWWK.
.KKKKKKKKKKKK.
..............
```

## px-matz (18×21) — a friendly face, drawn from a real photo

MINASWAN. A warm, friendly caricature of Matz (Ruby's creator) on `/scholarship`,
drawn from a reference photo: full **tousled dark hair** (with a cowlick) framing
an **oval head** that tapers to a **rounded chin**, oval glasses (corner-cut
lenses) with a bright interior + `W` glint + `K` pupil, `R` coral cheeks, a broad
upturned smile, and a **soft-brown (`p`, not `K`) mustache + goatee**. Warm skin
(`P`/`p`) throughout.

It took many drafts, and each fixed a way faces go wrong here:
- v1 — white skin + a solid black glasses-bar + black mustache → cold and scary.
- fix: warm skin over white; pupils + glint (not blank or solid-dark eyes); light
  round lens rims over heavy boxes.
- next — no facial hair, but a **square** head with a thin cap of hair → read like
  a robot.
- fix: an **oval silhouette** (rounded hair dome up top, hair down the temples, a
  tapered rounded chin — no long straight vertical sides) with a **full head of
  hair**, plus a **soft-brown** mustache + goatee (a black bar reads stern; the
  smile must stay dominant).

Because it's a real person, it was drawn **from a reference image**, not memory —
that's what gave the correct oval glasses, hair, and broad smile.

```
..................
.........K........
......KKKKKK......
....KKKKKKKKKK....
...KKKKKKKKKKKK...
..KKKKKKKKKKKKKK..
..KKKKKKKKKKKKKK..
..KKKKPPPPPPKKKK..
..KPPKKPPPPKKPPK..
..KPKWWKPPKWWKPK..
..KPKWKKPPKKWKPK..
..KPPKKPPPPKKPPK..
..KPPPPPPPPPPPPK..
..KRPPPppppPPPRK..
..KPPPKPPPPKPPPK..
..KPPPPKKKKPPPPK..
..KPPPPPppPPPPpK..
...KPPPPPPPPppK...
....KPPPPPPPPK....
.....KKKKKKKK.....
..................
```

## Not scripted here

- `px-coin.png` is cut from the logo (`public/logo8bit.png`), not drawn from a
  pixel map. If you need a coin, reuse the existing asset.
- `px-island.png`, `px-scene-cfp.png`, and the logo are downscaled crops of
  Anton's source artwork — out of scope for pixel-map authoring.

## Adding a new color family

If an object needs a hue outside ruby/gold/green (say a blue laptop), add a triad
to `spriteColors` in `src/design/tokens.mjs`, drawn from an existing palette
family so it stays coherent — e.g. from the indigo scale:

```js
B: palette.indigo[500], // #0047eb base
b: palette.indigo[700], // #002d95 shadow
// highlight: palette.indigo[300] // #8aa6fc
```

Then run `node scripts/sync-tokens.mjs` if you touched anything CSS-facing, and
use the new characters in your map. Prefer reusing existing colors first.
