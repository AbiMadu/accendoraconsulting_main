"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/** Inner-page hero: editorial split with a slow parallax on the image. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow flex items-center gap-3 text-accent-soft">
            <span aria-hidden className="h-px w-10 bg-current opacity-60" />
            {eyebrow}
          </p>
          <h1 className="mt-7 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.375rem]">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">{lead}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative aspect-[4/5] overflow-hidden lg:aspect-[4/4.4]"
        >
          <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
