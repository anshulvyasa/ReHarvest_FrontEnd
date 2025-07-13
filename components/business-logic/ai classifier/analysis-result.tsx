import { Card } from "@/components/ui/card";
import { Recycle } from "lucide-react";

const AnalysisResult = () => {
  return (
    <section className="mt-14">
      {/* for heading and paragraph */}
      <div className="text-center">
        <h1 className="text-[#6DBE73] font-[700] text-[26px] postm-2:text-[30px] sm:text-[35px] ">
          Analysis Completed
        </h1>
        <p className="text-[#8C8C8C] font-[500] text-[15px] postm-2:text-[17px] sm:text-[18px] -mt-1">
          Here&apos;s what AI evaluated your item
        </p>
      </div>
      <div className="flex justify-center mt-7 ">
        <Card className="!border-[#22782A]  rounded-lg bg-white shadow-2xl px-5 pt-4 pb-8">
          <div className="max-w-lg sm:px-14 mx-auto">
            <h2 className="font-[700] text-[#7B7B7B] text-[18px] postm-2:text-[23px] sm:text-[28px]">
              Condition Assessment
            </h2>
            <div className="text-center text-[#55A35D] font-[700] text-[23px] postmm-2:text-[24px] sm:text-[28px] mt-4">
              0.51
            </div>
            <p className="text-[#ADADAD] font-[700] text-[12px] postm-2:text-[14px] sm:text-[16px] text-center -mt-1">
              Out of 1
            </p>
          </div>
          <div>
            <h1 className="font-[700] text-[#7B7B7B] text-[17px] postm-2:text-[19px] sm:text-[23px] text-center">
              Our Recommendations
            </h1>
            <div className="flex items-center justify-center ">
              <p className="text-[#9A3412] bg-[#F6D7CD] flex items-center space-x-3 px-3 py-1 sm:px-4 sm:py-1 rounded-xl">
                <Recycle className="h-4 w-4" />
                <span>Recycle</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnalysisResult;
