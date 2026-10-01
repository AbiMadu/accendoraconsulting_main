import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { Methodology } from "@/components/Methodology";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Arrow, Button, Eyebrow, Figure, Note, Section, SectionHeading } from "@/components/ui";
import { qualityPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality & accreditation support",
  description:
    "Quality assurance, quality frameworks, accreditation readiness, evidence and compliance readiness, programme review, standards development and continuous improvement.",
};

const readiness = [
  {
    title: "Interpret the requirement",
    body: "Translate the standard, framework or accreditation criteria into what it actually asks of your organisation in plain terms your teams can act on.",
  },
  {
    title: "Map what already exists",
    body: "Establish honestly where current practice sits against the requirement, including the parts that are strong but undocumented.",
  },
  {
    title: "Close the distance",
    body: "Prioritise the gaps that matter, assign ownership and build the frameworks, processes and evidence needed to close them.",
  },
  {
    title: "Rehearse the scrutiny",
    body: "Test whether the evidence holds up when questioned, and whether the people who will be asked can explain it confidently.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & accreditation support"
        title="Quality that holds up when somebody looks closely."
        lead="Accendora supports organisations to strengthen quality practice and prepare for accreditation or external standards building the frameworks, evidence and review habits that stand up to scrutiny."
        image="/placeholders/quality.jpg"
        alt="Abstract layered documents with a verification mark"
      />

      {/* ------------------------------------------------------- scope of offer */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Being precise</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl leading-snug text-ink sm:text-[1.875rem]">
              Accendora is not an accrediting body. We prepare organisations for accreditation and
              support them through the process.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              That distinction matters, and it is worth stating plainly. Our role is on your side of
              the table: interpreting what a standard requires, assessing where you currently stand,
              building what is missing and making sure the evidence is ready before anybody asks for
              it.
            </p>
            <div className="mt-8">
              <Note>
                Accurate terminology throughout: accreditation support, accreditation readiness, and
                supporting organisations through accreditation processes.
              </Note>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------- what we do */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Possible work"
          title="Seven strands of quality support."
          lead="Scaled to the organisation and the deadline in front of it proportionate frameworks, not bureaucracy for its own sake."
        />

        <Stagger className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {qualityPrinciples.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-sand/60">
                <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* -------------------------------------------------------- readiness arc */}
      <Section tone="ink" className="grain">
        <span aria-hidden className="grain-layer" />
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Accreditation readiness"
              title="From requirement to evidence that can be defended."
              lead="Readiness work is rarely about writing more documents. It is about knowing what is being asked, what you already do well, and what genuinely needs to change."
            />
            <div className="mt-10">
              <Button href="/contact" variant="light">
                Discuss a readiness review
                <Arrow />
              </Button>
            </div>
          </Reveal>

          <Stagger className="grid gap-px bg-paper/15">
            {readiness.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="flex gap-6 bg-ink p-7">
                  <span className="eyebrow pt-1 text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl text-paper">{step.title}</h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-paper/65">
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* -------------------------------------------------------------- evidence */}
      <Section tone="paper">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <Figure
              src="/placeholders/capability.jpg"
              alt="Abstract grid with a rising plotted line representing improvement over time"
              ratio="5/4"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <Eyebrow>After the deadline</Eyebrow>
            <h2 className="mt-5 text-3xl leading-[1.15] sm:text-4xl">
              Continuous improvement, once the pressure lifts.
            </h2>
            <p className="mt-6 leading-relaxed text-slate">
              Most quality work is driven by a date. The value comes from what survives it review
              habits that keep running, standards teams actually use, and evidence that stays current
              because it is produced by normal practice rather than a special effort.
            </p>
            <p className="mt-5 leading-relaxed text-slate">
              Accendora builds quality practice with that second horizon in mind, so the next external
              review starts from a much stronger position than the last one.
            </p>
            <ul className="mt-8 grid gap-3 border-t border-line pt-8 text-[0.9375rem] text-ink">
              {[
                "Programme review written to be acted on, not filed",
                "Internal standards that make consistency possible across teams and sites",
                "Evidence organised so it can be found, understood and defended",
                "Improvement cycles that continue without external pressure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------- method applied */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Accendora's methodology"
          title="The same four stages, applied to quality."
          lead="Discover the real position. Design a proportionate framework. Deliver the change. Develop the habit."
        />
        <div className="mt-16">
          <Methodology />
        </div>
      </Section>

      <CTABand
        eyebrow="Quality & accreditation"
        title="Facing an external standard or review?"
        body="Whether you are preparing for accreditation, strengthening quality practice or reviewing a programme, we'd welcome a conversation about what you're working towards."
      />
    </>
  );
}
