import {
  siAnthropic,
  siC,
  siClaude,
  siCloudflare,
  siDocker,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siGo,
  siJavascript,
  siLangchain,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siRatatui,
  siReact,
  siRedis,
  siRust,
  siShadcnui,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWhatsapp,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/utils";

const icons: Record<string, SimpleIcon> = {
  Go: siGo,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  C: siC,
  Java: siOpenjdk,
  Rust: siRust,
  React: siReact,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  Express: siExpress,
  FastAPI: siFastapi,
  TailwindCSS: siTailwindcss,
  "shadcn/ui": siShadcnui,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Supabase: siSupabase,
  SQLite: siSqlite,
  Docker: siDocker,
  Linux: siLinux,
  "Git & GitHub": siGit,
  "GitHub API": siGithub,
  Cloudflare: siCloudflare,
  Vercel: siVercel,
  LangChain: siLangchain,
  "Claude Code": siClaude,
  Anthropic: siAnthropic,
  Ratatui: siRatatui,
  "WhatsApp API": siWhatsapp,
};

function isDarkHex(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b < 60;
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      aria-hidden
      className={cn("size-3 shrink-0", isDarkHex(icon.hex) && "dark:invert", className)}
    >
      <path d={icon.path} />
    </svg>
  );
}
