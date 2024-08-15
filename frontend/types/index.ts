import type { IconProps } from "@iconify/react";
import { ReactNode } from "react";

export interface LinkItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: (props: SocialIconProps) => JSX.Element;
}

export interface FooterLink {
  name: string;
  href: string;
}

export type Testimonial = {
  avatar: string;
  name: string;
  role: string;
  content: string;
};

export type FAQs = {
  title: string;
  content: string;
};

export type SocialIconProps = Omit<IconProps, "icon">;
