import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { name: "Formations", href: "/formations" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur-md"
          : "border-b border-slate-100 bg-white py-3"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center" aria-label="CDS Consulting — Accueil">
          <img
            src="/assets/cds-consulting-logo.png"
            alt="CDS Consulting"
            width="1000"
            height="500"
            className="h-auto w-[138px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[150px] md:w-[184px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive(link.href) ? "text-accent" : "text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/audit-contact">
            <Button 
              className="h-12 rounded-xl bg-accent px-6 font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Demander un audit
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-primary transition-colors hover:bg-blue-50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-5 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-slate-200" />
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
