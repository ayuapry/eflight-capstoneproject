import React from 'react'
import { useNavigate } from "react-router-dom"
import ButtonPrimary from '../components/ButtonPrimary';
import unauthorized from '../assets/unauthorized.png'

export const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
  return (
    <article className='bg-white h-screen text-black text-center my-auto' >
      <img src={unauthorized} className=' flex items-center mx-auto w-[600px] h-[600px]' alt='/' />
            <div className="flexGrow">
                <div className=' mx-auto w-fit items-center' onClick={goBack} >
                    <ButtonPrimary title='Go Back'/>
                </div>
            </div>
    </article>
  )
}
