// Job postings data
import { getSponsor } from "./sponsors.js";

export const jobs = {
  "engineering-manager-beyondfinance": {
    id: "engineering-manager-beyondfinance",
    title: "Engineering Manager - Servicing",
    sponsorId: "beyondfinance",
    location: "Chicago, IL (Hybrid - 2 days/week in office)",
    type: "Full-time",
    description:
      "Lead a team of 3-5 engineers working in a Ruby on Rails stack to design and build all the back end support needed for core features of Beyond Finance's debt negotiation platform. Work with Ruby on Rails, PostgreSQL, and AWS to build internal-facing APIs, asynchronous backend processing, and third-party integrations. Lead technical planning and roadmap delivery, mentor engineers, and work with the leadership team to produce and deliver the engineering roadmap. 5+ years of experience building and deploying scalable applications in the cloud required, with hands-on expertise in Ruby on Rails. $175k-$195k base salary + annual bonus.",
    url: "https://job-boards.greenhouse.io/beyondfinance/jobs/7317522",
    postedDate: "2025-01-04",
  },
  "founding-engineer-finta": {
    id: "founding-engineer-finta",
    title: "Founding Engineer",
    sponsorId: "finta",
    location: "San Francisco or remote",
    type: "Full-time",
    description:
      "We're hiring for a Founding Engineer to join our growing team! We're on a mission to free ambitious builders to work on harder problems -- not accounting or taxes. That's where the magic happens -- we solve the difficult technical challenges behind the scenes so they get less distractions and can focus on what matters. If you're looking to join a high-calibre team that cares about craft, obsesses over users, and focuses long-term, all while still shipping fast. Open to San Francisco in-person or remote. $180-$300k+ and 5% equity.",
    url: "https://www.linkedin.com/jobs/view/4315280213",
    postedDate: "2024-11-20",
  },
  "senior-software-engineer-companycam": {
    id: "senior-software-engineer-companycam",
    title: "Senior Software Engineer (Ruby on Rails)",
    sponsorId: "companycam",
    location: "Remote",
    type: "Full-time",
    description:
      "Join CompanyCam's remote-first engineering team! We're building a simple-to-use photo documentation and productivity app for contractors. As a Senior Software Engineer, you'll work with Ruby on Rails, PostgreSQL, GraphQL, and REST to tackle everything from major initiatives to important bug fixes. We're looking for T-shaped engineers with 5+ years experience who can mentor, scale codebases, and drive technical excellence. Work alongside product managers, designers, and engineers to shape features and evolve our architecture. $175k-$200k + equity. Must be U.S.-based.",
    url: "https://companycam.com/job?gh_jid=7498739003",
    postedDate: "2024-11-20",
  },
  "senior-software-engineer-data-companycam": {
    id: "senior-software-engineer-data-companycam",
    title: "Senior Software Engineer (Rails) - Data",
    sponsorId: "companycam",
    location: "Remote",
    type: "Full-time",
    description:
      "Join CompanyCam's Platform Engineering team as a Senior Software Engineer - Data! Build and maintain scalable data infrastructure, focusing on backend systems integration and event pipeline architecture. Design event-driven pipelines from backend systems to Snowflake, own event pipelines through Snowplow ingestion, and optimize data workflows. Work with Rails, Snowflake, dbt, and modern data stack tools. Partner with analytics engineers and product teams to establish event tracking standards. 5+ years backend experience with Rails, 3+ years with cloud data warehouses required. $170k-$200k + equity. Must be U.S.-based.",
    url: "https://companycam.com/job?gh_jid=7500627003",
    postedDate: "2024-11-20",
  },
  "senior-software-engineer-agentic-companycam": {
    id: "senior-software-engineer-agentic-companycam",
    title: "Senior Software Engineer, Agentic Systems",
    sponsorId: "companycam",
    location: "Remote",
    type: "Full-time",
    description:
      "Join CompanyCam's remote-first engineering team to build cutting-edge AI-powered features! As a Senior Software Engineer focused on Agentic Systems, you'll lead development of product features powered by LLMs and agentic systems, integrating intelligent automation into user workflows. Architect and scale AI-driven systems using prompt engineering, RAG, and workflow orchestration with Ruby on Rails, React, React Native, and PostgreSQL. Develop and automate evals to measure reasoning quality. 5+ years software engineering experience, 1-3 years with LLMs/AI agents required. $165k-$215k + equity. Must be U.S.-based.",
    url: "https://companycam.com/job?gh_jid=7505187003",
    postedDate: "2024-11-20",
  },
  "software-engineer-ii-enterprise-omada": {
    id: "software-engineer-ii-enterprise-omada",
    title: "Software Engineer II (Enterprise)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health empowers individuals to achieve health goals through digital care and sustainable behavioral change. This Software Engineer II (Enterprise) will play a key role in enhancing our platform for managing chronic conditions. You'll implement tools to improve operations, influence business outcomes, and ensure high-quality enterprise applications. Must have 3-5+ YOE with Ruby/Ruby on Rails, Python, and databases like PostgreSQL. Familiarity with AI tools and AWS cloud infrastructure is beneficial. $120-180K base range based on state and experience + bonus + equity. Must be US-based.",
    url: "https://grnh.se/czywk5ol1us",
    postedDate: "2025-01-13",
  },
  "software-engineer-ii-member-omada": {
    id: "software-engineer-ii-member-omada",
    title: "Software Engineer II (Member Engineering)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health empowers individuals to achieve health goals through digital care and sustainable behavioral change. This Software Engineer II (Member Engineering) will collaborate with product and engineering partners to develop the backends for mobile applications that enhance member experiences and web applications that empower our providers. Must have 3-5+ YOE with Ruby/Ruby on Rails, React or Vue, and databases like PostgreSQL. Familiarity with AI tools and AWS cloud infrastructure is beneficial. $120-180K base range based on state and experience + bonus + equity. Must be US-based.",
    url: "https://grnh.se/v7xgwvjf1us",
    postedDate: "2025-01-13",
  },
  "staff-software-engineer-omada": {
    id: "staff-software-engineer-omada",
    title: "Staff Software Engineer (Member Engineering)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health empowers individuals to achieve health goals through digital care and sustainable behavioral change. This Staff Software Engineer (Member Engineering) will oversee everything from conception to deployment, including architecture, design, and development. You will resolve complex issues with minimal guidance, lead large projects, anticipate infrastructure needs, and champion new technologies while writing clean and tested code and mentoring others. Must have 10+ YOE with Ruby/Ruby on Rails. $176-253K base range based on state and experience + bonus + equity. Must be US-based.",
    url: "https://grnh.se/3ko3ialb1us",
    postedDate: "2025-01-13",
  },
  "senior-software-engineer-enterprise-omada": {
    id: "senior-software-engineer-enterprise-omada",
    title: "Senior Software Engineer (Enterprise)",
    sponsorId: "omada",
    location: "Remote (US Only)",
    type: "Full-time",
    description:
      "Omada Health empowers individuals to achieve health goals through digital care and sustainable behavioral change. This Senior Software Engineer (Enterprise) will develop and integrate both custom and third-party tools to enhance contracting, eligibility, and billing processes, directly impacting business outcomes. You will act as an informal team leader by identifying improvement opportunities, mentoring colleagues, and clarifying ambiguities. Must have 7+ YOE with Ruby/Ruby on Rails and Python. $156-224K base range based on state and experience + bonus + equity. Must be US-based.",
    url: "https://grnh.se/fsa6l5j61us",
    postedDate: "2025-01-13",
  },
  "engineering-manager-thatch": {
    id: "engineering-manager-thatch",
    title: "Engineering Manager",
    sponsorId: "thatch",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "The Product Engineering team builds the core experiences that make it easy for employers to give — and employees to get — great healthcare. You'll enable employers to quickly and efficiently manage their employee benefits, build tools that help members choose the right plans for their families, and help our external partners integrate Thatch into their service offerings.\n\nYou'll lead a group of talented engineers and collaborate with designers, PMs, and cross-functional partners to craft polished, thoughtful end-to-end experiences.",
    url: "https://thatch.com/jobs/engineering-manager-4973468008",
    postedDate: "2025-01-13",
  },
  "software-engineer-foundations-thatch": {
    id: "software-engineer-foundations-thatch",
    title: "Software Engineer: Foundations",
    sponsorId: "thatch",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "The Foundations team is building the abstractions and automations that allow for every Thatch member to pay for insurance plans and expenses that fit their specific healthcare needs, while creating a seamless experience for employers to manage their benefits program at scale.\n\nOur focus is architecting robust data models, integrating with carriers and financial partners, and optimizing automations to manage millions of dollars of transactions. As an engineer on the foundations team, you'll help design, implement, and maintain these systems.",
    url: "https://thatch.com/jobs/software-engineer-foundations-4615090008",
    postedDate: "2025-01-13",
  },
  "software-engineer-product-thatch": {
    id: "software-engineer-product-thatch",
    title: "Software Engineer: Product",
    sponsorId: "thatch",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "As a Software Engineer on the Product Experience team at Thatch, you'll build the core experiences that make it easy for employers to give — and employees to get — great healthcare. You'll enable employers to quickly and efficiently manage their employee benefits, build tools that help members choose the right plans for their families, and help our external partners integrate Thatch into their service offerings.\n\nYou'll collaborate with talented engineers, designers, and cross-functional partners to craft polished, thoughtful end-to-end experiences.",
    url: "https://thatch.com/jobs/software-engineer-product-4614620008",
    postedDate: "2025-01-13",
  },
  "senior-software-engineer-chime": {
    id: "senior-software-engineer-chime",
    title: "Senior Software Engineer, Application and Language Frameworks",
    sponsorId: "chime",
    location: "Remote",
    type: "Full-time",
    description:
      "Chime is looking for a senior engineer to build and evolve our core messaging and low-latency data-sharing platforms – the backbone of information exchange across Chime services. The Application and Language Frameworks team also owns key systems that shape the developer experience and engineering consistency, including caching, job processing, unified tooling, and language and engineering excellence.",
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
      "StackBlitz is hiring a Senior Software Engineer (Ruby on Rails) to help build bolt.new, the AI-powered full-stack web development agent. You'll work on the Rails backend that powers bolt.new's cloud infrastructure, enabling developers to build, run, and deploy full-stack applications directly in the browser. Join a team that's revolutionizing how developers interact with AI to build web applications. Strong Ruby on Rails experience required, along with expertise in building scalable backend systems.",
    url: "https://job-boards.greenhouse.io/stackblitz/jobs/4006004009?gh_src=fk3cln2c9us",
    postedDate: "2025-01-13",
  },
  "staff-software-engineer-gusto": {
    id: "staff-software-engineer-gusto",
    title: "Staff Software Engineer",
    sponsorId: "gusto",
    location:
      "San Francisco, CA; Denver, CO;",
    type: "Full-time",
    description:
      "Architect, build, and test Gusto's product suite that spans across Payroll, Benefits, HR, Time, Tax Credits, and more. Mentor other engineers to help solve some of the hardest technical problems out there in very complex domains and at a large scale. Help scale one of the largest Ruby/Rails and Javascript/React applications in the world. Collaborate with Product Management and Design teams to understand customer pain points, come up with solutions, and then prototype, iterate, and launch daily. Build a product that our customers genuinely love.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/5034679",
    postedDate: "2025-01-16",
  },
  "principal-software-engineer-gusto": {
    id: "principal-software-engineer-gusto",
    title: "Principal Software Engineer",
    sponsorId: "gusto",
    location: "San Francisco, Denver, New York City, Remote",
    type: "Full-time",
    description:
      "Gusto is seeking a Principal Software Engineer to lead the Contractors area of its flagship Payroll product, a high-impact role focused on architecting, building, and scaling backend systems that empower businesses to onboard and pay contractors globally. The position involves hands-on technical leadership, guiding projects across multiple teams, mentoring engineers, and driving key product initiatives spanning payroll, compliance, and real-time systems, especially within large-scale Ruby on Rails and TypeScript/React codebases. Ideal candidates have over 15 years of development experience, proven leadership delivering complex cross-functional projects, expertise in resilient backend system design, and a passion for leveraging emerging AI tools and frameworks within a collaborative, high-growth tech environment.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/6447954?gh_src=ih272kl21us",
    postedDate: "2025-01-16",
  },

  "senior-staff-software-engineer-gusto": {
    id: "senior-staff-software-engineer-gusto",
    title: "Senior Staff Software Engineer",
    sponsorId: "gusto",
    location:
      "San Francisco, Los Angeles, Seattle, Denver, Toronto, New York City, Remote",
    type: "Full-time",
    description:
      "Gusto is looking for a Sr. Staff Software Engineer for its Pay Group Engineering team, focused on designing, building, and scaling core payroll platform capabilities that impact millions of users and help grow the small business economy. This senior role centers on end-to-end project leadership, architecting robust distributed systems, driving technical strategy, mentoring across teams, and embedding AI tools in daily development workflows, within one of the largest Ruby/Rails and TypeScript/React environments. Candidates should have at least 12 years of experience, a track record of engineering leadership and system optimization, and a passion for simplifying complex, regulated software products like payroll, taxes, and compliance.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/5933602?gh_src=ih272kl21us",
    postedDate: "2025-01-16",
  },


  /*
  "principal-software-engineer-growth-gusto": {
    id: "principal-software-engineer-growth-gusto",
    title: "Principal Software Engineer, Growth",
    sponsorId: "gusto",
    location: "San Francisco, Seattle, Denver, New York City",
    type: "Full-time",
    description:
      "Operate at the intersection of Growth systems, AI capabilities, and platform evolution to help unlock Gusto's next phase of sustainable revenue growth. Accelerate Gusto's revenue growth by providing 1.) an acquisition platform for driving visitors and leads, 2.) an onboarding platform for converting leads to customers, and 3.) upsell systems for expansion efforts. Work in an exciting phase of rebuilding our Revenue Systems stack, which will be key in unlocking Gusto's next phase of growth.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/6447954?gh_src=ih272kl21us",
    postedDate: "2025-01-16",
  },*/
  /*
  "principal-software-engineer-pay-group-gusto": {
    id: "principal-software-engineer-pay-group-gusto",
    title: "Principal Software Engineer - Pay Group",
    sponsorId: "gusto",
    location:
      "Remote, San Francisco, Seattle, Los Angeles, Toronto, New York, Denver",
    type: "Full-time",
    description:
      "Function as a Technical Lead across multiple teams in Pay Group Engineering, helping us keep engineers unblocked. Design, build, and test the foundation that supports compliant payroll for millions of people. Help scale one of the largest Ruby/Rails and TypeScript/React applications in the world. Collaborate on complex and ambiguous problems with partnerships from Engineering, Product Management, Design, Data Science, Compliance, Operations, and other cross-functional teams. Mentor and grow fellow engineers working to create holistic and scalable solutions.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7027020",
    postedDate: "2025-01-16",
  },*/
  /*
  "staff-software-engineer-san-francisco-gusto": {
    id: "staff-software-engineer-san-francisco-gusto",
    title: "Staff Software Engineer",
    sponsorId: "gusto",
    location: "San Francisco",
    type: "Full-time",
    description:
      "Join seasoned engineers working on customer-facing products, developing features and iterating across our platform. As a Gusto Software Engineer at this level, you'll oversee projects end-to-end by influencing initial feature specs, building backend APIs, writing frontend code, and overseeing ongoing improvements for deployed features. If you're interested in building elegant software with far-reaching effects in our modern economy, join us!",
    url: "https://job-boards.greenhouse.io/gusto/jobs/5034679",
    postedDate: "2025-01-16",
  }
  "staff-applied-ai-scientist-gusto": {
    id: "staff-applied-ai-scientist-gusto",
    title: "Staff Applied AI Scientist",
    sponsorId: "gusto",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for at least 6+ years of software engineering experience (Python, Ruby or Java), 8+ years of ML experience, and 3+ years designing and shipping Gen AI models. Proven ability to design and prototype AI solutions quickly. Experience working on AI agent systems to automate end to end workflows. Experience building, deploying and maintaining LLM-based applications in production.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7307124",
    postedDate: "2025-01-16",
  },
  "staff-applied-ai-engineer-gusto": {
    id: "staff-applied-ai-engineer-gusto",
    title: "Staff Applied AI Engineer",
    sponsorId: "gusto",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for at least 8+ years of software engineering experience (Python, Ruby, or Java), with 5+ years focused on building and deploying ML or GenAI systems. Ability to build and scale complex AI systems from prototype to production. Experience building and maintaining robust AI agent systems and orchestration in a production setting. Deep experience with the full lifecycle of LLM applications: building, deploying, monitoring, and maintaining them in a production cloud environment. Strong knowledge of MLOps principles, CI/CD for models, containerization, and vector databases.",
    url: "https://job-boards.greenhouse.io/gusto/jobs/7307128",
    postedDate: "2025-01-16",
    },*/
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

export function getSortedJobs() {
  // Define tier priority (higher number = higher priority)
  const tierPriority = {
    "Pickaxe ⛏️": 5,
    Ruby: 4,
    "Post Production": 4, // Same price as Ruby
    Reception: 4, // Premium tier, same level as Ruby
    Emerald: 3,
    Travel: 1,
  };

  return Object.values(jobs).sort((a, b) => {
    // Get sponsor tiers
    const sponsorA = getSponsor(a.sponsorId);
    const sponsorB = getSponsor(b.sponsorId);

    const tierA = sponsorA?.tier || "";
    const tierB = sponsorB?.tier || "";

    const priorityA = tierPriority[tierA] || 0;
    const priorityB = tierPriority[tierB] || 0;

    // First sort by tier priority (higher tier first)
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    // If same tier, sort by posted date (newest first)
    return new Date(b.postedDate) - new Date(a.postedDate);
  });
}
