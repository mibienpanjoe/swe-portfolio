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
    id: "gitread",
    name: "Gitread",
    tech: ["Python", "FastAPI", "Next.js", "Redis", "AI"],
    github: "https://github.com/mibienpanjoe/gitread",
    live: "https://gitread-beta.vercel.app",
    image: "/images/projects/gitread.png",
    gradient: "from-cyan-500/60 via-teal-600/40 to-neutral-900",
    description: {
      en: "AI-powered web app that turns a public GitHub profile into a structured developer profile for recruiters, with language charts, activity heatmaps and skill analysis. Compares your profile with job descriptions to highlight matching skills and gaps.",
      fr: "Application web qui transforme un profil GitHub public en profil développeur structuré pour les recruteurs, avec graphiques de langages, calendrier d’activité et analyse des compétences par IA. Compare votre profil aux offres d’emploi pour identifier les compétences correspondantes et les écarts.",
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
    id: "lyn",
    name: "Lyn",
    tech: ["Rust", "Tauri", "Svelte", "SQLite"],
    github: "https://github.com/mibienpanjoe/lyn",
    gradient: "from-emerald-500/60 via-teal-600/40 to-neutral-900",
    description: {
      en: "Local-first desktop app for developers that captures notes, screenshots and voice memos without breaking flow. Associates captures with their project and Git branch, with a chronological library and local search. Core data stays on your machine.",
      fr: "Application de bureau pour développeurs qui capture notes, captures d’écran et mémos vocaux sans interrompre le travail. Associe chaque capture à son projet et à sa branche Git, avec une bibliothèque chronologique et une recherche locale. Les données restent sur votre machine.",
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
      en: "Terminal study environment in Go that turns lecture PDFs/PPTs into study guides, revision Q&A and interactive quizzes, with vision-model captioning that keeps figures and notation faithful.",
      fr: "Environnement d'étude en terminal écrit en Go qui transforme les PDF/PPT de cours en fiches, Q&R de révision et quiz interactifs, avec un sous-titrage par modèle de vision fidèle aux figures et notations.",
    },
  },
  {
    id: "stipen",
    name: "Stipen",
    tech: ["Rust", "Node.js", "AI Agents", "Ratatui"],
    github: "https://github.com/mibienpanjoe/stipen",
    image: "/images/projects/scholar-ops.png",
    gradient: "from-rose-500/60 via-red-600/40 to-neutral-900",
    description: {
      en: "AI scholarship assistant for the terminal that checks eligibility, scores opportunities against your profile and tracks application deadlines. Includes a Rust dashboard, with your profile and tracker stored locally.",
      fr: "Assistant IA de recherche de bourses en terminal qui vérifie l’éligibilité, évalue les opportunités selon votre profil et suit les échéances de candidature. Comprend un tableau de bord en Rust, avec le profil et le suivi conservés en local.",
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
    items: ["Go", "Python", "TypeScript", "Rust", "C"],
  },
  {
    id: "web",
    label: { en: "Development", fr: "Développement" },
    items: ["React", "Next.js", "Svelte", "Tauri", "Node.js", "Express", "FastAPI", "Gin"],
  },
  {
    id: "cli",
    label: { en: "CLI & TUI", fr: "CLI & TUI" },
    items: ["Cobra", "Bubble Tea", "Ratatui", "Terminal UX"],
  },
  {
    id: "data",
    label: { en: "Databases", fr: "Bases de données" },
    items: ["PostgreSQL", "pgvector", "MongoDB", "SQLite", "Redis"],
  },
  {
    id: "cloud",
    label: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    items: ["Docker", "AWS", "CI/CD", "Terraform", "Linux", "Git & GitHub"],
  },
  {
    id: "ai",
    label: { en: "AI & Agents", fr: "IA & Agents" },
    items: ["Agentic Workflows", "Claude Code", "LangChain", "OpenAI API", "RAG", "Embeddings", "Vector Search", "AI Agents", "Prompt Engineering", "Neural Networks"],
  },
  {
    id: "data-analysis",
    label: { en: "Data", fr: "Données" },
    items: ["NumPy", "Pandas", "Data Cleaning"],
  },
];

export type Certification = {
  preview?: string;
  file?: string;
  verify?: string;
  name: Record<Locale, string>;
  issuer: string;
  date: Record<Locale, string>;
};

export const certifications: Certification[] = [
  {
    name: { en: "Learn AWS", fr: "Apprendre AWS" },
    file: "/certificates/bootdev-aws.png",
    issuer: "Boot.dev",
    date: { en: "September 2026", fr: "Septembre 2026" },
  },
  {
    name: { en: "Learn Docker", fr: "Apprendre Docker" },
    issuer: "Boot.dev",
    date: { en: "August 2026", fr: "Août 2026" },
    file: "/certificates/bootdev-docker.png",
  },
  {
    name: { en: "Learn Linux", fr: "Apprendre Linux" },
    issuer: "Boot.dev",
    date: { en: "August 2026", fr: "Août 2026" },
    file: "/certificates/bootdev-linux.png",
  },
  {
    name: {
      en: "Cloud Computing Fundamentals",
      fr: "Fondamentaux du cloud computing",
    },
    issuer: "Educative",
    file: "/certificates/educative-cloud.png",
    date: { en: "August 2026", fr: "Août 2026" },
  },
  {
    name: { en: "Claude Code in Action", fr: "Claude Code in Action" },
    file: "/certificates/claude-code.pdf",
    preview: "/certificates/claude-code-preview.png",
    verify: "https://verify.skilljar.com/c/k4ety3t79bf5",
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: { en: "Introduction to Subagents", fr: "Introduction aux sous-agents" },
    file: "/certificates/subagents.pdf",
    preview: "/certificates/subagents-preview.png",
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: { en: "Introduction to Agent Skills", fr: "Introduction aux Agent Skills" },
    file: "/certificates/agent-skills.pdf",
    preview: "/certificates/agent-skills-preview.png",
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
  },
  {
    name: { en: "AI Fluency for Students", fr: "Maîtrise de l’IA pour les étudiants" },
    issuer: "Anthropic",
    date: { en: "March 2026", fr: "Mars 2026" },
    file: "/certificates/ai-fluency.pdf",
    preview: "/certificates/ai-fluency-preview.png",
  },
  {
    name: {
      en: "Legacy JavaScript Algorithms & Data Structures",
      fr: "Algorithmes JavaScript & structures de données",
    },
    issuer: "freeCodeCamp",
    file: "/certificates/freecodecamp-javascript.png",
    verify: "https://www.freecodecamp.org/certification/fcc79b293b5-13b0-4d34-bd66-94e1cfc18817/javascript-algorithms-and-data-structures",
    date: { en: "August 2025", fr: "Août 2025" },
  },
  {
    name: { en: "Responsive Web Design Developer", fr: "Responsive Web Design" },
    file: "/certificates/freecodecamp-responsive-web-design.png",
    verify: "https://www.freecodecamp.org/certification/fcc79b293b5-13b0-4d34-bd66-94e1cfc18817/responsive-web-design",
    issuer: "freeCodeCamp",
    date: { en: "June 2025", fr: "Juin 2025" },
  },
  {
    name: {
      en: "HTML5, Python & Flask: Complete Course",
      fr: "HTML5, Python & Flask : cours complet",
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
      role: "Fullstack Software Engineer",
      bio1: "I'm a software developer who builds ",
      bio1Bold: "AI-powered products",
      bio2: " end to end: from ",
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
        "OOAD",
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
      role: "Ingénieur logiciel full-stack",
      bio1: "Je suis un développeur logiciel qui construit des ",
      bio1Bold: "produits propulsés par l'IA",
      bio2: " de bout en bout : des ",
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
        "OOAD",
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
