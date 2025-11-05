// Job postings data
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
  return Object.values(jobs).sort((a, b) => {
    // Sort by posted date, newest first
    return new Date(b.postedDate) - new Date(a.postedDate);
  });
}
