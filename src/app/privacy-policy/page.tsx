import { createPageMetadata } from "@/lib/metadata";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { PrivacyTableOfContents } from "@/components/sections/PrivacyTableOfContents";
import { privacyPolicySections } from "@/data/privacy-policy";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Oklahoma People Project website — how we collect, use and protect your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero overflow-x-clip gradient-hero">
        <div className="container-wide w-full min-w-0 px-4 sm:px-6 lg:px-8">
          <AnimatedHeading as="h1" className="mb-4 text-3xl sm:text-5xl" gradient>
            Privacy Policy
          </AnimatedHeading>
          <p className="text-charcoal/60">Last Updated: [Date to be determined]</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <PrivacyTableOfContents />
          </div>

          <div className="prose-policy lg:col-span-3">
            <p className="mb-8 text-lg leading-relaxed text-charcoal/80">
              This Privacy Policy describes how {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects, uses and shares information when you visit our website or
              contact us. Please read this policy carefully to understand our practices regarding
              your information.
            </p>

            {privacyPolicySections.map((section) => (
              <article key={section.id} id={section.id} className="mb-10 scroll-mt-28">
                <h2 className="mb-4 font-display text-2xl text-charcoal">
                  {section.number}. {section.title}
                </h2>
                <div className="whitespace-pre-line text-base leading-relaxed text-charcoal/80">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
