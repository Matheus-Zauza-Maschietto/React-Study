"use client"

import React, { useEffect, useState } from 'react'
import LeadListTableRow from '../leadListCard/LeadListTableRow'
import Lead from '@/shared/models/Lead';
import LeadRepository from '@/shared/repositories/LeadRepository';
import ViewleadModal from '../viewleadModal/ViewleadModal';
import LeadModalForm from '../leadModalForm/LeadModalForm';

type Props = {}

function LeadListTable({ }: Props) {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [leadsAreLoading, setLeadsAreLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [openViewLeadModal, setOpenViewLeadModal] = useState(false);
    const [openEditLeadModal, setOpenEditLeadModal] = useState(false);
    useEffect(() => {
        LeadRepository.getLeads().then((newLeads) => {
            setLeads(newLeads);
            setLeadsAreLoading(false);
        });
    }, []);

    function deleteLead(lead: Lead){
        setLeads(leads.filter(l => l.id !== lead.id));
        LeadRepository.deleteLead(lead.id);
    }

    function seeLead(lead: Lead) {
        setSelectedLead(lead);
        setOpenViewLeadModal(true);
    }

    function editLead(lead: Lead) {
        setSelectedLead(lead);
        setOpenEditLeadModal(true);
    }


    return (
        <div className="w-full max-h-[500] overflow-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100 text-sm text-neutral-500 h-14 sticky top-0">
                    <tr>
                        <th>LEAD</th>
                        <th>EMAIL</th>
                        <th>TELEFONE</th>
                        <th>CIDADE</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leadsAreLoading ? (<tr><td className='text-center h-20 font-semibold' colSpan={5}>Carregando ...</td></tr>)
                        : leads?.map((lead) => (
                            <LeadListTableRow 
                                key={lead.id} 
                                lead={lead} 
                                onSeeClick={() => seeLead(lead)}
                                onEditClick={() => editLead(lead)}
                                onDeleteClick={() => deleteLead(lead)}
                            />)
                        )
                    }
                    {
                        leads.length === 0 && !leadsAreLoading ? (
                            <tr>
                                <td colSpan={5} className='text-center h-20 font-semibold'>Nenhum lead cadastrado</td>
                            </tr>
                        ) : null
                    }
                </tbody>
                <tfoot className='border-t border-neutral-200'>
                    <tr className="text-sm h-20">
                        <td colSpan={3} className="text-neutral-500 ps-5 text-start text-sm font-medium">
                            Mostrando: 1 a {leads.length > 10 ? 10 : leads.length} de {leads.length} resultados
                        </td>
                        <td colSpan={3} className="text-center">
                            <div className="flex justify-center items-center gap-4">
                                <button className="bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer">
                                    Anterior
                                </button>
                                <div className='font-semibold'>10</div>
                                <button className="bg-black text-white px-4 py-2 rounded-md hover:cursor-pointer">
                                    Próximo
                                </button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
            {
                openViewLeadModal && <ViewleadModal lead={selectedLead} open={openViewLeadModal} closeModal={() => setOpenViewLeadModal(false)} />
            }
            {
                openEditLeadModal && <LeadModalForm lead={selectedLead} showModal={openEditLeadModal} setShowModal={setOpenEditLeadModal} />
            }
        </div>
    )
}

export default LeadListTable