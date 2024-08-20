"use client";

import { faqs } from "@/constants/data";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQs() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40"
      id="faqs"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h2 className="w-full max-w-3xl bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text px-2 text-center text-3xl font-bold leading-7 tracking-tight text-transparent md:text-5xl">
          <span className="inline-block md:hidden">Acme&apos;s FAQs</span>
          <span className="hidden md:inline-block">
            Rubik&apos;s Frequently asked questions
          </span>
        </h2>

        <Accordion
          fullWidth
          keepContentMounted
          itemClasses={{
            base: "px-0 md:px-2 md:px-6",
            title: "font-medium",
            trigger: "py-6 flex-row-reverse",
            content: "pt-0 pb-6 text-base text-default-500",
            indicator: "rotate-0 data-[open=true]:-rotate-45",
          }}
          items={faqs}
          selectionMode="multiple"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon
                  className="text-secondary"
                  icon="lucide:plus"
                  width={24}
                />
              }
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
