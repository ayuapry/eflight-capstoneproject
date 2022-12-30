import React from 'react'
import { Sidebar } from './Sidebar'

export const DashboardAdmin = () => {
  return (
    <div className='bg-slate-100'>
       <div className='grid grid-cols-[15%_85%]'>
            <div className=''>
                <Sidebar />
            </div>
            <div>
                dashboard
            </div>
        </div>
    </div>
  )
}
