"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Arrow } from "@/components/ui";

export type EditorialSlide = {
  image: string;
  alt: string;
  label: string;
  title: string;
  body: string;
};

/**
 * Quieter, draggable carousel for narrative sections (About, service overviews).
 * Peeks the next card so it reads as a set rather than a slideshow.
 */
export function EditorialCarousel({
  slides,
  tone = "light",
}: {
  slides: EditorialSlide[];
  tone?: "light" | "dark";
}) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [index, setIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!embla) return;
    const sync = () => {
      setIndex(embla.selectedScrollSnap());
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    sync();
    embla.on("select", sync).on("reInit", sync);
  }, [embla]);

  const dark = tone === "dark";
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex touch-pan-y">
          {slides.map((s) => (
            <article
              key={s.title}
              className="min-w-0 flex-[0_0_88%] pl-6 sm:flex-[0_0_60%] lg:flex-[0_0_42%]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 88vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.04]"
                />
              </div>
              <p className={`eyebrow mt-6 ${dark ? "text-accent-soft" : "text-accent"}`}>
                {s.label}
              </p>
              <h3
                className={`mt-3 text-2xl leading-snug ${dark ? "text-paper" : "text-ink"}`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 text-[0.9375rem] leading-relaxed ${
                  dark ? "text-paper/70" : "text-slate"
                }`}
              >
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev}
            className={`group flex h-11 w-11 items-center justify-center border transition-all disabled:opacity-30 ${
              dark
                ? "border-paper/25 text-paper hover:border-paper"
                : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            <span className="sr-only">Previous</span>
            <Arrow className="rotate-180 group-hover:translate-x-0" />
          </button>
          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            disabled={!canNext}
            className={`group flex h-11 w-11 items-center justify-center border transition-all disabled:opacity-30 ${
              dark
                ? "border-paper/25 text-paper hover:border-paper"
                : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            <span className="sr-only">Next</span>
            <Arrow />
          </button>
        </div>

        <div className="flex gap-2" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={index === i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 transition-all duration-300 ${
                index === i
                  ? "w-8 bg-accent"
                  : dark
                    ? "w-1.5 bg-paper/30 hover:bg-paper/60"
                    : "w-1.5 bg-ink/20 hover:bg-ink/50"
              }`}
            >
              <span className="sr-only">Slide {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
