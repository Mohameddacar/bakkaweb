# Bakka Training Center Website — Project Overview

## 1. Project Summary
Build a modern, responsive, professional website for **Bakka Training Center**. The website should introduce the training center, explain its services and training offerings, build trust with prospective students and partners, and make it easy for visitors to contact the center.

The website has four main pages:
1. Home
2. About
3. Services
4. Contact

The experience should be clear, accessible, mobile-first, fast, and easy for the Bakka team to maintain.

## 2. Main Goals
- Present Bakka Training Center's identity, mission, and value clearly.
- Help visitors understand the training services and courses offered.
- Encourage visitors to ask questions, request information, or contact the center.
- Establish credibility through genuine information, real photos, testimonials, and outcomes when supplied.
- Provide a consistent experience across phones, tablets, and desktop screens.

## 3. Target Audiences
- Students and young people seeking practical skills.
- Professionals who want to improve or update their skills.
- Organizations looking for staff training or capacity-building.
- Parents, partners, and other people seeking information about the center.

## 4. Site Structure and Page Requirements

### Home (`/`)
- Header with logo/wordmark and primary navigation.
- Hero section with a clear headline, short supporting copy, and primary call to action.
- Short introduction to Bakka Training Center.
- Featured training areas or services.
- Why choose Bakka: practical learning, experienced trainers, supportive environment, or other verified strengths.
- A simple learning/process section explaining how to get started.
- Testimonials or partner logos only when genuine assets and approved wording are provided.
- Contact call to action.
- Footer with contact details, navigation, and social links when supplied.

### About (`/about`)
- Center overview and background.
- Mission, vision, and values.
- Training approach and learning environment.
- Team or trainer profiles only when verified information and images are available.
- A clear call to action to explore services or contact the center.

### Services (`/services`)
- Overview of the services and training categories offered.
- Reusable service cards with title, description, relevant icon, and optional details.
- Each service should explain who it is for and what learners can expect.
- Do not invent courses, durations, prices, certificates, accreditation, or employment outcomes. Use clearly marked editable placeholders until the client supplies accurate information.
- Include a contact/enquiry call to action.

### Contact (`/contact`)
- Contact details: phone, email, physical address, opening hours, and social links only when supplied.
- Contact form fields: full name, email, phone (optional), subject or service of interest, and message.
- Client-side validation with clear accessible error and success states.
- Do not claim a message has been sent unless a real backend/API integration is implemented. If no backend exists, provide a clearly labelled demo form or use a configured mail/contact service.
- Map embed only if an exact verified address and suitable map URL are provided.

## 5. Navigation and User Experience
- Keep the four main pages visible in the desktop navigation.
- On mobile, use an accessible menu with keyboard support and an obvious close action.
- Highlight the active page.
- Use consistent buttons, spacing, typography, cards, and section widths.
- Use descriptive link labels and visible focus states.
- Ensure all important actions are reachable without relying on hover.

## 6. Visual Direction
Create a polished education and professional-training identity:
- Clean, modern, confident, and welcoming.
- Strong typographic hierarchy and generous whitespace.
- A restrained color system with one primary brand color, one accent color, neutral backgrounds, and accessible text contrast.
- Use the official Bakka Training Center logo and brand colors if supplied. If they are not supplied, define temporary design tokens and make them easy to replace; do not invent an official brand identity.
- Use authentic training/classroom imagery supplied by the client. Do not use unrelated or misleading stock imagery as if it depicts the actual center.
- Subtle motion only where it improves understanding; respect reduced-motion preferences.

## 7. Content and Data Requirements
Before launch, the client should provide:
- Official logo and brand colors.
- Approved center description, mission, vision, and values.
- Exact list of services/courses and descriptions.
- Trainer/team details, if they should appear.
- Phone number, email, address, opening hours, and social URLs.
- Real testimonials, partner logos, and photos with permission.
- Contact form destination or backend integration details.

Until these are provided, use explicit content placeholders such as `[Official phone number]`; never fabricate facts.

## 8. Non-Functional Requirements
- Responsive from small mobile screens to large desktop screens.
- Accessible semantic HTML and keyboard navigation.
- Good performance and optimized images.
- SEO metadata, descriptive page titles, and social sharing metadata.
- Maintainable reusable components and consistent code style.
- No broken links, dead buttons, or fake form submissions.
- Use environment variables for secrets and service credentials; never commit secrets.

## 9. Suggested Components
- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `PageHero`
- `SectionHeading`
- `ServiceCard`
- `FeatureCard`
- `CallToAction`
- `ContactForm`
- `SocialLinks`

## 10. Definition of Done
- All four pages are implemented and linked.
- Header, mobile navigation, and footer work correctly.
- Layout is responsive and tested at mobile, tablet, and desktop widths.
- Forms validate inputs and accurately communicate whether submission is real or demo-only.
- No invented business claims or placeholder content left undisclosed.
- Metadata, accessibility basics, and image optimization are in place.
- Project runs locally using the documented commands.
