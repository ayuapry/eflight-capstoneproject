import React from 'react'
import { useNavigate } from "react-router-dom"
import ButtonPrimary from '../components/ButtonPrimary';


export const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
  return (
        <article className='bg-blue-600 h-screen text-white text-center pt-[300px] my-auto' >
            <h1>Unauthorized</h1>
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <div className=' mx-auto w-fit items-center' onClick={goBack} >
                    <ButtonPrimary title='Go Back'/>
                </div>
            </div>
    </article>
  )
}
