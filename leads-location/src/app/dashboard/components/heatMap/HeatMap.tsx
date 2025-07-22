"use client"

import React from 'react'
import Map from '../../../../shared/components/map/Map'

type Props = {}

function HeatMap({}: Props) {
  return (
    <div className='border bg-white border-gray-100 rounded-lg'>
        <div className='p-4 border-b-2 border-gray-100'>
            <h3 className='text-base font-medium'>Mapa de Calor - Concentração de Leads</h3>
            <span className='text-sm'>Visualize onde estão concentrados seus leads</span>
        </div>
        <div className='p-3'>
            <div className='bg-gray-400 w-full aspect-video rounded-lg'>
                <Map />
            </div>
        </div>
    </div>
  )
}

export default HeatMap