import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/cdcall_1768905138853.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-primary py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={logo} 
              alt="C.D.CALL Logo" 
              className="h-10 w-auto relative z-10 transition-transform group-hover:scale-105" 
            />
          </div>
          <span className="text-white font-display font-bold text-xl tracking-wide">
            C.D.<span className="text-accent">CALL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(link.href) ? "text-accent" : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/audit-contact">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
            >
              Demander un audit
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 shadow-2xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/10 my-2" />
            <Link href="/audit-contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg">
                Demander un audit
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
