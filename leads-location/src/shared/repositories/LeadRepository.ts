import Lead from "../models/Lead";


export class LeadRepository {

    getLeads(): Lead[] {
        const leads = localStorage.getItem('leads');
        return leads ? JSON.parse(leads) : [];
    }

    getLeadById(id: string): Lead | undefined {
        const leads = this.getLeads();
        return leads.find((lead: { id: string }) => lead.id === id);
    }

    addLead(lead: Lead) {
        const leads = this.getLeads();
        leads.push(lead);
        localStorage.setItem('leads', JSON.stringify(leads));
    }

    updateLead(updatedLead: Lead) {
        const leads = this.getLeads();
        const index = leads.findIndex((lead: { id: string }) => lead.id === updatedLead.id);
        if (index !== -1) {
            leads[index] = updatedLead;
            localStorage.setItem('leads', JSON.stringify(leads));
        }
    }

    deleteLead(id: string) {
        const leads = this.getLeads();
        const updatedLeads = leads.filter((lead: { id: string }) => lead.id !== id);
        localStorage.setItem('leads', JSON.stringify(updatedLeads));
    }

}

export default new LeadRepository();
