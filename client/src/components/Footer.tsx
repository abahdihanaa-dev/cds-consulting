import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  type LucideProps,
} from "lucide-react";

function TikTokIcon({ className, ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16.6 3c.3 1.9 1.4 3.4 3.4 4v3.4c-1.3 0-2.5-.3-3.5-.9v6.2c0 3.4-2.7 6.3-6.2 6.3A6.3 6.3 0 0 1 4 15.7a6.3 6.3 0 0 1 7.4-6.2V13a2.9 2.9 0 1 0 1.7 2.7V3h3.5Z" />
    </svg>
  );
}

export function Footer() {
  const socialLinks = [
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://web.facebook.com/people/CDSconsulting/61591866566614/",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/cdsco_nsulting/",
    },
    {
      Icon: TikTokIcon,
      label: "TikTok",
      href: "https://www.tiktok.com/@cdsconsulting",
    },
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Formations", href: "/formations" },
    { name: "Audit Gratuit", href: "/audit-contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-primary text-blue-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white p-2"
              aria-label="CDS Consulting — Accueil"
            >
              <img
                src="/assets/cds-consulting-logo.png"
                alt="CDS Consulting"
                width={1000}
                height={500}
                className="h-auto w-[176px] object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-sm leading-relaxed text-blue-100/75">
              Une approche orientée ROI pour digitaliser, attirer et convertir.
              Nous transformons votre présence en ligne en moteur de croissance.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CDS Consulting sur ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-blue-100 transition-all duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Liens Rapides
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Nos Expertises
            </h4>

            <ul className="space-y-3">
              <li>Création de sites web</li>
              <li>Référencement SEO</li>
              <li>Publicité Meta Ads</li>
              <li>Tracking & Analytics</li>
              <li>Stratégie digitale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Contact</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>
                  82, rue Soumaya, Résidence Chehrazade 1, 3e étage,
                  N° 13, Palmiers — Casablanca
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="mailto:contact@cdsconsulting.fr"
                  className="transition-colors hover:text-white"
                >
                  contact@cdsconsulting.fr
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="tel:+33745049370"
                  className="transition-colors hover:text-white"
                >
                  +33 7 45 04 93 70
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} CDS Consulting. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-white"
            >
              Mentions Légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="transition-colors hover:text-white"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}