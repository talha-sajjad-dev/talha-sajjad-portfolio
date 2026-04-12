# Talha Sajjad — Portfolio

A production-ready developer portfolio built with **Next.js** (App Router). It presents projects, experience, skills, and testimonials in a clear layout suitable for recruiters and clients.

## Live site

**https://talha-sajjad-portfolio.netlify.app**

👉 [https://talhasajjad.github.io ](https://talha-sajjad-portfolio.netlify.app/)

## Overview

The site is **static-first** (SSG): fast loads, solid SEO, and no custom backend. Content is driven by typed data in TypeScript (`data/projects`, `data/skills`, `data/reviews`).

**Highlights**

- Project catalog with category filters and shareable query URLs
- Featured work section with case-study detail pages and image galleries
- Experience timeline and skills grid with category filtering
- Testimonials in a responsive masonry layout
- Contact section with email, WhatsApp, and LinkedIn

## Tech stack

| Area        | Technologies                          |
| ----------- | ------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19     |
| Language    | TypeScript                            |
| Styling     | Tailwind CSS                          |
| Icons       | React Icons                           |
| Motion      | Framer Motion                         |
| Layout      | react-masonry-css (testimonials)      |

## Project structure

```
app/            # Routes and layouts (App Router)
components/     # UI components
data/           # Projects, skills, reviews (typed)
public/         # Static assets
```

## Getting started

**Requirements:** Node.js 20+ (recommended), npm.

```bash
git clone https://github.com/full-stack-website-developer/talha-sajjad-portfolio.git
cd talha-sajjad-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Local development server |
| `npm run build` | Production build     |
| `npm run start` | Run production server  |
| `npm run lint`  | ESLint                 |

## Deployment

This project is deployed on **Netlify**. Any host that supports Next.js (Node runtime or static export, depending on your setup) is suitable; **Vercel** is a common alternative with minimal configuration.

## Contact

- **Email:** [talhasajjad148@gmail.com](mailto:talhasajjad148@gmail.com)
- **LinkedIn:** [linkedin.com/in/talha-sajjad-dev](https://www.linkedin.com/in/talha-sajjad-dev)
- **GitHub:** [github.com/talha-sajjad-dev](https://github.com/talha-sajjad-dev)
