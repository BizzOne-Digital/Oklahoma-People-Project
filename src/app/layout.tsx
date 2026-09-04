import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import { organizationJsonLd } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LeadConnectorTracking } from "@/components/layout/LeadConnectorTracking";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/oklahoma-people-project-logo.png",
    apple: "/images/oklahoma-people-project-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen w-full min-w-0 flex-col overflow-x-clip">
        <LoadingScreen />
        <SmoothScroll>
          <Header />
          <ScrollProgress />
          <main id="main-content" className="min-w-0 flex-1 overflow-x-clip">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <LeadConnectorTracking />
      </body>
    </html>
  );
}
