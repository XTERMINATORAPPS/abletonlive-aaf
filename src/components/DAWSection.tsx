import { ArrowRight } from "lucide-react";
import proToolsLogo from "../assets/pro-tools.png";
import davinciLogo from "../assets/davinci-resolve.png";
import logicProLogo from "../assets/logic-pro.png";
import magixLogo from "../assets/magix.svg";
import steinbergLogo from "../assets/Steinberg.svg";
import abletonLogo from "../assets/ableton.svg";
import adobeLogo from "../assets/Adobe_Corporate_logo.svg";

const daws = [
  { company: "Avid", products: "Pro Tools", logo: proToolsLogo },
  { company: "BlackMagic", products: "DaVinci Resolve", logo: davinciLogo },
  { company: "Apple", products: "Logic Pro", logo: logicProLogo },
  { company: "Adobe", products: "Audition / Premiere Pro", logo: adobeLogo },
  { company: "Magix", products: "Sequoia / Samplitude", logo: magixLogo },
  { company: "Steinberg", products: "Cubase / Nuendo", logo: steinbergLogo },
];

const DAWSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Works With Your <span className="gradient-text">Favorite DAWs & NLEs</span>
        </h2>
        <p className="section-subtitle">
          Import projects from industry-standard DAWs and video editors
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {daws.map((daw, index) => (
            <div
              key={daw.company}
              className="glass-card-hover p-6 flex flex-col items-center justify-center min-w-[140px]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3">
                <img src={daw.logo} alt={daw.company} className="w-12 h-12 object-contain" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">{daw.company}</div>
                <div className="text-xs text-muted-foreground mt-1">{daw.products}</div>
              </div>
            </div>
          ))}

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
          </div>

          {/* Ableton */}
          <div className="glass-card p-6 flex flex-col items-center justify-center min-w-[140px] border-primary/30 glow-primary">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3">
              <img src={abletonLogo} alt="Ableton Live" className="w-12 h-12 object-contain" />
            </div>
            <span className="text-sm text-primary font-medium">Ableton Live</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAWSection;
