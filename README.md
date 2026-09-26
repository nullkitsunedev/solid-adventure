# School Web App

Next.js 14 + Sanity rebuild for School website.

This repository contains the public site, a Sanity Studio entry point, and the content model scaffolding needed to move the site off static reference data.

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Sanity CMS

## Project Structure

```txt
next-school-site/
  app/
    about/
    contact/
    events/
    gallery/
    notices/
    studio/
    teachers/
    globals.css
    layout.tsx
    page.tsx
  components/
  lib/
  public/
  sanity/
  scripts/
  next.config.mjs
  tailwind.config.ts
  postcss.config.mjs
  package.json
  tsconfig.json
```

## Routes

- `/` - homepage
- `/about` - about page
- `/contact` - contact page
- `/events` - events listing
- `/gallery` - gallery page
- `/notices` - notices listing
- `/notices/[slug]` - notice details
- `/teachers` - teachers page
- `/studio` - Sanity Studio

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Available Scripts

- `npm run dev` - start the Next.js dev server
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run Next.js linting
- `npm run seed:cms` - seed Sanity content from `scripts/seed-sanity.mjs`

## Content Source

The site currently uses local data and helpers from `lib/` while the Sanity integration is being completed.

## Assets

Reference images are stored in `public/images` and are used by the homepage and supporting pages.

## Sanity

The `sanity/` directory is reserved for schemas and Studio configuration.

The Studio route is available at `/studio`, and the content model is intended to cover school content such as:

- notices
- events
- gallery items
- posts
- study materials

## Environment Variables

Create a `.env.local` file when connecting Sanity:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-09-03
SANITY_AUTH_TOKEN=your_write_token_for_seeding_only
SANITY_WEBHOOK_SECRET=your_webhook_secret
```

## Deployment

The project is ready to deploy on Vercel.

1. Push the repository to GitHub or another Git provider.
2. Import it into Vercel.
3. Add the required environment variables.
4. Deploy.

If Sanity is connected, also configure any required webhook-based revalidation and image remote patterns in `next.config.mjs`.

## Notes

- The homepage branding is `Newaz Ali Ideal School`.
- Fonts are loaded from Google Fonts in `app/layout.tsx`.
- The site uses a visual scaffold that can be connected to Sanity without changing the route structure.

