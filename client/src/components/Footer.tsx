import { Link } from "wouter";
import logo from "@assets/cdcall-logo.png";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              {/* Logo (fix: pas de invert/brightness) */}
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo C.D.CALL"
                  className="h-10 md:h-11 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <span className="text-white font-display font-bold text-xl">
                C.D.<span className="text-accent">CALL</span>
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm">
              Une approche orientée ROI pour digitaliser, attirer et convertir.
              Nous transformons votre présence en ligne en moteur de croissance.
            </p>

            <div className="flex gap-4">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://web.facebook.com/profile.php?id=61587047591941",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/c.d.call1/",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Services", href: "/services" },
                { name: "Audit Gratuit", href: "/audit-contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Nos Expertises</h4>
            <ul className="space-y-3">
              <li>Création de sites web</li>
              <li>Référencement SEO</li>
              <li>Publicité Meta Ads</li>
              <li>Tracking & Analytics</li>
              <li>Stratégie Digitale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>
                  2 Rue du Palatin 42110 Feurs 
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:contact@cdcall.fr" className="hover:text-white">
                  contact@cdcall.fr
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+33745049370" className="hover:text-white">
                  +33 745 04 93 70
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} C.D.CALL. Tous droits réservés.</p>

          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
