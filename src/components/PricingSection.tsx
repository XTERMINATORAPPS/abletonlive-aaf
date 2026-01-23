import { Check, Zap } from "lucide-react";

const features = [
  "Lifetime license",
  "Free Lifetime updates",
  "Email support",
  "All DAWs & NLEs formats supported",
  "No subscription required",
  "Cross Platform",
  "One License per device"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          <span className="gradient-text">One-Time Purchase</span>
        </h2>
        <p className="section-subtitle">
          No subscriptions, no hidden fees. Pay once, use forever.
        </p>

        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 border-primary/30 glow-primary text-center relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
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
              {features.map((feature) => (
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
    </section>
  );
};

export default PricingSection;
