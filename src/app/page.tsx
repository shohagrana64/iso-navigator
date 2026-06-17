import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  ListChecks,
  Map,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  faqs,
  roadmapPhases,
  themes,
  totalControls,
  totalDocs,
} from "@/content";
import { themeStyles } from "@/lib/theme-style";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-50 to-canvas">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-surface px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Beginner-friendly · ISO/IEC 27001:2022
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            ISO 27001, finally explained{" "}
            <span className="text-brand-600">in plain language.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Everything you need to understand the standard and start working
            towards certification: a clear learning path, a step-by-step
            roadmap, and ready-to-use templates for every required document and
            all {totalControls} Annex A controls.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Start the roadmap <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-3 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:ring-brand-300"
            >
              <BookOpen className="h-4 w-4 text-brand-600" /> What is ISO 27001?
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { n: totalControls, l: "Annex A controls" },
              { n: totalDocs, l: "Document templates" },
              { n: roadmapPhases.length, l: "Roadmap phases" },
              { n: "100%", l: "Free to use" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-line bg-surface p-4 shadow-sm"
              >
                <dt className="font-display text-2xl font-bold text-brand-700">
                  {s.n}
                </dt>
                <dd className="mt-0.5 text-xs font-medium text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What you'll find */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Where to start"
          title="Four ways to make progress"
          description="Whether you're here to understand the basics or to build your ISMS, start wherever you are."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            href="/learn"
            icon={<BookOpen className="h-5 w-5" />}
            title="Learn the basics"
            body="What ISO 27001 is, the key concepts, a glossary, and answers to common questions — no jargon."
          />
          <FeatureCard
            href="/roadmap"
            icon={<Map className="h-5 w-5" />}
            title="Follow the roadmap"
            body="A realistic, phase-by-phase plan from leadership buy-in all the way to your certification audit."
          />
          <FeatureCard
            href="/documents"
            icon={<FileText className="h-5 w-5" />}
            title="Use the templates"
            body={`${totalDocs} mandatory and recommended documents, each with a ready-to-adapt sample you can copy or download.`}
          />
          <FeatureCard
            href="/controls"
            icon={<ListChecks className="h-5 w-5" />}
            title="Work the controls"
            body={`All ${totalControls} Annex A controls explained simply, with a checklist that tracks your progress.`}
          />
        </div>
      </section>

      {/* Annex A themes */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Annex A:2022"
            title="The 93 controls, in four families"
            description="ISO 27001:2022 groups its security controls into four themes. Here's what each one covers."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => {
              const s = themeStyles[t.theme];
              return (
                <Link
                  key={t.theme}
                  href="/controls"
                  className="group rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-brand-300"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-xs font-semibold ${s.chipBg} ${s.chipText}`}
                    >
                      {t.clause}
                    </span>
                    <span className="font-display text-2xl font-bold text-ink">
                      {t.count}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {t.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {t.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="How this works"
          title="From confused to certified — the short version"
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <BookOpen className="h-5 w-5" />,
              t: "Understand",
              b: "Get comfortable with what an ISMS is, the CIA triad, and the difference between the clauses and Annex A.",
            },
            {
              icon: <ClipboardList className="h-5 w-5" />,
              t: "Document & decide",
              b: "Define your scope, assess risk, and use the templates to produce the documents an auditor expects.",
            },
            {
              icon: <CheckCircle2 className="h-5 w-5" />,
              t: "Operate & certify",
              b: "Run the controls, train your people, do an internal audit, then invite a certification body.",
            },
          ].map((step, i) => (
            <li
              key={step.t}
              className="relative rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                {step.icon}
              </span>
              <span className="absolute right-5 top-5 font-display text-3xl font-bold text-brand-100">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {step.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.b}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reassurance / FAQ teaser */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grow-100 text-grow-700">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                New to all of this? You&apos;re in the right place.
              </h2>
              <p className="mt-3 text-ink-soft">
                You don&apos;t need to be a security expert. Take it one phase
                at a time — we explain every term and give you a starting point
                for every document.
              </p>
              <Link
                href="/learn#faq"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Read all FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="space-y-4">
              {faqs.slice(0, 4).map((f) => (
                <div
                  key={f.question}
                  className="rounded-xl border border-line bg-canvas p-5"
                >
                  <dt className="font-display text-base font-semibold text-ink">
                    {f.question}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {f.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-colors hover:border-brand-300"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        Open{" "}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
