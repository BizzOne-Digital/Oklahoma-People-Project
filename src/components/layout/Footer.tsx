"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { AnimatedBirdLogo } from "@/components/ui/AnimatedBirdLogo";
import { FeatherDivider } from "@/components/ui/FeatherDivider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Footer() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <footer className="relative w-full min-w-0 overflow-x-clip bg-gradient-to-b from-warm-cream via-sand/30 to-sand/20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-warm-amber/40 to-sunset-orange/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-80 w-80 -translate-y-1/2 rounded-full bg-gradient-to-tr from-prairie-blue/30 to-deep-sky-blue/20 blur-3xl" />
      </div>

      <FeatherDivider className="relative z-10" />

      <div className="container-wide relative z-10 px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-20 lg:pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={reducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <AnimatedBirdLogo size={64} animate={false} showGlow />
              </motion.div>
              <div>
                <p className="font-display text-xl text-charcoal">Oklahoma People</p>
                <p className="bg-gradient-to-r from-sunset-orange to-warm-amber bg-clip-text text-sm font-semibold text-transparent">
                  Project
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-charcoal/70">{siteConfig.mission}</p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg text-charcoal">Pages</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal/70 transition-colors hover:text-sunset-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-charcoal/70 transition-colors hover:text-sunset-orange"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg text-charcoal">Contact</h3>
            <ul className="space-y-3 text-sm text-charcoal/70">
              <li>
                <a
                  href={`tel:${siteConfig.publicPhoneTel}`}
                  className="flex items-center gap-2 transition-colors hover:text-sunset-orange"
                >
                  <Phone className="h-4 w-4 text-prairie-blue" />
                  {siteConfig.publicPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.publicEmail}`}
                  className="flex items-center gap-2 transition-colors hover:text-sunset-orange"
                >
                  <Mail className="h-4 w-4 text-prairie-blue" />
                  {siteConfig.publicEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-prairie-blue" />
                {siteConfig.businessHours}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-charcoal">Ready to Talk?</h3>
            <p className="text-sm text-charcoal/70">
              Start with a confidential conversation about your situation.
            </p>
            <MagneticButton href={`tel:${siteConfig.publicPhoneTel}`} variant="primary">
              Call {siteConfig.publicPhone}
            </MagneticButton>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/50 pt-6">
          <p className="mb-3 text-xs leading-relaxed text-charcoal/60">{siteConfig.disclaimer}</p>
          <p className="text-xs text-charcoal/50">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
