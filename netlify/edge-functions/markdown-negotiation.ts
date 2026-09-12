import type { Context, Config } from "@netlify/edge-functions";
import { TWINS } from "../../src/lib/markdown-twins.js";

// Content negotiation for AI agents: when a client explicitly prefers Markdown
// (Accept: text/markdown), serve the page's .md twin instead of the HTML.
// The site stays fully static; this only rewrites the response at the edge.
//
// Runs only on the HTML page routes (see `config.path`), never on *.md, so the
// internal fetch for the twin can't loop back through this function.

// The routes with a twin come from the same list the site builds from, so a
// new twin needs no change here.
const TWIN: Record<string, string> = Object.fromEntries(
  TWINS.map((t) => [t.path, `/${t.slug}.md`]),
);

function prefersMarkdown(accept: string): boolean {
  // Only honor an explicit markdown preference; a plain browser sends text/html.
  return /text\/markdown/i.test(accept);
}

export default async (request: Request, context: Context) => {
  const accept = request.headers.get("accept") || "";
  if (!prefersMarkdown(accept)) return; // fall through to the static HTML

  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const twin = TWIN[path];
  if (!twin) return;

  const mdResponse = await fetch(new URL(twin, url.origin));
  if (!mdResponse.ok) return; // no twin built: serve the HTML

  return new Response(mdResponse.body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Caches must key on Accept so HTML and Markdown don't get crossed.
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

export const config: Config = {
  path: TWINS.map((t) => t.path),
};
