import { Sparkles } from "lucide-react";

const AiClassifierHeader = () => {
  return (
    <div className="text-center pt-6 mb-12">
      <h1 className="text-[#1E4A2A] font-[700]  text-[30px] postm-1:text-[35px] md:text-[39px] lg:text-[44px]">
        AI Waste Classifier
      </h1>
      <p className="text-[#22782A] text-[15px] postm-1:text-[18px]  lg:text-[20px] -mt-1">
        Transform waste into wisdom with our intelligent classification system
      </p>
      <div className="flex items-center justify-center space-x-3 postm-1:space-x-4 text-[#6DBE73] mt-1">
        <Sparkles className="h-4 w-4 postm-1:h-5 postm-1:w-5" />
        <span className="text-[14px] postm-1:text-[16px]">AI Powered </span>
      </div>
    </div>
  );
};

export default AiClassifierHeader;
