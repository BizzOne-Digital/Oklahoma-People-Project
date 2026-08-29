"use client";

import { cn } from "@/lib/utils";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

type SectionHeaderProps = {
  id?: string;
  title: string;
  subtitle: string;
  className?: string;
  align?: "center" | "left";
  dark?: boolean;
  uppercase?: boolean;
};

export function SectionHeader({
  id,
  title,
  subtitle,
  className,
  align = "center",
  dark = false,
  uppercase = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 w-full min-w-0 sm:mb-12 lg:mb-16",
        isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      <AnimatedHeading
        id={id}
        className={cn(
          "text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl",
          uppercase && "uppercase tracking-[0.04em] sm:tracking-[0.06em]",
          dark ? "text-white" : "gradient-text"
        )}
        gradient={!dark}
      >
        {title}
      </AnimatedHeading>
      <p
        className={cn(
          "mt-5 text-base leading-relaxed sm:text-lg",
          isCenter && "mx-auto max-w-2xl",
          dark ? "text-white/85" : "text-charcoal/70"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
