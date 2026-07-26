// SF Ruby Startup Conference 2026 — speakers, ticket ladder and live sales counter.
//
// `pixel` points at a 256x256 transparent sprite in /public (see speaker_*_pixel_256.png).
// Speakers without artwork yet render as a "?" character-select slot; drop the sprite in
// and add the `pixel` key to reveal them.
export const conferenceSpeakers = [
  {
    name: "Garry Tan",
    company: "Y Combinator",
    role: "President & CEO",
    track: "startups",
    keynote: true,
    pixel: "/garry_pixel_256.png",
  },
  {
    name: "Rosa Gutiérrez",
    company: "37signals",
    track: "scaleups",
    pixel: "/speaker_rosa_gutierrez_pixel_256.png",
  },
  {
    name: "Chris Oliver",
    company: "GoRails",
    track: "startups",
    pixel: "/speaker_chris_oliver_pixel_256.png",
  },
  {
    name: "Jason Bosco",
    company: "Typesense",
    track: "startups",
    pixel: "/speaker_jason_bosco_pixel_256.png",
  },
  {
    name: "Cole Robertson",
    company: "Rebulk",
    track: "startups",
    pixel: "/speaker_cole_robertson_pixel_256.png",
  },
  // Marco Roth was announced on X but is not on the confirmed list; his sprite is
  // ready at /speaker_marco_roth_pixel_256.png — uncomment once he is confirmed.
  // {
  //   name: "Marco Roth",
  //   company: "Herb, Hotwire",
  //   track: "startups",
  //   pixel: "/speaker_marco_roth_pixel_256.png",
  // },
  {
    name: "Carmine Paolino",
    company: "RubyLLM",
    track: "startups",
  },
  {
    name: "Vladimir Dementyev",
    company: "Evil Martians",
    track: "startups",
  },
  {
    name: "Andrey Novikov",
    company: "Evil Martians",
    track: "scaleups",
  },
  {
    name: "Jason Thomas",
    company: "OpenC3",
    track: "startups",
  },
  {
    name: "Neha Abraham",
    company: "Power Home Remodeling",
    track: "scaleups",
  },
  {
    name: "Irina Nazarova",
    company: "Evil Martians",
    track: "startups",
  },
];

// The ladder is the argument for buying today. Keep `until` in sync with Luma.
export const ticketTiers = [
  { name: "Early bird", price: 350, note: "Sold out", state: "gone" },
  {
    name: "Regular",
    price: 450,
    note: "175 only, until Sep 9",
    state: "live",
  },
  { name: "Late bird", price: 550, note: "From Sep 10", state: "upcoming" },
  {
    name: "Corporate / Supporter",
    price: 650,
    note: "Backs a scholarship seat",
    state: "live",
  },
];

// Regular-tier sales counter. Update from Luma (Registration tab shows sold/total),
// or wire `sold` to the Luma API in scripts/fetch-luma-events.js and read it from
// src/content/. Deliberately a plain number so a non-engineer can bump it.
export const regularTier = {
  sold: 3,
  total: 175,
  closesOn: "2026-09-09T23:59:00-07:00",
  nextPrice: 550,
  // A remaining-count only reads as scarcity once it is small. Above this it reads
  // as "nobody is buying", so the strip shows the deadline instead. Raise it as the
  // tier fills; below it the live count and the sold meter appear on their own.
  showCountBelow: 60,
};

export const regularRemaining = () =>
  Math.max(0, regularTier.total - regularTier.sold);

export const LUMA_URL = "https://luma.com/sfrubyconf2026";
