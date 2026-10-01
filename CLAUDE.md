# CLAUDE.md — Accendora Consulting Ltd Website

Project context and non-negotiable content rules for this repository. Read before writing any
copy, component or page.

## The client

**Accendora Consulting Ltd** — Company number 17479445, established September 2026.
A B2B consultancy working across people, capability and opportunity. Founder-led.

Audience: senior decision-makers — CEOs, directors, employers, education organisations,
public-sector bodies, charities. Write for executives, not for practitioners.

## Positioning (use this language, verbatim where quoted)

Core line: **Building stronger organisations. Creating pathways to opportunity.**

Supporting line: **People | Capability | Opportunity**

> Accendora works with organisations to develop people, programmes and partnerships that connect
> talent, capability and opportunity.

The three pillars define the business architecture:

- **People** — young people, employees, leaders, talent.
- **Capability** — workforce development, quality, accreditation, organisational capability.
- **Opportunity** — employer engagement, partnerships, progression, access to experience.

## Methodology — Discover → Design → Deliver → Develop

Accendora's core consulting methodology. Treat it as substance, not decoration; visual treatment
stays clean, restrained and executive.

| Stage | Meaning |
| --- | --- |
| **Discover** | Understand the organisation, its people, ambitions, challenges and opportunities. |
| **Design** | Turn insight into a practical solution, programme, pathway, framework or partnership. |
| **Deliver** | Move from strategy to implementation, coordinating people, partners and activity to make the work happen. |
| **Develop** | Review what is working, strengthen the approach, capture learning and build longer-term capability. |

It must read as flexible across all four service areas, and must communicate that Accendora works
from diagnosis and strategic thinking through to practical implementation and improvement.

## HARD RULES — credibility

These override any design or copy instinct. Breaking one is a defect.

1. **No company or organisation names anywhere on the site.** No "working with…", no
   "our clients…", no "partners…", no logos, no logo wall, no testimonials, no case studies
   naming anyone. No work has been won yet.
2. **Never describe Accendora as an accrediting body.** It is not one. Only ever:
   "accreditation support", "accreditation readiness", "supporting organisations through
   accreditation processes".
3. **Do not state or imply current client relationships.** No claimed government, NHS, corporate
   or education partnerships. No implied ongoing relationships (this specifically includes any
   prior SPFT and We Job Box work — describe past delivery accurately, in the past tense, only
   from verified supplied wording).
4. **Invent nothing in the founder bio** — no qualifications, clients, outcomes, job titles,
   achievements, dates, metrics or awards. Founder detail must come only from verified copy
   supplied by Accendora. Unsupplied detail stays as a clearly-marked placeholder; never fill a
   gap with a plausible guess.
5. **No fabricated numbers anywhere** — no "200+ young people", no "15 years", no stats.
6. Instead of proof-by-client-name, the site makes it easy for a reader to **imagine what working
   with Accendora could look like**.

## Tone

Corporate, human, intelligent, strategic, practical, confident, modern. Warm but not informal.

Avoid: overly academic, generic, "inspirational", recruitment-agency, traditional-education-
consultancy, or a small firm writing like a large corporate. Avoid playful, gimmicky or heavily
stylised treatment.

**Banned phrasing:** "We are passionate about…" and its family. Every consultancy site says it.
Say *how* Accendora works instead — structure, ownership, delivery.

## Differentiator section — "From intention to implementation"

Appears on Home and What We Do. Copy:

> Good ideas need more than enthusiasm. They need structure, ownership and delivery.
>
> Accendora works at the point where strategy meets implementation, helping organisations turn an
> ambition into a practical programme, partnership or pathway that can be delivered, evaluated
> and improved.

Followed by the four-stage visual: DISCOVER → DESIGN → DELIVER → DEVELOP.

## Site structure — six pages

1. `/` **Home** — positioning, three pillars, service overview, methodology, intention-to-
   implementation, founder teaser, CTA. Hero carousel.
2. `/what-we-do` **What We Do** — the four service areas in full.
3. `/young-people` **Young People & Future Talent** — deliberately one of the strongest pages.
4. `/quality-accreditation` **Quality & Accreditation**
5. `/about` **About Accendora** — concise founder-led credibility, not an autobiography.
6. `/contact` **Contact**

### Service areas (What We Do)

**People & Future Talent** — career insight experiences, employer engagement, work experience and
early talent, skills and progression, strategic partnerships.

**Workforce & Organisational Capability** — workforce development, organisational development,
capability building, stakeholder engagement, strategic partnerships, programme mobilisation and
delivery.

**Quality & Accreditation Support** — quality assurance, quality frameworks, accreditation
readiness/support, evidence and compliance/documentation readiness, programme review, standards
development, continuous improvement.

**Programmes & Partnerships** — programme design, programme management, implementation,
partnership development, stakeholder coordination, evaluation, improvement.

### Young People & Future Talent page

Headline: **Creating meaningful pathways into the world of work.**

Core message:

> The future workforce is already growing up around us. Accendora works with organisations to
> create meaningful opportunities for young people to see, experience and understand the world of
> work, while helping employers think differently about how they engage future talent.

Sections: School & FE bridge building; safeguarded work exposure & mentorship design; career
insight experiences; employer engagement; work experience & early talent; skills & progression;
strategic partnerships.

Emphasise throughout that meaningful experiences are **structured, purposeful and connected to
skills and progression** — not merely access to a workplace. Safeguarding, risk management and
age-appropriateness are explicit selling points.

### About page

Answers two questions only: *Who is behind Accendora?* and *Why should I trust her?*
Position the founder across education, workforce development, early talent, programme delivery,
employer engagement, organisational development, quality, and partnerships. Concise — not a
giant autobiography. Subject to hard rules 3 and 4 above.

### Contact page

Not "fill in the form and we'll get back to you". Headline:

> Let's explore what could be possible.

> Whether you are looking to develop future talent, strengthen workforce capability, improve
> quality, develop a programme or build a partnership, we'd welcome a conversation about what
> you're trying to achieve.

Three routes: **Book a conversation**, **Email Accendora**, **LinkedIn**. Plus a professional
contact form. The LinkedIn presence for Accendora is not yet created — keep the URL a single
configurable constant.

## Technical

- Next.js (App Router, TypeScript, `src/`), Tailwind CSS.
- `framer-motion` (`motion/react`) for animation and page transitions; `embla-carousel-react`
  for the Home and About carousels.
- Images are placeholders for now; keep every image behind one component so real assets drop in
  cleanly. Always set explicit dimensions and alt text.
- Site-wide editable strings (email, LinkedIn, booking link, company number) live in one config
  module — never hardcoded across pages.
- Animation is restrained: short durations, small distances, `once: true` reveals, and it must
  respect `prefers-reduced-motion`.

## Language conventions

British English — organisation, programme, mobilisation, specialise. UK punctuation.
Sentence case for headings.
