# Master Prompt — Build the Bakka Training Center Website

Act as a senior UI/UX designer and senior Next.js frontend engineer. Build a complete, polished website for **Bakka Training Center**.

## Required technology
- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react icons

Read `overview.md`, `tech_stack.md`, and `agent_rules.md` before implementation. Treat them as project requirements.

## Required pages
1. `/` — Home
2. `/about` — About
3. `/services` — Services
4. `/contact` — Contact

## Design expectations
Create a distinctive, trustworthy, modern training-center website. It should feel like a real educational institution with a strong visual identity, not a generic SaaS template. Use a consistent design system, excellent typography, balanced whitespace, professional imagery, clear calls to action, and carefully designed mobile layouts.

Use official Bakka brand assets if they exist in the repository. If they do not, use a tasteful temporary palette and make it easy to replace. Never invent official brand colors or logos.

## Implementation requirements
- Build a shared responsive header and footer.
- Add accessible desktop and mobile navigation.
- Create all four pages with meaningful page-specific content and clear section hierarchy.
- Use reusable components for repeated cards, headings, buttons, and calls to action.
- Use shadcn/ui components where appropriate.
- Use Next.js `Link` and `Image` correctly.
- Add unique metadata for each page.
- Make all links and buttons functional.
- Make the contact form validate inputs. Do not pretend it sends messages unless a real backend/provider is configured.
- Use placeholders for missing factual business details and make them easy to update in one place.
- Ensure responsive behavior at mobile, tablet, laptop, and wide desktop sizes.
- Include accessible labels, keyboard focus states, semantic HTML, and reduced-motion support.
- Avoid unnecessary dependencies and excessive animation.

## Work process
1. Inspect the existing repository before making changes.
2. Explain the implementation plan briefly.
3. Implement the website in logical steps.
4. Run lint, TypeScript checks, and a production build using the scripts available in the repository.
5. Fix all issues found.
6. Provide a concise completion report with run instructions and any missing information needed from the Bakka team.

Do not stop after creating a plan or a homepage mockup. Implement all four pages and shared components. Do not fabricate business information, testimonials, credentials, or outcomes.
