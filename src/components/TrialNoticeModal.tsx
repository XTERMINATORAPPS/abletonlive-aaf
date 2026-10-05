import { useState } from "react";
import { X, ShieldAlert, Video, ExternalLink, Check } from "lucide-react";

interface TrialNoticeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const TrialNoticeModal = ({ isOpen: controlledIsOpen, onClose: controlledOnClose }: TrialNoticeModalProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleWatchDemo = () => {
    handleClose();
    const demoEl = document.getElementById("demo");
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-card border border-border rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Notice</span>
            <h3 className="text-xl font-bold text-foreground">Free Trial Discontinued</h3>
          </div>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground mb-6">
          <p>
            Due to ongoing exploitation and abuse of the trial system, public trial downloads have been permanently removed.
          </p>
          <p>
            Software downloads and license keys are now issued <strong className="text-foreground">exclusively to verified purchasers</strong> immediately upon checkout.
          </p>
          <div className="bg-muted/40 border border-border/60 rounded-lg p-3 space-y-2 text-xs text-foreground">
            <div className="font-semibold text-primary mb-1">What Every Purchase Includes:</div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Full two-way conversion (AAF to ALS, ALS to AAF)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Lifetime license for 1 computer ($45 one-time)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Free updates forever and direct support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Instant download link provided after checkout</span>
            </div>
          </div>
          <p className="text-xs">
            Want to see how it works before purchasing? Watch our complete walkthrough demo below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://xterminatorapps.gumroad.com/l/abletonliveaaf"
            className="btn-primary flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm"
          >
            Get License ($45)
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={handleWatchDemo}
            className="btn-outline flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm"
          >
            <Video className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Continue to website
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialNoticeModal;
