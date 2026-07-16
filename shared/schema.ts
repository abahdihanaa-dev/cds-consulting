import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  requestType: text("request_type").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  website: text("website"),
  sector: text("sector").notNull(),
  objective: text("objective").notNull(),
  budget: text("budget"),
  message: text("message").notNull(),
  profileType: text("profile_type"),
  trainingFormat: text("training_format"),
  websiteType: text("website_type"),
  campaignStatus: text("campaign_status"),
  auditAreas: text("audit_areas").array(),
});

export const requestTypeValues = [
  "general_contact",
  "digital_audit",
  "website_creation",
  "website_redesign",
  "seo",
  "meta_ads",
  "google_ads",
  "advertising_campaign",
  "tracking_analytics",
  "training_ads",
  "training_ecommerce",
  "global_support",
  "other",
] as const;

export const auditAreaValues = [
  "website",
  "seo",
  "meta_ads",
  "google_ads",
  "tracking",
  "conversion_funnel",
  "global_strategy",
] as const;

const optionalText = z.string().trim().optional().nullable();

export const insertContactSchema = createInsertSchema(contactSubmissions, {
  requestType: z.enum(requestTypeValues, {
    required_error: "Veuillez sélectionner un type de demande.",
  }),
  name: z.string().trim().min(1, "Veuillez renseigner votre nom."),
  email: z.string().trim().email("Veuillez saisir une adresse email valide."),
  phone: z.string().trim().min(10, "Veuillez renseigner votre numéro de téléphone."),
  website: z
    .union([z.literal(""), z.string().trim().url("Veuillez saisir une adresse de site valide.")])
    .optional()
    .nullable(),
  sector: z.string().trim().min(1, "Veuillez renseigner votre secteur d’activité."),
  objective: z.string().trim().min(1, "Veuillez sélectionner votre objectif."),
  budget: optionalText,
  message: z.string().trim().min(1, "Veuillez décrire votre besoin."),
  profileType: optionalText,
  trainingFormat: optionalText,
  websiteType: optionalText,
  campaignStatus: optionalText,
  auditAreas: z.array(z.enum(auditAreaValues)).optional().nullable(),
})
  .omit({ id: true })
  .superRefine((data, ctx) => {
    const requireOption = (field: "profileType" | "trainingFormat" | "websiteType" | "campaignStatus") => {
      if (!data[field]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [field],
          message: "Veuillez sélectionner une option.",
        });
      }
    };

    if (data.requestType === "training_ads" || data.requestType === "training_ecommerce") {
      requireOption("profileType");
      requireOption("trainingFormat");
    }

    if (data.requestType === "website_creation" || data.requestType === "website_redesign") {
      requireOption("websiteType");
    }

    if (["meta_ads", "google_ads", "advertising_campaign"].includes(data.requestType)) {
      requireOption("campaignStatus");
    }

    if (data.requestType === "digital_audit" && (!data.auditAreas || data.auditAreas.length === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["auditAreas"],
        message: "Veuillez sélectionner au moins un élément à auditer.",
      });
    }
  });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
