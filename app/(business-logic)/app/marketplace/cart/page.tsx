"use client";

import BackToMarketPlace from "@/components/business-logic/cart/back-to-marketplace";
import CartHeader from "@/components/business-logic/cart/cart-header";
import CardItem from "@/components/business-logic/cart/cart-items";
import OrderSummary from "@/components/business-logic/cart/order-summary";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/redux/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const router = useRouter();
  const layout_width = useMediaQuery("(min-width:1259px)");

  return (
    <main className="min-h-screen py-6 px-5  w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white relative">
      <BackToMarketPlace />
      <CartHeader />
      {cart.length !== 0 && (
        <div>
          <div
            className={`grid  gap-6 mt-12 postm-2:mt-14 sm:mt-16 lg:mt-17 ${
              layout_width && "grid-cols-3"
            }`}
          >
            <div className={layout_width ? "col-span-2" : ""}>
              <CardItem />
            </div>
            <OrderSummary />
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className="flex justify-center items-center mt-20 postm-2:mt-27 sm:mt-30 lg:mt-35">
          <div>
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/cart.png"
                height={100}
                width={100}
                alt=""
                className=""
              />
            </div>
            <h1 className="text-[#000000] font-[700] text-[26px] postm-2:text-[30px] sm:text-[33px]  lg:text-[36px] text-center">
              Your cart is empty
            </h1>
            <p className="text-[#707070] font-[500] text-[15px] postm-1:text-[16px] postm-2:text-[17px] sm:text-[19px] text-center max-w-xl">
              Start adding some imperfect goods to make a positive environmental
              impact
            </p>
            <div className="flex max-w-3xl items-center justify-center mt-3">
              <Button
                className="text-[#FFFFFF] bg-[#6DBE73] max-w-2xl rounded-2xl px-6 py-5 sm:px-10 sm:py-6  text-[18px] postm-2:text[21px] lg:text-[23px] hover:bg-green-700"
                onClick={() => router.back()}
              >
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default Cart;
