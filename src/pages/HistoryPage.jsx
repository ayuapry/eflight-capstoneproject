import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SecondFooter } from '../components/SecondFooter'
import { Link } from 'react-router-dom'
import { HiUser, HiLogout} from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiCommercialAirplane } from 'react-icons/gi'
import { BsArrowLeftRight } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import ButtonPrimary from '../components/ButtonPrimary'

export const HistoryPage = () => {
  const [select, setSelect] = useState('')
  return (
    <div className='h-auto bg-slate-100'>
      <Navbar />
      <div className='grid md:grid-cols-4 pt-[100px] md:px-2 mb-10 gap-2 md:h-auto'>
        <div className='flex flex-col md:col-span-1 col-span-4 bg-white rounded-[30px] border-2 md:h-[600px] md:ml-14 shadow-md w-auto mx-5 '> 
            <div className='px-16 pt-10'>
                <img src="https://images.pexels.com/photos/8214192/pexels-photo-8214192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="noimg" className='w-[150px] h-[150px] rounded-full bg-slate-300 object-cover'/>
                <p className='text-xl ml-5 mt-5'>Maudy Ayunda</p>
            </div>
            <div className='px-10 mt-10'>
                <ul>
                    <div className='flex items-center gap-2'>
                        <HiUser size={25} />
                        <li className='py-2 w-full'><Link to='/profile'>Edit Account</Link></li>
                    </div>  
                    <div className='flex items-center gap-2'>
                        <HiLogout size={25} />
                        <li className='py-2 w-full'>Logout</li>
                    </div>  
                </ul>
            </div>
        </div>
        <div className='flex flex-col col-span-4 md:col-span-3 border-2 bg-white rounded-[30px] shadow-md mx-5 md:mr-[50px] md:h-full'>
        <div className='md:flex justify-between items-center mt-5 border-b-2'>
          <div className='px-5'>
            <h1 className='font-semibold'>Order History</h1>
            <p className='text-gray-400'>This is the history of your trip</p>
          </div>
          <div className="filter-dropdowns mb-5 px-5">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                type="button" 
                                className="inline-flex w-[300px] md:w-56 justify-between rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-light text-black shadow-sm  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                                id="menu-button" 
                                aria-expanded="true" 
                                aria-haspopup="true"
                                onClick={() => setSelect(!select)}
                            >
                            Sort By
                            <IoMdArrowDropdown size={20} />
                            </button>
                        </div>
                        <div 
                            className={`absolute right-0 z-10 mt-1 border-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-green-100 
                            ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                              <ul className=''>
                                <li className='h-10 hover:bg-gray-200'>Recently purchased</li>
                                <li className='h-10 hover:bg-gray-200'>Early trip date</li>
                              </ul>
                                {/* {
                                    sort && sort.map((item, index) => (
                                        <a href={`/sorts/${item.name}`} className="block px-4 py-2 text-sm" key={index} role="menuitem" tabIndex="-1" id="menu-item-0">
                                            {item.name}
                                        </a>
                                    ))
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <div className='mx-2 my-2'>
            <div className='bg-white border-2 border-gray-100 shadow-xl w-full md:h-[220px] px-3 py-3  rounded-lg'>
              <div className='flex gap-2 pb-4'>
                <GiCommercialAirplane color='skyblue' />
                <p>Flights</p>
              </div>
              <p className='text-gray-400 text-sm'>Order ID: xxxxx</p>
              <div className='flex gap-2 font-semibold'>
                <p>Jakarta</p>
                <BsArrowLeftRight />
                <p>Bali</p>
              </div>
              <div className='md:flex gap-3 text-sm'>
                <p>Roundtrip - 2 adults, 1 child</p>
                <div className='flex gap-2'>
                  <FaPlaneDeparture color='skyblue' />
                  <p>Friday, 25 Nov 2022 . 11:27</p>
                </div>
                <div className='flex gap-2'>
                  <FaPlaneArrival color='skyblue' />
                  <p>Friday, 27 Nov 2022 . 23:00</p>
                </div>
              </div>
              <p></p>
              <p className='text-end text-sm text-[#46B3E6] hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
            </div>
          </div>
          <div className='mx-2 my-2'>
            <div className='bg-white border-2 border-gray-100 shadow-xl w-full md:h-[220px] px-3 py-3 rounded-lg'>
              <div className='flex gap-2 pb-4'>
                <GiCommercialAirplane color='skyblue' />
                <p>Flights</p>
              </div>
              <p className='text-gray-400 text-sm'>Order ID: xxxxx</p>
              <div className='flex gap-2 font-semibold'>
                <p>Jakarta</p>
                <BsArrowLeftRight />
                <p>Bali</p>
              </div>
              <div className='md:flex gap-3 text-sm'>
                <p>Roundtrip - 2 adults, 1 child</p>
                <div className='flex gap-2'>
                  <FaPlaneDeparture color='skyblue' />
                  <p>Friday, 25 Nov 2022 . 11:27</p>
                </div>
                <div className='flex gap-2'>
                  <FaPlaneArrival color='skyblue' />
                  <p>Friday, 27 Nov 2022 . 23:00</p>
                </div>
              </div>
              <p></p>
              <p className='text-end text-sm text-[#46B3E6] hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
            </div>
          </div>
          <div className='mx-2 my-2'>
            <div className='bg-white border-2 border-gray-100 shadow-xl w-full md:h-[220px] px-3 py-3 rounded-lg'>
              <div className='flex gap-2 pb-4'>
                <GiCommercialAirplane color='skyblue' />
                <p>Flights</p>
              </div>
              <p className='text-gray-400 text-sm'>Order ID: xxxxx</p>
              <div className='flex gap-2 font-semibold'>
                <p>Jakarta</p>
                <BsArrowLeftRight />
                <p>Bali</p>
              </div>
              <div className='md:flex gap-3 text-sm'>
                <p>Roundtrip - 2 adults, 1 child</p>
                <div className='flex gap-2'>
                  <FaPlaneDeparture color='skyblue' />
                  <p>Friday, 25 Nov 2022 . 11:27</p>
                </div>
                <div className='flex gap-2'>
                  <FaPlaneArrival color='skyblue' />
                  <p>Friday, 27 Nov 2022 . 23:00</p>
                </div>
              </div>
              <p></p>
              <p className='text-end text-sm text-[#46B3E6] hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
            </div>
          </div>
          <div className='mx-2 my-2'>
            <div className='bg-white border-2 border-gray-100 shadow-xl w-full md:h-[220px] px-3 py-3 rounded-lg'>
              <div className='flex gap-2 pb-4'>
                <GiCommercialAirplane color='skyblue' />
                <p>Flights</p>
              </div>
              <p className='text-gray-400 text-sm'>Order ID: xxxxx</p>
              <div className='flex gap-2 font-semibold'>
                <p>Jakarta</p>
                <BsArrowLeftRight />
                <p>Bali</p>
              </div>
              <div className='md:flex gap-3 text-sm'>
                <p>Roundtrip - 2 adults, 1 child</p>
                <div className='flex gap-2'>
                  <FaPlaneDeparture color='skyblue' />
                  <p>Friday, 25 Nov 2022 . 11:27</p>
                </div>
                <div className='flex gap-2'>
                  <FaPlaneArrival color='skyblue' />
                  <p>Friday, 27 Nov 2022 . 23:00</p>
                </div>
              </div>
              <p></p>
              <p className='text-end text-sm text-[#46B3E6] hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
            </div>
          </div>
          <div className='mx-2 my-2'>
            <div className='bg-white border-2 border-gray-100 shadow-xl w-full md:h-[220px] px-3 py-3 rounded-lg'>
              <div className='flex gap-2 pb-4'>
                <GiCommercialAirplane color='skyblue' />
                <p>Flights</p>
              </div>
              <p className='text-gray-400 text-sm'>Order ID: xxxxx</p>
              <div className='flex gap-2 font-semibold'>
                <p>Jakarta</p>
                <BsArrowLeftRight />
                <p>Bali</p>
              </div>
              <div className='md:flex gap-3 text-sm'>
                <p>Roundtrip - 2 adults, 1 child</p>
                <div className='flex gap-2'>
                  <FaPlaneDeparture color='skyblue' />
                  <p>Friday, 25 Nov 2022 . 11:27</p>
                </div>
                <div className='flex gap-2'>
                  <FaPlaneArrival color='skyblue' />
                  <p>Friday, 27 Nov 2022 . 23:00</p>
                </div>
              </div>
              <p></p>
              <p className='text-end text-sm text-[#46B3E6] hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
      <SecondFooter />
    </div>
  )
}
