import CostumerIncentive from "@/components/landing-page/costumer-incentive";
import Footer from "@/components/landing-page/footer";
import HeroSection from "@/components/landing-page/hero-section";
import HowItWorks from "@/components/landing-page/how-it-works";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-surface-primary text-text-primary">
      <HeroSection />
      <HowItWorks />
      <CostumerIncentive />
      <Footer/>
    </div>
  );
};

export default LandingPage;
