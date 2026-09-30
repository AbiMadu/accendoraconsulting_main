import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { StageStrip } from "@/components/Methodology";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Arrow, Button, Eyebrow, Figure, Note, Section, SectionHeading } from "@/components/ui";
import { youngPeopleAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Young people & future talent",
  description:
    "Creating meaningful pathways into the world of work: career insight, safeguarded work exposure, employer engagement, early talent, skills and progression, and strategic partnerships.",
};

const contrast = [
  {
    label: "Not this",
    tone: "muted" as const,
    items: [
      "A young person placed in a workplace with no defined purpose",
      "A one-off visit that is never connected to anything else",
      "Activity that depends entirely on one enthusiastic member of staff",
      "An experience nobody helps the young person make sense of afterwards",
      "Safeguarding considered late, or assumed to be somebody else's job",
    ],
  },
  {
    label: "This",
    tone: "accent" as const,
    items: [
      "A defined purpose, agreed before the young person arrives",
      "An experience that connects to skills, confidence and a next step",
      "Internal ownership, so the activity survives a change of personnel",
      "Structured reflection, so young people can articulate what they gained",
      "Safeguarding, risk management and age-appropriateness designed in from the start",
    ],
  },
];

const audiences = [
  {
    eyebrow: "For employers",
    title: "Engage future talent without overwhelming your teams.",
    body: "Employers rarely lack goodwill towards young people they lack a workable model. Accendia helps translate what an organisation actually does into experiences young people can engage with, sized to fit operational reality and owned properly inside the business.",
    points: [
      "A model proportionate to your capacity and sector",
      "Clear internal roles, so engagement is not one person's side project",
      "Safeguarded, age-appropriate activity you can stand behind",
      "A route from early insight through to early talent pipelines",
    ],
    image: "/placeholders/workplace.svg",
    alt: "Abstract composition of workplace forms",
  },
  {
    eyebrow: "For schools, colleges & providers",
    title: "Employer engagement that lasts longer than one cohort.",
    body: "Education organisations need employer relationships that are dependable, not opportunistic. Accendia helps build the bridges between education and employers with shared expectations, defined points of contact and a structure designed to continue beyond a single academic year.",
    points: [
      "Purposeful introductions rather than cold outreach",
      "Shared expectations and defined roles on both sides",
      "Experiences mapped to skills, curriculum intent and progression",
      "Partnerships built to be sustainable, not personality-dependent",
    ],
    image: "/placeholders/people.svg",
    alt: "Abstract grouping of figures representing young people",
  },
];

export default function YoungPeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="People & future talent"
        title="Creating meaningful pathways into the world of work."
        lead="The future workforce is already growing up around us. Accendia works with organisations to create meaningful opportunities for young people to see, experience and understand the world of work, while helping employers think differently about how they engage future talent."
        image="/placeholders/young-people.svg"
        alt="Abstract rising pathway across a field of forms"
      />

      {/* --------------------------------------------------------- core message */}
      <Section tone="paper" className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>The premise</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-[1.75rem] leading-[1.35] text-ink sm:text-[2.125rem]">
              Access to a workplace is not the same thing as an experience of work.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate">
              The difference is design. A meaningful experience has a purpose, an owner and a
              connection to what happens next and it is safeguarded and age-appropriate from the
              outset. That is the work Accendia does: turning employer goodwill and education
              ambition into something structured enough to be repeated, evaluated and improved.
            </p>
            <div className="mt-10">
              <StageStrip />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* --------------------------------------------------------- what this is */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="What this can include"
          title="Seven connected areas of work."
          lead="Engagements are usually a combination rather than a single item each area strengthens the others."
        />

        <Stagger className="mt-16 grid gap-px bg-line lg:grid-cols-2">
          {youngPeopleAreas.map((area, i) => (
            <StaggerItem key={area.title}>
              <article className="flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-sand/60 lg:p-10">
                <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl leading-snug">{area.title}</h3>
                <p className="mt-4 leading-relaxed text-slate">{area.body}</p>
                <ul className="mt-7 grid gap-2.5 border-t border-line pt-6 text-[0.9375rem] text-ink">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ----------------------------------------------- structured, not casual */}
      <Section tone="ink" className="grain">
        <span aria-hidden className="grain-layer" />
        <SectionHeading
          tone="light"
          eyebrow="The distinction that matters"
          title="Structured and purposeful, rather than simply available."
          lead="Meaningful experiences are connected to skills and progression. Anything less is activity without outcome and young people can tell the difference."
        />

        <div className="mt-16 grid gap-px bg-paper/15 lg:grid-cols-2">
          {contrast.map((column) => (
            <Reveal
              key={column.label}
              direction={column.tone === "accent" ? "right" : "left"}
              className="bg-ink p-8 lg:p-10"
            >
              <p
                className={`eyebrow ${
                  column.tone === "accent" ? "text-accent-soft" : "text-paper/40"
                }`}
              >
                {column.label}
              </p>
              <ul className="mt-8 grid gap-5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-4 leading-relaxed ${
                      column.tone === "accent" ? "text-paper" : "text-paper/55"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`mt-2.5 h-px w-5 shrink-0 ${
                        column.tone === "accent" ? "bg-accent" : "bg-paper/30"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------- safeguarding */}
      <Section tone="paper">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>Non-negotiable</Eyebrow>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl">
              Safeguarded by design, not by exception.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Work with school-aged young people carries responsibilities that cannot be retro-fitted.
              Accendia designs career experiences, workplace visits and mentorship models so that
              safeguarding, risk management and age-appropriateness are built into the structure of
              the activity supervision, boundaries, expectations and escalation understood by
              everyone involved before anything begins.
            </p>
            <div className="mt-8">
              <Note>
                Designing for safeguarding is also what makes an experience repeatable. Employers
                engage more confidently when the structure around a young person is clear.
              </Note>
            </div>
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <Figure
              src="/placeholders/quality.svg"
              alt="Abstract layered documents with a verification mark"
              ratio="4/5"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* ----------------------------------------------------------- audiences */}
      {audiences.map((audience, i) => (
        <Section key={audience.eyebrow} tone={i % 2 === 0 ? "sand" : "paper"}>
          <div
            className={`grid items-center gap-14 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal direction={i % 2 === 1 ? "right" : "left"}>
              <Figure
                src={audience.image}
                alt={audience.alt}
                ratio="5/4"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.1} direction={i % 2 === 1 ? "left" : "right"}>
              <Eyebrow>{audience.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.15] sm:text-[2.25rem]">{audience.title}</h2>
              <p className="mt-6 leading-relaxed text-slate">{audience.body}</p>
              <ul className="mt-8 grid gap-3 border-t border-line pt-8 text-[0.9375rem] text-ink">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* ------------------------------------------------------ skills outcome */}
      <Section tone="paper" className="pt-0">
        <Reveal className="border-t border-line pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Eyebrow>Where it leads</Eyebrow>
            <div>
              <h2 className="text-3xl leading-[1.15] sm:text-4xl">
                Experience is only valuable if a young person can use it.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Accendia connects early experiences to the confidence, soft skills and practical
                next steps young people need and builds in the reflection that lets them explain
                what they did and what they learned. For employers, the same structure produces a
                clearer view of emerging talent and a route that can be developed over time.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/contact">
                  Discuss a programme
                  <Arrow />
                </Button>
                <Button href="/what-we-do" variant="secondary">
                  See all areas of work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand
        eyebrow="Future talent"
        title="Let's explore what could be possible."
        body="If you are thinking about how your organisation engages young people or how to make existing activity more purposeful we'd welcome a conversation about what you're trying to achieve."
      />
    </>
  );
}
