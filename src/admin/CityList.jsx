import React from 'react'
import { Sidebar } from './Sidebar'

export const CityList = () => {
  return (
    <div className='bg-slate-100'>
        <div className='grid grid-cols-[15%_85%]'>
            <div className='min-h-screen'>
                <Sidebar />
            </div>
            <div className='px-5 py-5'>
                city
            </div>
        </div>
    </div>
  )
}
