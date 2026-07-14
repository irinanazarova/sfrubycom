import type { APIRoute } from "astro";
import newsData from "../../content/news.json";
import type { NewsItem } from "../../utils/types";

const SITE = "https://sfruby.com";
const FEED_TITLE = "SF Ruby News";
const FEED_DESCRIPTION =
  "The latest from the Ruby ecosystem: funding rounds, product launches, acquisitions, and community events, curated by the San Francisco Ruby community.";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// news dates are plain "YYYY-MM-DD"; anchor them to noon UTC for a stable RFC-822 pubDate.
function toRfc822(date: string): string {
  return new Date(`${date}T12:00:00Z`).toUTCString();
}

export const GET: APIRoute = () => {
  const items = (newsData as NewsItem[])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const lastBuildDate = items.length ? toRfc822(items[0].date) : new Date().toUTCString();

  const entries = items
    .map((item) => {
      const categoryTag = item.category
        ? `\n      <category>${escapeXml(item.category)}</category>`
        : "";
      const description = item.startupName
        ? `${item.summary} (via ${item.source || "SF Ruby"})`
        : `${item.summary}${item.source ? ` (via ${item.source})` : ""}`;
      return `    <item>
      <title>${escapeXml(item.headline)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="false">sfruby-news-${escapeXml(item.id)}</guid>
      <pubDate>${toRfc822(item.date)}</pubDate>${categoryTag}
      <description>${escapeXml(description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE}/news</link>
    <atom:link href="${SITE}/news/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${entries}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
