"use client";

import type { RadioGroupProps, RadioProps } from "@nextui-org/react";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  RadioGroup,
  VisuallyHidden,
  useRadio,
  useRadioGroupContext,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeRadioItem = ({ icon, ...props }: RadioProps & { icon: string }) => {
  const {
    Component,
    isSelected: isSelfSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useRadio(props);

  const groupContext = useRadioGroupContext();

  const isSelected =
    isSelfSelected ||
    Number(groupContext.groupState.selectedValue) >= Number(props.value);

  const wrapperProps = getWrapperProps();

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...wrapperProps}
        className={cn(
          wrapperProps?.["className"],
          "pointer-events-none h-8 w-8 rounded-full border-black border-opacity-10 ring-0 transition-transform group-data-[pressed=true]:scale-90",
          {
            "bg-default-200 dark:bg-default-100": isSelected,
          }
        )}
      >
        <Icon className="text-default-500" icon={icon} width={18} />
      </div>
    </Component>
  );
};

const DashboardThemeSwitch = React.forwardRef<
  HTMLDivElement,
  Omit<RadioGroupProps, "children">
>(({ classNames = {}, ...props }, ref) => {
  const { setTheme } = useTheme();

  return (
    <RadioGroup
      ref={ref}
      aria-label="Select a theme"
      classNames={{
        ...classNames,
        wrapper: cn("gap-0 items-center", classNames?.wrapper),
      }}
      defaultValue="dark"
      orientation="horizontal"
      {...props}
    >
      <ThemeRadioItem
        icon="solar:moon-linear"
        value="dark"
        onClick={() => setTheme("dark")}
      />
      <ThemeRadioItem
        icon="solar:sun-2-linear"
        value="light"
        onClick={() => setTheme("light")}
      />
      <ThemeRadioItem
        icon="solar:monitor-linear"
        value="system"
        onClick={() => setTheme("system")}
      />
    </RadioGroup>
  );
});

DashboardThemeSwitch.displayName = "DashboardThemeSwitch";

export default DashboardThemeSwitch;
