"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type AnimatedBirdLogoProps = {
  size?: number;
  className?: string;
  animate?: boolean;
  showGlow?: boolean;
};

export function AnimatedBirdLogo({
  size = 80,
  className,
  animate = true,
  showGlow = false,
}: AnimatedBirdLogoProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn("relative inline-flex", className)}>
      {showGlow && (
        <motion.div
          className="absolute inset-0 rounded-full gradient-sunset opacity-30 blur-2xl"
          animate={reducedMotion || !animate ? {} : { scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.div
        className="relative overflow-hidden rounded-full bg-white p-1 shadow-lg shadow-sunset-orange/10"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
      >
        <div className="absolute inset-0 rounded-full gradient-sunset opacity-10" />
        <Image
          src="/images/oklahoma-people-project-logo.png"
          alt="Oklahoma People Project logo featuring a scissor-tailed flycatcher"
          width={size}
          height={size}
          className="relative object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
