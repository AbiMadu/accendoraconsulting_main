/**
 * Single source of truth for editable site-wide values.
 * Change these here — they are never hardcoded in pages.
 */
export const site = {
  name: "Accendora Consulting Ltd",
  shortName: "Accendora",
  companyNumber: "17479445",
  established: "September 2026",
  tagline: "Building stronger organisations. Creating pathways to opportunity.",
  pillars: "People | Capability | Opportunity",
  // TODO: replace with the live business email address.
  email: "hello@accendoraconsulting.co.uk",
  // TODO: replace once the Accendora LinkedIn company page is created.
  linkedin: "https://www.linkedin.com/company/accendora-consulting",
  // TODO: replace with a scheduling link (Calendly / MS Bookings) when live.
  bookingUrl: "https://calendly.com/accendora/intro-conversation",
  founder: {
    name: "Abiola Madubata",
    role: "Founder & Principal Consultant",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/young-people", label: "Young people & future talent" },
  { href: "/quality-accreditation", label: "Quality & accreditation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
