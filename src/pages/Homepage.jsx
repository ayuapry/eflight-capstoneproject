import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
<<<<<<< HEAD
import ButtonPrimary from '../components/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
=======
import { SecondFooter } from '../components/SecondFooter'
>>>>>>> 7ce9c75308aa7a9035818532c4ae20853c9059b4

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Navbar />
       <Hero />
       <ButtonPrimary title="Detail" click={()=>navigate('/Detail')} />
       <HeadlineCards />
       <Footer/>
       <SecondFooter />
    </div>
  )
}
