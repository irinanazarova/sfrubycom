import type { APIRoute } from "astro";
import { llmsTxt } from "../lib/llm-content.js";

// /llms.txt — the LLM-readable index, generated from the same content as the
// Markdown page twins so it stays in sync.
export const GET: APIRoute = () =>
  new Response(llmsTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
