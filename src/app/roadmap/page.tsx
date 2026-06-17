import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, FileText } from "lucide-react";
import { roadmapPhases, getDoc } from "@/content";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Implementation Roadmap",
  description:
    "A realistic, phase-by-phase plan to implement ISO 27001 — from leadership buy-in and scoping to risk assessment, controls, internal audit and the certification audit.",
};

export default function RoadmapPage() {
  return (
    <div>
      <PageHero
        eyebrow="Step by step"
        title="Your ISO 27001 implementation roadmap"
        description="Certification can feel huge. It's much more manageable as a sequence of phases. Here's a realistic order for a small or medium organisation — adapt the timings to your team."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <ol className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-line sm:before:left-[23px]">
          {roadmapPhases.map((phase) => {
            const docs = phase.relatedDocs
              .map((slug) => getDoc(slug))
              .filter((d): d is NonNullable<typeof d> => Boolean(d));
            return (
              <li key={phase.id} className="relative pl-14 sm:pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-sm ring-4 ring-canvas sm:h-12 sm:w-12 sm:text-base">
                  {phase.number}
                </span>
                <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-display text-lg font-bold text-ink">
                      {phase.title}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                      <Clock className="h-3.5 w-3.5" />
                      {phase.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {phase.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {phase.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ink-soft">
                        <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-grow-50 text-xs font-bold text-grow-700">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>

                  {docs.length > 0 && (
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        Templates for this phase
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {docs.map((d) => (
                          <Link
                            key={d.id}
                            href={`/documents/${d.id}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
                          >
                            <FileText className="h-3.5 w-3.5 text-brand-500" />
                            {d.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50/60 p-6 text-center">
          <h2 className="font-display text-lg font-bold text-ink">
            Ready to work through the controls?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">
            Once your foundations are in place, go through the 93 Annex A
            controls and decide how each one applies to you.
          </p>
          <Link
            href="/controls"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Open the controls checklist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
