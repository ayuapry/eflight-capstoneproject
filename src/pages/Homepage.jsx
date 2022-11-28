import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeadlineCards } from '../components/HeadlineCards'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import ButtonPrimary from '../components/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
import { SecondFooter } from '../components/SecondFooter'
<<<<<<< HEAD
import Card from '../components/Card'
=======
>>>>>>> 0512aab8cea4183c486a442a1402dded45d675fb

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div>
       <Navbar />
       <Hero />
<<<<<<< HEAD
       <ButtonPrimary title="Detail" click={()=>navigate('/Detail')} />
       <Card/>
=======
       {/* <ButtonPrimary title="Detail" click={()=>navigate('/Detail')} /> */}
>>>>>>> 0512aab8cea4183c486a442a1402dded45d675fb
       <HeadlineCards />
       <Footer/>
       <SecondFooter />
    </div>
  )
}
