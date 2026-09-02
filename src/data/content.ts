import { siteConfig } from "@/config/site";

export const homeFaqs = [
  {
    question: "What should I do if I'm behind on property taxes?",
    answer:
      "Start by gathering any notices or information you have received and contact our team to discuss your situation.",
  },
  {
    question: "Does contacting you guarantee that my home can be saved?",
    answer:
      "No. Every situation is different, and no particular result can be guaranteed. Our goal is to help you understand information and explore possible options.",
  },
  {
    question: "What information should I have ready?",
    answer:
      "Helpful information may include the property address, county notices, past-due tax information and any scheduled tax-sale dates.",
  },
  {
    question: "Is my conversation confidential?",
    answer:
      "We treat the information you share respectfully and use it to respond to your inquiry and understand your situation.",
  },
  {
    question: "Do you provide legal or tax advice?",
    answer:
      "The information provided through this website is general in nature and should not be treated as legal, financial or tax advice. Visitors should consult an appropriately licensed professional when needed.",
  },
] as const;

export const situationCards = [
  {
    id: "information",
    title: "I Need Information About My Options",
    description:
      "I'm behind on property taxes and want to understand what resources or possible next steps may be available.",
    cta: "Learn About Your Options",
    href: "/services",
    gradient: "from-sunset-orange/20 via-warm-amber/10 to-prairie-blue/20",
    icon: "info",
  },
  {
    id: "scheduled",
    title: "My Property May Be Scheduled for a Tax Sale",
    description:
      "I've received information about an upcoming tax auction and need to speak with someone about my situation.",
    cta: "Talk With Our Team",
    href: "/contact",
    gradient: "from-warm-amber/20 via-sunset-orange/15 to-deep-sky-blue/20",
    icon: "calendar",
  },
  {
    id: "sold",
    title: "My Property Has Already Been Sold at Tax Auction",
    description:
      "I need information about whether there may still be steps or resources available for my situation.",
    cta: "Contact Us Today",
    href: "/contact",
    gradient: "from-prairie-blue/20 via-sand/30 to-warm-amber/15",
    icon: "help",
  },
] as const;

export const services = [
  {
    id: "delinquent",
    title: "Delinquent Property-Tax Information",
    shortDescription:
      "Understand your circumstances and learn about information and resources that may be relevant to your situation.",
    description:
      "Our team listens to your circumstances and helps you understand information and resources that may be relevant when you're behind on property taxes. We focus on clarity, not pressure.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    icon: "document",
  },
  {
    id: "tax-sale",
    title: "Upcoming Tax-Sale Support",
    shortDescription:
      "Discuss your situation if you've received notice of a possible tax auction and explore potential next steps.",
    description:
      "Homeowners who have received notice of a possible tax auction can contact our team to discuss their situation and explore potential next steps. We cannot guarantee that a sale can be delayed or prevented.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    icon: "shield",
  },
  {
    id: "solutions",
    title: "Property Solution Exploration",
    shortDescription:
      "Explore property-related options that may be worth considering depending on your individual circumstances.",
    description:
      "Some homeowners may want to explore property-related solutions depending on their circumstances. We help you think through possibilities without making assumptions about what is right for you.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    icon: "home",
  },
  {
    id: "guidance",
    title: "Personalized Next-Step Guidance",
    shortDescription:
      "Every situation is different — we focus on understanding your individual circumstances.",
    description:
      "Every situation is different, and our team focuses on understanding your individual circumstances before discussing possible next steps. You deserve guidance that feels personal, not generic.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    icon: "compass",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Get in Touch",
    description: `Call us at ${siteConfig.publicPhone} or complete the contact form and provide a few basic details. You may also send a text or leave a voicemail.`,
  },
  {
    step: 2,
    title: "Tell Us About Your Situation",
    description:
      "Share what happened and what information you have received from the county regarding your past-due property taxes.",
  },
  {
    step: 3,
    title: "Review Your Options",
    description:
      "Our team will schedule a time to learn more about your circumstances and discuss resources, options or assistance that may be available.",
  },
  {
    step: 4,
    title: "Stay Connected",
    description:
      "If you receive new information or have questions, contact our team again. We're here to help you understand your next step.",
  },
] as const;

export const benefits = [
  {
    title: "A Friendly Place to Start",
    description:
      "Reach out without fear of judgment. We're here to listen and help you take a practical first step.",
    icon: "heart",
  },
  {
    title: "Confidential Conversations",
    description:
      "Your information is treated with respect and used to understand how we can best respond to your inquiry.",
    icon: "lock",
  },
  {
    title: "Practical Information",
    description:
      "We share helpful, general information so you can better understand your situation and possible options.",
    icon: "book",
  },
  {
    title: "Personalized Attention",
    description:
      "Every homeowner's circumstances are unique. We take time to understand yours before discussing next steps.",
    icon: "user",
  },
] as const;

export const values = [
  {
    title: "Compassion",
    description: "We meet every conversation with empathy and understanding.",
    icon: "heart",
  },
  {
    title: "Respect",
    description: "Your circumstances deserve dignity, never shame or pressure.",
    icon: "handshake",
  },
  {
    title: "Confidentiality",
    description: "We treat the information you share with care and discretion.",
    icon: "lock",
  },
  {
    title: "Honesty",
    description: "We communicate clearly and never promise outcomes we cannot guarantee.",
    icon: "check",
  },
  {
    title: "Practical Guidance",
    description: "We focus on helpful, actionable information for your situation.",
    icon: "compass",
  },
  {
    title: "Community Focus",
    description: "We're dedicated to supporting Oklahoma homeowners in our community.",
    icon: "users",
  },
] as const;

export const trustIndicators = [
  "Friendly & Confidential",
  "Personalized Guidance",
  "Oklahoma Homeowner Focus",
  "No-Pressure Conversation",
] as const;

export const teamSupportCategories = [
  {
    title: "Homeowner Communication",
    description:
      "A welcoming first point of contact where you can share your situation and ask questions in your own words.",
    icon: "message",
  },
  {
    title: "Situation Review",
    description:
      "Thoughtful review of the information you provide so we can better understand your circumstances.",
    icon: "search",
  },
  {
    title: "Resource Exploration",
    description:
      "Help identifying information and resources that may be relevant to your property-tax situation.",
    icon: "map",
  },
  {
    title: "Ongoing Support",
    description:
      "Continued availability if you receive new county notices or have follow-up questions.",
    icon: "refresh",
  },
] as const;

export const homeSectionHeaders = {
  video: {
    title: "A Message for Oklahoma Homeowners",
    subtitle:
      "Watch a short introduction to learn how our team can help you explore your options with compassion and care.",
  },
  mission: {
    title: "Our Goal Is to Help Oklahoma Homeowners",
    subtitle:
      "Every situation is different — our team is here to listen, share helpful information and help you determine a practical next step.",
  },
  situation: {
    title: "Which Situation Best Describes You?",
    subtitle:
      "Select the option that feels closest to your circumstances — there is no wrong answer.",
  },
  services: {
    title: "Support Built Around Your Situation",
    subtitle:
      "Explore the ways our team can help you understand your property-tax situation and consider possible next steps.",
  },
  compassion: {
    title: "Life Happens. Reaching Out Is a Strong First Step.",
    subtitle:
      "Financial challenges can happen to anyone — we offer a welcoming place to ask questions without judgment or pressure.",
  },
  process: {
    title: "A Simple Process—Our Team Is Here to Help",
    subtitle:
      "From your first call to your next step, we walk alongside you with clarity, care and no pressure.",
  },
  benefits: {
    title: "Why Homeowners Reach Out",
    subtitle:
      "Homeowners contact us for many reasons — here is what you can expect when you start a conversation.",
  },
  faq: {
    title: "FAQs",
    subtitle:
      "Answers to common questions from Oklahoma homeowners exploring their options.",
    uppercase: true,
  },
  finalCta: {
    title: "You Don't Have to Navigate This Alone.",
    subtitle:
      "Start with a confidential conversation and learn what next steps may be available for your situation.",
  },
} as const;

export const missionIcons = [
  {
    title: "Compassion",
    description: "We listen with empathy and without judgment.",
    icon: "heart",
  },
  {
    title: "Confidentiality",
    description: "Your information is handled with care and respect.",
    icon: "lock",
  },
  {
    title: "Personalized Assistance",
    description: "Guidance tailored to your unique circumstances.",
    icon: "user",
  },
] as const;
