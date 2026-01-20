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
    const newContact: ContactSubmission = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
