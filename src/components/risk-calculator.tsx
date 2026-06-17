"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Plus, RotateCcw, Sparkles, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "iso27001-navigator:risks:v1";

interface Risk {
  id: string;
  asset: string;
  threat: string;
  likelihood: number; // 1-5
  impact: number; // 1-5
}

interface Level {
  label: string;
  cell: string; // matrix/heatmap bg
  chip: string; // badge classes
  treatment: string;
}

function levelFor(score: number): Level {
  if (score >= 15)
    return {
      label: "Critical",
      cell: "bg-rose-500 text-white",
      chip: "bg-rose-50 text-rose-700 ring-rose-200",
      treatment: "Treat urgently — apply controls now and escalate to management.",
    };
  if (score >= 10)
    return {
      label: "High",
      cell: "bg-orange-400 text-white",
      chip: "bg-orange-50 text-orange-700 ring-orange-200",
      treatment: "Treat — reduce with controls within a defined timeframe.",
    };
  if (score >= 5)
    return {
      label: "Medium",
      cell: "bg-amber-300 text-amber-900",
      chip: "bg-amber-50 text-amber-700 ring-amber-200",
      treatment: "Treat where cost-effective; assign an owner and monitor.",
    };
  return {
    label: "Low",
    cell: "bg-grow-200 text-grow-700",
    chip: "bg-grow-50 text-grow-700 ring-grow-200",
    treatment: "Accept and monitor — review periodically.",
  };
}

const SCALE = [1, 2, 3, 4, 5];
const SCALE_HINT = ["Very low", "Low", "Medium", "High", "Very high"];

const SAMPLE: Risk[] = [
  { id: "r1", asset: "Customer database", threat: "Ransomware encrypts production data", likelihood: 3, impact: 5 },
  { id: "r2", asset: "Employee laptops", threat: "Lost/stolen unencrypted device", likelihood: 4, impact: 3 },
  { id: "r3", asset: "Email accounts", threat: "Phishing leads to credential theft", likelihood: 4, impact: 4 },
  { id: "r4", asset: "Website", threat: "DDoS causes downtime", likelihood: 2, impact: 3 },
  { id: "r5", asset: "Paper records", threat: "Improper disposal exposes PII", likelihood: 2, impact: 2 },
];

let counter = 0;
function newId() {
  counter += 1;
  return `risk-${counter}-${counter * 7}`;
}

export function RiskCalculator() {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState({
    asset: "",
    threat: "",
    likelihood: 3,
    impact: 3,
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setRisks(JSON.parse(raw) as Risk[]);
    } catch {
      // ignore
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(risks));
    } catch {
      // ignore
    }
  }, [risks, ready]);

  const addRisk = () => {
    if (!draft.asset.trim() && !draft.threat.trim()) return;
    setRisks((r) => [
      ...r,
      {
        id: newId(),
        asset: draft.asset.trim() || "Unnamed asset",
        threat: draft.threat.trim() || "Unspecified threat",
        likelihood: draft.likelihood,
        impact: draft.impact,
      },
    ]);
    setDraft({ asset: "", threat: "", likelihood: 3, impact: 3 });
  };

  const update = (id: string, patch: Partial<Risk>) =>
    setRisks((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const remove = (id: string) => setRisks((r) => r.filter((x) => x.id !== id));

  const stats = useMemo(() => {
    const counts = { Low: 0, Medium: 0, High: 0, Critical: 0 } as Record<
      string,
      number
    >;
    for (const r of risks) counts[levelFor(r.likelihood * r.impact).label]++;
    return counts;
  }, [risks]);

  const matrix = useMemo(() => {
    // grid[impact][likelihood] = count
    const grid: number[][] = Array.from({ length: 5 }, () =>
      Array(5).fill(0),
    );
    for (const r of risks) grid[r.impact - 1][r.likelihood - 1]++;
    return grid;
  }, [risks]);

  const download = (content: string, name: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportCsv = () => {
    const head = "Asset,Threat,Likelihood,Impact,Score,Level,Suggested treatment";
    const rows = risks.map((r) => {
      const score = r.likelihood * r.impact;
      const lvl = levelFor(score);
      const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
      return [
        esc(r.asset),
        esc(r.threat),
        r.likelihood,
        r.impact,
        score,
        lvl.label,
        esc(lvl.treatment),
      ].join(",");
    });
    download([head, ...rows].join("\n"), "risk-register.csv", "text/csv");
  };

  const exportMd = () => {
    const head =
      "# Risk Register\n\n| Asset | Threat | Likelihood | Impact | Score | Level | Suggested treatment |\n|---|---|:--:|:--:|:--:|---|---|";
    const rows = risks.map((r) => {
      const score = r.likelihood * r.impact;
      const lvl = levelFor(score);
      return `| ${r.asset} | ${r.threat} | ${r.likelihood} | ${r.impact} | ${score} | ${lvl.label} | ${lvl.treatment} |`;
    });
    download([head, ...rows].join("\n"), "risk-register.md", "text/markdown");
  };

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(["Low", "Medium", "High", "Critical"] as const).map((lvl) => {
          const sample = lvl === "Low" ? 2 : lvl === "Medium" ? 7 : lvl === "High" ? 12 : 20;
          const l = levelFor(sample);
          return (
            <div
              key={lvl}
              className="rounded-xl border border-line bg-surface p-4 shadow-sm"
            >
              <span
                className={cn(
                  "inline-block rounded-md px-2 py-0.5 text-xs font-bold ring-1",
                  l.chip,
                )}
              >
                {lvl}
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-ink">
                {ready ? stats[lvl] : 0}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        {/* Register */}
        <div>
          {/* Add form */}
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
            <h2 className="font-display text-base font-semibold text-ink">
              Add a risk
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-ink-soft">
                  Asset / what&apos;s at risk
                </span>
                <input
                  value={draft.asset}
                  onChange={(e) => setDraft({ ...draft, asset: e.target.value })}
                  placeholder="e.g. Customer database"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-ink-soft">
                  Threat / what could happen
                </span>
                <input
                  value={draft.threat}
                  onChange={(e) =>
                    setDraft({ ...draft, threat: e.target.value })
                  }
                  placeholder="e.g. Ransomware attack"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-ink-soft">
                  Likelihood
                </span>
                <select
                  value={draft.likelihood}
                  onChange={(e) =>
                    setDraft({ ...draft, likelihood: Number(e.target.value) })
                  }
                  className="w-full cursor-pointer rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                >
                  {SCALE.map((n) => (
                    <option key={n} value={n}>
                      {n} — {SCALE_HINT[n - 1]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-ink-soft">
                  Impact
                </span>
                <select
                  value={draft.impact}
                  onChange={(e) =>
                    setDraft({ ...draft, impact: Number(e.target.value) })
                  }
                  className="w-full cursor-pointer rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                >
                  {SCALE.map((n) => (
                    <option key={n} value={n}>
                      {n} — {SCALE_HINT[n - 1]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={addRisk}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <Plus className="h-4 w-4" /> Add risk
              </button>
              {risks.length === 0 && (
                <button
                  type="button"
                  onClick={() => setRisks(SAMPLE)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <Sparkles className="h-4 w-4" /> Load example risks
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <h2 className="text-sm font-semibold text-ink">
                Risk register{" "}
                <span className="text-muted">({ready ? risks.length : 0})</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={exportCsv}
                  disabled={risks.length === 0}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Download className="h-3.5 w-3.5" /> CSV
                </button>
                <button
                  type="button"
                  onClick={exportMd}
                  disabled={risks.length === 0}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Download className="h-3.5 w-3.5" /> Markdown
                </button>
                <button
                  type="button"
                  onClick={() => setRisks([])}
                  disabled={risks.length === 0}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Clear
                </button>
              </div>
            </div>

            {ready && risks.length === 0 ? (
              <p className="px-5 py-10 text-center text-sm text-muted">
                No risks yet. Add one above, or load the example risks to see how
                it works.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-muted">
                      <th className="px-4 py-2 font-semibold">Asset / threat</th>
                      <th className="px-2 py-2 font-semibold">L</th>
                      <th className="px-2 py-2 font-semibold">I</th>
                      <th className="px-2 py-2 font-semibold">Score</th>
                      <th className="px-3 py-2 font-semibold">Level</th>
                      <th className="px-2 py-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {risks.map((r) => {
                      const score = r.likelihood * r.impact;
                      const lvl = levelFor(score);
                      return (
                        <tr
                          key={r.id}
                          className="border-b border-line last:border-0 align-top"
                        >
                          <td className="px-4 py-3">
                            <p className="font-medium text-ink">{r.asset}</p>
                            <p className="text-xs text-muted">{r.threat}</p>
                            <p className="mt-1 text-xs text-ink-soft">
                              {lvl.treatment}
                            </p>
                          </td>
                          <td className="px-2 py-3">
                            <ScaleSelect
                              value={r.likelihood}
                              onChange={(v) =>
                                update(r.id, { likelihood: v })
                              }
                            />
                          </td>
                          <td className="px-2 py-3">
                            <ScaleSelect
                              value={r.impact}
                              onChange={(v) => update(r.id, { impact: v })}
                            />
                          </td>
                          <td className="px-2 py-3 font-display font-bold text-ink">
                            {score}
                          </td>
                          <td className="px-3 py-3">
                            <span
                              className={cn(
                                "inline-block whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-bold ring-1",
                                lvl.chip,
                              )}
                            >
                              {lvl.label}
                            </span>
                          </td>
                          <td className="px-2 py-3">
                            <button
                              type="button"
                              onClick={() => remove(r.id)}
                              aria-label="Remove risk"
                              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:bg-rose-50 hover:text-rose-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Matrix + method */}
        <div className="space-y-6 lg:sticky lg:top-20">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
            <h2 className="font-display text-base font-semibold text-ink">
              Risk matrix
            </h2>
            <p className="mt-1 text-xs text-muted">
              Likelihood × Impact. Numbers show how many of your risks land in
              each cell.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="flex items-center">
                <span className="-rotate-180 text-[10px] font-semibold uppercase tracking-wider text-muted [writing-mode:vertical-rl]">
                  Impact &rarr;
                </span>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-5 gap-1">
                  {[5, 4, 3, 2, 1].map((impact) =>
                    SCALE.map((likelihood) => {
                      const score = impact * likelihood;
                      const lvl = levelFor(score);
                      const count = matrix[impact - 1][likelihood - 1];
                      return (
                        <div
                          key={`${impact}-${likelihood}`}
                          className={cn(
                            "flex aspect-square items-center justify-center rounded-md text-xs font-bold",
                            lvl.cell,
                            count === 0 && "opacity-50",
                          )}
                          title={`Likelihood ${likelihood}, Impact ${impact} — ${lvl.label} (${score})`}
                        >
                          {count > 0 ? count : ""}
                        </div>
                      );
                    }),
                  )}
                </div>
                <div className="mt-1 grid grid-cols-5 gap-1 text-center text-[10px] text-muted">
                  {SCALE.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
                <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Likelihood &rarr;
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
            <h2 className="font-display text-base font-semibold text-ink">
              How scoring works
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">Score = Likelihood × Impact</strong>{" "}
                (each rated 1–5, so scores run 1–25).
              </li>
              {[
                ["Low", "1–4", "Accept & monitor"],
                ["Medium", "5–9", "Treat if cost-effective"],
                ["High", "10–14", "Treat within a timeframe"],
                ["Critical", "15–25", "Treat urgently"],
              ].map(([lvl, range, action]) => {
                const sample =
                  lvl === "Low" ? 2 : lvl === "Medium" ? 7 : lvl === "High" ? 12 : 20;
                const l = levelFor(sample);
                return (
                  <li key={lvl} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "w-16 flex-none rounded-md px-1.5 py-0.5 text-center text-xs font-bold ring-1",
                        l.chip,
                      )}
                    >
                      {lvl}
                    </span>
                    <span className="font-mono text-xs text-muted">{range}</span>
                    <span className="text-xs">{action}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-muted">
              This 5×5 method is a common, auditor-friendly approach. Document it
              in your{" "}
              <a
                href="/documents/risk-methodology"
                className="font-medium text-brand-700 hover:underline"
              >
                Risk Methodology
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaleSelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-label="Rating"
      className="cursor-pointer rounded-md border border-line bg-canvas px-1.5 py-1 text-sm text-ink outline-none focus:border-brand-400"
    >
      {SCALE.map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
}
