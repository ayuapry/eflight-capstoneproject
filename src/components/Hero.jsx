// import Swiper core and required modules
import React, { useEffect } from 'react';
import {  Pagination, A11y, Autoplay, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Banner1 from '../assets/Banner1.jpg'
import Banner2 from '../assets/Banner2.jpg'
import Banner3 from '../assets/Banner3.jpg'


export const Hero = () => {


  return (
    <div className='pt-20 md:pt-0 md:bg-blue-600 md:h-[600px] rounded-sm'>
      <div >
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y, Autoplay]}
          // modules={[Pagination, A11y]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}

        >
            <SwiperSlide>
                <img 
                  className='h-auto md:mx-[300px] md:pt-[100px] md:h-[500px] object-cover md:w-[900px] -z-50 ' 
                  src={Banner1} alt="Banner1" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='h-auto md:mx-[300px] md:pt-[100px] md:h-[500px] object-cover md:w-[900px] -z-50 ' 
                  src={Banner2} alt="Banner2" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='h-auto md:mx-[300px] md:pt-[100px] md:h-[500px] object-cover md:w-[900px] -z-50 ' 
                  src={Banner3} alt="Banner3" />
            </SwiperSlide>
        </Swiper>
      </div>
      {/* <div>
        <Card className='absolute top-[5rem] h-full'/>
      </div> */}
    </div>
  )
}
