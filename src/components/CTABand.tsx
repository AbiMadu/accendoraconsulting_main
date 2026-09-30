import { Reveal } from "@/components/motion/Reveal";
import { Arrow, Button, Eyebrow } from "@/components/ui";

/** Closing invitation used at the foot of every page. */
export function CTABand({
  eyebrow = "Next step",
  title = "Let's explore what could be possible.",
  body = "Whether you are looking to develop future talent, strengthen workforce capability, improve quality, develop a programme or build a partnership, we'd welcome a conversation about what you're trying to achieve.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-sand">
      <div className="container-x py-20 lg:py-24">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-slate">{body}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Button href="/contact">
              Book a conversation
              <Arrow />
            </Button>
            <Button href="/what-we-do" variant="secondary">
              Explore what we do
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
