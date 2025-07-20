"use client"

import React, { useState } from 'react'

type Props = {}

function CityStateFormInputs({}: Props) {
    const [cep, setCep] = useState({cepValue: '', cepNotFound: false});
    const [state, setState] = useState('');
    const [city, setCity] = useState({ city: '', cities: [] });

    async function getCep(cep: string) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            if (data.erro) {
                throw new Error('CEP inválido')
            }
            return data;
        } catch (error) {
            console.error('Erro ao buscar CEP:', error)
        }
    }

    async function getCities(state:string) {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
            const data = await response.json()
            return data.map((city: { id:number, nome: string }) => ({ id: city.id, name: city.nome }))
        } catch (error) {
            return []
        }
    }

    async function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setState(value);
        const cities = await getCities(value)
        
        setCity({ ...city, cities: cities }); 
    }

    async function handleCityChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setCity({ ...city, city: value });
    }

    async function handleCEPBlur(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(/\D/g, ''); 
        try{
            const cepInformations = await getCep(value)

            if (!cepInformations) return;
    
            setCep({ cepValue: value, cepNotFound: false });
            setState(cepInformations.uf);
            setCity({ city: cepInformations.ibge, cities: await getCities(cepInformations.uf) });
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
            <input type="cep" name="cep" id="cep" className='w-full p-2 border border-gray-300 rounded-md' value={cep.cepValue} onChange={handleCEPChange} onBlur={handleCEPBlur} />
            {cep.cepNotFound && <span className='text-red-500 text-sm'>CEP não encontrado</span>}
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Estado *
            <select name="state" id="state" className='w-full p-2 border border-gray-300 rounded-md' value={state} onChange={handleStateChange}>
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
            <select name="city" id="city" className='w-full p-2 border border-gray-300 rounded-md' value={city.city} onChange={handleCityChange}>
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
    </>
  )
}

export default CityStateFormInputs

