// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Hero = () => {
  return (
    <div className='pt-[100px] mx-5 lg:mx-[100px]'>
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div className=''>
                <img className='h-[150px] md:h-[400px] w-full rounded-lg object-cover' src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[150px] md:h-[400px] w-full rounded-lg object-cover' src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
