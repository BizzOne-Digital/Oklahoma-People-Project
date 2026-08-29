import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { FeatherDivider } from "@/components/ui/FeatherDivider";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ServiceIcon } from "@/components/ui/icons";
import { services, homeFaqs } from "@/data/content";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Helpful information, practical options and personal support for Oklahoma homeowners dealing with delinquent property taxes or tax sale concerns.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero overflow-hidden gradient-hero">
        <div className="container-wide relative w-full min-w-0 px-4 text-center sm:px-6 lg:px-8">
          <AnimatedHeading
            as="h1"
            className="mb-6 text-3xl sm:text-5xl lg:text-6xl"
            gradient
          >
            Helpful Information. Practical Options. Personal Support.
          </AnimatedHeading>
        </div>
      </section>

      <div className="space-y-0">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${i % 2 === 0 ? "bg-warm-cream" : "bg-gradient-to-r from-sand/20 via-warm-cream to-prairie-blue/5"}`}
          >
            <div className="container-wide grid w-full min-w-0 items-center gap-8 sm:gap-12 lg:grid-cols-2">
              <div
                className={`relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-3xl shadow-xl ${
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sunset-orange/15 to-transparent" />
              </div>

              <div className={`min-w-0 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-warm-cream to-sand/50 text-sunset-orange shadow-inner">
                  <ServiceIcon name={service.icon} className="h-9 w-9" />
                </div>
                <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-charcoal/80">
                  {service.description}
                </p>
                <MagneticButton href="/contact" variant="primary">
                  Discuss Your Situation
                </MagneticButton>
              </div>
            </div>
          </section>
        ))}

        <section className="section-padding bg-gradient-to-b from-prairie-blue/5 to-warm-cream">
          <div className="container-wide max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">
              Resources and Continued Communication
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-charcoal/80">
              We encourage homeowners to stay connected if they receive additional county notices or
              information. Reaching out again is always welcome — your situation may evolve, and
              we&apos;re here to help you understand what it means.
            </p>
            <MagneticButton href="/contact" variant="secondary">
              Stay Connected With Our Team
            </MagneticButton>
          </div>
        </section>
      </div>

      <FeatherDivider />
      <ProcessTimeline />

      <section className="section-padding bg-gradient-to-b from-warm-cream to-sand/20">
        <div className="container-wide max-w-3xl">
          <AnimatedHeading className="mb-12 text-center text-3xl sm:text-4xl" gradient>
            Frequently Asked Questions
          </AnimatedHeading>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
