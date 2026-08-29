"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

type AnimatedHeadingProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  gradient?: boolean;
  delay?: number;
  id?: string;
};

export function AnimatedHeading({
  children,
  as: Tag = "h2",
  className,
  gradient = false,
  delay = 0,
  id,
}: AnimatedHeadingProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const words = children.split(" ");
  const useSimpleText = reducedMotion || isMobile;

  if (useSimpleText) {
    return (
      <Tag
        id={id}
        className={cn(
          "text-balance break-words",
          className,
          gradient && "gradient-text"
        )}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      id={id}
      className={cn("text-balance break-words", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={cn("mr-[0.25em] inline-block", gradient && "gradient-text")}
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
