import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: November 11, 2026
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Overview</h2>
            <p>
              XTERMINATORAPPS ("we", "us", or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit <a href="https://abletonliveaaf.shop" className="text-primary hover:underline">abletonliveaaf.shop</a> or use our desktop software Abletonlive.aaf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>We believe in minimal data collection:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
              <li><strong className="text-foreground">Purchase Information:</strong> Checkout transactions are securely processed by Gumroad. We receive your email address, purchase timestamp, and license key generation details. We never see or store your payment card numbers.</li>
              <li><strong className="text-foreground">License Activation Data:</strong> When activating the desktop application, a cryptographic hash representing your hardware environment (machine ID) and license key are verified with our license server to validate activation limits.</li>
              <li><strong className="text-foreground">Local Audio Project Privacy:</strong> Your audio files, AAF files, and Ableton Live projects are processed 100% locally on your computer. Audio data is never uploaded to any remote server or third-party cloud.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Information</h2>
            <p>We use collected data solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
              <li>Issue and validate legitimate software license keys.</li>
              <li>Deliver software updates and technical support responses.</li>
              <li>Prevent unauthorized software piracy and abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Third-Party Services</h2>
            <p>
              We integrate with trusted service providers:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
              <li><strong className="text-foreground">Gumroad:</strong> Payment gateway and checkout handler.</li>
              <li><strong className="text-foreground">Cloudflare:</strong> Secure CDN and binary download delivery.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Data Retention & Your Rights</h2>
            <p>
              We retain purchase records as necessary to maintain your lifetime license validity and legal compliance. You have the right to request access to or deletion of your customer records by emailing <a href="mailto:support@abletonliveaaf.shop" className="text-primary hover:underline">support@abletonliveaaf.shop</a>. Note that deletion of license records will disable future license reactivation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
