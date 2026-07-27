"""Cut the character sprite out of an SF Ruby speaker announcement card.

    python3 scripts/cut-speaker-sprite.py card.jpg public/speaker_<slug>_pixel_256.png

Takes an announcement card as posted on socials and writes the 256x256
transparent sprite the speaker roster expects (see SpeakerRoster.astro and the
`pixel` field in src/data/conference-2026.js). Requires ImageMagick (`magick`).

The cards are templated: dithered blue sky, character standing on a floating
platform at the left, speech bubble to its right, logo far right, headline
across the top.

A fixed crop box clips the broader characters' arms, and box heuristics keep
catching bubble and headline fragments. So instead: find the grass line by
colour, then flood-fill the character as a connected region seeded just above
its feet. Sky separates the character from the bubble, headline and logo, so the
region cannot leak into them, and bounding the fill above the grass keeps the
platform out.
"""
import subprocess, sys, os
from collections import deque

# Bounds come from a deliberately loose mask (JPEG ringing around the dither
# otherwise speckles every row). The cut uses a tight fuzz against both dither
# blues so blue eyes and navy clothing survive.
MASK_FUZZ, CUT_FUZZ = "18%", "9%"


def sky_colours(raw, w, h, n=2):
    """The dominant dither blues, by frequency over a strip of pure sky.

    Sampling three touching corner pixels is not enough: JPEG smoothing makes
    them near-identical on some cards, so only one of the two dither shades gets
    removed and the checkerboard survives the cut.
    """
    counts = {}
    for y in range(4, min(h, 90)):
        base = y * w * 3
        for x in range(4, min(w, 120)):
            i = base + x * 3
            counts[raw[i:i + 3]] = counts.get(raw[i:i + 3], 0) + 1
    top = sorted(counts, key=counts.get, reverse=True)[:n]
    return [f"srgb({c[0]},{c[1]},{c[2]})" for c in top]


def build_mask(card, w, h, corner):
    out = subprocess.run(
        ["magick", card, "-alpha", "set", "-fuzz", MASK_FUZZ,
         "-transparent", corner, "-alpha", "extract", "-threshold", "50%",
         "-morphology", "Open", "Disk:1.5", "-depth", "8", "gray:-"],
        capture_output=True, check=True).stdout
    return bytearray(out)


def grass_top(raw, w, h, x_end, y_start):
    """First row holding the platform's saturated green, scanning top-down."""
    for y in range(y_start, h):
        base = y * w * 3
        hits = 0
        for x in range(x_end):
            i = base + x * 3
            r, g, b = raw[i], raw[i + 1], raw[i + 2]
            if g > 110 and g > r + 45 and g > b + 45:   # grass, not skin or sky
                hits += 1
                if hits > 12:
                    return y
    return None


def cut_plain(src, out_path, tol=34):
    """Standalone sprite on a flat background.

    The background is flooded from the image border rather than keyed by colour.
    Colour keying looked fine until you notice it also matches skin: these cards
    sit on tan, so `-transparent` punched holes straight through faces, arms and
    legs. Flooding from outside cannot reach an enclosed face, whatever colour it
    happens to be, because the pixel-art outline stops it.

    Then keep the largest subject blob, because Irina's sprite has a cat below
    her that a plain trim would include, halving her height once normalised.
    """
    w, h = map(int, subprocess.run(
        ["magick", src, "-format", "%w %h", "info:"],
        capture_output=True, text=True, check=True).stdout.split())
    raw = subprocess.run(["magick", src, "-depth", "8", "rgb:-"],
                         capture_output=True, check=True).stdout

    def px(i):
        j = i * 3
        return raw[j], raw[j + 1], raw[j + 2]

    br, bg_, bb = px(3 * w + 3)                    # a border pixel: the backdrop
    near = lambda c: (abs(c[0] - br) <= tol and abs(c[1] - bg_) <= tol
                      and abs(c[2] - bb) <= tol)

    back = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            i = y * w + x
            if not back[i] and near(px(i)):
                back[i] = 1
                q.append(i)
    for y in range(h):
        for x in (0, w - 1):
            i = y * w + x
            if not back[i] and near(px(i)):
                back[i] = 1
                q.append(i)
    while q:
        i = q.popleft()
        x, y = i % w, i // w
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                j = ny * w + nx
                if not back[j] and near(px(j)):
                    back[j] = 1
                    q.append(j)

    # Largest subject component, 4-connected over everything the flood missed.
    seenc = bytearray(w * h)
    best = None
    for start in range(w * h):
        if back[start] or seenc[start]:
            continue
        q = deque([start])
        seenc[start] = 1
        area = 0
        x0 = x1 = start % w
        y0 = y1 = start // w
        while q:
            i = q.popleft()
            area += 1
            x, y = i % w, i // w
            if x < x0: x0 = x
            if x > x1: x1 = x
            if y < y0: y0 = y
            if y > y1: y1 = y
            for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if 0 <= nx < w and 0 <= ny < h:
                    j = ny * w + nx
                    if not back[j] and not seenc[j]:
                        seenc[j] = 1
                        q.append(j)
        if best is None or area > best[0]:
            best = (area, x0, y0, x1, y1)
    if best is None:
        raise SystemExit(f"{src}: no subject found")
    _, x0, y0, x1, y1 = best

    alpha = os.path.join(os.path.dirname(out_path) or ".", ".alpha.pgm")
    with open(alpha, "wb") as fh:
        fh.write(f"P5\n{w} {h}\n255\n".encode())
        fh.write(bytes(0 if v else 255 for v in back))
    masked = alpha + ".cut.png"
    subprocess.run(["magick", src, alpha, "-alpha", "off",
                    "-compose", "CopyOpacity", "-composite", masked], check=True)

    pad = 3
    cw = min(w - 1, x1 + pad) - max(0, x0 - pad) + 1
    ch = min(h - 1, y1 + pad) - max(0, y0 - pad) + 1
    subprocess.run(
        ["magick", masked, "-crop", f"{cw}x{ch}+{max(0, x0 - pad)}+{max(0, y0 - pad)}",
         "+repage", "-trim", "+repage", "-filter", "point", "-resize", "x240",
         "-background", "none", "-gravity", "south", "-extent", "256x256",
         out_path], check=True)
    for f in (alpha, masked):
        os.remove(f)
    print(f"{os.path.basename(src):30s} subject {x1-x0+1}x{y1-y0+1}+{x0}+{y0}  "
          f"bg=rgb({br},{bg_},{bb})")


def cut(card, out_path, slab=0.40, top_skip=0.10):
    w, h = map(int, subprocess.run(
        ["magick", card, "-format", "%w %h", "info:"],
        capture_output=True, text=True, check=True).stdout.split())
    rgb = subprocess.run(["magick", card, "-depth", "8", "rgb:-"],
                         capture_output=True, check=True).stdout

    x_end = int(w * slab)
    y_start = int(h * top_skip)
    ground = grass_top(rgb, w, h, x_end, y_start)
    if ground is None:
        # No platform: this is a standalone sprite, not an announcement card.
        return cut_plain(card, out_path)

    blues = sky_colours(rgb, w, h)
    mask = build_mask(card, w, h, blues[0])

    # Seed on the widest opaque run a little above the grass: the legs.
    seed = None
    for probe in range(ground - 12, ground - 90, -6):
        row, best, run, start = probe * w, None, 0, None
        for x in range(x_end):
            if mask[row + x]:
                if start is None:
                    start = x
                run += 1
            else:
                if start is not None and (best is None or run > best[1]):
                    best = (start + run // 2, run)
                start, run = None, 0
        if start is not None and (best is None or run > best[1]):
            best = (start + run // 2, run)
        if best and best[1] > 8:
            seed = (best[0], probe)
            break
    if seed is None:
        raise SystemExit(f"{card}: could not seed the character")

    # Flood fill the character, never crossing into the platform.
    seen = bytearray(w * h)
    q = deque([seed])
    seen[seed[1] * w + seed[0]] = 1
    x0 = x1 = seed[0]
    y0 = y1 = seed[1]
    while q:
        cx, cy = q.popleft()
        if cx < x0: x0 = cx
        if cx > x1: x1 = cx
        if cy < y0: y0 = cy
        if cy > y1: y1 = cy
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < x_end and y_start <= ny < ground:
                i = ny * w + nx
                if mask[i] and not seen[i]:
                    seen[i] = 1
                    q.append((nx, ny))

    pad = 3
    x0, y0 = max(0, x0 - pad), max(0, y0 - pad)
    x1, y1 = min(w - 1, x1 + pad), min(ground - 1, y1 + pad)
    cw, ch = x1 - x0 + 1, y1 - y0 + 1

    # The filled region becomes the alpha mask. Cropping to the bounding box is
    # not enough on its own: Rosa stands beside a dog, so her box is wide enough
    # to reach the speech bubble, which then rides along inside the rectangle.
    region = os.path.join(os.path.dirname(out_path) or ".", ".region.pgm")
    with open(region, "wb") as fh:
        fh.write(f"P5\n{w} {h}\n255\n".encode())
        fh.write(bytes(255 if v else 0 for v in seen))

    dilated = region + ".dil.png"
    subprocess.run(["magick", region, "-morphology", "Dilate", "Disk:2.5",
                    dilated], check=True)
    masked = region + ".cut.png"
    subprocess.run(["magick", card, dilated, "-alpha", "off",
                    "-compose", "CopyOpacity", "-composite", masked], check=True)

    subprocess.run(
        ["magick", masked,
         "-crop", f"{cw}x{ch}+{x0}+{y0}", "+repage",
         # Sky trapped inside the region (between an arm and the torso) still
         # needs colour removal; the mask has already excluded everything else.
         "-fuzz", CUT_FUZZ] +
        [a for b in blues for a in ("-transparent", b)] +
        ["-trim", "+repage",
         "-filter", "point", "-resize", "x240",
         "-background", "none", "-gravity", "south", "-extent", "256x256",
         out_path], check=True)
    for f in (region, dilated, masked): os.remove(f)
    print(f"{os.path.basename(card):12s} {cw}x{ch}+{x0}+{y0}  grass={ground} sky={blues}")


if __name__ == "__main__":
    cut(sys.argv[1], sys.argv[2])
