"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A template re-mounts on navigation, so this gives every page a short,
 * quiet entrance transition without blocking the first paint.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
