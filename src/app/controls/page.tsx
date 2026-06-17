import type { Metadata } from "next";
import { allControls } from "@/content";
import { PageHero } from "@/components/page-hero";
import { ControlsExplorer } from "@/components/controls-explorer";
import { ExportAll } from "@/components/export-all";

export const metadata: Metadata = {
  title: "Annex A Controls Checklist",
  description:
    "All 93 ISO/IEC 27001:2022 Annex A controls explained in plain language, with a progress-tracking checklist and a sample template for each.",
};

export default function ControlsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Annex A:2022"
        title="The 93 controls — a checklist you can actually follow"
        description="Every Annex A control, explained simply. Tick them off as you decide how each one applies to your organisation, and open any control for a sample template."
      >
        <ExportAll kind="controls" />
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ControlsExplorer controls={allControls} />
      </div>
    </div>
  );
}
