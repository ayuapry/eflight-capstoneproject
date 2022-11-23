import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'

export const Homepage = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <HeadlineCards />
       <Footer/>
    </div>
  )
}
