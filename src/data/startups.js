// Startup companies data - real companies founded or led by our speakers
export const startups = {
  "roast-tech": {
    id: "roast-tech",
    name: "Roast",
    logo: "/startup_roast.png",
    url: "https://roast.tech",
    description: "AI-powered code review and optimization platform built with Ruby",
    speakerId: "obie-fernandez",
    category: "AI/ML",
    demoTime: "Day 1 - 3:00 PM"
  },
  "active-agent": {
    id: "active-agent",
    name: "Active Agent",
    logo: "/startup_activeagent.png",
    url: "https://activeagent.ai",
    description: "Rails-native AI framework where Agents are Controllers",
    speakerId: "justin-bowen",
    category: "AI/ML",
    demoTime: "Day 1 - 3:15 PM"
  },
  "chat-with-work": {
    id: "chat-with-work",
    name: "Chat with Work",
    logo: "/startup_chatwithwork.png",
    url: "https://chatwith.work",
    description: "Enterprise AI assistant for workplace productivity",
    speakerId: "carmine-paolino",
    category: "AI/ML",
    demoTime: "Day 1 - 3:30 PM"
  },
  "frontdoor-benefits": {
    id: "frontdoor-benefits",
    name: "Frontdoor Benefits",
    logo: "/startup_frontdoor.png",
    url: "https://frontdoorbenefits.com",
    description: "Modern benefits administration platform for growing companies",
    speakerId: "ben-sheldon",
    category: "HR Tech",
    demoTime: "Day 2 - 1:00 PM"
  },
  "bellawatt": {
    id: "bellawatt",
    name: "Bellawatt",
    logo: "/startup_bellawatt.png",
    url: "https://bellawatt.com",
    description: "Software consultancy specializing in energy sector solutions",
    speakerId: "brian-knoles",
    category: "Energy",
    demoTime: "Day 2 - 1:15 PM"
  },
  "wealthbox": {
    id: "wealthbox",
    name: "Wealthbox CRM",
    logo: "/startup_wealthbox.png",
    url: "https://wealthbox.com",
    description: "CRM platform designed specifically for financial advisors",
    speakerId: "jp-camara",
    category: "FinTech",
    demoTime: "Day 2 - 1:30 PM"
  },
  "avo-hq": {
    id: "avo-hq",
    name: "Avo",
    logo: "/startup_avo.png",
    url: "https://avohq.io",
    description: "Admin panel framework for Ruby on Rails applications",
    speakerId: "adrian-marin",
    category: "Dev Tools",
    demoTime: "Day 2 - 1:45 PM"
  },
  "kaspth-consulting": {
    id: "kaspth-consulting",
    name: "kaspth.com",
    logo: "/startup_kaspth.png",
    url: "https://kaspth.com",
    description: "Rails consulting and training for teams looking to level up",
    speakerId: "kasper",
    category: "Consulting",
    demoTime: "Day 2 - 2:00 PM"
  }
};

// Helper functions
export function getAllStartups() {
  return Object.values(startups);
}

export function getStartup(startupId) {
  return startups[startupId];
}

export function getStartupsByCategory(category) {
  return Object.values(startups).filter(startup => startup.category === category);
}

export function getStartupCategories() {
  const categories = [...new Set(Object.values(startups).map(startup => startup.category))];
  return categories.sort();
}

// Get startups for display (sorted by demo time)
export function getStartupsForDisplay() {
  return Object.values(startups).sort((a, b) => {
    return a.demoTime.localeCompare(b.demoTime);
  });
}
