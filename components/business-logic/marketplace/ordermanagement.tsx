"use client";

import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";
import { useRouter } from "next/navigation";

const OrderManagement = () => {
  const router = useRouter();

  return (
    <Card className="border-none bg-white shadow-2xl py-3 px-5 mt-4  hover:scale-101 duration-300 transition-all ">
      <div className="flex space-x-1 items-center justify-center">
        <Package className="h-5 w-5 text-[#6dad75] " />
        <h1 className="text-[#78BE7D] font-[700] text-[22px]  ">
          Order Management
        </h1>
      </div>
      <p className="text-[14px] sm:text-[16px] text-[#828282] font-[500] -mt-6 text-center">
        Track your sustainable products
      </p>
      <div
        className="text-white px-5 py-3 bg-[#78BE7D] hover:bg-[#6aa76e] cursor-pointer rounded-2xl flex justify-center items-center space-x-2"
        onClick={() => router.push("/app/order")}
      >
        <Package className="h-4 w-4 " />
        <span className=" text-[17px] sm:text-[18px] ">View My Orders</span>
      </div>
      <p className="font-[500] text-[13px] sm:text-[15px] text-[#828282] text-center -mt-4">
        Track deliveries,reorder items and manage your purchase history
      </p>
    </Card>
  );
};

export default OrderManagement;
