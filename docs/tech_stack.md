# Bakka Training Center Website — Technology Stack

## 1. Core Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI components:** shadcn/ui
- **Icons:** lucide-react
- **Form handling:** React Hook Form (if the form complexity requires it)
- **Validation:** Zod (recommended for structured form validation)
- **Package manager:** npm (unless the existing repository already uses another manager)

Use the current stable versions compatible with one another. Do not blindly copy outdated setup commands or configuration from old tutorials.

## 2. Next.js Architecture
- Use the App Router and `src/app` directory.
- Create route pages:
  - `src/app/page.tsx` — Home
  - `src/app/about/page.tsx` — About
  - `src/app/services/page.tsx` — Services
  - `src/app/contact/page.tsx` — Contact
- Use `src/app/layout.tsx` for the shared root layout and metadata defaults.
- Use Server Components by default. Add `"use client"` only for interactive components such as mobile navigation and client-side form interactions.
- Use `next/image` for local or remote images, with remote domains configured explicitly when required.

## 3. Suggested Folder Structure

```text
bakka-training-center/
├── public/
│   ├── images/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx
│   │   │   └── site-footer.tsx
│   │   ├── sections/
│   │   ├── forms/
│   │   └── ui/
│   ├── config/
│   │   └── site.ts
│   └── lib/
│       └── utils.ts
├── components.json
├── package.json
└── README.md
```

Follow the repository's existing structure if one already exists; do not restructure a working project without a reason.

## 4. Tailwind CSS and Design Tokens
- Use Tailwind utility classes for layout, spacing, responsive behavior, and states.
- Define brand colors and reusable CSS variables in the global stylesheet/theme configuration according to the installed Tailwind version.
- Avoid scattering raw hex values throughout components.
- Use consistent container widths, spacing, radii, shadows, and typography.
- Ensure color contrast meets WCAG AA where practical.

## 5. shadcn/ui
Use shadcn/ui components where they improve consistency and accessibility. Add only the components actually needed, for example:
- Button
- Card
- Input
- Textarea
- Label
- Select (only if a real selection is required)
- Sheet (for mobile navigation, if appropriate)
- Form components (if using React Hook Form)

shadcn/ui components are copied into the project and can be customized. Do not assume it is a runtime component package that provides every component automatically. Follow the setup instructions for the project's installed versions.

## 6. Forms and Contact Handling
- Use native HTML validation for simple forms, or React Hook Form + Zod for richer validation.
- A frontend-only form does not deliver messages. To enable real delivery, connect a backend route/server action or an approved form/email provider.
- Keep provider API keys on the server in environment variables.
- Add server-side validation, spam protection, and clear success/error handling before production launch.

## 7. SEO and Performance
- Use Next.js Metadata API for unique page titles and descriptions.
- Add Open Graph metadata and a favicon when assets are available.
- Use semantic headings in a logical order.
- Optimize images and avoid large unnecessary client-side bundles.
- Add sitemap and robots configuration when preparing for deployment.
- Do not add analytics or tracking without the owner's approval and required privacy disclosures.

## 8. Quality Checks
Before delivery, run the available project scripts, typically:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Fix errors rather than suppressing them. If a script is not configured, explain that instead of claiming it passed.

## 9. Installation Guidance
For a new project, initialize Next.js with TypeScript, Tailwind CSS, ESLint, App Router, and the `src/` directory. Then initialize shadcn/ui using its current official setup flow and add the required components.

Do not overwrite an existing project configuration until you have inspected it. Confirm the installed Next.js and Tailwind versions before using version-specific configuration syntax.
