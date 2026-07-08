import { Layout } from "@/components/Layout";
import { Lock, Eye, Database, ShieldCheck, Mail } from "lucide-react";

const items = [
  {
    title: "Données collectées",
    text: "Nous collectons les informations fournies volontairement via les formulaires de contact, ainsi que les données techniques nécessaires au bon fonctionnement du site (adresse IP, cookies, logs d’accès, informations de navigation).",
  },
  {
    title: "Finalité de la collecte",
    text: "Les données sont utilisées pour répondre à vos demandes, traiter vos messages, améliorer la qualité du service, analyser l’audience du site et respecter nos obligations légales.",
  },
  {
    title: "Base légale",
    text: "Le traitement repose sur votre consentement, sur l’exécution d’un contrat ou sur l’intérêt légitime de l’entreprise, dans le respect du RGPD et des lois françaises applicables.",
  },
  {
    title: "Vos droits",
    text: "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité de vos données personnelles. Vous pouvez exercer ces droits en nous contactant.",
  },
  {
    title: "Cookies",
    text: "Le site peut utiliser des cookies techniques et analytiques afin d’améliorer l’expérience utilisateur et mesurer l’audience. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.",
  },
  {
    title: "Sécurité",
    text: "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre toute perte, accès non autorisé, divulgation ou altération.",
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <div className="bg-primary relative overflow-hidden -mt-[88px] md:-mt-[104px] pt-[88px] md:pt-[104px] pb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-200 mb-6">
            <Lock className="h-4 w-4" />
            Politique de confidentialité
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nous traitons vos données personnelles avec transparence et rigueur, dans le respect du RGPD, du droit français et des bonnes pratiques européennes.
          </p>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-xl p-8 lg:p-10 text-white self-start h-auto min-h-[270px]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Protection</p>
                <h2 className="text-2xl font-bold leading-tight">Vos données sont protégées</h2>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-white/10" />

            <ul className="mt-8 space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-4">
                <Eye className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Transparence sur la collecte, l’usage et la conservation des données.</span>
              </li>
              <li className="flex items-start gap-4">
                <Database className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Conservation limitée au strict nécessaire à la finalité poursuivie.</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="max-w-[28rem] leading-relaxed">Réponse rapide à toute demande liée à la confidentialité ou à vos droits.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
