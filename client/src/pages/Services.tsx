import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Search, Target, BarChart3, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web",
      icon: Globe,
      title: "Création de Sites Web",
      subtitle: "Votre meilleur commercial, disponible 24/7",
      desc: "Nous concevons des sites ultra-rapides, sécurisés et optimisés pour la conversion. Pas de templates génériques, mais une structure pensée pour guider le visiteur vers l'action.",
      details: ["Design UX/UI sur-mesure", "Développement WordPress", "Optimisation Mobile First", "Intégration CRM"],
      color: "blue"
    },
    {
      id: "seo",
      icon: Search,
      title: "Référencement SEO",
      subtitle: "Soyez visible quand on vous cherche",
      desc: "L'art d'apparaître en premier sur Google sans payer de publicité. Une stratégie long terme pour asseoir votre autorité et capter du trafic gratuit qualifié.",
      details: ["Audit technique complet", "Stratégie de mots-clés", "Rédaction de contenu optimisé", "Campagne de Netlinking"],
      color: "green"
    },
    {
      id: "ads",
      icon: Target,
      title: "Publicité Meta Ads",
      subtitle: "Accélérez votre croissance instantanément",
      desc: "Nous ciblons vos clients idéaux sur Facebook et Instagram avec des créatifs percutants. Une approche mathématique : 1€ investi doit rapporter plus.",
      details: ["Stratégie d'audience", "Création des visuels/vidéos", "A/B Testing continu", "Scaling des campagnes"],
      color: "purple"
    },
    {
      id: "tracking",
      icon: BarChart3,
      title: "Tracking & Analytics",
      subtitle: "Ne pilotez plus à l'aveugle",
      desc: "Si vous ne pouvez pas le mesurer, vous ne pouvez pas l'améliorer. Nous installons des sondes précises pour savoir exactement ce qui fonctionne.",
      details: ["Plan de taggage GTM", "Configuration GA4", "Tracking des conversions", "Dashboard Data Studio"],
      color: "orange"
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une suite complète d'expertises pour couvrir l'intégralité de votre tunnel de vente.
          </p>
        </div>
      </div>

      <div className="container-custom py-24 space-y-32">
        {services.map((service, i) => (
          <div key={service.id} className={`flex flex-col gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="flex-1 space-y-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-${service.color === 'orange' ? 'accent' : service.color + '-600'} shadow-lg mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-xl text-accent font-medium">{service.subtitle}</p>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.desc}
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium text-slate-700">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${service.color === 'orange' ? 'orange' : service.color}-100 text-${service.color === 'orange' ? 'orange' : service.color}-600`}>
                      <Check className="w-4 h-4" />
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <Link href="/audit-contact">
                  <Button className="btn-primary">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full">
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                 <div className={`absolute top-0 right-0 w-64 h-64 bg-${service.color === 'orange' ? 'orange' : service.color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700`} />
                 
                 <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="space-y-4 pt-8">
                     <div className="h-4 bg-slate-100 rounded w-3/4" />
                     <div className="h-4 bg-slate-100 rounded w-full" />
                     <div className="h-4 bg-slate-100 rounded w-5/6" />
                     <div className="h-32 bg-slate-100 rounded-xl mt-8" />
                   </div>
                   <div className="space-y-4">
                     <div className="h-40 bg-slate-200 rounded-xl" />
                     <div className="h-4 bg-slate-100 rounded w-full" />
                     <div className="h-4 bg-slate-100 rounded w-2/3" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary py-24 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-8">Vous ne savez pas par où commencer ?</h2>
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
