"use client";

import { motion } from "framer-motion";
import { ServiceIcon, type IconName } from "@/components/ui/icons";

type ValueCardProps = {
  title: string;
  description: string;
  icon: IconName;
  index: number;
};

export function ValueCard({ title, description, icon, index }: ValueCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-sand/50 bg-white/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sunset-orange/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/5 via-transparent to-prairie-blue/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-warm-cream to-sand/40 text-sunset-orange">
        <ServiceIcon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="relative mb-2 font-display text-lg text-charcoal">{title}</h3>
      <p className="relative text-sm leading-relaxed text-charcoal/70">{description}</p>
    </motion.div>
  );
}
