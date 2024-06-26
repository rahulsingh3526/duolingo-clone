import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar style="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="h-full max-w-[1056px] mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
