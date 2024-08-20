import { Card } from "@/components/ui/card";

import {
  IconFlagDown,
  IconNotes,
  IconPasswordFingerprint,
  IconZoomScan,
} from "@tabler/icons-react";

const Dashboard = () => {
  const featureCards = [
    {
      title: "AutoTakedown",
      href: "/dashboard/autotakedown",
      icon: IconFlagDown,
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
      content:
        "Automatically process and handle takedown requests with ease. Upload the content you want to address, and let our tool take care of the rest.",
    },
    {
      title: "Password Generator",
      href: "/dashboard/passwordgenerator",
      icon: IconPasswordFingerprint,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
      content:
        "Generate strong and secure passwords for your accounts. Customize the length and complexity to ensure your passwords are robust and unique.",
    },
    {
      title: "Domain Tracer",
      href: "/dashboard/domaintracer",
      icon: IconZoomScan,
      iconForeground: "text-sky-700",
      iconBackground: "bg-sky-50",
      content:
        "Trace domain details effortlessly. Enter a domain name to get comprehensive information and insights about it using urlscan.io.",
    },
    {
      title: "Frontend Security Notes",
      href: "/dashboard/notes",
      icon: IconNotes,
      iconForeground: "text-yellow-700",
      iconBackground: "bg-yellow-50",
      content:
        "Access detailed notes and guidelines on frontend security best practices. Enhance your knowledge and skills to protect your applications from vulnerabilities.",
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="px-2 py-6 sm:py-0">
      <h1 className="flex gap-1 text-2xl font-semibold">
        Hey, <span className="text-[#E51015]">Welcome back</span> 👋
      </h1>

      <Card className="divide-y divide-gray-200 overflow-hidden rounded-lg dark:divide-gray-800 dark:bg-gray-800 bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-8">
        {featureCards.map((feature, actionIdx) => (
          <div
            key={feature.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === featureCards.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === featureCards.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white dark:bg-black p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  feature.iconBackground,
                  feature.iconForeground,
                  "inline-flex rounded-lg p-3 ring-2 ring-white"
                )}
              >
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
                <a href={feature.href} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {feature.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">
                {feature.content}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Dashboard;
