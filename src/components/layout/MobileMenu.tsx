"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatedBirdLogo } from "@/components/ui/AnimatedBirdLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.nav
        className="absolute top-0 right-0 flex h-full w-[min(100%,320px)] flex-col bg-gradient-to-b from-warm-cream via-sand/20 to-warm-cream shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-sand/50 p-4">
          <AnimatedBirdLogo size={48} animate={false} />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-sand/50"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                  pathname === item.href
                    ? "bg-gradient-to-r from-sunset-orange/15 to-warm-amber/10 text-sunset-orange"
                    : "text-charcoal hover:bg-sand/40"
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3 border-t border-sand/50 p-4">
          <a
            href={`tel:${siteConfig.publicPhoneTel}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-deep-sky-blue/10 py-3 font-semibold text-deep-sky-blue"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.publicPhone}
          </a>
          <MagneticButton href="/contact" variant="primary" className="w-full">
            Explore Your Options
          </MagneticButton>
        </div>
      </motion.nav>
    </motion.div>
  );
}
