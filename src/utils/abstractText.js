// CFP abstracts are typed into a plain textarea, so they arrive as raw text with
// whatever structure the speaker gave them: blank lines between paragraphs, and
// bare URLs they expect to be clickable ("Let's talk: https://cal.com/...").
// Rendered as one text node, that structure is lost — the blank line collapses
// to a space and the link is dead text.
//
// toParagraphs turns the string into paragraphs of parts. Shared by the
// server-rendered card and the client-side refresh so both draw the same shape.

// Stops before trailing sentence punctuation so "...\/feedback." doesn't take
// the full stop into the href.
const URL_RE = /https?:\/\/[^\s<>()[\]]*[^\s<>()[\].,;:!?'"]/g;

function splitLinks(paragraph) {
  const parts = [];
  let last = 0;
  for (const match of paragraph.matchAll(URL_RE)) {
    if (match.index > last)
      parts.push({ type: "text", value: paragraph.slice(last, match.index) });
    parts.push({
      type: "link",
      href: match[0],
      // the scheme is noise in body copy; "cal.com/inazarova/feedback" reads
      label: match[0].replace(/^https?:\/\//i, "").replace(/\/$/, ""),
    });
    last = match.index + match[0].length;
  }
  if (last < paragraph.length)
    parts.push({ type: "text", value: paragraph.slice(last) });
  return parts;
}

export function toParagraphs(text) {
  if (typeof text !== "string") return [];
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((p) => p.trim().replace(/\n/g, " "))
    .filter(Boolean)
    .map(splitLinks);
}
