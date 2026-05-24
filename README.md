# Jiliang Cattery

A production-ready website for **Jiliang Cattery**, a British Shorthair breeder with locations in Atlanta, GA and Toronto, Canada.

Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in RESEND_API_KEY and other values

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (base-ui)
- **Fonts:** Playfair Display (headings), Inter (body) via next/font
- **Forms:** react-hook-form + zod v4
- **Email:** Resend (wired but commented out — uncomment in API routes)
- **Icons:** Lucide React

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, trust strip, featured kittens, testimonials |
| `/available` | Filterable kitten grid with detail dialog |
| `/our-cats` | Breeding program — queens and kings by location |
| `/about` | Cattery story, philosophy, breed info |
| `/process` | Adoption walkthrough, pricing, transport, health guarantee |
| `/faq` | 12 categorized accordion items |
| `/apply` | 6-step adoption application form |
| `/contact` | Contact form + both location info blocks |
| `/gallery` | Masonry photo grid with lightbox |

## Admin Panel

The site includes an admin panel at `/admin` for managing kittens and breeding cats (CRUD + photo uploads).

**Default credentials:**

- **Username:** *(none — single-password login)*
- **Password:** `admin123` (set via `ADMIN_PASSWORD` in `.env.local`)

Change the password before deploying by updating `ADMIN_PASSWORD` in your environment variables. Also generate a strong random value for `JWT_SECRET`.

| Route | Description |
|---|---|
| `/admin` | Dashboard with kitten/cat counts |
| `/admin/kittens` | List, create, edit, delete kittens |
| `/admin/cats` | List, create, edit, delete breeding cats |

Data is stored in `data/kittens.json` and `data/cats.json` (auto-seeded on first run). Uploaded photos are saved to `public/images/cats/`.

## Features

- **Location switcher** — Atlanta/Toronto toggle in the header filters kittens, currency (USD/CAD), testimonials, and tab defaults site-wide. Persisted in localStorage.
- **Multi-step application form** — 6 steps with per-step zod validation, progress indicator, and review screen.
- **Honeypot spam protection** — Hidden field on both contact and application forms.
- **SEO** — Per-page metadata, sitemap.xml, robots.txt, OpenGraph tags.
- **Accessibility** — Skip-to-content link, semantic HTML, focus styles, proper heading hierarchy.

## Deployment (Vercel)

1. Push to GitHub
2. Import in Vercel
3. Set environment variables from `.env.example`
4. Configure custom domain
5. Set up Resend domain verification
6. Uncomment Resend email code in `app/api/apply/route.ts` and `app/api/contact/route.ts`

## Placeholder Content to Replace Before Launch

- [ ] **Photos:** Replace `/public/images/cats/placeholder.svg` with real cat/kitten photos
- [ ] **Addresses:** Update placeholder addresses in footer and contact page
- [ ] **Phone numbers:** Replace `(404) 555-0123` and `(416) 555-0456`
- [ ] **Social links:** Update `#` hrefs in footer to real Instagram/Facebook/TikTok URLs
- [ ] **TICA registration:** Replace `#00000` with real TICA cattery number
- [ ] **Prices:** Verify USD and CAD pricing in `lib/kittens.ts`
- [ ] **Kitten data:** Update `lib/kittens.ts` with real kittens
- [ ] **Breeding cat data:** Update `lib/cats.ts` with real breeding cats
- [ ] **Testimonials:** Update `lib/testimonials.ts` with real family quotes
- [ ] **Gallery images:** Update `lib/gallery.ts` with real photo paths
- [ ] **Domain:** Update sitemap and metadata with production domain
- [ ] **Resend API:** Uncomment email sending in API routes and add real API key
