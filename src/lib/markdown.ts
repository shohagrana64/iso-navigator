import { marked } from "marked";

// Configure once. GFM gives us tables, which several templates rely on.
marked.use({ gfm: true, breaks: false });

/** Render trusted Markdown (our own content) to an HTML string. */
export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false }) as string;
}
