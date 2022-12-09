import React from 'react'

export const HeadingCard = (props) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover rounded-md' src={props.bg} alt="/" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-md'>
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                {props.text}
            </p>
        </div>
    </div>
  )
}
