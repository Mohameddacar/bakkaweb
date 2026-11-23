# Bakka Training Center Website

A responsive, accessible, and modern educational website built for **Bakka Training Center** using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

---

## 🚀 Key Features

- **Four Core Pages:**
  - **Home (`/`):** Hero section, center introduction, featured training program cards, core strengths ("Why Choose Bakka"), 4-step onboarding pathway, and trust & integrity guarantees.
  - **About (`/about`):** Detailed overview, mission, vision, four core institutional values, teaching approach, and faculty information notice.
  - **Services (`/services`):** Full breakdown of training categories (Professional Skills, Technical & Applied Skills, Corporate Training, Foundational Youth Skills), target learner demographics, what to expect, and enterprise capacity-building inquiries.
  - **Contact (`/contact`):** Verified official contact placeholders (phone, email, campus address, operating hours), interactive campus map note, quick assistance FAQ, and client-side validated contact form.
- **Form Handling & Validation:**
  - Built with **React Hook Form** and **Zod** schema validation.
  - Accessible error feedback, live validation, and demo mode messaging (ensuring no false claims of message delivery until server credentials are provided).
- **Design & UI System:**
  - Strict adherence to education/training aesthetic: clean typography, purposeful whitespace, and accessible contrast.
  - Reusable shadcn/ui components (`Button`, `Card`, `Input`, `Textarea`, `Label`, `Badge`).
  - Mobile navigation with accessible hamburger drawer, keyboard Escape key support, backdrop dismiss, and active route indicators.
- **SEO & Performance:**
  - Dynamic OpenGraph and Twitter sharing metadata.
  - Automated XML sitemap (`/sitemap.xml`) and robots policy (`/robots.txt`).
  - Skip-to-content accessible link and `prefers-reduced-motion` CSS support.
- **Content Integrity:**
  - Zero fabricated statistics, false accreditation, invented testimonials, or fake staff profiles.
  - All pending official details are centralized in `src/config/site.ts` for quick one-place updates.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Server Components) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **Icons** | lucide-react |
| **Validation** | Zod + React Hook Form |
| **Package Manager**| npm |

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── cover.png           # Center identity & visual banner
│   │   └── banner.jpeg          # Classroom training atmosphere
│   └── logo/
│       ├── logo.png            # Official Bakka emblem & logo
│       └── profile.png         # Square avatar / badge
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx        # About Page
│   │   ├── services/
│   │   │   └── page.tsx        # Services Catalog Page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact & Inquiries Page
│   │   ├── globals.css         # CSS tokens & Tailwind layers
│   │   ├── layout.tsx          # Root Layout & SEO defaults
│   │   ├── page.tsx            # Home Page
│   │   ├── robots.ts           # SEO Robots specification
│   │   └── sitemap.ts          # SEO XML Sitemap generator
│   ├── components/
│   │   ├── forms/
│   │   │   └── contact-form.tsx # React Hook Form + Zod validator
│   │   ├── layout/
│   │   │   ├── site-header.tsx # Header & mobile navigation drawer
│   │   │   └── site-footer.tsx # Footer & contact channel strip
│   │   ├── sections/
│   │   │   ├── call-to-action.tsx # Reusable CTA banner
│   │   │   ├── feature-card.tsx   # Core strength & value cards
│   │   │   ├── page-hero.tsx      # Subpage hero with breadcrumbs
│   │   │   ├── section-heading.tsx# Standardized section headings
│   │   │   └── service-card.tsx   # Detailed training service card
│   │   └── ui/
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   ├── config/
│   │   └── site.ts             # Centralized editable site information & placeholders
│   ├── lib/
│   │   └── utils.ts            # Classnames merger (clsx + tailwind-merge)
│   └── types/
│       └── lucide-react.d.ts   # Icon type declarations
├── components.json             # shadcn/ui configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- Node.js (version 18.18.0 or newer; recommended v20+ or v24)
- npm (version 9+)

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build & Type Checks
```bash
# TypeScript type checking
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```

---

## 📝 Updating Client Information & Placeholders

All business-specific variables and placeholders are located in a single file:
**[src/config/site.ts](file:///src/config/site.ts)**

When the Bakka team provides verified assets, simply update the fields in `siteConfig`:
- `contact.phone`: Official phone number
- `contact.email`: Official administrative email address
- `contact.address`: Official campus address
- `contact.workingHours`: Verified operating hours
- `socialLinks`: Social media profile URLs
- `services`: Additional course modules, exact dates, and prerequisites
- Contact form submission API: Set up your preferred email provider (e.g., Resend, SendGrid, or custom Next.js API route) in `src/components/forms/contact-form.tsx`.

