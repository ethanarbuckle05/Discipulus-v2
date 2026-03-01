# CLAUDE.md

## Project Overview

Discipulus Ventures website — a Next.js 15 App Router site for a venture capital / startup cohort program.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Runtime:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 with custom config; no CSS modules
- **Animation:** Framer Motion 11, React Reveal
- **Icons:** Lucide React, React Icons
- **Package manager:** Yarn

## Commands

```bash
yarn dev      # Start dev server at localhost:3000
yarn build    # Production build
yarn start    # Run production server
yarn lint     # ESLint
```

## Project Structure

```
app/
  components/       # Shared components
    cohort/         # Cohort-page-specific components
    carousel/       # Embla carousel
  data/             # Static TypeScript data files (team, founders, sponsors, etc.)
  cohort/           # /cohort route
  team/             # /team route
  cookies/          # /cookies route
  layout.tsx        # Root layout (metadata, fonts)
  page.tsx          # Home page
  globals.css       # Global styles
lib/
  utils.ts          # cn() helper (clsx + tailwind-merge)
public/
  videos/           # MP4s tracked via Git LFS
  ...               # Images organized by subject (founders, speakers, logos, etc.)
```

## Key Conventions

- All interactive components use `"use client"` at the top
- Component pattern: `const Foo: React.FC<FooProps> = ({ ... }) => { ... }`
- Use `cn()` from `lib/utils.ts` for conditional Tailwind classes
- Static page data lives in `app/data/` as typed TypeScript files
- Path alias `@/` maps to project root

## Video Assets

- Large videos live in `public/videos/` and are tracked with **Git LFS**
- Always compress before committing: target H.264 1080p, CRF 22–26, `-movflags +faststart`
- Always generate a poster image alongside each video
- `next.config.js` sets 1-year immutable cache headers for `/videos/*`

## Deployment

Deployed on **Vercel**. Push to `main` triggers production deploy.
