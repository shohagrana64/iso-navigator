"use client";

import { useState } from "react";
import JSZip from "jszip";
import { FileArchive, Loader2 } from "lucide-react";
import {
  allControls,
  controlExamples,
  docExamples,
  mandatoryDocs,
} from "@/content";

type Kind = "documents" | "controls";

export function ExportAll({ kind }: { kind: Kind }) {
  const [busy, setBusy] = useState(false);

  const build = async () => {
    setBusy(true);
    try {
      const zip = new JSZip();

      if (kind === "documents") {
        const tpl = zip.folder("templates");
        const ex = zip.folder("worked-examples");
        const index: string[] = ["# ISO 27001 — Document templates", ""];
        for (const d of mandatoryDocs) {
          tpl?.file(`${d.id}.md`, d.template);
          index.push(`- ${d.title} (clause ${d.clause})`);
          const example = docExamples[d.id];
          if (example) ex?.file(`${d.id}.example.md`, example);
        }
        zip.file("INDEX.md", index.join("\n"));
      } else {
        const tpl = zip.folder("templates");
        const ex = zip.folder("worked-examples");
        const index: string[] = ["# ISO 27001 — Annex A control templates", ""];
        for (const c of allControls) {
          const safe = `${c.id}-${c.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")}`;
          tpl?.file(`${safe}.md`, c.template);
          index.push(`- ${c.id} ${c.title}`);
          const example = controlExamples[c.id];
          if (example) ex?.file(`${safe}.example.md`, example);
        }
        zip.file("INDEX.md", index.join("\n"));
      }

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        kind === "documents"
          ? "iso27001-document-templates.zip"
          : "iso27001-control-templates.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  };

  const label =
    kind === "documents"
      ? "Download all documents (.zip)"
      : "Download all control templates (.zip)";

  return (
    <button
      type="button"
      onClick={build}
      disabled={busy}
      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:ring-brand-300 disabled:cursor-wait"
    >
      {busy ? (
        <Loader2 className="h-4 w-4 animate-spin text-brand-600" />
      ) : (
        <FileArchive className="h-4 w-4 text-brand-600" />
      )}
      {busy ? "Building zip…" : label}
    </button>
  );
}
