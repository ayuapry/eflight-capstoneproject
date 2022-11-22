import React from 'react'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

export const Homepage = () => {
  return (
    <div className='h-[140vh]'>
       <Navbar />
       <Hero />
       <HeadlineCards />
    </div>
  )
}
