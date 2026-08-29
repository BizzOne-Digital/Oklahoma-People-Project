"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return null;

  const pathLength = 800;
  const offset = pathLength * (1 - progress);

  return (
    <div className="pointer-events-none fixed top-0 right-4 z-40 hidden h-screen w-8 lg:block">
      <svg viewBox="0 0 40 800" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24566F" />
            <stop offset="50%" stopColor="#4B809D" />
            <stop offset="100%" stopColor="#D95F22" />
          </linearGradient>
        </defs>
        <path
          d="M20,0 Q5,100 18,200 T15,400 T22,600 T12,800"
          fill="none"
          stroke="#EAD8BF"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M20,0 Q5,100 18,200 T15,400 T22,600 T12,800"
          fill="none"
          stroke="url(#scrollGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
}
