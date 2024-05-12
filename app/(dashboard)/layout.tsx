import Dashboard from "@/components/Dashboard";
import React, { ReactNode } from "react";
import "./../globals.css"
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className=" bg-[#110f0f] overflow-y-scroll overflow-x-hidden">
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
};

export default DashboardLayout;
