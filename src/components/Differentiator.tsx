import { differentiator } from "@/lib/content";
import { StageStrip } from "@/components/Methodology";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/ui";

/** "From intention to implementation" — the positioning section, reused across pages. */
export function Differentiator({ tone = "ink" }: { tone?: "ink" | "sand" }) {
  const dark = tone === "ink";

  return (
    <Section tone={tone} className={dark ? "grain" : ""}>
      {dark ? <span aria-hidden className="grain-layer" /> : null}
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow tone={dark ? "light" : "accent"}>{differentiator.eyebrow}</Eyebrow>
          <h2
            className={`mt-5 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {differentiator.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          {differentiator.body.map((para, i) => (
            <p
              key={para}
              className={`leading-relaxed ${i === 0 ? "font-serif text-2xl leading-snug" : "text-lg"} ${
                dark ? (i === 0 ? "text-paper" : "text-paper/70") : i === 0 ? "text-ink" : "text-slate"
              }`}
            >
              {para}
            </p>
          ))}

          <div className={`mt-6 border-t pt-8 ${dark ? "border-paper/15" : "border-line"}`}>
            <StageStrip tone={dark ? "dark" : "light"} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
