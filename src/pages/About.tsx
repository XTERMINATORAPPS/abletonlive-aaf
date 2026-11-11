import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Abletonlive.aaf | Two-Way AAF Conversion for Ableton Live";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn about Abletonlive.aaf, the dedicated two-way bridge between Ableton Live and professional film, television, and audio post-production."
      );
    }
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = "https://abletonliveaaf.shop/about";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About Abletonlive.aaf</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The dedicated two-way bridge between Ableton Live and professional film, television, and audio post-production.
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Our Mission</h2>
            <p>
              Ableton Live is renowned worldwide as an unparalleled creative platform for music production, composition, and sound design. However, standard commercial film and video editing pipelines communicate via Advanced Authoring Format (AAF) files.
            </p>
            <p>
              Abletonlive.aaf was created by XTERMINATORAPPS to eliminate this friction entirely. Our desktop software provides sample-accurate conversion from AAF to native Ableton Live Sets (.als) and vice versa, empowering composers, sound editors, and mixers to collaborate without tedious stem bouncing or timeline reconstruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">What We Build</h2>
            <p>
              We focus on speed, fidelity, and reliability. Abletonlive.aaf translates audio clips, sample-accurate timeline placements, track hierarchies, volume automation curves, crossfades, and marker data seamlessly between platforms like Pro Tools, DaVinci Resolve, Premiere Pro, Logic Pro, Cubase, and Ableton Live.
            </p>
            <p>
              We believe in simple, creator-first software licensing: one fair lifetime license, no forced subscriptions, and continuous compatibility updates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Company Information</h2>
            <p>
              Abletonlive.aaf is developed and distributed by XTERMINATORAPPS.
            </p>
            <p>
              Website: <a href="https://abletonliveaaf.shop" className="text-primary hover:underline">https://abletonliveaaf.shop</a>
              <br />
              Support & Inquiries: <a href="mailto:support@abletonliveaaf.shop" className="text-primary hover:underline">support@abletonliveaaf.shop</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
