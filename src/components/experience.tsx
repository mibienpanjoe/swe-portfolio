"use client";

import { BriefcaseBusiness } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";

export function Experience() {
  const { locale } = useLocale();
  const french = locale === "fr";

  return (
    <section aria-labelledby="experience-title">
      <SectionHeading id="experience" path="experience" title={french ? "Expérience" : "Experience"} />
      <article className="rounded-xl border border-dashed border-border p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <BriefcaseBusiness aria-hidden className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div>
              <h3 id="experience-title" className="font-semibold">{french ? "Stagiaire en ingénierie IA/ML" : "AI/ML Engineer Intern"}</h3>
              <p className="mt-1 text-sm text-muted-foreground">GO AI CORPORATION · {french ? "Équipe Data/IA" : "Data/AI team"}</p>
            </div>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{french ? "Août à septembre 2026" : "August to September 2026"}</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {french
            ? "Développement et intégration de fonctionnalités basées sur l’IA au sein de l’équipe Data/IA pour une plateforme logicielle destinée à la production."
            : "Developed and integrated AI-enabled features within the Data/AI team for a production-oriented software platform."}
        </p>
      </article>
    </section>
  );
}
