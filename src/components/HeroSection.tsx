import { ArrowRight } from "lucide-react";
import productImage from "../assets/product.png";
import dashedArrow from "../assets/dashed-arrow.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left relative">
            <div className="relative inline-block">
              <div className="inline-flex items-center bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 mb-6">
                <span className="text-sm text-muted-foreground">Easiest way to convert AAF to Ableton Live</span>
              </div>
              {/* Dashed arrow pointing to product */}
              <img src={dashedArrow} alt="" className="hidden lg:block absolute left-full -top-[132px] w-[435px] max-w-none h-auto" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Convert <span className="text-primary">AAF</span> to Ableton Live{" "}
              <span className="text-primary">in Seconds</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Seamlessly transfer your projects from Pro Tools, DaVinci Resolve, Logic Pro,
              and more to Ableton Live. Preserve audio clips, fades, automation, and track structure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://gumroad.com/l/PRODUCT_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Buy on Gumroad
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/help/index.html"
                className="border-2 border-white/30 text-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:border-primary hover:text-primary inline-flex items-center justify-center gap-2"
              >
                View Documentation
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl" />
              <img
                src={productImage}
                alt="AAF to Ableton Converter"
                className="relative rounded-xl shadow-2xl shadow-primary/20 border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
