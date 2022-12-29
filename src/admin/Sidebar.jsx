import { AdjustmentsHorizontalIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, Bars3CenterLeftIcon, BuildingOffice2Icon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, HomeIcon, Square2StackIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoText from '../assets/LogoText.png'

export const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-white shadow-lg min-h-screen'>
        <div className='py-5 px-7'>
            <img src={LogoText} alt="" />
        </div>
        <ul className='mt-10'>
            <li className=' flex items-center gap-3 bg-blue-600 text-white px-7 py-4 h-10 hover:bg-blue-400 cursor-pointer' onClick={() => navigate('/admin/dashboard-admin')}><Square2StackIcon className='h-5 w-5 text-white' /> Dashboard</li>
            <li className=' border-b flex items-center gap-3 px-7 py-4 h-10 hover:bg-blue-400 cursor-pointer hover:text-white' onClick={() => navigate('/admin/airport')}><BuildingOffice2Icon className='h-5 w-5 text-blue-600' /> Airport Controller</li>
            <li className=' border-b flex items-center gap-3 px-7 py-4 h-10 hover:bg-blue-400 cursor-pointer hover:text-white' onClick={() => navigate('/admin/aircraft')}><GlobeAsiaAustraliaIcon className='h-5 w-5 text-blue-600'  /> Aircraft Controller</li>
            {/* <li className=' border-b flex items-center gap-3 px-7 py-4 h-10 hover:bg-blue-400 cursor-pointer hover:text-white' onClick={() => navigate('/admin/hero-list')}><ArrowsPointingInIcon className='h-5 w-5 text-blue-600' /> Bagage</li> */}
            <li className=' border-b flex items-center gap-3 px-7 py-4 h-10 hover:bg-blue-400 cursor-pointer hover:text-white' onClick={() => navigate('/admin/cancel-checkin')}><AdjustmentsHorizontalIcon className='h-5 w-5 text-blue-600' /> Cancel Check-In</li>
        </ul>
    </div>
  )
}
