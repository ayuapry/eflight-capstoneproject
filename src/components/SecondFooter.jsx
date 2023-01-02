import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import logotext from '../assets/LogoText.png'

export const SecondFooter = () => {
  return (
    <div className='bg-gray-100 border-t-2 md:h-[10vh] h-[5vh] text-center text-gray-500 flex items-center justify-center'>
        <LazyLoadImage src={logotext} alt="logotext" className='md:h-6 -mb-2 mr-2 h-4' />
        <p className='fontMont mb-0 items-center text-xs md:text-sm'>© 2022 BinarAir.com. All rights reserved.</p>
    </div>
  )
}
