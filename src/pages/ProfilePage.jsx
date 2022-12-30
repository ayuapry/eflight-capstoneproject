import React from 'react'
import { Navbar } from '../components/Navbar'
import { ProfileCard } from '../components/ProfileCard'
import { SidebarHistory } from '../components/SidebarHistory'

export const ProfilePage = () => {
  return (
    <div className='bg-slate-100 h-full'>
    <Navbar />
      <div className='max-w-[1240px] min-h-screen mx-auto md:px-14 md:grid md:grid-cols-[30%_70%]'>
        <div className='md:mt-[90px]'>
            <SidebarHistory/>
        </div>
        <div>
          <ProfileCard />
        </div>
    </div>
  </div>
  )
}
