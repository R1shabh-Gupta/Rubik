import { CallToAction } from "@/components/CallToAction";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
        <Navbar />
        <HeroSection />
        <Testimonials />
        <FAQs />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
