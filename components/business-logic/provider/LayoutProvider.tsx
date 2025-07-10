"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import SideBar from "../sidebar/sidebar";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div>
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main
        className="transition-all duration-300 ease-in-out min-h-screen"
        style={{
          marginLeft: isMobile ? "0px" : isSidebarOpen ? "280px" : "0px",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutProvider;
