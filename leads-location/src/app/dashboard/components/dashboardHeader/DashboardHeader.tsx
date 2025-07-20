"use client"

import CreateLeadModalForm from '@/shared/components/createLeadModalForm/CreateLeadModalForm'
import React from 'react'

type Props = {}

function DashboardHeader({}: Props) {
    const [showModal, setShowModal] = React.useState(false)

  return (
    <>
        <header className='z-[5] p-4 shadow sticky w-full top-0 left-0 flex items-center justify-center bg-white'>
            <ul className='flex justify-between items-center m-auto w-full'>
                <li className='text-2xl font-semibold'>Lead Manager</li>
                <li>
                    <button 
                        className='flex justify-around items-center bg-black p-2 rounded hover:bg-gray-900 hover:cursor-pointer'
                        onClick={() => setShowModal(true)}
                    >
                        <svg width="18" height="18" fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                        <span className='text-sm font-semibold text-white mx-1'>Novo Lead</span>
                    </button>
                </li>
            </ul>
        </header>
        <CreateLeadModalForm showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default DashboardHeader
