// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper';

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
    <div className='pt-[100px] bg-slate-50'>
    <div className='mx-8 lg:mx-16 drop-shadow-xl shadow-black '>
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <img className='h-[150px] md:h-[500px] w-full rounded-xl  object-cover' src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[150px] md:h-[500px] w-full rounded-2xl object-cover' src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[150px] md:h-[500px] w-full rounded-2xl object-cover' src={Banner3} alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}
