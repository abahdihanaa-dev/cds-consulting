import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  website: text("website"),
  sector: text("sector").notNull(),
  objective: text("objective").notNull(),
  budget: text("budget"),
  message: text("message").notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ id: true });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
