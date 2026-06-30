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
        title: "Community Announcements (AnyCable, Ruby Central, Hotwire.io)",
        speaker: "Adarsh Pandit & Marco Roth",
        timestamp: 1606,
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
        title: "Gocodeo — Software Testing Automation, Asking About Ruby Support",
        speaker: "Meghana Jagadeesh",
        company: "Gocodeo",
        timestamp: 5114,
      },
      {
        title: "Rocky Mountain Ruby Conference Announcement",
        speaker: "Zach Mariscal",
        company: "UserTesting",
        timestamp: 5236,
      },
      {
        title: "Babylist Is Hiring Rails Engineers",
        speaker: "Jamie Alessio",
        company: "Babylist",
        timestamp: 5278,
      },
      {
        title: "RubyConf Chicago + Ruby Central Updates",
        speaker: "Adarsh Pandit",
        company: "Ruby Central",
        timestamp: 5308,
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
      {
        title: "RubyConf Chicago + Ruby Central Updates",
        speaker: "Adarsh Pandit",
        company: "Ruby Central",
        timestamp: 3645,
      },
      {
        title: "Baltic Ruby + RSpec-Llama Gem for Testing AI Models",
        speaker: "Sergy Sergyenko",
        company: "Baltic Ruby",
        timestamp: 4062,
      },
      {
        title: "Lessons from Running Sidekiq at Scale (RubyConf Talk Preview)",
        speaker: "Ziggy the Hamster",
        timestamp: 4580,
      },
      {
        title: "Looking for Ruby Roles (Job Seeker)",
        speaker: "Meredith White",
        timestamp: 4652,
      },
      {
        title: "OyenCov: Usage-Weighted Test Coverage Gem",
        speaker: "Anonoz Chong",
        timestamp: 4741,
      },
      {
        title: "Ruby AI Working Group + Active Agents",
        speaker: "Justin Bowen",
        timestamp: 4773,
      },
      {
        title: "Lemur Story Preview (Functional Programming Talk)",
        speaker: "Brandon Weaver",
        company: "One Medical",
        timestamp: 4950,
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
        title: "Filterameter: A Rails Search/Filter Gem",
        speaker: "Todd Kummer",
        company: "Rockridge Solutions",
        timestamp: 3366,
      },
      {
        title: "Looking for a Product Management Role",
        speaker: "Ken Decanio",
        timestamp: 3467,
      },
      {
        title: "rubyvideo.dev — Indexing Ruby Conference Talks",
        speaker: "Cameron Dutro",
        timestamp: 3506,
      },
      {
        title: "Veteran Ruby Meetups",
        speaker: "Dave Doolin",
        timestamp: 3590,
      },
      {
        title: "us_geo Gem for US Geographic Data",
        speaker: "Brian Durand",
        timestamp: 3638,
      },
      {
        title: "macchiato.dev — A Local-First Ruby Project",
        speaker: "Benjamin Atkin",
        timestamp: 3780,
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
        title: "Learning Ruby (Open Mic)",
        speaker: "Ken Decanio",
        timestamp: 4605,
      },
      {
        title: "epicstrips.tv",
        speaker: "Chris Hobbs",
        timestamp: 4712,
      },
      {
        title: "seafoam.media",
        speaker: "Rhiannon Payne",
        timestamp: 4805,
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
        title: "Active Agent — An Open-Source AI Framework for Rails",
        speaker: "Justin Bowen",
        timestamp: 8458,
      },
      {
        title: "Zetic AI — On-Device AI Infrastructure for Mobile",
        speaker: "Yeonseok Kim",
        company: "Zetic AI",
        timestamp: 8511,
      },
      {
        title: "Pre-Vetted Software Engineering Talent",
        speaker: "Federico Ramallo",
        timestamp: 8669,
      },
      {
        title: "Quantoflow — All-in-One AI AML Platform",
        speaker: "Michael Yu",
        company: "Quantoflow",
        timestamp: 8743,
      },
      {
        title: "Announcing the SF Ruby Slack/Discord",
        speaker: "Brandon Weaver",
        timestamp: 8889,
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
        title: "Eloquent Ruby Second Edition Update",
        speaker: "Brandon Weaver",
        company: "One Medical",
        timestamp: 3283,
      },
      {
        title: "Gusto Is Hiring (Dogpatch SF)",
        speaker: "Todd Sedano",
        company: "Gusto",
        timestamp: 3343,
      },
      {
        title: "Luthor.ai Is Hiring — Bleeding-Edge AI in Ruby",
        speaker: "Glenn Espinosa",
        company: "Luthor.ai",
        timestamp: 3403,
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
        title: "Announcing the SF Ruby AI Hackathon at Sentry HQ",
        speaker: "Kamil Nicieja",
        timestamp: 5672,
      },
      {
        title: "hello-csv: An Open-Source CSV Importer for Rails Apps",
        speaker: "Chris Zhu",
        company: "Primary Health",
        timestamp: 5903,
      },
      {
        title: "sarah.substack.com — Newsletter on Software and Tech",
        speaker: "Sarah Mei",
        timestamp: 6107,
      },
      {
        title: "Eloquent Ruby Second Edition Coming in 2026",
        speaker: "Brandon Weaver",
        company: "One Medical",
        timestamp: 6155,
      },
      {
        title: "Brighton Ruby + EuRuKo Conference Announcements",
        speaker: "Victoria Melnikova",
        company: "Evil Martians",
        timestamp: 6187,
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
        title: "A Ruby Gem to Prettify Rails Notes",
        speaker: "Marisa Lopez",
        company: "Primary Health",
        timestamp: 4794,
      },
      {
        title: "Announcing the SF Ruby AI Hackathon at Sentry HQ",
        speaker: "Kamil Nicieja",
        timestamp: 4957,
      },
      {
        title: "TDD with AI Agents — Game of Life Demo",
        speaker: "Brian Douglas",
        company: "Continue",
        timestamp: 5125,
      },
      {
        title: "Foobara — A Command-Centric Framework for Rails",
        speaker: "Miles Georgi",
        timestamp: 5291,
      },
      {
        title: "AI Coding Assistants for Legacy Rails Codebases",
        speaker: "Sarah Mei",
        timestamp: 5443,
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
        title: "Sponsorship, Slack, and Ruby Book Announcements",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 4424,
      },
      {
        title: "SF Ruby AI Hackathon Recap",
        speaker: "Kamil Nicieja",
        timestamp: 4595,
      },
      {
        title: "Spinel Cooperative — Retainers for Ruby Open Source Maintainers",
        speaker: "André Arko",
        company: "Spinel Cooperative",
        timestamp: 4954,
      },
      {
        title: "Writing Ruby (Just Not in English) — Multi-Language Ruby Education",
        speaker: "Ratnadep Deshan",
        company: "BetaCraft Technologies",
        timestamp: 5097,
      },
      {
        title: "Active Agent + Free Pairing Sessions",
        speaker: "Justin Bowen",
        timestamp: 5330,
      },
      {
        title: "Beautiful Ruby — A Phlex on Rails Video Course",
        speaker: "Brad Gessler",
        timestamp: 5432,
      },
      {
        title: "Foobara Agent-Backed Commands — Loan Origination Demo",
        speaker: "Miles Georgi",
        timestamp: 5647,
      },
      {
        title: "Office Hours for Ruby/Rails Pairing",
        speaker: "Ronan Potage",
        company: "Cisco Meraki",
        timestamp: 5939,
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
        title: "Announcing LlamaPress: An Open-Source Coding Agent for Rails Apps",
        speaker: "Kody Kendall",
        company: "LlamaPress",
        timestamp: 5356,
      },
      {
        title: "Token Ruby — A Weekly Newsletter on Ruby and AI",
        speaker: "Yatish Mehta",
        company: "Asana",
        timestamp: 5600,
      },
      {
        title: "Describe AI — Rails + Inertia + React for 3D Volumetric Computer Vision",
        speaker: "Cole Robertson",
        company: "Describe AI",
        timestamp: 5660,
      },
      {
        title: "Cactus Is Hiring Senior Rails Engineers for an AI Voice + Text Platform",
        speaker: "Avinash Joshi",
        company: "Cactus",
        timestamp: 5824,
      },
      {
        title: "rv: A Fast Ruby Version Manager (Inspired by Python's uv)",
        speaker: "André Arko",
        company: "Spinel Cooperative",
        timestamp: 5922,
      },
      {
        title: "Active Agents 0.6 — Capybara/Cuprite Browse Agent + Structured Output",
        speaker: "Justin Bowen",
        timestamp: 6043,
      },
      {
        title: "A Ruby Book Idea — Telling the Human Stories Behind the Language",
        speaker: "Rhiannon Payne",
        company: "Ruby Central",
        timestamp: 6147,
      },
      {
        title: "SuperForm — A Form Helper for Rails with Auto Strong Parameters (ERB + Phlex)",
        speaker: "Brad Gessler",
        timestamp: 6315,
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
  {
    id: "meetup-2025-12",
    title: "SF Bay Area Ruby Meetup - December 2025",
    date: "2025-12-18",
    youtubeId: "V3b9hfN230w",
    venue: "Intercom",
    rubyEventsUrl:
      "https://www.rubyevents.org/talks/sf-bay-area-ruby-meetup-december-2025",
    talks: [
      {
        title: "Opening Words",
        speaker: "Hiten Parmar",
        company: "Intercom",
        timestamp: 135,
      },
      {
        title: "Ruby 4.0",
        speaker: "Noel Rappin",
        company: "Chime",
        timestamp: 300,
      },
      {
        title: "One Yummy JS Runtime for Rails",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 2865,
      },
      {
        title: "Hiring Rails Engineers at Apple",
        speaker: "Catherine Meyers",
        company: "Apple",
        timestamp: 3438,
      },
      {
        title: "Foobara as a Drop-In Service-Objects Layer for Rails",
        speaker: "Miles Georgi",
        timestamp: 3528,
      },
      {
        title: "An Open-Source Project-Tracking Tool",
        speaker: "Glauber Bannwart",
        timestamp: 3938,
      },
      {
        title:
          "Live Demonstration of ActiveAgent-powered Fizzy and Writebook",
        speaker: "Justin Bowen",
        timestamp: 4077,
      },
    ],
  },
  {
    id: "meetup-2026-01",
    title: "SF Bay Area Ruby Meetup - January 2026",
    date: "2026-01-22",
    youtubeId: "DykqANnJfBc",
    venue: "Persona",
    rubyEventsUrl:
      "https://www.rubyevents.org/talks/sf-bay-area-ruby-meetup-january-2026",
    talks: [
      {
        title:
          "The 3Rs of Ruby Performance: Reduce, Reuse, Recycle (Objects)",
        speaker: "Samuel Giddins",
        company: "Persona",
        timestamp: 135,
      },
      {
        title: "Breaking Nil to Fix Bugs",
        speaker: "Enrique Mogollán",
        company: "Handshake",
        timestamp: 2413,
      },
      {
        title: "Burnout Is Real — A PSA from Active Agent",
        speaker: "Justin Bowen",
        timestamp: 3949,
      },
      {
        title: "Ruby Constants Aren't Stored in an Ordered Hash",
        speaker: "Miles Georgi",
        timestamp: 4050,
      },
      {
        title: "From Public Policy to Ruby — Building a Tariff App",
        speaker: "Hector Miramontes",
        timestamp: 4132,
      },
      {
        title: "What to Expect from Ruby 4.0",
        speaker: "Vitor Oliveira",
        company: "Strides",
        timestamp: 4284,
      },
      {
        title: "Customizing Form Helpers and Tag Helpers",
        speaker: "Todd Kummer",
        company: "Rockridge Solutions",
        timestamp: 6024,
      },
    ],
  },
  {
    id: "meetup-2026-04",
    title: "SF Bay Area Ruby Meetup - April 2026",
    date: "2026-04-14",
    youtubeId: "xep8UoK5cyA",
    venue: "Intercom",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Turning Claude into a Full-Stack Engineering Platform",
        speaker: "Brian Scanlan",
        company: "Intercom",
        timestamp: 310,
      },
      {
        title:
          "Stop Asking Useless Questions: Adaptive User Flows with Ruby DSLs and LLMs",
        speaker: "Konstantin Gredeskoul",
        company: "Archive",
        timestamp: 3041,
      },
      {
        title: "Building Voter Mailers in Ruby",
        speaker: "John Woodell",
        timestamp: 4807,
      },
      {
        title: "Ractorize: Wrapping Ruby Objects in Ractors",
        speaker: "Miles Georgi",
        timestamp: 5316,
      },
      {
        title: "Volunteer Standup 😎",
        speaker: "Matt Duszynski",
        company: "NexHealth",
        timestamp: 5503,
      },
      {
        title: "My AI Development Workflow with Parallel Coding Agents",
        speaker: "Jake Moffatt",
        timestamp: 5639,
      },
      {
        title: "Judging Code on Gut — Reading DHH's 2012 Ruby Rogues Letter",
        speaker: "Michael Foley",
        timestamp: 5935,
      },
      {
        title: "Announcing 'Weird and Wacky Machines Running Ruby' at RubyConf 2026",
        speaker: "Ziggy the Hamster",
        timestamp: 6120,
      },
      {
        title: "Superconductor: Multiplayer Agent Workflows in the Cloud",
        speaker: "Galileo Friedman",
        company: "Superconductor",
        timestamp: 6385,
      },
      {
        title: "Whop Is Hiring an SRE",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 7103,
      },
      {
        title: "RefundDesk: A Rails App for Customs Brokers to Claim Tariff Refunds",
        speaker: "Hector Miramontes",
        company: "RefundDesk",
        timestamp: 7218,
      },
      {
        title:
          "Semi-Autonomous Software: Putting the Human in the Loop with Rubot",
        speaker: "Chris Davis",
        company: "Bootstrapital",
        timestamp: 7390,
      },
      {
        title: "claude-yolo: Parallel Claude Code Agents in tmux",
        speaker: "Dmitry Kozlov",
        timestamp: 8092,
        openMic: true,
      },
    ],
  },
  {
    id: "meetup-2026-02",
    title: "SF Bay Area Ruby Meetup - February 2026",
    date: "2026-02-26",
    youtubeId: "izKer1w6nWc",
    venue: "Sentry",
    rubyEventsUrl:
      "https://www.rubyevents.org/events/sf-bay-area-ruby-meetup",
    talks: [
      {
        title: "Introducing Sentry Seer",
        speaker: "Neil Manvar",
        company: "Sentry",
        timestamp: 255,
      },
      {
        title:
          "Why Coding Agents Need a Harness, Not Just Guardrails",
        speaker: "Sohil Kshirsagar",
        company: "Tusk",
        timestamp: 594,
      },
      {
        title: "How to Turn Images into Calendar Events",
        speaker: "Mike Dalton",
        company: "Calendar Vision",
        timestamp: 1988,
      },
      {
        title: "gem.coop: A Community-Owned Gem Hosting Service",
        speaker: "André Arko",
        company: "gem.coop",
        timestamp: 3672,
      },
      {
        title: "Announcing 'What Cursed Platforms Does Ruby Run On?' at RubyConf 2026",
        speaker: "Ziggy the Hamster",
        timestamp: 3809,
      },
      {
        title: "Ractors Are Just Actors with an R — Benchmarking Ractors vs Threads",
        speaker: "Miles Georgi",
        timestamp: 3931,
      },
      {
        title: "Marketing Services for Ruby Startups",
        speaker: "Rhiannon Payne",
        timestamp: 4028,
      },
      {
        title: "Ubicloud Is Hiring",
        speaker: "Daniel Farina",
        company: "Ubicloud",
        timestamp: 4093,
      },
      {
        title: "Building an Ambient OS on the Open Home Dev Kit",
        speaker: "Jake Moffatt",
        timestamp: 4170,
      },
      {
        title: "Ragents: A Ractor-Based Agent Gem (RubyKaigi 2026 Preview)",
        speaker: "Justin Bowen",
        timestamp: 4220,
      },
      {
        title: "garnet-js: Implementing the YARV Virtual Machine in TypeScript",
        speaker: "Cameron Dutro",
        company: "Cisco Meraki",
        timestamp: 4310,
      },
      {
        title: "Solaris: Vibe-Coding an Internal Rails App Over Two Weekends",
        speaker: "Irina Nazarova",
        company: "Evil Martians",
        timestamp: 4512,
      },
      {
        title:
          "Does Architecture Still Matter When AI Writes the Code?",
        speaker: "Vladimir Dementyev",
        company: "Evil Martians",
        timestamp: 4819,
      },
      {
        title: "Q&A about Ruby Central",
        speaker: "Brandon Weaver",
        company: "One Medical",
        timestamp: 7389,
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
