import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { formations } from "@/data/formations";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { ArrowDown, ArrowRight, BarChart3, CheckCircle2, Lightbulb, Settings2, Target, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

const method = [
  { title: "Comprendre", text: "Clarifier les objectifs, les concepts et le rôle de chaque outil.", icon: Lightbulb },
  { title: "Configurer", text: "Mettre en place les campagnes, le tracking ou la structure de la boutique.", icon: Settings2 },
  { title: "Pratiquer", text: "Appliquer les notions à travers des cas et des exercices concrets.", icon: Wrench },
  { title: "Optimiser", text: "Analyser les données et identifier les actions d’amélioration.", icon: BarChart3 },
];

const audiences = [
  "Entrepreneurs et porteurs de projets",
  "Responsables marketing et communication",
  "Freelances et consultants",
  "Équipes souhaitant développer leurs compétences digitales",
];

export default function FormationsPage() {
  usePageMetadata(
    "Formations ADS & E-commerce | CDS Consulting",
    "Découvrez les formations CDS Consulting en Meta Ads, Google Ads et E-commerce pour développer vos compétences en acquisition digitale, tracking et optimisation.",
  );

  return (
    <Layout>
      <PageHero
        label="Formations en marketing digital"
        title="Maîtrisez l’acquisition digitale et l’e-commerce"
        description="Des parcours pratiques pour comprendre les outils, structurer vos actions marketing et prendre de meilleures décisions grâce aux données."
        visual={<img src="/images/formations/formations-hero.svg" alt="Illustration d’un espace d’apprentissage consacré au marketing digital et aux données" width="760" height="560" className="h-auto w-full object-contain" />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#programmes" className="btn-primary h-12 px-6">Découvrir les programmes</a>
          <Link href="/audit-contact"><Button variant="outline" className="h-12 w-full rounded-xl border-white/50 bg-white/10 px-6 font-bold text-white hover:bg-white hover:text-primary sm:w-auto">Parler à un conseiller</Button></Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
          {["Cas pratiques", "Outils opérationnels", "Analyse et optimisation"].map((item) => (
            <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{item}</span>
          ))}
        </div>
      </PageHero>

      <>
        <section id="programmes" className="scroll-mt-24 bg-white py-12 md:py-16">
          <div className="container-custom grid gap-4 md:grid-cols-2">
            {formations.map((formation) => (
              <a key={formation.id} href={`#${formation.id}`} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-sm"><formation.icon className="h-5 w-5" /></span>
                  <span><span className="block text-xs font-bold uppercase tracking-wider text-accent">Accès rapide</span><span className="font-bold text-primary">{formation.title}</span></span>
                </span>
                <ArrowDown className="h-5 w-5 text-accent transition-transform group-hover:translate-y-1" />
              </a>
            ))}
          </div>
        </section>

        {formations.map((formation, index) => (
          <section key={formation.id} id={formation.id} className={`scroll-mt-24 py-16 md:py-24 ${index % 2 === 0 ? "bg-background" : "bg-white"}`}>
            <div className={`container-custom grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/5">
                <img src={formation.image} alt={formation.imageAlt} width="760" height="560" loading="lazy" className="aspect-[4/3] h-auto w-full object-contain" />
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">{formation.label}</p>
                <h2 className="mb-5 text-3xl md:text-4xl">{formation.title}</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">{formation.description}</p>
                <h3 className="mb-4 text-xl">Ce que vous allez travailler</h3>
                <ol className="mb-8 grid gap-3 sm:grid-cols-2">
                  {formation.fullProgram.map((module, moduleIndex) => (
                    <li key={module} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-accent">{String(moduleIndex + 1).padStart(2, "0")}</span>
                      {module}
                    </li>
                  ))}
                </ol>
                <Link href="/audit-contact"><Button className="h-12 w-full rounded-xl bg-accent px-7 font-bold text-white hover:bg-accent/90 sm:w-auto">{formation.cta}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">Notre approche</p><h2 className="text-3xl md:text-4xl">Une méthode centrée sur la mise en pratique</h2></div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {method.map(({ title, text, icon: Icon }, index) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent"><Icon className="h-5 w-5" /></span><span className="text-sm font-bold text-blue-200">0{index + 1}</span></div><h3 className="mb-2 text-xl">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container-custom"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">Profils concernés</p><h2 className="text-3xl md:text-4xl">À qui s’adressent ces formations ?</h2></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((audience) => <article key={audience} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-background p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm"><Users className="h-5 w-5" /></span><h3 className="pt-1 text-base leading-snug">{audience}</h3></article>)}</div></div>
        </section>

        <section className="px-4 pb-16 md:pb-24">
          <div className="brand-gradient container-custom rounded-3xl px-6 py-12 text-center text-white shadow-xl shadow-accent/10 md:px-12">
            <Target className="mx-auto mb-5 h-10 w-10 text-blue-200" />
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl text-white md:text-4xl">Besoin d’un programme adapté à votre projet ou à votre équipe ?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">Contactez CDS Consulting pour obtenir plus d’informations sur les contenus, les formats et les prochaines étapes.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row"><Link href="/audit-contact"><Button className="h-12 w-full rounded-xl bg-white px-7 font-bold text-primary hover:bg-blue-50 sm:w-auto">Demander le programme</Button></Link><Link href="/audit-contact"><Button variant="outline" className="h-12 w-full rounded-xl border-white/50 bg-transparent px-7 font-bold text-white hover:bg-white/10 hover:text-white sm:w-auto">Parler à un conseiller</Button></Link></div>
          </div>
        </section>
      </>
    </Layout>
  );
}
