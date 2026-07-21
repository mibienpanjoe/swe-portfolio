"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/providers";
import { ui } from "@/lib/content";

export function Nav() {
  const { locale, setLocale } = useLocale();
  const { setTheme } = useTheme();
  const t = ui[locale];

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
            onClick={() =>
              setTheme(
                document.documentElement.classList.contains("dark")
                  ? "light"
                  : "dark",
              )
            }
            aria-label="Toggle theme"
          >
            {/* the active theme is a class on <html>, so CSS picks the icon
                and the server render never guesses wrong */}
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
