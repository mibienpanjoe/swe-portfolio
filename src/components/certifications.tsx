"use client";

import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";
import { certifications, ui } from "@/lib/content";

export function Certifications() {
  const { locale } = useLocale();
  const t = ui[locale];

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
            <Award className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium leading-snug">{cert.name[locale]}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {cert.issuer} · {cert.date[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
