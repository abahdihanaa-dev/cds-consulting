import { Megaphone, ShoppingCart, type LucideIcon } from "lucide-react";

export type Formation = {
  id: "ads" | "ecommerce";
  slug: string;
  label: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  summaryBenefits: string[];
  fullProgram: string[];
  targetAudience: string[];
  cta: string;
};

export const formations: Formation[] = [
  {
    id: "ads",
    slug: "ads",
    label: "Formation publicité digitale",
    title: "Formation ADS — Meta Ads & Google Ads",
    shortTitle: "Meta Ads & Google Ads",
    description:
      "Apprenez à structurer une stratégie d’acquisition, créer des campagnes publicitaires, configurer le suivi des conversions et interpréter les indicateurs essentiels pour améliorer vos décisions marketing.",
    shortDescription:
      "Apprenez à créer, suivre et optimiser des campagnes publicitaires adaptées à vos objectifs d’acquisition.",
    image: "/images/formations/formation-ads.svg",
    imageAlt: "Illustration d’un tableau de bord de campagnes publicitaires et de ses indicateurs",
    icon: Megaphone,
    summaryBenefits: [
      "Stratégie d’acquisition",
      "Meta Ads et Google Ads",
      "Tracking des conversions",
      "Optimisation et analyse des KPI",
    ],
    fullProgram: [
      "Définition des objectifs et du tunnel d’acquisition",
      "Prise en main de Meta Ads Manager",
      "Introduction et structuration de Google Ads",
      "Ciblage, audiences et segmentation",
      "Création des visuels et rédaction des annonces",
      "Pixel, balises et suivi des conversions",
      "Budgets, tests A/B et optimisation",
      "Lecture des KPI et création de rapports",
    ],
    targetAudience: [
      "Entrepreneurs et porteurs de projets",
      "Responsables marketing et communication",
      "Freelances et consultants",
      "Équipes souhaitant développer leurs compétences digitales",
    ],
    cta: "Demander le programme ADS",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    label: "Formation commerce en ligne",
    title: "Formation E-commerce",
    shortTitle: "E-commerce",
    description:
      "Apprenez à préparer une offre, organiser une boutique en ligne et mettre en place un parcours d’achat simple, mesurable et adapté aux attentes de vos clients.",
    shortDescription:
      "Apprenez à structurer une boutique en ligne, présenter une offre claire et améliorer le parcours d’achat.",
    image: "/images/formations/formation-ecommerce.svg",
    imageAlt: "Illustration d’une boutique en ligne avec fiche produit, panier et suivi des conversions",
    icon: ShoppingCart,
    summaryBenefits: [
      "Structure de la boutique",
      "Fiches produits et pages de vente",
      "Acquisition et retargeting",
      "Analyse et optimisation des conversions",
    ],
    fullProgram: [
      "Choix et présentation de l’offre",
      "Structure d’une boutique en ligne",
      "Création de fiches produits efficaces",
      "Pages de vente et éléments de confiance",
      "Paiement, livraison et expérience client",
      "Acquisition de trafic et retargeting",
      "Analyse des ventes et du comportement utilisateur",
      "Optimisation du taux de conversion",
    ],
    targetAudience: [
      "Entrepreneurs et porteurs de projets",
      "Responsables marketing et communication",
      "Freelances et consultants",
      "Équipes souhaitant développer leurs compétences digitales",
    ],
    cta: "Demander le programme E-commerce",
  },
];
