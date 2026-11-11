import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: November 11, 2026
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By purchasing, downloading, installing, or using Abletonlive.aaf ("Software"), developed by XTERMINATORAPPS ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. License Grant</h2>
            <p>
              Upon payment of the applicable one-time license fee ($45 USD), XTERMINATORAPPS grants you a revocable, non-exclusive, non-transferable, limited lifetime license to install and execute the Software on one (1) computer concurrently for personal or commercial audio production use.
            </p>
            <p>
              You may deactivate your license key on an existing machine to move your activation to a replacement machine at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Restrictions</h2>
            <p>You agree that you will not:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
              <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from the Software.</li>
              <li>Distribute, lease, license, sell, rent, or sublicense your license key or software binaries.</li>
              <li>Bypass, alter, or circumvent license verification mechanisms, machine authentication, or security boundaries.</li>
              <li>Use the software for unlawful or unauthorized purposes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Updates and Support</h2>
            <p>
              Your lifetime license includes access to software updates, bug fixes, and compatibility revisions provided by XTERMINATORAPPS. We reserve the right to modify or discontinue features with reasonable notice, although our goal is long-term backward and forward DAW compatibility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Disclaimer of Warranties</h2>
            <p>
              The Software is provided "AS IS" without warranty of any kind, express or implied. To the maximum extent permitted by law, XTERMINATORAPPS disclaims all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              Under no circumstances shall XTERMINATORAPPS be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the Software. In any case, our total liability shall not exceed the amount actually paid by you for the Software license.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Contact Information</h2>
            <p>
              For any questions regarding these Terms, contact us at: <a href="mailto:support@abletonliveaaf.shop" className="text-primary hover:underline">support@abletonliveaaf.shop</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
