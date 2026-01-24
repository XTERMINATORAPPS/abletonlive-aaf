import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DAWSection from "@/components/DAWSection";
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BugReportSection from "@/components/BugReportSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isGumroadModalOpen, setIsGumroadModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onBuyNowClick={() => setIsGumroadModalOpen(true)} />
      <HeroSection
        isGumroadModalOpen={isGumroadModalOpen}
        setIsGumroadModalOpen={setIsGumroadModalOpen}
      />
      <HowItWorksSection />
      <DAWSection />
      <DemoSection />
      <PricingSection />
      <FeaturesSection />
      <FAQSection />
      <BugReportSection />
      <Footer />
    </main>
  );
};

export default Index;
