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
    founded: "2005",
    founders: "Paul Graham, Jessica Livingston, Trevor Blackwell, Robert Morris",
    leadership: "Garry Tan, President & CEO (since 2023)",
    product:
      "The world's most successful startup accelerator. Twice a year, YC invests $500K in a batch of startups, provides 3 months of intensive mentorship, and culminates in Demo Day — where founders pitch to a room of top investors. Alumni include Airbnb, Stripe, Dropbox, Coinbase, DoorDash, Instacart, and 5,000+ other companies worth over $600B combined.",
    history:
      "Paul Graham launched YC in Cambridge in 2005 with the radical idea of funding hackers, not MBAs. The first batch was 8 startups including Reddit and Loopt. YC moved to Mountain View, then San Francisco, growing from funding a handful of startups to 400+ per batch. Sam Altman took over as president in 2014, scaling the program massively before departing to lead OpenAI. Garry Tan, a former YC partner who had built Bookface and the Demo Day website, returned as President & CEO in January 2023.",
    rubyEcosystem:
      "YC's internal platform — from the application system to Bookface (their private social network for founders) to batch management — runs on Rails, React, and Postgres, maintained by a team of about 15 full-stack engineers. Many of the most iconic Rails startups in the world got their start at YC. YC keeps all their Ruby code proprietary, but their commitment to Rails as the backbone of a $600B+ accelerator speaks for itself.",
  },
  github: {
    id: "github",
    name: "GitHub",
    logo: "/host_github.png",
    url: "https://github.com",
    summary:
      "Where the world builds software. Home to 100M+ developers and virtually every open-source project.",
    rubyConnection:
      "~2M lines of Rails. 1,000+ engineers. Deploys 20x/day. Upgrades Rails every week",
    tag: "Built with Rails",
    founded: "2008",
    founders: "Tom Preston-Werner, Chris Wanstrath, PJ Hyett, Scott Chacon",
    leadership: "Now part of Microsoft's CoreAI division (since 2025, after CEO Thomas Dohmke's departure)",
    product:
      "The world's largest source code host and developer platform. Over 100 million developers use GitHub to collaborate on software. Features include pull requests, code review, Actions (CI/CD), Packages, Codespaces, and Copilot — the AI pair programmer. Acquired by Microsoft for $7.5B in 2018.",
    history:
      "Chris Wanstrath and PJ Hyett started GitHub in 2007 as a weekend project to make Git easier to use. Tom Preston-Werner joined as the technical visionary. They launched in 2008 and grew entirely through word-of-mouth — by 2013 they had 3M users without a single salesperson. GitHub defined the modern open source workflow: fork, branch, pull request, merge. Microsoft acquired GitHub for $7.5B in 2018. Thomas Dohmke served as CEO from 2021 until departing at the end of 2025.",
    rubyEcosystem:
      "GitHub is the largest Rails application in the world — nearly 2 million lines of Ruby. The team upgrades Rails every single week. GitHub has contributed massively to the Ruby ecosystem with 30+ open-source Ruby repos. Tom Preston-Werner created Jekyll.",
    openSource: [
      { name: "Linguist", url: "https://github.com/github-linguist/linguist", desc: "Language detection powering every GitHub repo (13K+ stars)" },
      { name: "Scientist", url: "https://github.com/github/scientist", desc: "Safe refactoring pattern, ported to many languages (7.7K stars)" },
      { name: "ViewComponent", url: "https://github.com/ViewComponent/view_component", desc: "Reusable, testable view components for Rails (3.5K stars)" },
      { name: "secure_headers", url: "https://github.com/github/secure_headers", desc: "Security headers management for Rails apps (3.3K stars)" },
      { name: "gemoji", url: "https://github.com/github/gemoji", desc: "Emoji images and names (4.5K stars)" },
      { name: "rubocop-github", url: "https://github.com/github/rubocop-github", desc: "GitHub's RuboCop code style configuration" },
      { name: "markup", url: "https://github.com/github/markup", desc: "README rendering for Markdown, AsciiDoc, etc. (6K stars)" },
    ],
  },
  chime: {
    id: "chime",
    name: "Chime",
    logo: "/sponsor_chime.png",
    url: "https://www.chime.com",
    sponsorId: "chime",
    summary:
      "America's most-loved neobank, reimagining banking with no hidden fees.",
    rubyConnection:
      "Massive Ruby on Rails monolith powering millions of financial transactions",
    tag: "Built with Rails",
    founded: "2012",
    founders: "Chris Britt, Ryan King",
    product:
      "A financial technology company offering fee-free mobile banking. Chime provides checking accounts, savings accounts, and a secured credit card — all with no monthly fees, no minimum balances, and no overdraft fees. Their SpotMe feature lets members overdraft up to $200 without charges. Chime is one of the largest neobanks in the US, valued at $25B.",
    history:
      "Chris Britt and Ryan King founded Chime in 2012 with a simple thesis: banking should be free and helpful, not extractive. They launched the Chime debit card in 2014, offering early direct deposit — a feature that became their main growth driver. The company reached a $25B valuation in 2021, making it one of the most valuable fintechs in the US.",
    rubyEcosystem:
      "Chime runs a massive Rails monolith that processes millions of financial transactions daily. In a domain where many companies reach for Java or Go, Chime has proven that Rails can handle high-stakes, high-throughput financial infrastructure at scale.",
    openSource: [
      { name: "sql_enum", url: "https://github.com/1debit/sql_enum", desc: "Native SQL enums for ActiveRecord (~3M downloads)" },
      { name: "rails-properties", url: "https://github.com/1debit/rails-properties", desc: "Rails properties (~2.8M downloads)" },
    ],
  },
  sentry: {
    id: "sentry",
    name: "Sentry",
    logo: "/host_sentry.png",
    url: "https://sentry.io",
    summary:
      "The developer-first error tracking and performance monitoring platform used by 100K+ organizations.",
    rubyConnection:
      "124M+ sentry-ruby gem downloads. First-class Rails tracing, profiling, and error tracking",
    tag: "Ruby SDK",
    founded: "2012",
    founders: "David Cramer, Chris Jennings",
    leadership: "Milin Desai, CEO. David Cramer (co-founder) serves as CPO",
    product:
      "Application monitoring that helps developers find and fix errors in real time. Sentry captures crashes, performance issues, and code-level details across every major platform — web, mobile, backend, and desktop. Used by 100K+ organizations including Disney, Microsoft, and Cloudflare. The platform is open-source at its core, with Sentry being one of the most successful open-core companies.",
    history:
      "David Cramer built the first version of Sentry in 2008 as a Django error logger called django-db-log. He open-sourced it, and it quickly gained traction across language communities. In 2012, Cramer and Chris Jennings co-founded Functional Software (later renamed Sentry) to build a hosted version. Sentry has since raised $217M and grown to support every major programming language, while keeping the core product open source. Milin Desai joined as CEO, with Cramer transitioning to Chief Product Officer.",
    rubyEcosystem:
      "Sentry's Ruby gems have over 400 million total downloads across the ecosystem. Their Ruby SDK team actively maintains first-class support for Rails with automatic error capturing, performance tracing, profiling, and Sidekiq integration. Sentry sponsors Ruby conferences and meetups worldwide.",
    openSource: [
      { name: "sentry-ruby", url: "https://github.com/getsentry/sentry-ruby", desc: "Core Ruby SDK + sentry-rails, sentry-sidekiq (124M+ downloads)" },
    ],
  },
  cisco: {
    id: "cisco",
    name: "Cisco Meraki",
    logo: "/sponsor_cisco.png",
    url: "https://meraki.cisco.com",
    sponsorId: "cisco",
    summary:
      "Cloud-managed networking that powers enterprise IT worldwide, acquired by Cisco for $1.2B.",
    rubyConnection:
      "2M-line Rails monolith since 2007. Powers millions of devices across millions of networks",
    tag: "Built with Rails",
    founded: "2006",
    founders: "Sanjit Biswas, John Bicket, Hans Robertson",
    product:
      "Cloud-managed IT — networking, security, and IoT devices all controlled through a single web dashboard. Meraki's access points, switches, security appliances, cameras, and sensors are used in hundreds of thousands of locations worldwide. The entire fleet is managed through a centralized Rails dashboard.",
    history:
      "Founded at MIT in 2006, Meraki started as a research project to build low-cost mesh networking for developing countries. Sanjit Biswas and John Bicket pivoted to enterprise cloud-managed networking, raising early funding and growing quickly. Cisco acquired Meraki for $1.2B in 2012 — at the time one of the largest enterprise startup acquisitions. Today Meraki is one of Cisco's fastest-growing divisions, generating billions in annual revenue.",
    rubyEcosystem:
      "Meraki's 2-million-line Rails monolith has been running since 2007 — one of the oldest and largest Rails apps in the world. The dashboard that manages millions of network devices worldwide is pure Rails. Their SF engineering team regularly presents at Ruby meetups about scaling Rails in enterprise environments, and they're one of the largest employers of Rails engineers in the Bay Area.",
  },
  newrelic: {
    id: "newrelic",
    name: "New Relic",
    logo: "/host_newrelic.png",
    url: "https://newrelic.com",
    summary:
      "Observability platform helping engineers monitor, debug, and optimize their entire stack.",
    rubyConnection:
      "Born in 2008 as a Rails-only APM. 176M+ newrelic_rpm gem downloads. Ruby built the observability industry",
    tag: "Built with Rails",
    founded: "2008",
    founders: "Lew Cirne",
    leadership: "Ashan Willy, CEO (since 2023, after the company was taken private)",
    product:
      "A full-stack observability platform for monitoring application performance, infrastructure, logs, and user experience. New Relic collects telemetry data from applications and infrastructure, providing real-time insights and alerting. The company went public in 2014 (NYSE: NEWR) and was taken private by Francisco Partners and TPG for $6.5B in 2023.",
    history:
      "Lew Cirne founded New Relic in 2008, having previously built Wily Technology (Java APM, sold to CA for $375M). New Relic started as a Ruby-only APM tool — the newrelic_rpm gem was one of the first production monitoring tools for Rails. The name \"New Relic\" is an anagram of Lew Cirne. The company rode the Rails wave to early success, then expanded to support every major language. IPO'd in 2014, taken private in 2023 for $6.5B. Ashan Willy took over as CEO.",
    rubyEcosystem:
      "New Relic didn't just use Ruby — it helped create the entire APM industry from within the Ruby ecosystem. The newrelic_rpm gem has over 176 million downloads, making it one of the most downloaded Ruby gems of all time. Their Ruby agent remains one of the most mature APM tools available, with deep Rails integration for ActiveRecord, ActionController, and background jobs.",
    openSource: [
      { name: "newrelic-ruby-agent", url: "https://github.com/newrelic/newrelic-ruby-agent", desc: "Core APM agent for Ruby (176M+ downloads, 1.2K stars)" },
      { name: "centurion", url: "https://github.com/newrelic/centurion", desc: "Docker fleet deployment tool (1.7K stars, archived)" },
    ],
  },
  productboard: {
    id: "productboard",
    name: "Productboard",
    logo: "/host_productboard.png",
    url: "https://productboard.com",
    summary:
      "Product management platform helping teams build the right products, used by 5,000+ companies.",
    rubyConnection:
      "Rails monolith powers product decisions at Microsoft, Zendesk, and thousands of companies",
    tag: "Built with Rails",
    founded: "2014",
    founders: "Hubert Palan, Daniel Hejl",
    product:
      "A product management system that helps teams understand what customers need, prioritize what to build, and align everyone around the roadmap. Features include customer feedback aggregation, feature prioritization frameworks, and roadmap visualization. Used by 5,000+ companies including Microsoft, Zendesk, and UiPath. Raised $260M total funding at a $1.7B valuation.",
    history:
      "Hubert Palan, a Czech product manager frustrated with spreadsheet-based product planning, founded Productboard in 2014 with Daniel Hejl. They launched from Prague and quickly attracted Silicon Valley attention. The company raised multiple rounds — including a $125M Series D in 2022 — reaching unicorn status at $1.7B. Productboard has offices in San Francisco, Prague, and Dublin.",
    rubyEcosystem:
      "Productboard's core platform is a Rails monolith that serves thousands of companies. Their engineering team in San Francisco actively participates in the Ruby community, hosting meetups at their office and speaking about how they scale Rails for a complex, feature-rich SaaS product.",
  },
  figma: {
    id: "figma",
    name: "Figma",
    logo: "/host_figma.png",
    url: "https://figma.com",
    summary:
      "The collaborative design tool that redefined how teams create together.",
    rubyConnection:
      "Ruby monolith on Sinatra + ActiveRecord handles the majority of web requests. DB scaled 100x, kept the monolith",
    tag: "Built with Ruby",
    founded: "2012",
    founders: "Dylan Field, Evan Wallace",
    product:
      "A browser-based collaborative design platform that revolutionized how teams design together in real time. Figma replaced desktop tools like Sketch and Photoshop with a multiplayer editor that runs entirely in the browser using WebAssembly and WebGL. Features include design systems, prototyping, developer handoff, and FigJam (whiteboarding). Adobe attempted to acquire Figma for $20B in 2022 — the deal was called off in 2023 due to regulatory concerns.",
    history:
      "Dylan Field dropped out of Brown University in 2012 to start Figma, inspired by Google Docs' real-time collaboration. He teamed up with Evan Wallace, who had built WebGL graphics demos including a real-time water simulation. They spent 4 years in stealth, launching publicly in 2016. Figma grew explosively through word-of-mouth, becoming the default design tool at most tech companies by 2020. Adobe's $20B acquisition attempt in 2022 (later abandoned) validated Figma as one of the most valuable design companies ever built.",
    rubyEcosystem:
      "Figma is a fascinating Ruby story — while the design editor is built with C++/WebAssembly, the entire backend is a Ruby monolith running Sinatra and ActiveRecord (not Rails). This monolith handles authentication, file management, team collaboration, billing, and API requests. Figma's engineering team has written extensively about scaling this Ruby monolith. Internally they use forks of popular Ruby tools like Shopify's packwerk, Sorbet for type checking, and ci-queue for distributed testing — proving that Ruby isn't just for Rails.",
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
      "2M-line Rails majestic monolith. 100K+ tests per PR in 6 minutes",
    tag: "Built with Rails",
    founded: "2011",
    founders: "Eoghan McCabe, Des Traynor, Ciaran Lee, David Barrett",
    product:
      "An AI-first customer service platform that combines a messenger, help center, bots, and a shared inbox to help businesses communicate with customers. Intercom's Fin AI agent can resolve over 50% of support conversations autonomously. Used by 25,000+ businesses including Atlassian, Amazon, and Lyft.",
    history:
      "Four Irish co-founders — Eoghan McCabe, Des Traynor, Ciaran Lee, and David Barrett — started Intercom in California in 2011 with the vision of making internet business personal. Des Traynor, a prolific blogger and speaker, helped build Intercom's brand through content marketing. The company grew rapidly, reaching unicorn status. Eoghan McCabe, who had stepped back in 2020, returned as CEO in October 2022 to lead Intercom's AI-first transformation with the Fin AI agent.",
    rubyEcosystem:
      "Intercom proudly runs what they call a 'majestic monolith' — a 2-million-line Rails application. Their CI runs 100K+ tests per PR in just 6 minutes. Intercom's engineering team has been one of the most vocal advocates for the Rails monolith architecture, regularly publishing talks about why they chose to stay on Rails rather than break into microservices.",
    openSource: [
      { name: "intercom-rails", url: "https://github.com/intercom/intercom-rails", desc: "Install Intercom in a Rails app (287 stars)" },
      { name: "intercom-ruby", url: "https://github.com/intercom/intercom-ruby", desc: "Ruby bindings for the Intercom API (281 stars)" },
      { name: "hippie_csv", url: "https://github.com/intercom/hippie_csv", desc: "Tolerant, liberal CSV parsing (58 stars)" },
      { name: "state_of_the_nation", url: "https://github.com/intercom/state_of_the_nation", desc: "Model state over time with ActiveRecord (25 stars)" },
    ],
  },
  angellist: {
    id: "angellist",
    name: "AngelList",
    logo: "/sponsor_angellist.png",
    url: "https://angellist.com",
    sponsorId: "angellist",
    summary:
      "The platform powering startup fundraising and venture capital, with $171B+ in assets under administration.",
    rubyConnection:
      "$171B in assets administered through a Rails modular monolith. Moved microservices back in",
    tag: "Built with Rails",
    founded: "2010",
    founders: "Naval Ravikant, Babak Nivi",
    leadership: "Avlok Kohli, CEO (since 2019). Naval Ravikant remains Chairman",
    product:
      "A platform that powers the startup ecosystem — from fundraising and fund management to equity compensation and recruiting. AngelList administers $171B+ in assets for venture funds, provides rolling funds and syndicates for investors, and powers equity management for thousands of startups. The platform has facilitated billions in startup investments.",
    history:
      "Naval Ravikant and Babak Nivi, who had previously co-created the influential Venture Hacks blog, launched AngelList in 2010 as a simple list connecting startups with angel investors. It evolved into a full platform for startup fundraising, then expanded into fund management, syndicates, and rolling funds. The company has since spun off into multiple entities: AngelList Venture (fund management) and Wellfound (formerly AngelList Talent). Avlok Kohli took over as CEO in 2019, transforming AngelList into a fintech infrastructure platform.",
    rubyEcosystem:
      "AngelList administers $171B in assets through a Rails modular monolith — one of the highest-stakes Rails applications in production. Their engineering team made the deliberate choice to consolidate microservices back into a monolith, and they've spoken publicly about the productivity gains.",
    openSource: [
      { name: "zaxcel", url: "https://github.com/angellist/zaxcel", desc: "Ruby DSL for building Excel spreadsheets (70 stars)" },
      { name: "boba", url: "https://github.com/angellist/boba", desc: "Custom Tapioca compilers for Sorbet type-checking (24 stars)" },
    ],
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
    founded: "2018",
    founders: "Jiten Vaidya, Sugu Sougoumarane",
    leadership: "Sam Lambert, CEO (since January 2026, previously VP Engineering at GitHub)",
    product:
      "A serverless MySQL database platform built on Vitess, the open-source database clustering system created at YouTube. PlanetScale offers branching workflows for databases (like Git for your schema), non-blocking schema changes, and horizontal scaling — all without downtime. The platform lets developers treat database changes with the same workflow as code changes.",
    history:
      "Jiten Vaidya and Sugu Sougoumarane, who worked on Vitess at YouTube, founded PlanetScale in 2018 to bring YouTube-scale database technology to every company. Vitess was originally built to scale YouTube's MySQL database when no existing solution could handle the load. PlanetScale raised $105M and launched their serverless database platform, pioneering the concept of database branching. Sam Lambert, formerly VP of Engineering at GitHub, took over as CEO in January 2026.",
    rubyEcosystem:
      "In a delightful twist, the database company runs on Rails. PlanetScale's dashboard, API, and control plane are all built with Ruby on Rails. PlanetScale also champions the Trilogy MySQL adapter (built by GitHub) for Rails apps.",
    openSource: [
      { name: "fast_page", url: "https://github.com/planetscale/fast_page", desc: "Blazing fast ActiveRecord pagination with deferred joins (327 stars)" },
      { name: "planetscale_rails", url: "https://github.com/planetscale/planetscale_rails", desc: "Zero-downtime schema migrations for PlanetScale" },
      { name: "activerecord-sql_commenter", url: "https://github.com/planetscale/activerecord-sql_commenter", desc: "Google sqlcommenter-compatible Rails query logging" },
    ],
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
    founded: "2014",
    founders: "Felicia Curcuru",
    product:
      "A software platform for child welfare agencies that streamlines the foster care and adoption process. Binti digitizes paperwork, automates compliance, and helps caseworkers focus on children instead of bureaucracy. The platform serves 550+ agencies across 36 states, touching the lives of 47% of US foster children. By reducing administrative burden, Binti helps place children in safe, loving homes faster.",
    history:
      "Felicia Curcuru founded Binti in 2014 after volunteering as a Court Appointed Special Advocate (CASA) for foster youth in San Francisco. She witnessed a nine-year-old being placed in a group home due to a shortage of foster families — and saw how outdated paper-based processes slowed down placements. Binti (named after the Swahili word for 'daughter') started by digitizing the home study process, then expanded to cover the entire child welfare workflow. The company has grown to serve nearly half of all US foster children.",
    rubyEcosystem:
      "Binti's Rails application is one of the most impactful uses of Ruby in the world — it directly serves 47% of US foster children across 550+ agencies in 36 states. The platform handles sensitive, regulated workflows where reliability and data integrity are critical. Binti is a powerful example of Rails being used for mission-critical government technology that improves lives.",
  },
  persona: {
    id: "persona",
    name: "Persona",
    logo: "/host_persona.png",
    url: "https://withpersona.com",
    sponsorId: "persona",
    summary:
      "Humanizing online identity by helping companies verify that their users are who they say they are.",
    rubyConnection:
      "Rails powers identity verification across 200+ countries. High-stakes, regulated, mission-critical",
    tag: "Built with Rails",
    founded: "2018",
    founders: "Rick Song, Charles Yeh",
    product:
      "An identity verification platform that helps businesses confirm their users are who they say they are. Persona provides document verification, selfie checks, database lookups, and fraud detection in a single API. Used by companies like Square, Coursera, and BitPay to verify identities across 200+ countries. The platform handles the full identity lifecycle — from onboarding verification to ongoing monitoring.",
    history:
      "Rick Song and Charles Yeh founded Persona in 2018 after seeing how fragmented and painful identity verification was for businesses. Most companies were stitching together multiple vendors for document checks, database lookups, and fraud signals. Persona unified all of this into a single, customizable platform. The company raised over $400M — including a $200M Series D in 2025 — and is valued at $2B, making it one of the most valuable identity companies in the world.",
    rubyEcosystem:
      "Persona's Rails application powers identity verification across 200+ countries — handling government IDs, biometric checks, and sensitive personal data in a highly regulated environment. Ruby Central featured Persona as a spotlight on scaling high-stakes identity systems with Rails. Their SF engineering team actively hosts and participates in Ruby meetups.",
    openSource: [
      { name: "arctic", url: "https://github.com/persona-id/arctic", desc: "Frozen, deduplicated environment variable access (18 stars)" },
    ],
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
    founded: "2008",
    founders: "Richard Price",
    product:
      "An academic social networking platform where researchers share papers, follow other scholars' work, and track the impact of their research. With 270M+ users and 55M+ papers, Academia.edu is one of the largest platforms for academic collaboration. Features include paper sharing, analytics on who's reading your work, mentions tracking, and a recommendation engine for related research.",
    history:
      "Richard Price, an Oxford philosophy PhD, founded Academia.edu in 2008 with the mission of making academic research freely accessible. He believed that paywalled journals were slowing down scientific progress. The platform grew organically through academic networks — when one professor joined, their entire department often followed. By 2025, Academia.edu had reached 270M users, making it one of the largest academic platforms in the world alongside ResearchGate and Google Scholar.",
    rubyEcosystem:
      "Academia.edu has been running on Rails since 2008 — one of the longest-running Rails applications serving hundreds of millions of users. With 42 Ruby repos on GitHub, they've open-sourced several original gems. After 18 years, they're still shipping features on the same Rails codebase.",
    openSource: [
      { name: "dejunk", url: "https://github.com/academia-edu/dejunk", desc: "Detect keyboard mashing and junk data (18 stars)" },
      { name: "free_cite", url: "https://github.com/academia-edu/free_cite", desc: "Parse citations from plain text or HTML (12 stars)" },
      { name: "redis_locks", url: "https://github.com/academia-edu/redis_locks", desc: "Locking utilities for Ruby using Redis" },
      { name: "cached_counts", url: "https://github.com/academia-edu/cached_counts", desc: "Rails counter cache replacement using memcached" },
    ],
  },
  evilmartians: {
    id: "evilmartians",
    name: "Evil Martians",
    logo: "/evilmartians.png",
    url: "https://evilmartians.com",
    summary:
      "Product development consultancy and open-source powerhouse behind 100+ developer tools used by millions.",
    rubyConnection:
      "100+ open-source projects. Hundreds of millions of gem downloads. test-prof, AnyCable, imgproxy, action_policy, and many more",
    tag: "Built with Rails",
    founded: "2006",
    founders: "Alexander Tishchenko, Yaroslav Markin",
    leadership: "Irina Nazarova, CEO. Organizer of the SF Ruby community",
    product:
      "A product development consultancy that works with growth-stage startups, transforming them into market leaders. Evil Martians works with ~40 startups per year — 65% of their client companies raise capital within 1-3 years. Two clients (Teleport and Tines) reached unicorn status with Martians on their teams. Beyond consulting, they build commercial open-source products: imgproxy (image processing server, 10.5K stars) and AnyCable (real-time WebSocket server for Rails). A remote-first team of ~50 with offices in San Francisco, Lisbon, and Osaka.",
    history:
      "Alexander Tishchenko and Yaroslav Markin co-founded Evil Martians in 2006. The company grew into one of the most respected Ruby consultancies in the world, known equally for shipping client products and building open-source tools. Irina Nazarova, a former C++ engineer and JP Morgan analyst, rose from account manager to CFO to CEO — and founded the SF Ruby community along the way. The Martian Chronicles blog reaches 500K+ developers/year. Notable clients include bolt.new/StackBlitz (scaled to $40M+ ARR in 5 months), Tines (reached unicorn at $1.1B), Whop, Doximity, and BetterUp.",
    rubyEcosystem:
      "Evil Martians is arguably the single most prolific contributor to the Ruby/Rails open-source ecosystem. They maintain 100+ projects with combined hundreds of millions of gem downloads. Their team includes Vladimir Dementyev (palkan) — creator of AnyCable, TestProf, Action Policy, and author of \"Layered Design for Ruby on Rails Applications\" — and Andrey Sitnik, whose JavaScript tools (PostCSS, Autoprefixer, Nano ID) account for 0.7% of all npm downloads.",
    openSource: [
      { name: "test-prof", url: "https://github.com/test-prof/test-prof", desc: "Ruby test profiling toolkit (2K stars, 72M+ downloads)" },
      { name: "AnyCable", url: "https://github.com/anycable/anycable", desc: "Real-time WebSocket server for Rails (2.3K stars)" },
      { name: "imgproxy", url: "https://github.com/imgproxy/imgproxy", desc: "On-the-fly image processing server (10.5K stars)" },
      { name: "action_policy", url: "https://github.com/palkan/action_policy", desc: "Authorization framework for Ruby/Rails (1.5K stars, 6M+ downloads)" },
      { name: "logidze", url: "https://github.com/palkan/logidze", desc: "PostgreSQL JSONB-based model change tracking (1.7K stars)" },
      { name: "anyway_config", url: "https://github.com/palkan/anyway_config", desc: "Configuration library for Ruby gems and apps (29M+ downloads)" },
      { name: "lefthook", url: "https://github.com/evilmartians/lefthook", desc: "Git hooks manager (7.7K stars)" },
      { name: "overmind", url: "https://github.com/DarthSim/overmind", desc: "Procfile-based process manager with tmux (3.5K stars)" },
      { name: "store_model", url: "https://github.com/DmitryTsepelev/store_model", desc: "JSON-backed attributes as ActiveRecord models (1.2K stars, 4.9M downloads)" },
      { name: "isolator", url: "https://github.com/palkan/isolator", desc: "Detect non-atomic interactions in DB transactions (1.1K stars)" },
    ],
  },
};

export function getAllHosts() {
  return Object.values(hosts);
}

export function getHost(hostId) {
  return hosts[hostId];
}
