import Script from "next/script";
import { siteConfig } from "@/config/site";

export function LeadConnectorTracking() {
  const { scriptUrl, trackingId } = siteConfig.externalTracking;

  if (!trackingId) {
    return null;
  }

  return (
    <Script
      src={scriptUrl}
      data-tracking-id={trackingId}
      strategy="afterInteractive"
    />
  );
}
