// Job postings data
import { getSponsor } from "./sponsors.js";
import { getStartup } from "./startups.js";

export const jobs = {
  "founding-senior-fullstack-duler": {
    id: "founding-senior-fullstack-duler",
    title: "Founding Senior Full Stack Engineer",
    companyId: "duler",
    companyName: "Duler",
    companyLogo: "/company_duler.svg",
    featured: true,
    location: "Raleigh, NC or Remote (US / Canada / Americas)",
    type: "Full-time",
    salary: "$150K - $180K + 1-2% equity",
    description:
      "Duler builds a workforce-management platform for hospitality, giving hotel teams intelligent scheduling and staffing software. Founded by the founder of Lodgistics (acquired 2024), currently in pilot with 14 hotel clients. This is the founding senior engineering hire: own the technical stack end to end, ship features with design partners, stabilize the platform, set engineering standards, and hire and mentor the early team. Backend is Ruby 3 and Rails 8 (PostgreSQL, Redis, Solid Queue, Devise, Action Policy, RSpec, Kamal, Docker). Frontend is React 19 with strict TypeScript, Vite, Tailwind, shadcn/Radix, Zod, and Nanostores, using OpenAPI-first client generation. Eastern timezone: onsite in Raleigh NC, hybrid, or remote across the US, Canada, and the Americas.",
    chips: ["Fullstack", "React", "TypeScript", "Founding role"],
    url: "https://rubyonremote.com/jobs/74860-founding-senior-full-stack-engineer-at-duler",
    postedDate: "2026-08-07",
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
  "fullstack-engineer-reset": {
    id: "fullstack-engineer-reset",
    title: "Full Stack Engineer",
    startupId: "reset",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $180K + equity",
    description:
      "Reset is a public benefit corp building earned-wage access (EWA) for everyday Americans — fee-free access to pay you've already earned, before payday. Unlike consumer EWA apps that go direct-to-consumer, Reset embeds directly into the credit unions and community banks people already trust, pairing daily income access with automated cashflow budgeting inside the partner's banking app. Mission: better timing of income to fundamentally change how paycheck-to-paycheck households manage money. $7M+ raised; founders ex-Visa, Salesforce, Upstart; HQ Palo Alto. Work closely with the CTO on real-time card-transaction decisioning (sub-second authorization, dynamic spend limits based on income and cash flow) and integrations with banking + payments partners. Stack: Ruby on Rails + PostgreSQL backend, React frontend, Heroku. Strong full-stack and API design experience required; fintech background a bonus. AI as a force multiplier expected.",
    chips: ["Fullstack", "Payments", "React", "Public benefit"],
    url: "https://jobs.ashbyhq.com/Reset/b40547a5-3b95-4646-8786-147cf83b4181?utm_source=rb8JwX8KGV",
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
    url: "https://www.ycombinator.com/companies/finta/jobs/vg5fXEw-founding-engineer-ruby",
    postedDate: "2026-04-27",
  },
  "senior-software-engineer-assurance-omada": {
    id: "senior-software-engineer-assurance-omada",
    title: "Senior Software Engineer, Assurance",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    salary: "$179K - $224K",
    description:
      "Omada Health is hiring a Senior Software Engineer for its Assurance / agentic systems team, powering AI Transformation across Engineering, Product, and Design. Sitting inside Architecture & Infrastructure, the team defines the patterns, tools, and infrastructure that let every engineer, PM, and designer use AI to build, test, and operate software safely, orchestrating agentic software development with quality built in by design. Work at the intersection of infrastructure and application development on Omada's Ruby/Rails stack (PostgreSQL, Kafka). $179.4-224.3K base in CA/NY/WA ($171.6-214.5K in CO) + bonus + equity. US-based.",
    chips: ["AI/ML", "Platform", "Kafka", "AI-native"],
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7997294",
    postedDate: "2026-06-18",
  },
  "senior-software-engineer-core-systems-omada": {
    id: "senior-software-engineer-core-systems-omada",
    title: "Senior Software Engineer, Core Systems & Integrations",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    salary: "$179K - $224K",
    description:
      "Omada Health is hiring a Senior Software Engineer on Core Systems & Integrations to build and scale the platform capabilities that integrate and validate critical health data, delivering real-time, clinically meaningful insights for care teams and members. Own projects end-to-end from technical design through deployment, working at the intersection of data integrations, backend systems, and healthcare workflows. 7+ years with a strong backend focus (Ruby on Rails or Python), a relational database (PostgreSQL/MySQL), and experience operating distributed, event-driven systems with high reliability. Stack: AWS, Ruby, Rails, Postgres, GraphQL, Docker, Kubernetes. $179-224K base in CA/NY/WA + bonus + equity. US-based.",
    chips: ["Backend", "Data", "PostgreSQL", "GraphQL", "Polyglot"],
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/8051562",
    postedDate: "2026-07-26",
  },
  "senior-software-engineer-member-omada": {
    id: "senior-software-engineer-member-omada",
    title: "Senior Software Engineer (Member Engineering)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    salary: "$179K - $224K",
    description:
      "Omada Health is hiring a Senior Software Engineer for the Member Engineering team to build the backends powering mobile applications for members and web applications for providers delivering digital healthcare. Spend 80-90% of time hands-on coding, mentor junior engineers, and propose AI solutions to complex problems. 7+ years experience with Ruby or Python, relational databases (PostgreSQL/MySQL), scalable APIs, and CI/CD pipelines. $172-224K base depending on state + bonus + equity. US-based.",
    chips: ["Backend", "PostgreSQL", "Polyglot", "Mentorship"],
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7822840",
    postedDate: "2026-05-10",
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
  "software-engineer-product-engagement-thatch": {
    id: "software-engineer-product-engagement-thatch",
    title: "Software Engineer: Full Stack, Product Engagement",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco",
    type: "Full-time",
    salary: "$170K - $200K",
    description:
      "Thatch is hiring a Full Stack Engineer on the Product Engagement team to enhance how members and employers experience the platform — onboarding, activation, and enrollment flows. Build user-facing features and backend systems while using data and instrumentation to drive engagement. Work across Ruby on Rails, React, and TailwindCSS, collaborating with product and design to ship impactful changes. $170k-$200k.",
    chips: ["Product Eng", "Fullstack", "React"],
    url: "https://thatch.com/jobs/software-engineer-full-stack-product-engagement-5171664008",
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
  "principal-software-engineer-pay-group-gusto": {
    id: "principal-software-engineer-pay-group-gusto",
    title: "Principal Software Engineer - Pay Group Engineering",
    sponsorId: "gusto",
    location: "Denver, San Francisco, New York City",
    type: "Full-time",
    salary: "$251K - $295K",
    description:
      "Gusto is hiring a Principal Software Engineer on Pay Group Engineering to function as a Technical Lead across multiple teams, helping keep engineers unblocked and shipping high-quality work. Design, build, and test the foundation that supports compliant payroll for millions of people. Help scale one of the largest Ruby/Rails and TypeScript/React applications in the world. Mentor fellow engineers and drive holistic, scalable solutions. 15+ years of experience, expertise in resilient backend system design. $215k-$295k depending on location.",
    chips: ["Payments", "Backend", "Mentorship"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7027020",
    postedDate: "2026-04-27",
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
  "senior-product-security-engineer-persona": {
    id: "senior-product-security-engineer-persona",
    title: "Senior Product Security Engineer",
    sponsorId: "persona",
    location: "San Francisco",
    type: "Full-time",
    salary: "$200K - $280K + equity",
    description:
      "Persona is hiring a Senior Product Security Engineer embedded in a generalist security team. Drive the full vulnerability lifecycle, design autonomous systems and AI tooling that scale security across every team and product, partner with product engineers to shape how new features get built securely, and run the bug bounty program. 6+ years of software engineering experience, 3+ years in product security. $200K-$280K + equity.",
    chips: ["Security", "Backend", "AI-native"],
    url: "https://jobs.ashbyhq.com/persona/a9d3cd2c-d4a4-4e1b-825f-a9a45b775f69",
    postedDate: "2026-04-27",
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
  "senior-fullstack-app-journey-chime": {
    id: "senior-fullstack-app-journey-chime",
    title: "Senior Full-Stack Engineer, App Journey (GraphQL)",
    sponsorId: "chime",
    location: "New York, NY / San Francisco, CA",
    type: "Full-time",
    salary: "$187K - $259K + bonus, equity",
    description:
      "Chime is hiring a Senior Full-Stack Engineer on the App Journey team, owning the core app surfaces and navigation that members use every day. You'll build the React Native frontend plus backend services and GraphQL APIs in Ruby on Rails. Chime is the largest US consumer fintech built to help everyday Americans get ahead, with banking, credit-building, and payments products serving millions.",
    chips: ["Fullstack", "React Native", "GraphQL"],
    url: "https://careers.chime.com/jobs/8485955002/senior-full-stack-engineer-app-journey-graphql/",
    postedDate: "2026-04-07",
  },
  "senior-fullstack-unsecured-cards-chime": {
    id: "senior-fullstack-unsecured-cards-chime",
    title: "Senior Full-Stack Software Engineer, Unsecured Cards",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$164K - $227K + bonus, equity",
    description:
      "Chime is hiring a Senior Full-Stack Engineer on the Cards team to build and scale new card products across the stack, shipping member-facing web and mobile experiences plus the Ruby on Rails backend services that power them at millions-of-member scale. You'll lead multi-engineer efforts, own features end to end, and partner closely with product, design, risk, credit, and compliance. Chime is the largest US consumer fintech, built to help everyday Americans get ahead.",
    chips: ["Fullstack", "Payments", "High compliance"],
    url: "https://careers.chime.com/jobs/8587249002/senior-full-stack-software-engineer-unsecured-cards/",
    postedDate: "2026-08-02",
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
  "software-engineer-deposits-insights-chime": {
    id: "software-engineer-deposits-insights-chime",
    title: "Software Engineer, Deposits & Insights",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K + bonus, equity",
    description:
      "Chime is hiring a Software Engineer on the Deposits & Insights team for backend engineering on the products that help members manage and grow their money. Requires Ruby on Rails or comparable frameworks plus transactional databases and caching. Chime is the largest US consumer fintech, built to help everyday Americans get ahead.",
    chips: ["Backend", "Payments"],
    url: "https://careers.chime.com/jobs/8523547002/software-engineer-deposits-insights/",
    postedDate: "2026-05-04",
  },
  "staff-software-engineer-developer-productivity-gusto": {
    id: "staff-software-engineer-developer-productivity-gusto",
    title: "Staff Software Engineer, Developer Productivity Async",
    sponsorId: "gusto",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$189K - $220K",
    description:
      "Gusto is hiring a Staff Software Engineer on Developer Productivity to build the tooling that keeps large engineering teams fast and effective. The role requires deep experience with Ruby and Rails. Gusto runs one of the largest Ruby on Rails and TypeScript/React applications in the world, powering payroll, benefits, and HR for over 400,000 businesses.",
    chips: ["Platform", "DevOps", "Backend"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7947658",
    postedDate: "2026-06-19",
  },
  "staff-software-engineer-growth-gusto": {
    id: "staff-software-engineer-growth-gusto",
    title: "Staff Software Engineer, Growth (Revenue Enablement)",
    sponsorId: "gusto",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$163K - $247K",
    description:
      "Gusto is hiring a Staff Software Engineer on the Growth team to build revenue-enablement systems in a collaborative, test-driven environment on Ruby on Rails. Gusto runs one of the largest Ruby on Rails and JavaScript/React applications in the world, powering payroll, benefits, and HR for over 400,000 businesses.",
    chips: ["Backend", "Fullstack"],
    url: "https://job-boards.greenhouse.io/gusto/jobs/7673999",
    postedDate: "2026-06-19",
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
      "Mon Ami is a San Francisco company building software for the aging and disability services sector — the platform that Area Agencies on Aging and public agencies rely on to manage caregivers and deliver senior services. As a Senior Rails Engineer you'll design, build, test, and maintain core product software, lead a defined area of the codebase, and mentor 1-3 junior engineers alongside product managers. The stack is Ruby on Rails, PostgreSQL, Hotwire/Turbo, Stimulus, ViewComponent, Bootstrap, and RSpec, with a heavy emphasis on disciplined testing and code quality. Apply via jobs@monami.io.",
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
  "senior-software-engineer-authorium": {
    id: "senior-software-engineer-authorium",
    title: "Senior Software Engineer",
    companyId: "authorium",
    companyLogo: "/company_authorium.png",
    companyName: "Authorium",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$170K - $230K + equity",
    description:
      "Authorium (formerly City Innovate) is a GovTech SaaS unifying procurement, grants, and budgeting workflows for state and local governments; clients include California's CDSS, CalPERS, and EDD. This senior role owns core architecture — versioning, approval workflows, and permission models — on a Ruby on Rails modular monolith built with Packwerk. Stack: Rails (Packwerk), Hotwire, PostgreSQL, React/Next.js, AWS. Hybrid in SF, Mon-Thu in office.",
    chips: ["Backend", "Hotwire", "Packwerk"],
    url: "https://jobs.ashbyhq.com/Authorium/dc83e0dd-9279-4381-9930-fca2c5f2b4be",
    postedDate: "2026-06-19",
  },
  "software-engineer-authorium": {
    id: "software-engineer-authorium",
    title: "Software Engineer",
    companyId: "authorium",
    companyLogo: "/company_authorium.png",
    companyName: "Authorium",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$148.75K - $201.25K + equity",
    description:
      "Authorium is a SF GovTech startup automating procurement, grants, and budgeting for state and local governments. This mid-level full-stack role builds features across a Ruby on Rails modular monolith that manages billions in public funds. Stack: Rails, Hotwire, PostgreSQL, Next.js. Hybrid in SF, Mon-Thu in office.",
    chips: ["Fullstack", "Hotwire", "Packwerk"],
    url: "https://jobs.ashbyhq.com/Authorium/b59ff28c-3e3c-4190-abaa-ab8572052740",
    postedDate: "2026-06-19",
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
    url: "https://www.ycombinator.com/companies/luthor/jobs/HKrdhp0-staff-senior-software-engineer-backend-fullstack",
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
    url: "https://www.github.careers/careers-home/jobs/5306?lang=en-us",
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
  "senior-fullstack-rails-piesystems": {
    id: "senior-fullstack-rails-piesystems",
    title: "Sr. Fullstack Engineer (Ruby on Rails)",
    companyId: "piesystems",
    companyName: "Pie Systems",
    companyLogo: "/company_piesystems.png",
    location: "San Francisco / Remote",
    type: "Full-time",
    salary: "$75K - $150K + equity",
    description:
      "Pie Systems (PieVAT) is a fintech digitizing VAT and tax-free-shopping refunds for travelers and merchants. You'll contribute to the Ruby on Rails application and support deployments and releases, alongside a modern JavaScript frontend. US HQ in San Francisco (also Copenhagen and Tokyo). (Series A, $15.5M, Nov 2025.)",
    chips: ["Fullstack", "Payments"],
    url: "https://wellfound.com/jobs/3076798-sr-fullstack-engineer-ror",
    postedDate: "2026-06-19",
  },
  "full-stack-engineer-upmetrics": {
    id: "full-stack-engineer-upmetrics",
    title: "Full Stack Software Engineer",
    companyId: "upmetrics",
    companyName: "UpMetrics",
    companyLogo: "/company_upmetrics.png",
    location: "Remote (US) / San Francisco, CA",
    type: "Full-time",
    salary: "$145K - $170K",
    description:
      "UpMetrics is an impact-reporting and analytics platform for nonprofits, foundations, and impact investors. You'll build and evolve the Ruby on Rails API (background jobs, data models) plus rich Vue.js + TypeScript front-end experiences on MySQL; 6+ years wanted. HQ at 300 Brannan St, San Francisco (SOMA).",
    chips: ["Fullstack", "Vue", "MySQL"],
    url: "https://jobs.lever.co/UpMetrics/62b78791-e881-44c7-bf21-c82bce483081",
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
    title: "Senior Software Engineer (Full-Stack)",
    companyId: "found",
    companyName: "Found",
    companyLogo: "/company_found.png",
    location: "San Francisco, CA / New York / Remote (US)",
    type: "Full-time",
    salary: "$210K - $278K",
    description:
      "Found is business banking for the self-employed (founded by ex-Square execs), with banking, tax automation, and expense tracking built on Ruby on Rails. This full-stack role requires production experience with Ruby on Rails or a comparable framework; the posting asks for 12+ years despite the 'Senior' title. Stack: Rails, React, Redux, TypeScript, MySQL, Spanner.",
    chips: ["Fullstack", "React", "Payments"],
    url: "https://jobs.ashbyhq.com/found/20795864-e7c3-4836-b5bc-26190f79bed3",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-engineer-arkestro": {
    id: "senior-fullstack-engineer-arkestro",
    title: "Senior Fullstack Engineer",
    companyId: "arkestro",
    companyName: "Arkestro",
    companyLogo: "/company_arkestro.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$160K - $180K",
    description:
      "Arkestro is building a predictive procurement platform that combines AI and behavioral science to help enterprises source and negotiate. This role builds and scales the product on a Ruby on Rails backend with a React/TypeScript frontend; 6+ years of Rails/Ruby. Stack: Rails, React/TypeScript, PostgreSQL, Redis, AWS, Kubernetes. San Francisco company, remote-US. (Series B.)",
    chips: ["Fullstack", "React", "PostgreSQL"],
    url: "https://job-boards.greenhouse.io/arkestroinc/jobs/5161290007",
    postedDate: "2026-06-20",
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
  "software-engineer-relevant-healthcare": {
    id: "software-engineer-relevant-healthcare",
    title: "Software Engineer",
    companyId: "relevanthealthcare",
    companyName: "Relevant Healthcare",
    companyLogo: "/company_relevanthealthcare.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$115K - $165K",
    description:
      "Relevant Healthcare is a bootstrapped, profitable ~25-person team building an analytics and population-health platform for community health centers. This role works across a Ruby on Rails backend with a TypeScript/React frontend (Apollo/GraphQL, d3, Go, GCP). Fully remote, US/Canada.",
    chips: ["Fullstack", "GraphQL", "Profitable"],
    url: "https://relevant.healthcare/jobs/software-engineer/",
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
  "software-engineer-platforms-integrations-salma": {
    id: "software-engineer-platforms-integrations-salma",
    title: "Software Engineer, Platforms & Integrations",
    companyId: "salmahealth",
    companyName: "Salma Health",
    companyLogo: "/company_salmahealth.png",
    location: "Hybrid (Bay Area preferred) / Remote (US)",
    type: "Full-time",
    salary: "$123K - $183K",
    description:
      "Salma Health is a brain-health company delivering interventional psychiatry (TMS plus care coordination), out of stealth in March 2026 with an $80M Series A led by Mubadala Capital and ARCH Venture Partners; clinics across California. This mid-level role (3-5 years) builds EHR, CRM, and billing integrations across Node.js, Python, and Ruby. San Mateo HQ.",
    chips: ["Platform", "Data", "Polyglot"],
    url: "https://jobs.ashbyhq.com/salma-health/91df7bfc-b8a0-4ac6-a5f4-e1fc3e896c9d",
    postedDate: "2026-07-01",
  },
  "senior-fullstack-engineer-opendate": {
    id: "senior-fullstack-engineer-opendate",
    title: "Senior Full-Stack Software Engineer",
    companyId: "opendate",
    companyName: "Opendate",
    companyLogo: "/company_opendate.png",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Opendate is the operating system for live events: booking, ticketing, and settlement for 200+ independent venues, doubled in the past year. $14M Series A led by High Alpha (January 2026). You'll work in a monolithic Ruby on Rails codebase with PostgreSQL, Redis, BigQuery, and React; the team says every engineer has AI teammates in their daily workflow. Remote US, with Indianapolis and Chicago offices to drop into.",
    chips: ["Fullstack", "React", "PostgreSQL", "AI-native"],
    url: "https://www.opendate.io/careers/senior-full-stack-software-engineer",
    postedDate: "2026-07-01",
  },
  "senior-fullstack-engineer-jukebox": {
    id: "senior-fullstack-engineer-jukebox",
    title: "Senior Fullstack Engineer",
    companyId: "jukeboxhealth",
    companyName: "Jukebox Health",
    companyLogo: "/company_jukeboxhealth.svg",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$180K - $210K + equity",
    description:
      "Jukebox Health makes homes safer for older adults, delivering home-safety modifications through Medicare/Medicaid plans; $30.5M raised (Series A: Valtruis, Home Depot Ventures, Equitage). This senior role builds the platform end to end on a Ruby on Rails backend with a React + TypeScript frontend. NYC HQ, remote across the US.",
    chips: ["Fullstack", "React", "TypeScript"],
    url: "https://job-boards.greenhouse.io/jukeboxhealth/jobs/4284648009",
    postedDate: "2026-07-01",
  },
  "senior-fullstack-engineer-checkmate": {
    id: "senior-fullstack-engineer-checkmate",
    title: "Senior Full Stack Engineer",
    companyId: "checkmate",
    companyName: "Checkmate",
    companyLogo: "/company_checkmate.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$180K",
    description:
      "Checkmate powers restaurant ordering: POS integrations, voice AI, and kiosks for enterprise restaurant brands. $21.5M raised, Series B led by Tiger Global. The stack is Ruby on Rails and React with Sidekiq, REST/GraphQL APIs, and PostgreSQL/MySQL, in what the team calls an AI-led SDLC where engineers are expected to leverage AI coding agents daily. 100% remote, US.",
    chips: ["Fullstack", "React", "Sidekiq", "AI-native"],
    url: "https://jobs.rubyonrails.org/jobs/34523-senior-full-stack-engineer-ruby-on-rails-reactjs-checkmate",
    postedDate: "2026-07-01",
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
  "senior-security-engineer-pairteam": {
    id: "senior-security-engineer-pairteam",
    title: "Senior Security Engineer",
    companyId: "pairteam",
    companyName: "Pair Team",
    companyLogo: "/company_pairteam.png",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$170K - $190K",
    description:
      "Pair Team is building whole-person care for the 115 million Americans on Medicaid, Medicare, and public assistance — a public benefit corporation and AI-enabled medical group, and the largest complex-care provider in California. This Senior Security Engineer secures a regulated HIPAA / SOC 2 / HITRUST / PCI environment and is hands-on in the codebase, shipping production Ruby (and/or TypeScript). Remote, US. Series B.",
    chips: ["Security", "High compliance", "Public benefit"],
    url: "https://job-boards.greenhouse.io/pairteam/jobs/8580695002",
    postedDate: "2026-07-14",
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
   * the company has not (yet) hosted an SF Ruby meetup or sponsored the
   * conference. Publish once they host or sponsor. (Held June 19, 2026.)
   *   Block (Cash App, Square) — Senior SWE, Product Platform
   *     https://block.xyz/careers/jobs/5231964008?gh_jid=5231964008
   *   Handshake — Senior SWE, Pay & Safety
   *     https://jobs.ashbyhq.com/Handshake/60057740-e884-4025-9d02-e332f8feb867
   *   Instacart — Senior SWE, Customers Back End
   *     https://www.ycombinator.com/companies/instacart/jobs/Vc34PRHze-senior-software-engineer-customers-back-end
   *   Flexport — Senior SWE, Autonomous Freight Systems
   *     https://boards.greenhouse.io/flexport/jobs/7975365?gh_jid=7975365
   *   Scribd — Software Engineer II, Signup & Activation [late-stage / mature]
   *     https://jobs.ashbyhq.com/ScribdInc/f9e8ac27-6323-40e4-bae8-3d7c6e6534c6
   *   Fleetio — Senior SWE, Integrations (remote-US) [Series C]
   *     https://job-boards.greenhouse.io/fleetio/jobs/5044498007
   *   Calendly — Senior Full Stack Engineer (remote-US) [named Series B, ~$3B unicorn / late-stage]
   *     https://job-boards.greenhouse.io/calendly/jobs/8464846002
   *   Tines — Staff SWE, Backend (remote-US) [Series C]
   *     https://job-boards.greenhouse.io/tines/jobs/6014045004
   *   Tines — Senior SWE, Government Cloud (remote-US, US citizenship) [Series C]
   *     https://job-boards.greenhouse.io/tines/jobs/6017339004
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
};

// Helper functions
export function getJob(jobId) {
  return jobs[jobId];
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
