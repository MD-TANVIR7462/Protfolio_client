import Dashboard from "@/components/Dashboard";
import React, { ReactNode } from "react";
import "./../globals.css"
import { Toaster } from "sonner";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className=" bg-[#110f0f] overflow-y-scroll overflow-x-hidden">
      <Toaster />
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
};

export default DashboardLayout;
