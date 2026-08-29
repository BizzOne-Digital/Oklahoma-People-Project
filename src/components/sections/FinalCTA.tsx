"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { homeSectionHeaders } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FinalCTA() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="section-padding relative w-full overflow-x-clip">
      <div className="absolute inset-0 gradient-sunset opacity-90" />
      <motion.div
        className="absolute inset-0"
        animate={reducedMotion ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(217,95,34,0.3) 0%, rgba(243,163,50,0.2) 50%, rgba(75,128,157,0.3) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
          alt="Oklahoma sunset sky"
          fill
          className="object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="container-wide relative z-10 text-center">
        <SectionHeader
          title={homeSectionHeaders.finalCta.title}
          subtitle={homeSectionHeaders.finalCta.subtitle}
          dark
        />

        <motion.div
          className="flex w-full min-w-0 flex-col flex-wrap justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton
            href={`tel:${siteConfig.publicPhoneTel}`}
            variant="secondary"
            className="!bg-white !text-deep-sky-blue whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Call {siteConfig.publicPhone}
          </MagneticButton>
          <MagneticButton href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white/20">
            Complete the Contact Form
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
