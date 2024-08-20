import { CallToAction } from "@/components/CallToAction";
import FAQs from "@/components/FAQs";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
        <NavigationBar />
        <HeroSection />
        <FeaturesSection />
        <Testimonials />
        <FAQs />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
