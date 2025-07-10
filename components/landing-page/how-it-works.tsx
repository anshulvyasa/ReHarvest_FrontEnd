import HowItWorksTiltedCard from "./how-it-work-tiltedcard";

const HowItWorks = () => {
  return (
    <section className="section-padding overflow-y-auto overflow-x-hidden sm:min-h-screen bg-gradient-to-tr from-[#FFFFFF] to-[#D8FFD8]">
      <div className="container-max mx-auto ">
        <div className="flex justify-center mb-8">
          <div className="text-center max-w-3xl ">
            <h1 className="text-[#113F1D] font-[700] text-[40px] mb-4">
              How It Works
            </h1>
            <p className="font-[400]  text-2xl text-[#22782A] mb-8">
              Three simple steps to transform your supply chain and create
              measurable environmental impact
            </p>
          </div>
        </div>

        <div className="grid grid-col-1 w-[85%] ml-4 sm:ml-14 lg:grid-cols-3 gap-6 lg:gap-12">
          <HowItWorksTiltedCard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
