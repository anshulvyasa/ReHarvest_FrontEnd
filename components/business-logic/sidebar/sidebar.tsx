"use client";

import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { useMediaQuery } from "usehooks-ts";
import SidebarContent from "./sidebar-content";
import SidebarFooter from "./sidebar-footer";
import SideBarHeader from "./sidebar-header";
import { cn } from "@/lib/utils";

type SideBarProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-0 left-0 z-50  "
        >
          <BiChevronsRight className="w-6 h-6 text-[#468168]" />
        </button>
      )}

      <aside
        className={cn(
          "fixed group top-0 left-0 h-screen bg-[#E4F5E5] flex flex-col z-40 transition-all duration-300 ease-in-out overflow-hidden",
          isMobile && isOpen ? "w-full" : isOpen ? "w-[280px]" : "w-0"
        )}
      >
        {isOpen && (
          <>
            <div
              className="w-10 h-10 absolute text-[#468168] right-0 top-7 flex items-center justify-center cursor-pointer z-50"
              onClick={() => setIsOpen(false)}
            >
              <BiChevronsLeft className="h-6 w-6" />
            </div>
            <header className="pt-5 pb-6 pl-[2px] relative">
              <SideBarHeader />
            </header>
            <div className="flex-1 flex flex-col justify-between">
              <SidebarContent setIsOpen={setIsOpen} />
              <SidebarFooter />
            </div>
          </>
        )}
        {/* {isOpen && (
          <div className="absolute h-screen  w-[4px] bg-[#bad8bc] right-0 hidden group-hover:block" />
        )} */}
      </aside>
    </>
  );
};

export default SideBar;
