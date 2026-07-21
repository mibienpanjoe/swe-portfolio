"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubLogo } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/tech-icon";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/providers";
import { links, projects, ui } from "@/lib/content";

export function Projects() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <section>
      <SectionHeading id="projects" path="projects" title={t.sections.projects} />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-dashed border-border transition-colors hover:border-solid hover:border-foreground/30"
          >
            <a
              href={project.live ?? project.github}
              target="_blank"
              rel="noreferrer"
              className={`relative flex h-36 items-end overflow-hidden bg-gradient-to-br p-4 ${project.gradient}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, 336px"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <span className="font-mono text-xl font-semibold text-white drop-shadow-sm">
                  {project.name}
                </span>
              )}
            </a>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{project.name}</h3>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    nativeButton={false}
                    render={
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} — ${t.projects.code}`}
                      />
                    }
                  >
                    <GithubLogo className="size-4" />
                  </Button>
                  {project.live && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      nativeButton={false}
                      render={
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} — ${t.projects.live}`}
                        />
                      }
                    >
                      <ArrowUpRight className="size-4" />
                    </Button>
                  )}
                </div>
              </div>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description[locale]}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="gap-1 border border-dashed border-border bg-secondary/50 font-mono text-[10px] font-normal"
                  >
                    <TechIcon name={tech} className="size-2.5" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <a href={`${links.github}?tab=repositories`} target="_blank" rel="noreferrer" />
          }
        >
          {t.projects.viewAll}
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
