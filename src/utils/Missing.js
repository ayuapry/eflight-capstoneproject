import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'
import notFound from '../assets/notFound.jpg'

export const Missing = () => {
    const navigate = useNavigate()
  return (
    <article className='bg-white h-screen text-black text-center my-auto' >
      <img src={notFound} className=' flex items-center mx-auto w-[600px] h-[600px]' alt='/' />
            <div className="flexGrow">
                <div className=' mx-auto w-fit items-center' onClick={() => navigate('/')} >
                    <ButtonPrimary title='Visit Our Homepage'/>
                </div>
            </div>
    </article>
  )
}
