"use client";

import { motion } from "framer-motion";
import { reassuranceMessages } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ReassuranceMarquee() {
  const reducedMotion = usePrefersReducedMotion();
  const items = [...reassuranceMessages, ...reassuranceMessages];

  return (
    <div className="relative w-full max-w-full overflow-hidden border-y border-sand/60 bg-gradient-to-r from-warm-cream via-sand/30 to-warm-cream py-4">
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-warm-cream to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-warm-cream to-transparent" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((message, i) => (
          <span
            key={`${message}-${i}`}
            className="mx-8 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-deep-sky-blue sm:text-base"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sunset-orange to-warm-amber" />
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
