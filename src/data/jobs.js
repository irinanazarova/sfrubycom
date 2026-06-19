// Job postings data
import { getSponsor } from "./sponsors.js";
import { getStartup } from "./startups.js";

export const jobs = {
  "software-engineer-backend-koah": {
    id: "software-engineer-backend-koah",
    title: "Software Engineer - Backend",
    startupId: "koah-labs",
    location: "San Francisco, CA (In-person)",
    type: "Full-time",
    salary: "$180K - $250K + equity",
    description:
      "Koah Labs is hiring a Backend Software Engineer to design data models, abstractions, and high-performance systems for the ad infrastructure powering AI-native products. Example projects: build scalable data models that align publisher and advertiser interests across multiple impressions per ad request, design abstractions for new ad formats and engagement tracking, build a low-latency frequency-capping system to prevent ad fatigue, and create schemas for high-volume ad bidding with exchanges. Stack: Ruby on Rails, React, TypeScript, PostgreSQL, ClickHouse, Redis, Kafka, AWS. Active users of palkan's layered design for Rails, Lefthook, Yabeda, and test-prof. Backed by Theory Ventures, Forerunner Ventures, and South Park Commons.",
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
    url: "https://jobs.ashbyhq.com/Reset/b40547a5-3b95-4646-8786-147cf83b4181?utm_source=rb8JwX8KGV",
    postedDate: "2026-04-28",
  },
  "software-engineer-ii-companycam": {
    id: "software-engineer-ii-companycam",
    title: "Software Engineer II (Integrations)",
    sponsorId: "companycam",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$116.5K - $123K + equity",
    description:
      "CompanyCam is hiring a Software Engineer II for the Integrations team: keep existing integrations healthy and growing, triage incoming support requests, manage endpoint updates and deprecations, and build enhancements on top of established integrations. Full-stack work (front end and back end) on a Rails + React codebase, for someone energized by a good debugging challenge. Remote-first engineering team spanning every US time zone. 1+ years of professional experience; Rails, React, PostgreSQL, and Datadog experience are pluses.",
    url: "https://job-boards.greenhouse.io/companycam/jobs/7728259003",
    postedDate: "2026-06-05",
  },
  "founding-engineer-finta": {
    id: "founding-engineer-finta",
    title: "Founding Engineer (Ruby)",
    sponsorId: "finta",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Finta is hiring a Founding Engineer to collaborate directly with the CEO and designer on complete product features end-to-end, from backend to frontend. Work with Ruby on Rails, Hotwire, Stimulus, Tailwind, and Redis to build banking and accounting integrations with rigorous data-quality and reliability standards. Finta automates bookkeeping, files taxes, and gives companies real-time financial metrics. 6+ years of Rails experience required. Regular use of AI coding tools (Cursor, Claude Code) expected. $150-$250k base + 5% equity.",
    url: "https://www.ycombinator.com/companies/finta/jobs/vg5fXEw-founding-engineer-ruby",
    postedDate: "2026-04-27",
  },
  "senior-software-engineer-assurance-omada": {
    id: "senior-software-engineer-assurance-omada",
    title: "Senior Software Engineer, Assurance",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Senior Software Engineer for its Assurance / agentic systems team, powering AI Transformation across Engineering, Product, and Design. Sitting inside Architecture & Infrastructure, the team defines the patterns, tools, and infrastructure that let every engineer, PM, and designer use AI to build, test, and operate software safely, orchestrating agentic software development with quality built in by design. Work at the intersection of infrastructure and application development on Omada's Ruby/Rails stack (PostgreSQL, Kafka). $179.4-224.3K base in CA/NY/WA ($171.6-214.5K in CO) + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7997294",
    postedDate: "2026-06-18",
  },
  "senior-software-engineer-omada": {
    id: "senior-software-engineer-omada",
    title: "Senior Software Engineer",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Senior Software Engineer to build and integrate tools that optimize contracting, eligibility, and billing processes. Be an informal team leader, mentor others, lead large projects, and leverage AI/ML tooling to deliver innovative solutions. 7+ years experience required, with Rails or Python, modern front-end frameworks (React/Vue), and PostgreSQL. Stack: AWS, Ruby, Rails, Postgres, Kafka. $179-224K base in CA/NY/WA ($172-215K in CO) + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7137954",
    postedDate: "2026-06-05",
  },
  "senior-software-engineer-member-omada": {
    id: "senior-software-engineer-member-omada",
    title: "Senior Software Engineer (Member Engineering)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Senior Software Engineer for the Member Engineering team to build the backends powering mobile applications for members and web applications for providers delivering digital healthcare. Spend 80-90% of time hands-on coding, mentor junior engineers, and propose AI solutions to complex problems. 7+ years experience with Ruby or Python, relational databases (PostgreSQL/MySQL), scalable APIs, and CI/CD pipelines. $172-224K base depending on state + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7822840",
    postedDate: "2026-05-10",
  },
  "software-engineer-backend-thatch": {
    id: "software-engineer-backend-thatch",
    title: "Software Engineer: Backend",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco",
    type: "Full-time",
    description:
      "Thatch is hiring a Backend Engineer to design and build core systems powering its health benefits platform — data models, fund flows, and integrations with payroll and insurance providers. Own production systems handling financial transactions and complex business logic. Strong skills in data modeling and system design required, ideally with healthcare or finance experience. $161k-$230k.",
    url: "https://thatch.com/jobs/software-engineer-backend-5113759008",
    postedDate: "2026-04-27",
  },
  "software-engineer-fullstack-thatch": {
    id: "software-engineer-fullstack-thatch",
    title: "Software Engineer: Full Stack",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco",
    type: "Full-time",
    description:
      "Thatch is hiring a Full Stack Software Engineer to own product areas spanning frontend and backend systems for its health benefits platform. Build across React, TailwindCSS, and Ruby on Rails to ship features that directly impact employer benefits management, employee onboarding, and payment systems. Strong product judgment, systems thinking, and a track record of shipping production applications required. $161k-$230k.",
    url: "https://thatch.com/jobs/software-engineer-full-stack-5113761008",
    postedDate: "2026-04-27",
  },
  "software-engineer-product-engagement-thatch": {
    id: "software-engineer-product-engagement-thatch",
    title: "Software Engineer: Full Stack, Product Engagement",
    sponsorId: "thatch",
    location: "Remote (US) / San Francisco",
    type: "Full-time",
    description:
      "Thatch is hiring a Full Stack Engineer on the Product Engagement team to enhance how members and employers experience the platform — onboarding, activation, and enrollment flows. Build user-facing features and backend systems while using data and instrumentation to drive engagement. Work across Ruby on Rails, React, and TailwindCSS, collaborating with product and design to ship impactful changes. $170k-$200k.",
    url: "https://thatch.com/jobs/software-engineer-full-stack-product-engagement-5171664008",
    postedDate: "2026-04-27",
  },
  "senior-ruby-fullstack-disputes-chime": {
    id: "senior-ruby-fullstack-disputes-chime",
    title: "Senior Ruby Full-Stack Software Engineer, Disputes Intake",
    sponsorId: "chime",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Chime is hiring a Senior Full-Stack Software Engineer for its Disputes Intake Engineering team, building the next generation of experiences that help members and the agents who support them recover funds. Work hands-on across the Ruby stack while shaping architecture and technical direction for mission-critical, member-facing and internal workflows, evolving disputes intake from static flows into intelligent, adaptive experiences that improve claim quality and reduce friction. $173k-$204k base + bonus + equity + benefits.",
    url: "https://careers.chime.com/jobs/8499443002/senior-ruby-full-stack-software-engineer-disputes-intake",
    postedDate: "2026-06-18",
  },
  "staff-software-engineer-payments-risk-gusto": {
    id: "staff-software-engineer-payments-risk-gusto",
    title: "Staff Software Engineer, Payments / Risk",
    sponsorId: "gusto",
    location: "San Francisco or New York (Hybrid)",
    type: "Full-time",
    description:
      "Gusto is hiring Staff Software Engineers for the teams behind its payments and risk platforms. Design, build, and test core money-movement and risk services — payment rails, ledgering, wallets, fraud, decisioning engines, KYC, AML, and compliance capabilities. Help scale one of the largest Ruby/Rails and JavaScript/React applications in the world, mentor engineers, and own multi-quarter projects in complex financial domains. 8+ years of experience. $197k-$247k base in SF/NY ($163k-$204k Denver and most remote locations) + bonus + equity.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7822587",
    postedDate: "2026-06-05",
  },
  "principal-software-engineer-pay-group-gusto": {
    id: "principal-software-engineer-pay-group-gusto",
    title: "Principal Software Engineer - Pay Group Engineering",
    sponsorId: "gusto",
    location: "Denver, San Francisco, New York City",
    type: "Full-time",
    description:
      "Gusto is hiring a Principal Software Engineer on Pay Group Engineering to function as a Technical Lead across multiple teams, helping keep engineers unblocked and shipping high-quality work. Design, build, and test the foundation that supports compliant payroll for millions of people. Help scale one of the largest Ruby/Rails and TypeScript/React applications in the world. Mentor fellow engineers and drive holistic, scalable solutions. 15+ years of experience, expertise in resilient backend system design. $215k-$295k depending on location.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7027020",
    postedDate: "2026-04-27",
  },
  "staff-software-engineer-core-platforms-gusto": {
    id: "staff-software-engineer-core-platforms-gusto",
    title: "Staff Software Engineer, Core Platforms",
    sponsorId: "gusto",
    location: "San Francisco, Denver, or New York City (Hybrid)",
    type: "Full-time",
    description:
      "Gusto is hiring a Staff Software Engineer to join the Core Platforms team — engineering the core business engine that 5+ product teams depend on. Help scale one of the largest Ruby/Rails + JavaScript/React applications in the world. Build reliable backend services, set the engineering standard for those around you, and partner with Product Engineering, Product Management, Data, and Design to translate customer pain points into solutions. AI is a fundamental part of how work gets done at Gusto. Hybrid in SF / Denver / NYC. $163k-$204k base depending on location + bonus + equity.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7760341",
    postedDate: "2026-05-15",
  },
  "software-engineer-security-persona": {
    id: "software-engineer-security-persona",
    title: "Software Engineer, Security",
    sponsorId: "persona",
    location: "San Francisco",
    type: "Full-time",
    description:
      "Persona builds identity verification infrastructure where security is core to everything they ship. The security team operates as a true generalist function: designing IAM systems for enterprise customers managing PII, owning supply chain security as AI tooling expands, and building secure internal tooling for engineers scaling AI usage. This is a software engineering role first — security curiosity matters; a dedicated security background doesn't. Proficiency in Ruby on Rails preferred. 3+ years of software engineering experience. $130K-$220K + equity.",
    url: "https://jobs.ashbyhq.com/persona/06ce6de8-8541-4dfd-9c09-3e467d5f91bb",
    postedDate: "2026-04-27",
  },
  "senior-product-security-engineer-persona": {
    id: "senior-product-security-engineer-persona",
    title: "Senior Product Security Engineer",
    sponsorId: "persona",
    location: "San Francisco",
    type: "Full-time",
    description:
      "Persona is hiring a Senior Product Security Engineer embedded in a generalist security team. Drive the full vulnerability lifecycle, design autonomous systems and AI tooling that scale security across every team and product, partner with product engineers to shape how new features get built securely, and run the bug bounty program. 6+ years of software engineering experience, 3+ years in product security. $200K-$280K + equity.",
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
    url: "https://www.ycombinator.com/companies/ubicloud/jobs/j4bntEJ-software-engineer",
    postedDate: "2026-06-19",
  },
  "software-engineer-surfaces-planetscale": {
    id: "software-engineer-surfaces-planetscale",
    title: "Software Engineer, Surfaces",
    sponsorId: "planetscale",
    location: "San Francisco Bay Area or Remote",
    type: "Full-time",
    salary: "$120K - $290K + equity",
    description:
      "PlanetScale (the database company behind Vitess) is hiring a Software Engineer on the Surfaces team, which builds and maintains the PlanetScale dashboard at app.planetscale.com, the public APIs, and billing systems. The backend runs on Ruby on Rails with Sidekiq; the dashboard is React + TypeScript and the CLI is Go, all on top of MySQL/Vitess and PostgreSQL. Work spans user-facing UIs, CLIs, and APIs for the database control plane. The posting calls for strong proficiency in Ruby on Rails for backend development.",
    url: "https://job-boards.greenhouse.io/planetscale/jobs/4091110009",
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
    url: "https://www.angellist.com/careers/9adf9ccb-61c1-4a75-bf00-03f39fea8f09",
    postedDate: "2026-06-19",
  },
  "software-engineer-nexhealth": {
    id: "software-engineer-nexhealth",
    title: "Software Engineer",
    startupId: "nexhealth",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$128.6K - $189.5K",
    description:
      "NexHealth is building the patient-experience and API platform for healthcare — no-permission EHR integrations, high-throughput data ingestion pipelines, and low-latency data serving. This is an early-career (0-2 years) Software Engineer role focused primarily on back-end development; per the posting, the team primarily uses Ruby on Rails. Experience with Ruby, Python, Go, or Java is a plus, along with relational databases. Bonus: AWS/GCP/Azure, Docker, Kubernetes, API/webhook design, and HL7/FHIR.",
    url: "https://www.nexhealth.com/careers/open-positions?gh_jid=6014570004",
    postedDate: "2026-06-17",
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
    url: "https://careers.chime.com/jobs/8485955002/senior-full-stack-engineer-app-journey-graphql/",
    postedDate: "2026-04-07",
  },
  "software-engineer-credit-risk-chime": {
    id: "software-engineer-credit-risk-chime",
    title: "Software Engineer, Credit Risk Platform",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K + bonus, equity",
    description:
      "Chime is hiring a Software Engineer on the Credit Risk Platform team to build backend services and internal tools powering the shared credit-risk platform behind Loans, MyPay, and SpotMe. 3+ years of experience with Ruby on Rails or comparable frameworks, plus relational databases and caching. Chime is the largest US consumer fintech, helping everyday Americans build credit and get ahead.",
    url: "https://careers.chime.com/jobs/8219793002/software-engineer-credit-risk-platform/",
    postedDate: "2026-04-06",
  },
  "software-engineer-instant-loans-chime": {
    id: "software-engineer-instant-loans-chime",
    title: "Software Engineer, Instant Loans",
    sponsorId: "chime",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$133K - $184K + bonus, equity",
    description:
      "Chime is hiring a Software Engineer for the Instant Loans product, doing backend engineering at scale. 3+ years of experience with Ruby on Rails or comparable frameworks. Chime is the largest US consumer fintech, with banking, credit-building, and lending products that help everyday Americans get ahead.",
    url: "https://careers.chime.com/jobs/8433840002/software-engineer-instant-loans/",
    postedDate: "2026-04-08",
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
    url: "https://careers.chime.com/jobs/8523547002/software-engineer-deposits-insights/",
    postedDate: "2026-05-04",
  },
  "senior-software-engineer-chicago-chime": {
    id: "senior-software-engineer-chicago-chime",
    title: "Senior Software Engineer",
    sponsorId: "chime",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$173K - $204K + bonus, equity",
    description:
      "Chime is hiring a Senior Software Engineer / technical lead for backend engineering at scale. 5+ years of experience with Ruby on Rails or comparable frameworks, transactional databases, and caching. Chime is the largest US consumer fintech, helping everyday Americans build credit and get ahead.",
    url: "https://careers.chime.com/jobs/8400999002/senior-software-engineer-chicago/",
    postedDate: "2026-02-04",
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
    url: "https://thatch.com/jobs/software-engineer-infrastructure-5161129008",
    postedDate: "2026-06-19",
  },
  "staff-software-engineer-1-stepful": {
    id: "staff-software-engineer-1-stepful",
    title: "Staff Software Engineer 1",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$188K - $248K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers — a learning-management system, AI-powered career services, and internal tooling. This staff-level full-stack role works across the backend and a React/TypeScript frontend on PostgreSQL. The posting lists Ruby on Rails among the accepted backend languages alongside Python and Node.js.",
    url: "https://jobs.ashbyhq.com/stepful/1bcc5add-aebd-46c8-8bcc-3bcf60dda70e",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-1-stepful": {
    id: "senior-software-engineer-1-stepful",
    title: "Senior Software Engineer 1",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$157K - $208K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers. This senior full-stack role works across the backend and a React/TypeScript frontend on PostgreSQL. The posting lists Ruby on Rails among the accepted backend languages alongside Python and Node.js.",
    url: "https://jobs.ashbyhq.com/stepful/0441f421-a1b2-4561-9284-50e0621db3ba",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-2-stepful": {
    id: "senior-software-engineer-2-stepful",
    title: "Senior Software Engineer 2",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$157K - $248K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers — building adaptive learning, career-services, and data-infrastructure features. This senior full-stack role spans the backend and a React/TypeScript frontend on PostgreSQL. The posting lists Ruby on Rails among the accepted backend languages alongside Python and Node.js.",
    url: "https://jobs.ashbyhq.com/stepful/227ebf1e-4d95-46cb-9b52-f7e6677db180",
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
    url: "https://jobs.ashbyhq.com/stepful/06376db3-9192-4ff4-bcbc-6635a878ed81",
    postedDate: "2026-06-19",
  },
  "senior-product-engineer-2-stepful": {
    id: "senior-product-engineer-2-stepful",
    title: "Senior Product Engineer 2",
    startupId: "stepful",
    location: "New York City (Hybrid; remote-eligible US)",
    type: "Full-time",
    salary: "$157K - $248K + equity",
    description:
      "Stepful (YC-backed) is building the platform that trains and places healthcare workers. This senior product engineering role (higher band than SPE 1) builds across the product. The posting lists Ruby on Rails among the accepted backend languages alongside Python and Node.js.",
    url: "https://jobs.ashbyhq.com/stepful/128da2c1-041e-41ab-a82a-5bb95e766f76",
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
    url: "https://jobs.ashbyhq.com/simple-ai/9a5f5694-e066-4087-9a13-b1a62d8d8025",
    postedDate: "2026-06-19",
  },
  "backend-engineer-aisquared": {
    id: "backend-engineer-aisquared",
    title: "Backend Engineer (SDE2)",
    startupId: "aisquared",
    location: "India",
    type: "Full-time",
    description:
      "AI Squared builds the open-source Multiwoven reverse-ETL / data-activation platform (an alternative to Hightouch and Census). This backend role (3+ years) designs and maintains scalable backend systems for a distributed team. Ruby on Rails is listed as a preferred qualification, and the Multiwoven backend is predominantly Ruby. India-based.",
    url: "https://job-boards.greenhouse.io/aisquared/jobs/4422754006",
    postedDate: "2026-06-19",
  },
  "senior-product-engineer-dublin-fin": {
    id: "senior-product-engineer-dublin-fin",
    title: "Senior Product Engineer",
    startupId: "fin",
    location: "Dublin, Ireland",
    type: "Full-time",
    description:
      "Fin is Intercom's AI customer-service agent. As a Senior Product Engineer you'll build scalable backend and frontend systems within a multidisciplinary product team, writing Ruby code that knits together the AWS, infrastructure, platform, and SaaS technologies forming the core of Fin's backend. Intercom is one of the best-known Ruby on Rails companies in the world.",
    url: "https://job-boards.greenhouse.io/intercom/jobs/6386428",
    postedDate: "2026-06-19",
  },
  "senior-product-engineer-london-fin": {
    id: "senior-product-engineer-london-fin",
    title: "Senior Product Engineer",
    startupId: "fin",
    location: "London, England",
    type: "Full-time",
    description:
      "Fin is Intercom's AI customer-service agent. As a Senior Product Engineer you'll build scalable backend and frontend systems, writing Ruby code that knits together the AWS, infrastructure, platform, and SaaS technologies that form the core of Fin's backend. Intercom is one of the best-known Ruby on Rails companies in the world. London-based.",
    url: "https://job-boards.greenhouse.io/intercom/jobs/5107681",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-dublin-fin": {
    id: "senior-software-engineer-dublin-fin",
    title: "Senior Software Engineer",
    startupId: "fin",
    location: "Dublin, Ireland",
    type: "Full-time",
    description:
      "Fin is Intercom's AI customer-service agent. As a Senior Software Engineer you'll build the backend and frontend systems behind the product, with Ruby development as a core responsibility; the posting notes prior experience with their exact stack isn't required. Intercom is one of the best-known Ruby on Rails companies in the world. Hybrid in Dublin.",
    url: "https://job-boards.greenhouse.io/intercom/jobs/5082494",
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
    url: "https://www.monami.io/jobs/senior-rails-engineer",
    postedDate: "2026-05-01",
  },
  "software-engineer-rails-levelpath": {
    id: "software-engineer-rails-levelpath",
    title: "Software Engineer, Ruby on Rails (Backend)",
    companyId: "levelpath",
    companyName: "Levelpath",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$165K - $240K + equity",
    description:
      "Levelpath is an AI-native, mobile-first enterprise procurement platform (Series B, ~$100M raised from Redpoint, Benchmark, and Battery; founded 2022 by the team behind Scout RFP). This backend role builds the customer-facing Ruby on Rails application that powers sourcing, contract management, and procurement workflows; 3+ years of Ruby on Rails required. Stack: Ruby on Rails, PostgreSQL/MySQL, GraphQL + REST, React/TypeScript, Docker.",
    url: "https://jobs.ashbyhq.com/levelpath/140eb34a-a723-4b29-9cda-b894c01c67f3",
    postedDate: "2026-06-19",
  },
  "software-engineer-rails-mudflap": {
    id: "software-engineer-rails-mudflap",
    title: "Software Engineer, Ruby on Rails",
    companyId: "mudflap",
    companyName: "Mudflap",
    location: "Remote (US, Pacific hours)",
    type: "Full-time",
    salary: "$150K - $250K",
    description:
      "Mudflap (Palo Alto) is a profitable fintech building fuel-payment products for the $800B trucking industry, helping truckers save on fuel and connecting fuel stops with new customers. You'll build and scale the Ruby on Rails payments and transactions platform end-to-end; the posting spans levels from 1+ to 8+ years. Stack: Ruby on Rails, PostgreSQL/AWS Aurora, Vue.js, REST APIs, AWS ECS, CircleCI.",
    url: "https://jobs.ashbyhq.com/mudflap/6d599ccc-4566-4cd3-9721-2273601acba6",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-authorium": {
    id: "senior-software-engineer-authorium",
    title: "Senior Software Engineer",
    companyId: "authorium",
    companyName: "Authorium",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$170K - $230K + equity",
    description:
      "Authorium (formerly City Innovate) is a GovTech SaaS unifying procurement, grants, and budgeting workflows for state and local governments; clients include California's CDSS, CalPERS, and EDD. This senior role owns core architecture — versioning, approval workflows, and permission models — on a Ruby on Rails modular monolith built with Packwerk. Stack: Rails (Packwerk), Hotwire, PostgreSQL, React/Next.js, AWS. Hybrid in SF, Mon-Thu in office.",
    url: "https://jobs.ashbyhq.com/Authorium/dc83e0dd-9279-4381-9930-fca2c5f2b4be",
    postedDate: "2026-06-19",
  },
  "software-engineer-authorium": {
    id: "software-engineer-authorium",
    title: "Software Engineer",
    companyId: "authorium",
    companyName: "Authorium",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$148.75K - $201.25K + equity",
    description:
      "Authorium is a SF GovTech startup automating procurement, grants, and budgeting for state and local governments. This mid-level full-stack role builds features across a Ruby on Rails modular monolith that manages billions in public funds. Stack: Rails, Hotwire, PostgreSQL, Next.js. Hybrid in SF, Mon-Thu in office.",
    url: "https://jobs.ashbyhq.com/Authorium/b59ff28c-3e3c-4190-abaa-ab8572052740",
    postedDate: "2026-06-19",
  },
  "senior-software-engineer-truelink": {
    id: "senior-software-engineer-truelink",
    title: "Senior Software Engineer",
    companyId: "truelink",
    companyName: "True Link Financial",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "True Link Financial is a profitable, mission-driven fintech (Forbes Fintech 50) building financial products for people with disabilities, older adults, and people in recovery. This hands-on senior role spends most of its time coding in the Rails/React stack, owning complex features end-to-end and mentoring, in a high-compliance (PCI/HIPAA/SOC) environment. SF and Kingston, NY offices; remote-first across the US.",
    url: "https://jobs.ashbyhq.com/truelinkfinancial/79a24a30-5f5a-4147-a5c2-c35e24f56802",
    postedDate: "2026-06-19",
  },
  "software-engineer-rails-luthor": {
    id: "software-engineer-rails-luthor",
    title: "Software Engineer (Ruby on Rails)",
    companyId: "luthor",
    companyName: "Luthor",
    location: "San Francisco, CA / Remote (US)",
    type: "Full-time",
    salary: "$120K - $180K + equity",
    description:
      "Luthor (YC F24) is an AI-powered marketing-compliance platform for regulated industries — fintechs, banks, and investment advisors — reviewing and enforcing policy on marketing content as it's created. As one of the first full-time engineering hires, you'll work directly with the founding team on the core Ruby on Rails platform; 3+ years of experience. Stack: Ruby on Rails, React, PostgreSQL, JavaScript.",
    url: "https://www.ycombinator.com/companies/luthor/jobs/HKrdhp0-staff-senior-software-engineer-backend-fullstack",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-rails-prevail": {
    id: "senior-fullstack-rails-prevail",
    title: "Senior Full Stack Developer (Ruby on Rails)",
    companyId: "prevail",
    companyName: "Prevail Legal",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $180K",
    description:
      "Prevail Legal is an SF legal-tech startup building the legal industry's Testimony Intelligence Platform — remote court reporting, AI-assisted transcription, and testimony management (SOC 2 Type 2, ISO 27001). This senior full-stack role builds end-to-end on a Ruby on Rails monolith with the Hotwire stack, reporting to the CTO; 3-5+ years of Rails. Stack: Ruby on Rails, Stimulus/Hotwire/Importmaps, PostgreSQL, AWS, Docker, WebRTC.",
    url: "https://job-boards.greenhouse.io/prevail/jobs/4553082008",
    postedDate: "2026-06-19",
  },
  "midlevel-fullstack-rails-prevail": {
    id: "midlevel-fullstack-rails-prevail",
    title: "Mid-Level Full Stack Developer (Ruby on Rails)",
    companyId: "prevail",
    companyName: "Prevail Legal",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$120K - $160K",
    description:
      "Prevail Legal is an SF legal-tech startup building a Testimony Intelligence Platform for the legal industry. This mid-level full-stack role builds web applications and new features on a Ruby on Rails monolith (Hotwire stack) in a fully remote setting; 4+ years of Rails.",
    url: "https://job-boards.greenhouse.io/prevail/jobs/4553411008",
    postedDate: "2026-06-19",
  },
  "senior-fullstack-instrumentl": {
    id: "senior-fullstack-instrumentl",
    title: "Senior Full Stack Software Engineer",
    companyId: "instrumentl",
    companyName: "Instrumentl",
    location: "Remote (US) / Oakland, CA",
    type: "Full-time",
    salary: "$160K - $190K",
    description:
      "Instrumentl is a profitable, YC-backed SaaS automating grant discovery and management for 1,500+ nonprofits. This full-stack generalist role builds and scales the product end-to-end on a Ruby on Rails stack; 7+ years of experience. Stack: Ruby on Rails, Python, JavaScript, PostgreSQL, Redis. Distributed team with an Oakland office.",
    url: "https://www.workatastartup.com/jobs/91151",
    postedDate: "2026-06-19",
  },
  "senior-staff-fullstack-versemedical": {
    id: "senior-staff-fullstack-versemedical",
    title: "Senior/Staff Full Stack Engineer",
    companyId: "versemedical",
    companyName: "Verse Medical",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$160K - $220K",
    description:
      "Verse Medical (YC S18) is a software-driven medical supplier bringing the $50B home-medical-supply ordering market online, replacing fax-based clinic workflows. As a founding member of a new downtown SF hub, you'll own features end-to-end across a Ruby/Rails + Python/Flask + React stack; 6+ years of experience. Stack: Ruby on Rails, Python/Flask, React/TypeScript, PostgreSQL, AWS, GraphQL.",
    url: "https://www.workatastartup.com/jobs/79906",
    postedDate: "2026-06-19",
  },

  /* ─────────────────────────────────────────────────────────────────
   * ARCHIVED — closed listings without active Ruby/Rails replacements
   * ─────────────────────────────────────────────────────────────────
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
