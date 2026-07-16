import { Layout } from "@/components/Layout";
import { Formations } from "@/components/Formations";
import { HeroAnalyticsDashboard } from "@/components/HeroAnalyticsDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Globe,
  Search,
  Target,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Activity,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* 1. HERO SECTION (FIX: couvre le padding-top du main) */}
      <section
        className="
          brand-gradient relative overflow-hidden
          -mt-[var(--header-height)]
          pt-[var(--header-height)]
          pb-12 md:pb-14 lg:pb-16
        "
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 py-10 md:py-12 lg:grid-cols-2 lg:py-14">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                AGENCE DIGITALE PERFORMANCE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
                Digitalisez. <br />
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Attirez.
                </span>{" "}
                <br />
                Convertissez.
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Un système complet pour votre croissance : Site Web performant,
                Stratégie SEO, Publicité Meta Ads et Tracking précis. Ne laissez
                plus le hasard décider de vos résultats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link href="/audit-contact">
                  <Button className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-1 transition-all">
                    Demander un audit gratuit
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="h-14 rounded-xl border-white bg-white px-8 text-lg text-primary transition-all hover:border-blue-100 hover:bg-blue-50 hover:text-accent"
                  >
                    Voir nos services
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-400 font-medium">
                {["Approche orientée ROI", "Tracking clair", "Itérations rapides"].map(
                  (item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <HeroAnalyticsDashboard />
          </div>
        </div>
      </section>

      {/* 2. WHY DIGITALIZE (Context) */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              Pourquoi la digitalisation est devenue{" "}
              <span className="text-accent">obligatoire</span> ?
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Le comportement d&apos;achat a radicalement changé. Aujourd&apos;hui,{" "}
                <strong>87% des parcours d&apos;achat commencent en ligne</strong>.
                Que vous soyez artisan, PME ou grand groupe, votre client vous
                cherche d&apos;abord sur Google.
              </p>
              <p>
                La confiance se joue en quelques secondes. Un site lent, mal
                adapté aux mobiles ou introuvable, c&apos;est un client offert à
                la concurrence. La digitalisation n&apos;est plus une "option luxe",
                c&apos;est votre vitrine principale.
              </p>
              <p>
                Pire encore : la visibilité organique baisse chaque année. Sans
                une stratégie active (SEO ou Publicité), vous devenez invisible.
                CDS Consulting vous remet dans la lumière.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-background p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-accent">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Les 6 erreurs fatales
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Site web lent ou daté",
                  "Aucun tracking des visiteurs",
                  "Dépendance au bouche-à-oreille",
                  "Publicité sans ciblage",
                  "Absence de mots-clés stratégiques",
                  "Pas de formulaire de capture",
                ].map((error, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 text-sm"
                  >
                    <span className="font-bold text-accent">✗</span>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (Services) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Ce que nous faisons</h2>
            <p className="text-slate-600">
              4 piliers pour une stratégie digitale inébranlable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Création Site Web",
                desc: "Vitrine, Landing Page ou E-commerce. Des sites rapides, sécurisés et conçus pour convertir vos visiteurs en clients.",
                ex: "Ex: Site vitrine WordPress optimisé.",
                color: "text-blue-500 bg-blue-50",
              },
              {
                icon: Search,
                title: "SEO & Contenu",
                desc: "Positionnez-vous sur les mots-clés que vos clients recherchent. Audit technique, rédaction et netlinking.",
                ex: "Ex: 1ère page sur 'Plombier Paris'.",
                color: "text-accent bg-blue-50",
              },
              {
                icon: Target,
                title: "Meta Ads",
                desc: "Campagnes Facebook & Instagram ultra-ciblées pour générer des leads qualifiés dès la première semaine.",
                ex: "Ex: 50 leads qualifiés / mois.",
                color: "text-accent bg-blue-50",
              },
              {
                icon: BarChart3,
                title: "Tracking & Data",
                desc: "Configuration GA4 et GTM pour comprendre exactement d'où viennent vos ventes et optimiser votre budget.",
                ex: "Ex: Tableaux de bord en temps réel.",
                color: "text-accent bg-blue-50",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed h-20">
                    {service.desc}
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {service.ex}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Formations />

      {/* 4. OFFERS */}
      <section className="section-padding relative overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Nos Packs Stratégiques
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choisissez la vitesse de votre croissance. Des solutions packagées
              pour des résultats prévisibles.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pack PRÉSENCE",
                price: "L'Essentiel",
                focus: "Focus Site & Visibilité",
                desc: "Un site WordPress professionnel n'est rien s'il n'est pas vu. Idéal pour démarrer proprement.",
                features: [
                  "Site WordPress responsive",
                  "Optimisation technique SEO",
                  "Intégration Google Analytics",
                  "Formation prise en main",
                  "Maintenance 1 mois offerte",
                ],
                cta: "Je lance ma présence",
                highlight: false,
              },
              {
                title: "Pack ACQUISITION",
                price: "Le Best-Seller",
                focus: "Focus Leads & Ads",
                desc: "Arrêtez de courir après les clients. Mettez en place une machine automatique à générer des contacts.",
                features: [
                  "Tout du pack Présence",
                  "Campagnes Meta Ads (FB/Insta)",
                  "Landing Page haute conversion",
                  "Tracking avancé GTM",
                  "Reporting hebdomadaire",
                ],
                cta: "Je veux des clients",
                highlight: true,
              },
              {
                title: "Pack DOMINATION",
                price: "L'Intégral",
                focus: "Focus Autorité & Scale",
                desc: "Prenez le leadership de votre marché. Une stratégie omnicanale pour écraser la concurrence.",
                features: [
                  "Audit complet concurrentiel",
                  "Stratégie de contenu (Blog)",
                  "SEO Off-site (Backlinks)",
                  "Automation CRM & Emailing",
                  "Accompagnement VIP dédié",
                ],
                cta: "Je domine mon marché",
                highlight: false,
              },
            ].map((pack, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  pack.highlight
                    ? "z-10 scale-[1.02] border-blue-400 bg-white/10 shadow-2xl shadow-accent/20"
                    : "border-white/15 bg-white/5 hover:border-blue-300/50 hover:bg-white/10"
                }`}
              >
                {pack.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Recommandé
                  </div>
                )}

                {/* ✅ TITRE PACK EN DÉGRADÉ BLEU (MODIFICATION) */}
                <h3
                  className={`text-2xl font-bold mb-2 text-transparent bg-clip-text ${
                    pack.highlight
                      ? "bg-gradient-to-r from-blue-300 to-white"
                      : "bg-gradient-to-r from-blue-300 to-blue-500"
                  }`}
                >
                  {pack.title}
                </h3>

                <div className="text-slate-400 font-medium mb-6">{pack.price}</div>

                <div className="h-px w-full bg-slate-700 mb-6" />

                <div className="text-accent font-bold mb-2 uppercase text-sm tracking-wider">
                  {pack.focus}
                </div>
                <p className="text-slate-300 text-sm mb-8 h-16">{pack.desc}</p>

                <ul className="space-y-4 mb-8">
                  {pack.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 ${
                          pack.highlight ? "text-accent" : "text-slate-500"
                        }`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link href="/audit-contact">
                  <Button
                    className={`w-full py-6 text-lg font-bold rounded-xl ${
                      pack.highlight
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "bg-white text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {pack.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Notre Méthodologie</h2>
            <p className="text-slate-600">Pas de magie, juste un processus rodé.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                { step: "01", title: "Audit", icon: Search },
                { step: "02", title: "Stratégie", icon: Lightbulb },
                { step: "03", title: "Setup", icon: Globe },
                { step: "04", title: "Tracking", icon: Activity },
                { step: "05", title: "Acquisition", icon: Target },
                { step: "06", title: "Optimisation", icon: TrendingUp },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-lg flex items-center justify-center mb-4 group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-slate-600 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 mb-1">
                    STEP {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* 6. CLIENTS (espacement des logos ajusté sans casser le layout) */}
<section className="py-14 bg-slate-50 border-y border-slate-200">
  <div className="container-custom">
    {/* Titre */}
   <p className="text-center text-slate-500 font-extrabold mb-8 tracking-wide">
  ILS NOUS FONT CONFIANCE
</p>


    {/* Logos */}
    <div className="flex flex-wrap items-center justify-center gap-14 md:gap-24">
      {/* Culture Habitat */}
      <a
        href="https://www.culturehabitat.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-[1.03]"
        title="Visiter le site Culture Habitat"
      >
        <img
          src="/clients-imgs/culture-habitat.png"
          alt="Logo Culture Habitat"
          className="h-12 md:h-14 w-auto object-contain"
          loading="lazy"
        />
      </a>

      {/* OPS Finance */}
      <a
        href="https://www.opsfinance.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-[1.03]"
        title="Visiter le site OPS Finance"
      >
        <img
          src="/clients-imgs/opsfinance.png"
          alt="Logo OPS Finance"
          className="h-12 md:h-20 w-auto object-contain"
          loading="lazy"
        />
      </a>

      {/* OBF Energie */}
      <a
        href="https://www.obfenergie.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-[1.03]"
        title="Visiter le site OBF Énergie"
      >
        <img
          src="/clients-imgs/obfenergie.png"
          alt="Logo OBF Energie"
          className="h-12 md:h-14 w-auto object-contain"
          loading="lazy"
        />
      </a>

      {/* CD CALL */}
      <a
        href="https://cdcall.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-[1.03]"
        title="Visiter le site C.D.CALL"
      >
        <img
          src="/clients-imgs/cdcall.png"
          alt="Logo CD CALL"
          className="h-12 md:h-20 w-auto object-contain"
          loading="lazy"
        />
      </a>

    </div>

  </div>
</section>



      {/* 7. FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un accompagnement ?",
                a: "Tout dépend de vos objectifs. Nos offres démarrent à partir de forfaits accessibles pour les TPE, jusqu'à des solutions sur-mesure pour les grands comptes. L'audit nous permet de chiffrer précisément.",
              },
              {
                q: "En combien de temps aurai-je des résultats ?",
                a: "Pour la publicité (Meta Ads), les premiers leads arrivent souvent en moins de 7 jours. Pour le SEO, comptez 3 à 6 mois pour un impact durable.",
              },
              {
                q: "Suis-je propriétaire de mon site ?",
                a: "Oui, à 100%. Aucune location chez nous. Une fois livré, le site et le nom de domaine vous appartiennent intégralement.",
              },
              {
                q: "Travaillez-vous avec toute la France ?",
                a: "Absolument. Nos outils digitaux nous permettent d'accompagner des clients partout en France et en Europe avec la même efficacité.",
              },
              {
                q: "Qu'est-ce que l'audit gratuit ?",
                a: "C'est une analyse de 30 minutes de votre présence actuelle. Nous identifions les bloquants et vous donnons un plan d'action, sans engagement.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="group border border-slate-200 rounded-xl p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-bold text-lg text-primary">{faq.q}</h3>

                  {/* Nouvelle flèche */}
                  <ChevronDown className="w-5 h-5 text-accent transition-transform duration-300 group-hover:rotate-180" />
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-accent text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à passer au niveau supérieur ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-blue-100">
            N&apos;attendez plus que les clients viennent à vous. Allez les chercher.
          </p>
          <Link href="/audit-contact">
            <Button className="bg-white text-accent hover:bg-slate-100 text-lg px-10 py-6 rounded-xl font-bold shadow-xl">
              Démarrer maintenant
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
