import { useState } from "react";
import { Upload, Zap, FolderOpen } from "lucide-react";

const aafToAls = [
  {
    icon: Upload,
    number: "01",
    title: "Export AAF",
    description: "Export AAF from your DAW",
  },
  {
    icon: Zap,
    number: "02",
    title: "Drop & Convert",
    description: "Drop the file into Abletonlive.aaf",
  },
  {
    icon: FolderOpen,
    number: "03",
    title: "Open in Ableton",
    description: "Open the converted .als in Ableton Live",
  },
];

const alsToAaf = [
  {
    icon: Upload,
    number: "01",
    title: "Save ALS",
    description: "Save your session from Ableton",
  },
  {
    icon: Zap,
    number: "02",
    title: "Drop & Convert",
    description: "Drop the file into Abletonlive.aaf",
  },
  {
    icon: FolderOpen,
    number: "03",
    title: "Open in any DAW or NLE",
    description: "Open the converted .aaf in any DAW or NLE",
  },
];

const HowItWorksSection = () => {
  const [direction, setDirection] = useState<"aaf-to-als" | "als-to-aaf">("aaf-to-als");
  const steps = direction === "aaf-to-als" ? aafToAls : alsToAaf;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          Simple <span className="gradient-text">3-Step Process</span>
        </h2>
        <p className="section-subtitle">
          Convert in either direction. It works both ways
        </p>

        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center bg-card/80 backdrop-blur-xl border border-white/10 rounded-full p-1">
            {/* Sliding pill */}
            <div
              className="absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-in-out"
              style={{
                width: "calc(50% - 4px)",
                left: direction === "aaf-to-als" ? "4px" : "calc(50% + 0px)",
              }}
            />
            <button
              onClick={() => setDirection("aaf-to-als")}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                direction === "aaf-to-als"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AAF to Ableton
            </button>
            <button
              onClick={() => setDirection("als-to-aaf")}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                direction === "als-to-aaf"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ableton to AAF
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={`${direction}-${step.number}`} className="flex items-center">
              <div className="glass-card-hover p-8 text-center max-w-xs">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
