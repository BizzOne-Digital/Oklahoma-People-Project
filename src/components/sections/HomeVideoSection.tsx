"use client";

import { siteConfig } from "@/config/site";
import { homeSectionHeaders } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const videoSrc = encodeURI(siteConfig.homeVideo);

export function HomeVideoSection() {
  return (
    <section
      className="section-padding w-full overflow-x-clip bg-gradient-to-b from-warm-cream via-sand/20 to-warm-cream"
      aria-labelledby="home-video-heading"
    >
      <div className="container-wide w-full min-w-0">
        <SectionHeader
          id="home-video-heading"
          title={homeSectionHeaders.video.title}
          subtitle={homeSectionHeaders.video.subtitle}
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-sunset-orange/30 via-warm-amber/20 to-prairie-blue/30 blur-sm sm:rounded-[2rem]" />

          <div className="relative overflow-hidden rounded-3xl border border-sand/60 bg-charcoal shadow-2xl shadow-sunset-orange/10">
            <video
              className="aspect-video h-auto w-full bg-charcoal object-contain"
              controls
              playsInline
              preload="metadata"
              poster="/images/hero-background.png"
              aria-label="Introduction video for Oklahoma People Project"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
