"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FeatherDividerProps = {
  className?: string;
  variant?: "horizontal" | "vertical";
};

export function FeatherDivider({ className, variant = "horizontal" }: FeatherDividerProps) {
  const reducedMotion = usePrefersReducedMotion();

  const path =
    variant === "horizontal"
      ? "M0,20 Q100,5 200,18 T400,15 T600,22 T800,12"
      : "M20,0 Q5,100 18,200 T15,400 T22,600 T12,800";

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <svg
        viewBox={variant === "horizontal" ? "0 0 800 40" : "0 0 40 800"}
        className={cn("w-full", variant === "vertical" && "h-full w-auto")}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D95F22" stopOpacity="0" />
            <stop offset="20%" stopColor="#F3A332" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4B809D" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#D95F22" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#24566F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#featherGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
