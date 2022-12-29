import React from 'react'
import { AircraftController } from './AircraftController'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Aircraft = () => {
  return (
    <div className='bg-slate-100'>
         <div className='grid grid-cols-[15%_85%]'>
            <div className=''>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                <AircraftController />
            </div>
        </div>
    </div>
  )
}
