"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppSelector } from "@/lib/redux/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import DeliveryAddressForm from "./delivery-address";
import { useState } from "react";

const OrderSummary = () => {
  const cart = useAppSelector((state) => state.cart);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const router = useRouter();

  console.log("Is Dialog Open : ",isDialogOpen)

  const summary = cart.reduce(
    (acc, item) => {
      acc.totalAddedToCart += item.addToCart;
      acc.totalPrice += item.addToCart * item.price;
      return acc;
    },
    {
      totalAddedToCart: 0,
      totalPrice: 0,
    }
  );

  return (
    <Card className="border-none shadow-2xl rounded-2xl  px-9 max-w-md">
      <h1 className="text-[#62AA67] font-[700] text-[25px] postm-1:text-[27px] postm-2:text-[29px] sm:text-[30px] ">
        Order Summary
      </h1>
      <div>
        <div className="flex justify-between items-center text-[#4E4E4E] font-[500] text-[14px] postm-1:text-[17px] postm-2:text-[18px] sm:text-[19px]">
          <span>Subtotal ({summary.totalAddedToCart})</span>
          <span>${summary.totalPrice}</span>
        </div>
        <div className="flex justify-between items-center text-[#4E4E4E] font-[500] text-[14px] postm-1:text-[17px] postm-2:text-[18px] sm:text-[19px]">
          <span>Delivery Charges</span>
          <span className="text-[#78BE7D]">
            {summary.totalPrice < 101 ? "8$" : "Free"}
          </span>
        </div>
      </div>
      <div className="h-[1px] bg-[#D6D6D6]" />
      <div className="flex justify-between  items-center font-[700] text-[20px] postm-2:text-[23px] sm:text-[26px] text-[#4E4E4E]">
        <span>Total</span>
        <span>${summary.totalPrice}</span>
      </div>

      {/* Buttons  */}
      <div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="text-[21px] w-full bg-[#6DBE73] rounded-2xl my-1 py-6 hover:bg-green-700">
              Proceed to checkout
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white border-none text-black !overflow-y-auto max-h-[90vh] hide-scrollbar">
            <DialogHeader>
              <DialogTitle>
                <div className="flex space-x-2 items-center text-[#62AA67] font-[700] text-[23px]">
                  <CgProfile className="h-6 w-6" />
                  <span>Delivery Details</span>
                </div>
                <p className="text-[#707070] font-[500] text-[14px] postm-2:text-[16px] text-start mt-1 ">
                  Enter your delivery information
                </p>
              </DialogTitle>
            </DialogHeader>
            <DeliveryAddressForm setIsDialogOpen={setIsDialogOpen} />
          </DialogContent>
        </Dialog>
        <Button
          className="text-[19px] w-full rounded-2xl text-[#000000] my-1 py-6 bg-gray-100 hover:bg-gray-200"
          onClick={() => router.back()}
        >
          Continue Shopping
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-[#707070] text-sm postm-2:text-[16px] md:text-[15px]">
          <div className="flex items-center  my-1">
            <Image src="/truck.png" height={12} width={12} alt="" />
            <p>Free delivery for orders above $100</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/eco.png" height={12} width={12} alt="" />
            <p>Free delivery for orders above $100</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderSummary;
