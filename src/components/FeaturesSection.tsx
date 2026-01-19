import audioClipsIcon from "../assets/audio-clips.svg";
import volumeAutomationIcon from "../assets/volume-automation.svg";
import fadesCrossfadesIcon from "../assets/fades-crossfades.svg";
import trackStructureIcon from "../assets/track-structure.svg";
import clipGainIcon from "../assets/clip-gain.svg";
import sampleRateIcon from "../assets/sample-rate.svg";

const features = [
  {
    icon: audioClipsIcon,
    title: "Audio Clips",
    description: "All embedded and referenced audio files extracted and placed correctly",
  },
  {
    icon: volumeAutomationIcon,
    title: "Volume Automation",
    description: "Clip and track-level automation converted to Ableton",
  },
  {
    icon: fadesCrossfadesIcon,
    title: "Fades & Crossfades",
    description: "Linear and curved fades preserved where supported",
  },
  {
    icon: trackStructureIcon,
    title: "Track Structure",
    description: "Track names, order, and grouping maintained",
  },
  {
    icon: clipGainIcon,
    title: "Clip Gain",
    description: "Individual clip gain adjustments applied",
  },
  {
    icon: sampleRateIcon,
    title: "Sample Rate",
    description: "Projects converted respecting original sample rate",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          Powerful <span className="gradient-text">Conversion Features</span>
        </h2>
        <p className="section-subtitle">
          Everything you need for seamless project migration
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-6 group flex items-start justify-between gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
