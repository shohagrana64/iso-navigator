import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Lock } from "lucide-react";
import { mandatoryDocs } from "@/content";
import { PageHero } from "@/components/page-hero";
import { ExportAll } from "@/components/export-all";

export const metadata: Metadata = {
  title: "Document Templates",
  description:
    "Ready-to-adapt templates for every mandatory and recommended ISO 27001 document — scope, policy, risk register, Statement of Applicability and more. Copy or download each one.",
};

const categoryStyle: Record<string, string> = {
  Policy: "bg-brand-50 text-brand-700",
  Procedure: "bg-sky-50 text-sky-700",
  Plan: "bg-teal-50 text-teal-700",
  Register: "bg-amber-50 text-amber-700",
  Record: "bg-violet-50 text-violet-700",
  Methodology: "bg-rose-50 text-rose-700",
};

export default function DocumentsPage() {
  const required = mandatoryDocs.filter((d) => d.required);
  const recommended = mandatoryDocs.filter((d) => !d.required);

  return (
    <div>
      <PageHero
        eyebrow="Templates"
        title="Every document you need — with a sample to start from"
        description="ISO 27001 asks for a specific set of documented information. Here's each one explained, with a ready-to-adapt template you can copy or download and make your own."
      >
        <ExportAll kind="documents" />
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DocGroup
          title="Required documented information"
          caption="These are explicitly required by ISO/IEC 27001:2022. An auditor will expect to see them."
          docs={required}
          categoryStyle={categoryStyle}
        />
        <div className="mt-12">
          <DocGroup
            title="Expected supporting documents"
            caption="Strongly recommended — these come from the Annex A controls and the way the standard is operated in practice."
            docs={recommended}
            categoryStyle={categoryStyle}
          />
        </div>
      </div>
    </div>
  );
}

function DocGroup({
  title,
  caption,
  docs,
  categoryStyle,
}: {
  title: string;
  caption: string;
  docs: typeof mandatoryDocs;
  categoryStyle: Record<string, string>;
}) {
  return (
    <section>
      <div className="flex items-center gap-2">
        <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
          {docs.length}
        </span>
      </div>
      <p className="mt-1 max-w-2xl text-sm text-muted">{caption}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <Link
            key={d.id}
            href={`/documents/${d.id}`}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-sm transition-colors hover:border-brand-300"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex items-center gap-1.5">
                {d.required && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-grow-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-grow-700">
                    <Lock className="h-3 w-3" /> Required
                  </span>
                )}
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    categoryStyle[d.category] ?? "bg-slate-100 text-slate-600"
                  }`}
                >
                  {d.category}
                </span>
              </div>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-ink">
              {d.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              Clause {d.clause}
            </p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {d.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
              Open template{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
