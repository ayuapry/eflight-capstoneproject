// import Swiper core and required modules
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
    <div className='py-20 md:bg-blue-600 md:h-fit w-full'>
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
                  src={Banner1} alt="Banner1" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='md:max-w-3xl mx-auto' 
                  src={Banner2} alt="Banner2" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                  className='md:max-w-3xl mx-auto' 
                  src={Banner3} alt="Banner3" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
