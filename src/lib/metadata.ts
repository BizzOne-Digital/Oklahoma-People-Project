import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/oklahoma-people-project-logo.png`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/images/oklahoma-people-project-logo.png`],
    },
    keywords: [
      "Oklahoma property tax resources",
      "delinquent property tax information",
      "Oklahoma homeowners",
      "property tax sale information",
      "homeowner assistance resources",
    ],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.publicPhoneTel,
  email: siteConfig.publicEmail,
  openingHours: "Mo-Fr 10:00-17:00",
  areaServed: {
    "@type": "State",
    name: "Oklahoma",
  },
  image: `${siteConfig.url}/images/oklahoma-people-project-logo.png`,
};
