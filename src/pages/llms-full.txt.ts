import type { APIRoute } from "astro";
import { llmsFullTxt } from "../lib/llm-content.js";

// /llms-full.txt — every Markdown twin in one file, for a client that would
// rather fetch once than follow the links in /llms.txt.
export const GET: APIRoute = () =>
  new Response(llmsFullTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
