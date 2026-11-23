# Bakka Training Center Website — Agent Rules

These rules apply to any AI coding agent working on this repository.

## 1. Project Objective
Build and maintain a professional, responsive website for Bakka Training Center using Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The website must contain Home, About, Services, and Contact pages.

## 2. Inspect Before Changing
- Inspect the repository, package manager, dependencies, scripts, and existing folder structure before editing.
- If the repository already contains a working application, preserve its architecture unless a change is necessary.
- Do not replace configuration files wholesale without understanding their purpose.
- Identify the installed Next.js and Tailwind versions before writing version-specific code.

## 3. Accuracy and Content Integrity
- Never invent the center's history, address, phone number, email, staff, qualifications, accreditation, partnerships, course prices, course duration, certificates, or success statistics.
- Use explicit placeholders for missing business information.
- Do not present sample testimonials, logos, photos, or statistics as genuine.
- Ask for missing factual content when it is necessary; otherwise build a clear placeholder that can be replaced later.
- Do not imply that the contact form sends messages until a real submission integration works.

## 4. Design and UX Rules
- Create a professional education/training website, not a generic dashboard or SaaS landing page.
- Keep visual hierarchy clear and layouts consistent across all four pages.
- Design mobile-first and test responsive navigation.
- Use the supplied official logo, brand colors, and images. If unavailable, use replaceable temporary design tokens and neutral imagery.
- Use meaningful whitespace, readable typography, consistent buttons, and reusable cards.
- Avoid excessive gradients, animations, glass effects, oversized rounded cards, and decorative elements that reduce clarity.
- Respect `prefers-reduced-motion`.
- Ensure visible keyboard focus, accessible labels, semantic landmarks, and sufficient contrast.

## 5. Engineering Rules
- Use TypeScript and avoid `any` unless there is a documented reason.
- Prefer Server Components. Use Client Components only when interactivity requires them.
- Build reusable components for repeated layout and content patterns.
- Keep page content separate from shared layout components where practical.
- Use shadcn/ui components when useful; customize them to match the design system.
- Use `next/link` for internal navigation and `next/image` for images.
- Use stable keys when rendering lists.
- Do not add unnecessary dependencies.
- Do not leave dead buttons, broken links, console errors, or unfinished TODOs without documenting them.
- Never hardcode secrets or expose private API keys in client-side code.

## 6. Contact Form Rules
- Include accessible labels and helpful validation messages.
- Validate on the server as well as the client when a backend is connected.
- Protect real submission endpoints against spam and abuse.
- Show success only after the server/provider confirms successful submission.
- If no backend/provider is configured, label the form as a prototype or provide a clearly explained alternative contact method.

## 7. SEO Rules
- Give each page a unique, accurate title and meta description.
- Use one clear H1 per page and logical H2/H3 structure.
- Write useful, natural page copy; avoid keyword stuffing.
- Add Open Graph metadata and sitemap/robots support where appropriate.
- Do not claim search ranking results or guaranteed traffic.

## 8. Workflow
1. Inspect the codebase and report the existing setup.
2. Confirm the required pages and shared components.
3. Establish the design tokens and global layout.
4. Build the header, navigation, and footer.
5. Implement the Home, About, Services, and Contact pages.
6. Add responsive behavior, accessibility, and metadata.
7. Implement form validation and only connect delivery when credentials/configuration are supplied.
8. Run lint, TypeScript checks, and production build.
9. Fix issues and report exactly what was tested and what remains.

## 9. Completion Report
At the end, report:
- Pages and components implemented.
- Dependencies added or changed.
- Commands/tests run and their actual results.
- Any missing content/assets.
- Whether the contact form is demo-only or connected to a working submission service.
- How to run the project locally.

Do not claim tests passed unless they were actually executed and passed.
