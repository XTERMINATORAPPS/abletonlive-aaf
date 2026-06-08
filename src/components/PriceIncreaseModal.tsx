import { useState, useEffect } from "react";

const PriceIncreaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card border border-border rounded-xl p-8 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modal-enter 0.3s ease-out' }}
      >
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Price increase in July
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Abletonlive.aaf V2.1 is coming
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We are shipping a major update in July that adds highly requested features.
            When V2.1 drops, the price will increase to reflect the new capabilities.
          </p>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">ALS to AAF Conversion</p>
                <p className="text-xs text-muted-foreground">Export Ableton Live sessions back to AAF for Premiere Pro, DaVinci Resolve, and Media Composer. Full round-trip workflow.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Batch Conversion</p>
                <p className="text-xs text-muted-foreground">Drop multiple files and convert them all at once. Works in both directions -- AAF to ALS and ALS to AAF.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Starting-Position Offset</p>
                <p className="text-xs text-muted-foreground">Set a custom start position (e.g. bar 16) so your session opens exactly where you need it. Works in both directions.</p>
              </div>
            </div>
          </div>

          {/* Price comparison */}
          <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current price</p>
              <p className="text-3xl font-bold text-primary">$59.99</p>
            </div>
            <div className="text-muted-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">July price</p>
              <p className="text-3xl font-bold text-red-400">$98.99</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Already own a license? You get V2.1 for free. No action needed.
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://xterminatorapps.gumroad.com/l/abletonliveaaf"

          className="btn-primary w-full inline-flex items-center justify-center gap-2"
        >
          Buy lifetime license now for $59.99
        </a>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full text-center text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
        >
          No thanks, I will pay more later
        </button>
      </div>
    </div>
  );
};

export default PriceIncreaseModal;
