import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import React from "react";

const PolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <ContactUsSection />
    </div>
  );
};

export default PolicyLayout;
