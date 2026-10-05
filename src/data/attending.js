// Who is in the room: the companies with two or more conference ticket holders,
// from the build-time snapshot scripts/fetch-attending-companies.js writes to
// src/content/attending-companies.json. One reading of that snapshot for every
// surface that shows it: the homepage islands, the sponsor page, and the
// Markdown twins.
import snapshot from "../content/attending-companies.json";

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
