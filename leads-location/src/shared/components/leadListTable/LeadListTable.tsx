import React from 'react'
import LeadListCard from '../leadListCard/LeadListTableRow'
import LeadListTableRow from '../leadListCard/LeadListTableRow'

type Props = {}

function LeadListTable({}: Props) {
  return (
    <div className="w-full max-h-[500] overflow-auto">
        <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-sm text-neutral-500 h-14 sticky top-0">
                <tr>
                    <th>LEAD</th>
                    <th>EMAIL</th>
                    <th>TELEFONE</th>
                    <th>CIDADE</th>
                    <th>STATUS</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
                <LeadListTableRow initialDate={new Date()} name="João Silva" email="joao.silva@example.com" phone="(11) 98765-4321" city="São Paulo" status="Novo" />
            </tbody>
            <tfoot>
                <tr className= "text-sm h-20">
                    <td colSpan={4} className="text-neutral-500 ps-5 text-start text-sm font-medium">
                        Mostrando: 1 a 10 de 1,482 resultados
                    </td>
                    <td colSpan={2} className="text-center">
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
    </div>
)
}

export default LeadListTable