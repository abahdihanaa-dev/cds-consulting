import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  description: string;
  label?: string;
  visual?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ title, description, label, visual, children }: PageHeroProps) {
  const isSplit = Boolean(visual);

  return (
    <section className="brand-gradient relative isolate min-h-[320px] overflow-hidden py-[clamp(3.75rem,7vw,6rem)] text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[12%] h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className={`container-custom relative z-10 ${isSplit ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" : "text-center"}`}>
        <div className={isSplit ? "max-w-3xl" : "mx-auto max-w-4xl"}>
          {label && (
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              {label}
            </p>
          )}
          <h1 className="text-balance text-[clamp(2.25rem,4vw,4rem)] font-bold leading-[1.08] text-white">
            {title}
          </h1>
          <p className={`mt-6 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-blue-100/90 ${isSplit ? "max-w-2xl" : "mx-auto max-w-3xl"}`}>
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>

        {visual && <div className="mx-auto w-full max-w-xl">{visual}</div>}
      </div>
    </section>
  );
}
