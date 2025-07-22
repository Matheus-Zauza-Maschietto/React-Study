"use client"
import Lead from "../models/Lead";

export class LeadRepository {
    private localStorage?: Storage;

    constructor() {
        if (typeof window !== 'undefined') {
            this.localStorage = window.localStorage;
        }
    }

    async getLeads(): Promise<Lead[]> {
        if (!this.localStorage) return [];
        
        const leads = this.localStorage.getItem('leads');
        return leads ? JSON.parse(leads) : [];
    }

    async getLeadById(id: string): Promise<Lead | undefined> {
        const leads = await this.getLeads();
        return leads.find((lead: { id: string }) => lead.id === id);
    }

    async addLead(lead: Lead) {
        if (!this.localStorage) return;
        
        const leads = await this.getLeads();
        leads.push(lead);
        this.localStorage.setItem('leads', JSON.stringify(leads));
    }

    async updateLead(updatedLead: Lead): Promise<void> {
        if (!this.localStorage) return;
        
        const leads = await this.getLeads();
        const index = leads.findIndex((lead: { id: string }) => lead.id === updatedLead.id);
        if (index !== -1) {
            leads[index] = updatedLead;
            this.localStorage.setItem('leads', JSON.stringify(leads));
        }
    }

    async deleteLead(id: string): Promise<void> {
        if (!this.localStorage) return;
        
        const leads = await this.getLeads();
        const updatedLeads = leads.filter((lead: { id: string }) => lead.id !== id);
        this.localStorage.setItem('leads', JSON.stringify(updatedLeads));
    }

}

export default new LeadRepository();
