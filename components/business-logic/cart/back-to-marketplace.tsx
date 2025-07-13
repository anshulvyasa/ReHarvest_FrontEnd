"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackToMarketPlace = () => {
  const router = useRouter();

  return (
    <div
      className="hidden text-[#000000] lg:flex lg:absolute left-2 top-2 items-center space-x-2 cursor-pointer"
      onClick={() => router.back()}
    >
      <MoveLeft size={24} color="currentColor" />
      <span className=" font-semibold text-lg">Back To Marketplace</span>
    </div>
  );
};

export default BackToMarketPlace;
