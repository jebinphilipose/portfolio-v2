# Jebin Philipose — Portfolio

A personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **MDX** for static content. Designed for a perfect Lighthouse score.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Content**: MDX via `@next/mdx` + `gray-matter`
- **Icons**: `lucide-react`
- **Theming**: `next-themes` (dark/light mode)
- **Font**: Space Grotesk via `next/font/google`
- **Images**: `next/image` for automatic optimization

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/about`.

## Project Structure

```
src/
├── app/
│   ├── about/         # About page
│   ├── blog/
│   │   ├── page.tsx   # Blog listing
│   │   └── [slug]/    # Blog post detail
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout with ThemeProvider
│   ├── page.tsx       # Redirects to /about
│   └── globals.css    # Global styles + Tailwind
├── components/
│   ├── Footer.tsx     # Footer with Heart icon
│   ├── Nav.tsx        # Navigation with active state
│   ├── PageShell.tsx  # Shared layout wrapper
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx  # Moon/Sun toggle button
├── content/
│   ├── blog/          # MDX blog posts
│   └── projects/      # MDX project entries
└── lib/
    └── content.ts     # MDX file reader + frontmatter parser
```

## Adding Content

### New Blog Post

Create `src/content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
category: "Backend"
excerpt: "A brief description shown on the listing page."
slug: "your-post-slug"
readingTime: "5 min read"
---

Your MDX content here...
```

### New Project

Create `src/content/projects/your-project.mdx`:

```mdx
---
title: "Project Name"
slug: "project-name"
description: "Short description."
tags: ["React", "TypeScript"]
featured: false
image: "https://your-image-url.com/image.jpg"
imageAlt: "Project screenshot"
githubUrl: "https://github.com/you/project"
order: 4
---

Your MDX content here...
```

## Lighthouse Optimizations

- `next/image` with `priority` on above-the-fold images, `fill` + `sizes` on cards
- `next/font/google` with `display: 'swap'` — zero layout shift
- `generateStaticParams` for static blog post generation
- `aria-*` attributes on all interactive elements
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- `focus-visible` styles for keyboard navigation
- `rel="noopener noreferrer"` on all external links
- `viewport` export with `themeColor` for PWA
