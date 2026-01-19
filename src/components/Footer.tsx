import logo from "../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#bug-report", label: "Bug Report" },
    { href: "/help/index.html", label: "Documentation" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Ableton live.aaf" className="h-6" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} XTERMINATORAPPS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
