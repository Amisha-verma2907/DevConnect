"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Don't show Navbar on auth pages
  const showNavbar = !["/sign-up", "/login"].includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="">{children}</main>
    </>
  );
};

export default ClientLayout;
