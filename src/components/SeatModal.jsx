import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export const SeatModal = ({open, close}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'container') 
        close()
      }

    if(!open) return null
    return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        <div className="bg-white p-2 rounded w-[700px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Choose Seat</p>
                <button onClick={close}><AiOutlineClose /></button>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-semibold '>Flights</p>
                    <p className='text-sm font-light'>Jakarta (CGK) - Bangkok (DMK)</p>
                </div>
                <div>
                    <p className='text-sm font-light'>Economy 16:00 - 19:35 3h 35m</p>
                </div>
            </div>
        </div>
    </div>
        
  )
}
