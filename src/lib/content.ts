export type Locale = "en" | "fr";

export const links = {
  github: "https://github.com/mibienpanjoe",
  x: "https://x.com/mibienpan26",
  email: "mailto:parejoseph00@gmail.com",
};

export type Project = {
  id: string;
  name: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  gradient: string;
  description: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    id: "mansa",
    name: "Mansa",
    tech: ["TypeScript", "WhatsApp API", "Mobile Money", "AI Agents"],
    github: "https://github.com/mibienpanjoe/Mansa",
    live: "https://mansa.page",
    image: "/images/projects/mansa.png",
    gradient: "from-emerald-500/60 via-teal-600/40 to-neutral-900",
    description: {
      en: "AI sales assistant that runs WhatsApp sales for West African merchants — answers customers in French 24/7, verifies Orange & Moov Money receipts, coordinates delivery and ships an end-of-day sales summary.",
      fr: "Assistant commercial IA qui gère les ventes WhatsApp des commerçants ouest-africains — répond aux clients en français 24h/24, vérifie les reçus Orange & Moov Money, coordonne les livraisons et envoie un résumé des ventes en fin de journée.",
    },
  },
  {
    id: "jex",
    name: "jex",
    tech: ["Go", "TypeScript", "Next.js", "PostgreSQL", "Docker"],
    github: "https://github.com/mibienpanjoe/jex",
    live: "https://site-henna-rho-78.vercel.app",
    image: "/images/projects/jex.jpg",
    gradient: "from-amber-500/60 via-orange-600/40 to-neutral-900",
    description: {
      en: "Open-source, self-hostable secrets manager for developer teams: Go CLI, TypeScript API and a Next.js dashboard over an encrypted, versioned vault with a full audit trail. One-command deploy via Docker Compose.",
      fr: "Gestionnaire de secrets open source et auto-hébergeable pour équipes de développeurs : CLI en Go, API TypeScript et dashboard Next.js sur un coffre chiffré et versionné avec journal d'audit complet. Déploiement en une commande via Docker Compose.",
    },
  },
  {
    id: "genius",
    name: "genius",
    tech: ["Go", "Bubble Tea", "Vision Models", "RAG"],
    github: "https://github.com/mibienpanjoe/genius",
    image: "/images/projects/genius.png",
    gradient: "from-violet-500/60 via-purple-600/40 to-neutral-900",
    description: {
      en: "Terminal study environment in Go that turns lecture PDFs/PPTs into study guides, revision Q&A and interactive quizzes — with vision-model captioning that keeps figures and notation faithful.",
      fr: "Environnement d'étude en terminal écrit en Go qui transforme les PDF/PPT de cours en fiches, Q&R de révision et quiz interactifs — avec un sous-titrage par modèle de vision fidèle aux figures et notations.",
    },
  },
  {
    id: "scholar-ops",
    name: "scholar-ops",
    tech: ["Rust", "AI", "Local-first"],
    github: "https://github.com/mibienpanjoe/scholar-ops",
    image: "/images/projects/scholar-ops.png",
    gradient: "from-rose-500/60 via-red-600/40 to-neutral-900",
    description: {
      en: "AI-powered scholarship search system that runs entirely on your machine — built in Rust for students hunting funding without giving their data away.",
      fr: "Système de recherche de bourses propulsé par l'IA qui tourne entièrement en local — écrit en Rust pour les étudiants qui cherchent un financement sans céder leurs données.",
    },
  },
  {
    id: "legalbridge",
    name: "LegalBridge",
    tech: ["Go", "RAG", "Embeddings"],
    github: "https://github.com/mibienpanjoe/LegalBridge",
    live: "https://legal-bridge-eight.vercel.app",
    image: "/images/projects/legalbridge.jpg",
    gradient: "from-sky-500/60 via-blue-600/40 to-neutral-900",
    description: {
      en: "Retrieval-Augmented Generation system for legal documents: upload legal PDFs and ask questions in plain language, answers grounded in the source text.",
      fr: "Système RAG pour documents juridiques : chargez des PDF légaux et posez vos questions en langage courant, avec des réponses ancrées dans le texte source.",
    },
  },
  {
    id: "gitread",
    name: "gitread",
    tech: ["Python", "Next.js", "GitHub API"],
    github: "https://github.com/mibienpanjoe/gitread",
    live: "https://gitread-beta.vercel.app",
    image: "/images/projects/gitread.jpg",
    gradient: "from-lime-500/60 via-green-600/40 to-neutral-900",
    description: {
      en: "Turns any public GitHub username into a structured, recruiter-ready engineering profile — language charts, activity heatmaps and job-description match scoring.",
      fr: "Transforme n'importe quel profil GitHub public en profil d'ingénieur structuré et prêt pour les recruteurs — graphiques de langages, heatmaps d'activité et score de correspondance avec une offre d'emploi.",
    },
  },
];

export type SkillGroup = {
  id: string;
  label: Record<Locale, string>;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: { en: "Languages", fr: "Langages" },
    items: ["Go", "TypeScript", "JavaScript", "Python", "C", "Java", "Rust"],
  },
  {
    id: "web",
    label: { en: "Web", fr: "Web" },
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "TailwindCSS", "shadcn/ui"],
  },
  {
    id: "cli",
    label: { en: "CLI & TUI", fr: "CLI & TUI" },
    items: ["Cobra", "Bubble Tea", "Ratatui", "Terminal UX"],
  },
  {
    id: "data",
    label: { en: "Databases", fr: "Bases de données" },
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "SQLite"],
  },
  {
    id: "cloud",
    label: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    items: ["Docker", "Linux", "Git & GitHub", "Cloudflare", "Azure", "Vercel"],
  },
  {
    id: "ai",
    label: { en: "AI & Agents", fr: "IA & Agents" },
    items: ["Agentic Workflows", "Claude Code", "LangChain", "OpenAI API", "RAG", "Embeddings"],
  },
];

export type Certification = {
  name: Record<Locale, string>;
  issuer: string;
  date: Record<Locale, string>;
};

export const certifications: Certification[] = [
  {
    name: { en: "Claude Code in Action", fr: "Claude Code in Action" },
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: { en: "Introduction to Subagents", fr: "Introduction aux sous-agents" },
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: { en: "Introduction to Agent Skills", fr: "Introduction aux Agent Skills" },
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: {
      en: "Legacy JavaScript Algorithms & Data Structures",
      fr: "Algorithmes JavaScript & structures de données",
    },
    issuer: "freeCodeCamp",
    date: { en: "August 2025", fr: "Août 2025" },
  },
  {
    name: { en: "Responsive Web Design Developer", fr: "Responsive Web Design" },
    issuer: "freeCodeCamp",
    date: { en: "June 2025", fr: "Juin 2025" },
  },
  {
    name: {
      en: "HTML5, Python & Flask — Complete Course",
      fr: "HTML5, Python & Flask — Cours complet",
    },
    issuer: "Udemy",
    date: { en: "June 2025", fr: "Juin 2025" },
  },
];

export const ui = {
  en: {
    nav: { education: "Education", projects: "Projects", certifications: "Certifications" },
    hero: {
      hireMe: "HIRE ME",
      role: "Software Developer · Aspiring Software Engineer",
      bio1: "I'm a software developer who builds ",
      bio1Bold: "AI-powered products",
      bio2: " end to end — from ",
      bio2Bold: "Go CLIs and terminal UIs",
      bio3: " to full-stack web apps with ",
      bio4: ". Focused on agentic systems that do real work for real people.",
      location: "Burkina Faso",
      available: "Available for work",
      cv: "CV",
      contact: "Contact",
      contribTotal: "Total {count} contributions",
      less: "Less",
      more: "More",
    },
    sections: {
      toolkit: "Toolkit",
      education: "Education",
      certifications: "Certifications",
      projects: "Projects",
    },
    education: {
      degree: "Bachelor of Computer Science",
      school: "Burkina Institute of Technology",
      eduPeriod: "2024 — 2027 · In progress",
      eduDetails: [
        "Theory of Computation",
        "Web Programming",
        "OOP Analysis & Design",
        "Data Structures & Algorithms",
      ],
      coursework: "Relevant coursework",
    },
    projects: {
      viewAll: "View all projects",
      code: "Code",
      live: "Live",
    },
    footer: {
      offCourt: "Off the keyboard: basketball, anime, and shipping side quests.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: { education: "Éducation", projects: "Projets", certifications: "Certifications" },
    hero: {
      hireMe: "EMBAUCHEZ-MOI",
      role: "Développeur logiciel · Aspirant ingénieur logiciel",
      bio1: "Je suis un développeur logiciel qui construit des ",
      bio1Bold: "produits propulsés par l'IA",
      bio2: " de bout en bout — des ",
      bio2Bold: "CLI Go et interfaces terminal",
      bio3: " aux applications web full-stack avec ",
      bio4: ". Concentré sur des systèmes agentiques qui font un vrai travail pour de vraies personnes.",
      location: "Burkina Faso",
      available: "Disponible pour un poste",
      cv: "CV",
      contact: "Contacter",
      contribTotal: "Total {count} contributions",
      less: "Moins",
      more: "Plus",
    },
    sections: {
      toolkit: "Boîte à outils",
      education: "Éducation",
      certifications: "Certifications",
      projects: "Projets",
    },
    education: {
      degree: "Licence en Informatique",
      school: "Burkina Institute of Technology",
      eduPeriod: "2024 — 2027 · En cours",
      eduDetails: [
        "Théorie du calcul",
        "Programmation Web",
        "Analyse & conception OO",
        "Structures de données & algorithmes",
      ],
      coursework: "Cours pertinents",
    },
    projects: {
      viewAll: "Voir tous les projets",
      code: "Code",
      live: "Démo",
    },
    footer: {
      offCourt: "Loin du clavier : basketball, anime, et side quests à livrer.",
      rights: "Tous droits réservés.",
    },
  },
} as const;

export type UiDict = (typeof ui)[Locale];
