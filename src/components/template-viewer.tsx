"use client";

import { useState } from "react";
import { Check, Copy, Download, FileText } from "lucide-react";
import { cn } from "@/lib/cn";

interface TemplateViewerProps {
  /** Raw Markdown — used for copy & download. */
  markdown: string;
  /** Pre-rendered HTML — used for display. */
  html: string;
  /** Filename stem (no extension) for downloads. */
  filename: string;
  title?: string;
}

export function TemplateViewer({
  markdown,
  html,
  filename,
  title = "Sample template",
}: TemplateViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be blocked; fail quietly.
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-brand-50/50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <FileText className="h-4 w-4 text-brand-600" />
          {title}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className={cn(
              "inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors",
              copied
                ? "border-grow-200 bg-grow-50 text-grow-700"
                : "border-line bg-surface text-ink-soft hover:border-brand-300 hover:text-brand-700",
            )}
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Download className="h-3.5 w-3.5" /> Download .md
          </button>
        </div>
      </div>
      <div
        className="prose-doc max-h-[32rem] overflow-y-auto px-5 py-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
