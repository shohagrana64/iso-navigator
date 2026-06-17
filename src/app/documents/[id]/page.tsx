import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb, ListChecks, Target } from "lucide-react";
import { mandatoryDocs, getDoc, getDocExample } from "@/content";
import { renderMarkdown } from "@/lib/markdown";
import { PageHero } from "@/components/page-hero";
import { TemplateViewer } from "@/components/template-viewer";

export function generateStaticParams() {
  return mandatoryDocs.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doc = getDoc(id);
  if (!doc) return { title: "Document not found" };
  return { title: doc.title, description: doc.summary };
}

export default async function DocumentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = getDoc(id);
  if (!doc) notFound();

  const idx = mandatoryDocs.findIndex((d) => d.id === doc.id);
  const prev = idx > 0 ? mandatoryDocs[idx - 1] : null;
  const next = idx < mandatoryDocs.length - 1 ? mandatoryDocs[idx + 1] : null;
  const html = renderMarkdown(doc.template);
  const exampleMd = getDocExample(doc.id);
  const exampleHtml = exampleMd ? renderMarkdown(exampleMd) : undefined;

  return (
    <div>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/documents", label: "Documents" },
          { href: `/documents/${doc.id}`, label: doc.title },
        ]}
        eyebrow={`${doc.category} · Clause ${doc.clause}`}
        title={doc.title}
        description={doc.summary}
      >
        <div className="flex flex-wrap items-center gap-2">
          {doc.required ? (
            <span className="rounded-md bg-grow-50 px-2 py-1 text-xs font-bold uppercase tracking-wide text-grow-700">
              Required
            </span>
          ) : (
            <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
              Recommended
            </span>
          )}
          <span className="rounded-md bg-surface px-2 py-1 font-mono text-xs font-medium text-ink-soft ring-1 ring-line">
            Clause {doc.clause}
          </span>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,1.15fr)] lg:items-start">
          {/* Left: guidance */}
          <div className="space-y-6">
            <Block icon={<Target className="h-4 w-4" />} title="Why it matters">
              <p className="text-sm leading-relaxed text-ink-soft">{doc.why}</p>
            </Block>

            <Block
              icon={<ListChecks className="h-4 w-4" />}
              title="What to include"
            >
              <ul className="space-y-2">
                {doc.whatToInclude.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block
              icon={<Lightbulb className="h-4 w-4" />}
              title="Tips for beginners"
            >
              <ul className="space-y-3">
                {doc.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-grow-50/60 p-3 text-sm leading-relaxed text-ink-soft"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          {/* Right: template */}
          <div className="lg:sticky lg:top-20">
            <TemplateViewer
              template={{ markdown: doc.template, html }}
              example={
                exampleMd && exampleHtml
                  ? { markdown: exampleMd, html: exampleHtml }
                  : undefined
              }
              filename={doc.id}
              title={`${doc.title} — template`}
            />
          </div>
        </div>

        {/* Prev / next */}
        <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-line pt-6">
          {prev ? (
            <Link
              href={`/documents/${prev.id}`}
              className="group flex max-w-[48%] flex-col rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-300"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </span>
              <span className="mt-1 truncate text-sm font-medium text-ink">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/documents/${next.id}`}
              className="group flex max-w-[48%] flex-col items-end rounded-xl border border-line bg-surface p-4 text-right transition-colors hover:border-brand-300"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 truncate text-sm font-medium text-ink">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
      <h2 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
