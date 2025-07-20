"use client"

import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';

type Props = {}

function CityStateFormInputs({}: Props) {
    const [form, setForm] = useState({ state: '', city: '', cep: '', cepNotFound: false })
    const [cities, setCities] = useState<{ id: number, name: string }[]>([]);
    
    useEffect(() => {
        if (form.state) {
            getCities(form.state).then(cities => {
                setCities(cities.map((city: { id: number, nome: string }) => ({
                    id: city.id,
                    name: city.nome
                })));
            });
        }
    }, [form.state, form.cep]);

    useEffect(() => {
        if (form.cep) {
            setCep(form.cep);
        }
    }, [form.cep])

    async function setCep(cep: string) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            if (data.erro) {
                throw new Error('CEP inválido')
            }
            setForm(prev => ({
                ...prev,
                state: data.uf,
                city: data.ibge,
                cepNotFound: false
            }))
        } catch (error) {
            console.error('Erro ao buscar CEP:', error)
            setForm(prev => ({
                ...prev,
                cepNotFound: true,
            }))
        }
    }

    async function getCities(state:string) {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
            const data = await response.json()
            return data.map((municipio: { id:number, nome: string }) => ({ id: municipio.id, nome: municipio.nome }))
        } catch (error) {
            console.error('Erro ao buscar cidades:', error)
            return []
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

  return (
    <>
        <label className='block mb-2 text-sm font-medium text-gray-700'>CEP *
            <input type="cep" name="cep" id="cep" className='w-full p-2 border border-gray-300 rounded-md' value={form.cep} onChange={handleChange} />
            {form.cepNotFound && <span className='text-red-500 text-sm'>CEP não encontrado</span>}
        </label>
        <label className='block mb-2 text-sm font-medium text-gray-700'>Estado *
            <select name="state" id="state" className='w-full p-2 border border-gray-300 rounded-md' value={form.state} onChange={handleChange}>
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
            <select name="city" id="city" className='w-full p-2 border border-gray-300 rounded-md' value={form.city} onChange={handleChange}>
                {
                    cities.length === 0 ?
                    (
                        <option value="">Selecione um estado primeiro</option>
                    ) 
                    : 
                    (
                        cities.map(
                            (city: { id: number, name: string }, id: number) => <option key={id} value={city.id}>{city.name}</option>
                        )
                    )
                }
            </select>
        </label>
    </>
  )
}

export default CityStateFormInputs
