"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Download, FileText, Printer, Wand2 } from "lucide-react";
import { cn } from "@/lib/cn";

interface Doc {
  /** Raw Markdown — used for copy & download. */
  markdown: string;
  /** Pre-rendered HTML — used for display & print. */
  html: string;
}

interface TemplateViewerProps {
  template: Doc;
  /** Optional filled-in worked example shown in a second tab. */
  example?: Doc;
  /** Filename stem (no extension) for downloads. */
  filename: string;
  title?: string;
}

export function TemplateViewer({
  template,
  example,
  filename,
  title = "Sample template",
}: TemplateViewerProps) {
  const [tab, setTab] = useState<"template" | "example">("template");
  const [copied, setCopied] = useState(false);

  // Allow deep-linking straight to the worked example via #example.
  useEffect(() => {
    if (example && window.location.hash === "#example") setTab("example");
  }, [example]);

  const active = tab === "example" && example ? example : template;
  const suffix = tab === "example" && example ? "-example" : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be blocked; fail quietly.
    }
  };

  const handleDownload = () => {
    const blob = new Blob([active.markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}${suffix}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const w = window.open("", "_blank", "width=820,height=1000");
    if (!w) return;
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
      <style>
        body{font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;max-width:48rem;margin:2rem auto;padding:0 1.5rem;line-height:1.65;}
        h1{font-size:1.6rem;margin:0 0 .75rem;} h2{font-size:1.2rem;margin:1.4rem 0 .5rem;} h3{font-size:1rem;margin:1.1rem 0 .4rem;}
        table{width:100%;border-collapse:collapse;margin:.9rem 0;font-size:.85rem;} th,td{border:1px solid #cbd5e1;padding:.45rem .6rem;text-align:left;vertical-align:top;} th{background:#eef2ff;}
        code{background:#eef2ff;padding:.1rem .3rem;border-radius:.25rem;font-size:.85em;} hr{border:0;border-top:1px solid #e2e8f0;margin:1.2rem 0;}
        ul,ol{padding-left:1.25rem;}
      </style></head><body>${active.html}</body></html>`);
    w.document.close();
    w.focus();
    // Give the new document a tick to lay out before printing.
    setTimeout(() => w.print(), 300);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-brand-50/50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <FileText className="h-4 w-4 text-brand-600" />
          {title}
        </div>
        <div className="flex flex-wrap items-center gap-2">
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
            onClick={handlePrint}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <Printer className="h-3.5 w-3.5" /> Print
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </button>
        </div>
      </div>

      {example && (
        <div
          role="tablist"
          aria-label="Template or worked example"
          className="flex gap-1 border-b border-line bg-surface px-3 pt-2"
        >
          <TabButton
            active={tab === "template"}
            onClick={() => setTab("template")}
            icon={<FileText className="h-3.5 w-3.5" />}
          >
            Blank template
          </TabButton>
          <TabButton
            active={tab === "example"}
            onClick={() => setTab("example")}
            icon={<Wand2 className="h-3.5 w-3.5" />}
          >
            Worked example
          </TabButton>
        </div>
      )}

      {tab === "example" && example && (
        <p className="border-b border-grow-200 bg-grow-50/60 px-5 py-2.5 text-xs text-grow-700">
          A fully completed example for a fictional company (Northwind Logistics
          Pty Ltd) — this is roughly what an auditor expects to see.
        </p>
      )}

      <div
        className="prose-doc max-h-[34rem] overflow-y-auto px-5 py-5"
        dangerouslySetInnerHTML={{ __html: active.html }}
      />
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-t-lg border-b-2 px-3 py-2 text-xs font-semibold transition-colors",
        active
          ? "border-brand-600 text-brand-700"
          : "border-transparent text-muted hover:text-ink-soft",
      )}
    >
      {icon}
      {children}
    </button>
  );
}
