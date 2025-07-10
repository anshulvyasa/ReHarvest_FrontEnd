import { realTimeDashboardCard } from "@/config";
import { Card } from "../ui/card";
import Image from "next/image";
import RealTimeCountUp from "./realtime-count-up";
import Bargraph from "./bargraph";
import RedistributionChannel from "./reditribution-channel-graph";

const RealTimeImpactDashboard = () => {
  return (
    <section className="section-padding bg-gradient-to-bl from-[#F5F5F5] to-[#E9F9E9] ">
      <div className="container-max mx-auto">
        {/* part1  */}
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-[700] text-[#1E4A2A] mb-3">
            Real-Time Impact Dashboard
          </h2>
          <p className="text-[#22782A] font-[400] text-2xl">
            Track your environmental impact with live data and comprehensive
            analytics
          </p>
        </div>

        {/* part 2  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {realTimeDashboardCard.map((content, index) => (
            <Card
              className="border-none px-6 py-6 shadow-lg rounded-3xl bg-white hover:scale-105 transition-all duration-300"
              key={index}
            >
              <div className="flex justify-between">
                {
                  <content.icon
                    className="h-6 w-6 "
                    style={{ color: content.iconcolor }}
                  />
                }
                <div className="flex items-center">
                  <Image
                    src={content.performanceIcon}
                    height={20}
                    width={20}
                    alt="src"
                  />
                  <span className="text-[#000000] font-[600]">
                    {content.performanceLabel}
                  </span>
                </div>
              </div>
              <div className="flex space-x-1 items-center text-[#000000] font-[700] text-[24px]">
                <RealTimeCountUp val={content.title} />
                <span className="text-[#909090] font-[600] text-[18px]">
                  {content.titleLabel}
                </span>
              </div>

              <div className="text-[#7B7A7A]  font-[500] text-[18px] -mt-3 ">
                {content.footer}
              </div>
            </Card>
          ))}
        </div>

        {/* part 3  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Bargraph />
          <RedistributionChannel />
        </div>
      </div>
    </section>
  );
};

export default RealTimeImpactDashboard;
