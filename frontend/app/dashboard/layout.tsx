"use client";

import { cn } from "@/lib/utils";

import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <DashboardSidebar />
      <div className="flex flex-1 overflow-auto">
        <ScrollArea className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
