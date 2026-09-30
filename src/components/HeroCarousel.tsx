"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Arrow, Button } from "@/components/ui";

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  emphasis?: string;
  body: string;
  cta: { href: string; label: string };
};

const AUTOPLAY_MS = 7000;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const reduced = useReducedMotion();
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, duration: 40, align: "start" },
    reduced ? [] : [Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
  }, [embla]);

  const go = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-ink text-paper"
      aria-roledescription="carousel"
      aria-label="Accendia introduction"
    >
      {/* Slides: the track carries only imagery, so copy can cross-fade independently. */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((s, i) => (
            <div
              key={s.image}
              className="relative h-full min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={index === i && !reduced ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: AUTOPLAY_MS / 1000 + 2, ease: "linear" }}
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Legibility scrim */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

      <div className="container-x relative flex min-h-[38rem] flex-col justify-center py-28 lg:min-h-[44rem]">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow flex items-center gap-3 text-accent-soft">
                <span aria-hidden className="h-px w-10 bg-current opacity-60" />
                {slide.eyebrow}
              </p>

              <h1 className="mt-7 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
                {slide.title}
                {slide.emphasis ? (
                  <>
                    {" "}
                    <span className="italic text-accent-soft">{slide.emphasis}</span>
                  </>
                ) : null}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">{slide.body}</p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={slide.cta.href} variant="light">
                  {slide.cta.label}
                  <Arrow />
                </Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-8">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center border border-paper/25 transition-colors hover:border-paper hover:bg-paper/10"
            >
              <span className="sr-only">Previous slide</span>
              <Arrow className="rotate-180 group-hover:translate-x-0" />
            </button>
            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center border border-paper/25 transition-colors hover:border-paper hover:bg-paper/10"
            >
              <span className="sr-only">Next slide</span>
              <Arrow />
            </button>
          </div>

          <div className="flex flex-1 gap-3">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => go(i)}
                className="group relative h-px flex-1 bg-paper/25"
              >
                <span className="sr-only">Go to slide {i + 1}</span>
                <span className="absolute -inset-y-3 inset-x-0" />
                {index === i ? (
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-accent"
                    initial={{ width: reduced ? "100%" : 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduced ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                    key={`bar-${index}`}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
