import { CTABand } from "@/components/CTABand";
import { Differentiator } from "@/components/Differentiator";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { Methodology } from "@/components/Methodology";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  Arrow,
  Button,
  Eyebrow,
  Figure,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { pillars, services } from "@/lib/content";
import { site } from "@/lib/site";

const heroSlides: HeroSlide[] = [
  {
    image: "/placeholders/hero-01.jpg",
    alt: "Abstract composition of ascending lines meeting a bronze horizon",
    eyebrow: site.pillars,
    title: "Building stronger organisations.",
    emphasis: "Creating pathways to opportunity.",
    body: "Accendora works with organisations to develop people, programmes and partnerships that connect talent, capability and opportunity.",
    cta: { href: "/what-we-do", label: "What we do" },
  },
  {
    image: "/placeholders/hero-02.jpg",
    alt: "Abstract composition of rising vertical forms",
    eyebrow: "People & future talent",
    title: "The future workforce is already",
    emphasis: "growing up around us.",
    body: "We help organisations create meaningful opportunities for young people to see, experience and understand the world of work and help employers think differently about how they engage future talent.",
    cta: { href: "/young-people", label: "Young people & future talent" },
  },
  {
    image: "/placeholders/hero-03.jpg",
    alt: "Abstract composition of concentric arcs and measured forms",
    eyebrow: "Strategy into delivery",
    title: "Good ideas need more than",
    emphasis: "enthusiasm.",
    body: "They need structure, ownership and delivery. Accendora works at the point where strategy meets implementation turning ambition into a programme, partnership or pathway that can be delivered, evaluated and improved.",
    cta: { href: "/what-we-do", label: "How we work" },
  },
];

const pillarImages: Record<string, { src: string; alt: string }> = {
  people: {
    src: "/placeholders/people.jpg",
    alt: "Abstract grouping of figures representing people and talent",
  },
  capability: {
    src: "/placeholders/capability.jpg",
    alt: "Abstract grid with a rising plotted line representing capability",
  },
  opportunity: {
    src: "/placeholders/opportunity.jpg",
    alt: "Abstract converging pathways rising toward a bronze point",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />

      {/* ------------------------------------------------ positioning statement */}
      <Section tone="paper" className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>One proposition</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-[1.75rem] leading-[1.35] text-ink sm:text-[2.125rem] lg:text-[2.5rem]">
              Accendora exists at the meeting point of three things:{" "}
              <span className="text-accent">people</span>, the{" "}
              <span className="text-accent">capability</span> of the organisations that employ
              them, and the <span className="text-accent">opportunity</span> that connects the two.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate">
              That architecture runs through every engagement whether the work begins with a
              young person’s first experience of a workplace, a quality framework facing external
              review, or a programme that needs to move from intention to delivery.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- pillars */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="People | Capability | Opportunity"
          title="Three words that define the work."
          lead="Each pillar is a distinct body of work, and they reinforce one another. Most engagements touch more than one."
        />

        <Stagger className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <article className="group flex h-full flex-col bg-paper">
                <Figure
                  src={pillarImages[pillar.id].src}
                  alt={pillarImages[pillar.id].alt}
                  ratio="16/10"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="overflow-hidden"
                />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-3xl tracking-tight">{pillar.word}</h3>
                  <p className="mt-3 text-sm font-medium tracking-wide text-accent">
                    {pillar.summary}
                  </p>
                  <p className="mt-5 flex-1 leading-relaxed text-slate">{pillar.detail}</p>
                  <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                    {pillar.covers.map((item) => (
                      <li
                        key={item}
                        className="border border-line px-3 py-1.5 text-xs tracking-wide text-slate"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* -------------------------------------------------------- service areas */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title="Four areas of work, one way of working."
            lead="Accendora is a strategic and delivery-focused consultancy. The work is practical: designed to be implemented, not simply recommended."
          />
          <Button href="/what-we-do" variant="secondary">
            All services
            <Arrow />
          </Button>
        </div>

        <Stagger className="mt-16 grid gap-px bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <StaggerItem key={service.slug}>
              <article className="group flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-sand lg:p-10">
                <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-2xl leading-snug">{service.title}</h3>
                <p className="mt-4 font-serif text-lg leading-snug text-accent">{service.lead}</p>
                <p className="mt-5 flex-1 leading-relaxed text-slate">{service.body}</p>
                <ul className="mt-7 grid gap-2 border-t border-line pt-6 text-sm text-slate">
                  {service.services.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.href ? (
                  <div className="mt-7">
                    <TextLink href={service.href}>Explore this area</TextLink>
                  </div>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ----------------------------------------------------- differentiator */}
      <Differentiator tone="ink" />

      {/* -------------------------------------------------------- methodology */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Accendora's methodology"
          title="Discover. Design. Deliver. Develop."
          lead="A single, flexible method that carries an engagement from diagnosis and strategic thinking through to implementation and continuous improvement."
        />
        <div className="mt-16">
          <Methodology />
        </div>
      </Section>

      {/* ------------------------------------------------------ founder teaser */}
      <Section tone="sand">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left">
            <Figure
              src="/placeholders/founder.jpeg"
              alt="Portrait placeholder for the founder of Accendora"
              ratio="4/5"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <Eyebrow>About Accendora</Eyebrow>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl">
              A founder-led consultancy, built on delivery experience.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Accendora brings together experience across education, workforce development, early
              talent, programme delivery, employer engagement, organisational development, quality
              and partnerships the disciplines that have to work together for this kind of work
              to succeed.
            </p>
            <p className="mt-5 leading-relaxed text-slate">
              That combination is deliberate. Strategy written without delivery experience tends
              not to survive contact with an organisation’s reality.
            </p>
            <div className="mt-9">
              <Button href="/about" variant="secondary">
                Who is behind Accendora
                <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
