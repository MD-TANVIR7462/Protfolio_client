import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./../globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanvir Protfolio",
  description: "Developer Portfolio By Tanvir",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Tajul islam Tanvir",
  ],
  openGraph: {
    title: "Tajul islam Tanvir",
    description: "Web Developer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster position="top-center" />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
