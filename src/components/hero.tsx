"use client";

import Image from "next/image";
import { BadgeCheck, FileText, Mail, MapPin, Send } from "lucide-react";
import { GithubLogo, XLogo } from "@/components/brand-icons";
import { ContributionGraph } from "@/components/contribution-graph";
import type { ContributionData } from "@/lib/github";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/tech-icon";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/providers";
import { links, ui } from "@/lib/content";

const bioBadges = ["Go", "TypeScript", "Python"];

export function Hero({
  contributions,
}: {
  contributions: ContributionData | null;
}) {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <section id="top" className="pt-10">
      <div className="relative">
        <div className="overflow-hidden rounded-xl border border-dashed border-border">
          <Image
            src="/images/banner-hero.jpeg"
            alt=""
            width={1472}
            height={452}
            priority
            className="h-44 w-full object-cover sm:h-56"
          />
        </div>
        <div className="absolute -bottom-10 left-6 sm:left-10">
          <Image
            src="/images/avatar.jpg"
            alt="Portrait of PARE Mibienpan Joseph"
            width={112}
            height={112}
            priority
            className="size-24 rounded-2xl border-4 border-background object-cover shadow-lg sm:size-28"
          />
        </div>
        <p
          aria-hidden
          className="absolute -bottom-9 left-36 hidden -rotate-6 font-mono text-[10px] tracking-widest text-muted-foreground sm:left-44 sm:block"
        >
          ↖ {t.hero.hireMe}
        </p>
      </div>

      <div className="mt-14">
        <h1 className="font-serif text-5xl italic sm:text-6xl">
          PARE Mibienpan Joseph{" "}
          <BadgeCheck className="inline size-7 -translate-y-1 fill-sky-500 text-background" />
        </h1>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          {t.hero.role} · {t.hero.location}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {t.hero.bio1}
          <strong className="font-semibold text-foreground">{t.hero.bio1Bold}</strong>
          {t.hero.bio2}
          <strong className="font-semibold text-foreground">{t.hero.bio2Bold}</strong>
          {t.hero.bio3}
          {bioBadges.map((tech, i) => (
            <span key={tech}>
              <Badge
                variant="outline"
                className="mx-0.5 translate-y-[-1px] gap-1 border-dashed font-mono text-xs"
              >
                <TechIcon name={tech} />
                {tech}
              </Badge>
              {i < bioBadges.length - 1 && " "}
            </span>
          ))}
          {t.hero.bio4}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            {t.hero.available}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
            <MapPin className="size-3" />
            {t.hero.location}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button nativeButton={false} render={<a href="/cv.pdf" target="_blank" rel="noreferrer" />}>
            <FileText className="size-4" />
            {t.hero.cv}
          </Button>
          <Button variant="outline" nativeButton={false} render={<a href={links.email} />}>
            <Send className="size-4" />
            {t.hero.contact}
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-4 text-muted-foreground">
          <a
            href={links.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="transition-colors hover:text-foreground"
          >
            <XLogo className="size-5" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubLogo className="size-5" />
          </a>
          <a
            href={links.email}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>

        {contributions && <ContributionGraph data={contributions} />}
      </div>
    </section>
  );
}
