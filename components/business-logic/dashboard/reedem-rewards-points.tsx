import { Card } from "@/components/ui/card";
import { redeemRewardsData } from "@/config";
import Image from "next/image";

const ReedemRewards = () => {
  return (
    <Card className="border-none px-6 py-6 shadow-2xl hover:scale-101 transition-all duration-300 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="h-13 w-13 rounded-2xl bg-[#D4E3FE] flex justify-center items-center">
          <Image src="/gift.png" height={28} width={28} alt="Gift icon" />
        </div>
        <span className="text-[#1E4A2A] text-[25px] sm:text-[30px] font-[700] ">
          Redeem Rewards
        </span>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {redeemRewardsData.map((content) => {
          let cardBgClass = "";
          let buttonOrBadgeContent;

          switch (content.status) {
            case "claimed":
              cardBgClass = "";
              buttonOrBadgeContent = (
                <span className="text-xs font-semibold py-1 px-3 rounded-full bg-green-200 text-green-700">
                  Claimed
                </span>
              );
              break;
            case "redeemable":
              cardBgClass = "bg-[#ECFCED] shadow-md";
              buttonOrBadgeContent = (
                <button className="bg-[#7ADF81] text-white text-sm font-bold py-2 px-5 rounded-xl">
                  Redeem
                </button>
              );
              break;
            case "locked":
              cardBgClass = "bg-gray-100";
              buttonOrBadgeContent = (
                <span className="text-xs font-semibold py-1 px-3 rounded-full bg-gray-200 text-gray-500">
                  Locked
                </span>
              );
              break;
            default:
              cardBgClass = "";
              buttonOrBadgeContent = null;
          }

          return (
            <div
              key={content.id}
              className={`flex items-center justify-between p-4 rounded-xl ${cardBgClass}`}
            >
              <div className="flex flex-col">
                <span className="text-base font-medium text-gray-800">
                  {content.title}
                </span>
                <span className="text-sm text-gray-600">
                  {content.points.toLocaleString()} points
                </span>
              </div>
              {buttonOrBadgeContent}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ReedemRewards;