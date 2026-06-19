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
};

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
