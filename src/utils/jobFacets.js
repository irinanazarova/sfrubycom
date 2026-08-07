// Job facets: derive structured filter dimensions from the hand-maintained
// job records in src/data/jobs.js. Most facets are parsed from existing
// freeform fields (location, title, salary). Industry and company stage can't
// be parsed reliably, so they live in COMPANY_META below, keyed by companyId
// (the sponsorId / startupId / inline companyId used on each job).

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Work arrangement: onsite | hybrid | remote. A job can offer several
// (e.g. "Remote (US) / San Francisco" is remote + onsite).
export function parseWorkType(location = "") {
  const loc = location.toLowerCase();
  const hasCity =
    /(san francisco|bay area|oakland|east bay|new york|nyc|denver|chicago|seattle)/.test(
      loc,
    );
  const types = new Set();

  if (loc.includes("hybrid")) types.add("hybrid");
  if (loc.includes("in-person") || loc.includes("on-site") || loc.includes("onsite"))
    types.add("onsite");
  if (loc.includes("remote")) types.add("remote");

  // A named city with no explicit qualifier implies a full in-office role.
  if (hasCity && types.size === 0) types.add("onsite");
  // A city named alongside a remote option means the office is available too.
  if (hasCity && types.has("remote") && !types.has("hybrid")) types.add("onsite");

  if (types.size === 0) types.add("onsite");
  return [...types];
}

// Geography (post-ICP-filter the board is SF Bay or Remote US only).
export function parseGeo(location = "") {
  const loc = location.toLowerCase();
  const geos = new Set();
  if (/(san francisco|bay area|oakland|east bay)/.test(loc)) geos.add("sf-bay");
  if (loc.includes("remote")) geos.add("remote-us");
  if (geos.size === 0) geos.add("sf-bay");
  return [...geos];
}

// Seniority parsed from the title.
export function parseLevel(title = "") {
  const t = title.toLowerCase();
  if (t.includes("principal") || t.includes("staff")) return "staff+";
  if (t.includes("senior") || t.includes("sr.") || t.includes("founding") || t.includes("lead"))
    return "senior";
  if (t.includes("junior")) return "junior";
  if (t.includes("mid-level") || t.includes("mid level") || /\bii\b/.test(t)) return "mid";
  return "mid";
}

// Numeric salary range (in $K) parsed from the freeform salary string.
// Returns { min, max } or null when no salary is listed.
export function parseSalary(salary) {
  if (!salary) return null;
  const matches = [...salary.matchAll(/\$\s*([\d.]+)\s*([kKmM])?/g)];
  if (!matches.length) return null;
  const nums = matches.map((m) => {
    let n = parseFloat(m[1]);
    const unit = (m[2] || "").toLowerCase();
    if (unit === "m") n *= 1000; // $1M -> 1000K
    else if (!unit && n > 1000) n /= 1000; // $200000 -> 200K
    return n;
  });
  return { min: Math.min(...nums), max: Math.max(...nums) };
}

// Editorial: industry + funding stage per company. Stage buckets are
// Seed | Early-stage | Growth | Public / Large and are best-effort.
export const COMPANY_META = {
  // Startups (startupId)
  "koah-labs": { industry: "AI / Dev Tools", stage: "Seed" },
  patch: { industry: "Climate", stage: "Growth" },
  reset: { industry: "Fintech", stage: "Seed" },
  stepful: { industry: "Healthtech", stage: "Growth" },
  simple_ai: { industry: "AI / Dev Tools", stage: "Seed" },

  // Sponsors (sponsorId)
  companycam: { industry: "Enterprise SaaS", stage: "Growth" },
  finta: { industry: "Fintech", stage: "Seed" },
  omada: { industry: "Healthtech", stage: "Public / Large" },
  thatch: { industry: "Healthtech", stage: "Growth" },
  chime: { industry: "Fintech", stage: "Public / Large" },
  gusto: { industry: "HR / Payroll", stage: "Public / Large" },
  persona: { industry: "Security / Identity", stage: "Growth" },
  superconductor: { industry: "AI / Dev Tools", stage: "Seed" },
  ubicloud: { industry: "Infrastructure / Data", stage: "Seed" },
  planetscale: { industry: "Infrastructure / Data", stage: "Growth" },
  angellist: { industry: "Fintech", stage: "Growth" },

  // Off-roster companies (inline companyId)
  duler: { industry: "Hospitality / Workforce", stage: "Early-stage" },
  monami: { industry: "GovTech", stage: "Early-stage" },
  levelpath: { industry: "Enterprise SaaS", stage: "Growth" },
  mudflap: { industry: "Fintech", stage: "Growth" },
  authorium: { industry: "GovTech", stage: "Early-stage" },
  truelink: { industry: "Fintech", stage: "Growth" },
  luthor: { industry: "AI / Dev Tools", stage: "Seed" },
  prevail: { industry: "Legaltech", stage: "Early-stage" },
  instrumentl: { industry: "Enterprise SaaS", stage: "Growth" },
  versemedical: { industry: "Healthtech", stage: "Early-stage" },
  github: { industry: "AI / Dev Tools", stage: "Public / Large" },
  generalmedicine: { industry: "Healthtech", stage: "Seed" },
  ascend: { industry: "Fintech", stage: "Growth" },
  piesystems: { industry: "Fintech", stage: "Early-stage" },
  upmetrics: { industry: "Enterprise SaaS", stage: "Early-stage" },
  decile: { industry: "Fintech", stage: "Early-stage" },
  natural: { industry: "Fintech", stage: "Seed" },
  middesk: { industry: "Fintech", stage: "Growth" },
  found: { industry: "Fintech", stage: "Growth" },
  arkestro: { industry: "Enterprise SaaS", stage: "Growth" },
  edo: { industry: "Enterprise SaaS", stage: "Growth" },
  betterstack: { industry: "Infrastructure / Data", stage: "Early-stage" },
  nomad: { industry: "Fintech", stage: "Early-stage" },
  relevanthealthcare: { industry: "Healthtech", stage: "Seed" },
  backerkit: { industry: "Enterprise SaaS", stage: "Early-stage" },
  windborne: { industry: "Climate", stage: "Early-stage" },
  salmahealth: { industry: "Healthtech", stage: "Early-stage" },
  opendate: { industry: "Enterprise SaaS", stage: "Early-stage" },
  jukeboxhealth: { industry: "Healthtech", stage: "Early-stage" },
  checkmate: { industry: "Enterprise SaaS", stage: "Growth" },
  fathom: { industry: "AI / Dev Tools", stage: "Growth" },
  pairteam: { industry: "Healthtech", stage: "Growth" },
};

// ── Matching chips ──────────────────────────────────────────────────────────
// Hand-curated per job (see the `chips` array on each record in jobs.js). Chips
// surface the factors an applicant scans for. Three kinds, styled distinctly:
//   focus  — what kind of work the role is (Backend, Payments, AI/ML, ...)
//   stack  — the differentiating tools they'll actually use (Hotwire, GraphQL, ...)
//   signal — deal-makers / breakers (Polyglot, Founding role, High compliance, ...)
// Any label not in CHIP_KIND renders as a stack chip. Keep this list as the
// controlled vocabulary; add here first, then use on jobs. Ruby/Rails itself is
// never a chip (every role is Rails) — flag the exceptions with "Polyglot" or a
// non-Rails runtime chip (Roda) instead.
export const CHIP_KIND = {
  // focus
  Fullstack: "focus", Backend: "focus", Frontend: "focus", Platform: "focus",
  Infra: "focus", DevOps: "focus", Data: "focus", "AI/ML": "focus",
  Security: "focus", Payments: "focus", "Product Eng": "focus", Mobile: "focus",
  // stack
  Hotwire: "stack", ViewComponent: "stack", Packwerk: "stack", Sidekiq: "stack",
  React: "stack", "React Native": "stack", Vue: "stack", "Next.js": "stack",
  TypeScript: "stack", GraphQL: "stack", PostgreSQL: "stack", MySQL: "stack",
  ClickHouse: "stack", Kafka: "stack", Terraform: "stack", Go: "stack",
  Roda: "stack",
  // signal
  Polyglot: "signal", "Founding role": "signal", "AI-native": "signal",
  Mentorship: "signal", "High compliance": "signal", "Open source": "signal",
  Profitable: "signal", "Public benefit": "signal",
};

const CHIP_KIND_RANK = { focus: 0, stack: 1, signal: 2 };

export function chipKind(label) {
  return CHIP_KIND[label] || "stack";
}

// Stable sort a job's chips into focus → stack → signal for consistent display.
export function orderChips(chips = []) {
  return [...chips].sort(
    (a, b) => CHIP_KIND_RANK[chipKind(a)] - CHIP_KIND_RANK[chipKind(b)],
  );
}

// Display labels and canonical ordering for the parsed facets.
export const WORK_TYPE_LABELS = { onsite: "On-site", hybrid: "Hybrid", remote: "Remote" };
export const WORK_TYPE_ORDER = ["remote", "hybrid", "onsite"];

export const GEO_LABELS = { "sf-bay": "SF Bay Area", "remote-us": "Remote (US)" };
export const GEO_ORDER = ["sf-bay", "remote-us"];

export const LEVEL_LABELS = {
  junior: "Junior",
  mid: "Mid-level",
  senior: "Senior",
  "staff+": "Staff / Principal",
};
export const LEVEL_ORDER = ["junior", "mid", "senior", "staff+"];

export const STAGE_ORDER = ["Seed", "Early-stage", "Growth", "Public / Large"];

export const SALARY_THRESHOLDS = [120, 150, 180, 200];
