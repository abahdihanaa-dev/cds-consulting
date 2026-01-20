import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

// Extend schema for form validation
const formSchema = insertContactSchema.extend({
  phone: z.string().min(10, "Numéro invalide"),
  email: z.string().email("Email invalide"),
});

type FormData = z.infer<typeof formSchema>;

export default function AuditContact() {
  const mutation = useSubmitContact();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      sector: "",
      objective: "",
      budget: "",
      message: ""
    }
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <Layout>
      <div className="bg-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact & Audit Gratuit</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discutons de votre projet. Obtenez une analyse personnalisée de votre présence digitale et un plan d'action concret.
          </p>
        </div>
      </div>

      <div className="container-custom -mt-16 pb-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 bg-slate-900 text-white p-8 rounded-2xl shadow-xl h-fit">
            <h3 className="text-xl font-bold mb-6 text-accent">Coordonnées</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="font-bold">Notre Bureau</div>
                  <div className="text-slate-400 text-sm">123 Avenue de la Performance<br />75000 Paris, France</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-bold">Email</div>
                  <a href="mailto:contact@cdcall.fr" className="text-slate-400 text-sm hover:text-white transition-colors">contact@cdcall.fr</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-bold">Téléphone</div>
                  <a href="tel:+33123456789" className="text-slate-400 text-sm hover:text-white transition-colors">+33 1 23 45 67 89</a>
                </div>
              </div>
            </div>
            
            <hr className="border-slate-800 my-8" />
            
            <div>
              <h4 className="font-bold mb-2">Horaires d'ouverture</h4>
              <p className="text-slate-400 text-sm">Lundi - Vendredi : 9h00 - 18h00</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-2">Demander votre audit</h2>
            <p className="text-slate-500 mb-8">Remplissez ce formulaire. Nous vous recontactons sous 24h.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Dupont" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email professionnel *</FormLabel>
                        <FormControl>
                          <Input placeholder="jean@entreprise.com" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="06 12 34 56 78" className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Site web (optionnel)</FormLabel>
                        <FormControl>
                          <Input placeholder="www.votre-site.com" className="bg-slate-50" value={field.value || ""} onChange={field.onChange} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Secteur d'activité *</FormLabel>
                        <FormControl>
                          <Input placeholder="Immobilier, BTP, E-commerce..." className="bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget mensuel estimé</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-50">
                              <SelectValue placeholder="Sélectionnez une tranche" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="< 1k">Moins de 1 000 €</SelectItem>
                            <SelectItem value="1k-3k">1 000 € - 3 000 €</SelectItem>
                            <SelectItem value="3k-5k">3 000 € - 5 000 €</SelectItem>
                            <SelectItem value="5k+">Plus de 5 000 €</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="objective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objectif principal *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-slate-50">
                            <SelectValue placeholder="Quel est votre but ?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="more_leads">Avoir plus de prospects</SelectItem>
                          <SelectItem value="better_image">Améliorer mon image</SelectItem>
                          <SelectItem value="ecommerce_sales">Vendre mes produits</SelectItem>
                          <SelectItem value="visibility">Gagner en visibilité locale</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Parlez-nous de vos défis actuels..." 
                          className="bg-slate-50 min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
