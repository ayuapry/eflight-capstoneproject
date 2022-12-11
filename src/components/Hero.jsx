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

import { useDispatch, useSelector } from 'react-redux';
import { getHero } from '../redux/feature/homeSlice';


export const Hero = () => {
    const {hero, loading} = useSelector((state) => state.homepage);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getHero())
    },[]);  
  
    if(loading){
      return <h2>Loading</h2>
    }
  return (
    <div className='pt-[65px] pb-10 md:pb-0 md:bg-blue-600 md:h-fit w-full'>
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
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img 
                  className='md:max-w-3xl mx-auto'
                  src={hero[0]?.imageURL} alt="Banner1" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='md:max-w-3xl mx-auto' 
                  src={hero[1]?.imageURL} alt="Banner2" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='md:max-w-3xl mx-auto' 
                  src={hero[2]?.imageURL} alt="Banner3" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
