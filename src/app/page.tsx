import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { HomeVideoSection } from "@/components/sections/HomeVideoSection";
import { ReassuranceMarquee } from "@/components/ui/ReassuranceMarquee";
import { GradientOrbs, FloatingGrass } from "@/components/ui/DecorativeElements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatherDivider } from "@/components/ui/FeatherDivider";
import { SituationCard } from "@/components/sections/SituationCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ValueCard } from "@/components/sections/ValueCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceIcon } from "@/components/ui/icons";
import {
  situationCards,
  services,
  benefits,
  homeFaqs,
  missionIcons,
  homeSectionHeaders,
} from "@/data/content";

export const metadata = createPageMetadata({
  title: "Oklahoma People Project — Property Tax Help for Homeowners",
  description:
    "Compassionate support and helpful information for Oklahoma homeowners behind on property taxes or concerned about a possible property tax sale.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <HomeVideoSection />

      <section aria-labelledby="reassurance-heading" className="w-full overflow-x-clip">
        <h2 id="reassurance-heading" className="sr-only">
          Words of Reassurance
        </h2>
        <ReassuranceMarquee />
      </section>

      <section
        className="section-padding w-full overflow-x-clip bg-gradient-to-b from-warm-cream to-sand/20"
        aria-labelledby="mission-heading"
      >
        <div className="container-wide w-full min-w-0">
          <SectionHeader
            id="mission-heading"
            title={homeSectionHeaders.mission.title}
            subtitle={homeSectionHeaders.mission.subtitle}
          />

          <div className="grid w-full min-w-0 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Compassionate conversation between a homeowner and support professional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sunset-orange/20 to-transparent" />
            </div>

            <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {missionIcons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sand/50 bg-white/70 p-4 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center text-sunset-orange">
                    <ServiceIcon name={item.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-xs text-charcoal/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-padding relative w-full overflow-x-clip"
        aria-labelledby="situation-heading"
      >
        <GradientOrbs />
        <FloatingGrass />
        <div className="absolute inset-0 bg-gradient-to-br from-prairie-blue/5 via-warm-cream to-warm-amber/10" />
        <div className="container-wide relative w-full min-w-0">
          <SectionHeader
            id="situation-heading"
            title={homeSectionHeaders.situation.title}
            subtitle={homeSectionHeaders.situation.subtitle}
          />
          <div className="grid w-full min-w-0 gap-6 md:grid-cols-3">
            {situationCards.map((card, i) => (
              <SituationCard key={card.id} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FeatherDivider className="my-4" />

      <section
        className="section-padding w-full overflow-x-clip"
        aria-labelledby="services-heading"
      >
        <div className="container-wide w-full min-w-0">
          <SectionHeader
            id="services-heading"
            title={homeSectionHeaders.services.title}
            subtitle={homeSectionHeaders.services.subtitle}
          />
          <div className="grid w-full min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding w-full overflow-x-clip bg-gradient-to-r from-sand/30 via-warm-cream to-prairie-blue/10"
        aria-labelledby="compassion-heading"
      >
        <div className="container-wide w-full min-w-0">
          <SectionHeader
            id="compassion-heading"
            title={homeSectionHeaders.compassion.title}
            subtitle={homeSectionHeaders.compassion.subtitle}
          />

          <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl shadow-xl lg:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Warm family moment in a comfortable home environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section
        className="section-padding w-full overflow-x-clip"
        aria-labelledby="benefits-heading"
      >
        <div className="container-wide w-full min-w-0">
          <SectionHeader
            id="benefits-heading"
            title={homeSectionHeaders.benefits.title}
            subtitle={homeSectionHeaders.benefits.subtitle}
          />
          <div className="grid w-full min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <ValueCard key={benefit.title} {...benefit} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding w-full overflow-x-clip bg-gradient-to-b from-warm-cream to-sand/20 pb-24 sm:pb-20"
        aria-labelledby="faq-heading"
      >
        <div className="container-wide w-full min-w-0 max-w-3xl">
          <SectionHeader
            id="faq-heading"
            title={homeSectionHeaders.faq.title}
            subtitle={homeSectionHeaders.faq.subtitle}
            uppercase
          />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
