"use client";

import { Card } from "@/components/ui/card";
import { Cart } from "@/lib/redux/features/cart/cart-slice";
import { Order } from "@/lib/redux/features/order/order-slice";
import { useAppSelector } from "@/lib/redux/hook";
import Image from "next/image";
import { TbRotateClockwise } from "react-icons/tb";

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
      {orders.map((order: Order) => (
        <Card
          key={order.orderId}
          className="bg-white border-none px-5 pt-3 pb-6 flex flex-col md:flex-row gap-4 shadow-2xl rounded-lg"
        >
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <span className="font-[600] text-[#353535] text-[14px] postm-2:text-[17px] md:text-[19px]">
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
            <p className="text-[#707070] font-[500] text-[11px] postm-2:text-[12px]  md:text-sm text-end">
              {formatDate(order.orderDate)}
            </p>

            {order.products.map((item: Cart, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center space-x-1 sm:space-x-5">
                  <h2 className="text-center text-[#1F1F1F] text-[8px] postm-2:text-[9px] md:text-[11px] px-3 py-[2px] border !border-[#8E8E8E] rounded-lg ">
                    {item.type}
                  </h2>
                  <h1 className="text-[#353535] font-[600] text-[14px] md:text-[17px] lg:text-[19px]">
                    {item.title}
                  </h1>
                  <p className="text-[#666666]  text-[14px]  font-[600] hidden lg:block">
                    x {item.addToCart}
                  </p>
                </div>
                <div className="text-[#353535] font-[600] text-[14px] postm-2:text-[15px] md:text-[17px] lg:text-[19px] ">
                  ${(item.addToCart * item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/4 md:border-l border-dotted md:border-gray-200 md:pl-4 flex flex-col items-center justify-center space-y-3">
            <p className="text-[#707070] text-[15px] sm:text-lg">Order Total</p>
            <h1 className="text-[#353535] font-[600] text-[19px]  postm-[24px] sm:text-[27px] lg:text-4xl -mt-3 ">
              $
              {order.products
                .reduce(
                  (total: number, item: Cart) =>
                    total + item.addToCart * item.price,
                  0
                )
                .toFixed(2)}
            </h1>
            <button className="flex items-center justify-center space-x-2 text-[14px] postm-2:text-[16px] sm:text-[18px] bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full">
              <TbRotateClockwise className="h-4 w-4 sm:h-5 sm:w-5 rotate-90" />
              <span>Reorder items</span>
            </button>
            <button className="bg-[#85D58A] hover:bg-[#7cc781] cursor-pointer text-[14px] postm-2:text-[16px] sm:text-[18px] px-4 py-2 rounded-lg w-full text-[#1F1F1F]">
              Rate & Review 
            </button> 
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
