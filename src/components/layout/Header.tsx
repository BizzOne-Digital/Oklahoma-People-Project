"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { navigation, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>

      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full min-w-0 overflow-x-clip transition-all duration-500",
          "bg-warm-cream",
          isHome && !scrolled
            ? "rounded-b-[2rem] shadow-sm"
            : "border-b border-sand/40 shadow-md shadow-sunset-orange/5",
          scrolled ? "py-2" : "py-3"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-wide flex min-w-0 items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-md sm:h-12 sm:w-12">
              <Image
                src="/images/oklahoma-people-project-logo.png"
                alt=""
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-base leading-tight text-charcoal lg:text-lg">
                Oklahoma People
              </span>
              <span className="block font-display text-base leading-tight text-charcoal lg:text-lg">
                Project
              </span>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <nav
            className="hidden flex-1 items-center justify-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4",
                    isActive
                      ? "text-sunset-orange"
                      : "text-charcoal/75 hover:text-sunset-orange"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${siteConfig.publicPhoneTel}`}
              className="whitespace-nowrap text-sm font-semibold text-sunset-orange transition-colors hover:text-warm-amber"
            >
              {siteConfig.publicPhone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-warm-amber via-sunset-orange to-[#c44e15] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sunset-orange/30 transition-all hover:shadow-lg hover:shadow-sunset-orange/40 hover:brightness-105"
            >
              Explore Your Options
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full p-2 text-charcoal transition-colors hover:bg-sand/50 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>

      {/* Sticky mobile call button */}
      <a
        href={`tel:${siteConfig.publicPhoneTel}`}
        className="fixed right-3 bottom-3 left-3 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-warm-amber via-sunset-orange to-[#c44e15] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-sunset-orange/30 sm:right-4 sm:left-auto sm:px-5 lg:hidden"
      >
        Talk With Our Team
      </a>
    </>
  );
}
