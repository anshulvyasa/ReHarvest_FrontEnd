import { Card } from "@/components/ui/card";
import Image from "next/image";

import NextMileStoneSection from "./next-milestone-section";
import { recentActivity } from "@/config";
import RecentActivity from "./recent-activity";
import RealTimeCountUp from "@/components/general/realtime-count-up";

const GreenPointWallet = () => {
  return (
    <Card className="h-full w-full border-none shadow-2xl rounded-2xl px-5 py-3 bg-white hover:scale-101 transition-all duration-300">
      {/* Part 1  */}
      <div className="flex space-x-2 py-4 mb-1">
        <div className="h-13 w-13 bg-[#D4E3FE] rounded-2xl flex items-center justify-center">
          <Image src="/wallet.png" height={20} width={30} alt="w" />
        </div>
        <span className="text-[#1E4A2A] font-[700]  text-[25px] sm:text-[32px]">
          GreenPoints Wallet
        </span>
      </div>

      {/* Part 2 here we get the data as User Innteracts  */}
      <div className="px-3 rounded-xl flex flex-col  bg-[#ECFCED] w-full text-center py-3">
        <span className="text-[#1E4A2A] font-[700] text-[32px] sm:text-[38px]">
          <RealTimeCountUp val={2450} duration={1} /> 
        </span>
        <span className="text-[#428C47] text-[16px] sm:text-[18px] font-[500] -mt-1">
          Total GreenPoints
        </span>
      </div>

      {/* Part 3 lavel it will also change as user interact  */}
      <div className="px-4 py-2">
        <NextMileStoneSection
          milestone_start={1850}
          milestone_end={1900}
          current_points={1890}
          nextlevel={16}
        />
      </div>

      {/* Part 4 Recent Activity this is also change as user interact  */}
      <div className="px-4 py-2 max-h-[500px] overflow-y-auto pr-2 hide-scrollbar ">
        {recentActivity.map((content, index) => (
          <div key={index} className="my-2">
            <RecentActivity
              type={content.type}
              time={content.time}
              points={content.points}
              symbol={content.symbol}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GreenPointWallet;
