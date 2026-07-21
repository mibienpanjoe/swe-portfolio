"use client";

import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/tech-icon";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";
import { skillGroups, ui } from "@/lib/content";

export function Toolkit() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <section>
      <SectionHeading id="toolkit" path="toolkit" title={t.sections.toolkit} />
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {group.label[locale]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="gap-1 border border-dashed border-border bg-secondary/50 font-mono text-xs font-normal"
                >
                  <TechIcon name={item} />
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
