import { Button } from "@/components/ui/button";
import { formations } from "@/data/formations";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "wouter";

const benefits = ["Approche pratique", "Outils concrets", "Stratégie & optimisation"];

export function Formations() {
  return (
    <section id="formations" className="relative scroll-mt-24 overflow-hidden bg-background py-16 md:py-20">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_15%_20%,rgba(6,111,229,0.10),transparent_34%)]" />
      <div className="container-custom relative z-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center xl:gap-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Développez vos compétences digitales
          </p>
          <h2 className="mb-5 text-3xl leading-tight md:text-4xl">
            Des formations conçues pour passer à l’action
          </h2>
          <p className="mb-7 leading-relaxed text-slate-600">
            Développez des compétences concrètes en publicité digitale et en e-commerce grâce à des programmes centrés sur la stratégie, les outils et la mise en pratique.
          </p>
          <Link href="/formations">
            <Button className="h-12 w-full rounded-xl bg-accent px-6 font-bold text-white hover:bg-accent/90 sm:w-auto">
              Voir toutes les formations
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {benefits.map((benefit) => (
              <span key={benefit} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {formations.map((formation) => (
            <article key={formation.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg sm:grid sm:grid-cols-[minmax(170px,0.7fr)_minmax(0,1.3fr)]">
              <div className="flex min-h-44 items-center justify-center bg-blue-50/70 p-5 sm:min-h-full">
                <img src={formation.image} alt={formation.imageAlt} width="640" height="440" loading="lazy" className="h-full max-h-48 w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  <formation.icon className="h-4 w-4" aria-hidden="true" />
                  Formation
                </div>
                <h3 className="mb-2 text-xl text-primary">{formation.shortTitle}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{formation.shortDescription}</p>
                <ul className="mb-5 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
                  {formation.summaryBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={`/formations#${formation.id}`} className="mt-auto inline-flex items-center text-sm font-bold text-accent hover:text-primary">
                  Découvrir la formation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
