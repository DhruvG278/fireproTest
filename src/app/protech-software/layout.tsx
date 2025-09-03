import { Header } from "@/components/common/Header";
import React from "react";

const ProtechToolsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
    </div>
  );
};

export default ProtechToolsLayout;
