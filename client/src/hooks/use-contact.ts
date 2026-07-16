import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";

// ✅ URL de ton Cloudflare Worker
// TODO(CDS): conserver cet endpoint fonctionnel jusqu’à la fourniture du Worker officiel CDS Consulting.
const WORKER_URL = "https://cdsconsulting-mail.long-forest-5f9b.workers.dev"; 
// (si c’est une autre URL, remplace-la)

const trainingRequests = new Set(["training_ads", "training_ecommerce"]);
const websiteRequests = new Set(["website_creation", "website_redesign"]);
const campaignRequests = new Set(["meta_ads", "google_ads", "advertising_campaign"]);
const requestTypeLabels: Record<InsertContact["requestType"], string> = {
  general_contact: "Contact général",
  digital_audit: "Audit digital",
  website_creation: "Création de site web",
  website_redesign: "Refonte de site web",
  seo: "SEO",
  meta_ads: "Meta Ads",
  google_ads: "Google Ads",
  advertising_campaign: "Campagne publicitaire",
  tracking_analytics: "Tracking et analyse des données",
  training_ads: "Formation ADS",
  training_ecommerce: "Formation E-commerce",
  global_support: "Accompagnement global",
  other: "Autre demande",
};

export function buildContactPayload(data: InsertContact): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    requestType: data.requestType,
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website || undefined,
    sector: data.sector,
    budget: data.budget || undefined,
    objective: data.objective,
    message: data.message,
    // TODO(CDS): remplacer le domaine source lorsque le domaine officiel sera validé.
    source: "cdsconsulting.fr/audit-contact",
    type: data.requestType,
    subject: `Nouvelle demande CDS Consulting — ${requestTypeLabels[data.requestType]}`,
  };

  if (trainingRequests.has(data.requestType)) {
    payload.profileType = data.profileType;
    payload.trainingFormat = data.trainingFormat;
  }

  if (websiteRequests.has(data.requestType)) {
    payload.websiteType = data.websiteType;
  }

  if (campaignRequests.has(data.requestType)) {
    payload.campaignStatus = data.campaignStatus;
  }

  if (data.requestType === "digital_audit") {
    payload.auditAreas = data.auditAreas;
  }

  return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined && value !== ""));
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildContactPayload(data)),
      });

      // Worker peut renvoyer du JSON ou du texte => on gère les 2
      let payload: any = null;
      const text = await res.text();
      try {
        payload = text ? JSON.parse(text) : null;
      } catch {
        payload = { message: text || "OK" };
      }

      if (!res.ok) {
        throw new Error(payload?.error || payload?.message || "Erreur lors de l’envoi");
      }

      return payload;
    },

    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Votre demande a bien été envoyée. L’équipe CDS Consulting vous recontactera prochainement pour échanger sur votre projet.",
        className: "bg-green-600 text-white border-none",
      });
    },

    onError: (error: Error) => {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
