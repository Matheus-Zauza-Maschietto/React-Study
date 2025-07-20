import React from 'react'

type Props = {title: string, value: string, children: React.ReactNode}

function DashboardStatsCard({title, value, children}: Props) {
  return (
    <div className='flex justify-start items-center h-20 border bg-white border-gray-100 rounded-md px-4'>
      <div className='flex items-center justify-center w-10 h-10 mr-4 bg-gray-100 p-2 rounded'>
        {children}
      </div>
      <div className='flex flex-col items-start justify-center'>
        <span className='text-[14px] text-neutral-600'>{title}</span>
        <span className='text-lg font-semibold w-full'>{value}</span>
      </div>
    </div>
  )
}

export default DashboardStatsCard