import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { SecondFooter } from '../components/SecondFooter'

export const Homepage = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <HeadlineCards />
       <Footer/>
       <SecondFooter />
    </div>
  )
}
