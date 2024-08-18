"use client";

import type { TextAreaProps } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { Textarea } from "@nextui-org/react";
import React from "react";

const DomainInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ classNames = {}, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        aria-label="Prompt"
        className="min-h-[40px]"
        classNames={{
          ...classNames,
          label: cn("hidden", classNames?.label),
          input: cn("py-0", classNames?.input),
        }}
        minRows={1}
        maxRows={2}
        placeholder="Enter your domain here"
        radius="lg"
        variant="bordered"
        {...props}
      />
    );
  }
);

export default DomainInput;

DomainInput.displayName = "DomainInput";
