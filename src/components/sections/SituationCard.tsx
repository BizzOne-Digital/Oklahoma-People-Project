"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceIcon, type IconName } from "@/components/ui/icons";

type SituationCardProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  gradient: string;
  icon: IconName;
  index: number;
};

export function SituationCard({
  title,
  description,
  cta,
  href,
  gradient,
  icon,
  index,
}: SituationCardProps) {
  return (
    <motion.div
      className="group relative min-w-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60",
          gradient
        )}
      />
      <Link
        href={href}
        className={cn(
          "relative flex h-full flex-col rounded-3xl border border-sand/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sunset-orange/30 group-hover:shadow-xl group-hover:shadow-sunset-orange/10",
          `bg-gradient-to-br ${gradient}`
        )}
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-sunset-orange shadow-md transition-transform group-hover:scale-110">
          <ServiceIcon name={icon} className="h-8 w-8" />
        </div>

        <h3 className="mb-3 font-display text-xl text-charcoal lg:text-2xl">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal/70">{description}</p>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-sunset-orange transition-all group-hover:gap-3">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>

        <svg
          className="absolute right-4 bottom-4 h-16 w-16 opacity-10 transition-opacity group-hover:opacity-20"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <path
            d="M0,32 Q16,20 32,30 T64,28"
            fill="none"
            stroke="#D95F22"
            strokeWidth="2"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
