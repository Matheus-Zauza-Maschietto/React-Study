"use client"
import { v4 as uuidv4 } from 'uuid';
import React, { useId } from 'react'
import Modal from '../../../../shared/components/modal/Modal'
import AddressForm from '../../../../shared/components/addressForm/AddressForm'
import LeadRepository from '@/shared/repositories/LeadRepository'
import Lead from '@/shared/models/Lead'
import maskService from '@/shared/services/maskService'
import GeoCodingRepository from '@/shared/repositories/GeoCodingRepository'


type Props = { showModal: boolean, setShowModal: (show: boolean) => void }

function CreateLeadModalForm({ showModal, setShowModal }: Props) {
    const [phone, setPhone] = React.useState('');
    
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        const currentTarget = e.currentTarget;
        e.preventDefault();
        
        const address = `Brasil, ${currentTarget.state.value}, ${currentTarget.city.selectedOptions[0].textContent}, ${currentTarget.bairro.value}, ${currentTarget.endereco.value}`
        const coordinates = await GeoCodingRepository.getCoordinates(address)

        const newLead = new Lead(
            uuidv4(),
            currentTarget.nomeCompleto.value,
            currentTarget.email.value,
            currentTarget.telefone.value,
            currentTarget.endereco.value,
            currentTarget.bairro.value,
            currentTarget.city.selectedOptions[0].textContent,
            currentTarget.city.value,
            currentTarget.state.value,
            coordinates.lat || 0,
            coordinates.lng || 0,
            currentTarget.observacoes.value || '',
            currentTarget.cep.value.replace(/\D/g, '')
        )

        await LeadRepository.addLead(newLead);
        setShowModal(false);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = maskService.phoneMask(e.target.value);
        setPhone(masked);
    };
    

    return (
        <Modal show={showModal} backgroundClasses='backdrop-blur-sm backdrop-brightness-50 z-10'>
            <div className='bg-white p-6 rounded-md shadow-lg w-[95%] max-w-[var(--max-width)] lg:w-3/4 mx-auto backdrop-blur-3xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Cadastrar Novo Lead</h2>
                        <p className='text-gray-500'>Preencha as informações do cadastro do lead</p>
                    </div>
                    <button className='text-gray-500 hover:text-gray-700 text-3xl hover:cursor-pointer' onClick={() => setShowModal(false)}>x</button>
                </div>
                <br className='border-2' />
                <form onSubmit={handleFormSubmit}>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Nome Completo *
                        <input required type="text" name="nomeCompleto" id="nomeCompleto" className='w-full p-2 border border-gray-300 rounded-md'/>
                    </label>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email *
                        <input required type="email" name="email" id="email" className='w-full p-2 border border-gray-300 rounded-md'/>
                    </label>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Telefone *
                        <input required type="tel" name="telefone" id="telefone" className='w-full p-2 border border-gray-300 rounded-md' value={phone} onChange={handlePhoneChange} />
                    </label>
                    <AddressForm />
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Observações
                        <textarea name="observacoes" id="observacoes" rows={4} className='w-full p-2 border border-gray-300 rounded-md' />
                    </label>
                    <div className='flex gap-4 justify-end mt-4'>
                        <button className='px-3 py-1 border-[1.5] border-neutral-200 rounded-md hover:cursor-pointer hover:bg-neutral-50' onClick={() => setShowModal(false)}>Cancelar</button>
                        <button className='flex items-center justify-center px-3 py-1 bg-black rounded-md gap-3 hover:cursor-pointer hover:bg-gray-900'>
                            <svg fill='#fff' width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <span className='text-white text-sm font-medium'>Salvar Lead</span>
                        </button>
                    </div>
                </form>

                
            </div>
        </Modal>
    )
}

export default CreateLeadModalForm