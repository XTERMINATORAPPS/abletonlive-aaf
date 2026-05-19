import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onBuyNowClick={() => setIsGumroadModalOpen(true)} />
      <HeroSection
        isGumroadModalOpen={isGumroadModalOpen}
        setIsGumroadModalOpen={setIsGumroadModalOpen}
      />
      <AnnouncementMarquee />
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
