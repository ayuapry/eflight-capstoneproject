import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { SecondFooter } from '../components/SecondFooter'
import Card from '../components/Card'
import ScrollToTop from '../components/ScrollToTop'


export const Homepage = () => {

  return (
    <div className='bg-slate-50'>
        <ScrollToTop />
        <Navbar/>
        <Hero />
        <Card/>
        <HeadlineCards />
        <Footer/>
        <SecondFooter />
    </div>
  )
}