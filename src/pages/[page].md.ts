import type { APIRoute, GetStaticPaths } from "astro";
import { PAGES } from "../lib/llm-content.js";

// Emits a static Markdown twin for each main page: /index.md, /jobs.md,
// /startups.md, /videos.md, /news.md, /about.md.
export const getStaticPaths: GetStaticPaths = () =>
  PAGES.map((p) => ({ params: { page: p.slug } }));

export const GET: APIRoute = ({ params }) => {
  const page = PAGES.find((p) => p.slug === params.page);
  if (!page) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(page.render(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
