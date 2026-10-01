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
    name: "Sergey Karayev",
    bio: "Building Superconductor, the multiplayer AI workspace for teams and their coding agents. Twenty years on Rails and a Berkeley CS PhD.",
    orgs: [{ name: "Superconductor", url: "https://www.superconductor.com/" }],
    pixel: "/speaker_sergey_karayev_pixel_256.png",
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

// The ladder is the argument for buying today. Keep it in sync with Luma: each
// ticket type there carries the dates, and a tier whose window has passed is
// `gone` here. Regular and the two single-day tickets closed on Sep 30, 2026.
//
// Late bird is the last ticket an individual can buy, and nothing is published
// after it: once it closes on Nov 8, Company-sponsored is the only one left,
// which is why that card quotes no deadline. One tier carries `headline: true`,
// the price and countdown the hero quotes.
export const ticketTiers = [
  { name: "Early bird", price: 350, note: "Sold out", state: "gone" },
  {
    name: "Regular",
    price: 450,
    note: "Closed Sep 30",
    state: "gone",
  },
  // Two tickets on Luma, "Day 1 ONLY" and "Day 2 ONLY", one row here: the
  // choice was the day, and the price was the same.
  {
    name: "Single day",
    price: 350,
    note: "Closed Sep 30",
    state: "gone",
  },
  {
    name: "Late bird",
    price: 500,
    note: "Both days and the community day. Until Nov 8",
    closesOn: "2026-11-08T23:59:00-08:00",
    state: "live",
    headline: true,
  },
  {
    name: "Company-sponsored",
    price: 650,
    note: "Invoiced, expensable, no deadline. Buying this tier is what keeps Late bird at $500.",
    state: "live",
  },
];

// The tier the hero quotes: its price and, when it has one, its deadline.
// Falls back to any live tier, so a ladder with no headline flag still renders
// a price, and to undefined once nothing is on sale. A caller must handle both
// a missing tier and a tier without `closesOn`: Company-sponsored is invoiced
// and has no deadline, so it is the fallback the day Late bird closes.
export const headlineTier = () =>
  ticketTiers.find((t) => t.state === "live" && t.headline) ??
  ticketTiers.find((t) => t.state === "live");

// Lowest price on sale, for "tickets from $N". Null when nothing is on sale,
// so a caller drops the phrase rather than printing Infinity.
export const lowestLivePrice = () => {
  const live = ticketTiers.filter((t) => t.state === "live").map((t) => t.price);
  return live.length ? Math.min(...live) : null;
};

// Sales counter for the tier on sale, read by the scarcity strip. Price and
// deadline come from `headlineTier()`, so only the count lives here. Update
// from Luma (Registration tab shows sold/total), or wire `sold` to the Luma API
// in scripts/fetch-luma-events.js and read it from src/content/. Deliberately
// plain numbers so a non-engineer can bump them.
//
// `total` is the tier's capacity on Luma, and null when the tier has none: Late
// bird is uncapped, so there is no count to show and the strip shows only the
// deadline. Regular, which closed on Sep 30, sold 51 of 175.
export const salesCounter = {
  tier: "Late bird",
  sold: 0, // Luma, 2026-10-01
  total: null,
  // A remaining-count only reads as scarcity once it is small. Above this it reads
  // as "nobody is buying", so the strip shows the deadline instead. Raise it as the
  // tier fills; below it the live count and the sold meter appear on their own.
  showCountBelow: 60,
};

// Null when the tier is uncapped, so the caller hides the count instead of
// printing a number it cannot know.
export const ticketsRemaining = () =>
  salesCounter.total === null
    ? null
    : Math.max(0, salesCounter.total - salesCounter.sold);

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
