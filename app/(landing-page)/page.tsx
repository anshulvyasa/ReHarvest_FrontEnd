import Footer from "@/components/landing-page/footer";
import HeroSection from "@/components/landing-page/hero-section";
import HowItWorks from "@/components/landing-page/how-it-works";
import RealTimeImpactDashboard from "@/components/landing-page/realtime-impact-dashboard";
import TrustedPartner from "@/components/landing-page/trusted-partner";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-surface-primary text-text-primary">
      <HeroSection />
      <HowItWorks />
      <RealTimeImpactDashboard />
       <TrustedPartner/>
      <Footer />
    </div>
  );
};

export default LandingPage;
