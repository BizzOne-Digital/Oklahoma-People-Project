"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceIcon, type IconName } from "@/components/ui/icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconName;
  index: number;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  icon,
  index,
  href = "/services",
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative min-w-0 perspective-1000"
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sunset-orange/20 via-warm-amber/10 to-prairie-blue/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-3xl border border-sand/50 bg-white p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-prairie-blue/10 sm:p-8">
        <motion.div
          className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-warm-amber/20 to-sunset-orange/10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-warm-cream to-sand/50 text-sunset-orange shadow-inner transition-transform group-hover:scale-110">
          <ServiceIcon name={icon} className="h-9 w-9" />
        </div>

        <h3 className="relative mb-3 font-display text-xl text-charcoal">{title}</h3>
        <p className="relative mb-5 text-sm leading-relaxed text-charcoal/70">{description}</p>

        <Link
          href={href}
          className="relative inline-flex items-center gap-2 text-sm font-semibold text-prairie-blue transition-all hover:gap-3 hover:text-sunset-orange"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>

        <svg
          className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 4"
          aria-hidden="true"
        >
          <path
            d="M0,2 Q25,0 50,2 T100,2"
            fill="none"
            stroke="url(#cardFeather)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="cardFeather" x1="0" y1="0" x2="100" y2="0">
              <stop stopColor="#D95F22" />
              <stop offset="1" stopColor="#4B809D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}
