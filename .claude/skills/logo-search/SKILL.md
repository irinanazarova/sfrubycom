---
name: logo-search
description: Find and add a company's logo as a local asset for this site (host cards, sponsor rows, startup/job entries). Use whenever a task needs a real company logo — "add <company> as a host/sponsor", "update the logo", "get the <company> logo", or any new card that shows a brand mark. Encodes the source order, verification, and save conventions that reliably produce a clean, transparent, correctly-attributed logo.
---

# Logo search

Goal: a clean, correctly-attributed, transparent logo that reads on our **white** cards, saved as a local asset (never hotlinked). Prefer the **full lockup** (mark + wordmark) over a bare symbol so it's recognizable without relying on nearby text.

## 0. Do we already have it?

Before searching, check `public/` for an existing asset:

```bash
ls public/ | grep -iE "<company>"
```

If the company is already a **sponsor**, reuse `public/sponsor_<id>.*` and set `sponsorId: "<id>"` on the host entry (this also surfaces the Hiring badge + open-role links). Only fetch a new asset if none exists.

## 1. Source order (best → fallback)

Try in this order; stop at the first that yields a clean, transparent, correct logo.

1. **Wikimedia Commons SVG** — for any well-known brand, usually the fastest path to an official, transparent, full-lockup vector. Search `<Company> logo` on commons.wikimedia.org, then download the **original `.svg`**, NOT the PNG thumbnail the search UI links to. The original lives at `https://upload.wikimedia.org/wikipedia/commons/<x>/<xy>/<File>.svg` (drop the `/thumb/…/NNNpx-….png` wrapper).
2. **Official site, inline header SVG** — modern sites (Next.js etc.) inline the nav logo as `<svg>`. Open the site in the browser and extract it from the DOM:
   ```js
   const a = document.querySelector('header a[href="/"]'); (a.querySelector('svg')||document.querySelector('header svg')).outerHTML
   ```
   Often this is the **mark only** (no wordmark). Fine as a fallback; prefer a lockup if available.
3. **Official brand / press-kit page** — `/*brand*`, `/*press*`, `/*media*`. Best for approved lockups and clearspace.
4. **Site CDN raster** — grep the homepage HTML for the company's own logo asset (they also host customer logos, so filter to the company name):
   ```bash
   curl -sL <site> -A "Mozilla/5.0" | grep -oiE 'https?://[^"'"'"' ]*<company>[^"'"'"' ]*\.(svg|png)'
   ```

**Avoid:** Google image thumbnails (`encrypted-tbn*.gstatic.com`) — low-res, cached, non-authoritative. Generic logo APIs (`logo.clearbit.com`) are dead. `i0.wp.com/…` mirrors are third-party; use only to eyeball, then get the real source.

## 2. Verify before saving

- **Right company.** Not a similarly-named one; check the wordmark spelling.
- **Transparent background.** `sips -g hasAlpha <file>`. Our cards are white, so a white-background raster is tolerable but a transparent asset is better (and required if it'll ever sit on a non-white surface).
- **SVG will actually render as an `<img>`.** A root `fill="none"` with no per-path fill renders **invisible** when loaded via `<img src>`. Fixes: give paths an explicit dark fill (e.g. `#111`), or keep an internal `<style>`/`currentColor` that resolves dark. Confirm by viewing the file, not just trusting it.
- **Legible on white.** Dark or brand-colored marks read; white/very-light marks disappear on our cards.

## 3. Save conventions

- Hosts: `public/host_<id>.svg` (SVG preferred — crisp, tiny). PNG only when no vector exists.
- Sponsors: `public/sponsor_<id>.*` (reused by hosts via `sponsorId`).
- Point the data entry at it (`logo: "/host_<id>.svg"`).
- Do the fetch/convert work in the scratchpad dir; only the final asset lands in `public/`.

## 4. Render check (required)

Logos live in a `h-28` (112px) `object-contain` box on a white card. After saving, view it in the real card at **1440** and **390**:
- Scales cleanly, no overflow, background is transparent (no white box on the card edge).
- Reads as the brand at card size. If a bare mark is ambiguous, prefer the lockup or lean on the card subtitle for identity.

Take a screenshot and actually look at it.
