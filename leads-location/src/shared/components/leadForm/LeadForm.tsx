"use client";
import { useState } from 'react';
import maskService from '@/shared/services/maskService';

export default function LeadForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = maskService.phoneMask(e.target.value);
        setForm(prev => ({
            ...prev,
            phone: masked,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 m-auto flex flex-col justify-around items-center w-80">
            <h1 className='text-2xl text-blue-800 font-bold'>Cadastro de Leads</h1>
            <label htmlFor="name" className='w-full'>
                Nome
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                />
            </label>
            <label htmlFor="email" className='w-full'>
                E-Mail
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                />
            </label>
            <label htmlFor="phone" className='w-full'>
                Telefone
                <input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='Telefone'
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className='border p-2 w-full rounded'
                />
            </label>
            <button type="submit" className="my-4 bg-blue-500 text-white p-2 rounded w-full">
                Salvar
            </button>
        </form>
    );
}

