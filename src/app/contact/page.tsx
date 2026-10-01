import type { Metadata } from "next";
import { BookingEmbed } from "@/components/BookingEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Methodology } from "@/components/Methodology";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Arrow, Eyebrow, Figure, Section, SectionHeading } from "@/components/ui";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's explore what could be possible. Book a conversation with Accendora about future talent, workforce capability, quality, programmes or partnerships.",
};

const routes = [
  {
    label: "Book a conversation",
    detail: "A 30-minute call, no obligation. Bring the problem, not a brief.",
    action: "Choose a time",
    href: "#book",
    external: false,
  },
  {
    label: "Email Accendora",
    detail: site.email,
    action: "Write to us",
    href: `mailto:${site.email}`,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Connect, or send a message there if that is easier.",
    action: "View profile",
    href: site.linkedin,
    external: true,
  },
];

const expect = [
  "A conversation about what you are trying to achieve, not a pitch",
  "An honest view of whether Accendora is the right fit for it",
  "A clear sense of what a first piece of work could look like",
  "A written outline of scope, ownership and sequence before anything begins",
];

export default function ContactPage() {
  return (
    <>
      {/* -------------------------------------------------------------- opening */}
      <section className="bg-ink text-paper">
        <div className="container-x grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <Reveal>
            <Eyebrow tone="light">Contact</Eyebrow>
            <h1 className="mt-7 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
              Let’s explore what could be possible.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
              Whether you are looking to develop future talent, strengthen workforce capability,
              improve quality, develop a programme or build a partnership, we’d welcome a
              conversation about what you’re trying to achieve.
            </p>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <Figure
              src="/placeholders/conversation.jpg"
              alt="Abstract overlapping conversation forms"
              ratio="4/3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------------- routes */}
      <Section tone="paper" className="py-16 lg:py-20">
        <Stagger className="grid gap-px bg-line lg:grid-cols-3">
          {routes.map((route) => (
            <StaggerItem key={route.label} className="h-full">
              <a
                href={route.href}
                target={route.external ? "_blank" : undefined}
                rel={route.external ? "noreferrer" : undefined}
                className="group flex h-full flex-col justify-between gap-10 bg-paper p-8 transition-colors duration-500 hover:bg-sand lg:p-10"
              >
                <div>
                  <h2 className="text-2xl leading-snug">{route.label}</h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
                    {route.detail}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-accent">
                  {route.action}
                  <Arrow className="h-3.5 w-3.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* -------------------------------------------------------------- booking */}
      <Section tone="sand" id="book" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Book a conversation"
          title="Choose a time that works for you."
          lead="Thirty minutes, directly with the founder. Pick a slot below and you will have a confirmation straight away."
        />
        <Reveal>
          <div className="mt-12 border border-line bg-paper p-2 sm:p-4">
            <BookingEmbed className="h-[44rem]" />
          </div>
        </Reveal>
        <p className="mt-6 text-sm text-muted">
          Prefer not to use the calendar?{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            Email Accendora
          </a>{" "}
          and we will find a time.
        </p>
      </Section>

      {/* ----------------------------------------------------------- form + why */}
      <Section tone="sand">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Enquiry"
              title="Tell us what you're working towards."
              lead="A short outline is enough to start. If it is easier to talk it through, book a conversation instead."
            />
            <div className="mt-12">
              <ContactForm email={site.email} />
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <div className="bg-paper p-8 lg:p-10">
              <Eyebrow>What to expect</Eyebrow>
              <ul className="mt-8 grid gap-5">
                {expect.map((item) => (
                  <li key={item} className="flex items-start gap-4 leading-relaxed text-ink">
                    <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-line pt-8">
                <p className="eyebrow text-muted">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block font-serif text-xl text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm text-slate hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 border-t border-line pt-8 text-sm leading-relaxed text-muted">
                <p>{site.name}</p>
                <p className="mt-1">
                  Registered in {legal.countryOfRegistration} · Company number{" "}
                  {site.companyNumber}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------- what happens */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="After the first conversation"
          title="You will know exactly how the work would run."
          lead="The same four stages that structure every engagement also structure the proposal — so the shape of the work is visible before you commit to it."
        />
        <div className="mt-16">
          <Methodology />
        </div>
      </Section>
    </>
  );
}
