// SF Ruby Conference 2026 — speakers, ticket ladder and live sales counter.
//
// `pixel` points at a 256x256 transparent sprite in /public (see speaker_*_pixel_256.png).
// Speakers without artwork yet render as a "?" character-select slot; drop the sprite in
// and add the `pixel` key to reveal them.
//
// `orgs` is the affiliation line: each entry renders as a link when it has a `url`.
// All URLs are content-verified (page title checked), not just resolved.
//
// `keynote` marks the four sessions everyone is in the hall for (the opener and
// closer of each day, per src/data/schedule-2026.js). `pin` fixes a speaker to
// either end of the grid; everyone else is ordered by whether their sprite has
// landed, so the roster opens on real faces.
export const conferenceSpeakers = [
  {
    name: "Ryan Sherlock",
    bio: "Scales the Rails infrastructure and MySQL fleet behind Fin, the AI customer service agent.",
    orgs: [{ name: "Fin (ex Intercom)", url: "https://fin.ai/" }],
    keynote: true,
    pin: "first",
    pixel: "/speaker_ryan_sherlock_pixel_256.png",
  },
  {
    name: "Cole Robertson",
    bio: "YC S25. Measures bulk inventory nobody can barcode, with LiDAR and computer vision.",
    orgs: [{ name: "Rebulk", url: "https://www.rebulk.com/" }],
    track: "startups",
    pixel: "/speaker_cole_robertson_pixel_256.png",
  },
  {
    name: "Carmine Paolino",
    bio: "Creator of RubyLLM, the Ruby framework for every major AI provider.",
    orgs: [
      { name: "Chat with Work", url: "https://chatwithwork.com/" },
      { name: "RubyLLM", url: "https://rubyllm.com/" },
    ],
    track: "startups",
    pixel: "/speaker_carmine_paolino_pixel_256.png",
  },
  {
    name: "Rosa Gutiérrez",
    bio: "Built Solid Queue, the job backend that ships with Rails 8.",
    orgs: [{ name: "37signals", url: "https://37signals.com/" }],
    track: "scaleups",
    keynote: true,
    pixel: "/speaker_rosa_gutierrez_pixel_256.png",
  },
  {
    name: "Jason Bosco",
    bio: "Bootstrapped an open-source search engine on Rails. It answers 10B+ searches a month.",
    orgs: [{ name: "Typesense", url: "https://typesense.org/" }],
    track: "startups",
    pixel: "/speaker_jason_bosco_pixel_256.png",
  },
  {
    name: "Chris Oliver",
    bio: "Has taught Rails to a generation of developers. Maintains Pay, Noticed and Jumpstart.",
    orgs: [
      { name: "GoRails", url: "https://gorails.com/" },
      { name: "Hatchbox", url: "https://hatchbox.io/" },
    ],
    track: "startups",
    keynote: true,
    pixel: "/speaker_chris_oliver_pixel_256.png",
  },
  {
    name: "Vladimir Dementyev",
    bio: "Author of AnyCable, TestProf and Layered Design for Ruby on Rails Applications.",
    orgs: [{ name: "Evil Martians", url: "https://evilmartians.com/" }],
    track: "startups",
    pixel: "/speaker_vladimir_dementyev_pixel_256.png",
  },
  {
    name: "Jason Thomas",
    bio: "Co-created COSMOS, the Ruby stack used to build, test and fly satellites and robots.",
    orgs: [{ name: "OpenC3", url: "https://openc3.com/" }],
    track: "startups",
    pixel: "/speaker_jason_thomas_pixel_256.png",
  },
  {
    name: "Celina Lopez",
    bio: "Builds public health infrastructure on Rails: the platform connecting labs, clinics and patients.",
    orgs: [{ name: "Primary Health", url: "https://www.primary.health/" }],
    pixel: "/speaker_celina_lopez_pixel_256.png",
  },
  {
    name: "Phillip Campbell",
    bio: "Scales Sidekiq and the Rails apps that run payroll for hundreds of thousands of small businesses.",
    orgs: [{ name: "Gusto", url: "https://gusto.com/" }],
    pixel: "/speaker_phillip_campbell_pixel_256.png",
  },
  {
    name: "Peter Zhu",
    bio: "Ruby core committer. Works on Ruby's garbage collector at Shopify.",
    orgs: [{ name: "Shopify", url: "https://www.shopify.com/" }],
    pixel: "/speaker_peter_zhu_pixel_256.png",
  },
  {
    name: "Ben Sheldon",
    bio: "Author of GoodJob, the Postgres-backed Active Job backend.",
    orgs: [{ name: "Frontdoor Benefits", url: "https://www.openfrontdoor.com/" }],
    pixel: "/speaker_ben_sheldon_pixel_256.png",
  },
  {
    name: "Alex Coomans",
    bio: "Simplifies the Rails architecture behind Persona's identity platform. Spent nine years scaling Square before that.",
    orgs: [{ name: "Persona", url: "https://withpersona.com/" }],
    pixel: "/speaker_alex_coomans_pixel_256.png",
  },
  {
    name: "Madison Sites",
    bio: "Wrangles legacy Rails in production. Speaks on what AI agents can and can't fix in old codebases.",
    orgs: [{ name: "Order.co", url: "https://www.order.co/" }],
    pixel: "/speaker_madison_sites_pixel_256.png",
  },
  {
    name: "CJ Avilla",
    bio: "Teaches Rails on YouTube. Previously an engineer at Craftwork and developer educator at Stripe.",
    orgs: [{ name: "Anthropic", url: "https://www.anthropic.com/" }],
    pixel: "/speaker_cj_avilla_pixel_256.png",
  },
  {
    name: "Marco Roth",
    bio: "Creator of Herb, the HTML-aware toolchain that gives ERB a parser, formatter and language server.",
    orgs: [{ name: "Herb", url: "https://herb-tools.dev/" }],
    track: "startups",
    pixel: "/speaker_marco_roth_pixel_256.png",
  },
  {
    name: "Svyatoslav Kryukov",
    bio: "Maintains Inertia Rails, the Rails and React stack Evil Martians builds greenfield products on.",
    orgs: [{ name: "Evil Martians", url: "https://evilmartians.com/" }],
    track: "startups",
    pixel: "/speaker_svyatoslav_kryukov_pixel_256.png",
  },
  {
    name: "JP Camara",
    bio: "Author of the Ruby concurrency series, the long-form deep dive into threads and the GVL that is becoming a book.",
    orgs: [{ name: "Wealthbox", url: "https://www.wealthbox.com/" }],
    track: "startups",
    pixel: "/speaker_jp_camara_pixel_256.png",
  },
  {
    name: "Irina Nazarova",
    bio: "CEO, and co-founder of AnyCable, the WebSocket server for Ruby.",
    orgs: [{ name: "Evil Martians", url: "https://evilmartians.com/" }],
    track: "startups",
    keynote: true,
    pin: "last",
    pixel: "/speaker_irina_nazarova_pixel_256.png",
  },
];

// CFP speakers type their own names, so the feed sometimes disagrees with the
// roster above ("phillc", nicknames). Map the CFP spelling to the roster name
// here; the build warns about any CFP name that still matches nobody, and each
// warning is fixed by adding one line here (or adding the speaker to the roster).
// Empty right now: the 2026 feed's names were fixed in the CFP app itself.
export const cfpNameAliases = {};

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
    note: "Both days and the community day. Until Sep 30",
    state: "live",
  },
  // Two tickets on Luma, "Day 1 ONLY" and "Day 2 ONLY", one row here: the
  // choice is the day, and the price is the same.
  {
    name: "Single day",
    price: 350,
    note: "Day 1 only (Nov 10, AI-heavy) or Day 2 only (Nov 11, AI-light).",
    state: "live",
  },
  {
    name: "Company-sponsored",
    price: 650,
    note: "Invoiced, expensable, no deadline. Buying this tier is what keeps Regular at $450.",
    state: "live",
  },
];

// Regular-tier sales counter. Update from Luma (Registration tab shows sold/total),
// or wire `sold` to the Luma API in scripts/fetch-luma-events.js and read it from
// src/content/. Deliberately a plain number so a non-engineer can bump it.
export const regularTier = {
  sold: 20, // Luma, 2026-09-06
  total: 174,
  closesOn: "2026-09-30T23:59:00-07:00",
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

// Every link to the ticket page goes through these two helpers, so that a
// click is measurable end to end: Plausible records a "Ticket click" event
// with the placement as a property (the tagged-events extension reads the
// class names, no script needed), and Luma stores the utm_source on the
// registration, so a paid ticket can be traced back to the button that sold
// it. Luma keeps only utm_source per guest, which is why the placement is
// encoded there rather than in utm_campaign.
//
// Usage in a component:
//   <a href={ticketLink("hero")} class={`px-btn ${ticketEventClass("hero")}`}>
//
// Placements are short kebab-case names for where the link sits (hero, header,
// ladder, pier, speakers-top, team, manager-email...). Add new ones freely;
// the Plausible goal is one event name with the placement as a breakdown.
export const ticketLink = (placement) =>
  `${LUMA_URL}?utm_source=sfruby-${placement}&utm_medium=site&utm_campaign=conf2026`;

export const ticketEventClass = (placement) =>
  `plausible-event-name=Ticket+click plausible-event-placement=${placement}`;
