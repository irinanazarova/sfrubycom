// Meetup recording data from SF Bay Area Ruby monthly meetups
// Each entry is a single YouTube video with timestamped individual talks
// Data sourced from YouTube descriptions and rubyevents.org

const meetupRecordings = [
  {
    id: "meetup-2024-03",
    title: "SF Bay Area Ruby Meetup - March 2024",
    date: "2024-03-28",
    youtubeId: "9-PWz9nbrT8",
    venue: "GitHub HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Autoloading in Rails, GoodJob",
        speaker: "Ben Sheldon",
        company: "GitHub",
        timestamp: 275,
      },
      {
        title: "Building a Cloud in Ruby and Roda",
        speaker: "Daniel Farina",
        company: "Ubicloud",
        timestamp: 2382,
      },
      {
        title: "Rails on WASM and in a Browser",
        speaker: "Vladimir Dementyev",
        company: "Evil Martians",
        timestamp: 4291,
      },
    ],
  },
  {
    id: "meetup-2024-07",
    title: "SF Bay Area Ruby Meetup - July 2024",
    date: "2024-07-18",
    youtubeId: "A31jZ_7KC5Y",
    venue: "Cisco Meraki",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Catching Waves with Time-Series Data",
        speaker: "Liz Heym",
        company: "Meraki",
        timestamp: 965,
      },
      {
        title:
          "How to Optimize Postgres Queries for Rails Developers",
        speaker: "Lukas Fittl",
        company: "pganalyze",
        timestamp: 2215,
      },
      {
        title: "Dokku Your Way to Heroku",
        speaker: "Yang Chung",
        timestamp: 4445,
      },
      {
        title: "Let's Write a C Extension!",
        speaker: "Cameron Dutro",
        company: "GitHub",
        timestamp: 5613,
      },
      {
        title:
          "Borrowing Concepts from React to Build Dynamic Forms in Rails",
        speaker: "James Kerr",
        timestamp: 6600,
      },
    ],
  },
  {
    id: "meetup-2024-09",
    title: "SF Bay Area Ruby Meetup - September 2024",
    date: "2024-09-03",
    youtubeId: "aqvGdPF5Qro",
    venue: "GitHub HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Web Components at GitHub",
        speaker: "Cameron Dutro",
        company: "GitHub",
        timestamp: 0,
      },
      {
        title: "YJIT and Why You Should Start Using It",
        speaker: "Takashi Kokubun",
        company: "Shopify",
        timestamp: 0,
      },
      {
        title: "Terminalwire: Ship a CLI for Your Web App",
        speaker: "Brad Gessler",
        timestamp: 0,
      },
      {
        title:
          "Exploring the Flavors of Ruby on Rails Architectures in the Wild",
        speaker: "Kamil Nicieja",
        company: "Plane",
        timestamp: 0,
      },
      {
        title: "Concurrency Paradigms in Ruby 3.3: Fibers and Ractors",
        speaker: "Konstantin Gredeskoul",
        company: "Academia.edu",
        timestamp: 0,
      },
    ],
  },
  {
    id: "meetup-2024-10",
    title: "SF Bay Area Ruby Meetup - October 2024",
    date: "2024-10-10",
    youtubeId: "JFD8MJiUk6g",
    venue: "Chime HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Ruby as a Legacy Ecosystem",
        speaker: "Noel Rappin",
        company: "Chime",
        timestamp: 340,
      },
      {
        title: "Forms on Rails",
        speaker: "Vladimir Dementyev",
        company: "Evil Martians",
        timestamp: 2167,
      },
    ],
  },
  {
    id: "meetup-2024-11",
    title: "SF Bay Area Ruby Meetup - November 2024",
    date: "2024-11-07",
    youtubeId: "emg8KhSKXzI",
    venue: "Academia.edu",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Designing for Loose Coupling in Ruby",
        speaker: "Konstantin Gredeskoul",
        company: "Academia.edu",
        timestamp: 320,
      },
      {
        title: "How to Translate Your Rails App into Over 20 Languages",
        speaker: "Chris Fung",
        company: "Binti",
        timestamp: 1760,
      },
      {
        title: "Content Management in Rails with Sitepress",
        speaker: "Brad Gessler",
        company: "Rocketship",
        timestamp: 3960,
      },
      {
        title: "The First 10 Years of Roda",
        speaker: "Jeremy Evans",
        timestamp: 5176,
      },
    ],
  },
  {
    id: "meetup-2024-12",
    title: "SF Bay Area Ruby Meetup - December 2024",
    date: "2024-12-03",
    youtubeId: "NU7ld8ERUFY",
    venue: "Sentry",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "AI Grouping for Ruby SDK at Sentry",
        speaker: "Tillman Elser",
        company: "Sentry",
        timestamp: 450,
      },
      {
        title: "ActiveAgents",
        speaker: "Justin Bowen",
        timestamp: 2132,
      },
      {
        title: "Ruby & AI at Stepful",
        speaker: "Edoardo Serra",
        company: "Stepful",
        timestamp: 3578,
      },
      {
        title: "Lammy",
        speaker: "Kamil Nicieja",
        company: "Plane",
        timestamp: 4977,
      },
      {
        title: "Voice AI Apps with AnyCable",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 5915,
      },
    ],
  },
  {
    id: "meetup-2025-01",
    title: "SF Bay Area Ruby Meetup - January 2025",
    date: "2025-01-16",
    youtubeId: "cnhBfOCI0JA",
    venue: "Productboard HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "How to Make Your Tests Easier to Understand",
        speaker: "Jason Swett",
        timestamp: 796,
      },
      {
        title: "Using Passkeys for Sign-in Flows in Rails",
        speaker: "Bart Agapinan",
        company: "ID.me",
        timestamp: 2455,
      },
      {
        title: "Understanding Wasm by Using a Regex Library",
        speaker: "Cameron Dutro",
        company: "GitHub",
        timestamp: 4000,
      },
      {
        title: "Bazel: A Granular Build System for Massive Monorepos",
        speaker: "Alex Rodionov",
        company: "Toptal",
        timestamp: 5717,
      },
    ],
  },
  {
    id: "meetup-2025-02",
    title: "SF Bay Area Ruby Meetup - February 2025",
    date: "2025-02-11",
    youtubeId: "M25fETp83jQ",
    venue: "GitHub HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Lessons from 5 Years of UI Architecture at GitHub",
        speaker: "Joel Hawksley",
        company: "GitHub",
        timestamp: 2425,
      },
      {
        title: "How We Built a Bank with Ruby on Rails",
        speaker: "Sam Poder",
        company: "Hack Club",
        timestamp: 5209,
      },
      {
        title: "Presence Ain't Perfect",
        speaker: "Vladimir Dementyev",
        company: "Evil Martians",
        timestamp: 9115,
      },
      {
        title: "Hexagonal Architecture and Rails",
        speaker: "Alan Ridlehoover",
        company: "Cisco",
        timestamp: 11418,
      },
    ],
  },
  {
    id: "meetup-2025-04",
    title: "SF Bay Area Ruby Meetup - April 2025",
    date: "2025-04-23",
    youtubeId: "eqLbYCCCRO0",
    venue: "Sentry HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Solving Ruby Issues in Record-time",
        speaker: "Neil Manvar",
        company: "Sentry",
        timestamp: 214,
      },
      {
        title:
          "Grow Your API Integration Suite While Keeping Your Devs Focused on the Product Core",
        speaker: "Rich Steinmetz",
        company: "ClickFunnels",
        timestamp: 1312,
      },
      {
        title: "Sorbet Syntax: A Retrospective",
        speaker: "Jake Zimmerman",
        company: "Stripe",
        timestamp: 3505,
      },
      {
        title: "Starting a Rails Project with Packwerk",
        speaker: "Todd Sedano",
        company: "Gusto",
        timestamp: 5679,
      },
      {
        title: "Start-ups on Rails",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 7168,
      },
    ],
  },
  {
    id: "meetup-2025-05",
    title: "SF Bay Area Ruby Meetup - May 2025",
    date: "2025-05-21",
    youtubeId: "-9MZVvnqw-0",
    venue: "Cisco Meraki HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title:
          "Derailing Our Application: How and Why We Are Decoupling Ourselves from Rails",
        speaker: "Fito von Zastrow & Alan Ridlehoover",
        company: "Cisco Meraki",
        timestamp: 502,
      },
      {
        title: "Structured AI Workflows at Scale with Roast",
        speaker: "Obie Fernandez",
        company: "Shopify",
        timestamp: 2365,
      },
      {
        title: "Deploying a Hobby Project on Rails 8 and Kamal",
        speaker: "Todd Kummer",
        company: "Rockridge Solutions",
        timestamp: 4721,
      },
      {
        title: "Red in Fantasyland",
        speaker: "Brandon Weaver",
        company: "One Medical",
        timestamp: 6355,
      },
    ],
  },
  {
    id: "meetup-2025-06",
    title: "SF Bay Area Ruby Meetup - June 2025",
    date: "2025-06-04",
    youtubeId: "F_mznVxIfYM",
    venue: "Chime",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Optimize Your Ruby World with JRuby",
        speaker: "Charles Oliver Nutter",
        company: "JRuby",
        timestamp: 536,
      },
      {
        title: "Ruby Gems Analytics Using ClickHouse",
        speaker: "Melvyn Peignon",
        company: "ClickHouse",
        timestamp: 3610,
      },
      {
        title: "Learnings and Roadmap for Langchain.rb",
        speaker: "Andrei Bondarev",
        timestamp: 5520,
      },
      {
        title: "Systematic LLM Evaluation for Rails Developers",
        speaker: "Kieran Klaassen",
        company: "Cora",
        timestamp: 5927,
      },
      {
        title:
          "Agents Are Controllers — Agent-oriented Programming Conventions for Rails",
        speaker: "Justin Bowen",
        company: "Active Agent",
        timestamp: 6882,
      },
    ],
  },
  {
    id: "meetup-2025-06-elixir",
    title: "SF Ruby & Elixir Special - June 2025",
    date: "2025-06-18",
    youtubeId: "sv0GsuAAWe8",
    venue: "PlanetScale",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Tidewave.ai — AI-powered Coding Assistant for Server-Centric Frameworks",
        speaker: "José Valim",
        company: "Elixir",
        timestamp: 0,
      },
    ],
  },
  {
    id: "meetup-2025-07",
    title: "SF Bay Area Ruby Meetup - July 2025",
    date: "2025-07-22",
    youtubeId: "b8lhXJUo_cI",
    venue: "Figma",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Ruby at Figma",
        speaker: "Mike Chlipala & Kim Ahlström",
        company: "Figma",
        timestamp: 340,
      },
      {
        title: "How Figma Builds Admin Tools",
        speaker: "Harrison Touw",
        company: "Figma",
        timestamp: 680,
      },
      {
        title:
          "The Modern View Layer Rails Deserves: A Vision for 2025 and Beyond",
        speaker: "Marco Roth",
        timestamp: 1820,
      },
      {
        title: "Eliminating Unnecessary Implicit Allocations",
        speaker: "Jeremy Evans",
        company: "Ubicloud",
        timestamp: 6127,
      },
    ],
  },
  {
    id: "meetup-2025-08",
    title: "SF Bay Area Ruby Meetup - August 2025",
    date: "2025-08-26",
    youtubeId: "IMAABWxnbUM",
    venue: "GitHub HQ",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Temporal Ruby",
        speaker: "Drew Hoskins",
        company: "Temporal",
        timestamp: 467,
      },
      {
        title:
          "What I've Learned Building an MCP Inspector in Ruby",
        speaker: "Enrique Mogollán",
        company: "Handshake",
        timestamp: 2858,
      },
      {
        title: "Tackling Domain Complexity with Foobara",
        speaker: "Miles Georgi",
        timestamp: 6583,
      },
      {
        title: "Cutting CI Build Time in Half for Whop",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 8084,
      },
      {
        title:
          "Getting the Most out of AI Coding Agents for Your Rails App",
        speaker: "Sergey Karayev",
        company: "Superconductor",
        timestamp: 9046,
      },
    ],
  },
  {
    id: "meetup-2025-10",
    title: "SF Bay Area Ruby Meetup - October 2025",
    date: "2025-10-30",
    youtubeId: "BCKGvKTk3cU",
    venue: "AngelList Founders Cafe",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title:
          "Improving Excel Reporting Workflow Productivity by 10x with a Graph-based Ruby DSL",
        speaker: "Chamod Gamage",
        company: "AngelList",
        timestamp: 26,
      },
      {
        title:
          "Building Ruby-Rust Native Extensions by Binding Ruby to the Fjall Embedded Key-Value Store",
        speaker: "Dr. Chris Fung",
        company: "Binti",
        timestamp: 1704,
      },
      {
        title:
          "The Evolution of .env Files and Encrypted, Commit-safe Secrets with MVX",
        speaker: "Scott Motte",
        company: "dotenvx",
        timestamp: 3173,
      },
      {
        title: "Introducing LiveComponent for Rails",
        speaker: "Cameron Dutro",
        company: "Cisco",
        timestamp: 4904,
      },
      {
        title: "Using AI-backed Domain Logic in Foobara",
        speaker: "Miles Georgi",
        company: "Foobara",
        timestamp: 6003,
      },
    ],
  },
];

// Sort by date descending (newest first)
meetupRecordings.sort((a, b) => b.date.localeCompare(a.date));

export function getAllMeetupRecordings() {
  return meetupRecordings;
}

export function getLatestMeetupRecordings(n) {
  return meetupRecordings.slice(0, n);
}

export function getMeetupRecording(id) {
  return meetupRecordings.find((r) => r.id === id);
}

export function formatTimestamp(seconds) {
  if (!seconds) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}
