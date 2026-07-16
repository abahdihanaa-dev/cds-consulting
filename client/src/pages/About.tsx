import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Rocket, Heart, Shield } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <PageHero
        title="Notre Mission"
        description="Démocratiser la performance digitale pour les entreprises ambitieuses. Nous ne vendons pas des sites web, nous vendons de la croissance."
      />

      <div className="container-custom relative z-20 -mt-8 pb-20 md:-mt-14 md:pb-24">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Rocket,
              title: "Performance",
              desc: "Nous sommes obsédés par le ROI. Chaque euro investi doit rapporter.",
            },
            {
              icon: Shield,
              title: "Transparence",
              desc: "Pas de jargon complexe. Des rapports clairs et un accès total à vos données.",
            },
            {
              icon: Heart,
              title: "Partenariat",
              desc: "Votre succès est le nôtre. Nous travaillons comme une extension de votre équipe.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-accent mb-6">
                <val.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
           <h2 className="text-3xl font-bold mb-6">
              Pourquoi faire confiance à{" "}
             <span className="text-accent font-extrabold">CDS Consulting</span> ?
          </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Trop d&apos;agences se contentent de livrer &quot;du joli&quot;.
                Un beau site qui ne convertit pas est une dépense inutile. Chez
                CDS Consulting, nous venons du monde de la performance.
              </p>
              <p>
                Nous savons que le design n&apos;est qu&apos;un outil au service
                de la vente. C&apos;est pourquoi nos développeurs travaillent
                main dans la main avec nos experts marketing.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">
                Nos Outils de Prédilection
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "WordPress & Elementor",
                  "Google Analytics 4",
                  "Google Tag Manager",
                  "Meta Business Suite",
                  "SEMrush",
                  "Hotjar",
                ].map((tool, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent" /> {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
  <div className="absolute inset-0 bg-accent rounded-2xl rotate-3 -z-10" />

  <img
    src="/a-propos-imgs/aboutcdcall.png"
    alt="Équipe en réunion stratégique"
    className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
  />
</div>

        </div>

       

      </div>
    </Layout>
  );
}
