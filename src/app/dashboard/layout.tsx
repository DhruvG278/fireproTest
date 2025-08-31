import { DashboardHeader } from "@/components/common/DashboardHeader";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;
