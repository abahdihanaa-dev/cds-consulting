import { useMutation } from "@tanstack/react-query";
import { api, type InsertContact } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      // For number/budget, schema might expect string, but form might coerce differently.
      // Ensure data matches InsertContact
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Something went wrong");
      }
      
      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      toast({
        title: "Message envoyé !",
        description: data.message,
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
