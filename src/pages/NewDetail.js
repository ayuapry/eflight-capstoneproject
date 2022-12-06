import React from 'react'
import Filter from '../components/Filter'
import NewNavbar from '../components/NewNavbar'
import Detail from '../components/Detail'

export default function NewDetail() {

  return (
    <div className='bg-slate-50 h-[100vh]'>
    <NewNavbar className="mb-4"/>
    <div className='w-full lg:px-16 p-4 pt-24 lg:flex lg:pt-24'>
      <Filter />
      <Detail />
    </div>
    </div>
  )
}
