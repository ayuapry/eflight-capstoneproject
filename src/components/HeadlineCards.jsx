import React from 'react'
import Holiday from '../assets/Holiday.png'
import meals from '../assets/meals.png'
import seat from '../assets/seat.png'
import bag from '../assets/bag.png'
import baggage from '../assets/baggage.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPromo } from '../redux/feature/promoSlice'
import { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const HeadlineCards = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {promo } = useSelector((state) => state.promo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(getPromo())
    },[dispatch]); 

    const [allArticle, setAllArticle] = useState([]);
    const getAllArticle = async (id) => {
        try {
          const response = await axios.get(`https://63a5b0fc318b23efa79ae8d9.mockapi.io/api/v1/topplaces/article`);
          console.log(response);
          setAllArticle(response.data);
        } catch (e) {
          console.log(e.message);
        }
      };
    
      useEffect(() => {
        getAllArticle();
      }, []);

      const handleClick = (id) => {
        navigate(`/detail-places/${id}`);
      };

  return (
    <>
    <div id='Destination' className='py-10'>
        <div className='max-w-[1240px] mx-auto px-4 text-center'>
            <h1>Our Top Tour Places</h1>
            <span className=''>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</span>
        </div>
        <div className='max-w-[1024px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
        {allArticle.map((item,i) => (
            <div className='relative' onClick={() => handleClick(item.id)}>
                <img className='w-full h-full object-cover rounded-md' src={item.image} alt="/" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-md'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                        {item.title}
                    </p>
                </div>
            </div>
            ))}
        </div>
          
        
        <div className='max-w-[1240px] mx-auto px-4 hidden md:flex items-center '>
            <div className='w-[40%]'>
                <img src={Holiday} alt="/" className='h-auto w-auto object-cover ' />
            </div>
            <div className='w-[50%]'>
                <h1>Ordering Tickets and Planning Vacations Made Easy</h1>
                <div className='border-l-4 py-3 border-blue-600 px-4'>
                    <div>
                        <h2>Easily Book Tickets and Hotels.</h2>
                        <p className='text-justify'>Book flight tickets easily and quickly. No need to worry, with just one touch of a finger, you can easily get the flight ticket you need.</p>
                    </div>
                    <div className='mt-4'>
                        <h2>Lots of Special Promos.</h2>
                        <p className='text-justify'>Many promos for your favorite airline tickets. Get the best price discounts so that your vacation budget is even more economical. There is no more reason to postpone your vacation.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Promo */}
            <div className='Promo max-w-[1024px] mx-auto px-4 py-10 flex flex-row justify-between items-center'>
                <div className='w-[30%] flex items-center'>
                    <h1 className='text-[1.6rem] leading-tight font-semibold m-0'>Yuk Cek Promo Sebelum Bepergian!</h1>
                </div>
                <div className='w-[68%] flex flex-row'>
                    <Swiper
                    slidesPerView={2.5}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    pagination={{
                    type: "progressbar",
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        {promo?.map((e) => (
                                <SwiperSlide>
                            <Link className='md:w-[250px]' to={`/detail-promo/${e?.id}`}>
                                <img src={e?.imageURL} alt="PromoBanner" className='rounded-md flex' />
                            </Link>
                            </SwiperSlide>  
                            ))}
                    </Swiper>
                </div>
            </div>


        <div className='max-w-[1240px] mx-auto px-4'>
            <h1 id='Services' className='text-center py-4'>Discover further services</h1>
            <div className='bg-slate-50 md:px-20 h-full pb-5 md:pb-20 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
                <div className='flex flex-col items-center justify-start'>
                    <img src={seat} alt='seat' className='h-16 mb-4' />
                    <p className='font-semibold text-center'>ADITIONAL SEAT</p>
                    <h3 className='font-light text-center'>Reserve your seat before flight that best suit for you</h3>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <img src={bag} alt='bag' className='h-16 mb-4' />
                    <p className='font-semibold text-center'>MORE BAGS</p>
                    <h3 className='font-light text-center' style={{textcenter: "inter-character"}}>Purchasing extra baggage allowance before your flight to stress-free travel</h3>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <img src={meals} alt='meals' className='h-16 mb-4' />
                    <p className='font-semibold text-center'>SPECIAL MEALS</p>
                    <p className='font-light text-center'>Make your travel easy and enjoyablewith delicious in-flight meals service</p>
                </div>
                <div className='flex flex-col items-center justify-start'>
                    <img src={baggage} alt='baggage' className='h-16 mb-4' />
                    <p className='font-semibold text-center'>CABIN UPGRADE</p>
                    <p className='font-light text-center tracking-normal'>Treat yourself to an upgrade and enjoy better amenities for your flight</p>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}
