import { ArrowDown, Recycle } from "lucide-react";
import BackGroundEffect from "./background-effect";
import HeroSectionButtton from "./hero-section-button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero">
      <BackGroundEffect />

      <div className="container-max section-padding text-center lg:py-32">
        {/* Part 1  */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-primary-500/20 rounded-full px-4 py-2 border border-primary-500/30">
            <Recycle className="h-5 w-5 text-primary-500" />
            <span className="text-primary-400 text-sm font-medium">
              Sustainable Solutions
            </span>
          </div>
        </div>

        {/* Part 2  Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Give Items a{" "}
          <span className="text-gradient-primary">Second Life</span> with
          ReHarvest
        </h1>

        {/* part 3  Description */}
        <p className="text-xl md:text-2xl max-w-3xl text-text-secondary mx-auto  mb-12">
          ReHarvest collects, repurposes, and resells returned or damaged goods
          – responsibly.
        </p>

        {/* Part 4  Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <HeroSectionButtton />
        </div>

        {/* Part 5  */}
        <div className="animate-bounce ">
          <ArrowDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
