import { clients, trustedPartnerFooter } from "@/config";
import RealTimeCountUp from "./realtime-count-up";

const TrustedPartner = () => {
  const repetedClient = [...clients, ...clients];

  return (
    <section className="section-padding text-white bg-gradient-to-bl from-white via-white to-[#E9F9E9]">
      <div className="container-max">
        <div className="mb-12">
          <h1 className="text-[#1E4A2A] font-[700] text-[40px] text-center">
            Trusted Partners
          </h1>
          <p className="text-[#22782A] max-w-3xl mx-auto text-xl  text-center font-[400] ">
            Three simple steps to transform your supply chain and create
            measurable environmental impact
          </p>
        </div>

        <div className="overflow-hidden relative mb-20">
          <div className="flex animate-slide-left whitespace-nowrap w-max py-3">
            {repetedClient.map((client, index) => (
              <div
                key={index}
                className="mx-8 px-6 py-4 bg-white rounded-lg  border-2 !border-green-50 text-nowrap shrink-0 hover:scale-105 transition-all duration-300 "
              >
                <div className="text-xl font-semibold text-green-700">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {trustedPartnerFooter.map((content, index) => (
            <div
              className="flex justify-center items-center w-full"
              key={index}
            >
              <div className="text-center">
                <div className="text-[#468168] font-[600] text-[40px]">
                  <RealTimeCountUp val={content.amount} />
                  <span>{content.label}</span>
                </div>
                <h2 className="text-[#22782A] font-[400] text-[24px]">
                  {content.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
