"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Heart, Users, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const trustBarItems = [
  { icon: Heart, label: "Friendly & Confidential" },
  { icon: Users, label: "Personalized Guidance" },
  { icon: MessageCircle, label: "No-Pressure Conversation" },
] as const;

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative w-full min-h-[100svh] overflow-x-clip sm:min-h-[90vh]">
      <Image
        src="/images/hero-background.png"
        alt="Oklahoma homeowners standing together outside their home at golden hour"
        fill
        className="object-cover object-[60%_center] sm:object-[70%_center]"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(20,45,65,0.94) 0%, rgba(30,70,95,0.85) 35%, rgba(180,80,40,0.45) 58%, rgba(217,95,34,0.15) 75%, transparent 100%)",
        }}
      />

      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#1a3347]/85 via-[#1a3347]/50 to-transparent sm:max-w-[85%] md:max-w-[70%] lg:max-w-[55%]" />

      <svg
        className="pointer-events-none absolute top-6 left-0 h-32 w-full max-w-xs opacity-30 sm:top-12 sm:h-48 sm:max-w-xl"
        viewBox="0 0 500 200"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M-20,120 Q120,40 280,80 T500,60"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-44 pt-20 sm:min-h-[90vh] sm:px-6 sm:pb-36 sm:pt-24 lg:px-8 lg:pb-32">
        <div className="container-wide w-full min-w-0 max-w-2xl">
          <motion.p
            className="mb-4 text-[0.65rem] font-semibold tracking-[0.12em] text-warm-amber uppercase sm:text-xs sm:tracking-[0.18em] md:text-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Helpful Resources for Oklahoma Homeowners
          </motion.p>

          <motion.h1
            className="mb-5 font-display text-[1.75rem] leading-[1.2] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Don&apos;t Let Unpaid Property Taxes Put Your Home at Risk!
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            If you&apos;re falling behind on property taxes or facing a possible tax sale, you
            don&apos;t have to navigate it alone. We&apos;re here to listen, share helpful
            information and help you explore your options.
          </motion.p>

          <motion.div
            className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-warm-amber via-sunset-orange to-[#c44e15] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sunset-orange/40 transition-all hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
            >
              Explore Your Options
            </Link>
            <a
              href={`tel:${siteConfig.publicPhoneTel}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-black/30 sm:w-auto sm:px-7 sm:text-base"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="truncate">Call {siteConfig.publicPhone}</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute right-0 bottom-0 left-0 z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="container-wide flex w-full min-w-0 flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-y-3 sm:px-6">
          {trustBarItems.map((item, i) => (
            <div key={item.label} className="flex w-full min-w-0 items-center sm:w-auto">
              {i > 0 && (
                <span
                  className="mx-5 hidden h-8 w-px bg-white/25 sm:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex min-w-0 items-center gap-2.5 text-white/90">
                <item.icon className="h-4 w-4 shrink-0 text-warm-amber sm:h-5 sm:w-5" />
                <span className="text-xs font-medium sm:text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
