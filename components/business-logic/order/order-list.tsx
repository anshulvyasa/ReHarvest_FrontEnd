"use client";

import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/lib/redux/hook";
import Image from "next/image";

const OrderList = () => {
  const orders = useAppSelector((state) => state.order);

  const formatDate = (dateInput: string): string => {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="space-y-4">
      {orders.map((order: any) => (
        <Card
          key={order.orderId}
          className="bg-white border-none px-5 pt-3 pb-6 flex flex-col md:flex-row gap-4 shadow-2xl rounded-lg"
        >
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <span className="font-[600] text-[#353535] text-[14px]">
                  ORD-{order.orderId}
                </span>
                {order.status === "Delivered" ? (
                  <div className="hidden sm:flex items-center space-x-1 bg-[#D4EDDA] border border-[#28A745] px-2 py-[2px] rounded-lg">
                    <Image
                      src="/checkmark.png"
                      height={16}
                      width={16}
                      alt="Delivered"
                      className="mr-1"
                    />
                    <span className="text-[#28A745] font-[600] text-sm">
                      {order.status}
                    </span>
                  </div>
                ) : (
                  <div className="hidden sm:flex items-center space-x-1 bg-[#DBEAFE] border !border-[#4B91C6] px-2 py-[2px] rounded-lg">
                    <Image
                      src="/ordertruck.png"
                      height={20}
                      width={20}
                      alt="In Transit"
                    />
                    <span className="text-[#1E40AF] font-[600] text-sm">
                      {order.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[#707070] font-[500] text-[11px] sm:text-sm text-end">
              {formatDate(order.orderDate)}
            </p>

            {order.products.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center space-x-1 sm:space-x-5">
                  <h2 className="text-center text-[#1F1F1F] text-[8px] sm:text-[11px] px-3 py-[2px] border !border-[#8E8E8E] rounded-lg ">
                    {item.type}
                  </h2>
                  <h1 className="text-[#353535] font-[600] text-[16px] sm:text-[19px]">
                    {item.title}
                  </h1>
                  <p className="text-[#666666]  text-[14px] font-[600] hidden sm:block">
                    x {item.addToCart}
                  </p>
                </div>
                <div className="text-[#353535] font-[600] text-[14px] sm:text-[19px] ">
                  ${(item.addToCart * item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/4 md:border-l border-dotted md:border-gray-200 md:pl-4 flex flex-col items-center justify-center space-y-3">
            <p className="text-[#707070] text-[15px] sm:text-lg">Order Total</p>
            <h1 className="text-[#353535] font-[600] text-[20px] -mt-3 sm:text-4xl">
              $
              {order.products
                .reduce(
                  (total: number, item: any) =>
                    total + item.addToCart * item.price,
                  0
                )
                .toFixed(2)}
            </h1>
            <button className="flex items-center justify-center space-x-2 bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.126a8.974 8.974 0 01-1.636 5.161A7.004 7.004 0 0010 17a7.004 7.004 0 006.636-4.713 8.974 8.974 0 01-1.636-5.161V3a1 1 0 112 0v2.126a10.974 10.974 0 002.364 6.365A9.004 9.004 0 0110 19a9.004 9.004 0 01-8.364-12.509A10.974 10.974 0 004 5.126V3a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Reorder items</span>
            </button>
            <button className="bg-[#86EFAC] text-white px-4 py-2 rounded-lg w-full">
              Rate & Review
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
