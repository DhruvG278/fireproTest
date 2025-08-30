import { Header } from "@/components/common/Header";
import React, { ReactNode } from "react";

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
