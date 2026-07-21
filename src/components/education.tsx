"use client";

import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";
import { ui } from "@/lib/content";

export function Education() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <section>
      <SectionHeading id="education" path="education" title={t.sections.education} />
      <div className="rounded-xl border border-dashed border-border p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border border-dashed border-border bg-secondary/50">
              <GraduationCap className="size-4 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">{t.education.degree}</h3>
              <p className="text-sm text-muted-foreground">{t.education.school}</p>
            </div>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{t.education.eduPeriod}</p>
        </div>
        <p className="mt-4 mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {t.education.coursework}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {t.education.eduDetails.map((course) => (
            <Badge
              key={course}
              variant="secondary"
              className="border border-dashed border-border bg-secondary/50 font-mono text-xs font-normal"
            >
              {course}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
