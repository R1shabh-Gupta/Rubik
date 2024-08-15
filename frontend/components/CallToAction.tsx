import { CircleBackground } from "@/components/ui/CircleBackground";
import { Button } from "./ui/button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-black">
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Secure Your Frontend Today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Enhance your web security in moments. Sign up for Rubik to access
            automated takedowns, breach detection, and more.
          </p>
          <div className="mt-8 flex justify-center items-center">
            <Button className="bg-white text-slate-950 hover:bg-white/90">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
