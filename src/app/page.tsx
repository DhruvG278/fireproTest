import AboutUs from "@/components/AboutUsSection/AboutUsSection";
import { Header } from "@/components/common/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection/KeyFeaturesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <HeroSection />
      <KeyFeaturesSection />
      <AboutUs />
    </div>
  );
}
