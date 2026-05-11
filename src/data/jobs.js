// Job postings data
import { getSponsor } from "./sponsors.js";
import { getStartup } from "./startups.js";

export const jobs = {
  "founding-fullstack-engineer-stealth-startup": {
  id: "founding-fullstack-engineer-stealth-startup",
  title: "Founding Senior Full Stack Engineer",
  startupId: "stealth_startup",
  location: "Raleigh, NC (Hybrid, ET required)",
  type: "Full-time",
  salary: "$150K - $180K + 1-2% equity",
  description:
    "Stealth-mode startup founded by the creator of Lodgistics (acquired 2024) is hiring a Founding Senior Full Stack Engineer to build a workforce management platform for the hospitality industry — software that powers staffing operations for hotels. Own product trajectory from MVP through pilot to production: ship with design partners, stabilize and scale the platform, then hire and lead the engineering team from month 3-9 onward. Partner directly with founders on roadmap and strategy, and engage with customers to understand real workflows. Stack: Ruby 3.x on Rails 8.x, PostgreSQL, Redis, Solid Queue, Devise, Action Policy, RSpec, Kamal, Docker on the backend; React 19, TypeScript (strict), react-hook-form + Zod, Nanostores, Vite, Tailwind, shadcn/Radix UI, Vitest, Playwright, MSW on the frontend. Requires 0→1 SaaS experience, direct hiring/mentoring of engineers, B2B SaaS background, strong API design with Rails/PostgreSQL, and complex React UI skills. Hospitality, workforce management, or OpenAPI-first design experience is a plus.",
  url: "https://www.linkedin.com/jobs/view/4412158233/",
  postedDate: "2026-05-11",
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
  "senior-software-engineer-beam-companycam": {
    id: "senior-software-engineer-beam-companycam",
    title: "Senior Software Engineer (Beam)",
    sponsorId: "companycam",
    location: "San Francisco, CA (In-person, Financial District)",
    type: "Full-time",
    salary: "$175K - $200K + equity",
    description:
      "Join the Beam team — recently acquired by CompanyCam, focused on the intersection of fintech and AI for the construction industry. Design and build APIs, AI-powered workflows, and frontend features across both Beam and CompanyCam codebases. Provide technical leadership, ship products quickly, and collaborate directly with customers on real construction-finance problems. Full-stack role spanning multiple programming languages; in-person in SF's Financial District.",
    url: "https://companycam.com/job?gh_jid=7696876003",
    postedDate: "2026-04-28",
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
  "staff-software-engineer-rails-companycam": {
    id: "staff-software-engineer-rails-companycam",
    title: "Staff Software Engineer (Ruby on Rails)",
    sponsorId: "companycam",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "CompanyCam is hiring a Staff Software Engineer to provide technical leadership across five core product teams while maintaining hands-on contributions to the Ruby on Rails systems that power their photo documentation platform for contractors. Provide architectural guidance and technical direction, mentor senior engineers, proactively mitigate technical risks, and help shape engineering practices as the company scales. Remote-first, US-based. $190k-$210k + equity.",
    url: "https://companycam.com/job?gh_jid=7692268003",
    postedDate: "2026-04-27",
  },
  "staff-software-engineer-omada": {
    id: "staff-software-engineer-omada",
    title: "Staff Software Engineer",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Staff Software Engineer to lead the modernization, optimization, and scalability of its B2B platform. Re-architect complex legacy systems, design high-performance batch and real-time data pipelines, and ensure core capabilities — file ingestion, marketing outreach, eligibility, and billing — are robust and ready for growth. 10+ years experience required, with strong Ruby/Rails, PostgreSQL, and distributed systems expertise. $193-253K base depending on state + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7611424",
    postedDate: "2026-04-27",
  },
  "senior-software-engineer-enterprise-omada": {
    id: "senior-software-engineer-enterprise-omada",
    title: "Senior Software Engineer (Enterprise)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Senior Software Engineer to build and integrate tools that optimize contracting, eligibility, and billing processes. Be an informal team leader, mentor others, lead large projects, and leverage AI/ML tooling to deliver innovative solutions. 7+ years experience required, with Rails or Python, modern front-end frameworks (React/Vue), and PostgreSQL. $172-224K base depending on state + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7685483",
    postedDate: "2026-04-27",
  },
  "senior-software-engineer-member-omada": {
    id: "senior-software-engineer-member-omada",
    title: "Senior Software Engineer (Member Engineering)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health is hiring a Senior Software Engineer for the Member Engineering team to build the backends powering mobile applications for members and web applications for providers delivering digital healthcare. Spend 80-90% of time hands-on coding, mentor junior engineers, and propose AI solutions to complex problems. 7+ years experience with Ruby or Python, relational databases (PostgreSQL/MySQL), scalable APIs, and CI/CD pipelines. $172-224K base depending on state + bonus + equity. US-based.",
    url: "https://job-boards.greenhouse.io/omadahealth/jobs/7711461",
    postedDate: "2026-04-27",
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
  "senior-software-engineer-chime": {
    id: "senior-software-engineer-chime",
    title: "Senior Software Engineer, Application and Language Frameworks",
    sponsorId: "chime",
    location: "Remote",
    type: "Full-time",
    description:
      "Chime is looking for a senior engineer to build and evolve our core messaging and low-latency data-sharing platforms – the backbone of information exchange across Chime services. The Application and Language Frameworks team also owns key systems that shape the developer experience and engineering consistency, including caching, job processing, unified tooling, and language and engineering excellence. $176k-$245k base.",
    url: "https://careers.chime.com/en/jobs/8141073002/senior-software-engineer-application-and-language-frameworks/",
    postedDate: "2025-01-13",
  },
  "senior-software-engineer-rails-boltnew": {
    id: "senior-software-engineer-rails-boltnew",
    title: "Senior Software Engineer (Ruby on Rails)",
    sponsorId: "bolt-new",
    location: "Remote",
    type: "Full-time",
    description:
      "StackBlitz is hiring a Senior Software Engineer (Ruby on Rails) to help build bolt.new, the AI-powered full-stack web development agent. Work on the Rails backend powering bolt.new's cloud infrastructure, focusing on scalability, reliability, and performance. Use PostgreSQL, AWS, and APIs to support millions of developers building software in the browser. 5+ years of Rails and database experience required; bonus points for Node.js, TypeScript, and AI/LLM familiarity.",
    url: "https://job-boards.greenhouse.io/stackblitz/jobs/4006004009?gh_src=fk3cln2c9us",
    postedDate: "2025-01-13",
  },
  "principal-software-engineer-gusto": {
    id: "principal-software-engineer-gusto",
    title: "Principal Software Engineer - Contractors Payroll",
    sponsorId: "gusto",
    location: "San Francisco, Denver, New York City, Remote",
    type: "Full-time",
    description:
      "Gusto is seeking a Principal Software Engineer to lead the Contractors area of its flagship Payroll product, a high-impact role focused on architecting, building, and scaling backend systems that empower businesses to onboard and pay contractors globally. The position involves hands-on technical leadership, guiding projects across multiple teams, mentoring engineers, and driving key product initiatives spanning payroll, compliance, and real-time systems, especially within large-scale Ruby on Rails and TypeScript/React codebases. Ideal candidates have over 15 years of development experience.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/6447954?gh_src=ih272kl21us",
    postedDate: "2025-01-16",
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
  "sr-staff-software-engineer-entity-management-gusto": {
    id: "sr-staff-software-engineer-entity-management-gusto",
    title: "Sr Staff Software Engineer, Entity Management",
    sponsorId: "gusto",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Gusto is hiring a Sr Staff Software Engineer to lead technical development of a new compliance product within the Entity Management team, helping small businesses navigate incorporation and ongoing legal requirements. Mentor engineers and execute the team's technical roadmap while collaborating across product, design, and marketing functions. 8+ years of software engineering experience required; Ruby on Rails, TypeScript, and React experience preferred. $225k-$275k + equity.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/6963453",
    postedDate: "2026-04-27",
  },
  "staff-software-engineer-whop": {
    id: "staff-software-engineer-whop",
    title: "Staff Software Engineer, Backend",
    sponsorId: "whop",
    location: "Bay Area, CA & Brooklyn, NY",
    type: "Full-time",
    description:
      "Build beautiful, fast, polished APIs across the Whop backend. Create primitive APIs used by internal and external developers. Create patterns, prompts, and internal tools to create leverage for other developers. Work closely with founders and designers to turn vision into clean architected systems. Come up with reusable architecture patterns. $300K+ cash + equity.",
    url: "https://careers.whop.com/?gh_jid=4250926007",
    postedDate: "2026-02-22",
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
