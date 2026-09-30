"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const distance = 22;

/**
 * Scroll-triggered reveal. Deliberately restrained: short travel, one play only.
 * Honours prefers-reduced-motion by fading without movement.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  direction = "up",
  className,
  amount = 0.25,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const offset =
    reduced || direction === "none"
      ? {}
      : direction === "up"
        ? { y: distance }
        : direction === "left"
          ? { x: -distance }
          : { x: distance };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers direct <Stagger.Item> children into view. */
export const staggerParent: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
}
