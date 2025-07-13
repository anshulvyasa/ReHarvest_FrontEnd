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
      <div className="px-4 px-10 py-6">
        <OrderHeader />
        <OrderHistoryTab />
        <OrderList />
      </div>
    </main>
  );
};

export default OrderPage;
