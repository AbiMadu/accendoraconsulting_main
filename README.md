# Accendora Consulting Ltd — website

Six-page B2B consultancy site. Next.js (App Router, TypeScript), Tailwind CSS v4,
Framer Motion for animation and page transitions, Embla for the carousels.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero carousel, pillars, service overview, methodology, founder teaser |
| `/what-we-do` | The four service areas in full |
| `/young-people` | Young People & Future Talent |
| `/quality-accreditation` | Quality & Accreditation support |
| `/about` | About Accendora (founder-led, with an experience carousel) |
| `/contact` | Contact — three routes plus enquiry form |

## Before launch — what still needs real content

1. **`src/lib/site.ts`** — business email, LinkedIn URL (the Accendora company page has still to be
   created), and the booking link. Every page reads these from here.
2. **Founder biography** — `src/app/about/page.tsx` contains `careerPlaceholders`, three
   clearly-marked slots. Nothing has been invented: supply verified role titles, periods and
   descriptions (past tense for completed work, no implication of an ongoing relationship) and drop
   them straight in.
3. **Imagery** — every image is an abstract placeholder in `public/placeholders/*.svg`. All images
   render through the `Figure` component (`src/components/ui.tsx`) or the carousels, so replacing
   artwork means changing the `src` and `alt` only. Once real raster photography is in place,
   `dangerouslyAllowSVG` can be removed from `next.config.ts`. Generation prompts for all twelve
   images — plus the brief for the founder portrait, which must be a real photograph — are in
   `docs/image-prompts.md`.
4. **Contact form delivery** — `src/components/ContactForm.tsx` currently composes a `mailto:` so no
   enquiry is lost while no backend exists. Swap `handleSubmit` for a server action or a form
   provider when one is chosen.

## Content rules

`CLAUDE.md` holds the positioning, tone and the non-negotiable credibility rules — no organisation
names or logos anywhere, no claimed clients or partnerships, no invented credentials or statistics,
and never any wording that positions Accendora as an accrediting body. Read it before editing copy.

## Structure

```
src/
  app/                    one directory per page, plus template.tsx (page transitions)
  components/
    motion/               Reveal, Stagger, MotionProvider, ScrollProgress
    ui.tsx                Section, SectionHeading, Eyebrow, Button, Figure, Note
    HeroCarousel.tsx      autoplaying hero (Home)
    EditorialCarousel.tsx draggable narrative carousel (About)
    Methodology.tsx       Discover → Design → Deliver → Develop
  lib/
    site.ts               editable site-wide values
    content.ts            all page copy as data
```

Animation is deliberately restrained and respects `prefers-reduced-motion` throughout
(`MotionConfig reducedMotion="user"` plus a CSS fallback in `globals.css`).
