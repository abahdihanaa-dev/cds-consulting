import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  Megaphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const kpis = [
  { label: "Leads suivis", value: "1 248", icon: Users },
  { label: "Taux de conversion", value: "4,8 %", icon: Target },
  { label: "Campagnes actives", value: "12", icon: Megaphone },
];

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export function HeroAnalyticsDashboard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="img"
      aria-label="Illustration d’un tableau de bord de suivi des campagnes digitales."
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[620px] py-4 sm:px-5 sm:py-8 lg:px-0"
    >
      <div aria-hidden="true" className="absolute inset-[6%] rounded-full bg-blue-300/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden opacity-[0.12] sm:block [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
      />
      <div aria-hidden="true" className="absolute right-[5%] top-[3%] hidden h-28 w-28 rounded-full border border-white/15 sm:block" />

      <div
        aria-hidden="true"
        className="relative z-10 overflow-hidden rounded-[22px] border border-white/15 bg-gradient-to-br from-[#0b2858] via-[#071d42] to-[#04152f] p-4 shadow-[0_30px_70px_rgba(1,12,35,0.45)] transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_34px_78px_rgba(1,12,35,0.52)] sm:rounded-[26px] sm:p-5 lg:rotate-[0.7deg]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <i className="h-2 w-2 rounded-full bg-blue-300/80" />
              <i className="h-2 w-2 rounded-full bg-blue-400/60" />
              <i className="h-2 w-2 rounded-full bg-white/30" />
            </span>
            <span className="text-sm font-bold text-white">Performance digitale</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200/65 sm:inline">Aperçu illustratif</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1.5 text-[10px] font-semibold text-blue-100 sm:text-xs">
              <CalendarDays className="h-3.5 w-3.5" /> 30 derniers jours
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-3.5 sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-white sm:text-base">Évolution des conversions</p>
              <p className="mt-0.5 hidden text-[11px] text-blue-100/60 sm:block">Suivi des performances multicanales</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-400/10 px-2 py-1 text-[10px] font-semibold text-blue-200">
              <TrendingUp className="h-3 w-3" /> Tendance positive
            </span>
          </div>

          <svg viewBox="0 0 520 190" className="mt-2 h-auto w-full" focusable="false">
            <defs>
              <linearGradient id="hero-chart-line" x1="0" x2="1">
                <stop offset="0" stopColor="#54a6ff" />
                <stop offset="1" stopColor="#20d3ff" />
              </linearGradient>
              <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#54a6ff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#54a6ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[35, 75, 115, 155].map((y) => (
              <line key={y} x1="18" y1={y} x2="502" y2={y} stroke="white" strokeOpacity="0.08" />
            ))}
            <path d="M20 144 C55 140 70 119 101 122 S150 141 181 104 S231 75 261 90 S310 117 342 73 S397 58 422 67 S469 42 500 35 L500 160 L20 160 Z" fill="url(#hero-chart-area)" />
            <path className="hero-chart-line" d="M20 144 C55 140 70 119 101 122 S150 141 181 104 S231 75 261 90 S310 117 342 73 S397 58 422 67 S469 42 500 35" fill="none" stroke="url(#hero-chart-line)" strokeWidth="4" strokeLinecap="round" />
            {[[20,144],[101,122],[181,104],[261,90],[342,73],[422,67],[500,35]].map(([x,y], index) => (
              <g key={index}>
                <circle cx={x} cy={y} r="6" fill="#071d42" stroke="#73bbff" strokeWidth="3" />
                <text x={x} y="181" textAnchor="middle" fill="#b9d7f6" fontSize="12">{days[index]}</text>
              </g>
            ))}
            <g transform="translate(381 21)">
              <rect width="84" height="28" rx="8" fill="#ffffff" />
              <path d="M39 28 l7 7 7-7" fill="#ffffff" />
              <circle cx="15" cy="14" r="4" fill="#0878ed" />
              <text x="25" y="18" fill="#092149" fontSize="11" fontWeight="700">Point suivi</text>
            </g>
          </svg>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {kpis.map(({ label, value, icon: Icon }, index) => (
            <div key={label} className={`rounded-xl border border-white/10 bg-[#0b2858] p-3 ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
              <div className="flex items-center gap-2 text-blue-200/70">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-400/10 text-blue-300"><Icon className="h-3.5 w-3.5" /></span>
                <span className="text-[10px] font-medium leading-tight sm:text-[11px]">{label}</span>
              </div>
              <p className="mt-2 text-lg font-bold text-white sm:text-xl">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-blue-100/50">Données de démonstration</p>
      </div>

      <div aria-hidden="true" className="absolute -left-2 top-[29%] z-20 hidden items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-[#092149] shadow-xl sm:flex lg:-left-7">
        <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" /></span>
        Tracking en temps réel
      </div>
      <div aria-hidden="true" className="absolute -right-1 bottom-[16%] z-20 hidden items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-[#092149] shadow-xl sm:flex lg:-right-5">
        <Activity className="h-4 w-4 text-blue-600" /> Optimisation continue
      </div>
    </motion.div>
  );
}
