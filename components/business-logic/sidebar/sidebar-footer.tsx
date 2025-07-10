"use client";

import { sidebarFooterContent } from "@/config";
import { signOut } from "next-auth/react";
import Image from "next/image";

const SidebarFooter = () => {
  const handleOnClick = (action: string) => {
    if (action === "logout") {
      signOut({ redirectTo: "/" });
    }
  };

  return (
    <footer className="w-full">
      {sidebarFooterContent.map((content) => (
        <div
          className="py-2 px-1 flex items-center space-x-3 cursor-pointer pl-2 ml-3"
          key={content.id}
          onClick={() => handleOnClick(content.action)}
        >
          <Image src={content.src} height={25} width={25} alt={content.id} />
          <span className="text-[rgb(70,129,104)]">{content.title}</span>
        </div>
      ))}
    </footer>
  );
};

export default SidebarFooter;
