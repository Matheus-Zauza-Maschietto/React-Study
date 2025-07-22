"use client"

import IBGECity from '@/shared/models/IBGECity';
import IBGERespository from '@/shared/repositories/IBGERespository';
import React, { useState } from 'react'
import { set } from 'react-hook-form';

type Props = {}

function AddressForm({}: Props) {
    const [cep, setCep] = useState({cepValue: '', cepNotFound: false});
    const [state, setState] = useState('');
    const [city, setCity] = useState<{ city: string; cities: IBGECity[] }>({ city: '', cities: [] });
    const [neighborhood, setNeighborhood] = useState('');
    const [address, setAddress] = useState('');

    async function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setState(value);
        const citiesList = await IBGERespository.getCities(value);
        setCity({ ...city, cities: citiesList });
    }

    async function handleCityChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setCity({ ...city, city: value });
    }

    async function handleCEPBlur(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(/\D/g, ''); 
        try{
            const cepInformations = await IBGERespository.getCep(value)

            if (!cepInformations) return;
    
            setCep({ cepValue: value, cepNotFound: false });
            setState(cepInformations.uf);
            setCity({ city: cepInformations.ibge, cities: await IBGERespository.getCities(cepInformations.uf) });
            setNeighborhood(cepInformations.bairro);
            setAddress(cepInformations.logradouro);
        }
        catch (error) {
            setCep({ ...cep, cepNotFound: true });
        }
    }

    async function handleCEPChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(/\D/g, ''); 
        setCep({ cepValue: value, cepNotFound: false });
    }

  return (
    <>
        <label className='block mb-2 text-sm font-medium text-gray-700'>CEP *
            <input
                required 
                type="cep" 
                name="cep" 
                id="cep" 
                className='w-full p-2 border border-gray-300 rounded-md' 
                value={cep.cepValue} onChange={handleCEPChange} onBlur={handleCEPBlur} 
                placeholder='Digite o CEP'
                maxLength={9}
                />
            {cep.cepNotFound && <span className='text-red-500 text-sm'>CEP não encontrado</span>}
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Estado *
            <select required name="state" id="state" className='w-full p-2 border border-gray-300 rounded-md' value={state} onChange={handleStateChange}>
                <option value="">Selecione um estado</option>
                <option value="RO">Rondônia</option>
                <option value="AC">Acre</option>
                <option value="AM">Amazonas</option>
                <option value="RR">Roraima</option>
                <option value="PA">Pará</option>
                <option value="AP">Amapá</option>
                <option value="TO">Tocantins</option>
                <option value="MA">Maranhão</option>
                <option value="PI">Piauí</option>
                <option value="CE">Ceará</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="PB">Paraíba</option>
                <option value="PE">Pernambuco</option>
                <option value="AL">Alagoas</option>
                <option value="SE">Sergipe</option>
                <option value="BA">Bahia</option>
                <option value="MG">Minas Gerais</option>
                <option value="ES">Espírito Santo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
                <option value="PR">Paraná</option>
                <option value="SC">Santa Catarina</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MT">Mato Grosso</option>
                <option value="GO">Goiás</option>
                <option value="DF">Distrito Federal</option>
            </select>
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Cidade *
            <select required name="city" id="city" className='w-full p-2 border border-gray-300 rounded-md' value={city.city} onChange={handleCityChange}>
                {
                    city.cities.length === 0 ?
                    (<option value="">Selecione um estado primeiro</option>) 
                    : 
                    ([
                            <option key="default" value="">Selecione uma cidade</option>,   
                            city.cities.map(
                                (city: { id: number, name: string }, id: number) => <option key={id} value={city.id}>{city.name}</option>
                            )
                    ])
                }
            </select>
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Bairro *
            <input 
                required
                type="text" 
                name="bairro" 
                id="bairro" 
                className='w-full p-2 border border-gray-300 rounded-md' 
                value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}
                placeholder='Digite o bairro' />
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Endereço *
            <input 
                required
                type="text" 
                name="endereco" 
                id="endereco" 
                className='w-full p-2 border border-gray-300 rounded-md' 
                value={address} onChange={(e) => setAddress(e.target.value)} 
                placeholder='Digite o endereço' />
        </label>
    </>
  )
}

export default AddressForm

