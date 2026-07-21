# swe-portfolio

Personal portfolio of **PARE Mibienpan Joseph** — software developer & aspiring software engineer from Burkina Faso. Built to showcase my skills, education, certifications and the projects I'm most proud of.

## Features

- **Bilingual** — English / French toggle, persisted per visitor
- **Dark / light theme** — dark by default
- **Live GitHub activity** — contribution heatmap fetched server-side, revalidated daily
- **Featured projects** — real screenshots, tech chips with brand icons, GitHub + live links
- **CV download** and direct contact actions
- Fully responsive, zero console errors, accessible link semantics

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS + shadcn/ui |
| Fonts | Geist Sans / Mono, Instrument Serif |
| Icons | lucide-react + simple-icons |
| Theming | next-themes |
| Deploy | Vercel |

## Structure

```
src/
├── app/            # layout, page, favicon
├── components/     # nav, hero, education, projects, certifications, toolkit, footer
│   └── ui/         # shadcn/ui primitives
└── lib/
    ├── content.ts  # ALL site copy — EN + FR, projects, certs, skills
    └── github.ts   # contribution heatmap fetcher
```

All text lives in `src/lib/content.ts` — edit both locales in one place, no component changes needed.

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # production build
```
