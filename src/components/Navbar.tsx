import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { 
      name: "Services", 
      href: "#services",
      dropdown: [
        "Web Design",
        "Google Workspace",
        "Domain & Hosting",
        "Microsoft 365",
        "Zoho Workspace"
      ]
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-card py-2' : 'bg-background/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden">
              <img src={logo} alt="Anutech Digital" className="h-full w-auto object-cover object-left" />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-foreground">Anutech</span>
              <span className="text-lg md:text-xl font-bold text-primary"> Digital</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-card rounded-lg shadow-card border border-border py-2 min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button className="hidden lg:inline-flex" size="lg">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4" size="lg">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
