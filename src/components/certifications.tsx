"use client";

import { useRef, useState } from "react";
import { Award, ArrowUpRight, FileText, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";
import { certifications, ui, type Certification } from "@/lib/content";

export function Certifications() {
  const { locale } = useLocale();
  const t = ui[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Certification | null>(null);
  const french = locale === "fr";
  const actionClass = "inline-flex min-h-11 items-center gap-1.5 rounded-md text-xs font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

  return (
    <section>
      <SectionHeading
        id="certifications"
        path="certifications"
        title={t.sections.certifications}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name.en}
            className="flex items-start gap-3 rounded-xl border border-dashed border-border p-4"
          >
            <Award aria-hidden className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug">{cert.name[locale]}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {cert.issuer} · {cert.date[locale]}
              </p>
              {(cert.file || cert.verify) && (
                <div className="mt-2 flex flex-wrap gap-x-5">
                  {cert.file && (
                    <button
                      type="button"
                      className={actionClass}
                      aria-label={`${french ? "Voir le certificat" : "View certificate"}: ${cert.name[locale]}`}
                      onClick={() => {
                        setSelected(cert);
                        dialog.current?.showModal();
                      }}
                    >
                      <FileText aria-hidden className="size-3.5" />
                      {french ? "Voir le certificat" : "View certificate"}
                    </button>
                  )}
                  {cert.verify && (
                    <a className={actionClass} href={cert.verify} target="_blank" rel="noreferrer" aria-label={`${french ? "Vérifier" : "Verify"}: ${cert.name[locale]}`}>
                      {french ? "Vérifier" : "Verify"}
                      <ArrowUpRight aria-hidden className="size-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-labelledby="certificate-title"
        className="fixed m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-auto rounded-xl border border-border bg-background p-0 text-foreground shadow-xl backdrop:bg-black/70"
        onClose={() => setSelected(null)}
      >
        {selected && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-border p-4">
              <div>
                <h3 id="certificate-title" className="text-sm font-semibold">{selected.name[locale]}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{selected.issuer} · {selected.date[locale]}</p>
              </div>
              <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label={french ? "Fermer le certificat" : "Close certificate"} className="flex size-11 shrink-0 items-center justify-center rounded-md hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring">
                <X aria-hidden className="size-5" />
              </button>
            </div>
            {selected.file?.endsWith(".pdf") ? (
              <iframe src={selected.file} title={selected.name[locale]} className="h-[60dvh] w-full border-0 bg-white" />
            ) : (
              // Preserve the original document and load it only when opened.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={selected.file} alt={selected.name[locale]} className="max-h-[65dvh] w-full bg-white object-contain" />
            )}
            <div className="border-t border-border px-4 py-2">
              <a href={selected.file} target="_blank" rel="noreferrer" className={actionClass}>
                {french ? "Ouvrir le fichier original" : "Open original file"}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
