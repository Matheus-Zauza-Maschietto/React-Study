"use client"
import Map from '@/shared/components/map/Map';
import Modal from '@/shared/components/modal/Modal'
import Lead from '@/shared/models/Lead';
import { GeocodingControl } from '@maptiler/geocoding-control/maptilersdk';
import * as maptilersdk from '@maptiler/sdk';
import React, { useEffect } from 'react'

type Props = { lead: Lead | null, open: boolean, closeModal?: () => void }

function ViewleadModal({ lead, open, closeModal }: Props) {
    const mapContainerRef = React.useRef<HTMLDivElement | null>(null);
    const mapRef = React.useRef<maptilersdk.Map | null>(null);
    const geoRef = React.useRef<GeocodingControl | null>(null);

    useEffect(() => {
        if (!mapRef.current || !mapContainerRef || !geoRef.current) return;

        const markerElements = mapRef.current.getContainer().querySelectorAll('.maplibregl-marker');
        markerElements.forEach(el => el.remove());

        mapRef.current.flyTo({
            center: [lead?.longitude || 0, lead?.latitude || 0],
            zoom: 14,
            duration: 3500,
        });

        new maptilersdk.Marker({
            color: '#FF0000',
            draggable: false,
        })
        .setLngLat([lead?.longitude || 0, lead?.latitude || 0])
        .addTo(mapRef.current);
        
    }, [mapRef.current, lead]);

    return (
        <Modal show={open} backgroundClasses='backdrop-blur-sm backdrop-brightness-50 z-10'>
            <div className="bg-white rounded shadow-lg">
                <div className="px-6 relative pb-4 border-b-2 border-gray-100 pt-4">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>{lead?.name}</h1>
                        <span className='text-lg text-gray-500s'>Detalhes do Lead</span>
                    </div>
                    <button className='absolute text-3xl top-4 right-6 text-gray-500 hover:text-gray-700 hover:cursor-pointer' onClick={closeModal}>x</button>
                </div>
                <div className='grid grid-cols-2 px-6 border-r-2 border-gray-100'>
                    <div className='p-4 border-r-2 border-gray-100 flex flex-col'>
                        <h2 className='text-lg font-semibold mt-4 mb-2'>Informações Pessoais</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Nome Completo</span>
                                <span>{lead?.name}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Email</span>
                                <span>{lead?.email}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Telefone</span>
                                <span>{lead?.phone}</span>
                            </div>
                        </div>
                        <br className='border-2 border-gray-100'/>
                        <h2 className='text-lg font-semibold mt-4 mb-2'>Localização</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-neutral-700 text-[15px] font-medium'>Endereço</span>
                                <span>{`${lead?.address} - ${lead?.neighborhood}`}</span>
                            </div>
                            <div className="flex align-center gap-x-20">
                                <div className='flex flex-col gap-1'>
                                    <span className='text-neutral-700 text-[15px] font-medium'>Estado</span>
                                    <span>{lead?.state}</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-neutral-700 text-[15px] font-medium'>Cidade</span>
                                    <span>{lead?.city}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-neutral-700 text-[15px] font-medium'>CEP</span>
                                <span>{lead?.zipCode.slice(0, 5)}-{lead?.zipCode.slice(5)}</span>
                            </div>
                        </div>
                    </div>
                    <div className=' h-full flex flex-col gap-2 p-4'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-lg font-semibold mt-4 mb-2'>Localização no Mapa</h2>
                            <span className='text-sm text-neutral-700'>{`Brasil, ${lead?.state}, ${lead?.city}, ${lead?.neighborhood}, ${lead?.address}`}</span>
                        </div>
                        <div className='bg-gray-400 h-full rounded-lg'>
                            <Map geoRef={geoRef} mapContainerRef={mapContainerRef} mapRef={mapRef} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ViewleadModal