import logo from "../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/refund", label: "Refund Policy" },
    { href: "#bug-report", label: "Bug Report" },
    { href: "/help/index.html", label: "Documentation" },
  ];

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/" + href);
      }
    } else if (href.startsWith("/") && !href.startsWith("/help")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Ableton live.aaf" className="h-6" />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {currentYear} XTERMINATORAPPS. All rights reserved.
          </p>
        </div>

        {/* Legal Trademark Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground/75 leading-relaxed max-w-4xl mx-auto">
          <p>
            &quot;Ableton&quot; and &quot;Ableton Live&quot; are trademarks of Ableton AG. &quot;Pro Tools&quot;, &quot;Media Composer&quot; and &quot;Avid&quot; are trademarks of Avid Technology, Inc. &quot;DaVinci Resolve&quot; is a trademark of Blackmagic Design Pty. Ltd. &quot;Adobe&quot; and &quot;Premiere Pro&quot; are trademarks of Adobe Inc. &quot;Apple&quot;, &quot;Final Cut Pro&quot; and &quot;FCPXML&quot; are trademarks of Apple Inc. &quot;Nuendo&quot; and &quot;Cubase&quot; are trademarks of Steinberg Media Technologies GmbH. AAF (Advanced Authoring Format) is a specification of the Advanced Media Workflow Association (AMWA). Abletonlive.aaf is an independent product developed by XTERMINATORAPPS and is not affiliated with, endorsed or sponsored by any of these companies; names and trademarks are used solely to describe compatibility and interoperability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
