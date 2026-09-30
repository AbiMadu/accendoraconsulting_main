import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { EditorialCarousel, type EditorialSlide } from "@/components/EditorialCarousel";
import { Methodology } from "@/components/Methodology";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Arrow, Button, Eyebrow, Figure, Note, Section, SectionHeading } from "@/components/ui";
import { founderAreas } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Accendora",
  description:
    "A founder-led consultancy bringing experience across education, workforce development, early talent, programme delivery, employer engagement, organisational development, quality and partnerships.",
};

/**
 * Experience areas presented as capability, not as claims.
 * Nothing here asserts a client, outcome, date or achievement — see CLAUDE.md.
 */
const experienceSlides: EditorialSlide[] = [
  {
    image: "/placeholders/people.svg",
    alt: "Abstract grouping of figures representing people",
    label: "Education",
    title: "How education organisations actually work",
    body: "Curriculum intent, progression, learner experience and the operational pressures education teams carry understood from the inside rather than described from outside.",
  },
  {
    image: "/placeholders/capability.svg",
    alt: "Abstract grid with a rising plotted line",
    label: "Workforce development",
    title: "Developing people at scale",
    body: "Building the skills, structures and development routes that let an organisation meet what is being asked of it now and next.",
  },
  {
    image: "/placeholders/young-people.svg",
    alt: "Abstract rising pathway across a field of forms",
    label: "Early talent",
    title: "Designing the first rungs",
    body: "Career insight, work experience and early talent activity designed to be purposeful, safeguarded and connected to progression.",
  },
  {
    image: "/placeholders/programmes.svg",
    alt: "Abstract programme timeline with overlapping workstreams",
    label: "Programme delivery",
    title: "Moving from plan to delivery",
    body: "Mobilising programmes, holding the detail, coordinating the people involved and keeping delivery moving once the strategy document is closed.",
  },
  {
    image: "/placeholders/workplace.svg",
    alt: "Abstract composition of workplace forms",
    label: "Employer engagement",
    title: "Speaking credibly to employers",
    body: "Translating between what employers need operationally and what education and talent partners are trying to achieve.",
  },
  {
    image: "/placeholders/opportunity.svg",
    alt: "Abstract converging pathways rising toward a point",
    label: "Organisational development",
    title: "Structure, ownership, capability",
    body: "Strengthening how an organisation is set up to deliver roles, ownership and the capability that makes consistency possible.",
  },
  {
    image: "/placeholders/quality.svg",
    alt: "Abstract layered documents with a verification mark",
    label: "Quality",
    title: "Practice that withstands scrutiny",
    body: "Quality assurance, frameworks, review and accreditation readiness experience of what external scrutiny genuinely asks for.",
  },
  {
    image: "/placeholders/conversation.svg",
    alt: "Abstract overlapping conversation forms",
    label: "Partnerships",
    title: "Holding multi-party work together",
    body: "Building and coordinating partnerships between organisations with different drivers, timelines and definitions of success.",
  },
];

/**
 * PLACEHOLDER CONTENT — supply verified wording before launch.
 *
 * Per CLAUDE.md, nothing in the founder biography may be invented: no job titles, dates,
 * employers, qualifications, outcomes or metrics. Each entry below is a clearly-marked slot.
 * Past delivery (including any prior SPFT and We Job Box work) must be described in the past
 * tense, in wording supplied and approved by Accendora, with no implication of an ongoing
 * relationship.
 */
const careerPlaceholders = [
  {
    period: "[Period to confirm]",
    title: "[Verified role title]",
    body: "[Verified description of the role and the work delivered, in Accendora's own approved wording. Past tense where the engagement has ended.]",
  },
  {
    period: "[Period to confirm]",
    title: "[Verified role title]",
    body: "[Verified description of the role and the work delivered, in Accendora's own approved wording. Past tense where the engagement has ended.]",
  },
  {
    period: "[Period to confirm]",
    title: "[Verified role title]",
    body: "[Verified description of the role and the work delivered, in Accendora's own approved wording. Past tense where the engagement has ended.]",
  },
];

const principles = [
  {
    title: "Say what will actually happen",
    body: "Scope, ownership and sequence agreed in plain language at the start, so nobody is guessing what they have commissioned.",
  },
  {
    title: "Work with the organisation you have",
    body: "Recommendations are shaped around real capacity, real constraints and the people who will have to carry them out.",
  },
  {
    title: "Leave capability behind",
    body: "Success is an organisation that can keep going without the consultant in the room.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ------------------------------------------------------------ intro hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <Reveal>
            <Eyebrow tone="light">About Accendora</Eyebrow>
            <h1 className="mt-7 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
              A consultancy built on delivery, not commentary.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
              Accendora is founder-led. The work draws on experience across education, workforce
              development, early talent, programme delivery, employer engagement, organisational
              development, quality and partnerships the disciplines that have to work together for
              people, capability and opportunity to connect in practice.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="light">
                Book a conversation
                <Arrow />
              </Button>
              <Button href={site.linkedin} variant="ghost" target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <div>
              <Figure
                src="/placeholders/founder.svg"
                alt={`Portrait placeholder for ${site.founder.name}`}
                ratio="4/5"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="mt-6 border-l-2 border-accent pl-5">
                <p className="font-serif text-2xl text-paper">{site.founder.name}</p>
                <p className="eyebrow mt-2 text-paper/50">{site.founder.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- why trust this person */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Who is behind Accendora</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-[1.625rem] leading-[1.4] text-ink sm:text-[2rem]">
              Accendora was founded to do the part of the work that usually gets left out the
              implementation.
            </p>
            <div className="mt-7 grid gap-5 text-lg leading-relaxed text-slate">
              <p>
                Plenty of organisations already know roughly what they want to achieve with their
                people, their quality practice or their engagement with future talent. What tends to
                be missing is the structure to make it happen: who owns it, what it looks like in
                practice, how it is safeguarded, how it is evidenced, and how it keeps going once
                the initial energy fades.
              </p>
              <p>
                That is the gap Accendora was built to work in and the reason the founder’s
                background spans both strategic and delivery roles rather than one or the other.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2.5 border-t border-line pt-8">
              {founderAreas.map((area) => (
                <li
                  key={area}
                  className="border border-line px-3.5 py-2 text-xs tracking-wide text-slate"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------- experience carousel */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Areas of experience"
          title="Eight disciplines that rarely sit in one place."
          lead="Drag or use the controls to move through the areas the work draws on."
        />
        <div className="mt-14">
          <EditorialCarousel slides={experienceSlides} />
        </div>
      </Section>

      {/* --------------------------------------------------- career background */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Career background"
          title="Experience, described accurately."
          lead="Roles and engagements are listed only where the wording has been verified past delivery in the past tense, with no implication of an ongoing relationship."
        />

        <div className="mt-8 max-w-3xl">
          <Note>
            Draft build: the entries below are placeholders. Verified role titles, periods and
            descriptions including any previous delivery work will be supplied by Accendora and
            dropped straight in.
          </Note>
        </div>

        <Stagger className="mt-14 grid gap-px bg-line">
          {careerPlaceholders.map((entry, i) => (
            <StaggerItem key={i}>
              <div className="grid gap-4 bg-paper py-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <p className="eyebrow pt-1 text-muted">{entry.period}</p>
                <div>
                  <h3 className="text-xl text-ink">{entry.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate">{entry.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* -------------------------------------------------------- how we work */}
      <Section tone="ink" className="grain">
        <span aria-hidden className="grain-layer" />
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="How we work"
              title="Three commitments, held consistently."
            />
          </Reveal>
          <Stagger className="grid gap-px bg-paper/15">
            {principles.map((principle, i) => (
              <StaggerItem key={principle.title}>
                <div className="flex gap-6 bg-ink p-7">
                  <span className="eyebrow pt-1 text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl text-paper">{principle.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-paper/65">{principle.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ----------------------------------------------------------- the method */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Accendora's methodology"
          title="Discover. Design. Deliver. Develop."
          lead="One method, applied consistently and the reason strategy and implementation are treated here as a single piece of work."
        />
        <div className="mt-16">
          <Methodology />
        </div>
      </Section>

      {/* ------------------------------------------------------------- company */}
      <Section tone="sand" className="py-16 lg:py-20">
        <Reveal className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-muted">Company details</p>
            <p className="mt-4 font-serif text-2xl text-ink">{site.name}</p>
            <p className="mt-2 text-sm text-slate">
              Registered in England &amp; Wales · Company number {site.companyNumber} · Established{" "}
              {site.established}
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Get in touch
            <Arrow />
          </Button>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
