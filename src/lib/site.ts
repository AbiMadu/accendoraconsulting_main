/**
 * Single source of truth for editable site-wide values.
 * Change these here — they are never hardcoded in pages.
 */
/**
 * Cal.com scheduling. One place for every bookable value — the embed, the contact
 * page route card and any CTA all read from here.
 *
 * `calLink` is the path after cal.com/ — i.e. username/event-slug.
 */
export const cal = {
  // TODO: replace with the live Cal.com username once the Accendora account is created.
  username: "accendora",
  // TODO: confirm the event slug for the introductory conversation.
  eventSlug: "30min",
  /** Isolates this embed's Cal instance from any other on the page. */
  namespace: "30min",
  layout: "month_view",
  get calLink() {
    return `${this.username}/${this.eventSlug}`;
  },
  get bookingUrl() {
    return `https://cal.com/${this.calLink}`;
  },
} as const;

export const site = {
  name: "Accendora Consulting Ltd",
  shortName: "Accendora",
  companyNumber: "17479445",
  established: "September 2026",
  countryOfRegistration: "England & Wales",
  registeredAddress: "Arundel, West Sussex & Wales",
  tagline: "Building stronger organisations. Creating pathways to opportunity.",
  pillars: "People | Capability | Opportunity",
  // TODO: replace with the live business email address.
  email: "info@accendoraconsulting.com",
  // TODO: replace once the Accendora LinkedIn company page is created.
  linkedin: "https://uk.linkedin.com/in/abiolamadubata",
  /** Cal.com booking page — configured in `cal` above. */
  bookingUrl: cal.bookingUrl,
  founder: {
    name: "Abiola Madubata",
    role: "Founder & Principal Consultant",
  },
} as const;

/**
 * Editable legal values. Every figure, address and date used in the Privacy Policy
 * and Terms of Business is set here — never inline in the documents themselves.
 *
 * Items marked TODO are placeholders and must be confirmed by Accendora before the
 * site goes live. Do not replace a TODO with a plausible guess.
 */
export const legal = {
  countryOfRegistration: "England & Wales",
  // TODO: confirm the registered office address as filed at Companies House.
  registeredAddress: "Arundel, West Sussex & Wales",
  // The controller for personal data collected through this site.
  dataController: "Accendora Consulting Ltd",
  // TODO: confirm the ICO data protection register entry number, if registered.
  icoRegistration: "[ICO registration number to be confirmed]",
  // TODO: confirm professional indemnity cover before publishing a figure.
  professionalIndemnity: "[Professional indemnity cover to be confirmed]",
  // Standard commercial terms. Change here, not in the documents.
  paymentTermsDays: 30,
  latePaymentReference: "Late Payment of Commercial Debts (Interest) Act 1998",
  enquiryRetentionPeriod: "24 months",
  recordRetentionPeriod: "6 years",
  governingLaw: "England and Wales",
  privacyUpdated: "30 September 2026",
  termsUpdated: "30 September 2026",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/young-people", label: "Young people & future talent" },
  { href: "/quality-accreditation", label: "Quality & accreditation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Secondary navigation — footer only, kept out of the main header. */
export const legalNav = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-of-business", label: "Terms of business" },
] as const;
