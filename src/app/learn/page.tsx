import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { keyConcepts, glossary, faqs } from "@/content";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Learn ISO 27001",
  description:
    "Understand ISO 27001 from scratch: what it is, what an ISMS is, the CIA triad, clauses vs Annex A, the certification process, plus a plain-English glossary and FAQ.",
};

export default function LearnPage() {
  return (
    <div>
      <PageHero
        eyebrow="The basics"
        title="ISO 27001, explained from scratch"
        description="No prior knowledge needed. These short sections cover the ideas everything else builds on — read them in order, or jump to the glossary and FAQ."
      >
        <div className="flex flex-wrap gap-2 text-sm">
          <a
            href="#concepts"
            className="rounded-lg bg-surface px-3 py-1.5 font-medium text-ink-soft ring-1 ring-line transition-colors hover:text-brand-700"
          >
            Key concepts
          </a>
          <a
            href="#glossary"
            className="rounded-lg bg-surface px-3 py-1.5 font-medium text-ink-soft ring-1 ring-line transition-colors hover:text-brand-700"
          >
            Glossary
          </a>
          <a
            href="#faq"
            className="rounded-lg bg-surface px-3 py-1.5 font-medium text-ink-soft ring-1 ring-line transition-colors hover:text-brand-700"
          >
            FAQ
          </a>
        </div>
      </PageHero>

      {/* Key concepts */}
      <section
        id="concepts"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6"
      >
        <h2 className="font-display text-2xl font-bold text-ink">
          Key concepts
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {keyConcepts.map((c, i) => (
            <article
              key={c.title}
              className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <span className="font-display text-sm font-bold text-brand-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="scroll-mt-20 border-y border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-ink">Glossary</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            The terms you&apos;ll hear most, in plain English.
          </p>
          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {glossary.map((t) => (
              <div
                key={t.term}
                className="border-l-2 border-brand-100 pl-4"
              >
                <dt className="font-display text-sm font-semibold text-ink">
                  {t.term}
                  {t.abbr && (
                    <span className="ml-1.5 rounded bg-brand-50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-brand-700">
                      {t.abbr}
                    </span>
                  )}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {t.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-xl border border-line bg-surface shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-ink">
                {f.question}
                <ChevronDown className="h-5 w-5 flex-none text-muted transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                {f.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50/60 p-6 text-center">
          <h3 className="font-display text-lg font-bold text-ink">
            Feeling ready?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
            Follow the roadmap to put this into practice, one phase at a time.
          </p>
          <Link
            href="/roadmap"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Start the roadmap <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
