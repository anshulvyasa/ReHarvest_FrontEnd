"use client";

import InputBox from "@/components/general/input";
import { Button } from "@/components/ui/button";
import { delivery_form_data } from "@/config";
import { Truck } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

interface Delivery_FormData {
  name: string;
  email: string;
  phone_number: string;
  pincode: string;
  delivery_address: string;
  city: string;
}

const DeliveryAddressForm = ({
  setIsDialogOpen,
}: {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const session = useSession();

  const [formData, setFormData] = useState<Delivery_FormData>({
    name: session.data?.user?.name as string,
    email: session.data?.user?.email as string,
    phone_number: "",
    pincode: "",
    delivery_address: "",
    city: "",
  });

  const handleDeliveryFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // ⛔ prevent page reload
    console.log("form Data : ", formData);

    
    setFormData({
      name: session.data?.user?.name as string,
      email: session.data?.user?.email as string,
      phone_number: "",
      pincode: "",
      delivery_address: "",
      city: "",
    });
    setIsDialogOpen(false);
  };

  return (
    <form onSubmit={handleDeliveryFormSubmit}>
      {delivery_form_data.map((content, index) => (
        <InputBox
          key={index}
          {...content}
          state={formData[content.id as keyof Delivery_FormData]}
          setState={(val) =>
            setFormData((prev) => ({ ...prev, [content.id]: val }))
          }
        />
      ))}

      <div className="bg-[#F6F6EA] rounded-sm px-3 py-2">
        <h1 className="text-[#69B16E] flex items-center space-x-1">
          <Truck className=" h-4 w-4 postm-1:h-6 postm-1:w-6" />
          <span className="font-[700] text-[16px] postm-1:text-[18px] sm:text-[21px]">
            Delivery Information
          </span>
        </h1>
        <div className="text-[#8B8B8B] font-[500] text-[12px] postm-2:text-[13px] mt-4 postm-2:mt-6">
          <p>• Free delivery for orders above $100</p>
          <p>• Expected delivery: 2-4 business days</p>
          <p>• We&apos;ll send you tracking information via email/SMS</p>
        </div>
      </div>

      <Button
        type="submit"
        className="bg-[#62AA67] rounded-xl text-center w-full text-white font-[700] mt-2"
      >
        Submit To Place Order
      </Button>
    </form>
  );
};

export default DeliveryAddressForm;
