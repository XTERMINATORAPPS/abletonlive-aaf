import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import LiquidGlass from "./LiquidGlass";

interface NavbarProps {
  onBuyNowClick: () => void;
}

const Navbar = ({ onBuyNowClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const gumroadUrl = "https://xterminatorapps.gumroad.com/l/abletonliveaaf";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/help/index.html", label: "Documentation" },
    { href: "#bug-report", label: "Bug Report" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        // On homepage: scroll to the section
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages: navigate home, then scroll after load
        navigate("/" + href);
      }
      setIsMobileMenuOpen(false);
    } else if (href.startsWith("/") && !href.startsWith("/help")) {
      // Internal React routes (e.g. /blog)
      e.preventDefault();
      navigate(href);
      setIsMobileMenuOpen(false);
    } else {
      // External or /help links: let the browser handle it
      setIsMobileMenuOpen(false);
    }
  };

  const navContent = (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Abletonlive.aaf" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={gumroadUrl}

            className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:brightness-110"
          >
            Buy Now
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border py-4">
          <div className="flex flex-col gap-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={gumroadUrl}
  
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg text-center"
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {isScrolled ? (
        <LiquidGlass
          className="rounded-none"
          depth={4}
          strength={40}
          chromaticAberration={1}
          blur={1}
          brightness={1.15}
          saturate={1.3}
        >
          {navContent}
        </LiquidGlass>
      ) : (
        navContent
      )}
    </nav>
  );
};

export default Navbar;
