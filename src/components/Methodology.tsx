"use client";

import { motion, useReducedMotion } from "framer-motion";
import { methodology } from "@/lib/content";

/**
 * The four-stage methodology. The connecting line draws itself once on scroll —
 * the only flourish here, and it carries meaning: one continuous process.
 */
export function Methodology({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const reduced = useReducedMotion();

  return (
    <div>
      <div className="relative">
        <div aria-hidden className={`absolute left-0 right-0 top-[0.4375rem] hidden h-px lg:block ${dark ? "bg-paper/15" : "bg-line"}`} />
        <motion.div
          aria-hidden
          className="absolute left-0 top-[0.4375rem] hidden h-px origin-left bg-accent lg:block"
          style={{ right: 0 }}
          initial={{ scaleX: reduced ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <ol className="grid gap-12 lg:grid-cols-4 lg:gap-10">
          {methodology.map((stage, i) => (
            <motion.li
              key={stage.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="relative lg:pr-6"
            >
              <span
                aria-hidden
                className={`hidden h-3.5 w-3.5 rounded-full lg:block ${
                  dark ? "bg-accent ring-4 ring-ink" : "bg-accent ring-4 ring-paper"
                }`}
              />
              <p className={`eyebrow mt-6 ${dark ? "text-paper/40" : "text-muted"}`}>{stage.n}</p>
              <h3
                className={`mt-2 text-2xl tracking-tight ${dark ? "text-paper" : "text-ink"}`}
              >
                {stage.name}
              </h3>
              <p
                className={`mt-3 text-[0.9375rem] leading-relaxed ${
                  dark ? "text-paper/70" : "text-slate"
                }`}
              >
                {stage.body}
              </p>
              <p
                className={`mt-4 border-l pl-4 font-serif text-[0.9375rem] italic leading-relaxed ${
                  dark ? "border-paper/20 text-paper/55" : "border-line text-muted"
                }`}
              >
                {stage.question}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Compact DISCOVER → DESIGN → DELIVER → DEVELOP strip. */
export function StageStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <motion.ol
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ shown: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-wrap items-center gap-x-5 gap-y-4"
    >
      {methodology.map((stage, i) => (
        <motion.li
          key={stage.name}
          variants={{
            hidden: { opacity: 0, y: 10 },
            shown: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex items-center gap-5"
        >
          <span
            className={`eyebrow text-base tracking-[0.2em] ${dark ? "text-paper" : "text-ink"}`}
          >
            {stage.name}
          </span>
          {i < methodology.length - 1 ? (
            <span aria-hidden className="text-accent">
              →
            </span>
          ) : null}
        </motion.li>
      ))}
    </motion.ol>
  );
}
