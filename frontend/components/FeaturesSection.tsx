"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { features } from "@/constants/data";
import { FeatureType } from "@/types";

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  feature: FeatureType;
  isActive: boolean;
}) {
  return (
    <div
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "inline-flex rounded-lg p-3 ",
          isActive
            ? "bg-blue-600 text-slate-100 dark:text-slate-100"
            : "bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200"
        )}
      >
        <feature.icon />
      </div>
      <h3
        className={clsx(
          "mt-6 text-sm font-medium border-0",
          isActive ? "text-blue-600" : "text-slate-600 dark:text-slate-100"
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900 dark:text-slate-200">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 dark:bg-zinc-800 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full dark:hidden"
                src={feature.image_light}
                alt=""
                sizes="52.75rem"
              />
              <Image
                className="w-full hidden dark:flex"
                src={feature.image_dark}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }: { selectedIndex: number }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl dark:bg-zinc-800 rounded-xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
                    featureIndex !== selectedIndex && "opacity-60"
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full dark:hidden"
                      src={feature.image_light}
                      alt=""
                      sizes="52.75rem"
                    />
                    <Image
                      className="w-full dark:flex hidden"
                      src={feature.image_dark}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto md:text-center">
          <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
            Streamline Your Security Operations
          </h2>
          <p className="text-sm md:text-base my-4 text-black/80 dark:text-white/80 font-normal dark:text-muted-dark text-center max-w-2xl mx-auto">
            Empower your business with tools designed to automate takedowns,
            secure passwords, trace domains, and enhance frontend security—all
            in one place.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
