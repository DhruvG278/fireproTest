import AboutUs from "@/components/AboutUsSection/AboutUsSection";
import { Header } from "@/components/common/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection/KeyFeaturesSection";
import Services from "@/components/ServiceSection/ServiceSection";
import TestimonialsCarousel from "@/components/TestimonialSection/TestimonialSection";
import WhatSetsUsApart from "@/components/WhatSetsUsApartSection/WhatSetsUsApartSection";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientPortalSection from "@/components/ClientPortalSection/ClientPortalSection";
import WhyClientsSection from "@/components/WhyClientsSection/WhyClientSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-full overflow-hidden">
        <HeroSection />
        <KeyFeaturesSection />
        <TestimonialsCarousel />
        <AboutUs />
        <WhatSetsUsApart />
        <Services />
        <ClientPortalSection />
        <WhyClientsSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
