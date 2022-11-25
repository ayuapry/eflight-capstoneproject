import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import ButtonPrimary from '../components/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
import { SecondFooter } from '../components/SecondFooter'
import Card from '../components/Card'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Navbar />
       <Hero />
       <ButtonPrimary title="Detail" click={()=>navigate('/Detail')} />
       <Card/>
       <HeadlineCards />
       <Footer/>
       <SecondFooter />
    </div>
  )
}
