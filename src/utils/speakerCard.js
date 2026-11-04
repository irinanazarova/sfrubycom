// The shareable speaker card: what it prints, and whether the file on disk still
// prints it.
//
// A card is a committed GIF and the site text comes from the CFP feed at each
// build, so the two drift apart the moment a speaker edits their talk.
// scripts/speaker-gifs.mjs records a hash of the content it drew in
// src/content/speaker-card-hashes.json. The dialog shows a card only while that
// hash matches the content the site is about to print, so a card with an old
// title falls back to the sprite instead of contradicting the row above it.
// .github/workflows/speaker-cards.yml renders the mismatches.
//
// The hash covers the inputs because the GIF's bytes can't answer this: the same
// content renders to different bytes across ffmpeg and browser versions.
//
// Build-time only, and free of npm dependencies. Astro runs this in Node while
// rendering, and the workflow runs it before installing anything.
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

export const CARD_DIR = "public/speaker-card";
export const CARD_HASHES = "src/content/speaker-card-hashes.json";

// An abstract is written for a page, not a poster. The card sets whatever it
// is given smaller until it fits, so this is only the backstop for an abstract
// far longer than the CFP form allows (400 characters today). It cuts at the
// last sentence that fits, never mid-clause.
//
// A sentence ends at punctuation followed by a space. Requiring the space is
// the whole trick: without it "Solid Queue 1.0 was released" ends a sentence
// at "1." and everything before it is dropped on the floor.
function posterAbstract(text, budget = 420) {
  const clean = String(text ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= budget) return clean;
  let cut = 0;
  for (const m of clean.matchAll(/[.!?]["')\]]?(?=\s)/g)) {
    const end = m.index + m[0].length;
    if (end > budget) break;
    cut = end;
  }
  if (cut > 0) return clean.slice(0, cut);
  // No sentence ends inside the budget: fall back to a word boundary.
  const head = clean.slice(0, budget);
  return head.slice(0, head.lastIndexOf(" ")).replace(/[,;:\s]+$/, "") + "…";
}

// A speaker gets a card once they have both a sprite and a talk title.
export function hasCard(profile) {
  return Boolean(profile?.key && profile.pixel && profile.title);
}

// Press Start 2P has no non-breaking hyphen. A Mac falls back to a font with a
// passable one, and Linux, where the workflow renders, draws a speck ("First.Class").
function posterTitle(title) {
  return title.replace(/[‐‑]/g, "-");
}

// Everything the card prints, from one buildProfiles() entry.
export function cardContent(profile) {
  return {
    key: profile.key,
    name: profile.name,
    title: posterTitle(profile.title),
    // The CFP abstract is the talk in the speaker's own words. A speaker whose
    // entry is still a stub gets their roster line, which is never empty.
    abstract: posterAbstract(profile.abstract || profile.bio),
    slot: profile.slot,
    pixel: profile.pixel,
    keynote: Boolean(profile.keynote),
  };
}

// The sprite's bytes go in too: redrawing a character changes the card without
// changing its path.
export function cardHash(content) {
  const sprite = `public${content.pixel}`;
  return createHash("sha256")
    .update(JSON.stringify(content))
    .update(existsSync(sprite) ? readFileSync(sprite) : "")
    .digest("hex")
    .slice(0, 16);
}

export function readCardHashes() {
  return existsSync(CARD_HASHES)
    ? JSON.parse(readFileSync(CARD_HASHES, "utf8"))
    : {};
}

export function cardFile(key) {
  return `${CARD_DIR}/${key}.gif`;
}

// True when this speaker's GIF on disk prints what the site prints.
export function isCardCurrent(content, hashes) {
  return existsSync(cardFile(content.key)) && hashes[content.key] === cardHash(content);
}

const hashes = readCardHashes();

export function speakerCardHref(profile) {
  if (!hasCard(profile)) return null;
  if (!isCardCurrent(cardContent(profile), hashes)) {
    console.warn(`speaker-card: ${profile.key} has no current card; showing the sprite`);
    return null;
  }
  return `/speaker-card/${profile.key}.gif`;
}
