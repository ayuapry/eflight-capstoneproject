import React from 'react'
import {MdAirlineSeatLegroomExtra} from 'react-icons/md'
import {GiHotMeal,GiHandBag, GiUpgrade} from 'react-icons/gi'
export const HeadlineCards = () => {
  return (
    <div>
    <div className='h-auto bg-slate-50'>
        <section className="md:h-full flex items-center md:mx-16 ">
        <div className="container px-5 py-14 mx-3 md:mx-0">
            <p className='text-3xl mb-10 text-center font-bold'>Promotions</p>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center scale-100 hover:scale-110 ease-in duration-300"
                            src="https://picsum.photos/id/188/720/400" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque in odit voluptatum quasi. Aut.</p>
                        </div>
                    </div>
                </div>
                
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center scale-100 hover:scale-110 ease-in duration-300"
                            src="https://picsum.photos/id/1016/720/400" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-xl font-semibold mb-3">Lorem, ipsum.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vitae ad praesentium inventore cumque? Nemo.</p>
                        </div>
                    </div>
                </div>
               
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center scale-100 hover:scale-110 ease-in duration-300"
                            src="https://picsum.photos/id/11/367/267" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus et nihil sed dolor praesentium doloribus.</p>                         
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4">
                    <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-40 w-full object-cover object-center scale-100 hover:scale-110 ease-in duration-300"
                            src="https://picsum.photos/id/11/367/267" alt="blog" />
                        <div className="p-6 hover:bg-gray-200 hover:text-black transition duration-300 ease-in">
                            <h1 className="text-xl font-semibold mb-3">Lorem, ipsum dolor.</h1>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus et nihil sed dolor praesentium doloribus.</p>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    <div className='bg-slate-50'>
    <p className='text-center text-xl md:text-3xl pb-5 font-bold'>Discover further services</p>
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
