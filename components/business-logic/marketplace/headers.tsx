import { Leaf } from "lucide-react";
import React from "react";

const MarketPlaceHeader = () => {
  return (
    <React.Fragment>
      <h1 className="text-[#1E4A2A] flex sm:justify-center items-center pt-3 px-2 text-[26px] postm-1_5:text-[30px] sm:text-[34px] lg:text-[36px] font-[700] space-x-1">
        <Leaf className="hidden postm-2:block h-7 w-7 sm:h-8 sm:w-8   text-[#1E4A2A] mt-2" />
        <span className="text-nowrap ">Reharvest Marketplace</span>
      </h1>
      <p className="font-[400] text-[14px] postm-1_5:text-[16px]  sm:text-[17px]  pl-2 -mt-1 text-[#22782A] sm:text-center mb-8">
        Sustainable shopping for imperfect goods{" "}
      </p>
    </React.Fragment>
  );
};

export default MarketPlaceHeader;
