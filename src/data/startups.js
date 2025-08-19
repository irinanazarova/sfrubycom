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
      "Mission-driven tech company using software to help children find families, streamlining foster/adoption, and has helped over 110,000 families.",
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
      "Patient experience platform that streamlines the entire healthcare journey, from online scheduling and digital forms to automated messaging and online payments.",
    speakerId: "",
    demoTime: "",
  },
  simple_ai: {
    id: "simple_ai",
    name: "Simple AI",
    logo: "/startup_simpleai.png",
    url: "https://usesimple.ai",
    description:
      "Simple AI makes it easy to build and deploy enterprise-grade phone agents in days, not weeks. Iconic businesses use us for sales calls, customer support, leads qualification, and more. YC-backed.",
    speakerId: "",
    demoTime: "",
  },
  sixfold: {
    id: "sixfold",
    name: "Sixfold",
    logo: "/startup_sixfold.png",
    url: "https://sixfold.ai",
    description:
      "Insurtech startup that utilizes generative AI to optimize insurance underwriting processes. ",
    speakerId: "",
    demoTime: "",
  },
  cactus: {
    id: "cactus",
    name: "Cactus",
    logo: "/startup_cactus.png",
    url: "https://oncactus.com",
    description:
      "AI-powered business assistant that answers, qualifies, and follows up with every lead around the clock—so you never miss a customer, call, or opportunity. ",
    speakerId: "",
    demoTime: "",
  },
  corepilot: {
    id: "corepilot",
    name: "CorePilot  ",
    logo: "/startup_corepilot.png",
    url: "https://corepilot.com",
    description:
      "AI-powered Enterprise Resource Planning (ERP) platform specifically designed to streamline and automate workflows within the aviation aftermarket. ",
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
