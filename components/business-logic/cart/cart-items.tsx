"use client";

import { Card } from "@/components/ui/card";
import {
  decreaseQuantityInCart,
  increaseQuantityInCart,
  removefromCartFn,
} from "@/lib/redux/features/cart/cart-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { Delete, Minus, Plus } from "lucide-react";
import Image from "next/image";


const CartItem = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatcher = useAppDispatch();
  

  const handleDeleteFromCart = (orderId: string) => {
    dispatcher(removefromCartFn(orderId));
  };

  const handleDecreseQuantityFromCart = (orderId: string) => {
    dispatcher(decreaseQuantityInCart(orderId));
  };

  const handleIncreaseQuantityFromCart = (orderId: string) => {
    dispatcher(increaseQuantityInCart(orderId));
  };

  return (
    <Card className="bg-white rounded-2xl px-5 py-5 border-none shadow-2xl ">
      <div className="text-[#62AA67] font-[700] text-[25px] postm-1:text-[27px] postm-2:text-[29px] sm:text-[30px]">
        <span>Cart items ({cart.length})</span>
        <p className="text-[#707070] font-[500] text-[14px] postm-1:text-[15px] postm-2:text-[16px] sm:text-[17px]">
          Review your sustainable selections
        </p>
      </div>
      <div className="max-h-[55vh] overflow-y-auto hide-scrollbar">
        {cart.map((content, index) => (
          <div key={index} className="flex gap-2 items-center my-3">
            <div className="w-20  aspect-square relative rounded overflow-hidden bg-gray-100">
              <Image
                src={content.imageUrl}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-[#454444] font-[500]">
                <span className="text-[12px] postm-1:text-[13px] postm-2:text-[15px] sm:text-[17px]">
                  {content.title}
                </span>
                <Delete
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => handleDeleteFromCart(content.id)}
                />
              </div>
              <p className="text-[#707070] text-[10px]  postm-2:text-[11px] sm:text-[12px] -mt-1">
                {content.description}
              </p>
              <div>
                <span className="text-black border border-[#A9A9A9] px-2 py-0 rounded-2xl flex items-center justify-center max-w-[90px]  text-nowrap text-[10px]">
                  {content.type}
                </span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center space-x-1 text-black">
                  <Minus
                    className="h-4 w-4 border p-[2px] rounded-sm cursor-pointer"
                    onClick={() =>
                      handleDecreseQuantityFromCart(content.id)
                    }
                  />
                  <span>{content.addToCart}</span>
                  <Plus
                    className="h-4 w-4 border p-[2px] rounded-sm cursor-pointer"
                    onClick={() =>
                      handleIncreaseQuantityFromCart(content.id)
                    }
                  />
                </div>
                <div className="text-black  font-[600] flex items-center text-[14px]">
                  {content.addToCart * content.price}$
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CartItem;
