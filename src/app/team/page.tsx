import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ValueCard } from "@/components/sections/ValueCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ServiceIcon } from "@/components/ui/icons";
import { teamSupportCategories, values } from "@/data/content";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet the compassionate team behind Oklahoma People Project — real people offering confidential conversations and personalized support for homeowners.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <section className="page-hero overflow-x-clip gradient-hero">
        <div className="container-wide relative w-full min-w-0 px-4 text-center sm:px-6 lg:px-8">
          <AnimatedHeading
            as="h1"
            className="mb-6 text-3xl sm:text-5xl lg:text-6xl"
            gradient
          >
            Real People. Compassionate Conversations.
          </AnimatedHeading>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">
              A Team That Listens
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-charcoal/80">
              Behind Oklahoma People Project is a team of caring individuals who understand that
              property-tax challenges can feel overwhelming. We&apos;re not here to judge or
              pressure — we&apos;re here to listen, share helpful information and help you explore
              what options may be available for your situation.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Every conversation starts with respect. We know that reaching out takes courage, and we
              honor that by treating every homeowner with dignity and compassion.
            </p>
          </div>

          {/* TODO: Replace with real team photography before production launch */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Professional support team in a warm, welcoming environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-sky-blue/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-sand/20 to-warm-cream">
        <div className="container-wide">
          <AnimatedHeading className="mb-12 text-center text-3xl sm:text-4xl" gradient>
            How We Support Homeowners
          </AnimatedHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamSupportCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-sand/50 bg-white/80 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-warm-cream to-sand/40 text-sunset-orange">
                  <ServiceIcon name={category.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-display text-lg text-charcoal">{category.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/70">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl text-charcoal">Our Communication Approach</h2>
            <p className="mb-4 text-lg leading-relaxed text-charcoal/80">
              We believe in clear, honest communication. When you reach out, you&apos;ll speak with
              someone who takes time to understand your situation and shares information in plain
              language — no jargon, no pressure.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Whether you prefer a phone call, text message or email, we&apos;re flexible. Your
              comfort matters, and we adapt to how you&apos;d like to communicate.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-charcoal">Team Values</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.slice(0, 4).map((value, i) => (
                <ValueCard key={value.title} {...value} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-prairie-blue/10 via-warm-cream to-warm-amber/10 text-center">
        <div className="container-wide max-w-2xl">
          <h2 className="mb-4 font-display text-2xl text-charcoal">Availability</h2>
          <p className="mb-8 text-lg text-charcoal/80">{siteConfig.businessHours}</p>
          <MagneticButton href="/contact" variant="primary">
            Speak With Our Team
          </MagneticButton>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
