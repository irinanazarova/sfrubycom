// Map a speaker's social URL onto a SocialLink `platform` (which decides the
// icon and brand color) plus a short human label.
//
// Speaker socials are free-form single URLs typed by the speakers themselves —
// CFP submissions and the 2025 roster between them cover X, LinkedIn, GitHub,
// Bluesky, Mastodon and personal sites. Anything SocialLink has no icon for
// falls back to the neutral "dark" chip labelled with its hostname, so the link
// still reads as "where this goes" instead of an anonymous button.
const PLATFORMS = [
  { test: /(^|\.)x\.com$|(^|\.)twitter\.com$/, platform: "twitter", label: "X" },
  { test: /(^|\.)linkedin\.com$/, platform: "linkedin", label: "LinkedIn" },
  { test: /(^|\.)bsky\.app$/, platform: "bluesky", label: "Bluesky" },
  { test: /(^|\.)youtube\.com$|(^|\.)youtu\.be$/, platform: "youtube", label: "YouTube" },
  { test: /(^|\.)substack\.com$/, platform: "substack", label: "Substack" },
  { test: /(^|\.)github\.com$/, platform: "github", label: "GitHub" },
];

export function socialMeta(url) {
  let host;
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
  const known = PLATFORMS.find((p) => p.test.test(host));
  // SocialLink draws the brand icon for a known platform, so the label would
  // only repeat it ("𝕏 X"). Labels are for the fallback chip, which has no icon.
  if (known)
    return { platform: known.platform, label: known.label, href: url, icon: true };
  // github.com -> GitHub, ruby.social -> Ruby.social, kaspth.com -> Kaspth.com
  const label = host.charAt(0).toUpperCase() + host.slice(1);
  return { platform: "dark", label, href: url, icon: false };
}

// The CFP `socials` field is one free-form string a speaker types by hand, and
// they put as many links in it as they like, separated by commas, spaces, or
// newlines ("https://x.com/a, https://github.com/a"). The 2025 roster stores an
// array instead. Both come through here.
//
// Splitting matters: `new URL()` happily swallows a whole comma-separated list
// as one URL (hostname x.com, the rest of the list as the path), so treating the
// field as a single link silently produced one chip with a broken href.
export function socialMetaList(socials) {
  const raw = Array.isArray(socials) ? socials : socials ? [socials] : [];
  const urls = raw
    .flatMap((entry) => String(entry).split(/[\s,;]+/))
    .map((u) => u.trim().replace(/[.,;]+$/, ""))
    .filter(Boolean)
    // a bare "paolino.me" is a link too, and needs the scheme to parse
    .map((u) => (/^https?:\/\//i.test(u) ? u : `https://${u}`));

  const seen = new Set();
  return urls
    .map(socialMeta)
    .filter(Boolean)
    .filter((link) => {
      const key = link.href.replace(/\/+$/, "").toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}
