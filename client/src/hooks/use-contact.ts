import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/routes";

// ✅ URL de ton Cloudflare Worker
const WORKER_URL = "https://cdcall-mail.culturegroup322.workers.dev"; 
// (si c’est une autre URL, remplace-la)

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "cdcall.fr/audit-contact", // optionnel (utile pour savoir d'où vient le lead)
          type: "audit",                    // optionnel
        }),
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
        description: "Merci ! Nous vous recontactons sous 24h.",
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
