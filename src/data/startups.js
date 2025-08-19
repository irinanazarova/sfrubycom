/*  Startup companies data - real companies founded or led by our speakers
Bolt.new
Lago
Stepful
AccessGrid
Binti
Suppli
NexHealth
Simple AI
Sixfold
Cactus
*/
export const startups = {
  bolt_new: {
    id: "bolt_new",
    name: "Bolt.new",
    logo: "/startup_boltnew.png",
    url: "https://bolt.new",
    description:
      "AI-native browser tool for building and deploying full-stack web apps with zero code. Launched 2024; $40M ARR in 5 months.",
    speakerId: "",
    demoTime: "",
  },
  lago: {
    id: "lago",
    name: "Lago",
    logo: "/startup_lago.png",
    url: "https://getlago.com",
    description:
      "Open-source platform for metering, billing, and usage-based pricing. Flexible, self-hosted, developer-first. YC-backed.",
    speakerId: "",
    demoTime: "",
  },
  stepful: {
    id: "stepful",
    name: "Stepful",
    logo: "/startup_stepful.png",
    url: "https://www.stepful.com",
    description:
      "Online healthcare training for entry-level roles in four months. Tech-driven, accessible to those with a high school diploma.",
    speakerId: "",
    demoTime: "",
  },
  accessgrid: {
    id: "accessgrid",
    name: "AccessGrid",
    logo: "/startup_accessgrid.png",
    url: "https://accessgrid.com",
    description:
      "API for issuing NFC credentials on mobile, compatible with 50+ DESFire readers.",
    speakerId: "",
    demoTime: "",
  },
  binti: {
    id: "binti",
    name: "Binti",
    logo: "/startup_binti.png",
    url: "https://binti.com",
    description:
      "SaaS for child welfare, streamlining foster/adoption for agencies and families.",
    speakerId: "",
    demoTime: "",
  },
  suppli: {
    id: "suppli",
    name: "Suppli",
    logo: "/startup_suppli.png",
    url: "https://gosuppli.com",
    description:
      "A/R, collections, and payment automation for B2B construction suppliers.",
    speakerId: "",
    demoTime: "",
  },
  nexhealth: {
    id: "nexhealth",
    name: "NexHealth",
    logo: "/startup_nexhealth.png",
    url: "https://nexhealth.com",
    description:
      "End-to-end patient experience platform for healthcare practices.",
    speakerId: "",
    demoTime: "",
  },
  simple_ai: {
    id: "simple_ai",
    name: "Simple AI",
    logo: "/startup_simpleai.png",
    url: "https://usesimple.ai",
    description:
      "Voice AI agents for enterprise—sales, support, scheduling via phone.",
    speakerId: "",
    demoTime: "",
  },
  sixfold: {
    id: "sixfold",
    name: "Sixfold",
    logo: "/startup_sixfold.png",
    url: "https://sixfold.ai",
    description:
      "GenAI platform for insurance carriers: automates underwriting, triages risk.",
    speakerId: "",
    demoTime: "",
  },
  cactus: {
    id: "cactus",
    name: "Cactus",
    logo: "/startup_cactus.png",
    url: "https://oncactus.com",
    description:
      "AI copilot that runs admin and booking for solopreneurs and small businesses.",
    speakerId: "",
    demoTime: "",
  },
};

// Helper functions
export function getAllStartups() {
  return Object.values(startups);
}

export function getStartup(startupId) {
  return startups[startupId];
}

export function getStartupsByCategory(category) {
  return Object.values(startups).filter(
    (startup) => startup.category === category,
  );
}

export function getStartupCategories() {
  const categories = [
    ...new Set(Object.values(startups).map((startup) => startup.category)),
  ];
  return categories.sort();
}

// Get startups for display (sorted by demo time)
export function getStartupsForDisplay() {
  return Object.values(startups).sort((a, b) => {
    return a.demoTime.localeCompare(b.demoTime);
  });
}
