import { Phone, Mail, Clock, MessageSquare, Shield } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact the Oklahoma People Project team for a confidential conversation about your property tax situation. Call, email or complete our contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero overflow-x-clip gradient-hero">
        <div className="container-wide relative w-full min-w-0 px-4 text-center sm:px-6 lg:px-8">
          <AnimatedHeading
            as="h1"
            className="mb-6 text-3xl sm:text-5xl lg:text-6xl"
            gradient
          >
            Let&apos;s Talk About Your Situation
          </AnimatedHeading>
          <p className="mx-auto max-w-2xl text-lg text-charcoal/80">
            Every situation is different. Share a few details, and a member of our team will contact
            you to discuss your circumstances and help you explore possible next steps.
          </p>
        </div>
      </section>

      <section className="section-padding pb-24 lg:pb-28">
        <div className="container-wide grid w-full min-w-0 gap-8 sm:gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-sand/50 bg-white/80 p-6 backdrop-blur-sm">
              <h2 className="mb-4 font-display text-xl text-charcoal">Get in Touch</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${siteConfig.publicPhoneTel}`}
                    className="flex items-center gap-3 text-charcoal/80 transition-colors hover:text-sunset-orange"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sunset-orange/20 to-warm-amber/10">
                      <Phone className="h-5 w-5 text-sunset-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50">Phone</p>
                      <p className="font-semibold">{siteConfig.publicPhone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.publicEmail}`}
                    className="flex items-center gap-3 text-charcoal/80 transition-colors hover:text-sunset-orange"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-prairie-blue/20 to-deep-sky-blue/10">
                      <Mail className="h-5 w-5 text-prairie-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50">Email</p>
                      <p className="break-all font-semibold">{siteConfig.publicEmail}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`sms:${siteConfig.publicPhoneTel}`}
                    className="flex items-center gap-3 text-charcoal/80 transition-colors hover:text-sunset-orange"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-warm-amber/20 to-sand/30">
                      <MessageSquare className="h-5 w-5 text-warm-amber" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50">Text Message</p>
                      <p className="font-semibold">Send a Text</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sand/50 bg-gradient-to-br from-prairie-blue/10 to-warm-cream p-6">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-prairie-blue" />
                <h3 className="font-display text-lg text-charcoal">Business Hours</h3>
              </div>
              <p className="text-charcoal/80">{siteConfig.businessHours}</p>
            </div>

            <div className="rounded-2xl border border-sand/50 bg-white/80 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-soft-sage" />
                <h3 className="font-display text-lg text-charcoal">Confidentiality</h3>
              </div>
              <p className="text-sm leading-relaxed text-charcoal/70">
                We treat the information you share with respect and use it to respond to your
                inquiry. Your conversation is handled with care and discretion.
              </p>
            </div>

            <MagneticButton href={`tel:${siteConfig.publicPhoneTel}`} variant="primary" className="w-full">
              <Phone className="h-4 w-4" />
              Call {siteConfig.publicPhone}
            </MagneticButton>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
