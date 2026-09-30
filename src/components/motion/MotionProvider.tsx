"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Global motion settings — reducedMotion "user" defers to the OS preference. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
