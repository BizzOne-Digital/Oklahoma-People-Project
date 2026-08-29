import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { FeatherDivider } from "@/components/ui/FeatherDivider";
import { ValueCard } from "@/components/sections/ValueCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedBirdLogo } from "@/components/ui/AnimatedBirdLogo";
import { values } from "@/data/content";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about the Oklahoma People Project — dedicated to helping Oklahoma homeowners understand property-tax situations and explore practical next steps.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero relative overflow-x-clip gradient-hero">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-4 h-48 w-48 rounded-full bg-gradient-to-br from-warm-amber/30 to-sunset-orange/20 blur-3xl sm:top-20 sm:right-10 sm:h-64 sm:w-64" />
          <div className="absolute bottom-6 left-4 h-40 w-40 rounded-full bg-gradient-to-tr from-prairie-blue/25 to-transparent blur-3xl sm:bottom-10 sm:left-10 sm:h-48 sm:w-48" />
        </div>
        <div className="container-wide relative w-full min-w-0 px-4 text-center sm:px-6 lg:px-8">
          <AnimatedBirdLogo size={100} showGlow className="mx-auto mb-8" />
          <AnimatedHeading
            as="h1"
            className="mb-6 text-3xl sm:text-5xl lg:text-6xl"
            gradient
          >
            People Helping Oklahoma Homeowners Move Forward
          </AnimatedHeading>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">Who We Are</h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                The Oklahoma People Project is dedicated to providing homeowners with helpful
                resources, information and potential solutions when they are falling behind on
                property taxes or may be at risk of losing their property through an upcoming tax
                sale.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">Our Approach</h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                We understand that financial challenges can happen to anyone. Our goal is to offer a
                friendly, confidential place where homeowners can learn about their options and
                determine what steps may be available for their individual situation.
              </p>
            </div>

            <div className="rounded-3xl border border-sand/50 bg-gradient-to-br from-sunset-orange/10 via-warm-amber/5 to-prairie-blue/10 p-8">
              <h2 className="mb-4 font-display text-2xl text-charcoal">Mission</h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                To listen, provide helpful information and assist homeowners as they explore
                practical next steps.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Oklahoma prairie landscape at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sky-blue/30 to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3 rounded-2xl bg-white/90 p-3 shadow-xl backdrop-blur-sm sm:-bottom-6 sm:-left-6 sm:p-4">
              <AnimatedBirdLogo size={72} />
            </div>
          </div>
        </div>
      </section>

      <FeatherDivider />

      <section className="section-padding bg-gradient-to-b from-sand/20 to-warm-cream">
        <div className="container-wide">
          <AnimatedHeading className="mb-12 text-center text-3xl sm:text-4xl" gradient>
            Our Values
          </AnimatedHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ValueCard key={value.title} {...value} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container-wide max-w-2xl">
          <h2 className="mb-4 font-display text-2xl text-charcoal">Availability</h2>
          <p className="mb-8 text-lg text-charcoal/80">{siteConfig.businessHours}</p>
          <MagneticButton href="/contact" variant="primary">
            Start a Conversation
          </MagneticButton>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
