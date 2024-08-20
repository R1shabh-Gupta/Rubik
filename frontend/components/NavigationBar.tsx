"use client";

import { cn } from "@/lib/utils";
import type { NavbarProps } from "@nextui-org/react";

import { menuItems } from "@/constants/data";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import FeedbackButton from "./FeedbackButton";
import ThemeToggle from "./layout/ThemeToggle/theme-toggle";
import GithubButton from "./ui/github-button";

export default function NavigationBar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    setActiveSection(window.location.hash);
  }, []);

  const handleMenuItemClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      {...props}
      isBordered
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarBrand>
        <Link
          className="font-semibold text-lg sm:text-2xl text-slate-800 dark:text-slate-200 font-logo z-10"
          href="/"
        >
          Rubik
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden h-11 gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 md:flex dark:bg-default-100/50"
        justify="center"
      >
        <NavbarItem>
          <Link
            onClick={() => handleMenuItemClick("#features")}
            className={cn(
              "w-full text-default-500",
              activeSection === "#features" && "font-bold text-white"
            )}
            href="#features"
            size="sm"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleMenuItemClick("#testimonials")}
            className={cn(
              "w-full text-default-500",
              activeSection === "#testimonials" && "font-bold text-white"
            )}
            href="#testimonials"
            size="sm"
          >
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleMenuItemClick("#feedback")}
            className={cn(
              "w-full text-default-500",
              activeSection === "#feedback" && "font-bold text-white"
            )}
            size="sm"
          >
            <FeedbackButton />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleMenuItemClick("#faqs")}
            className={cn(
              "w-full text-default-500",
              activeSection === "#faqs" && "font-bold text-white"
            )}
            href="#faqs"
            size="sm"
          >
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="ml-2 flex items-center justify-center gap-3">
          <Button
            className="hidden border-small border-indigo-500/20 bg-indigo-500/10 text-secondary-800 sm:flex"
            color="secondary"
            radius="full"
            style={{
              boxShadow: "inset 0 0 4px #bf97ff70",
            }}
            variant="flat"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <ThemeToggle />
          <GithubButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-[70vh] bg-default-200/50 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              onClick={() => handleMenuItemClick(item.link)}
              className={cn(
                "w-full text-default-500",
                activeSection === item.link && "font-bold text-white"
              )}
              href={item.link}
              size="md"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
