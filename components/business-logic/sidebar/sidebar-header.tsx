import Image from "next/image";
import React from "react";

const SideBarHeader = () => {
  return (
    <div className="w-full pl-2 flex items-center space-x-4">
      <div className="bg-[#468168] w-12 h-12 flex items-center justify-center rounded-xl">
        <Image
          src="/sidebarlogoleaf.png"
          alt="Leaf logo"
          width={25}
          height={25}
        />
      </div>
      <span className="font-bold text-[#468168] text-3xl">ReHarvest</span>
    </div>
  );
};

export default SideBarHeader;
