"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FloatingGrass() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <motion.svg
          key={i}
          className="absolute bottom-0 text-soft-sage/20"
          style={{
            left: `${10 + i * 15}%`,
            width: 40 + i * 8,
            height: 80 + i * 12,
          }}
          viewBox="0 0 40 80"
          animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <path
            d={`M20,80 Q${15 + i},40 20,0 Q${25 - i},40 20,80`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function SunGlow() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(243,163,50,0.25) 0%, rgba(217,95,34,0.1) 40%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

export function GradientOrbs() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-sunset-orange/30 via-warm-amber/20 to-transparent blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gradient-to-bl from-prairie-blue/25 via-deep-sky-blue/15 to-transparent blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gradient-to-t from-warm-amber/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </>
  );
}
