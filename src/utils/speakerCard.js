// The shareable speaker card, if one has been generated.
//
// scripts/speaker-gifs.mjs writes public/speaker-card/<key>.gif for every
// speaker who has both a sprite and a talk title. A speaker added since the
// last run has neither file nor button, which is the point of asking the disk
// rather than re-deriving the filter: the download never 404s.
//
// Build-time only. Astro runs this in Node while rendering, and the site is
// static, so nothing here reaches the browser.
import { existsSync } from "node:fs";

export function speakerCardHref(key) {
  if (!key) return null;
  return existsSync(`public/speaker-card/${key}.gif`)
    ? `/speaker-card/${key}.gif`
    : null;
}
