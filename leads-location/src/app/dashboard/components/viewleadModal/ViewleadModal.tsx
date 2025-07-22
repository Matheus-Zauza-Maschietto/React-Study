"use client"
import Map from '@/shared/components/map/Map';
import Modal from '@/shared/components/modal/Modal'
import Lead from '@/shared/models/Lead';
import React from 'react'

type Props = { lead: Lead | null, open: boolean }

function ViewleadModal({ lead, open }: Props) {

    return (
        <Modal show={open} backgroundClasses='backdrop-blur-sm backdrop-brightness-50 z-10'>
            <div className="bg-white rounded shadow-lg">
                <div className="px-6 relative pb-4 border-b-2 border-gray-100 pt-4">
                    <div className='flex flex-col gap-2'>
                        <span>{lead?.name}</span>
                        <span>Detalhes do Lead</span>
                    </div>
                    <button className='absolute text-2xl top-4 right-4 text-gray-500 hover:text-gray-700'>x</button>

                </div>
                <div className='flex px-6 py-2 border-r-2 border-gray-100'>
                    <div>
                        <h2 className='text-lg'>Informações Pessoais</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Nome Completo</span>
                                <span>{lead?.name}</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Email</span>
                                <span>{lead?.email}</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Telefone</span>
                                <span>{lead?.phone}</span>
                            </div>
                        </div>
                        <h2 className='text-lg'>Endereço</h2>
                        <div className='flex flex-col gap-2'>
                            <span><strong>Endereço: </strong>{`${lead?.address} - ${lead?.neighborhood}`}</span>
                            <div className='flex justify-around items-center'>
                                <span><strong>Cidade: </strong>{lead?.city}</span>
                                <span><strong>Estado: </strong>{lead?.state}</span>
                            </div>
                            <span><strong>CEP: </strong>{lead?.zipCode.slice(0, 5)}-{lead?.zipCode.slice(5)}</span>

                        </div>
                    </div>
                    <div className='flex flex-col gap-2 border-l-2 border-gray-100 ps-4 pl-6'>
                        <div className='flex flex-col gap-2'>
                            <span>Localização no Mapa</span>
                            <span>{`Brasil, ${lead?.state}, ${lead?.city}, ${lead?.neighborhood}, ${lead?.address}`}</span>
                        </div>

                        <div className='bg-gray-400 w-full aspect-video rounded-lg'>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ViewleadModal