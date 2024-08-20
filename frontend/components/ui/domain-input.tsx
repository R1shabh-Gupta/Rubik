"use client";

import type { TextAreaProps } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { Textarea } from "@nextui-org/react";
import React from "react";

interface DomainInputProps extends TextAreaProps {
  onSubmit?: () => void;
}

const DomainInput = React.forwardRef<HTMLTextAreaElement, DomainInputProps>(
  ({ classNames = {}, onSubmit, ...props }, ref) => {
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
        maxRows={1}
        placeholder="Enter your domain here"
        radius="lg"
        variant="bordered"
        {...props}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (onSubmit) {
              onSubmit();
            }
          }
        }}
      />
    );
  }
);

export default DomainInput;

DomainInput.displayName = "DomainInput";
