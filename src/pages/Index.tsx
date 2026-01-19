import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DAWSection from "@/components/DAWSection";
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import BugReportSection from "@/components/BugReportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <DAWSection />
      <DemoSection />
      <PricingSection />
      <FeaturesSection />
      <BugReportSection />
      <Footer />
    </main>
  );
};

export default Index;
