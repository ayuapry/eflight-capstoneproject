import React from 'react'
import {MdAirlineSeatLegroomExtra} from 'react-icons/md'
import {GiHotMeal,GiHandBag, GiUpgrade} from 'react-icons/gi'
export const HeadlineCards = () => {
  return (
    <div>
        <div className='bg-slate-50 h-auto pt-[100px] mt-0 md:mt-[9rem]'>
            <h1 className='text-center text-xl md:text-3xl font-bold'>Our Top Tour Places</h1>
            <p className='text-center text-gray-500 mx-10 mb-8 font-light'>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</p>
            <div className='bg-slate-50 px-10 md:mx-20 md:pl-[105px] h-full pb-[150px] grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-10xl justify-center'>
                <div className='border border-3 cursor-pointer w-[150px] md:w-[250px] h-[270px] bg-white shadow-lg rounded-md mb-5 hover:bg-slate-100 hover:scale-110 ease-in duration-300'>
                    <img src="https://i.pinimg.com/564x/87/91/44/879144d6568e6b141e7b2c839b72be8c.jpg" alt="" className=' object-cover w-[250px] h-[180px] ' />
                    <p className='font-bold text-center px-2 mt-2'>Korean Places</p>
                    <span className='text-gray-400 px-2 '>Lorem, ipsum dolor.</span>
                </div>
                <div className='border border-3 cursor-pointer w-[150px] md:w-[250px] h-[270px] bg-white shadow-lg rounded-md hover:bg-slate-100 hover:scale-110 ease-in duration-300'>
                    <img src="https://i.pinimg.com/236x/ce/f3/65/cef3658f078b94360e6fc2032311ba4f.jpg" alt="" className=' object-cover w-[250px] h-[180px]' />
                    <p className='font-bold mt-2 px-2'>Japan Places</p>
                    <span className='text-gray-400 px-2'>Lorem, ipsum dolor.</span>
                </div>
                <div className='border border-3 cursor-pointer w-[150px] md:w-[250px] h-[270px] bg-white shadow-lg rounded-md hover:bg-slate-100 hover:scale-110 ease-in duration-300'>
                    <img src="https://i.pinimg.com/236x/4d/42/ae/4d42ae183e8eb047c1fed220e8a95298.jpg" alt="" className=' object-cover w-[250px] h-[180px]' />
                    <p className='font-bold mt-2 px-2'>Thailand Places</p>
                    <span className='text-gray-400 px-2'>Lorem, ipsum dolor.</span>
                </div>  
                <div className='border border-3 cursor-pointer w-[150px] md:w-[250px] h-[270px] bg-white shadow-lg rounded-md hover:bg-slate-100 hover:scale-110 ease-in duration-300'>
                    <img src="https://i.pinimg.com/236x/ed/dd/47/eddd47c147292916adb14d533759d3b3.jpg" alt="" className=' object-cover w-[250px] h-[180px] ' />
                    <p className='font-bold mt-2 px-2'>Bali Places</p>
                    <span className='text-gray-400 px-2'>Lorem, ipsum dolor.</span>
                </div>                 
            </div>
        </div>
        
        <div className='bg-slate-50'>
            <p className='text-center text-xl md:text-3xl pb-5 font-bold md:px-20'>Discover further services</p>
            <div className='bg-slate-50 px-10 md:px-20 h-full pb-20 grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>
                <div className='flex flex-col items-center'>
                    <MdAirlineSeatLegroomExtra size={50}  className='mb-5 text-sky-300'/>
                    <p className='font-semibold text-center'>ADITIONAL SEAT</p>
                    <h3 className='font-light'>Reserve your seat before flight that best suit for you</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <GiHandBag size={50} className='mb-5 text-yellow-500 '/>
                    <p className='font-semibold text-center'>ADD MORE BAGS</p>
                    <h3 className='font-light'>Purchasing extra baggage allowance before your flight to stress-free travel</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <GiHotMeal size={50} className='mb-5 text-red-400 ' />
                    <p className='font-semibold text-center'>SPECIAL MEALS</p>
                    <h3 className='font-light'>Make your travel easy and enjoyablewith delicious in-flight meals service</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <GiUpgrade size={50} className='mb-5 text-teal-400 ' />
                    <p className='font-semibold text-center'>CABIN UPGRADE</p>
                    <h3 className='font-light'>Treat yourself to an upgrade and enjoy better amenities for your flight</h3>
                </div>
            </div>
        </div>
    </div>

  )
}
