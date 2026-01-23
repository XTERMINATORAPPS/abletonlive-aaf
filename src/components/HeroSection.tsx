import { useState, useEffect } from "react";
import { Download, Check, Zap } from "lucide-react";
import productImage from "../assets/gui.png";
import arrowImage from "../assets/arrow.png";

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const ChipIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
  </svg>
);

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

type Platform = "windows" | "macos-intel" | "macos-arm" | "macos" | "unknown";
type CardPlatform = "windows" | "macos";

const R2_BASE_URL = "https://pub-42264b4ca9bd4bb18e3f29d49dff9647.r2.dev";
const VERSION_JSON_URL = `${R2_BASE_URL}/version.json`;

interface VersionInfo {
  version: string;
  release_notes: string;
  windows_url: string;
  macos_intel_url: string;
  macos_arm_url: string;
}

const platformsConfig: { key: CardPlatform; icon: typeof WindowsIcon; label: string; sublabel: string }[] = [
  { key: "windows", icon: WindowsIcon, label: "Windows", sublabel: "x64" },
  { key: "macos", icon: AppleIcon, label: "macOS", sublabel: "Intel & Arm" },
];

const detectPlatform = (): Platform => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    return "windows";
  }

  if (userAgent.includes("mac")) {
    const isArmMac = navigator.platform === "MacIntel" && (navigator as any).maxTouchPoints > 0;
    return isArmMac ? "macos-arm" : "macos-intel";
  }

  return "unknown";
};

interface HeroSectionProps {
  isGumroadModalOpen: boolean;
  setIsGumroadModalOpen: (open: boolean) => void;
}

const HeroSection = ({ isGumroadModalOpen, setIsGumroadModalOpen }: HeroSectionProps) => {
  const [userPlatform, setUserPlatform] = useState<Platform>("unknown");
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMacModalOpen, setIsMacModalOpen] = useState(false);

  useEffect(() => {
    setUserPlatform(detectPlatform());

    // Fetch version info from R2
    fetch(VERSION_JSON_URL)
      .then(res => res.json())
      .then(data => setVersionInfo(data))
      .catch(err => console.error("Failed to fetch version info:", err));
  }, []);

  const getDownloadUrl = (cardKey: CardPlatform): string => {
    if (!versionInfo) return "#";
    if (cardKey === "windows") {
      return `${R2_BASE_URL}/${versionInfo.windows_url}`;
    }
    // For macOS, select Intel or ARM based on detected platform
    const macUrl = userPlatform === "macos-arm" ? versionInfo.macos_arm_url : versionInfo.macos_intel_url;
    return `${R2_BASE_URL}/${macUrl}`;
  };

  const getFileName = (cardKey: CardPlatform): string => {
    if (!versionInfo) return "";
    if (cardKey === "windows") {
      return versionInfo.windows_url.split('/').pop() || "";
    }
    const macUrl = userPlatform === "macos-arm" ? versionInfo.macos_arm_url : versionInfo.macos_intel_url;
    return macUrl.split('/').pop() || "";
  };

  const isCurrentPlatform = (cardKey: CardPlatform): boolean => {
    if (cardKey === "windows") return userPlatform === "windows";
    return userPlatform === "macos-intel" || userPlatform === "macos-arm";
  };

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
              <span className="text-sm text-muted-foreground">The easiest way to convert AAF to Ableton Live</span>
            </div>

            {/* Decorative Arrow */}
            <img
              src={arrowImage}
              alt=""
              className="absolute -top-8 left-[370px] max-w-[55%] pointer-events-none opacity-80 hidden min-[1366px]:block"
              aria-hidden="true"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Convert <span className="text-primary">AAF files</span> to Ableton Live{" "}
              <span className="text-primary">in Seconds</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Seamlessly transfer your projects from Pro Tools, DaVinci Resolve, Logic Pro,
              and more to Ableton Live. Preserve audio clips, fades, automation, and track structure.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <h3 className="text-lg font-semibold text-foreground">Download Free Trial:*</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {platformsConfig.map((p) => {
                  const currentPlatform = isCurrentPlatform(p.key);
                  const Icon = p.icon;
                  const downloadUrl = getDownloadUrl(p.key);
                  const fileName = getFileName(p.key);

                  // Card is green if: it's being hovered OR (it's current platform AND nothing else is hovered)
                  const isGreen = hoveredCard === p.key || (currentPlatform && !hoveredCard);

                  const cardClasses = `flex flex-col items-center gap-3 p-5 min-h-[180px] min-w-[150px] rounded-xl border transition-all cursor-pointer hover:scale-105 ${isGreen
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-white/30"
                    }`;

                  const cardContent = (
                    <>
                      <div className="relative">
                        <Icon className={`w-12 h-12 transition-colors ${isGreen ? "text-primary" : "text-foreground"
                          }`} />
                        {p.key === "macos" && <ChipIcon className={`absolute -bottom-1 -right-1 w-4 h-4 ${isGreen ? "text-primary" : "text-muted-foreground"}`} />}
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-medium ${isGreen ? "text-primary" : "text-foreground"}`}>{p.label}</p>
                        <p className={`text-xs ${isGreen ? "text-primary/70" : "text-muted-foreground"}`}>{p.sublabel}</p>
                      </div>
                      <p className={`text-xs mt-1 max-w-[120px] text-center break-all ${isGreen ? "text-primary/70" : "text-muted-foreground"}`}>{fileName}</p>
                    </>
                  );

                  // macOS opens modal, Windows downloads directly
                  if (p.key === "macos") {
                    return (
                      <button
                        key={p.key}
                        onClick={() => setIsMacModalOpen(true)}
                        onMouseEnter={() => setHoveredCard(p.key)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={cardClasses}
                      >
                        {cardContent}
                      </button>
                    );
                  }

                  return (
                    <a
                      key={p.key}
                      href={downloadUrl}
                      download
                      onMouseEnter={() => setHoveredCard(p.key)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={cardClasses}
                    >
                      {cardContent}
                    </a>
                  );
                })}

                {/* OR Divider */}
                <div className="flex items-center justify-center min-h-[180px] mx-4">
                  <span className="text-2xl font-bold" style={{ color: 'hsl(0deg 0% 96.08%)' }}>Or</span>
                </div>

                {/* Gumroad License Card */}
                <button
                  onClick={() => setIsGumroadModalOpen(true)}
                  onMouseEnter={() => setHoveredCard('gumroad')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex flex-col items-center gap-3 p-5 min-h-[180px] min-w-[150px] rounded-xl border transition-all cursor-pointer hover:scale-105 ${hoveredCard === 'gumroad'
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-white/30"
                    }`}
                >
                  <div className="relative flex items-center justify-center h-12">
                    <GumroadIcon className={`w-24 h-12 transition-colors ${hoveredCard === 'gumroad' ? "text-primary" : "text-foreground"}`} />
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-medium ${hoveredCard === 'gumroad' ? "text-primary" : "text-foreground"}`}>Buy Lifetime <br /> License</p>
                  </div>
                  <p className={`text-xs mt-1 text-center ${hoveredCard === 'gumroad' ? "text-primary/70" : "text-foreground"}`}>Secure checkout <br />powered by Gumroad</p>
                </button>
              </div>
              {versionInfo && (
                <div className="text-sm text-muted-foreground mt-2">
                  <span className="font-medium">v{versionInfo.version}</span> - {versionInfo.release_notes}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">*Free trial includes ONLY 5 conversions <br /> After the trial expires you need to buy a lifetime license that includes lifetime free updates.</p>
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
                  $50
                </div>
                <p className="text-muted-foreground">one-time payment</p>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {["Lifetime license",
                  "Free Lifetime updates",
                  "Email support",
                  "All DAWs & NLEs formats supported",
                  "No subscription required",
                  "Cross Platform",
                  "One License per device"].map((feature) => (
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
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                Buy Now on Gumroad
              </a>

              <p className="mt-4 text-xs text-muted-foreground">
                Secure checkout powered by Gumroad
              </p>
            </div>
          </div>
        </div>
      )}

      {/* macOS Download Modal */}
      {isMacModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsMacModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-card border border-border rounded-xl p-8 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMacModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* macOS Download Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Download for macOS</h2>

              {/* Download Button */}
              <a
                href={getDownloadUrl("macos")}
                download
                className="btn-primary w-full inline-flex items-center justify-center gap-2 mb-6"
              >
                <Download className="w-5 h-5" />
                Download {versionInfo?.version ? `v${versionInfo.version}` : ''}
              </a>

              {/* Instructions */}
              <div className="space-y-4 text-left mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Important: Disable Gatekeeper</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    macOS Gatekeeper may block the app from opening. Follow these steps to disable it:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Open Terminal (Applications &gt; Utilities &gt; Terminal)</li>
                    <li>Run: <code className="bg-muted px-2 py-1 rounded text-xs text-foreground">sudo spctl --global-disable</code></li>
                    <li>Enter your password when prompted</li>
                    <li>Install the app</li>
                    <li>Re-enable Gatekeeper: <code className="bg-muted px-2 py-1 rounded text-xs text-foreground">sudo spctl --global-enable</code></li>
                  </ol>
                </div>
              </div>

              {/* Video Tutorial */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Video Tutorial</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fygl3oLbsSk"
                    title="How to disable Gatekeeper on macOS"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
