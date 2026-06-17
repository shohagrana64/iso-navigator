import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RiskCalculator } from "@/components/risk-calculator";

export const metadata: Metadata = {
  title: "Risk Assessment Calculator",
  description:
    "Build a simple ISO 27001 risk register: rate each risk by likelihood and impact, see its score and suggested treatment, view the 5x5 risk matrix, and export to CSV or Markdown.",
};

export default function RiskCalculatorPage() {
  return (
    <div>
      <PageHero
        eyebrow="Interactive tool"
        title="Risk assessment calculator"
        description="Risk assessment is the heart of ISO 27001. List what could go wrong, rate how likely it is and how bad it would be, and this tool scores each risk and suggests how to treat it. Everything is saved in your browser — export it as your starting Risk Register."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <RiskCalculator />
      </div>
    </div>
  );
}
