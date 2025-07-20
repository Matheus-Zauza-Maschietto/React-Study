import React from 'react'

type Props = {}

function DashboardTitle({}: Props) {
  return (
    <div className='py-4'>
        <h2 className='text-2xl font-medium'>Dashboard de Leads</h2>
        <span className='text-[16px] font-medium text-neutral-600'>Gerencie e acompanhe todos os seus leads em um só lugar</span>
    </div>
  )
}

export default DashboardTitle