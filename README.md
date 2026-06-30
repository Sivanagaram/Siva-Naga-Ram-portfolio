# Siva Naga Ram — Developer Portfolio

A world-class, performance-first developer portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. Premium glassmorphism UI, an aurora-gradient signature, smooth Framer Motion animations, dark/light mode, and a working contact form.

## Features

- Aurora-gradient design system with glassmorphism and dark/light mode
- Animated hero with typewriter effect and floating accents
- Scroll-triggered reveals, animated counters, custom cursor, particle field
- Scroll progress bar, scroll-to-top, page loader, smooth section nav
- Projects with live search + filters and featured badges
- Working contact form (React Hook Form + Zod + EmailJS) with success/error toasts
- SEO: metadata, OpenGraph, Twitter cards, sitemap, robots, manifest, favicon
- Accessible: semantic HTML, ARIA labels, keyboard focus, reduced-motion support
- Fully responsive, code-split, lazy-loaded — built for a 95+ Lighthouse score

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · React Hook Form · Zod · EmailJS · Sonner (toasts)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Configuration

### Contact form (EmailJS)

The form works out of the box in development (it simulates a successful send). To send real emails:

1. Create an account at [emailjs.com](https://www.emailjs.com/) and add an email service + template.
2. Copy `.env.example` to `.env.local` and fill in your keys:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should accept the variables: `name`, `email`, `subject`, `message`.

### Personalize your content

All copy and data live in **`src/constants/index.ts`** — edit one file to update your name, role, bio, skills, projects, experience, certifications, achievements, and social links.

Replace these placeholder assets in `public/`:
- `resume.pdf` — your actual résumé
- `favicon.svg` — your icon (or add a PNG and update `src/app/layout.tsx`)
- `og.svg` — your social share image (1200×630)
- Add `avatar.jpg` and swap the placeholder in `src/components/sections/Hero.tsx` for a Next.js `<Image>`

## Project structure

```
src/
  app/          # routes, layout, SEO (sitemap, robots, manifest), 404
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, About, Skills, Projects, Experience, Certifications, Contact
    ui/         # reusable primitives (buttons, reveal, cursor, theme, etc.)
  constants/    # all site content/data
  hooks/        # custom hooks (typewriter, scroll, counter, active section)
  lib/          # utilities (cn)
  types/        # shared TypeScript types
public/         # static assets
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

## License

MIT — use it freely for your own portfolio.
