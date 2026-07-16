import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Search, Target, BarChart3, Check } from "lucide-react";
import { motion } from "framer-motion";

const colorClasses = {
  blue: {
    iconWrap: "bg-blue-600",
    checkWrap: "bg-blue-100",
    checkIcon: "text-blue-600",
  },
  green: {
    iconWrap: "bg-accent",
    checkWrap: "bg-blue-100",
    checkIcon: "text-accent",
  },
  purple: {
    iconWrap: "bg-accent",
    checkWrap: "bg-blue-100",
    checkIcon: "text-accent",
  },
  orange: {
    iconWrap: "bg-accent",
    checkWrap: "bg-blue-100",
    checkIcon: "text-accent",
  },
} as const;

type ServiceColor = keyof typeof colorClasses;

export default function Services() {
  const services: Array<{
    id: string;
    icon: any;
    title: string;
    subtitle: string;
    desc: string;
    details: string[];
    color: ServiceColor;
    image: string;
  }> = [
    {
      id: "web",
      icon: Globe,
      title: "Création de Sites Web",
      subtitle: "Votre meilleur commercial, disponible 24/7",
      desc: "Nous concevons des sites ultra-rapides, sécurisés et optimisés pour la conversion. Pas de templates génériques, mais une structure pensée pour guider le visiteur vers l'action.",
      details: [
        "Design UX/UI sur-mesure",
        "Développement WordPress",
        "Optimisation Mobile First",
        "Intégration CRM",
      ],
      color: "blue",
      image: "/service-imgs/CreationdeSitesWeb.jpg",
    },
    {
      id: "seo",
      icon: Search,
      title: "Référencement SEO",
      subtitle: "Soyez visible quand on vous cherche",
      desc: "L'art d'apparaître en premier sur Google sans payer de publicité. Une stratégie long terme pour asseoir votre autorité et capter du trafic gratuit qualifié.",
      details: [
        "Audit technique complet",
        "Stratégie de mots-clés",
        "Rédaction de contenu optimisé",
        "Campagne de Netlinking",
      ],
      color: "green",
      image: "/service-imgs/ReferencementSEO.jpg",
    },
    {
      id: "ads",
      icon: Target,
      title: "Publicité Meta Ads & Google Ads",
      subtitle: "Accélérez votre croissance instantanément",
      desc: "Nous ciblons vos clients idéaux sur Facebook, Instagram et Google avec des campagnes structurées, mesurables et continuellement optimisées.",
      details: [
        "Stratégie d'audience et de mots-clés",
        "Création des visuels/vidéos",
        "A/B Testing continu",
        "Scaling des campagnes",
      ],
      color: "purple",
      image: "/service-imgs/PubliciteMetaAds.jpg",
    },
    {
      id: "tracking",
      icon: BarChart3,
      title: "Tracking & Analytics",
      subtitle: "Ne pilotez plus à l'aveugle",
      desc: "Si vous ne pouvez pas le mesurer, vous ne pouvez pas l'améliorer. Nous installons des sondes précises pour savoir exactement ce qui fonctionne.",
      details: [
        "Plan de taggage GTM",
        "Configuration GA4",
        "Tracking des conversions",
        "Dashboard Data Studio",
      ],
      color: "orange",
      image: "/service-imgs/TrackingAnalytics.jpg",
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Nos Services"
        description="Une suite complète d’expertises pour couvrir l’intégralité de votre tunnel de vente."
      />

      <div className="container-custom space-y-20 py-16 md:space-y-28 md:py-20 lg:py-24">
        {services.map((service, i) => {
          const c = colorClasses[service.color];

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex-1 space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${c.iconWrap} shadow-lg mb-6`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-xl text-accent font-medium">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.desc}
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                  {service.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 font-medium text-slate-700"
                    >
                      <span
                        className={`flex items-center justify-center w-6 h-6 rounded-full ${c.checkWrap} ${c.checkIcon}`}
                      >
                        <Check className="w-4 h-4" />
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <Link href="/audit-contact">
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl h-12 px-8">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
                  >
                    <div className="mb-4 h-2 w-12 rounded-full bg-accent shadow-lg shadow-accent/30" />
                    <div className="text-white font-bold text-lg">
                      Performance & Acquisition
                    </div>
                    <div className="text-slate-300 text-sm mt-1">
                      Expertise proposée par CDS Consulting
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-primary py-24 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-8">
            Vous ne savez pas par où commencer ?
          </h2>
          <Link href="/audit-contact">
            <Button className="bg-white text-primary hover:bg-slate-200 text-lg px-8 py-6 rounded-xl font-bold">
              Demander un audit gratuit
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
