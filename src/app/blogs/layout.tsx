import { Header } from "@/components/common/Header";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import React, { ReactNode } from "react";

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      <ContactUsSection />
    </div>
  );
}
