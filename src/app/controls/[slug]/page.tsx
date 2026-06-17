import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  ListChecks,
  Search,
} from "lucide-react";
import {
  allControls,
  controlIdFromSlug,
  controlSlug,
  getControl,
} from "@/content";
import { renderMarkdown } from "@/lib/markdown";
import { themeStyles } from "@/lib/theme-style";
import { PageHero } from "@/components/page-hero";
import { TemplateViewer } from "@/components/template-viewer";
import { ControlCheckbox } from "@/components/control-checkbox";

export function generateStaticParams() {
  return allControls.map((c) => ({ slug: controlSlug(c.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const control = getControl(controlIdFromSlug(slug));
  if (!control) return { title: "Control not found" };
  return {
    title: `${control.id} ${control.title}`,
    description: control.purpose,
  };
}

export default async function ControlDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const control = getControl(controlIdFromSlug(slug));
  if (!control) notFound();

  const idx = allControls.findIndex((c) => c.id === control.id);
  const prev = idx > 0 ? allControls[idx - 1] : null;
  const next = idx < allControls.length - 1 ? allControls[idx + 1] : null;
  const s = themeStyles[control.theme];
  const html = renderMarkdown(control.template);

  return (
    <div>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/controls", label: "Controls" },
          {
            href: `/controls/${slug}`,
            label: control.id,
          },
        ]}
        eyebrow={`${control.theme} · Annex A`}
        title={`${control.id} — ${control.title}`}
        description={control.purpose}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-md px-2 py-1 font-mono text-xs font-semibold ${s.chipBg} ${s.chipText}`}
          >
            {control.id}
          </span>
          {control.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-ink-soft ring-1 ring-line"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:items-start">
          {/* Left: explanation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <ControlCheckbox
                  id={control.id}
                  label={`${control.id} ${control.title}`}
                />
                <span className="text-sm font-medium text-ink-soft">
                  Mark this control as handled
                </span>
              </div>
            </div>

            <Block
              icon={<Lightbulb className="h-4 w-4" />}
              title="What it means"
            >
              <p className="text-sm leading-relaxed text-ink-soft">
                {control.whatItMeans}
              </p>
            </Block>

            <Block
              icon={<ListChecks className="h-4 w-4" />}
              title="How to implement it"
            >
              <ol className="space-y-2">
                {control.howToImplement.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-soft">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Block>

            <Block
              icon={<Search className="h-4 w-4" />}
              title="What an auditor looks for"
            >
              <ul className="space-y-2">
                {control.evidence.map((e, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-soft">
                    <ClipboardCheck className="mt-0.5 h-4 w-4 flex-none text-grow-600" />
                    <span className="leading-relaxed">{e}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          {/* Right: template */}
          <div className="lg:sticky lg:top-20">
            <TemplateViewer
              markdown={control.template}
              html={html}
              filename={`${control.id}-${control.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}`}
              title={`Sample for ${control.id}`}
            />
          </div>
        </div>

        {/* Prev / next */}
        <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-line pt-6">
          {prev ? (
            <Link
              href={`/controls/${controlSlug(prev.id)}`}
              className="group flex max-w-[48%] flex-col rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-300"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </span>
              <span className="mt-1 truncate text-sm font-medium text-ink">
                {prev.id} {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/controls/${controlSlug(next.id)}`}
              className="group flex max-w-[48%] flex-col items-end rounded-xl border border-line bg-surface p-4 text-right transition-colors hover:border-brand-300"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 truncate text-sm font-medium text-ink">
                {next.id} {next.title}
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
