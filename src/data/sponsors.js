// Sponsor tier definitions
export const sponsorTiers = [
  // ACTIVE TIERS - Accepting new sponsors (9 days before conference)
  {
    name: "Post Production",
    price: "$7,000",
    description:
      "Sponsor conference recordings and reach attendees through video content.",
    benefits: [
      "Embedded logo on conference recordings",
      "Link to sponsor in description of conference recordings",
      "Job Postings promoted to attendees through Job Board",
      "Logo on conference website and printed materials",
      "Social media recognition",
      "1 complimentary conference ticket",
    ],
    available: 5,
    claimed: 0,
    stripelink: "https://buy.stripe.com/8x2bJ18bi9ylacgeuNe7m04",
    active: true,
  },
  {
    name: "Emerald",
    price: "$3,000",
    description: "Strong presence with quality branding and networking.",
    benefits: [
      "Logo on conference website and printed materials",
      "Sponsor acknowledgment during opening remarks",
      "Social media recognition",
      "1 complimentary conference ticket",
    ],
    available: 18,
    claimed: 14,
    stripelink: "https://buy.stripe.com/eVqeVd1MUh0NckofyRe7m03",
    active: true,
  },

  // INACTIVE TIERS - No longer accepting new sponsors
  {
    name: "Pickaxe ⛏️",
    price: "$15,000",
    description: "Premier sponsorship with maximum visibility and branding.",
    benefits: [
      "Prominent logo placement on all conference materials",
      "Featured sponsor acknowledgment during opening and closing remarks",
      "Dedicated sponsor spotlight on social media channels",
      "Premium exhibition space 16.5'x5.8'",
      "Opportunity to host a sponsored workshop, or a custom interactive experience",
      "5 complimentary conference tickets",
    ],
    available: 5,
    claimed: 3,
    stripelink: "",
    active: false,
  },
  {
    name: "Ruby",
    price: "$7,000",
    description:
      "High-visibility sponsorship with excellent branding opportunities.",
    benefits: [
      "Logo on conference website and printed materials",
      "Sponsor acknowledgment during opening remarks",
      "Social media recognition",
      "Exhibition space (5'x3.3') or branded gifts for attendees",
      "Lightning talk opportunity (5 minutes)",
      "2 complimentary conference tickets",
    ],
    available: 10,
    claimed: 8,
    stripelink: "https://buy.stripe.com/bJe8wP3V26m9bgk2M5e7m02",
    active: false,
  },
  {
    name: "Reception",
    price: "Special",
    description: "Exclusive sponsorship of the evening reception.",
    benefits: [
      "Exclusive branding at the reception event",
      "Logo on conference website and printed materials",
      "Special acknowledgment during the reception",
      "Social media recognition",
      "2 complimentary conference tickets",
    ],
    available: 1,
    claimed: 1,
    stripelink: "",
    active: false,
  },
  {
    name: "Travel",
    price: "Special",
    description: "Supporting speakers' travel to the conference.",
    benefits: [
      "Logo on conference website and printed materials",
      "Social media recognition",
      "Special acknowledgment",
    ],
    available: 5,
    claimed: 3,
    active: false,
  },
];

// Special sponsorship opportunities
export const specialOpportunities = [
  {
    name: "Reception",
    description: "Exclusive sponsorship of the evening reception on Day 1.",
    available: 1,
    claimed: 1,
  },
];

// Current sponsors data
export const sponsors = {
  chime: {
    id: "chime",
    name: "Chime",
    tier: "Pickaxe ⛏️",
    logo: "/sponsor_chime.png",
    url: "https://www.chime.com",
  },
  "bolt-new": {
    id: "bolt-new",
    name: "Bolt.new",
    displayName: "Bolt.new by Stackblitz", // For longer display names
    tier: "Pickaxe ⛏️",
    logo: "/sponsor_boltnew.png",
    url: "https://www.bolt.new",
  },
  cisco: {
    id: "cisco",
    name: "Cisco",
    tier: "Pickaxe ⛏️",
    logo: "/sponsor_cisco.png",
    url: "https://www.cisco.com",
  },
  gusto: {
    id: "gusto",
    name: "Gusto",
    tier: "Ruby",
    logo: "/sponsor_gusto.png",
    url: "https://www.gusto.com",
  },
  temporal: {
    id: "temporal",
    name: "Temporal",
    tier: "Ruby",
    logo: "/sponsor_temporal.png",
    url: "https://temporal.io/",
  },
  intercom: {
    id: "intercom",
    name: "Avo",
    tier: "Ruby",
    logo: "/sponsor_intercom.png",
    url: "https://intercom.com",
  },
  omada: {
    id: "omada",
    name: "Omada",
    tier: "Ruby",
    logo: "/sponsor_omada.png",
    url: "https://omadahealth.com",
  },
  avo: {
    id: "avo",
    name: "Avo",
    tier: "Ruby",
    logo: "/sponsor_avo.png",
    url: "https://avohq.io/",
  },
  thatch: {
    id: "thatch",
    name: "Thatch",
    tier: "Ruby",
    logo: "/sponsor_thatch.png",
    url: "https://thatch.com/",
  },
  finta: {
    id: "finta",
    name: "Finta",
    tier: "Ruby",
    logo: "/sponsor_finta.png",
    url: "https://finta.com/",
  },
  angellist: {
    id: "angellist",
    name: "AngelList",
    tier: "Ruby",
    logo: "/sponsor_angellist.png",
    url: "https://angellist.com",
  },
  planetscale: {
    id: "planetscale",
    name: "PlanetScale",
    tier: "Ruby",
    logo: "/sponsor_planetscale.png",
    url: "https://planetscale.com",
  },
  gitbutler: {
    id: "gitbutler",
    name: "GitButler",
    tier: "Reception",
    logo: "/sponsor_gitbutler.png",
    url: "https://gitbutler.com",
  },
  scout: {
    id: "scout",
    name: "Scout Monitoring",
    tier: "Emerald",
    logo: "/sponsor_scout.png",
    url: "https://scoutapm.com/",
  },
  typesense: {
    id: "typesense",
    name: "typesense",
    tier: "Emerald",
    logo: "/sponsor_typesense.png",
    url: "https://typesense.org/",
  },
  cedarcode: {
    id: "cedarcode",
    name: "Cedarcode",
    tier: "Emerald",
    logo: "/sponsor_cedarcode.png",
    url: "https://www.cedarcode.com/",
  },
  "planet-argon": {
    id: "planet-argon",
    name: "Planet Argon",
    tier: "Emerald",
    logo: "/sponsor_planetargon.png",
    url: "https://www.planetargon.com/",
  },
  cactus: {
    id: "cactus",
    name: "Cactus",
    tier: "Emerald",
    logo: "/sponsor_cactus.png",
    url: "https://oncactus.com",
  },
  visuality: {
    id: "visuality",
    name: "Visuality",
    tier: "Emerald",
    logo: "/sponsor_visuality.png",
    url: "https://www.visuality.pl/",
  },
  ubicloud: {
    id: "ubicloud",
    name: "Ubicloud",
    tier: "Emerald",
    logo: "/sponsor_ubicloud.png",
    url: "https://ubicloud.com",
  },
  uscreen: {
    id: "uscreen",
    name: "Uscreen",
    tier: "Emerald",
    logo: "/sponsor_uscreen.png",
    url: "https://www.uscreen.tv/",
  },
  superconductor: {
    id: "superconductor",
    name: "Superconductor",
    tier: "Emerald",
    logo: "/sponsor_superconductor.png",
    url: "https://www.superconductor.dev/",
  },
  companycam: {
    id: "companycam",
    name: "CompanyCam",
    tier: "Emerald",
    logo: "/sponsor_companycam.png",
    url: "https://www.companycam.com/",
  },
  wyeworks: {
    id: "wyeworks",
    name: "Wyeworks",
    tier: "Emerald",
    logo: "/sponsor_wyeworks.png",
    url: "https://www.wyeworks.com/",
  },
  beyondfinance: {
    id: "beyondfinance",
    name: "Beyond Finance",
    tier: "Emerald",
    logo: "/sponsor_beyondfinance.png",
    url: "https://www.beyondfinance.com/",
  },
  binti: {
    id: "binti",
    name: "Binti",
    tier: "Emerald",
    logo: "/sponsor_binti.png",
    url: "https://binti.com",
  },
  saeloun: {
    id: "saeloun",
    name: "Saeloun",
    tier: "Emerald",
    logo: "/sponsor_saeloun.png",
    url: "https://www.saeloun.com/",
  },
  tidewave: {
    id: "tidewave",
    name: "Tidewave AI",
    tier: "Travel",
    logo: "/sponsor_tidewave.png",
    url: "https://tidewave.ai",
  },
  hackclub: {
    id: "hackclub",
    name: "Hack Club",
    tier: "Travel",
    logo: "/sponsor_hackclub.png",
    url: "https://hackclub.com",
  },
  ezcater: {
    id: "ezcater",
    name: "ezCater",
    tier: "Travel",
    logo: "/sponsor_ezcater.png",
    url: "https://ezcater.com",
  },
  mux: {
    id: "mux",
    name: "Mux",
    tier: "Post Production",
    logo: "/sponsor_mux.png",
    url: "https://mux.com",
  },
};

// Special organizers
export const organizers = {
  "evil-martians": {
    id: "evil-martians",
    name: "Evil Martians",
    logo: "/evilmartians.png",
    url: "https://evilmartians.com",
  },
};

// Helper functions
export function getSponsorsByTier(tierName) {
  return Object.values(sponsors).filter((sponsor) => sponsor.tier === tierName);
}

export function getAllSponsors() {
  return Object.values(sponsors);
}

export function getSponsor(sponsorId) {
  return sponsors[sponsorId];
}

export function getSponsorTier(tierName) {
  return sponsorTiers.find((tier) => tier.name === tierName);
}

export function getSponsorsGroupedByTier() {
  const tiers = {};

  // Initialize tiers with empty arrays
  sponsorTiers.forEach((tier) => {
    tiers[tier.name] = {
      name: tier.name,
      sponsors: [],
    };
  });

  // Group sponsors by tier
  Object.values(sponsors).forEach((sponsor) => {
    if (tiers[sponsor.tier]) {
      tiers[sponsor.tier].sponsors.push(sponsor);
    }
  });

  // Return as array for easier iteration
  return Object.values(tiers).filter((tier) => tier.sponsors.length > 0);
}

// Convert sponsors to the format expected by the sponsors page (flat array)
export function getSponsorsForSponsorsPage() {
  return Object.values(sponsors).map((sponsor) => ({
    name: sponsor.name,
    tier: sponsor.tier,
    logo: sponsor.logo,
    url: sponsor.url,
  }));
}

// Convert sponsors to the format expected by the Sponsors component (grouped by tier)
export function getSponsorsForComponent() {
  return getSponsorsGroupedByTier().map((tier) => ({
    name: tier.name,
    sponsors: tier.sponsors.map((sponsor) => ({
      name: sponsor.displayName || sponsor.name,
      logo: sponsor.logo,
      url: sponsor.url,
    })),
  }));
}
