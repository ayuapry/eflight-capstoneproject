import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'

export const Homepage = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <HeadlineCards />
    </div>
  )
}
