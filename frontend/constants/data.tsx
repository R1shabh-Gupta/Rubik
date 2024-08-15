import { Icon } from "@iconify/react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconEye,
  IconFlagDown,
  IconZoomScan,
} from "@tabler/icons-react";

import {
  FAQs,
  FooterLink,
  LinkItem,
  SocialIconProps,
  SocialLink,
  Testimonial,
} from "@/types";

export const links: LinkItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "AutoTakedown",
    href: "/dashboard/autotakedown",
    icon: (
      <IconFlagDown className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Breach Detector",
    href: "/dashboard/breachdetector",
    icon: (
      <IconEye className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Domain Tracer",
    href: "/dashboard/domaintracer",
    icon: (
      <IconZoomScan className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "/",
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export const footerLinks: FooterLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "AutoTakedown",
    href: "/dashboard/autotakedown",
  },
  {
    name: "BreachDetector",
    href: "/dashboard/breachdetector",
  },
  {
    name: "DomainTracer",
    href: "/dashboard/domaintracer",
  },
];

export const socialItems: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rishabhofficial/",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:linkedin" />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/R1shabh-Gupta",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:github" />
    ),
  },
];

export const testimonials: Testimonial[] = [
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Emma Thompson",
    role: "Cybersecurity Analyst at SecureNet",
    content:
      "Rubik has transformed our approach to frontend security. The automated takedown requests and detailed domain insights have streamlined our processes and enhanced our threat response.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    name: "Liam Brown",
    role: "Security Engineer at CyberGuard",
    content:
      "With Rubik, tracking domain ownership and detecting breaches is effortless. The comprehensive security features have become indispensable in our toolkit.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260250",
    name: "Sophia Garcia",
    role: "IT Manager at SafeData",
    content:
      "Rubik’s automated domain takedown and breach detection features have significantly improved our security posture. It’s user-friendly and delivers precise, actionable insights.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260251",
    name: "James Wilson",
    role: "Lead Developer at SecuriTech",
    content:
      "Integrating Rubik into our security operations has boosted efficiency. The domain tracking and breach scanning capabilities are top-notch and essential for our team.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260252",
    name: "Olivia Davis",
    role: "Security Analyst at ThreatIntel",
    content:
      "Rubik simplifies complex security tasks. Its tools for domain management and breach detection are easy to use and incredibly effective.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260253",
    name: "Benjamin Moore",
    role: "CTO at DefendIT",
    content:
      "Rubik has elevated our security measures. The comprehensive domain insights and breach monitoring features give us confidence in our frontend security strategy.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260254",
    name: "Chloe Martinez",
    role: "CEO at SecureWave",
    content:
      "Rubik offers unparalleled security solutions. The automated takedown and domain tracking features are reliable and have become essential for our operations.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260255",
    name: "Oliver Johnson",
    role: "Marketing Director at CyberMetrics",
    content:
      "The insights provided by Rubik are invaluable. Its user-friendly interface and powerful features make it a key component of our security toolkit.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Sarah Thompson",
    role: "Cybersecurity Consultant at InsightSec",
    content:
      "Rubik has revolutionized our approach to domain security. Its intuitive tools and comprehensive features save us time and enhance our security protocols.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    name: "Tom Evans",
    role: "Lead Analyst at BrightSec",
    content:
      "Rubik’s ability to scan for breaches and manage domain information is unmatched. It’s an essential tool that has streamlined our security operations.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260250",
    name: "Emily Parker",
    role: "Security Researcher at DataShield",
    content:
      "The automated takedown requests and domain tracking features of Rubik are game-changers. They allow us to focus on strategic security tasks rather than manual processes.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260251",
    name: "Daniel Moore",
    role: "Chief Security Officer at TrendSec",
    content:
      "Rubik stands out for its ease of use and comprehensive features. It’s perfect for managing domain security and tracking breaches effectively.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260252",
    name: "Rachel Lee",
    role: "Operations Director at SecureAnalytica",
    content:
      "Rubik has streamlined our security workflows. The detailed domain insights and breach detection capabilities are both impressive and reliable.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260253",
    name: "James King",
    role: "Lead Data Security Engineer at DataSecure",
    content:
      "The robust security features of Rubik give us peace of mind. We trust it to handle sensitive information and deliver accurate results quickly.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260254",
    name: "Sophia Martinez",
    role: "Security Consultant at InfoGuard",
    content:
      "Rubik has simplified my security analysis tasks. Its reliability and effectiveness make it a valuable tool for any security-focused professional.",
  },
  {
    avatar: "https://i.pravatar.cc/150?u=a042581f4e290260255",
    name: "Benjamin Walker",
    role: "Business Security Analyst at VisionSec",
    content:
      "Rubik is a powerful tool that has provided deeper insights into our security landscape. Its ease of use and efficiency are unmatched.",
  },
];

export const faqs: FAQs[] = [
  {
    title: "Is Rubik really free?",
    content:
      "Yes, Rubik is 100% free to use. We believe in providing top-notch security tools accessible to everyone, with no hidden charges.",
  },
  {
    title: "Is Rubik safe to use?",
    content:
      "Absolutely. Rubik is designed with security as a top priority. Your data is handled with the utmost care, and we use industry-standard security practices to ensure your information stays protected.",
  },
  {
    title: "What stage of development is Rubik in?",
    content:
      "Rubik is currently in the development and testing phase. We're continuously improving the app based on user feedback to ensure a robust and reliable security toolkit.",
  },
  {
    title: "How can I contribute to Rubik’s development?",
    content:
      "We welcome feedback and suggestions from our users! You can share your thoughts through our contact page or join our community to help shape the future of Rubik.",
  },
  {
    title: "Will Rubik remain free once it's fully developed?",
    content:
      "Yes, Rubik will remain free even after the development phase. Our goal is to provide powerful security tools that are accessible to everyone, regardless of budget.",
  },
];