"use client";

import { useLocale } from "@/components/providers";
import { ui } from "@/lib/content";
import type { ContributionData, ContributionDay } from "@/lib/github";

const levelClasses = [
  "bg-neutral-200 dark:bg-neutral-800",
  "bg-neutral-400 dark:bg-neutral-600",
  "bg-neutral-500 dark:bg-neutral-500",
  "bg-neutral-700 dark:bg-neutral-300",
  "bg-neutral-950 dark:bg-white",
];

const monthNames = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
};

function toWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  let week: ContributionDay[] = [];
  for (const day of days) {
    if (new Date(day.date + "T00:00:00Z").getUTCDay() === 0 && week.length) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  }
  if (week.length) weeks.push(week);
  return weeks;
}

export function ContributionGraph({ data }: { data: ContributionData }) {
  const { locale } = useLocale();
  const t = ui[locale];
  const weeks = toWeeks(data.days);

  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const month = new Date(week[0].date + "T00:00:00Z").getUTCMonth();
    if (month !== lastMonth) {
      // skip a label crowded against the previous one
      const prev = monthLabels[monthLabels.length - 1];
      if (!prev || i - prev.index >= 3) {
        monthLabels.push({ index: i, label: monthNames[locale][month] });
      }
      lastMonth = month;
    }
  });

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
        <div className="relative mb-1 h-4 font-mono text-[10px] text-muted-foreground">
          {monthLabels.map((m) => (
            <span
              key={`${m.label}-${m.index}`}
              className="absolute"
              style={{ left: `${(m.index / weeks.length) * 100}%` }}
            >
              {m.label}
            </span>
          ))}
        </div>
        <div className="flex gap-[3px]" aria-hidden>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-1 flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, di) => {
                const day = week.find(
                  (d) => new Date(d.date + "T00:00:00Z").getUTCDay() === di,
                );
                return (
                  <div
                    key={di}
                    title={day ? `${day.date}: ${day.count}` : undefined}
                    className={`aspect-square w-full rounded-[2px] ${
                      day ? levelClasses[day.level] : "bg-transparent"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-muted-foreground">
        <p>{t.hero.contribTotal.replace("{count}", String(data.total))}</p>
        <div className="flex items-center gap-1">
          <span>{t.hero.less}</span>
          {levelClasses.map((c) => (
            <span key={c} className={`size-2.5 rounded-[2px] ${c}`} />
          ))}
          <span>{t.hero.more}</span>
        </div>
      </div>
    </div>
  );
}
