import Link from "next/link";
import { AnimatedBirdLogo } from "@/components/ui/AnimatedBirdLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center gradient-hero px-4">
      <div className="text-center">
        <AnimatedBirdLogo size={120} showGlow className="mx-auto mb-8" />
        <h1 className="mb-4 font-display text-6xl gradient-text sm:text-8xl">404</h1>
        <h2 className="mb-4 font-display text-2xl text-charcoal sm:text-3xl">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-charcoal/70">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let us help
          you find your way back.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton href="/" variant="primary">
            Return Home
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Contact Us
          </MagneticButton>
        </div>
        <p className="mt-8 text-sm text-charcoal/50">
          Or try{" "}
          <Link href="/services" className="text-sunset-orange hover:underline">
            our services page
          </Link>
        </p>
      </div>
    </section>
  );
}
