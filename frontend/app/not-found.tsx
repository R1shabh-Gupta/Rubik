import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon, QueueListIcon } from "@heroicons/react/24/solid";

const NotFound = () => {
  const links = [
    {
      name: "Home",
      href: "/",
      description: "Return to the homepage.",
      icon: HomeIcon,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      description: "View and manage your dashboard.",
      icon: QueueListIcon,
    },
  ];

  return (
    <div className="top-0 z-[-2] h-screen w-screen dark:bg-black bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-xl font-semibold leading-8 text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-gray-200 text-gray-900 sm:text-5xl">
            This page does not exist
          </h1>
          <p className="mt-4 text-base leading-7 dark:text-gray-400 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul
            role="list"
            className="-mt-6 divide-y dark:divide-gray-100/20 dark:border-gray-100/20  divide-gray-900/5 border-b border-gray-900/5"
          >
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 dark:ring-gray-100/20 ring-gray-900/10">
                  <link.icon
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 dark:text-gray-200 text-gray-900">
                    <a href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 dark:text-gray-400 text-gray-600">
                    {link.description}
                  </p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon
                    className="h-5 w-5 dark:text-gray-200 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
