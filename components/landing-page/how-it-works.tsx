import { edible_section, non_edible_section } from "@/config";
import { Apple, Package } from "lucide-react";
import LandingPageCard from "./card";

const HowItWorks = () => {
  return (
    <section className="section-padding bg-surface-secondary/50">
      <div className="container-max mx-auto">
        {/* part 1 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {" "}
            How It <span className="text-primary-400">Works</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {" "}
            We handle every type of returned or damaged item with care and
            purpose
          </p>
        </div>

        {/* Part 2 edible and non-edible section  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ">
          {/* Edible Section  */}
          <div>
            <div className="flex items-center mb-8">
              <div className="icon-container-secondary mr-4">
                <Apple className="h-8 w-8 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-400">
                Edible Produce
              </h3>
            </div>

            {edible_section.map((item, index) => (
              <div className="my-4 w-full" key={index}>
                <LandingPageCard
                  heading={item.heading}
                  description={item.description}
                  Icon={item.Icon}
                  textCole={
                    (index & 1) == 0 ? "text-primary-400" : "text-secondary-400"
                  }
                  cardbg={(index & 1) == 0 ? "card-primary" : "card-secondary"}
                  iconbg={
                    (index & 1) == 0
                      ? "icon-container-primary"
                      : "icon-container-secondary"
                  }
                />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center mb-8">
              <div className="icon-container-primary mr-4">
                <Package className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary-400">
                Non-Edible Products
              </h3>
            </div>

            {non_edible_section.map((item, index) => (
              <div className="my-4 w-full" key={index}>
                <LandingPageCard
                  heading={item.heading}
                  description={item.description}
                  textCole={
                    (index & 1) == 0 ? "text-primary-400" : "text-secondary-400"
                  }
                  Icon={item.Icon}
                  cardbg={(index & 1) == 0 ? "card-primary" : "card-secondary"}
                  iconbg={
                    (index & 1) == 0
                      ? "icon-container-primary"
                      : "icon-container-secondary"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
