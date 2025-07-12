"use client";

import { Card } from "@/components/ui/card";
import { Product, product } from "@/config";
import { useAppDispatch } from "@/lib/redux/hook";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";
import { nanoid } from "nanoid";
import { addToCartFn } from "@/lib/redux/features/cart/cart-slice";

const ListProduct = ({ selectedtab }: { selectedtab: string }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1210px)");
  const [products, setProducts] = useState(product);
  const dispatch = useAppDispatch();


  const productquantityIncrease = (id: string) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, addToCart: item.addToCart + 1 } : item
      )
    );
  };

  const productquantityDecrease = (id: string) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, addToCart: Math.max(0, item.addToCart - 1) }
          : item
      )
    );
  };

  const addToCart = (item: Product) => {
    if (item.addToCart == 0) {
      toast("No Item Selected", {
        classNames: {
          title: "text-lg !font-[700] !text-green-700",
          description: "!text-sm !text-black",
          toast: "bg-white border",
        },
        description: "Select atleast one item",
      });
      return;
    }

    const orderId = nanoid();
    dispatch(
      addToCartFn({
        orderId: orderId,
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
        type: item.type,
        star: item.star,
        price: item.price,
        greenPoint: item.greenPoint,
        addToCart: item.addToCart,
      })
    );

    toast("Item Added To Cart Successfully", {
      classNames: {
        title: "text-lg !font-[700] !text-green-700",
        description: "!text-sm !text-black",
        toast: "bg-white border",
      },
      description: "you can proceed to cart now...",
    });
  };

  return (
    <div
      className={`grid gap-4 p-4 mt-8 ${
        isLargeScreen ? "grid-cols-3" : "grid-cols-1 postm-2:grid-cols-2"
      }`}
    >
      {products.map((content, index) => (
        <Card
          key={index}
          className={`border-none shadow-2xl p-2 flex flex-col bg-white justify-between hover:scale-105 duration-300 transition-all h-full ${
            selectedtab === content.type || selectedtab === "all"
              ? ""
              : "hidden"
          }`}
        >
          {/* Image section */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full aspect-[3/3] relative rounded-xl overflow-hidden">
              <Image
                src={content.imageUrl}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-xl"
              />
              <div className="absolute right-1 top-1 flex space-x-1 items-center py-1 px-2 rounded-2xl bg-[#78BE7D] text-[12px]">
                <content.typeIcon className="h-4 w-4" />
                <span>{content.type}</span>
              </div>
            </div>
          </div>

          {/* Middle part that grows and balances height */}
          <div className="flex-1 flex flex-col mt-2 px-2">
            <span className="text-[#000000] font-[600] text-[19px]">
              {content.title}
            </span>

            <p className="text-[#929292] font-[500] text-[13px] min-h-[48px] mt-1">
              {content.description}
            </p>

            <div className="flex gap-1">
              {Array.from({ length: content.star }).map((_, i) => (
                <Image
                  key={`gold-${i}`}
                  src="/goldenstars.png"
                  height={20}
                  width={20}
                  alt=""
                />
              ))}
              {Array.from({ length: 5 - content.star }).map((_, i) => (
                <Image
                  key={`normal-${i}`}
                  src="/normalstars.png"
                  height={20}
                  width={20}
                  alt=""
                />
              ))}
            </div>
            <h1 className=" mt-2 text-black font-[700] text-[22px]">
              {content.price}$
            </h1>
            <p className="text-[#32AC3D] font-[600] text-[16px]">
              +{content.greenPoint} Greenpoints
            </p>
          </div>

          {/* footer  */}
          <footer className="flex px-2 justify-between items-center  mb-3 -mt-1 postm-2:flex-col postm-2:items-start">
            <div className="flex gap-2">
              <button
                className="border !border-[#D5D5D5] rounded-lg  px-3 py-1 font-[700] text-black flex justify-center items-center cursor-pointer"
                onClick={() => productquantityDecrease(content.id)}
              >
                <Minus className="h-4 w-3" />
              </button>
              <span className="text-[#4F4F4F]">{content.addToCart}</span>
              <button
                className="border !border-[#D5D5D5] rounded-lg  px-3 py-1 font-[700] text-black flex justify-center items-center cursor-pointer"
                onClick={() => productquantityIncrease(content.id)}
              >
                <Plus className="h-4 w-3" />
              </button>
            </div>
            <div
              className="flex gap-1 bg-[#78BE7D] items-center px-4 py-1 rounded-lg postm-2:mt-1 cursor-pointer"
              onClick={() => addToCart(content)}
            >
              <ShoppingCart className="h-4 w-4 text-white" />
              <span className="font-[500] text-[14px]">Add to cart</span>
            </div>
          </footer>
        </Card>
      ))}
    </div>
  );
};

export default ListProduct;
