import React from 'react'
import Filter from '../components/Filter'
import Detail from '../components/Detail'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { SecondFooter } from '../components/SecondFooter'

export const FilterPage = () => {
  return (
    <div className='bg-slate-50 h-[100vh]'>
    <Navbar className="mb-4"/>
    <div className='h-screen w-full lg:px-16 p-4 pt-24 lg:flex lg:pt-24'>
      <Filter />
      <Detail />
    </div>
    <Footer />
    <SecondFooter />
    </div>
  )
}
