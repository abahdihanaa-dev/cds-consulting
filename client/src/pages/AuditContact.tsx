import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { Link } from "wouter";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

const formSchema = insertContactSchema;

type FormData = InsertContact;

const requestTypeOptions = [
  ["general_contact", "Contact général"],
  ["digital_audit", "Audit digital"],
  ["website_creation", "Création de site web"],
  ["website_redesign", "Refonte de site web"],
  ["seo", "SEO"],
  ["meta_ads", "Meta Ads"],
  ["google_ads", "Google Ads"],
  ["advertising_campaign", "Campagne publicitaire"],
  ["tracking_analytics", "Tracking et analyse des données"],
  ["training_ads", "Formation ADS"],
  ["training_ecommerce", "Formation E-commerce"],
  ["global_support", "Accompagnement global"],
  ["other", "Autre demande"],
] as const;

const objectiveOptions = [
  ["more_leads", "Générer plus de prospects"],
  ["increase_sales", "Augmenter les ventes"],
  ["online_presence", "Créer une présence en ligne"],
  ["improve_website", "Refaire ou améliorer un site existant"],
  ["improve_seo", "Améliorer le référencement naturel"],
  ["launch_ads", "Lancer des campagnes publicitaires"],
  ["optimize_ads", "Optimiser des campagnes existantes"],
  ["setup_tracking", "Mettre en place le tracking"],
  ["learn_ads", "Se former aux outils publicitaires"],
  ["learn_ecommerce", "Se former à l’E-commerce"],
  ["digital_strategy", "Structurer une stratégie digitale"],
  ["information", "Obtenir des informations"],
  ["other", "Autre objectif"],
] as const;

const auditAreaOptions = [
  ["website", "Site web"],
  ["seo", "SEO"],
  ["meta_ads", "Meta Ads"],
  ["google_ads", "Google Ads"],
  ["tracking", "Tracking"],
  ["conversion_funnel", "Tunnel de conversion"],
  ["global_strategy", "Stratégie digitale globale"],
] as const;

export default function AuditContact() {
  const mutation = useSubmitContact();

  usePageMetadata(
    "Contact & Audit Digital | CDS Consulting",
    "Présentez votre projet à CDS Consulting et obtenez une première analyse de votre stratégie digitale, de votre acquisition et de votre présence en ligne.",
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      sector: "",
      objective: "",
      budget: "",
      message: "",
      profileType: null,
      trainingFormat: null,
      websiteType: null,
      campaignStatus: null,
      auditAreas: [],
    },
  });

  const requestType = form.watch("requestType");
  const isTraining = requestType === "training_ads" || requestType === "training_ecommerce";
  const isWebsiteProject = requestType === "website_creation" || requestType === "website_redesign";
  const isCampaign = ["meta_ads", "google_ads", "advertising_campaign"].includes(requestType ?? "");
  const isAudit = requestType === "digital_audit";

  useEffect(() => {
    if (!isTraining) {
      form.setValue("profileType", null);
      form.setValue("trainingFormat", null);
    }
    if (!isWebsiteProject) form.setValue("websiteType", null);
    if (!isCampaign) form.setValue("campaignStatus", null);
    if (!isAudit) form.setValue("auditAreas", []);
  }, [form, isAudit, isCampaign, isTraining, isWebsiteProject]);

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  // ✅ Make SelectTrigger look like your Inputs (solid background + readable text)
  const selectTriggerClass =
    "bg-slate-50 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:bg-slate-50";

  return (
    <Layout>
      <PageHero
        title="Contact & Audit Gratuit"
        description="Discutons de votre projet. Obtenez une analyse personnalisée de votre présence digitale et un plan d’action concret."
      />

      {/* CONTENT */}
      <section className="bg-background py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-10">
          {/* Contact Info Card (✅ back to old placement: top-aligned) */}
          <div id="contact" className="h-fit rounded-2xl border border-white/10 bg-primary p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-accent">Coordonnées</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="font-bold">Notre Bureau</div>
                  <div className="text-slate-400 text-sm">
                    82, Rue Soumaya, Residence Chehrazade 1, 3 Eme Etage, N°13, Palmiers - Casablanca
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-bold">Email</div>
                  <a
                    href="mailto:contact@cdsconsulting.fr"
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    contact@cdsconsulting.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-bold">Téléphone</div>
                  <a
                    href="tel:+33745049370"
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    +33 745 04 93 70
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-slate-800 my-8" />

            <div>
              <h4 className="font-bold mb-2">Horaires d&apos;ouverture</h4>
              <p className="text-slate-400 text-sm">
                Lundi - Vendredi : 9h00 - 18h00
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div id="audit-form" className="scroll-mt-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Parlez-nous de votre projet
            </h2>
            <p className="text-slate-500 mb-8">
              Sélectionnez votre besoin et transmettez-nous les informations utiles. Notre équipe vous recontactera pour échanger sur votre projet.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de demande *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Sélectionnez votre besoin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {requestTypeOptions.map(([value, label]) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jean Dupont"
                            className="bg-slate-50"
                            {...field}
                          />
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
                          <Input
                            placeholder="jean@entreprise.com"
                            className="bg-slate-50"
                            {...field}
                          />
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
                          <Input
                            placeholder="06 12 34 56 78"
                            className="bg-slate-50"
                            {...field}
                          />
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
                        <FormLabel>Site web actuel</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://www.votre-site.com"
                            className="bg-slate-50"
                            value={field.value || ""}
                            onChange={field.onChange}
                          />
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
                        <FormLabel>Secteur d&apos;activité *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Immobilier, BTP, E-commerce, Services…"
                            className="bg-slate-50"
                            {...field}
                          />
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
                        <FormLabel>Budget prévu</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || undefined}
                        >
                          <FormControl>
                            <SelectTrigger className={selectTriggerClass}>
                              <SelectValue placeholder="Sélectionnez une tranche" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="under_500">Moins de 500 €</SelectItem>
                            <SelectItem value="500_1000">500 € à 1 000 €</SelectItem>
                            <SelectItem value="1000_2500">1 000 € à 2 500 €</SelectItem>
                            <SelectItem value="2500_5000">2 500 € à 5 000 €</SelectItem>
                            <SelectItem value="5k+">Plus de 5 000 €</SelectItem>
                            <SelectItem value="to_define">Budget à définir</SelectItem>
                            <SelectItem value="discuss_first">Je souhaite d’abord échanger</SelectItem>
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
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={selectTriggerClass}>
                            <SelectValue placeholder="Sélectionnez votre objectif" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {objectiveOptions.map(([value, label]) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isTraining && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="profileType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vous êtes… *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                            <FormControl><SelectTrigger className={selectTriggerClass}><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger></FormControl>
                            <SelectContent className="bg-white">
                              {[["entrepreneur", "Entrepreneur"], ["project_owner", "Porteur de projet"], ["employee", "Salarié"], ["freelance", "Freelance"], ["marketing_manager", "Responsable marketing"], ["company_team", "Entreprise ou équipe"], ["other", "Autre"]].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="trainingFormat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Format souhaité *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                            <FormControl><SelectTrigger className={selectTriggerClass}><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger></FormControl>
                            <SelectContent className="bg-white">
                              {[["individual", "Formation individuelle"], ["group", "Formation en groupe"], ["team", "Formation pour une équipe"], ["advice", "Je souhaite être conseillé"]].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {isWebsiteProject && (
                  <FormField
                    control={form.control}
                    name="websiteType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de site souhaité *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                          <FormControl><SelectTrigger className={selectTriggerClass}><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger></FormControl>
                          <SelectContent className="bg-white">
                            {[["showcase", "Site vitrine"], ["landing_page", "Landing page"], ["ecommerce", "Site E-commerce"], ["catalog", "Site catalogue"], ["redesign", "Refonte d’un site existant"], ["unknown", "Je ne sais pas encore"]].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {isCampaign && (
                  <FormField
                    control={form.control}
                    name="campaignStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Situation actuelle *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                          <FormControl><SelectTrigger className={selectTriggerClass}><SelectValue placeholder="Sélectionnez une option" /></SelectTrigger></FormControl>
                          <SelectContent className="bg-white">
                            {[["never_started", "Je n’ai jamais lancé de campagne"], ["previous_campaigns", "J’ai déjà lancé des campagnes"], ["active_campaigns", "Des campagnes sont actuellement actives"], ["full_management", "Je souhaite déléguer toute la gestion"], ["support_only", "Je souhaite seulement un accompagnement"]].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {isAudit && (
                  <FormField
                    control={form.control}
                    name="auditAreas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Éléments à auditer *</FormLabel>
                        <FormControl>
                          <div role="group" className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                            {auditAreaOptions.map(([value, label]) => {
                              const selected = field.value ?? [];
                              return (
                                <label key={value} className="flex cursor-pointer items-center gap-3 rounded-lg p-2 text-sm text-slate-700 transition-colors hover:bg-white">
                                  <Checkbox
                                    checked={selected.includes(value)}
                                    onCheckedChange={(checked) => field.onChange(checked === true ? [...selected, value] : selected.filter((item) => item !== value))}
                                  />
                                  <span>{label}</span>
                                </label>
                              );
                            })}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez votre besoin *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Présentez-nous votre projet, vos objectifs, vos difficultés actuelles et les informations utiles pour vous accompagner…"
                          className="bg-slate-50 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
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

                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    Vos informations sont utilisées uniquement pour traiter votre demande.{" "}
                    <Link href="/politique-confidentialite" className="font-semibold text-accent hover:underline">
                      Politique de confidentialité
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
        </div>
      </section>
    </Layout>
  );
}
