import React from 'react'
import { AirportController } from './AirportController'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Airport = () => {
  return (
    <div className='bg-slate-100'>
        <div className='grid grid-cols-[15%_85%]'>
            <div className='min-h-screen'>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                <AirportController />
            </div>
        </div>
    </div>
  )
}
