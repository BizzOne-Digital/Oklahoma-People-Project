"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { privacyPolicySections } from "@/data/privacy-policy";
import { cn } from "@/lib/utils";

export function PrivacyTableOfContents() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden no-print">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-sand/50 bg-white/80 px-4 py-3 text-sm font-medium"
          aria-expanded={mobileOpen}
        >
          Table of Contents
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", mobileOpen && "rotate-180")}
          />
        </button>
        {mobileOpen && (
          <nav className="mt-2 rounded-xl border border-sand/50 bg-white/80 p-4" aria-label="Privacy policy sections">
            <ol className="space-y-2 text-sm">
              {privacyPolicySections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-charcoal/70 hover:text-sunset-orange"
                  >
                    {section.number}. {section.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      <nav
        className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-sand/50 bg-white/80 p-6 lg:block no-print"
        aria-label="Privacy policy sections"
      >
        <h2 className="mb-4 font-display text-lg text-charcoal">Contents</h2>
        <ol className="space-y-2 text-sm">
          {privacyPolicySections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="text-charcoal/70 transition-colors hover:text-sunset-orange"
              >
                {section.number}. {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
