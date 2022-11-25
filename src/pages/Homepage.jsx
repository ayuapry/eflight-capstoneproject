import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import ButtonPrimary from '../components/ButtonPrimary'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Navbar />
       <Hero />
       <ButtonPrimary title="Detail" click={()=>navigate('/Detail')} />
       <HeadlineCards />
       <Footer/>
    </div>
  )
}
