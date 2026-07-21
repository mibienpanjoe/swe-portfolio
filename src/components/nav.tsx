"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/providers";
import { ui } from "@/lib/content";

export function Nav() {
  const { locale, setLocale } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = ui[locale];

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-dashed border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center gap-5 px-4 py-3">
        <a href="#top" className="shrink-0">
          <Image
            src="/images/l-mark.png"
            alt="PARE Mibienpan Joseph"
            width={28}
            height={28}
            className="dark:invert"
          />
        </a>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#education" className="transition-colors hover:text-foreground">
            {t.nav.education}
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground">
            {t.nav.projects}
          </a>
          <a
            href="#certifications"
            className="hidden transition-colors hover:text-foreground sm:block"
          >
            {t.nav.certifications}
          </a>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-xs"
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
          >
            {locale === "en" ? "FR" : "EN"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
