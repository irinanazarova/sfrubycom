// Sponsor tier definitions
export const sponsorTiers = [
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
    claimed: 5,
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
    available: 15,
    claimed: 9,
  },
];

// Special sponsorship opportunities
export const specialOpportunities = [
  {
    name: "Reception Sponsor",
    price: "TBD",
    description: "Exclusive sponsorship of the evening reception on Day 1.",
    available: 1,
    claimed: 0,
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
  tidewave: {
    id: "tidewave",
    name: "Tidewave AI",
    tier: "Emerald",
    logo: "/sponsor_tidewave.png",
    url: "https://tidewave.ai",
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
