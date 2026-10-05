// Who is in the room: the companies with two or more conference ticket holders,
// from the build-time snapshot scripts/fetch-attending-companies.js writes to
// src/content/attending-companies.json. One reading of that snapshot for every
// surface that shows it: the homepage islands, the sponsor page, and the
// Markdown twins.
import snapshot from "../content/attending-companies.json";
import { conference2026SponsorTiers } from "./sponsors.js";

export const companies = snapshot.companies ?? [];

// Legal suffixes are noise on an island: "Workshop Software Inc" is
// Workshop Software to the people standing on it.
export const displayName = (name) =>
  name.replace(/[,\s]+(inc|llc|ltd|corp|co|gmbh|plc)\.?$/i, "");

// The organizers share the cloud with everyone (their island carries a plate);
// the Markdown twins still name them on a line of their own.
export const ORGANIZER = "Evil Martians";
export const organizers = companies.filter((c) => c.name === ORGANIZER);
export const guests = companies.filter((c) => c.name !== ORGANIZER);

// Sponsors at the Ruby tier and above get a bigger island, as a thank-you.
// Sponsor names can be longer than the company answer on a ticket ("Laravel
// Cloud" is Laravel), so a sponsor matches a company whose name it starts with.
const RUBY_TIER = conference2026SponsorTiers.findIndex((t) => t.tier === "Ruby Sponsors");
// A renamed tier would otherwise boost nobody, silently.
if (RUBY_TIER < 0) throw new Error('attending.js: no "Ruby Sponsors" tier in conference2026SponsorTiers');
const BOOSTED_TIERS = conference2026SponsorTiers.slice(0, RUBY_TIER + 1);
const boostedNames = BOOSTED_TIERS.flatMap((t) => t.sponsors.map((s) => s.name.toLowerCase()));
export const isBoostedSponsor = (name) => {
  const n = displayName(name).toLowerCase();
  return boostedNames.some((s) => s === n || s.startsWith(`${n} `));
};
