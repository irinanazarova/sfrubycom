// SF Ruby Startup Conference 2026 — speakers, ticket ladder and live sales counter.
//
// `pixel` points at a 256x256 transparent sprite in /public (see speaker_*_pixel_256.png).
// Speakers without artwork yet render as a "?" character-select slot; drop the sprite in
// and add the `pixel` key to reveal them.
export const conferenceSpeakers = [
  {
    name: "Garry Tan",
    bio: "Runs Y Combinator, and built its internal platform Bookface on Rails.",
    company: "Y Combinator",
    role: "President & CEO",
    track: "startups",
    keynote: true,
    // `pin` fixes a speaker to either end of the grid; everyone else is ordered
    // by whether their sprite has landed, so the roster opens on real faces.
    pin: "first",
    pixel: "/garry_pixel_256.png",
  },
  {
    name: "Rosa Gutiérrez",
    bio: "Built Solid Queue, the job backend that ships with Rails 8.",
    company: "37signals",
    track: "scaleups",
    pixel: "/speaker_rosa_gutierrez_pixel_256.png",
  },
  {
    name: "Chris Oliver",
    bio: "Teaches Rails to thousands through GoRails; maintains Pay, Noticed and Jumpstart.",
    company: "GoRails",
    track: "startups",
    pixel: "/speaker_chris_oliver_pixel_256.png",
  },
  {
    name: "Jason Bosco",
    bio: "Bootstrapped Typesense, an open-source search engine on Rails serving 10B+ searches a month.",
    company: "Typesense",
    track: "startups",
    pixel: "/speaker_jason_bosco_pixel_256.png",
  },
  {
    name: "Cole Robertson",
    bio: "CTO of Rebulk (YC S25), measuring bulk inventory with LiDAR and computer vision.",
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
    bio: "Created RubyLLM, which brought modern AI tooling to Ruby.",
    company: "RubyLLM",
    track: "startups",
    pixel: "/speaker_carmine_paolino_pixel_256.png",
  },
  {
    name: "Vladimir Dementyev",
    bio: "Author of AnyCable, TestProf and Layered Design for Ruby on Rails Applications.",
    company: "Evil Martians",
    track: "startups",
    pixel: "/speaker_vladimir_dementyev_pixel_256.png",
  },
  {
    name: "Andrey Novikov",
    bio: "Maintains after_commit_everywhere and pgtrunk, and teaches Rubyists what Postgres can really do.",
    company: "Evil Martians",
    track: "scaleups",
    pixel: "/speaker_andrey_novikov_pixel_256.png",
  },
  {
    name: "Jason Thomas",
    bio: "Co-created COSMOS, the Ruby stack used to build, test and fly satellites and robots.",
    company: "OpenC3",
    track: "startups",
    pixel: "/speaker_jason_thomas_pixel_256.png",
  },
  {
    name: "Neha Abraham",
    bio: "Ships Rails in production at Power Home Remodeling.",
    company: "Power Home Remodeling",
    track: "scaleups",
    pixel: "/speaker_neha_abraham_pixel_256.png",
  },
  {
    name: "Irina Nazarova",
    bio: "Runs Evil Martians and organizes SF Ruby.",
    company: "Evil Martians",
    track: "startups",
    keynote: true,
    pin: "last",
    pixel: "/speaker_irina_nazarova_pixel_256.png",
  },
];

// The ladder is the argument for buying today. Keep it in sync with Luma.
//
// No late-bird tier is published on purpose: pricing after Regular is undecided,
// and announcing a tier that may not exist is worse than announcing none. Until
// one is set, Corporate is the only ticket on sale once Regular closes or sells
// out, so the copy promises a rise without naming a number.
export const ticketTiers = [
  { name: "Early bird", price: 350, note: "Sold out", state: "gone" },
  {
    name: "Regular",
    price: 450,
    note: "Until Sep 9",
    state: "live",
  },
  {
    name: "Company-sponsored",
    price: 650,
    note: "Invoiced, expensable, no deadline",
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
  // Set once the post-Regular tier is decided; until then the strip says prices
  // rise without quoting a figure we might not honour.
  nextPrice: null,
  // A remaining-count only reads as scarcity once it is small. Above this it reads
  // as "nobody is buying", so the strip shows the deadline instead. Raise it as the
  // tier fills; below it the live count and the sold meter appear on their own.
  showCountBelow: 60,
};

export const regularRemaining = () =>
  Math.max(0, regularTier.total - regularTier.sold);

export const LUMA_URL = "https://luma.com/sfrubyconf2026";
