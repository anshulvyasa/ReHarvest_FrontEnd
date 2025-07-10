import { Card } from "@/components/ui/card";
import { achievementsCard, achievementsFooter } from "@/config";
import Image from "next/image";

const Achievements = () => {
  return (
    <Card className="border-none px-6 py-6 shadow-2xl  hover:scale-101 transition-all duration-300">
      {/* Part 1 title  */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-[#F4ECD2] rounded-xl flex justify-center items-center">
          <Image src="/achievementTrophy.png" height={20} width={20} alt="" />
        </div>
        <span className="text-[#1E4A2A]  text-[25px] sm:text-[30px] font-[700] ">
          Achievements
        </span>
      </div>

      {/* part 2 cards  */}
      <div className="grid grid-cols-2 w-full gap-5 px-1 sm:px-4 md:px-5 mb-2">
        {achievementsCard.map((content, index) => (
          <div
            className="bg-[#ECFCED]  text-center px-4 sm:px-7 py-3 rounded-2xl"
            key={index}
          >
            <div className="w-full flex justify-center">
              <Image src={content.iconUrl} height={30} width={30} alt="" />
            </div>
            <div className="text-[#000000] text-[17px] sm:text-[20px] font-[500] mb-2 w-full">
              {content.title}
            </div>
            <div className="text-[#959595] text-[13px] sm:text-[15px] font-[500]  w-full mb-1">
              {content.description}
            </div>
            <div className="flex w-full items-center justify-center pb-1">
              <span className="bg-[#7ADF81] text-[#FFFFFF] text-[13px] py-1 px-3 rounded-2xl">
                Unlocked
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* part 3 footer  */}
      <div className="grid grid-cols-2 w-full gap-5 px-1 sm:px-4 md:px-5  pb-2 ">
        {achievementsFooter.map((content, index) => (
          <div className="bg-transparent text-center" key={index}>
            <div className="flex items-center justify-center">
              <Image src={content.iconUrl} height={30} width={30} alt="" />
            </div>
            <div className="text-[#000000] font-[400] text-[16px] ">
              {content.title}
            </div>
            <p className="text-[#959595] font-[500] text-[15px]">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Achievements;
