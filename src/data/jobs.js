// Job postings data
import { getSponsor } from "./sponsors.js";
import { getStartup } from "./startups.js";

export const jobs = {
  "senior-software-engineer-trust-checkr": {
    id: "senior-software-engineer-trust-checkr",
    title: "Senior Software Engineer, Trust",
    companyId: "checkr",
    companyName: "Checkr",
    companyLogo: "/host_checkr.png",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$185K - $218K",
    description:
      "Checkr is hiring a senior full-stack engineer on its Trust team, the group that keeps the background-check platform honest at scale. The posting asks for advanced knowledge of Ruby (Rails) and JavaScript (React), 5+ years of full-stack experience, and comfort using AI tools day to day. Checkr has hosted the SF Ruby meetup.",
    chips: ["Fullstack", "React", "Security"],
    url: "https://job-boards.greenhouse.io/checkr/jobs/8163203",
    postedDate: "2026-09-06",
  },
  "senior-software-engineer-online-data-stores-persona": {
    id: "senior-software-engineer-online-data-stores-persona",
    title: "Senior Software Engineer, Online Data Stores",
    sponsorId: "persona",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$190K - $240K + equity",
    description:
      "Persona is hiring a senior engineer for Online Data Stores, the infrastructure team that builds and evolves the data storage behind the whole application stack, owning scalability, reliability, and performance of those core systems and setting storage best practices for other engineering teams. Rails alongside Go and Python. Persona builds the identity layer for the internet and is a Ruby tier sponsor of SF Ruby 2026.",
    chips: ["Infra", "Platform", "PostgreSQL", "Go"],
    url: "https://jobs.ashbyhq.com/persona/4dcc5ffd-2f9c-4f15-8865-a0629fff6b70",
    postedDate: "2026-09-06",
  },
  "software-engineer-early-career-koah": {
    id: "software-engineer-early-career-koah",
    title: "Software Engineer, Early Career",
    startupId: "koah-labs",
    // Featured on purpose: junior Rails roles in the Bay Area are the hardest
    // listing for the board to find, and the one applicants ask for most.
    featured: true,
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$120K - $160K + equity",
    description:
      "Koah Labs is hiring at the ground floor for an early-career engineer, one of the few genuinely junior Rails roles in the Bay Area right now. You help shape core systems in the ad network powering AI-native products, on a small team out of San Francisco with backgrounds at X, Apple, and Meta. Core application is Ruby on Rails, React, and TypeScript; data is PostgreSQL, ClickHouse, Redis, and Kafka; infra is Terraform and AWS.",
    chips: ["Fullstack", "React", "TypeScript", "Mentorship"],
    url: "https://jobs.ashbyhq.com/koahlabs/197c931d-3cda-44b3-b26b-470976730808",
    postedDate: "2026-09-06",
  },
  "senior-software-engineer-edfinity": {
    id: "senior-software-engineer-edfinity",
    title: "Senior Software Engineer",
    companyId: "edfinity",
    companyName: "Edfinity",
    companyLogo: "/company_edfinity.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$135K - $195K",
    description:
      "Edfinity is hiring a senior full-stack engineer across assessment authoring, LLM-powered features, performance work, and technical debt. Stack is Ruby on Rails with MongoDB, Elasticsearch, ClickHouse, Redis and Sidekiq, plus React. Bootstrapped and NSF-supported, a small remote team of senior engineers building courseware and assessment technology for higher-ed STEM. US work authorization required; they do not sponsor visas.",
    chips: ["Fullstack", "AI/ML", "React", "Sidekiq"],
    url: "https://jobs.rubyonrails.org/jobs/39438-senior-software-engineer-remote-edfinity",
    postedDate: "2026-09-06",
  },
  "software-engineer-backend-koah": {
    id: "software-engineer-backend-koah",
    title: "Software Engineer - Backend",
    startupId: "koah-labs",
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$180K - $250K + equity",
    description:
      "Koah Labs is hiring a Backend Software Engineer to design data models, abstractions, and high-performance systems for the ad infrastructure powering AI-native products. Example projects: build scalable data models that align publisher and advertiser interests across multiple impressions per ad request, design abstractions for new ad formats and engagement tracking, build a low-latency frequency-capping system to prevent ad fatigue, and create schemas for high-volume ad bidding with exchanges. Stack: Ruby on Rails, React, TypeScript, PostgreSQL, ClickHouse, Redis, Kafka, AWS. Active users of palkan's layered design for Rails, Lefthook, Yabeda, and test-prof. Backed by Theory Ventures, Forerunner Ventures, and South Park Commons.",
    chips: ["Backend", "Data", "ClickHouse", "Kafka"],
    url: "https://jobs.ashbyhq.com/koahlabs/43616243-f485-480d-b31a-f89589a4b09d",
    postedDate: "2026-05-07",
  },
  "software-engineer-product-koah": {
    id: "software-engineer-product-koah",
    title: "Software Engineer - Product",
    startupId: "koah-labs",
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$180K - $250K + equity",
    description:
      "Koah Labs is hiring a Product Software Engineer to ship across the stack and shape product direction for an ad network powering AI-native products. Lead initiatives end-to-end with high agency in product and technical design — optimize matching algorithms, build experiences reaching millions of users, partner with data and GTM teams, and run experiments to learn how users interact with AI-native products. Strong fit for former founders or early-stage engineers comfortable with ambiguity and fast feedback loops. Stack: Ruby on Rails, React, TypeScript, PostgreSQL, ClickHouse. Active users of palkan's layered design for Rails, Lefthook, Yabeda, and test-prof. Backed by Theory Ventures, Forerunner Ventures, and South Park Commons.",
    chips: ["Product Eng", "Fullstack", "React", "ClickHouse"],
    url: "https://jobs.ashbyhq.com/koahlabs/0e9b7d88-7698-45f6-890b-9e25cca0ee8b",
    postedDate: "2026-05-07",
  },
  "software-engineer-platform-koah": {
    id: "software-engineer-platform-koah",
    title: "Software Engineer - Platform",
    startupId: "koah-labs",
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$180K - $250K + equity",
    description:
      "Koah Labs is hiring a Platform Software Engineer to design, build, and maintain the infrastructure powering an ad network for AI-native products. Operate serious systems at scale, own the platform layer beneath the product, and build reliable systems with rigor on performance and observability. Infra stack: Terraform, AWS, LGTM (Loki, Grafana, Tempo, Mimir), Tailscale, Cloudflare. Data: PostgreSQL, ClickHouse, Redis, Kafka, Python. Core app: Ruby on Rails, React, TypeScript. Active users of palkan's layered design for Rails, Lefthook, Yabeda, and test-prof. Backed by Theory Ventures, Forerunner Ventures, and South Park Commons.",
    chips: ["Platform", "Infra", "Terraform", "Kafka", "Polyglot"],
    url: "https://jobs.ashbyhq.com/koahlabs/729e2608-4a27-4aa7-895e-a427e55d466a",
    postedDate: "2026-05-07",
  },
  "product-engineer-patch": {
    id: "product-engineer-patch",
    title: "Product Engineer (Senior / Staff+)",
    startupId: "patch",
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$180K - $230K + equity",
    description:
      "Patch is the platform powering corporate climate action — a marketplace + API for buying verified carbon-removal credits, routing hundreds of millions of dollars to projects that permanently pull CO₂ out of the atmosphere. Originally pitched as 'Stripe for climate,' now a full market infrastructure layer for environmental commodities. Backed by a16z, Coatue, and Energize Ventures; $80M raised through Series B; HQ San Francisco. They're hiring Product Engineers to own outcomes end-to-end — defining problems, pressure-testing solutions, and shipping reliable software in a high-trust EPD environment. Core stack is Ruby on Rails + Stimulus; prior Rails experience helpful but not required. AI-native workflow expected. In-person SF; senior or staff+ scope.",
    chips: ["Product Eng", "Fullstack", "Hotwire", "AI-native"],
    url: "https://jobs.ashbyhq.com/patch.io/8d3edb1a-3846-436c-a286-700a1e923e0f",
    postedDate: "2026-04-28",
  },
  "founding-engineer-finta": {
    id: "founding-engineer-finta",
    title: "Founding Engineer (Ruby)",
    sponsorId: "finta",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150K - $250K + 5% equity",
    description:
      "Finta is hiring a Founding Engineer to collaborate directly with the CEO and designer on complete product features end-to-end, from backend to frontend. Work with Ruby on Rails, Hotwire, Stimulus, Tailwind, and Redis to build banking and accounting integrations with rigorous data-quality and reliability standards. Finta automates bookkeeping, files taxes, and gives companies real-time financial metrics. 6+ years of Rails experience required. Regular use of AI coding tools (Cursor, Claude Code) expected. $150-$250k base + 5% equity.",
    chips: ["Fullstack", "Hotwire", "Founding role", "AI-native"],
    url: "https://www.ycombinator.com/companies/finta/jobs/vg5fXEw-founding-engineer",
    postedDate: "2026-04-27",
  },
  "senior-software-engineer-solutions-engineering-omada": {
    id: "senior-software-engineer-solutions-engineering-omada",
    title: "Senior Software Engineer, Solutions Engineering",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    salary: "$179K - $224K",
    description:
      "Omada Health's Solutions Engineering team designs the partner and alliance integrations that fit Omada's care programs into customers' systems. This senior role shapes cross-system integration APIs, finds the root cause behind recurring toil, and mentors teammates who write code without a software background. Omada primarily uses Ruby on Rails and wants strong Rails experience; five to eight years. $179K to $224K base in CA, NY, and WA, plus bonus and equity.",
    chips: ["Backend", "Data", "Mentorship"],
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/8202172",
    postedDate: "2026-10-02",
  },
  "software-engineer-fullstack-thatch": {
    id: "software-engineer-fullstack-thatch",
    title: "Software Engineer: Full Stack",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco",
    type: "Full-time",
    salary: "$161K - $230K",
    description:
      "Thatch is hiring a Full Stack Software Engineer to own product areas spanning frontend and backend systems for its health benefits platform. Build across React, TailwindCSS, and Ruby on Rails to ship features that directly impact employer benefits management, employee onboarding, and payment systems. Strong product judgment, systems thinking, and a track record of shipping production applications required. $161k-$230k.",
    chips: ["Fullstack", "Payments", "React"],
    url: "https://thatch.com/jobs/software-engineer-full-stack-5113761008",
    postedDate: "2026-04-27",
  },
  "senior-staff-software-engineer-money-group-gusto": {
    id: "senior-staff-software-engineer-money-group-gusto",
    title: "Senior Staff Software Engineer, Money Group",
    sponsorId: "gusto",
    location: "San Francisco, Denver, or New York City",
    type: "Full-time",
    salary: "$189K - $236K ($223K+ in SF/NY)",
    description:
      "Gusto is hiring a Senior Staff Engineer to serve as a Technical Lead across the Money Group — its fastest-growing org and the cornerstone of Gusto's shift into a Small Business Finance Platform. Shape the technical vision for the systems powering financial accounts, money movement, lending, and expense controls, guiding architectural direction across 15-20 engineers while still prototyping and shipping. Help scale one of the largest Ruby/Rails and JavaScript/React applications in the world. $189k-$236k base in Denver and most remote locations, $223k+ in SF/NY + bonus + equity.",
    chips: ["Payments", "Backend", "Mentorship"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7654934",
    postedDate: "2026-07-07",
  },
  "staff-software-engineer-financial-platform-gusto": {
    id: "staff-software-engineer-financial-platform-gusto",
    title: "Staff Software Engineer, Financial Platform",
    sponsorId: "gusto",
    location: "San Francisco or Burlingame, CA (Hybrid) / Remote (US)",
    type: "Full-time",
    salary: "$163K - $247K",
    description:
      "Gusto's Financial Infrastructure team owns the money and asset flows behind Gusto Retirement: payments, settlements, reconciliation, 401(k) loans, KYB/KYC, and tax and compliance integrations. This hands-on staff role owns backend services and APIs end to end and mentors engineers. Eight-plus years, with Ruby on Rails or a comparable backend framework. $163K to $204K in Denver and most remote locations, $197K to $247K in SF, Seattle, and New York, plus equity.",
    chips: ["Payments", "Backend", "Mentorship"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/8205075",
    postedDate: "2026-10-02",
  },
  "staff-software-engineer-core-platforms-gusto": {
    id: "staff-software-engineer-core-platforms-gusto",
    title: "Staff Software Engineer, Core AI Platforms",
    sponsorId: "gusto",
    location: "San Francisco, Denver, or New York City (Hybrid)",
    type: "Full-time",
    salary: "$197K - $247K",
    description:
      "Gusto is hiring a Staff Software Engineer to join the Core AI Platforms team — engineering the core business engine that 5+ product teams depend on. Help scale one of the largest Ruby/Rails + JavaScript/React applications in the world. Build reliable backend services, set the engineering standard for those around you, and partner with Product Engineering, Product Management, Data, and Design to translate customer pain points into solutions. AI is a fundamental part of how work gets done at Gusto. Hybrid in SF / Denver / NYC. $163k-$204k base depending on location + bonus + equity.",
    chips: ["Platform", "Backend", "AI-native"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7760341",
    postedDate: "2026-05-15",
  },
  "software-engineer-security-persona": {
    id: "software-engineer-security-persona",
    title: "Software Engineer, Security",
    sponsorId: "persona",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130K - $220K + equity",
    description:
      "Persona's security team runs more like infrastructure than a typical security org, and most of what it ships is product code: IAM systems enterprise customers use to manage PII, least-privilege access across the company, the framework that encrypts hundreds of sensitive columns, and supply-chain security for AI tooling. A software engineering role first; Ruby on Rails proficiency is a plus. Persona is a Ruby tier sponsor of SF Ruby 2026.",
    chips: ["Security", "Backend", "Platform"],
    url: "https://jobs.ashbyhq.com/persona/06ce6de8-8541-4dfd-9c09-3e467d5f91bb",
    postedDate: "2026-10-02",
  },
  "principal-web-developer-superconductor": {
    id: "principal-web-developer-superconductor",
    title: "Principal Web Developer (Rails)",
    sponsorId: "superconductor",
    location: "East Bay, CA (Hybrid)",
    type: "Full-time",
    description:
      "Superconductor is building a platform where AI agents find work autonomously across customer emails, bug reports, session replays, Slack threads, and X posts, then ship code while you sleep. The Principal Web Developer is the architect, reviewer, and quality guardian for the fleet: defining patterns, evolving the Rails application architecture, writing agent instructions and coding standards, and being the last line of defense before code reaches production. A realistic goal from the team: ship more quality code in your first month than you did in all of 2025. Team of 7, $7M raised, founders previously co-founded Gradescope and were AI PhDs at UC Berkeley. Hybrid in the East Bay (3 days in a BART-accessible office, 2 from home). 10+ years of Rails experience required, ideally 15+. Bonus points for active Rails community involvement (conferences, gems, open source) and experience with React, Tailwind, Stimulus, Turbo, Hotwire, and AI coding tools like Claude Code, Cursor, or Copilot.",
    chips: ["Backend", "Hotwire", "AI-native", "Mentorship"],
    url: "https://jobs.ashbyhq.com/superconductor/806417c7-52c3-4820-b059-74b35ef2cf2f",
    postedDate: "2026-05-18",
  },
  "software-engineer-ubicloud": {
    id: "software-engineer-ubicloud",
    title: "Software Engineer",
    sponsorId: "ubicloud",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$95K - $250K + 0.15%-0.50% equity",
    description:
      "Ubicloud is building an open-source alternative to the big clouds — elastic compute, block storage, managed PostgreSQL, GitHub Actions runners, Kubernetes, and AI inference — serving 500+ customers. The control plane is written in Ruby on the Roda framework with Sequel and PostgreSQL (not Rails), and that codebase is fully open source. You'll work across the Postgres, GitHub Actions, and AI inference products, building real systems software in Ruby. Mid-stage role (2-8 years). $95K-$250K base + 0.15%-0.50% equity.",
    chips: ["Backend", "Roda", "PostgreSQL", "Open source"],
    url: "https://www.ycombinator.com/companies/ubicloud/jobs/j4bntEJ-software-engineer",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-accounting-angellist": {
    id: "senior-software-engineer-accounting-angellist",
    title: "Senior Software Engineer, Accounting",
    sponsorId: "angellist",
    location: "San Francisco, CA / New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$200K+ base + equity",
    description:
      "AngelList is hiring a back-end-focused Senior Software Engineer on its Accounting team to build the accounting infrastructure behind its fund-management platform — scalable systems that model financial workflows, read and write to the general ledger, and produce audit-ready outputs with rigorous data integrity. Stack is Ruby on Rails (or a similar MVC framework), React, TypeScript, Postgres, and MySQL. 5+ years of experience, back-end weighted, with room to venture into the React/TypeScript frontend. Hybrid, two days per week in SF or NYC.",
    chips: ["Backend", "Data", "PostgreSQL"],
    url: "https://www.angellist.com/careers/9870a63b-ac75-436b-b1a6-a2fb006afd1c",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-angellist": {
    id: "senior-software-engineer-angellist",
    title: "Senior Software Engineer",
    sponsorId: "angellist",
    location: "San Francisco, CA / New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$200K+ base + equity",
    description:
      "AngelList is hiring a full-stack Senior Software Engineer to build the financial infrastructure powering private markets. The two primary languages at AngelList are Ruby and TypeScript, and this is a generalist role (or a back-end specialist comfortable across the stack) with 4+ years building large-scale web applications. A single application is considered for all open team-specific roles. Hybrid, two days per week in SF or NYC.",
    chips: ["Fullstack", "TypeScript"],
    url: "https://www.angellist.com/careers/9adf9ccb-61c1-4a75-bf00-03f39fea8f09",
    postedDate: "2026-06-19",
  },
  "software-engineer-growth-chime": {
    id: "software-engineer-growth-chime",
    title: "Software Engineer, Growth",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K",
    description:
      "Chime is hiring a full-stack Growth Engineer to build product experiences that move business metrics: React and TypeScript on the front end, Rails and Go services behind it. You work closely with product, design, and data science on features that drive member growth. Chime is a Pickaxe sponsor of the SF Ruby Conference.",
    chips: ["Fullstack", "React", "TypeScript", "Go"],
    url: "https://job-boards.greenhouse.io/chime/jobs/8782503002",
    postedDate: "2026-09-04",
  },
  "software-engineer-membership-chime": {
    id: "software-engineer-membership-chime",
    title: "Software Engineer, Membership",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K",
    description:
      "Chime is hiring a full-stack engineer for its Membership team, building and evolving the features that deepen member engagement and retention across Chime's membership products. The posting asks for proven experience with Ruby on Rails or a comparable framework, alongside TypeScript and React.",
    chips: ["Fullstack", "React", "TypeScript"],
    url: "https://job-boards.greenhouse.io/chime/jobs/8614188002",
    postedDate: "2026-09-04",
  },
  "software-engineer-lending-chime": {
    id: "software-engineer-lending-chime",
    title: "Software Engineer, Lending",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K + bonus, equity",
    description:
      "Chime is hiring a Software Engineer in the Lending org, building the backend platforms behind its credit and liquidity products (MyPay earned-wage access, SpotMe overdraft, and Instant Loans). You'll design real-time money movement, underwriting, ledgering, and repayment systems where correctness, reliability, and auditability matter, working in Ruby on Rails alongside Product, Risk, and Finance. Chime is the largest US consumer fintech, helping everyday Americans build credit and get ahead.",
    chips: ["Backend", "Payments", "High compliance"],
    url: "https://careers.chime.com/jobs/8657011002/software-engineer-lending/",
    postedDate: "2026-08-02",
  },
  "software-engineer-support-foundations-chime": {
    id: "software-engineer-support-foundations-chime",
    title: "Software Engineer, Support Foundations",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K",
    description:
      "Chime's Support Foundations team builds the infrastructure behind every support interaction a member has: the automated phone system, the in-app chatbot, live chat with human agents, and the data and routing systems underneath. The posting asks for experience with Ruby on Rails or comparable frameworks and with transactional databases and caching.",
    chips: ["Backend", "Platform"],
    url: "https://job-boards.greenhouse.io/chime/jobs/8607195002",
    postedDate: "2026-09-04",
  },
  "senior-staff-engineer-tax-platform-gusto": {
    id: "senior-staff-engineer-tax-platform-gusto",
    title: "Senior Staff Engineer, Tax Platform Engineering",
    sponsorId: "gusto",
    location: "San Francisco, CA (also Denver, New York, Chicago)",
    type: "Full-time",
    salary: "$223K - $278K",
    description:
      "Gusto is hiring a Senior Staff Engineer on Tax Platform Engineering to build the core platform behind tax compliance for millions of people, guiding projects end to end from feature spec to rollout. The posting describes the work as helping scale one of the largest Ruby/Rails and TypeScript/React applications in the world. Gusto powers payroll, benefits, and HR for more than 500,000 small businesses.",
    chips: ["Platform", "Backend", "TypeScript"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/8013480",
    postedDate: "2026-09-04",
  },
  "staff-software-engineer-ai-voice-gusto": {
    id: "staff-software-engineer-ai-voice-gusto",
    title: "Staff Software Engineer, AI Voice and Content",
    sponsorId: "gusto",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$163K - $247K",
    description:
      "Gusto is hiring a Staff Software Engineer on AI Voice and Content, working in a collaborative, test-driven environment where experience with Ruby on Rails is listed among the things they look for. Gusto runs one of the largest Ruby on Rails and TypeScript/React applications in the world, powering payroll, benefits, and HR for more than 500,000 small businesses.",
    chips: ["AI/ML", "Backend"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7673999",
    postedDate: "2026-09-04",
  },
  "software-engineer-infrastructure-thatch": {
    id: "software-engineer-infrastructure-thatch",
    title: "Software Engineer: Infrastructure",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco, CA",
    type: "Full-time",
    salary: "$180K - $250K",
    description:
      "Thatch is hiring an Infrastructure Engineer to ensure reliability, security, and performance across its HIPAA-compliant environment, building infrastructure-as-code and improving CI/CD. Stack is Ruby on Rails, PostgreSQL, and Terraform. Thatch is building the modern ICHRA health-benefits platform that lets employers give employees money to buy their own health coverage.",
    chips: ["Infra", "DevOps", "Terraform", "High compliance"],
    url: "https://thatch.com/jobs/software-engineer-infrastructure-5161129008",
    postedDate: "2026-06-19",
  },
  "staff-product-engineer-1-stepful": {
    id: "staff-product-engineer-1-stepful",
    title: "Staff Product Engineer 1",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$188K - $248K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers. This staff-level product engineering role builds user-facing features across the platform. The posting states: 'Familiarity with any of the following languages for the backend: Python, Node.js, Ruby on Rails.'",
    chips: ["Product Eng", "Fullstack", "Polyglot"],
    url: "https://jobs.ashbyhq.com/stepful/10cb2e4c-acb5-43d2-b3ae-56fa296a1125",
    postedDate: "2026-06-19",
  },
  "senior-product-engineer-1-stepful": {
    id: "senior-product-engineer-1-stepful",
    title: "Senior Product Engineer 1",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$157K - $208K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers. This senior product engineering role ships student- and instructor-facing features across the Rails backend and a React/TypeScript frontend. The posting lists Ruby on Rails among the accepted backend languages alongside Python and Node.js.",
    chips: ["Product Eng", "React", "Polyglot"],
    url: "https://jobs.ashbyhq.com/stepful/06376db3-9192-4ff4-bcbc-6635a878ed81",
    postedDate: "2026-06-19",
  },
  "software-engineer-simple-ai": {
    id: "software-engineer-simple-ai",
    title: "Software Engineer",
    startupId: "simple_ai",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$130K - $280K + equity",
    description:
      "Simple AI (YC S24, $14M raised) builds voice AI agents that handle enterprise phone operations — support, order intake, lead qualification — for customers like DoorDash and xAI. This is a founding full-stack role; the core work is LLM/voice AI systems, with Ruby on Rails listed among the 'nice to have' stack experience alongside Python, TypeScript, React, PostgreSQL, and AWS. 4+ years of experience.",
    chips: ["AI/ML", "Founding role", "Polyglot"],
    url: "https://jobs.ashbyhq.com/simple-ai/9a5f5694-e066-4087-9a13-b1a62d8d8025",
    postedDate: "2026-06-19",
  },
  "senior-rails-engineer-monami": {
    id: "senior-rails-engineer-monami",
    title: "Senior Rails Engineer",
    companyId: "monami",
    companyName: "Mon Ami",
    companyLogo: "/company_monami.svg",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Mon Ami is a San Francisco company building software for the aging and disability services sector — the platform that Area Agencies on Aging and public agencies rely on to manage caregivers and deliver senior services. As a Senior Rails Engineer you'll design, build, test, and maintain core product software, lead a defined area of the codebase, and mentor 1-3 junior engineers alongside product managers. The stack is Ruby on Rails, PostgreSQL, Hotwire/Turbo, Stimulus, ViewComponent, Bootstrap, and RSpec, with a heavy emphasis on disciplined testing and code quality. Apply by email to job-srdev@monami.io.",
    chips: ["Fullstack", "Hotwire", "ViewComponent", "Mentorship"],
    url: "https://www.monami.io/jobs/senior-rails-engineer",
    postedDate: "2026-05-01",
  },
  "software-engineer-rails-mudflap": {
    id: "software-engineer-rails-mudflap",
    title: "Software Engineer, Ruby on Rails",
    companyId: "mudflap",
    companyName: "Mudflap",
    companyLogo: "/company_mudflap.png",
    location: "Remote (US, Pacific hours)",
    type: "Full-time",
    salary: "$150K - $250K",
    description:
      "Mudflap (Palo Alto) is a profitable fintech building fuel-payment products for the $800B trucking industry, helping truckers save on fuel and connecting fuel stops with new customers. You'll build and scale the Ruby on Rails payments and transactions platform end-to-end; the posting spans levels from 1+ to 8+ years. Stack: Ruby on Rails, PostgreSQL/AWS Aurora, Vue.js, REST APIs, AWS ECS, CircleCI.",
    chips: ["Fullstack", "Payments", "Vue"],
    url: "https://jobs.ashbyhq.com/mudflap/6d599ccc-4566-4cd3-9721-2273601acba6",
    postedDate: "2026-06-19",
  },
  "software-engineer-authorium": {
    id: "software-engineer-authorium",
    title: "Software Engineer",
    companyId: "authorium",
    companyName: "Authorium",
    companyLogo: "/company_authorium.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120K - $150K + equity",
    description:
      "Authorium is a GovTech SaaS company that unifies procurement, grants, and budgeting for state, local, and federal agencies, on a platform that manages billions in public funds. This foundational role ships versioning systems, approval workflows, and permission models, and helps modularize the core domain of a Ruby on Rails modular monolith. Three-plus years of full-stack experience; Rails and React or Next.js are a plus. The team works AI-first with Cursor and Claude.",
    chips: ["Fullstack", "Packwerk", "AI-native"],
    url: "https://jobs.ashbyhq.com/Authorium/6db2443f-1d6d-4d1a-a86d-b777d6904845",
    postedDate: "2026-10-02",
  },
  "software-engineer-rails-luthor": {
    id: "software-engineer-rails-luthor",
    title: "Software Engineer (Ruby on Rails)",
    companyId: "luthor",
    companyLogo: "/company_luthor.png",
    companyName: "Luthor",
    location: "San Francisco, CA / Remote (US)",
    type: "Full-time",
    salary: "$120K - $180K + equity",
    description:
      "Luthor (YC F24) is an AI-powered marketing-compliance platform for regulated industries — fintechs, banks, and investment advisors — reviewing and enforcing policy on marketing content as it's created. As one of the first full-time engineering hires, you'll work directly with the founding team on the core Ruby on Rails platform; 3+ years of experience. Stack: Ruby on Rails, React, PostgreSQL, JavaScript.",
    chips: ["Fullstack", "AI/ML", "React", "Founding role"],
    url: "https://www.ycombinator.com/companies/luthor/jobs/HKrdhp0-software-engineer",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-rails-prevail": {
    id: "senior-fullstack-rails-prevail",
    title: "Senior Full Stack Developer (Ruby on Rails)",
    companyId: "prevail",
    companyLogo: "/company_prevail.png",
    companyName: "Prevail Legal",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $180K",
    description:
      "Prevail Legal is an SF legal-tech startup building the legal industry's Testimony Intelligence Platform — remote court reporting, AI-assisted transcription, and testimony management (SOC 2 Type 2, ISO 27001). This senior full-stack role builds end-to-end on a Ruby on Rails monolith with the Hotwire stack, reporting to the CTO; 3-5+ years of Rails. Stack: Ruby on Rails, Stimulus/Hotwire/Importmaps, PostgreSQL, AWS, Docker, WebRTC.",
    chips: ["Fullstack", "Hotwire", "PostgreSQL"],
    url: "https://job-boards.greenhouse.io/prevail/jobs/4553082008",
    postedDate: "2026-06-19",
  },
  "midlevel-fullstack-rails-prevail": {
    id: "midlevel-fullstack-rails-prevail",
    title: "Mid-Level Full Stack Developer (Ruby on Rails)",
    companyId: "prevail",
    companyLogo: "/company_prevail.png",
    companyName: "Prevail Legal",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120K - $160K",
    description:
      "Prevail Legal is an SF legal-tech startup building a Testimony Intelligence Platform for the legal industry. This mid-level full-stack role builds web applications and new features on a Ruby on Rails monolith (Hotwire stack) in a fully remote setting; 4+ years of Rails.",
    chips: ["Fullstack", "Hotwire"],
    url: "https://job-boards.greenhouse.io/prevail/jobs/4553411008",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-instrumentl": {
    id: "senior-fullstack-instrumentl",
    title: "Senior Full Stack Software Engineer",
    companyId: "instrumentl",
    companyLogo: "/company_instrumentl.png",
    companyName: "Instrumentl",
    location: "Remote (US) / Oakland, CA",
    type: "Full-time",
    salary: "$160K - $190K",
    description:
      "Instrumentl is a profitable, YC-backed SaaS automating grant discovery and management for 1,500+ nonprofits. This full-stack generalist role builds and scales the product end-to-end on a Ruby on Rails stack; 7+ years of experience. Stack: Ruby on Rails, Python, JavaScript, PostgreSQL, Redis. Distributed team with an Oakland office.",
    chips: ["Fullstack", "PostgreSQL", "Profitable"],
    url: "https://jobs.lever.co/Instrumentl/6fa7b6d7-7e64-429a-80ea-4f70469d7584",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-client-apps-github": {
    id: "senior-software-engineer-client-apps-github",
    title: "Senior Software Engineer, Client Apps Platform",
    companyId: "github",
    companyLogo: "/company_github.png",
    companyName: "GitHub",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$124K - $329.2K",
    description:
      "GitHub.com runs on a Ruby on Rails monolith. The Client Apps Platform team connects the gh CLI, Desktop, and Mobile apps to backend teams; you'll maintain and operate production Ruby and Go services and integrate with GitHub's Ruby on Rails monolith. SF-headquartered, remote across the US.",
    chips: ["Backend", "Platform", "Go", "Polyglot"],
    url: "https://www.github.careers/careers-home/jobs/5756?lang=en-us",
    postedDate: "2026-06-19",
  },
  "full-stack-engineer-generalmedicine": {
    id: "full-stack-engineer-generalmedicine",
    title: "Full-Stack Engineer",
    companyId: "generalmedicine",
    companyName: "General Medicine",
    companyLogo: "/company_generalmedicine.png",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "General Medicine is a consumer healthcare marketplace from the founders of PillPack / Amazon Pharmacy, showing upfront cash and insurance prices for virtual and in-person visits, prescriptions, labs, and imaging. This full-stack role builds the core product; the team states 'We currently use AWS, Ruby on Rails, and Next.js,' on PostgreSQL. SF HQ with a Boston office. (Seed, $32M, Matrix Partners-led.)",
    chips: ["Fullstack", "Next.js", "PostgreSQL"],
    url: "https://jobs.ashbyhq.com/general-medicine/bf71b5f5-a87e-4969-9b69-f6188108f53a",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-ascend": {
    id: "senior-software-engineer-ascend",
    title: "Senior Software Engineer",
    companyId: "ascend",
    companyName: "Ascend",
    companyLogo: "/company_ascend.png",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$200K - $225K",
    description:
      "Ascend is an all-in-one payments and financial-automation platform for the insurance industry: online customer payments, premium financing, and commission/carrier-payable distribution. The backend is a Ruby on Rails API on Heroku, with a Next.js + TypeScript frontend on Vercel, Tailwind, PostgreSQL, and Redis. ~50+ people across SF and Columbus. (Series B.)",
    chips: ["Backend", "Payments", "Next.js"],
    url: "https://job-boards.greenhouse.io/ascend21/jobs/4460281008",
    postedDate: "2026-06-19",
  },
  "rails-engineer-decile": {
    id: "rails-engineer-decile",
    title: "Ruby on Rails Engineer (front-end skills)",
    companyId: "decile",
    companyName: "Decile Group",
    companyLogo: "/company_decile.png",
    location: "Remote (US, Pacific overlap)",
    type: "Full-time",
    description:
      "Decile Group runs VC Lab, the leading venture-capital accelerator, and the Decile Hub fund-operations platform. This role is for an experienced Ruby on Rails developer with an emphasis on front-end work, owning projects end-to-end and building directly with the people who use the tools (the interview includes a Rails coding challenge). Must work within a few time zones of Pacific. Palo Alto HQ, remote.",
    chips: ["Fullstack", "Frontend"],
    url: "https://jobs.lever.co/decilegroup/3a1e9b3d-37b0-47d8-a40e-4ea5ac16d06c",
    postedDate: "2026-07-26",
  },
  "software-engineer-middesk": {
    id: "software-engineer-middesk",
    title: "Software Engineer",
    companyId: "middesk",
    companyName: "Middesk",
    companyLogo: "/company_middesk.png",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$148K - $275K + equity",
    description:
      "Middesk is a business-identity-verification fintech (YC, Sequoia, Accel) that helps companies onboard and underwrite other businesses. This full-stack product role builds on a Ruby on Rails + PostgreSQL backend with a React/Redux frontend; all levels welcome. Hybrid in SF, two days per week. (Series B.)",
    chips: ["Fullstack", "React", "PostgreSQL"],
    url: "https://jobs.ashbyhq.com/middesk/e1c6af86-dce1-495f-a710-ad369fd1308c",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-engineer-found": {
    id: "senior-fullstack-engineer-found",
    title: "Staff Software Engineer (Full-Stack)",
    companyId: "found",
    companyName: "Found",
    companyLogo: "/company_found.png",
    location: "San Francisco, CA / New York / Remote (US)",
    type: "Full-time",
    salary: "$210K - $278K",
    description:
      "Found is business banking for the self-employed (founded by ex-Square execs), with banking, tax automation, and expense tracking built on Ruby on Rails. This full-stack role requires production experience with Ruby on Rails or a comparable framework; Stack: Rails, React, Redux, TypeScript, MySQL, Spanner.",
    chips: ["Fullstack", "React", "Payments"],
    url: "https://jobs.ashbyhq.com/found/20795864-e7c3-4836-b5bc-26190f79bed3",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-engineer-edo": {
    id: "senior-fullstack-engineer-edo",
    title: "Senior Full Stack Engineer",
    companyId: "edo",
    companyName: "EDO",
    companyLogo: "/company_edo.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $180K + equity",
    description:
      "EDO is a TV measurement and advertising-analytics platform. This role builds data-visualization and reporting features on a Ruby on Rails backend with a React/TypeScript frontend. Stack: Rails, React/TypeScript, MySQL, Snowflake, AWS. Los Angeles, CA company, remote-US. (Series B.)",
    chips: ["Fullstack", "Data", "React"],
    url: "https://job-boards.greenhouse.io/edo/jobs/5143687007",
    postedDate: "2026-06-20",
  },
  "fullstack-engineer-betterstack": {
    id: "fullstack-engineer-betterstack",
    title: "Full-stack Engineer",
    companyId: "betterstack",
    companyName: "Better Stack",
    companyLogo: "/company_betterstack.png",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Better Stack is building an AI-native incident-response and observability platform. This full-stack role works on a Ruby on Rails backend with a Vue.js frontend, on PostgreSQL, Redis, ClickHouse, and Redpanda. Remote across North America (US-eligible). (Series A.)",
    chips: ["Fullstack", "Vue", "ClickHouse"],
    url: "https://betterstack.com/careers",
    postedDate: "2026-06-20",
  },
  "lead-engineer-relevant-healthcare": {
    id: "lead-engineer-relevant-healthcare",
    title: "Lead Engineer",
    companyId: "relevanthealthcare",
    companyName: "Relevant Healthcare",
    companyLogo: "/company_relevanthealthcare.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$165K - $190K + equity",
    description:
      "Relevant Healthcare is a bootstrapped, profitable ~24-person team building a healthcare-analytics platform for safety-net providers (community health centers). This senior/lead role (5+ years) works across a Ruby on Rails backend with a TypeScript/React frontend, Go, and GraphQL. Fully remote, US/Canada.",
    chips: ["Fullstack", "GraphQL", "Mentorship", "Profitable"],
    url: "https://relevant.healthcare/jobs/lead-engineer/",
    postedDate: "2026-06-20",
  },
  "lead-software-engineer-gov-platforms-windborne": {
    id: "lead-software-engineer-gov-platforms-windborne",
    title: "Lead Software Engineer, Gov Platforms",
    companyId: "windborne",
    companyName: "WindBorne Systems",
    companyLogo: "/company_windborne.png",
    location: "Redwood City, CA / Remote (US)",
    type: "Full-time",
    salary: "$150K - $220K + equity",
    description:
      "WindBorne flies the world's largest smart weather-balloon constellation and builds WeatherMesh, the AI forecast model that has beaten DeepMind's GraphCast. The Gov Platforms team builds government-compliant versions of WindBorne's core platforms (FedRAMP, ITAR, NIST 800-53), adapting the data pipelines, APIs, and analysis tools for federal customers. Full-stack across Ruby on Rails (frontend), Python and Rust (backend), and Postgres; 5+ years. Khosla-backed (~$25M raised, Series A). Redwood City or remote (US).",
    chips: ["Backend", "Polyglot", "High compliance", "Mentorship"],
    url: "https://windbornesystems.com/careers/lead-software-engineer---gov-platforms",
    postedDate: "2026-07-07",
  },
  "junior-fullstack-engineer-serpapi": {
    id: "junior-fullstack-engineer-serpapi",
    title: "Junior Fullstack Engineer",
    companyId: "serpapi",
    companyName: "SerpApi",
    companyLogo: "/company_serpapi.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$80K - $100K + profit share",
    description:
      "SerpApi is a profitable, bootstrapped API for real-time search-engine results (Google and dozens more), trusted by developers at scale and a Rails Foundation member. This junior full-stack role builds and maintains the product across Ruby, Rails, MongoDB, and JavaScript, deployed on AWS. Remote-first, US-eligible; the team is based in Austin, TX. $80K-$100K base plus profit share.",
    chips: ["Fullstack", "Profitable"],
    url: "https://serpapi.com/careers/junior-fullstack-engineer",
    postedDate: "2026-07-07",
  },
  "backend-engineer-fathom": {
    id: "backend-engineer-fathom",
    title: "Backend Engineer",
    companyId: "fathom",
    companyName: "Fathom",
    companyLogo: "/company_fathom.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$180K - $240K + equity",
    description:
      "Fathom is the AI meeting assistant that captures, summarizes, and organizes calls so teams stay present without losing context — a fast-growing, YC-born consumer AI product. This backend role builds the core platform on Ruby on Rails and Sidekiq alongside Go services, running on GKE with MySQL, Redis, and Kafka. Remote (US). $180K-$240K plus equity.",
    chips: ["Backend", "Sidekiq", "Go", "AI-native"],
    url: "https://jobs.ashbyhq.com/fathom.video/50323c12-96b2-4e6a-b8ea-98f21ea6e960",
    postedDate: "2026-07-14",
  },

  "software-engineer-recent-grad-kikoff": {
    id: "software-engineer-recent-grad-kikoff",
    title: "Software Engineer, Recent Grad",
    companyId: "kikoff",
    companyName: "Kikoff",
    companyLogo: "/company_kikoff.svg",
    // Featured: a genuinely junior Rails role, the listing applicants ask for most.
    featured: true,
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$165K",
    description:
      "Kikoff is hiring recent grads onto the engineering team behind its credit-building products, which millions of people use. The backend is Ruby on Rails on AWS with deliberately plain infrastructure; the web and mobile apps are React on Vercel and Flutter. Kikoff is profitable, pre-IPO, and valued as a unicorn; the founders previously built three fintech unicorns. One of the few true new-grad Rails roles in San Francisco.",
    chips: ["Fullstack", "React", "Mentorship", "Profitable"],
    url: "https://job-boards.greenhouse.io/kikoff/jobs/4393822009",
    postedDate: "2026-09-07",
  },
  "software-engineer-new-grad-stripe": {
    id: "software-engineer-new-grad-stripe",
    title: "Software Engineer, New Grad",
    companyId: "stripe",
    companyName: "Stripe",
    companyLogo: "/company_stripe.svg",
    location: "South San Francisco, CA (also Seattle, New York)",
    type: "Full-time",
    salary: "$122K - $134K",
    description:
      "Stripe's new-grad program for engineers with up to 18 months of experience. Stripe works mostly in Java, Ruby, JavaScript, Scala, and Go; Ruby is the language of much of the core payments platform, so a new grad here reads and writes a lot of it. Stripe processes trillions of dollars a year for more than 10 million businesses and ships product upgrades daily.",
    chips: ["Backend", "Payments", "Polyglot", "Mentorship"],
    url: "https://stripe.com/jobs/search?gh_jid=8128744",
    postedDate: "2026-09-07",
  },
  "junior-software-engineer-corporate-tools": {
    id: "junior-software-engineer-corporate-tools",
    title: "Junior Software Engineer",
    companyId: "corporatetools",
    companyName: "Corporate Tools",
    companyLogo: "/company_corporatetools.png",
    location: "Remote (US) or Post Falls, ID",
    type: "Full-time",
    salary: "$75K",
    description:
      "Corporate Tools, the bootstrapped company behind Registered Agents Inc, hires junior engineers and teaches them Ruby, Rails, and Vue on the job. The team builds new Rails applications and maintains older Rack apps for the company's business-services platform. One year of professional experience or a CS degree; Rails experience is preferred but not required.",
    chips: ["Fullstack", "Vue", "Mentorship", "Profitable"],
    url: "https://www.corporatetools.com/job-postings/engineering-and-development/junior-software-engineer/",
    postedDate: "2026-09-07",
  },
  "jr-ruby-on-rails-developer-amphenol": {
    id: "jr-ruby-on-rails-developer-amphenol",
    title: "Jr. Ruby on Rails Developer",
    companyId: "amphenol",
    companyName: "Amphenol Borisch Technologies",
    companyLogo: "/company_amphenol.svg",
    location: "Remote (US) or Grand Rapids, MI",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Amphenol Borisch Technologies, an electronics manufacturer within Amphenol (NYSE: APH), is hiring a junior Rails developer in its Business Systems group to build and extend the internal applications that sit on top of a legacy ERP. Two years of Ruby on Rails and Vue.js, Git, and a Linux command line; TDD experience is a plus. A rare entry-level Rails role at a large public company.",
    chips: ["Fullstack", "Vue", "Mentorship"],
    url: "https://www.linkedin.com/jobs/view/4453291666",
    postedDate: "2026-09-07",
  },
  "staff-backend-engineer-rails-tread": {
    id: "staff-backend-engineer-rails-tread",
    title: "Staff Backend Engineer (Rails)",
    companyId: "tread",
    companyName: "Tread",
    companyLogo: "/company_tread.svg",
    location: "San Francisco, CA / Remote (US)",
    type: "Full-time",
    salary: "$180K - $220K + 0.1%-0.25% equity",
    description:
      "Tread is a Series A, Mucker-backed platform for construction materials logistics, with over $1B in monthly delivered load value and a payments stack that settles about $1B a month in hauler payouts. Engineering is under ten people across backend, frontend, and mobile. The backend is a Rails API on Postgres with React on the web and Flutter on mobile; strong Rails or a comparable framework and a fast ramp.",
    chips: ["Backend", "Payments", "PostgreSQL"],
    url: "https://jobs.ashbyhq.com/tread/c35ad3bd-ee36-433a-9183-17c12f59f3cb",
    postedDate: "2026-09-07",
  },
  "head-of-engineering-perfect-venue": {
    id: "head-of-engineering-perfect-venue",
    title: "Head of Engineering",
    companyId: "perfectvenue",
    companyName: "Perfect Venue",
    companyLogo: "/company_perfectvenue.png",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$220K - $280K + equity + bonus",
    description:
      "Perfect Venue builds event-sales software and AI agents for restaurants and venues, backed by Hustle Fund, Defy.vc, and Amity Ventures and used by thousands of venues. The Head of Engineering leads a distributed team from a San Francisco seat (three days a week in office), owns security and compliance for hotel and restaurant group customers, and must have shipped Ruby on Rails in production. Ten-plus years of engineering with three-plus leading teams.",
    chips: ["Fullstack", "Founding role"],
    url: "https://jobs.ashbyhq.com/perfect-venue/087a3656-2951-44a1-8f7e-76fa081b0676",
    postedDate: "2026-09-07",
  },
  "fullstack-engineer-agent-platform-crewai": {
    id: "fullstack-engineer-agent-platform-crewai",
    title: "Full-Stack Engineer, Agent Management Platform",
    companyId: "crewai",
    companyName: "CrewAI",
    companyLogo: "/company_crewai.svg",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "CrewAI, the multi-agent framework and enterprise platform behind 300M+ agent executions a month, is hiring a frontend-leaning full-stack engineer for its Agent Management Platform: the Rails web product where teams deploy, monitor, and govern agents in production. Rails, Hotwire, ViewComponent, and Tailwind alongside React, TypeScript, and Vite; tests in Minitest/RSpec and Vitest. Seven-plus years of product engineering.",
    chips: ["Fullstack", "Hotwire", "ViewComponent", "React"],
    url: "https://apply.workable.com/crewai/j/0AB5665160/",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-hireart": {
    id: "senior-software-engineer-hireart",
    title: "Senior Software Engineer",
    companyId: "hireart",
    companyName: "HireArt",
    companyLogo: "/company_hireart.svg",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$175K - $200K",
    description:
      "HireArt is a roughly 75-person staffing platform for sourcing, employing, and managing contract workers. This senior role works on the core staffing application, a large modular Rails 8.1 monolith with React 18 and some Stimulus and Turbo on the front, PostgreSQL and Redis, deployed on Heroku. Engineers work across the stack and are expected to use AI tools while owning what they ship. Eight to ten years of experience.",
    chips: ["Fullstack", "React", "PostgreSQL"],
    url: "https://www.linkedin.com/jobs/view/4408443566",
    postedDate: "2026-09-07",
  },
  "full-stack-engineer-boldin": {
    id: "full-stack-engineer-boldin",
    title: "Full Stack Engineer",
    companyId: "boldin",
    companyName: "Boldin",
    companyLogo: "/company_boldin.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Boldin (formerly NewRetirement), the Mill Valley financial-planning platform that raised a $20M Series A in 2024, is hiring a full-stack engineer on its Time to Value team, the group that shortens the path from signup to a first useful plan. React and TypeScript on the front end, Ruby on Rails on the back end.",
    chips: ["Fullstack", "Product Eng", "React", "TypeScript"],
    url: "https://job-boards.greenhouse.io/boldin/jobs/4312857009",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-backend-numero": {
    id: "senior-software-engineer-backend-numero",
    title: "Senior Software Engineer, Backend",
    companyId: "numero",
    companyName: "Numero",
    companyLogo: "/company_numero.svg",
    location: "Remote (US) / San Francisco, CA",
    type: "Full-time",
    salary: "$160K - $200K",
    description:
      "Numero builds fundraising software for political campaigns, from city council races to the US Senate, and has helped them raise more than $10B since 2019. The platform is a Ruby on Rails monolith serving TypeScript and React frontends over a GraphQL API, with Sidekiq and RSpec, and the team is now building agents on its own Ruby LLM tooling. Around six years of experience running production systems with real traffic; continental US, with one or two retreats a year in California.",
    chips: ["Backend", "GraphQL", "Sidekiq", "AI-native"],
    url: "https://wellfound.com/jobs/4299483-senior-software-engineer-backend",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-ruby-healthie": {
    id: "senior-software-engineer-ruby-healthie",
    title: "Senior Software Engineer (Ruby / Full-Stack)",
    companyId: "healthie",
    companyName: "Healthie",
    companyLogo: "/company_healthie.png",
    location: "Los Angeles, CA or New York (Hybrid)",
    type: "Full-time",
    salary: "$185K - $205K",
    description:
      "Healthie, the API-first EHR and practice-management platform behind more than 40,000 providers, is hiring senior engineers for its Web Engineering team. The work is primarily in the monolith: Rails on the backend with React, TypeScript, and GraphQL on the front. Hybrid in Los Angeles or New York.",
    chips: ["Fullstack", "React", "TypeScript", "GraphQL", "High compliance"],
    url: "https://job-boards.greenhouse.io/healthie/jobs/4410573009",
    postedDate: "2026-10-02",
  },
  "senior-software-engineer-ledger-frame": {
    id: "senior-software-engineer-ledger-frame",
    title: "Senior Software Engineer, Ledger Platform",
    companyId: "frame",
    companyName: "Frame",
    companyLogo: "/company_frame.png",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$160K - $220K",
    description:
      "Frame is a compliance-and-payments infrastructure company for regulated industries: one platform that moves money and embeds the compliance around it. The Ledger Platform engineer works primarily in Rails, Go, and TypeScript on systems where correctness is mandatory. Four-plus years with strong Rails and TypeScript; developer-facing APIs and Go are a plus. A sibling role owns the Risk Platform.",
    chips: ["Backend", "Payments", "Go", "TypeScript", "High compliance"],
    url: "https://www.linkedin.com/jobs/view/4457548244",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-risk-frame": {
    id: "senior-software-engineer-risk-frame",
    title: "Senior Software Engineer, Risk Platform",
    companyId: "frame",
    companyName: "Frame",
    companyLogo: "/company_frame.png",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$160K - $220K",
    description:
      "The second Frame opening builds the risk and compliance systems behind its merchant model: the infrastructure that decides who gets approved, what gets flagged, and how fast the company acts on a signal. Primarily Rails, Go, and TypeScript; four-plus years, with classification pipelines, document processing, and anomaly detection as pluses.",
    chips: ["Backend", "Payments", "Go", "TypeScript", "High compliance"],
    url: "https://www.linkedin.com/jobs/view/4457545293",
    postedDate: "2026-09-07",
  },
  "senior-backend-engineer-endless-commerce": {
    id: "senior-backend-engineer-endless-commerce",
    title: "Senior Backend Engineer",
    companyId: "endlesscommerce",
    companyName: "Endless Commerce",
    location: "Los Angeles, CA / Remote (US)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Endless Commerce, a Pear VC-backed startup, builds multi-channel commerce infrastructure for order management, fulfillment, and integrations. The backend is Ruby on Rails with Sidekiq, PostgreSQL, Redis, and Heroku, and this role develops the services and APIs behind it. Five-plus years of backend work with a strong emphasis on Rails; remote accepted.",
    chips: ["Backend", "Sidekiq", "PostgreSQL"],
    url: "https://jobs.ashbyhq.com/Pear-VC/342c6a70-57be-4e51-955a-54cc8246ed9d",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-tern": {
    id: "senior-software-engineer-tern",
    title: "Senior Software Engineer",
    companyId: "tern",
    companyName: "Tern",
    companyLogo: "/company_tern.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$175K - $200K + equity",
    description:
      "Tern is building the operating system for travel advisors, a $127B industry that is 98 percent small businesses, and ships every week. It is a Ruby on Rails application with a Hotwire front end on Postgres, hosted on Heroku and moving to Google Cloud. Engineers move across squads: data models, Hotwire UI, background jobs, integrations, mobile. Series A ($13M, 2025), AI-native and low-ego by its own description.",
    chips: ["Fullstack", "Hotwire", "PostgreSQL", "AI-native"],
    url: "https://jobs.ashbyhq.com/tern/e17bad73-201e-41e7-8ba4-77840288f078",
    postedDate: "2026-09-07",
  },
  "senior-fullstack-engineer-cms-circle": {
    id: "senior-fullstack-engineer-cms-circle",
    title: "Senior Full-Stack Engineer, CMS",
    companyId: "circle",
    companyName: "Circle",
    companyLogo: "/company_circle.png",
    location: "Remote (US, and worldwide)",
    type: "Full-time",
    salary: "$140K + equity",
    description:
      "Circle's CMS team owns the Page Builder that customers use to design and publish their community sites. Work across React and TypeScript on the front and Ruby on Rails on the back; deep Rails experience and five-plus years building SaaS products. U.S.-benchmarked pay globally, 35 days of paid time off, two company retreats a year.",
    chips: ["Fullstack", "Product Eng", "React", "TypeScript"],
    url: "https://jobs.ashbyhq.com/circle/bf99b611-ccbd-4b6c-aec1-4770a5c44152",
    postedDate: "2026-09-07",
  },
  "software-engineer-backend-folio": {
    id: "software-engineer-backend-folio",
    title: "Software Engineer, Backend",
    companyId: "folio",
    companyName: "Folio",
    companyLogo: "/company_folio.png",
    location: "Remote (US, Eastern-adjacent preferred)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Folio is building B2B commerce infrastructure for hospitality, starting with hotels, and raised a $14M Series A from Thrive in 2025. Folio is a Ruby on Rails app on Postgres, with TypeScript Node automations and Elasticsearch on AWS. This backend role is for a specialist in server-side design and APIs with eight-plus years on teams that shipped. Remote-first, with quarterly stays at partner hotels. Full-stack and forward-deployed variants of the role are open on the same board.",
    chips: ["Backend", "TypeScript", "PostgreSQL"],
    url: "https://jobs.ashbyhq.com/folio/ec3a9689-27fc-418c-8834-e29708798dfd",
    postedDate: "2026-09-07",
  },
  "software-engineer-product-fullstack-folio": {
    id: "software-engineer-product-fullstack-folio",
    title: "Software Engineer, Product (Full Stack)",
    companyId: "folio",
    companyName: "Folio",
    companyLogo: "/company_folio.png",
    location: "Remote (US, Eastern-adjacent preferred)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Folio's full-stack generalist role: equally at home in Ruby on Rails and Hotwire as in TypeScript, React, and Node, building the hotel-facing product from spark to shipped. Eight-plus years as a senior contributor on early-stage teams; founders welcome.",
    chips: ["Fullstack", "Product Eng", "Hotwire", "React"],
    url: "https://jobs.ashbyhq.com/folio/4e0d63c1-1ec8-4e67-9ec3-b07b2ddcfd61",
    postedDate: "2026-09-07",
  },
  "software-engineer-feature-team-smartleaf": {
    id: "software-engineer-feature-team-smartleaf",
    title: "Software Engineer, Feature Team",
    companyId: "smartleaf",
    companyName: "Smartleaf",
    companyLogo: "/company_smartleaf.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$135K - $150K",
    description:
      "Smartleaf is a founder-led Boston company whose portfolio rebalancing service handles over $90 billion in assets. The feature team works across the UI, JavaScript, and back end to make portfolio management clear for financial advisors. Stack is Ruby on Rails, Stimulus, React, PostgreSQL, and Debian, with open-source coding agents and local LLMs. Two to six years of experience. Remote candidates travel to Boston a few times a year.",
    chips: ["Fullstack", "Product Eng", "Hotwire", "React"],
    url: "https://jobs.ashbyhq.com/smartleaf/56df975e-5099-4f28-b7aa-d43c7f553e85",
    postedDate: "2026-10-02",
  },
  "principal-software-engineer-koala-health": {
    id: "principal-software-engineer-koala-health",
    title: "Principal Software Engineer, AI & Platform",
    companyId: "koalahealth",
    companyName: "Koala Health",
    companyLogo: "/company_koalahealth.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $160K",
    description:
      "Koala Health delivers pet medications in presorted pouches and raised a Series B in 2025. The principal engineer is the technical leader across the engineering org: expert-level Ruby on Rails, distributed systems, APIs, data modeling, and cloud, with ten-plus years operating production-scale systems.",
    chips: ["Backend", "Platform", "AI/ML", "Mentorship"],
    url: "https://jobs.lever.co/koalahealth/542a9701-b4f9-4440-97f9-f6a7679e6aa0",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-virtual-care-fabric": {
    id: "senior-software-engineer-virtual-care-fabric",
    title: "Senior Software Engineer, Virtual Care Platform",
    companyId: "fabric",
    companyName: "Fabric",
    companyLogo: "/company_fabric.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "From $140K",
    description:
      "Fabric (formerly Florence), the healthcare automation company that raised a $60M Series A from General Catalyst in 2024, is hiring a senior engineer for its virtual care platform. The work is in Ruby on Rails: fixing complex production bugs, performing precise live-data corrections, and hardening the platform clinicians depend on.",
    chips: ["Backend", "Fullstack", "High compliance"],
    url: "https://jobs.gem.com/fabrichealth/am9icG9zdDqV7PZiNlESJ_NyY6XaHrfH",
    postedDate: "2026-09-07",
  },
  "full-stack-engineer-ruby-react-reveal": {
    id: "full-stack-engineer-ruby-react-reveal",
    title: "Full Stack Engineer (Ruby / React)",
    companyId: "revealtech",
    companyName: "Reveal Technology",
    companyLogo: "/company_revealtech.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $185K + equity",
    description:
      "Reveal Technology builds software for public-safety and defense users at the tactical edge, and raised a $30M Series B led by Ballistic Ventures in 2025. This engineer owns the core web applications and the APIs behind mobile apps that must work disconnected, low-bandwidth, and fully offline: high-performance Ruby on Rails APIs, modern React, and hard data-synchronization problems. A second Rails and React full-stack role, on the data-platform team, is on the same board.",
    chips: ["Fullstack", "Backend", "React", "High compliance"],
    url: "https://jobs.lever.co/revealtech/b84a511d-d0f6-4430-b599-c990fc9f84b3",
    postedDate: "2026-10-02",
  },
  "senior-software-engineer-tremendous": {
    id: "senior-software-engineer-tremendous",
    title: "Senior Software Engineer",
    companyId: "tremendous",
    companyName: "Tremendous",
    companyLogo: "/company_tremendous.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $280K + equity",
    description:
      "Tremendous lets 20,000 organizations, including Atlassian, MIT, and United Way, send payouts and gift cards to millions of recipients worldwide. It is profitable with no outside investors, fully remote, high-documentation, and low-meeting. Ruby on Rails and React (or a similar JavaScript framework), PostgreSQL, Google Cloud. An Engineering Manager role ($250K to $300K) is open on the same stack.",
    chips: ["Fullstack", "Payments", "React", "PostgreSQL", "Profitable"],
    url: "https://jobs.ashbyhq.com/tremendous/bbcd8882-3fff-40c3-a376-63cc99b737ef",
    postedDate: "2026-09-07",
  },
  "engineering-manager-tremendous": {
    id: "engineering-manager-tremendous",
    title: "Engineering Manager",
    companyId: "tremendous",
    companyName: "Tremendous",
    companyLogo: "/company_tremendous.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$250K - $300K + equity",
    description:
      "Tremendous is hiring an engineering manager for its payouts platform: Ruby on Rails, TypeScript and React, PostgreSQL, Google Cloud. Eight-plus years of engineering with at least two leading a team as a manager or tech lead, in a profitable, bootstrapped, fully remote company.",
    chips: ["Fullstack", "Payments", "Mentorship", "Profitable"],
    url: "https://jobs.ashbyhq.com/tremendous/36365a33-9969-44f7-a8da-7ff24f386c34",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-rails-corporate-tools": {
    id: "senior-software-engineer-rails-corporate-tools",
    title: "Senior Software Engineer (Ruby on Rails)",
    companyId: "corporatetools",
    companyName: "Corporate Tools",
    companyLogo: "/company_corporatetools.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "Up to $185K",
    description:
      "Corporate Tools, the bootstrapped, investor-free company behind Registered Agents Inc, is hiring senior Rails engineers to peel monolith code into well-organized architecture across its business-services platform. Advanced ActiveRecord and Sequel, new Rails apps alongside older Rack apps, Vue on the front. A mid-level Software Engineer ($90K to $140K) and a Junior role are on the same page.",
    chips: ["Backend", "Fullstack", "Vue", "Profitable"],
    url: "https://www.corporatetools.com/job-postings/engineering-and-development/senior-software-engineer-ruby-on-rails/",
    postedDate: "2026-09-07",
  },
  "senior-software-engineer-payments-order-co": {
    id: "senior-software-engineer-payments-order-co",
    title: "Senior Software Engineer, Payments",
    companyId: "orderco",
    companyName: "Order.co",
    companyLogo: "/sponsor_orderco.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$175K - $195K",
    description:
      "Order.co is a B2B purchasing and payments platform that manages about half a billion dollars in annual customer spend, founded in 2016 in New York with $75M raised. The Payments team owns the software that moves real money: virtual-card issuance and authorization, bank connections, accounting integrations, invoicing, and ACH and RTP. Production Ruby and Ruby on Rails, PostgreSQL, and AI tooling in the workflow; you also mentor junior and mid-level engineers. Order.co engineers are speaking at SF Ruby 2026 about agentic Rails in production.",
    chips: ["Backend", "Payments", "PostgreSQL", "Mentorship"],
    url: "https://ats.rippling.com/orderco/jobs/6f76c6d1-1133-4a01-b836-df832888daa9",
    postedDate: "2026-10-02",
  },
  "staff-software-engineer-quantic": {
    id: "staff-software-engineer-quantic",
    title: "Staff Software Engineer",
    companyId: "quantic",
    companyName: "Quantic School of Business and Technology",
    companyLogo: "/company_quantic.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Quantic is an accredited online business school built on its own interactive learning platform, with content authoring tools, an AI tutor and advisor, and student networking. This staff role moves across the platform: five-plus years of Ruby on Rails in production, data modeling, SQL profiling, PostgreSQL, and five-plus years of JavaScript and React; Kubernetes and Helm are a plus. Series A ($15M, 2022).",
    chips: ["Fullstack", "Backend", "React", "PostgreSQL"],
    url: "https://www.linkedin.com/jobs/view/4465578261",
    postedDate: "2026-10-02",
  },
  "senior-software-engineer-karias-health": {
    id: "senior-software-engineer-karias-health",
    title: "Senior Software Engineer (Python & Ruby on Rails)",
    companyId: "kariashealth",
    companyName: "Karias Health",
    companyLogo: "/company_kariashealth.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Karias is a seed-stage health-benefits platform combining self-funded plans with an AI-enabled navigation layer. The stack is Ruby on Rails and Python on AWS (RDS, S3, Redshift, Glue, OpenSearch) with RAG pipelines on HIPAA-eligible LLMs, and the team expects AI-assisted development across the lifecycle. Seven-plus years, comfortable making structural decisions inside a mature Rails codebase.",
    chips: ["Backend", "AI/ML", "Polyglot", "High compliance", "AI-native"],
    url: "https://www.linkedin.com/jobs/view/4454299285",
    postedDate: "2026-09-07",
  },
  "full-stack-software-engineer-goodbill": {
    id: "full-stack-software-engineer-goodbill",
    title: "Full Stack Software Engineer",
    companyId: "goodbill",
    companyName: "Goodbill",
    companyLogo: "/company_goodbill.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "Not disclosed",
    description:
      "Goodbill uses AI and software to cut hospital costs for 5,000-plus employers and 250,000 patients, and was named one of TIME's Best Inventions of 2023; investors include Eniac, Maveron, and Reach Capital. The stack is Ruby, HTML, CSS, and JavaScript with Rails, SCSS, and Hotwire. They want someone who has worked at a pre-seed to Series A startup before.",
    chips: ["Fullstack", "Hotwire"],
    url: "https://builtin.com/job/full-stack-software-engineer/8898000",
    postedDate: "2026-09-07",
  },
  // FastRuby.io (OmbuLabs) is an Emerald sponsor of SF Ruby 2026 (path 1).
  "rails-engineer-contractor-fastruby": {
    id: "rails-engineer-contractor-fastruby",
    title: "Software Engineer Contractor (Ruby on Rails)",
    companyId: "fastruby",
    companyName: "FastRuby.io (OmbuLabs)",
    companyLogo: "/sponsor_fastruby.png",
    location: "Remote (4-hour overlap with US Eastern)",
    type: "Contract",
    salary: "Not disclosed",
    description:
      "OmbuLabs, the team behind FastRuby.io, is a boutique Rails agency of about 25 people that runs Rails upgrades, code audits, and feature work for clients of every size. Senior contractors work 20 to 30 hours a week on client projects in Ruby, Rails, RSpec, PostgreSQL, React, and Heroku, with pairing and code review. Remote from anywhere with four hours of overlap with US Eastern time. FastRuby.io is an Emerald sponsor of SF Ruby 2026.",
    chips: ["Backend", "Fullstack", "PostgreSQL"],
    url: "https://www.ombulabs.ai/jobs/software-engineer-contractor",
    postedDate: "2026-10-02",
  },

  /* ─────────────────────────────────────────────────────────────────
   * OUT OF ICP SCOPE — verified-open Ruby/Rails roles removed because they
   * fall outside the job board's ICP (experienced Ruby dev in the US, in
   * California if in-office). International roles and in-office roles outside
   * CA are excluded. Junior US roles are kept. (Removed June 19, 2026.)
   *
   * Outside the US:
   *   AI Squared — Backend Engineer (SDE2), India
   *     https://job-boards.greenhouse.io/aisquared/jobs/4422754006
   *   Fin (Intercom) — Senior Product Engineer, Dublin
   *     https://job-boards.greenhouse.io/intercom/jobs/6386428
   *   Fin (Intercom) — Senior Product Engineer, London
   *     https://job-boards.greenhouse.io/intercom/jobs/5107681
   *   Fin (Intercom) — Senior Software Engineer, Dublin
   *     https://job-boards.greenhouse.io/intercom/jobs/5082494
   * In-office outside CA:
   *   Chime — Senior Ruby Full-Stack SWE, Disputes Intake, Chicago
   *     https://careers.chime.com/jobs/8499443002
   *   Chime — Senior Software Engineer, Chicago
   *     https://careers.chime.com/jobs/8400999002
   *   NexHealth — Software Engineer, Seattle
   *     https://www.nexhealth.com/careers/open-positions?gh_jid=6014570004
   * ───────────────────────────────────────────────────────────────── */

  /* ─────────────────────────────────────────────────────────────────
   * PENDING SPONSORSHIP — verified-open Ruby/Rails roles held back because
   * the company is past the paid threshold (Series C+, PE-owned, acquired,
   * public, or $1B+) and has not hosted an SF Ruby meetup or sponsored the
   * conference. Publish once they host or sponsor. Rebuilt September 7,
   * 2026 from a full sweep: aggregators (LinkedIn guest search, hiring.cafe,
   * Built In, Wellfound, HN, jobs.rubyonrails.org), search-engine sweeps of
   * the Greenhouse/Ashby/Lever/Workday/Rippling/Workable domains, and the
   * boards of ~230 known Ruby companies (about 190 had no qualifying role:
   * no Ruby, intl-only, non-CA onsite, or no engineering openings). Every
   * URL below was live on Sep 7. Roles are CA onsite/hybrid or US-remote and
   * name Ruby/Rails as a primary technology; junior roles are excluded here
   * because they qualify on their own (path 2).
   *
   * Rechecked October 2, 2026: 32 closed roles were dropped (Block, Amazon
   * ART19, Handshake, Spring Health, Renew Financial, Kajabi, Mitratech,
   * SimplePractice, The RealReal, KnowBe4, PAR, Kalkomey, SRS Acquiom, HST
   * Pathways and Mode Mobile have nothing left here; Scribd, brightwheel,
   * Strava, Calendly, Fleetio, GitLab, Huntress, PrizePicks, Upstart and
   * Atlassian lost one or more roles). Shopify became a Travel sponsor on
   * Sep 8, but Travel and Community tiers do not qualify a company for the
   * board, so its roles stay here. The Workday links
   * (FuzeRx, Triumph) could not be re-verified by API and were kept.
   *
   * Of the June 19 list: Block Product Platform, Fleetio Integrations, both
   * Tines roles, Scribd SWE II and Instacart Customers Back End have closed
   * (Tines now has no Rails eng role; Instacart US roles list Ruby only as
   * one of "Java, Ruby, Python, or similar"). Handshake, Flexport and
   * Calendly are still open; Flexport is dropped because Rails is only "a
   * plus" behind Java/Spring.
   *
   * California, onsite or hybrid
   *   Stripe (private, $159B tender Feb 2026; Ruby, not Rails)
   *     Staff SWE, Link — South SF/NY/Seattle — https://stripe.com/jobs/search?gh_jid=8082847
   *     Staff SWE, Storage Abstractions — South SF/Seattle — https://stripe.com/jobs/search?gh_jid=8171539
   *   Neuralink (Series E, ~$9B, Jun 2025)
   *     SWE, Robot Manufacturing — South SF, $135K–$216K, "Our stack is Ruby on Rails and React/TypeScript"
   *     https://boards.greenhouse.io/neuralink/jobs/7655221003
   *   Atlassian, DX team (NASDAQ: TEAM; DX acquired Jan 2026)
   *     Senior Fullstack SWE, DX — SF or remote US — https://www.atlassian.com/company/careers/details/26664
   *   Braze (NASDAQ: BRZE)
   *     Senior Staff Engineer — SF (also NYC/Austin/Chicago), $208K–$350K — https://job-boards.greenhouse.io/braze/jobs/7914092
   *   Apollo.io (Series D 2023, $1.6B)
   *     Principal SWE — SF hybrid, $315K–$473K — https://job-boards.greenhouse.io/apolloio/jobs/6134562004
   *     Senior SWE — SF hybrid, $195K–$358K — https://job-boards.greenhouse.io/apolloio/jobs/6118319004
   *   Motive (S-1 filed Dec 2025; $2.85B)
   *     Staff Platform Engineer — SF hybrid, $189K–$236K, "Golang, Ruby on Rails, and Python services"
   *     https://job-boards.greenhouse.io/gomotive/jobs/8504954002
   *   Strava ($2.2B, May 2025; Ruby/Scala/Go backend)
   *     Staff Engineer, Core Services Platform — SF/remote — https://jobs.ashbyhq.com/strava/daf4c971-6a2b-48e0-aafe-afc6af47e3a1
   *   Modern Treasury (Series C 2021, $2B+)
   *     Software Engineer — SF, $120K–$240K (2+ yrs; borderline junior) — https://jobs.ashbyhq.com/moderntreasury/f2ff4c9c-0c2f-4bb8-b446-77cab281126a
   *     SWE, Infrastructure — remote US, $150K–$250K — https://jobs.ashbyhq.com/moderntreasury/bac5287c-66a1-4954-ab55-1c4c545a8ede
   *   Scribd (Spectrum Equity growth round)
   *     Staff SWE (Backend), Everand Core — SF, $171K–$267K, "Ruby (preferred), Scala, Go, or Python"
   *     https://jobs.ashbyhq.com/ScribdInc/c8fbcc07-e25a-4aa1-8208-306659febb36
   *   Taskrabbit (IKEA/Ingka since 2017)
   *     Senior SWE — SF hybrid, $130K–$180K, Rails + Sorbet — https://job-boards.greenhouse.io/taskrabbit/jobs/8122383
   *   Freshworks (NASDAQ: FRSH)
   *     Lead SWE, Backend — San Mateo hybrid, $168K–$208K — https://jobs.smartrecruiters.com/Freshworks/744000126166169
   *   Omnissa (KKR since 2024; ex-VMware EUC)
   *     Senior Full Stack Developer, Java or Ruby on Rails — Mountain View hybrid, $176K–$270K
   *     https://www.omnissa.com/careers/jobs/usa-senior-full-stack-developer-java-or-ruby-rails/
   *   Equinix (NASDAQ: EQIX)
   *     Staff Engineer, Product Software — Redwood City, $142K–$212K, "core APIs using Ruby on Rails and Go"
   *     https://www.linkedin.com/jobs/view/4427870203 (LinkedIn only; no public ATS page found)
   *   Beacon Software / 99Pledges (Series C $225M, Jun 2026)
   *     Senior SWE, 99Pledges — SF, "mature, production Rails codebase" — https://jobs.ashbyhq.com/beaconsoftware/4207cf49-5a43-48f5-a39f-afdae184819d
   *   AppFolio (NASDAQ: APPF)
   *     Sr. SWE, Property & Programs — San Diego / Santa Barbara, $138K–$173K
   *     https://www.linkedin.com/jobs/view/4452687658 (LinkedIn only)
   *   Internet Brands (KKR / Warburg Pincus)
   *     Senior Ruby on Rails Software Developer — El Segundo — https://jobs.jobvite.com/internetbrands/job/oCGVzfww
   *   Brightline (Series C 2022, KKR; Palo Alto)
   *     Full Stack Ruby on Rails SWE (Principal) — remote US, $215K–$240K — https://jobs.ashbyhq.com/hellobrightline/53358b5e-eb0b-4fe2-b7a3-9873315fbbe0
   *   Babylist (Series C 2021; Emeryville; $750M revenue)
   *     Senior SWE — remote US, $202K–$252K — https://job-boards.greenhouse.io/babylist/jobs/5987289004
   *     Staff SWE — $234K–$291K — https://job-boards.greenhouse.io/babylist/jobs/6103791004
   *     Staff Engineer, SRE — $227K–$272K — https://job-boards.greenhouse.io/babylist/jobs/6015140004
   *   Upstart (NASDAQ: UPST; San Mateo) — remote US, $167K–$231K
   *     Senior SWE, White Label Platform — https://careers.upstart.com/jobs?gh_jid=8039664
   *     Senior SWE, Marketplace Optimization — https://careers.upstart.com/jobs?gh_jid=8056243
   *   Stitch Fix (NASDAQ: SFIX; SF) — remote US
   *     Lead Engineer, Order Management — $112K–$186K — https://www.stitchfix.com/careers/jobs?gh_jid=8165244
   *     Principal Platform Engineer — $125K–$209K — https://www.stitchfix.com/careers/jobs?gh_jid=8165186
   *   Alto Pharmacy → FuzeRx (Fuze Health roll-up, 2025)
   *     Senior SWE — remote, CA eligible, $148K–$185K — https://alto.wd1.myworkdayjobs.com/en-US/FuzeHealthCareerSite/job/Remote---Florida/Senior-Software-Engineer_R201094
   *   Brightside Health (SF-founded; Series C 2022 from memory, not re-verified)
   *     Staff SWE, Growth — remote US — https://builtin.com/job/staff-software-engineer-growth/9956198 (aggregator link)
   *
   * US-remote, headquartered elsewhere
   *   Shopify (NYSE: SHOP; Travel sponsor 2026, which does not qualify) — Remote Americas
   *     Software Engineers — https://www.shopify.com/careers/software-engineers_ea5811c0-0353-4468-a1a5-0ef776748b31
   *     EM, Ruby and Rails Infrastructure — https://www.shopify.com/careers/engineering-manager-ruby-and-rails-infrastructure_0536bba4-c326-4416-935e-9401c9ea4482
   *     Senior Engineer, Privacy Engineering — https://www.shopify.com/careers/senior-engineer-privacy-engineering_6387b485-f57b-42b7-859a-702e56bfb12c
   *   GitLab (NASDAQ: GTLB) — remote US, $139K–$282K by level
   *     Senior SWE (Ruby), Security Platform: Authorization — https://job-boards.greenhouse.io/gitlab/jobs/8738225002
   *     Senior SWE (RoR/Go), Authentication — https://job-boards.greenhouse.io/gitlab/jobs/8614945002
   *     Staff Backend (Ruby), AI Engineering — https://job-boards.greenhouse.io/gitlab/jobs/8646573002
   *     Staff Fullstack (Ruby/Vue), Monetization — https://job-boards.greenhouse.io/gitlab/jobs/8739391002
   *     Staff Backend, Developer Experience — https://job-boards.greenhouse.io/gitlab/jobs/8490477002
   *     Intermediate Backend, AMER — https://job-boards.greenhouse.io/gitlab/jobs/8773006002
   *     Backend Engineer, Duo Chat — https://job-boards.greenhouse.io/gitlab/jobs/8698314002
   *   Huntress (Series D 2024, $1.55B) — remote US
   *     Principal SWE, SIEM — $215K–$240K — https://job-boards.greenhouse.io/huntress/jobs/7776837003
   *     Staff SWE, ESPM Platform — $200K–$220K — https://job-boards.greenhouse.io/huntress/jobs/7774959003
   *     Staff SWE, ISPM Platform — https://job-boards.greenhouse.io/huntress/jobs/7774957003
   *   Calendly (~$3B) — remote US, $187K–$272K
   *     Senior Full Stack Engineer, AI Scheduling (Node or Rails) — https://job-boards.greenhouse.io/calendly/jobs/8464846002
   *   Fleetio (Series D $450M, Mar 2025) — Remote USA/CAN/MEX
   *     Senior SWE, Marketplace Payments — https://job-boards.greenhouse.io/fleetio/jobs/5180391007
   *     Software Engineer, Marketplace (2+ yrs) — https://job-boards.greenhouse.io/fleetio/jobs/5213856007
   *   Kin Insurance (unicorn) — remote US
   *     Staff SWE — $165K–$200K — https://jobs.ashbyhq.com/kin/4b5dfc81-2f36-42d5-8ce1-7efc1d330f9f
   *     Senior SWE, Back-End — $122K–$153K (posted Oct 2025) — https://jobs.ashbyhq.com/kin/2b57a949-a4bb-440f-a170-eda3ccf49b6c
   *   CentralReach (Roper Technologies, 2025)
   *     Sr. SWE, Ruby on Rails — remote US, $120K–$180K — https://job-boards.greenhouse.io/centralreach/jobs/4396809009
   *   PrizePicks (Allwyn majority, Jan 2026) — remote
   *     Senior Back End Engineer (Rails & Go) — $175K–$185K — https://prizepicks.com/position?gh_jid=7768364003
   *     Gamification Senior SWE (Rails) — https://prizepicks.com/position?gh_jid=7984095003
   *   Caribou (Series C 2022, $1.1B)
   *     Engineering Manager, Loan Origination — remote US, $174K–$217K — https://job-boards.greenhouse.io/caribou/jobs/7820484003
   *   Triumph Financial / TriumphPay (NASDAQ: TFIN) — remote US
   *     Lead/Staff SWE, Ruby on Rails — $173K–$281K — https://tbkbank.wd1.myworkdayjobs.com/tfin/job/Remote---United-States/Lead-Staff-Software-Engineer--Remote----Ruby-on-Rails_REQ-4921
   *     Lead or Staff SWE (Ruby, C# or F#) — https://tbkbank.wd1.myworkdayjobs.com/tfin/job/Remote---United-States/Staff-Software-Engineer_REQ-4581
   *   HHAeXchange (Hg, 2021)
   *     Sr. SWE, ROR — remote US, $110K–$125K — https://jobs.lever.co/hhaexchange/e56acb41-8b08-4541-9fa8-025faed5b7a5
   *   Fluxx (Metamorph / ABS Capital, 2021)
   *     Principal Engineer — remote, $164K–$210K, Rails + Node — https://job-boards.greenhouse.io/fluxx/jobs/4688509006
   *   Andela (Series E 2021, $1.5B)
   *     Staff Fullstack Engineer — North America remote, "proprietary Ruby on Rails ecosystem" — https://jobs.ashbyhq.com/andela/9829c4f1-548f-4ef9-b4a2-c0ba2e11b90c
   *   Chronograph (Sixth Street growth equity, Jun 2026)
   *     Sr. SWE, Platform Engineering — remote, $175K–$215K, Rails + Node — https://www.chronograph.pe/jobs/?gh_jid=5187048007
   *   ApartmentIQ (Susquehanna Growth Equity round, $25M, Aug 2026; profitable, $30M+ raised)
   *     Senior SWE, Applications — remote US, Rails API + React — https://job-boards.greenhouse.io/apartmentiq/jobs/8069494
   *     Staff SWE — remote US, Ruby + Python + Terraform — https://job-boards.greenhouse.io/apartmentiq/jobs/8116176
   *   GiveCampus (Silversmith growth equity 2022)
   *     Senior SWE, Online Giving — remote US — https://job-boards.greenhouse.io/givecampus/jobs/4374577009
   *     Staff SWE — https://job-boards.greenhouse.io/givecampus/jobs/4278428009
   *   brightwheel (Series C 2021, ~$600M) — remote US, Rails + Sidekiq backend
   *     Senior AI SWE, Product — $133K–$189K — https://jobs.ashbyhq.com/brightwheel/96f73905-30e4-4921-a71d-09360237ebb4
   *     Staff AI SWE, Product — https://jobs.ashbyhq.com/brightwheel/1e5afc7d-5a4d-437e-bade-1e4a14ba4c24
   *   Beam Benefits (Columbus; Series E 2021 from memory, not re-verified)
   *     Senior SWE — remote US, "primarily React and Ruby on Rails" — https://builtin.com/job/senior-software-engineer/9228677 (aggregator link)
   *
   * Borderline, not held (Ruby is one of several primary languages, or the
   * role is migrating off Rails): Envoy MTS Fullstack, Poshmark Sr SWE Cloud
   * Platform, Hinge Health Sr Backend/Full Stack (Node-first), Instacart Sr
   * EM Enterprise Fulfillment, Rightway Sr SWE (new services in Node),
   * Snapsheet SRE (Rails "strong preference"), Rhino Sr SWE (Rails "a big
   * plus"), Flexport Autonomous Freight (Rails "a plus"), Coinbase/Airbnb
   * (language lists), Twitch SE I Payments (Go/Ruby/Java/C++), Bold Penguin
   * and Decisiv (aggregator-only, could not be verified), Apex Dental
   * (email-apply, no ATS).
   * ───────────────────────────────────────────────────────────────── */

  /* ─────────────────────────────────────────────────────────────────
   * ARCHIVED — closed listings without active Ruby/Rails replacements
   * ─────────────────────────────────────────────────────────────────
   *
   * ── August 2026 audit ──
   * Stepful — 4 of 6 listings closed (absent from the Ashby open-jobs API).
   * Remaining Stepful equivalents are NYC-hybrid only (geo-ineligible); the two
   * open ones (Staff PE 1, Senior PE 1) are already on the board.
   * "staff-software-engineer-1-stepful":  { url: "https://jobs.ashbyhq.com/stepful/1bcc5add-aebd-46c8-8bcc-3bcf60dda70e", postedDate: "2026-06-19" },
   * "senior-software-engineer-1-stepful": { url: "https://jobs.ashbyhq.com/stepful/0441f421-a1b2-4561-9284-50e0621db3ba", postedDate: "2026-06-19" },
   * "senior-software-engineer-2-stepful": { url: "https://jobs.ashbyhq.com/stepful/227ebf1e-4d95-46cb-9b52-f7e6677db180", postedDate: "2026-06-19" },
   * "senior-product-engineer-2-stepful": { url: "https://jobs.ashbyhq.com/stepful/128da2c1-041e-41ab-a82a-5bb95e766f76", postedDate: "2026-06-19" },
   *
   * BackerKit — jobs.rubyonrails.org posting returns HTTP 410 Gone; Lever board
   * empty. No replacement.
   * "staff-software-developer-backerkit": { url: "https://jobs.rubyonrails.org/jobs/32638-staff-software-developer-backerkit", postedDate: "2026-06-20" },
   *
   * Hudu — Ashby board has only a non-eng role (Account Executive). No Rails
   * replacement.
   * "ruby-on-rails-engineer-hudu": { url: "https://jobs.ashbyhq.com/hudu/da7eb34e-cd78-4db1-9bf1-7c7fba710825", postedDate: "2026-07-07" },
   *
   * Persona — Online Data Stores role closed (Ashby API). The closest same-company
   * role (Senior SWE, Resilience) names no languages, failing the Rails-confirmation
   * bar, so it was not swapped in. Persona still has 1 open role on the board.
   * "senior-software-engineer-online-data-stores-persona": { url: "https://jobs.ashbyhq.com/persona/4dcc5ffd-2f9c-4f15-8865-a0629fff6b70", postedDate: "2026-08-02" },
   *
   * Beyond Finance — no Ruby/Rails openings on their careers page (April 2026)
   * "engineering-manager-beyondfinance": {
   *   id: "engineering-manager-beyondfinance",
   *   title: "Engineering Manager - Servicing",
   *   sponsorId: "beyondfinance",
   *   url: "https://job-boards.greenhouse.io/beyondfinance/jobs/7317522",
   *   postedDate: "2025-01-04",
   * },
   *
   * CompanyCam — Senior Software Engineer (Rails) and Agentic Systems roles closed,
   * replaced with single Staff Software Engineer (Ruby on Rails) listing
   * "senior-software-engineer-companycam": {
   *   url: "https://companycam.com/job?gh_jid=7498739003",
   *   postedDate: "2024-11-20",
   * },
   * "senior-software-engineer-data-companycam": {
   *   url: "https://companycam.com/job?gh_jid=7500627003",
   *   postedDate: "2024-11-20",
   * },
   * "senior-software-engineer-agentic-companycam": {
   *   url: "https://companycam.com/job?gh_jid=7505187003",
   *   postedDate: "2024-11-20",
   * },
   *
   * CompanyCam — Staff Software Engineer (Ruby on Rails, gh_jid=7692268003) closed
   * (May 2026). Greenhouse API confirms only Senior SE Beam remains as the
   * Rails-relevant CompanyCam role. No Staff Rails replacement on the board.
   * "staff-software-engineer-rails-companycam": {
   *   url: "https://companycam.com/job?gh_jid=7692268003",
   *   postedDate: "2026-04-27",
   * },
   *
   * Omada — old Software Engineer II Enterprise role closed, no SE II replacement
   * "software-engineer-ii-enterprise-omada": {
   *   url: "https://grnh.se/czywk5ol1us",
   *   postedDate: "2025-01-13",
   * },
   * "software-engineer-ii-member-omada": {
   *   url: "https://grnh.se/v7xgwvjf1us",
   *   postedDate: "2025-01-13",
   * },
   *
   * Omada — Senior SE Member Engineering re-listed under new ID 7822840
   * "senior-software-engineer-member-omada-7711461": {
   *   url: "https://job-boards.greenhouse.io/omadahealth/jobs/7711461",
   *   postedDate: "2026-04-27",
   * },
   *
   * Thatch — Engineering Manager role no longer open
   * "engineering-manager-thatch": {
   *   url: "https://thatch.com/jobs/engineering-manager-4973468008",
   *   postedDate: "2025-01-13",
   * },
   * "software-engineer-foundations-thatch": {
   *   url: "https://thatch.com/jobs/software-engineer-foundations-4615090008",
   *   postedDate: "2025-01-13",
   * },
   * "software-engineer-product-thatch": {
   *   url: "https://thatch.com/jobs/software-engineer-product-4614620008",
   *   postedDate: "2025-01-13",
   * },
   *
   * Gusto — Staff and Senior Staff roles closed; replaced with Pay Group Principal
   * and Entity Management Sr Staff
   * "staff-software-engineer-gusto": {
   *   url: "https://job-boards.greenhouse.io/gusto/jobs/5034679",
   *   postedDate: "2025-01-16",
   * },
   * "senior-staff-software-engineer-gusto": {
   *   url: "https://job-boards.greenhouse.io/gusto/jobs/5933602?gh_src=ih272kl21us",
   *   postedDate: "2025-01-16",
   * },
   *
   * Gusto — Principal Contractors Payroll closed, replaced with Principal Money Group
   * "principal-software-engineer-gusto": {
   *   url: "https://job-boards.greenhouse.io/gusto/jobs/6447954?gh_src=ih272kl21us",
   *   postedDate: "2025-01-16",
   * },
   *
   * Chime — Senior SE Application and Language Frameworks closed,
   * replaced with Senior SE Secure Cards
   * "senior-software-engineer-chime": {
   *   url: "https://careers.chime.com/en/jobs/8141073002/senior-software-engineer-application-and-language-frameworks/",
   *   postedDate: "2025-01-13",
   * },
   *
   * Whop — Staff Software Engineer, Backend (gh_jid=4250926007) closed.
   * As of May 2026, Whop's Greenhouse board has collapsed to a single generic
   * "Engineering" catch-all (gh_jid=5133646007) covering "Hardcore /
   * Design / Business savvy" engineer archetypes — no Rails-specific listing
   * "staff-software-engineer-whop": {
   *   sponsorId: "whop",
   *   url: "https://careers.whop.com/?gh_jid=4250926007",
   *   postedDate: "2026-02-22",
   * },
   *
   * StackBlitz / bolt.new — Senior Rails role closed; no Rails openings as of May 2026
   * (current eng listings are Front-End / Full Stack / Applied AI only)
   * "senior-software-engineer-rails-boltnew": {
   *   url: "https://job-boards.greenhouse.io/stackblitz/jobs/4006004009?gh_src=fk3cln2c9us",
   *   postedDate: "2025-01-13",
   * },
   *
   * Persona — explicit "Software Engineer, Ruby on Rails" listing no longer
   * exists; Rails work happens in Resilience and Security teams (the latter
   * is kept above)
   * "software-engineer-rails-persona": {
   *   url: "https://jobs.ashbyhq.com/persona/748ae6d9-fa4f-46b4-8232-943ead83e5e0",
   *   postedDate: "2026-02-22",
   * },
   *
   * Cactus (oncactus) — YC posting 404s; company has 0 jobs on YC and asks
   * applicants to email join@oncactus.com directly
   * "senior-rails-ai-engineer-cactus": {
   *   startupId: "cactus",
   *   url: "https://www.ycombinator.com/companies/oncactus/jobs/EQeRwos-senior-ruby-on-rails-ai-engineer",
   *   postedDate: "2026-01-13",
   * },
   *
   * Omada — Senior SE (Enterprise) closed (June 2026 audit); replaced with
   * Senior Software Engineer (id 7137954), same contracting/eligibility/billing scope
   * "senior-software-engineer-enterprise-omada": {
   *   url: "https://job-boards.greenhouse.io/omadahealth/jobs/7685483",
   *   postedDate: "2026-04-27",
   * },
   *
   * Gusto — Principal SWE Money Group closed (June 2026 audit); replaced with
   * Staff SWE Payments / Risk (id 7822587). No Principal Money Group role open.
   * "principal-software-engineer-money-group-gusto": {
   *   url: "https://job-boards.greenhouse.io/gusto/jobs/7654934",
   *   postedDate: "2026-05-10",
   * },
   *
   * Omada — Staff Software Engineer (id 7915113) closed (June 18, 2026 audit);
   * GH API 404. No Staff-tier Rails role open. Replaced with Senior Software
   * Engineer, Assurance (id 7997294), Omada's agentic-systems/AI-transformation team.
   * "staff-software-engineer-omada": {
   *   url: "https://job-boards.greenhouse.io/omadahealth/jobs/7915113",
   *   postedDate: "2026-05-15",
   * },
   *
   * Chime — Senior SE Secure Cards (id 8322470002) closed (June 18, 2026 audit);
   * URL returns HTTP 200 but renders an empty shell, role gone from the live board.
   * Replaced with Senior Ruby Full-Stack SWE, Disputes Intake (id 8499443002).
   * "senior-software-engineer-secure-cards-chime": {
   *   url: "https://careers.chime.com/en/jobs/8322470002/senior-software-engineer-secure-cards/",
   *   postedDate: "2026-05-10",
   * },
   *
   * Persona — Software Engineer, Security (Ashby 06ce6de8) closed (July 1, 2026
   * audit); gone from the live Ashby board. That was the Rails-preferred security
   * SWE. Replaced in-place with Software Engineer, Data Products (Ashby 9d501850),
   * a $130-220K Rails full-stack role on Persona's data platform application layer.
   * "software-engineer-security-persona": {
   *   url: "https://jobs.ashbyhq.com/persona/06ce6de8-8541-4dfd-9c09-3e467d5f91bb",
   *   postedDate: "2026-04-27",
   * },
   *
   * CompanyCam — Software Engineer II, Integrations (Greenhouse 7728259003) closed
   * (July 1, 2026 audit); GH boards-api 404. CompanyCam's live board has no
   * Ruby/Rails software role (only ML Computer Vision and a Senior Infrastructure
   * Engineer that lists Ruby merely as a scripting skill). Removed, no replacement.
   * "software-engineer-ii-companycam": {
   *   sponsorId: "companycam",
   *   url: "https://job-boards.greenhouse.io/companycam/jobs/7728259003",
   *   postedDate: "2026-06-05",
   * },
   *
   * Verse Medical — Senior/Staff Full Stack Engineer (workatastartup 79906)
   * still OPEN (July 1, 2026 audit) but off-stack: the role's requirements and
   * "Our Team & Our Tools" list are Python/Flask + TypeScript/React + Postgres,
   * and the skill chips drop Ruby entirely. Ruby/Rails survives only in a generic
   * company-wide tech-stack footer. No longer a genuine Rails role; removed.
   * "senior-staff-fullstack-versemedical": {
   *   companyId: "versemedical",
   *   url: "https://www.workatastartup.com/jobs/79906",
   *   postedDate: "2026-06-19",
   * },
   *
   * PlanetScale — Software Engineer, Surfaces (Greenhouse 4091110009) closed
   * (July 1, 2026 audit); GH boards-api 404. Surfaces was PlanetScale's Rails
   * dashboard team. The remaining open SWE roles (Insights, Neki Orchestration,
   * PlanetScale Postgres) are Go-primary and list Ruby only as "or similar," so
   * none qualifies as a Ruby/Rails role for this board. Removed, no replacement.
   * "software-engineer-surfaces-planetscale": {
   *   sponsorId: "planetscale",
   *   url: "https://job-boards.greenhouse.io/planetscale/jobs/4091110009",
   *   postedDate: "2026-06-19",
   * },
   *
   * Gusto — Staff SWE Payments / Risk (Greenhouse 7822587) closed (July 7, 2026
   * audit); GH boards-api 404. Replaced in-place with Senior Staff SWE, Money
   * Group (id 7654934), Gusto's money-movement / lending / financial-accounts org.
   * "staff-software-engineer-payments-risk-gusto": {
   *   sponsorId: "gusto",
   *   url: "https://job-boards.greenhouse.io/gusto/jobs/7822587",
   *   postedDate: "2026-06-05",
   * },
   *
   * WindBorne — Software Engineer, Operational Systems closed (July 7, 2026
   * audit); careers URL 404s and the role is gone from /open-roles. Replaced
   * in-place with Lead Software Engineer, Gov Platforms (same Rails + Python +
   * Rust + Postgres stack, Redwood City / remote-US).
   * "software-engineer-operational-systems-windborne": {
   *   companyId: "windborne",
   *   url: "https://windbornesystems.com/careers/software-engineer---operational-systems",
   *   postedDate: "2026-07-01",
   * },
   *
   * ── July 26, 2026 audit ──────────────────────────────────────────
   *
   * Omada — "Senior Software Engineer" (GH 7137954, contracting/eligibility/
   * billing) closed; GH boards-api 404. Replaced in-place with Senior Software
   * Engineer, Core Systems & Integrations (GH 8051562), same backend/data-
   * integrations scope, confirmed Rails (AWS, Ruby, Rails, Postgres, GraphQL).
   * "senior-software-engineer-omada": {
   *   url: "https://job-boards.greenhouse.io/omadahealth/jobs/7137954",
   *   postedDate: "2026-06-05",
   * },
   *
   * Decile Group — "Senior Ruby on Rails Engineer" (Lever 4804b6c2) closed;
   * replaced in-place with the current "Ruby on Rails Engineer w/ front-end
   * skills" (Lever 3a1e9b3d), same VC Lab / Decile Hub Rails codebase, Palo
   * Alto / Pacific-remote.
   * "senior-rails-engineer-decile": {
   *   url: "https://jobs.lever.co/decilegroup/4804b6c2-0ba8-4a1b-8024-84c8ab95fb2f",
   *   postedDate: "2026-06-19",
   * },
   *
   * Better Stack — jobs.rubyonrails.org aggregator posting (28439) expired
   * (HTTP 410). The Full-stack Engineer role is still open on the company site;
   * URL updated in-place to https://betterstack.com/careers (Typeform apply, no
   * per-role permalink). Listing kept.
   *
   * Natural — Core Payments Engineer removed. Role still open (natural.co →
   * natural.com domain migration, SF, seed), but the current public posting no
   * longer names Ruby/Rails anywhere (all "rails" are payment rails); Rails not
   * substantiated from the live source, so it's no longer a genuine Rails role.
   * "core-payments-engineer-natural": {
   *   companyId: "natural",
   *   url: "https://www.natural.com/careers/core-payments-engineer",
   *   postedDate: "2026-06-19",
   * },
   *
   * Thatch — "Software Engineer: Backend" (GH 5113759008) closed; Thatch's
   * Greenhouse board (org "thatch") has no Backend replacement (only Analytics
   * Engineer, non-Rails). Removed; three other Thatch roles remain on the board.
   * "software-engineer-backend-thatch": {
   *   sponsorId: "thatch",
   *   url: "https://thatch.com/jobs/software-engineer-backend-5113759008",
   *   postedDate: "2026-04-27",
   * },
   *
   * Levelpath — "Software Engineer, Ruby on Rails (Backend)" (Ashby 140eb34a)
   * closed. Levelpath's live board has no US Rails role: the remaining SF roles
   * (Forward Deployed Engineer, Integrations Engineer) don't mention Ruby/Rails,
   * and the only Rails/full-stack role is in Riga, Latvia (out of geo). Removed.
   * "software-engineer-rails-levelpath": {
   *   companyId: "levelpath",
   *   url: "https://jobs.ashbyhq.com/levelpath/140eb34a-a723-4b29-9cda-b894c01c67f3",
   *   postedDate: "2026-06-19",
   * },
   *
   * True Link Financial — "Senior Software Engineer" (Ashby 79a24a30) closed.
   * Only a "Senior Front End Engineer" (React) and a Principal Product Designer
   * remain open — no Rails backend/full-stack equivalent. Removed.
   * "senior-software-engineer-truelink": {
   *   companyId: "truelink",
   *   url: "https://jobs.ashbyhq.com/truelinkfinancial/79a24a30-5f5a-4147-a5c2-c35e24f56802",
   *   postedDate: "2026-06-19",
   * },
   *
   * Nomad (Nomad Labs Inc, guaranteed-rent fintech) — aggregator posting (28550)
   * expired (HTTP 410). Ashby board (org "nomad") now lists only a non-eng
   * Applications Coordinator; no Rails role open. Removed, no replacement.
   * "senior-software-engineer-ii-nomad": {
   *   companyId: "nomad",
   *   url: "https://jobs.rubyonrails.org/jobs/28550-senior-software-engineer-ii-nomad",
   *   postedDate: "2026-06-20",
   * },
   *
   * MxU — aggregator posting (34946) expired (HTTP 404). mxu.com is a parked
   * domain; the real site (getmxu.com) has no careers page and no open role.
   * Removed, no durable URL to point to.
   * "senior-product-engineer-mxu": {
   *   companyId: "mxu",
   *   url: "https://jobs.rubyonrails.org/jobs/34946-senior-product-engineer-mxu",
   *   postedDate: "2026-07-07",
   * },
   */

  /* ---- September 4, 2026 audit ---- */
  // fullstack-engineer-reset: Reset - Ashby board is empty (company is posting no roles at all)
  //   "fullstack-engineer-reset": {
  //     id: "fullstack-engineer-reset",
  //     title: "Full Stack Engineer",
  //     startupId: "reset",
  //     location: "Remote (US)",
  //     type: "Full-time",
  //     salary: "$150K - $180K + equity",
  //     description:
  //       "Reset is a public benefit corp building earned-wage access (EWA) for everyday Americans — fee-free access to pay you've already earned, before payday. Unlike consumer EWA apps that go direct-to-consumer, Reset embeds directly into the credit unions and community banks people already trust, pairing daily income access with automated cashflow budgeting inside the partner's banking app. Mission: better timing of income to fundamentally change how paycheck-to-paycheck households manage money. $7M+ raised; founders ex-Visa, Salesforce, Upstart; HQ Palo Alto. Work closely with the CTO on real-time card-transaction decisioning (sub-second authorization, dynamic spend limits based on income and cash flow) and integrations with banking + payments partners. Stack: Ruby on Rails + PostgreSQL backend, React frontend, Heroku. Strong full-stack and API design experience required; fintech background a bonus. AI as a force multiplier expected.",
  //     chips: ["Fullstack", "Payments", "React", "Public benefit"],
  //     url: "https://jobs.ashbyhq.com/Reset/b40547a5-3b95-4646-8786-147cf83b4181?utm_source=rb8JwX8KGV",
  //     postedDate: "2026-04-28",
  //   },

  // senior-software-engineer-assurance-omada: Omada - req closed; the only remaining platform role is Python-only Data & AI
  //   "senior-software-engineer-assurance-omada": {
  //     id: "senior-software-engineer-assurance-omada",
  //     title: "Senior Software Engineer, Assurance",
  //     sponsorId: "omada",
  //     location: "Remote (US Only)",
  //     type: "Full-time",
  //     salary: "$179K - $224K",
  //     description:
  //       "Omada Health is hiring a Senior Software Engineer for its Assurance / agentic systems team, powering AI Transformation across Engineering, Product, and Design. Sitting inside Architecture & Infrastructure, the team defines the patterns, tools, and infrastructure that let every engineer, PM, and designer use AI to build, test, and operate software safely, orchestrating agentic software development with quality built in by design. Work at the intersection of infrastructure and application development on Omada's Ruby/Rails stack (PostgreSQL, Kafka). $179.4-224.3K base in CA/NY/WA ($171.6-214.5K in CO) + bonus + equity. US-based.",
  //     chips: ["AI/ML", "Platform", "Kafka", "AI-native"],
  //     url: "https://job-boards.greenhouse.io/omadahealth/jobs/7997294",
  //     postedDate: "2026-06-18",
  //   },

  // senior-software-engineer-member-omada: Omada - req closed; see above
  //   "senior-software-engineer-member-omada": {
  //     id: "senior-software-engineer-member-omada",
  //     title: "Senior Software Engineer (Member Engineering)",
  //     sponsorId: "omada",
  //     location: "Remote (US Only)",
  //     type: "Full-time",
  //     salary: "$179K - $224K",
  //     description:
  //       "Omada Health is hiring a Senior Software Engineer for the Member Engineering team to build the backends powering mobile applications for members and web applications for providers delivering digital healthcare. Spend 80-90% of time hands-on coding, mentor junior engineers, and propose AI solutions to complex problems. 7+ years experience with Ruby or Python, relational databases (PostgreSQL/MySQL), scalable APIs, and CI/CD pipelines. $172-224K base depending on state + bonus + equity. US-based.",
  //     chips: ["Backend", "PostgreSQL", "Polyglot", "Mentorship"],
  //     url: "https://job-boards.greenhouse.io/omadahealth/jobs/7822840",
  //     postedDate: "2026-05-10",
  //   },

  // full-stack-engineer-upmetrics: UpMetrics - Lever board is down to a single Senior Client Manager role
  //   "full-stack-engineer-upmetrics": {
  //     id: "full-stack-engineer-upmetrics",
  //     title: "Full Stack Software Engineer",
  //     companyId: "upmetrics",
  //     companyName: "UpMetrics",
  //     companyLogo: "/company_upmetrics.png",
  //     location: "Remote (US) / San Francisco, CA",
  //     type: "Full-time",
  //     salary: "$145K - $170K",
  //     description:
  //       "UpMetrics is an impact-reporting and analytics platform for nonprofits, foundations, and impact investors. You'll build and evolve the Ruby on Rails API (background jobs, data models) plus rich Vue.js + TypeScript front-end experiences on MySQL; 6+ years wanted. HQ at 300 Brannan St, San Francisco (SOMA).",
  //     chips: ["Fullstack", "Vue", "MySQL"],
  //     url: "https://jobs.lever.co/UpMetrics/62b78791-e881-44c7-bf21-c82bce483081",
  //     postedDate: "2026-06-19",
  //   },

  // senior-fullstack-engineer-jukebox: Jukebox Health - req closed; all 43 open roles are clinical or construction
  //   "senior-fullstack-engineer-jukebox": {
  //     id: "senior-fullstack-engineer-jukebox",
  //     title: "Senior Fullstack Engineer",
  //     companyId: "jukeboxhealth",
  //     companyName: "Jukebox Health",
  //     companyLogo: "/company_jukeboxhealth.svg",
  //     location: "Remote (US)",
  //     type: "Full-time",
  //     salary: "$180K - $210K + equity",
  //     description:
  //       "Jukebox Health makes homes safer for older adults, delivering home-safety modifications through Medicare/Medicaid plans; $30.5M raised (Series A: Valtruis, Home Depot Ventures, Equitage). This senior role builds the platform end to end on a Ruby on Rails backend with a React + TypeScript frontend. NYC HQ, remote across the US.",
  //     chips: ["Fullstack", "React", "TypeScript"],
  //     url: "https://job-boards.greenhouse.io/jukeboxhealth/jobs/4284648009",
  //     postedDate: "2026-07-01",
  //   },

  // software-engineer-product-engagement-thatch: Thatch - posting returns a genuine Job Not Found page
  //   "software-engineer-product-engagement-thatch": {
  //     id: "software-engineer-product-engagement-thatch",
  //     title: "Software Engineer: Full Stack, Product Engagement",
  //     sponsorId: "thatch",
  //     location: "Remote (US) / San Francisco",
  //     type: "Full-time",
  //     salary: "$170K - $200K",
  //     description:
  //       "Thatch is hiring a Full Stack Engineer on the Product Engagement team to enhance how members and employers experience the platform — onboarding, activation, and enrollment flows. Build user-facing features and backend systems while using data and instrumentation to drive engagement. Work across Ruby on Rails, React, and TailwindCSS, collaborating with product and design to ship impactful changes. $170k-$200k.",
  //     chips: ["Product Eng", "Fullstack", "React"],
  //     url: "https://thatch.com/jobs/software-engineer-full-stack-product-engagement-5171664008",
  //     postedDate: "2026-04-27",
  //   },

  // software-engineer-relevant-healthcare: Relevant Healthcare - 404; their Lead Engineer role stays on the board
  //   "software-engineer-relevant-healthcare": {
  //     id: "software-engineer-relevant-healthcare",
  //     title: "Software Engineer",
  //     companyId: "relevanthealthcare",
  //     companyName: "Relevant Healthcare",
  //     companyLogo: "/company_relevanthealthcare.png",
  //     location: "Remote (US)",
  //     type: "Full-time",
  //     salary: "$115K - $165K",
  //     description:
  //       "Relevant Healthcare is a bootstrapped, profitable ~25-person team building an analytics and population-health platform for community health centers. This role works across a Ruby on Rails backend with a TypeScript/React frontend (Apollo/GraphQL, d3, Go, GCP). Fully remote, US/Canada.",
  //     chips: ["Fullstack", "GraphQL", "Profitable"],
  //     url: "https://relevant.healthcare/jobs/software-engineer/",
  //     postedDate: "2026-06-20",
  //   },

  // senior-fullstack-engineer-opendate: Opendate - role gone; only open eng role is a Chicago data-migration specialist
  //   "senior-fullstack-engineer-opendate": {
  //     id: "senior-fullstack-engineer-opendate",
  //     title: "Senior Full-Stack Software Engineer",
  //     companyId: "opendate",
  //     companyName: "Opendate",
  //     companyLogo: "/company_opendate.png",
  //     location: "Remote (US)",
  //     type: "Full-time",
  //     description:
  //       "Opendate is the operating system for live events: booking, ticketing, and settlement for 200+ independent venues, doubled in the past year. $14M Series A led by High Alpha (January 2026). You'll work in a monolithic Ruby on Rails codebase with PostgreSQL, Redis, BigQuery, and React; the team says every engineer has AI teammates in their daily workflow. Remote US, with Indianapolis and Chicago offices to drop into.",
  //     chips: ["Fullstack", "React", "PostgreSQL", "AI-native"],
  //     url: "https://www.opendate.io/careers/senior-full-stack-software-engineer",
  //     postedDate: "2026-07-01",
  //   },

  // senior-fullstack-engineer-checkmate: Checkmate - rubyonrails.org post expired (410), itsacheckmate.com lists no openings
  //   "senior-fullstack-engineer-checkmate": {
  //     id: "senior-fullstack-engineer-checkmate",
  //     title: "Senior Full Stack Engineer",
  //     companyId: "checkmate",
  //     companyName: "Checkmate",
  //     companyLogo: "/company_checkmate.png",
  //     location: "Remote (US)",
  //     type: "Full-time",
  //     salary: "$180K",
  //     description:
  //       "Checkmate powers restaurant ordering: POS integrations, voice AI, and kiosks for enterprise restaurant brands. $21.5M raised, Series B led by Tiger Global. The stack is Ruby on Rails and React with Sidekiq, REST/GraphQL APIs, and PostgreSQL/MySQL, in what the team calls an AI-led SDLC where engineers are expected to leverage AI coding agents daily. 100% remote, US.",
  //     chips: ["Fullstack", "React", "Sidekiq", "AI-native"],
  //     url: "https://jobs.rubyonrails.org/jobs/34523-senior-full-stack-engineer-ruby-on-rails-reactjs-checkmate",
  //     postedDate: "2026-07-01",
  //   },

  /* ---- October 2, 2026 audit ---- */
  // Closed, no qualifying replacement on the same board:
  // senior-software-engineer-authorium: Authorium - Ashby closed; its one remaining eng role replaced software-engineer-authorium in place
  //   url: "https://jobs.ashbyhq.com/Authorium/dc83e0dd-9279-4381-9930-fca2c5f2b4be", postedDate: "2026-06-19"
  // software-engineer-i-handshake-ai: Handshake - Ashby closed; none of the 76 open roles names Ruby or Rails
  //   url: "https://jobs.ashbyhq.com/Handshake/9a93ec72-d396-4971-8d4c-222094f9c5a3", postedDate: "2026-09-07"
  // senior-fullstack-engineer-ai-core-circle: Circle - Ashby closed; the AI Platform lead roles that replaced it are outside the US (CMS role stays)
  //   url: "https://jobs.ashbyhq.com/circle/77d16455-292a-4926-a182-58a9e2950c9c", postedDate: "2026-09-07"
  // senior-software-engineer-rails-companycam: CompanyCam - Ashby closed; the only eng opening (Engineering Manager) names no Ruby or Rails
  //   url: "https://jobs.ashbyhq.com/companycam/76838979-40c4-4d4c-81e6-976ed7b6ee78", postedDate: "2026-09-06"
  // software-engineer-platforms-integrations-salma: Salma Health - Ashby closed; board is all clinical roles
  //   url: "https://jobs.ashbyhq.com/salma-health/91df7bfc-b8a0-4ac6-a5f4-e1fc3e896c9d", postedDate: "2026-07-01"
  // senior-fullstack-engineer-arkestro: Arkestro - GH 404; only an SDET role lists Ruby among several languages
  //   url: "https://job-boards.greenhouse.io/arkestroinc/jobs/5161290007", postedDate: "2026-06-20"
  // senior-platform-engineer-pairteam: Pair Team - GH 404; none of the 19 open roles names Ruby or Rails
  //   url: "https://job-boards.greenhouse.io/pairteam/jobs/8642973002", postedDate: "2026-09-04"
  // product-engineer-warehouse-ops-revivn: Revivn - GH 404; the remaining Rails role (Customer Platform) is in-office Brooklyn
  //   url: "https://job-boards.greenhouse.io/revivn/jobs/5212662007", postedDate: "2026-09-07"
  // senior-product-engineer-govly: Govly - Rippling redirects to job_not_found; board has only an SDR role
  //   url: "https://ats.rippling.com/govly-inc/jobs/ec8496c3-b203-46eb-bc78-13d1d0856756", postedDate: "2026-09-07"
  // senior-fullstack-rails-piesystems: Pie Systems - Wellfound 410 ("taken down"); company page lists no jobs
  //   url: "https://wellfound.com/jobs/3076798-sr-fullstack-engineer-ror", postedDate: "2026-06-19"
  // founding-senior-fullstack-duler: Duler - rubyonremote says "This job has expired"; duler.com has no careers page
  //   url: "https://rubyonremote.com/jobs/74860-founding-senior-full-stack-engineer-at-duler", postedDate: "2026-08-07"
  // Closed and replaced in place with the same company's current Rails role:
  //   Authorium Software Engineer (b59ff28c) -> Software Engineer, remote US (6db2443f)
  //   Smartleaf Platform Team (b3cbac93) -> Feature Team (56df975e)
  //   Gusto Principal, Pay Group (GH 7027020) -> Staff SWE, Financial Platform (GH 8205075)
  //   Omada Senior SWE, Core Systems (GH 8051562) -> Senior SWE, Solutions Engineering (GH 8202172)
  //   Reveal Full Stack (Lever 73687bbb) -> re-posted as Lever b84a511d
  //   Order.co Senior SWE (Rippling 1dd35919) -> Senior SWE, Payments (Rippling 6f76c6d1)
  //   Quantic Senior SWE (LinkedIn 4463625394, expired) -> Staff SWE (LinkedIn 4465578261)
  //   Healthie (LinkedIn 4429604551, closed) -> same role on Greenhouse (4410573009)
  //   Persona Senior Product Security Engineer (a9d3cd2c): still open but names no Ruby or Rails ->
  //     Software Engineer, Security (06ce6de8, re-opened, Rails a plus)

};

// Helper functions
export function getJob(jobId) {
  return jobs[jobId];
}

// A listing's company identity. Most listings carry only a sponsorId or a
// startupId and take their name from that record, so `companyName` alone
// misses more than half the board. /jobs and the homepage networking count
// both resolve it here so the two can never disagree about how many companies
// are hiring. Returns null when a listing carries no reference at all, which
// callers filter out rather than counting as a phantom company.
export function jobCompanyId(job) {
  return job.sponsorId || job.startupId || job.companyId || null;
}

export function getAllJobs() {
  return Object.values(jobs);
}

export function getJobsBySponsor(sponsorId) {
  return Object.values(jobs).filter((job) => job.sponsorId === sponsorId);
}

export function getJobsByStartup(startupId) {
  return Object.values(jobs).filter((job) => job.startupId === startupId);
}

export function getSortedJobs() {
  // Sort by posted date (newest first)
  return Object.values(jobs).sort((a, b) => {
    return new Date(b.postedDate) - new Date(a.postedDate);
  });
}
