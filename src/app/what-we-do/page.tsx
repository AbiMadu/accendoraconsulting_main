import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { Differentiator } from "@/components/Differentiator";
import { Methodology } from "@/components/Methodology";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Arrow, Button, Eyebrow, Figure, Note, Section, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Four areas of work: people and future talent, workforce and organisational capability, quality and accreditation support, and programmes and partnerships.",
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  "people-future-talent": {
    src: "/placeholders/people.svg",
    alt: "Abstract grouping of figures representing people and future talent",
  },
  "workforce-capability": {
    src: "/placeholders/capability.svg",
    alt: "Abstract grid with a rising plotted line representing organisational capability",
  },
  "quality-accreditation": {
    src: "/placeholders/quality.svg",
    alt: "Abstract layered documents with a verification mark",
  },
  "programmes-partnerships": {
    src: "/placeholders/programmes.svg",
    alt: "Abstract programme timeline with overlapping workstreams",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Strategic thinking, built to be delivered."
        lead="Accendia works across people, capability and opportunity — designing and delivering the programmes, partnerships and quality practice that organisations need in order to move forward."
        image="/placeholders/workplace.svg"
        alt="Abstract composition of workplace forms in navy and bronze"
      />

      {/* ------------------------------------------------------------- overview */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>How to read this</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug text-ink sm:text-[1.875rem]">
              Four areas of work. Most engagements begin in one and draw on the others.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              The starting point is rarely tidy. An organisation might come to Accendia with a
              quality deadline, a workforce gap or an ambition to engage young people — and find
              that the work spans all three. The method stays the same throughout.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <StaggerItem key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="group flex h-full flex-col justify-between border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink"
              >
                <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-xl leading-snug">{service.title}</h3>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-accent">
                  Read more
                  <Arrow className="h-3.5 w-3.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* --------------------------------------------------------- the services */}
      {services.map((service, i) => {
        const flipped = i % 2 === 1;
        const image = serviceImages[service.slug];

        return (
          <Section
            key={service.slug}
            id={service.slug}
            tone={flipped ? "sand" : "paper"}
            className="scroll-mt-24"
          >
            <div
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                flipped ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal direction={flipped ? "right" : "left"}>
                <Figure
                  src={image.src}
                  alt={image.alt}
                  ratio="5/4"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>

              <Reveal direction={flipped ? "left" : "right"} delay={0.1}>
                <Eyebrow>{String(i + 1).padStart(2, "0")} — Service area</Eyebrow>
                <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl">{service.title}</h2>
                <p className="mt-5 font-serif text-xl leading-snug text-accent">{service.lead}</p>
                <p className="mt-6 leading-relaxed text-slate">{service.body}</p>

                <ul className="mt-9 grid gap-x-8 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                {service.note ? (
                  <div className="mt-8">
                    <Note>{service.note}</Note>
                  </div>
                ) : null}

                {service.href ? (
                  <div className="mt-8">
                    <Button href={service.href} variant="secondary">
                      Go deeper
                      <Arrow />
                    </Button>
                  </div>
                ) : null}
              </Reveal>
            </div>
          </Section>
        );
      })}

      <Differentiator tone="ink" />

      <Section tone="paper">
        <SectionHeading
          eyebrow="Accendia's methodology"
          title="The same four stages, whatever the brief."
          lead="Discover, Design, Deliver, Develop. Flexible enough to apply across people and future talent, workforce and organisational capability, programmes and partnerships, and quality and accreditation support."
        />
        <div className="mt-16">
          <Methodology />
        </div>
      </Section>

      <CTABand
        title="Where would you like to start?"
        body="If you know the outcome you are working towards, we can talk about the shape of the work. If you are still defining it, that is a useful conversation too."
      />
    </>
  );
}
