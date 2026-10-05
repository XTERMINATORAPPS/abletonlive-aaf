import { useState, useEffect } from "react";
import { Check, Zap } from "lucide-react";
import productImage from "../assets/gui.png";
import arrowImage from "../assets/arrow.png";

// Google Analytics tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GumroadIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 500 68.2" fill="currentColor" className={className}>
    <g transform="matrix(2.27273 0 0 2.27273 30 165.913)">
      <path d="M117.6-73c-4.5,0-9,4.1-9.5,10.1v-9.6h-6.5v28.9h6.6v-14c0-3.9,2.8-9.4,9.4-9.4V-73z" />
      <path d="M186.9-48.3V-68h3.8c5.1,0,9.3,3.2,9.3,9.7c0,6.5-4.1,10-9.3,10H186.9z M180.3-43.6h11.2c6.9,0,15.3-4.5,15.3-14.7c0-10-8.5-14.2-15.3-14.2h-11.2V-43.6z" />
      <path d="M155.3-58c0-5.3,2.7-9.6,7.2-9.6c4.3,0,6.7,4.3,6.7,9.6s-2.4,9.6-6.7,9.6C158-48.4,155.3-52.7,155.3-58z M148.6-57.7c0,8.6,4.5,14.7,11.5,14.7c5.1,0,8.1-3.3,9.7-8.8v8.1h6.5v-28.9h-6.5v7.7c-1.4-5.1-4.5-8.1-9.2-8.1C153.4-73,148.6-66.4,148.6-57.7z" />
      <path d="M-0.3-43c-8.1,0-12.9-6.5-12.9-14.7c0-8.5,5.3-15.3,15.3-15.3c10.4,0,13.9,7,14,11H8.6c-0.2-2.2-2.1-5.6-6.7-5.6c-4.9,0-8.1,4.3-8.1,9.6S-3-48.4,2-48.4c4.5,0,6.4-3.5,7.2-7H2v-2.9H17v14.7h-6.6v-9.2C9.9-49.5,7.9-43-0.3-43z" />
      <path d="M30.4-43c-6.2,0-10-4.1-10-12.4v-17.1h6.7v17.1c0,4.3,2.1,6.4,5.6,6.4c6.9,0,9.4-8.5,9.4-14.4v-9.1h6.7v28.9h-6.5v-10.7C40.9-48.4,37.4-43,30.4-43z" />
      <path d="M88.8-73c-5.7,0-9.3,5.5-10.5,10.6C78.1-69.2,74.7-73,69.3-73c-4.7,0-9,4.1-10.1,10.7v-10.2h-6.5v28.9h6.6V-54c0-2.6,1.1-13.1,7.7-13.1c4.3,0,4.8,3.9,4.8,9.2v14.2h6.6V-54c0-2.6,1.1-13.1,7.8-13.1c4.3,0,4.8,3.9,4.8,9.2v14.2h6.6v-17.1C97.6-68.9,94.7-73,88.8-73z" />
      <path d="M131.8-73c-8.6,0-14.4,6.7-14.4,15c0,9.1,5.5,15,14.4,15c8.6,0,14.5-6.7,14.5-15C146.2-67.1,140.6-73,131.8-73z M131.8-48.1c-5,0-8.2-4.2-8.2-9.9c0-5.7,3.2-9.9,8.2-9.9c5,0,8.1,4.2,8.1,9.9C139.8-52.3,136.7-48.1,131.8-48.1z" />
    </g>
  </svg>
);

const R2_BASE_URL = "https://pub-42264b4ca9bd4bb18e3f29d49dff9647.r2.dev";
const VERSION_JSON_URL = `${R2_BASE_URL}/version.json`;

interface VersionInfo {
  version: string;
  release_notes: string | string[];
}

interface HeroSectionProps {
  isGumroadModalOpen: boolean;
  setIsGumroadModalOpen: (open: boolean) => void;
}

const HeroSection = ({ isGumroadModalOpen, setIsGumroadModalOpen }: HeroSectionProps) => {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    // Fetch version info from R2
    fetch(VERSION_JSON_URL)
      .then(res => res.json())
      .then(data => setVersionInfo(data))
      .catch(err => console.error("Failed to fetch version info:", err));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left relative">
            <div className="inline-flex items-center bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 mb-6">
              <span className="text-sm text-muted-foreground">The only two-way AAF converter for Ableton Live</span>
            </div>

            {/* Decorative Arrow */}
            <img
              src={arrowImage}
              alt=""
              className="absolute -top-8 left-[370px] max-w-[55%] pointer-events-none opacity-80 hidden min-[1366px]:block"
              aria-hidden="true"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Convert <span className="text-primary">AAF files</span> to Ableton Live, <span className="text-primary">and back</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Import AAF into Ableton Live or export your Live sets back to Pro Tools, DaVinci Resolve,
              Premiere Pro, and more. Clips, fades, automation, and track structure, all preserved.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4 w-full">
              <div className="w-full flex justify-center my-2">
                {/* Gumroad License Card */}
                <a
                  href="https://xterminatorapps.gumroad.com/l/abletonliveaaf"

                  className="flex flex-col items-center justify-center gap-3 p-5 min-h-[120px] min-w-[160px] rounded-xl border border-primary bg-primary/10 transition-all cursor-pointer hover:scale-110 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="relative flex items-center justify-center h-12">
                    <GumroadIcon className="w-24 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-primary">Get Lifetime License</p>
                    <p className="text-lg font-bold text-primary">$45</p>
                  </div>
                </a>
              </div>
              {versionInfo && (
                <div className="text-sm text-muted-foreground mt-2">
                  <span className="font-medium">v{versionInfo.version}</span>
                  <ul className="list-disc list-inside mt-1 space-y-0.5 max-h-[5.5rem] overflow-y-auto pr-1">
                    {(() => {
                      const notes = Array.isArray(versionInfo.release_notes)
                      ? versionInfo.release_notes
                      : (versionInfo.release_notes as string).split('\n').map(l => l.replace(/^\-\s*/, '')).filter(Boolean);
                      return notes.map((note, i) => (
                        <li key={i}>{note}</li>
                      ));
                    })()}
                  </ul>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2 text-center w-full">One-time payment. Lifetime license with free updates forever. Download link provided after purchase.</p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl flex items-center justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl" />
              <img
                src={productImage}
                alt="AAF to Ableton Converter"
                className="relative rounded-xl shadow-2xl shadow-primary/20 border border-white/10 max-w-lg"
              />

            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isGumroadModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsGumroadModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-card border border-border rounded-xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGumroadModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Pricing Card Content */}
            <div className="text-center">
              {/* Popular Badge */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-1 bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  Best Value
                </div>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-foreground mb-2">
                  $45
                </div>
                <p className="text-muted-foreground">one-time payment</p>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {["Lifetime license",
                  "Two-way conversion (AAF + ALS)",
                  "Free Lifetime updates",
                  "Email support",
                  "All DAWs & NLEs formats supported",
                  "No subscription required",
                  "Cross Platform"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
              </ul>

              <a
                href="https://xterminatorapps.gumroad.com/l/abletonliveaaf"

                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                Get Lifetime License
              </a>

              <p className="mt-4 text-xs text-muted-foreground">
                Secure checkout powered by Gumroad
              </p>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default HeroSection;
