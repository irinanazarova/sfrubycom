// Meetup hosts - companies that open their doors to the Ruby community
export const hosts = {
  ycombinator: {
    id: "ycombinator",
    name: "Y Combinator",
    logo: "/host_ycombinator.png",
    url: "https://www.ycombinator.com",
    summary:
      "The startup accelerator behind Airbnb, Stripe, Coinbase, and thousands more.",
    rubyConnection:
      "Every YC batch runs through Rails — applications, Bookface, office hours, all of it",
    tag: "Built with Rails",
  },
  github: {
    id: "github",
    name: "GitHub",
    logo: "/host_github.png",
    url: "https://github.com",
    summary:
      "Where the world builds software. Home to millions of developers and virtually every open-source project.",
    rubyConnection:
      "2M lines of Rails. 1,000+ engineers. Deploys 20x/day. Upgrades Rails every week",
    tag: "Built with Rails",
  },
  chime: {
    id: "chime",
    name: "Chime",
    logo: "/sponsor_chime.png",
    url: "https://www.chime.com",
    sponsorId: "chime",
    summary:
      "America's most-loved neobank with 22M+ members, reimagining banking with no hidden fees.",
    rubyConnection:
      "Massive Ruby on Rails monolith powering millions of financial transactions",
    tag: "Built with Rails",
  },
  sentry: {
    id: "sentry",
    name: "Sentry",
    logo: "/host_sentry.png",
    url: "https://sentry.io",
    summary:
      "The developer-first error tracking and performance monitoring platform used by 100K+ organizations.",
    rubyConnection:
      "91M+ gem downloads. First-class Rails tracing, profiling, and error tracking out of the box",
    tag: "Ruby SDK",
  },
  cisco: {
    id: "cisco",
    name: "Cisco Meraki",
    logo: "/sponsor_cisco.png",
    url: "https://meraki.cisco.com",
    sponsorId: "cisco",
    summary:
      "Cloud-managed networking that powers enterprise IT worldwide, acquired by Cisco for $1.2B.",
    rubyConnection: "2M-line Rails monolith since 2007. Powers 10M+ devices across 3.5M networks",
    tag: "Built with Rails",
  },
  newrelic: {
    id: "newrelic",
    name: "New Relic",
    logo: "/host_newrelic.png",
    url: "https://newrelic.com",
    summary:
      "Observability platform helping engineers monitor, debug, and optimize their entire stack.",
    rubyConnection:
      "Born in 2008 as a Rails-only APM. Ruby literally built the observability industry",
    tag: "Built with Rails",
  },
  productboard: {
    id: "productboard",
    name: "Productboard",
    logo: "/host_productboard.png",
    url: "https://productboard.com",
    summary:
      "Product management platform helping teams build the right products, used by 6,000+ companies.",
    rubyConnection:
      "Rails monolith powers product decisions at Microsoft, Avast, and 6,000+ companies",
    tag: "Built with Rails",
  },
  figma: {
    id: "figma",
    name: "Figma",
    logo: "/host_figma.png",
    url: "https://figma.com",
    summary:
      "The collaborative design tool that redefined how teams create together. Acquired by Adobe for $20B.",
    rubyConnection:
      "Ruby monolith on Sinatra + ActiveRecord handles the majority of web requests. DB scaled 100x, kept the monolith",
    tag: "Built with Ruby",
  },
  intercom: {
    id: "intercom",
    name: "Intercom",
    logo: "/sponsor_intercom.png",
    url: "https://intercom.com",
    sponsorId: "intercom",
    summary:
      "AI-first customer service platform transforming how businesses connect with customers.",
    rubyConnection:
      "2M-line Rails majestic monolith. 150K req/sec at peak. 100K+ tests per PR in 6 minutes",
    tag: "Built with Rails",
  },
  angellist: {
    id: "angellist",
    name: "AngelList",
    logo: "/sponsor_angellist.png",
    url: "https://angellist.com",
    sponsorId: "angellist",
    summary:
      "The platform powering startup fundraising and venture capital, managing $171B+ in assets.",
    rubyConnection:
      "$171B in assets managed through a Rails modular monolith. Moved microservices back in",
    tag: "Built with Rails",
  },
  planetscale: {
    id: "planetscale",
    name: "PlanetScale",
    logo: "/sponsor_planetscale.png",
    url: "https://planetscale.com",
    sponsorId: "planetscale",
    summary:
      "The serverless MySQL platform built on Vitess, the same technology scaling YouTube's database.",
    rubyConnection:
      "The database company runs on Rails — dashboard, API, and control plane all built with it",
    tag: "Built with Rails",
  },
  binti: {
    id: "binti",
    name: "Binti",
    logo: "/sponsor_binti.png",
    url: "https://binti.com",
    sponsorId: "binti",
    summary:
      "Technology for child welfare agencies, helping get every child into a safe, loving home.",
    rubyConnection:
      "Rails app serves 47% of US foster children. 550+ agencies across 36 states",
    tag: "Built with Rails",
  },
  persona: {
    id: "persona",
    name: "Persona",
    logo: "/host_persona.png",
    url: "https://withpersona.com",
    sponsorId: "persona",
    summary:
      "At Persona, we're humanizing online identity by helping companies verify that their users are who they say they are.",
    rubyConnection:
      "Rails powers identity verification across 200+ countries. High-stakes, regulated, mission-critical",
    tag: "Built with Rails",
  },
  academia: {
    id: "academia",
    name: "Academia.edu",
    logo: "/host_academia.png",
    url: "https://academia.edu",
    summary:
      "The platform where 270M+ academics share research papers and connect with scholars worldwide.",
    rubyConnection:
      "Rails since 2008. 270M users, 55M research papers. 18 years and still shipping",
    tag: "Built with Rails",
  },
};

export function getAllHosts() {
  return Object.values(hosts);
}

export function getHost(hostId) {
  return hosts[hostId];
}
