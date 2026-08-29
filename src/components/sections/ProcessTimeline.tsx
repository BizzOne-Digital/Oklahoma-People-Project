"use client";

import { motion } from "framer-motion";
import { processSteps, homeSectionHeaders } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function ProcessTimeline() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section
      className="section-padding w-full overflow-x-clip bg-gradient-to-b from-warm-cream via-sand/20 to-prairie-blue/5"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <SectionHeader
          id="process-heading"
          title={homeSectionHeaders.process.title}
          subtitle={homeSectionHeaders.process.subtitle}
        />

        <div className="relative">
          <svg
            className="absolute top-0 left-1/2 hidden h-full w-8 -translate-x-1/2 lg:block"
            viewBox="0 0 40 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M20,0 Q5,75 18,150 T15,300 T22,450 T12,600"
              fill="none"
              stroke="url(#processGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="processGrad" x1="0" y1="0" x2="0" y2="600">
                <stop stopColor="#D95F22" />
                <stop offset="0.5" stopColor="#F3A332" />
                <stop offset="1" stopColor="#4B809D" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={
                  isMobile || reducedMotion
                    ? { opacity: 0, y: 20 }
                    : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                  <div
                    className={`w-full min-w-0 rounded-3xl border border-sand/50 bg-white/90 p-5 shadow-lg shadow-sunset-orange/5 backdrop-blur-sm sm:p-8 lg:max-w-lg ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-sunset-orange to-warm-amber px-3 py-1 text-xs font-bold text-white">
                      Step {step.step}
                    </span>
                    <h3 className="mb-3 font-display text-xl text-charcoal sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full gradient-sunset text-lg font-bold text-white shadow-lg shadow-sunset-orange/30 lg:mx-0">
                  {step.step}
                </div>

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
