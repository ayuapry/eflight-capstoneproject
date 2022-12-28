import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'

export const Missing = () => {
    const navigate = useNavigate()
  return (
    <article className='bg-blue-600 h-screen text-white text-center pt-[300px] my-auto' >
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <div className=' mx-auto w-fit items-center' onClick={() => navigate('/')} >
                    <ButtonPrimary title='Visit Our Homepage'/>
                </div>
            </div>
    </article>
  )
}
