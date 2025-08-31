import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "react-hot-toast";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";
import { images } from "@/utils/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protech AI",
  description: "Protech AI",
  icons: {
    icon: "/assets/icon.png", // path from public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
