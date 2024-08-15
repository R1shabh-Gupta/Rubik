"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { links } from "@/constants/data";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  console.log(user);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? (
            <h1 className="font-semibold text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-logo">
              Rubik
            </h1>
          ) : (
            <h1 className="font-semibold text-lg sm:text-xl text-slate-800 dark:text-slate-200 font-logo">
              R
            </h1>
          )}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => {
              if (link.label === "Logout") {
                return (
                  <SignOutButton key={idx}>
                    <SidebarLink key={idx} link={link} />
                  </SignOutButton>
                );
              } else {
                return <SidebarLink key={idx} link={link} />;
              }
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <UserButton />
          {open && <p className="text-sm font-semibold">{user?.fullName}</p>}
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default DashboardSidebar;
