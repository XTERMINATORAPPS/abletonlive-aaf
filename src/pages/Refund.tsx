import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Refund = () => {
  useEffect(() => {
    document.title = "Refund Policy | Abletonlive.aaf";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Refund policy for Abletonlive.aaf digital software licenses. Learn about evaluation resources and technical support."
      );
    }
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = "https://abletonliveaaf.shop/refund";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: November 11, 2026
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Digital License Sales</h2>
            <p>
              Abletonlive.aaf is delivered as digital desktop software with instant license key issuance upon payment. Because our license keys are permanent, non-expiring, and irrevocable once activated, <strong className="text-foreground">all sales are final and non-refundable</strong> once a license key has been generated and delivered.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Evaluate Before You Buy</h2>
            <p>
              To ensure Abletonlive.aaf matches your studio workflow requirements, we encourage you to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
              <li>Watch our complete walkthrough demo video on the homepage showing real-world timeline conversions.</li>
              <li>Read the comprehensive documentation and supported DAW formats at <a href="/help/index.html" className="text-primary hover:underline">/help/index.html</a>.</li>
              <li>Check our FAQs regarding audio track preservation, volume automation, and fades.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Technical Support & Compatibility Issues</h2>
            <p>
              If you experience an unexpected compatibility problem with a specific AAF file or DAW dialect (e.g. Pro Tools, DaVinci Resolve, Premiere Pro), please reach out to our dedicated support team.
            </p>
            <p>
              We provide prompt technical support and will gladly analyze your error logs to resolve any edge-case file format discrepancies. Contact our engineering team directly at: <a href="mailto:support@abletonliveaaf.shop" className="text-primary hover:underline">support@abletonliveaaf.shop</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
