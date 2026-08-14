// Color lint: no raw hex colors outside the design-system registry.
//
// Every color must be registered in src/design/tokens.mjs and used through
// a Tailwind palette class (text-ruby-600), a generated CSS var
// (var(--dark-500), see src/styles/tokens.css), or a palette import
// (palette.gold[500]) for JS/canvas/meta-tag values.
//
// Run: node scripts/check-colors.mjs   (wired into npm run build / build:dev / qa)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = "src";
const EXTENSIONS = /\.(astro|js|mjs|ts|jsx|tsx|css)$/;

// Files allowed to contain raw hex.
const ALLOWED = [
  "src/design/tokens.mjs", // the registry itself
  "src/styles/tokens.css", // generated from the registry
];

// Legacy one-offs with their own visual themes, excluded from the rule:
// the RubyConfTH presentation microsite and past-meetup projector slides.
const LEGACY = [
  "src/pages/rubyconfth/",
  "src/styles/neon-rpg.css",
  "src/layouts/PresentationLayout.astro",
  "src/pages/meetup-2026-06.astro",
];

// A hex color is 3/4/6/8 hex digits after '#', not preceded by '&' (HTML
// entities like &#183;) or a word character, and not followed by more
// word characters (anchors like #f00bar-section don't match anyway since
// they contain non-hex letters, but IDs that happen to be pure hex would).
const CANDIDATE = /(?<![&\w])#([0-9a-fA-F]{3,8})\b/g;
const VALID_LENGTHS = new Set([3, 4, 6, 8]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (EXTENSIONS.test(name)) yield path;
  }
}

const failures = [];
for (const path of walk(ROOT)) {
  const rel = relative(".", path);
  if (ALLOWED.includes(rel) || LEGACY.some((p) => rel.startsWith(p))) continue;
  const lines = readFileSync(path, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(CANDIDATE)) {
      if (!VALID_LENGTHS.has(m[1].length)) continue;
      failures.push(`${rel}:${i + 1}  ${m[0]}  ${line.trim().slice(0, 80)}`);
    }
  });
}

if (failures.length) {
  console.error("Raw hex colors found — register them in src/design/tokens.mjs");
  console.error("and use a palette class, var(--token), or palette import instead:\n");
  for (const f of failures) console.error("  " + f);
  process.exit(1);
}
console.log("check-colors: no raw hex outside the design-system registry");
