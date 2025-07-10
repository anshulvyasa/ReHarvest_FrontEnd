import { ArrowDown, Leaf, Recycle, Zap } from "lucide-react";
import Typewriter from "./typewriter";
import HeroSectionButtton from "./hero-section-button";

const HeroSection = () => {
  return (
    <section className="sm:min-h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-br from-[#C5EAC5] via-[#EBF6EB] to-[#C5EAC5] relative pb-20">
      <div className="container-max mx-auto ">
        <h2 className="flex justify-center items-center space-x-2 pt-10">
          <div className="h-6 w-6 sm:h-11 sm:w-11">
            <Leaf className="h-full w-full text-[#113F1D]" />
          </div>
          <span className="text-[#113F1D] text-[25px] sm:text-[36px] font-bold">
            ReHarvest
          </span>
        </h2>

        <h1 className="text-center mt-1 sm:mt-3 leading-none max-w-[90%] mx-auto mb-2 sm:mb-4">
          <span className="text-[#113F1D] block text-[50px] sm:text-[55px] md:text-[65px] lg:text-[90px] font-bold">
            AI for Sustainable
          </span>
          <span className="block text-[50px] md:text-[60px] lg:text-[85px] font-bold pb-3">
            <Typewriter
              className="bg-gradient-to-r from-[#456B42] to-[#B3D9AD] bg-clip-text
            text-transparent pb-3 transition-all duration-300"
              speed={300}
            />
          </span>
        </h1>

        <div className="flex justify-center mb-5 sm:mb-10 md:mb-11">
          <p className="text-[#22782A] text-center font-normal text-[22px] sm:text-[26px] max-w-[80%]">
            Turning imperfect produce into opportunity through intelligent waste
            reduction and circular supply chain optimization
          </p>
        </div>

        <div className="container mx-auto flex flex-col items-center mt-3 text-xl sm:mt-8 sm:flex-row sm:justify-center gap-1 sm:gap-3 md:gap-5 lg:gap-6">
          <HeroSectionButtton />
        </div>

        <div className="hidden md:flex mt-16 justify-center items-center">
          <div className="flex flex-wrap justify-center h-10 max-w-3xl">
            <div className="flex items-center justify-center gap-2 font-medium text-[26px]">
              <Recycle className="h-6 w-6 text-[#328C48] mr-3" />
              <span className="text-[#328C48]">Zero waste</span>
            </div>
            <div className="h-full mx-4 border-x border-2 !border-[#908C8C]" />
            <div className="flex items-center justify-center gap-2 font-medium text-[26px]">
              <Leaf className="h-6 w-6 text-[#328C48]" />
              <span className="text-[#328C48]">Zero waste</span>
            </div>
            <div className="h-full mx-4 border-x border-2 !border-[#908C8C]" />
            <div className="flex items-center justify-center gap-2 font-medium text-[26px]">
              <Zap className="h-6 w-6 text-[#328C48]" />
              <span className="text-[#328C48]">Real Time Impact</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex justify-center">
          <ArrowDown className="animate-bounce text-[#456B42]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
