import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
// import ButtonPrimary from '../components/ButtonPrimary'
import { SecondFooter } from '../components/SecondFooter'
import Card from '../components/Card'
import NewNavbar from '../components/NewNavbar'

export const Homepage = () => {
  return (
    <div className='bg-slate-50'>
        <Navbar/>
        <Hero />
        <Card/>
        <HeadlineCards />
        <Footer/>
        <SecondFooter />
    </div>
  )
}