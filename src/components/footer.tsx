"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubLogo, XLogo } from "@/components/brand-icons";

import { useLocale } from "@/components/providers";
import { links, ui } from "@/lib/content";

export function Footer() {
  const { locale } = useLocale();
  const t = ui[locale];

  return (
    <footer className="mt-20">
      <div className="relative overflow-hidden rounded-xl border border-dashed border-border">
        <Image
          src="/images/banner-glitch.jpeg"
          alt=""
          width={735}
          height={397}
          className="h-28 w-full object-cover object-[25%_center] opacity-70"
        />
        <p className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
          {t.footer.offCourt}
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <div className="flex gap-4 text-muted-foreground">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="transition-colors hover:text-foreground">
            <GithubLogo className="size-4" />
          </a>
          <a href={links.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)"
            className="transition-colors hover:text-foreground">
            <XLogo className="size-4" />
          </a>
          <a href={links.email} aria-label="Email"
            className="transition-colors hover:text-foreground">
            <Mail className="size-4" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} PARE Mibienpan Joseph. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
