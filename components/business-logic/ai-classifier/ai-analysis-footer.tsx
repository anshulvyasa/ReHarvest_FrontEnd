import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkle } from "lucide-react";

const AiAnalysis = () => {
  return (
    <section className="mt-12 mb-6">
      <div className="flex items-center space-x-4 mb-2">
        <div className="bg-[#6DBE73] rounded-3xl px-2 py-1">3</div>
        <div className="mb-3">
          <h1 className="text-black font-[700] text-[20px] postm-2:text-[22px] sm:text-[25px]">
            AI Analysis
          </h1>
          <p className="text-[#8C8C8C] font-[500] text-[13px] postm-2:text-[15px] sm:text-[18px] -mt-1">
            Get intelligent recommendations for your item
          </p>
        </div>
      </div>

      <Card className="!border-[#22782A] text-[#6DBE73] bg-white">
        <div className="flex justify-center items-center">
          <div className="bg-[#BCE7C0] rounded-2xl p-4">
            <Sparkle className="h-8 w-8" />
          </div>
        </div>
        <div className="-mt-2">
          <h2 className="text-black font-[500] text-[22px] text-center ">
            Ready for AI Analysis
          </h2>
          <p className="font-[500] text-[#8C8C8C] text-center  text-[14px] postm-2:text-[16px]">
            Our advanced AI will analyze your item and provide sustainable
            recommendations
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="font-[500] cursor-pointer bg-[#6DBE73] hover:bg-[#68ac6c] text-white px-6 py-1 text-[14px] sm:text-[16px]">
            Start AI Analysis
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default AiAnalysis;
