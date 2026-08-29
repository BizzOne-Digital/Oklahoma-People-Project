"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const position = useMagnetic(ref);
  const reducedMotion = usePrefersReducedMotion();

  const variants = {
    primary:
      "gradient-sunset text-white shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:shadow-sunset-orange/35",
    secondary:
      "bg-white/90 text-deep-sky-blue border border-prairie-blue/30 hover:border-prairie-blue/60 shadow-md",
    outline:
      "border-2 border-sunset-orange/60 text-sunset-orange bg-transparent hover:bg-sunset-orange/10",
  };

  const content = (
    <motion.div
      ref={ref}
      className={cn(
        "relative inline-flex max-w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-shadow duration-300 sm:px-8 sm:py-3.5 sm:text-base",
        variants[variant],
        disabled && "pointer-events-none opacity-60",
        className
      )}
      style={
        reducedMotion
          ? undefined
          : { transform: `translate(${position.x}px, ${position.y}px)` }
      }
      whileTap={reducedMotion ? {} : { scale: 0.97 }}
    >
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block max-w-full">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block max-w-full"
    >
      {content}
    </button>
  );
}
