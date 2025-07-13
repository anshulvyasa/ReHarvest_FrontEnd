"use client";

import MarketPlaceHeader from "@/components/business-logic/marketplace/headers";
import ListProduct from "@/components/business-logic/marketplace/list-product";
import OrderManagement from "@/components/business-logic/marketplace/ordermanagement";
import MarketPlaceTabBar from "@/components/business-logic/marketplace/tab-bar";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const MarketPlace = () => {
  const [selectedtab, setSelectedTab] = useState<
    "all" | "edible" | "non-edible" | "recycle"
  >("all");
  const afterlarge = useMediaQuery("(min-width: 1211px)");
  const router = useRouter();

  return (
    <main className="min-h-screen py-6 px-3  w-full overflow-y-auto overflow-x-hidden  bg-gradient-to-tr from-green-50 via-white to-white relative">
      <div className="conatiner-max px-1 sm:px-10  mx-auto ">
        <MarketPlaceHeader />
        <div className="lg:!hidden sm:!mt-10 mt-4">
          <OrderManagement />
        </div>

        <div
          className={`lg:grid gap-4 mt-10  ${
            afterlarge ? "grid-cols-4" : "grid-cols-3"
          }`}
        >
          <div className={`${afterlarge ? "col-span-3" : "lg:col-span-2"}`}>
            <MarketPlaceTabBar state={selectedtab} setState={setSelectedTab} />
            <ListProduct selectedtab={selectedtab} />
          </div>

          <div className="hidden lg:block col-span-1 relative">
            <div className="fixed mr-4 max-w-sm">
              <OrderManagement />
            </div>
          </div>
        </div>
      </div>

      {/* Cart  */}
      <div
        className="fixed right-2 top-[90vh] lg:top-[85vh] lg:right-10 px-3 py-3  rounded-full bg-[#78BE7D] cursor-pointer hover:bg-green-600"
        onClick={() => router.push("/app/marketplace/cart")}
      >
        <ShoppingCart className=" h-5 w-5  lg:h-7 lg:w-7" />
      </div>
    </main>
  );
};

export default MarketPlace;
