import { type ContactSubmission, type InsertContact } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentId++;
    const newContact: ContactSubmission = {
      ...contact,
      website: contact.website ?? null,
      budget: contact.budget ?? null,
      profileType: contact.profileType ?? null,
      trainingFormat: contact.trainingFormat ?? null,
      websiteType: contact.websiteType ?? null,
      campaignStatus: contact.campaignStatus ?? null,
      auditAreas: contact.auditAreas ?? null,
      id,
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
