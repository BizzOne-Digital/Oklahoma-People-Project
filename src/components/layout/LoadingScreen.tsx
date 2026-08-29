"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), reducedMotion ? 100 : 2200);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-warm-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute h-40 w-40 rounded-full gradient-sunset opacity-20 blur-2xl"
              animate={reducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="relative h-32 w-32 overflow-hidden rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-0 gradient-sunset"
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{ clipPath: "circle(100% at 50% 50%)" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <Image
                src="/images/oklahoma-people-project-logo.png"
                alt="Loading Oklahoma People Project"
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>

            {!reducedMotion && (
              <motion.div
                className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-sand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full gradient-sunset"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            <motion.p
              className="mt-4 text-sm font-medium text-deep-sky-blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Oklahoma People Project
            </motion.p>
          </div>

          {!reducedMotion && (
            <motion.svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M-5,50 Q20,30 40,50 T80,45 T105,50"
                fill="none"
                stroke="#D95F22"
                strokeWidth="0.15"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, x: -20 }}
                animate={{ pathLength: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
