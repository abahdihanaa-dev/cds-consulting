import { Layout } from "@/components/Layout";
import { Scale, ShieldCheck, Mail, MapPin, Phone, Globe } from "lucide-react";

const sections = [
  // TODO(CDS): valider la raison sociale, le domaine et les coordonnées légales
  // avant de remplacer les informations historiques  cds consulting ci-dessous.
  {
    title: "Éditeur du site",
    content:
      "Le site web  cds consulting est édité par cds consulting. Le site est accessible à l’adresse https://www.cdsconsulting.fr (ou à toute autre URL de redirection utilisée par l’entreprise).",
  },
  {
    title: "Coordonnées",
    content:
      " cds consulting – 2 Rue du Palatin, 42110 Feurs, France. Téléphone : +33 7 45 04 93 70. Email : contact@cdsconsulting.fr",
  },
  {
    title: "Hébergement",
    content:
      "Le site est hébergé par un prestataire de services numériques, dans le respect des obligations applicables en matière de sécurité, de confidentialité et de disponibilité des données.",
  },
  {
    title: "Propriété intellectuelle",
    content:
      "L’ensemble du contenu du site (textes, images, logos, visuels, structure, code) est protégé par les droits de propriété intellectuelle. Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.",
  },
  {
    title: "Responsabilité",
    content:
      " cds consulting s’efforce de fournir des informations exactes et à jour. Elle ne saurait être tenue responsable des erreurs, omissions ou conséquences liées à l’utilisation du site ou à l’impossibilité d’y accéder.",
  },
  {
    title: "Droit applicable",
    content:
      "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront compétents, sauf disposition contraire impérative.",
  },
];

export default function MentionsLegales() {
  return (
    <Layout>
      <div className="brand-gradient relative overflow-hidden -mt-[76px] md:-mt-[88px] pt-[76px] md:pt-[88px] pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-200 mb-6">
            <Scale className="h-4 w-4" />
            Mentions légales
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Mentions Légales
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ce site respecte les règles applicables en matière de publication en ligne, de droit d’auteur et de protection des données personnelles, conformément au cadre européen et français.
          </p>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="h-auto min-h-[300px] self-start rounded-2xl bg-primary p-8 text-white shadow-xl lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Conformité</p>
                <h2 className="text-2xl font-bold leading-tight">RGPD & droit français</h2>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-white/10" />

            <ul className="mt-8 space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-4">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Respect des exigences du Règlement général sur la protection des données (RGPD) et du cadre applicable en Europe.</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Contact direct possible via l’adresse électronique indiquée ci-dessus.</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Siège opérationnel en France, dans le respect des obligations locales et européennes.</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Disponibilité pour toute demande liée à l’utilisation du site ou à la protection des données.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
