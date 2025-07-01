import { ArrowRight, DollarSign, Gift } from "lucide-react";
import { Button } from "../ui/button";

const CostumerIncentive = () => {
  return (
    <section className="section-padding bg-surface-primary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to make a{" "}
            <span className="text-primary-400">Difference?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {" "}
            Join thousands of conscious consumers who are giving items a second
            life with ReHarvest.
          </p>
        </div>
        <div className="text-center mb-16">
          <Button className="group btn-cta px-8 py-4">
            <span className="text-lg">Get Started Today</span>
            <ArrowRight className="inline-block ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-2xl p-8 border border-primary-500/20 text-center hover:border-primary-500/40 transition-all duration-300 transform hover:scale-105">
            <div className="icon-container-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Earn GreenPoints
            </h3>
            <p className="text-text-secondary">
              Get rewarded with GreenPoints for every item you return. Use them
              for discounts on future purchases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 rounded-2xl p-8 border border-secondary-500/20 text-center hover:border-secondary-500/40 transition-all duration-300 transform hover:scale-105">
            <div className="icon-container-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-secondary-400" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-400 mb-4">
              Support Causes
            </h3>
            <p className="text-text-secondary">
              Donate your rewards to support environmental initiatives and make
              an even bigger impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostumerIncentive;
