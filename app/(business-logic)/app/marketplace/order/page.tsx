"use client";

import OrderHeader from "@/components/business-logic/order/order-header";
import OrderHistoryTab from "@/components/business-logic/order/order-history";
import OrderList from "@/components/business-logic/order/order-list";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen py-6 px-3  w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white relative">
      <div
        className="hidden lg:block absolute top-5 left-5 cursor-pointer"
        onClick={() => router.push("/app/marketplace")}
      >
        <div className="flex items-center space-x-2 text-black">
          <MoveLeft className="h-6 w-6" />
          <span className="font-[600] text-[23px]">Back To marketplace</span>
        </div>
      </div>
      <div className="px-4 sm:px-5 py-6">
        <OrderHeader />
        <OrderHistoryTab />
        <OrderList />
      </div>
    </main>
  );
};

export default OrderPage;
