export const siteConfig = {
  name: "Oklahoma People Project",
  shortName: "OPP",
  tagline: "Helpful Resources for Oklahoma Homeowners",
  description:
    "Compassionate support and helpful information for Oklahoma homeowners behind on property taxes or concerned about a possible property tax sale.",
  url: "https://oklahomapeopleproject.com",
  publicEmail: "polarbear91@hotmail.com",
  publicPhone: "(405) 829-6699",
  publicPhoneTel: "+14058296699",
  businessHours: "Monday–Friday, 10:00 AM–5:00 PM",
  businessHoursShort: "Mon–Fri, 10 AM–5 PM",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  disclaimer:
    "Information on this website is provided for general informational purposes and should not be considered legal, financial or tax advice. Outcomes cannot be guaranteed.",
  mission:
    "To help Oklahoma homeowners understand difficult property-tax situations and explore options that may work for them.",
  copyright: `© ${new Date().getFullYear()} Oklahoma People Project. All rights reserved.`,
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const colors = {
  sunsetOrange: "#D95F22",
  warmAmber: "#F3A332",
  prairieBlue: "#4B809D",
  deepSkyBlue: "#24566F",
  warmCream: "#FFF8EC",
  sand: "#EAD8BF",
  charcoal: "#222629",
  softSage: "#78806A",
  white: "#FFFFFF",
} as const;

export const reassuranceMessages = [
  "You're Not Alone",
  "Every Situation Is Different",
  "Friendly & Confidential",
  "Start With a Conversation",
] as const;
