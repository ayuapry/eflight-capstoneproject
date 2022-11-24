// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
    <div className='lg:bg-gradient-to-b from-[#4ddbff] to-white rounded-t-[400px] mt-[100px]  '>
    <div className='mx-8 lg:mx-16'>
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <img className='h-[150px] md:h-[500px] w-full rounded-2xl object-cover' src={Banner1} alt="" />
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
