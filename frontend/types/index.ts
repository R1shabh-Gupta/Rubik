import type { IconProps } from "@iconify/react";
import { type ImageProps } from "next/image";
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

export type TakedownReasons = {
  name: string;
  id: string;
};

export interface FeatureType {
  name: React.ReactNode;
  summary: string;
  description: string;
  image_light: ImageProps["src"];
  image_dark: ImageProps["src"];
  icon: React.ComponentType;
}
