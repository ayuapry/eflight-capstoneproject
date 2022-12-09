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
import { EditProfileModal } from '../components/EditProfileModal'
import { Button, DatePicker, Form, Input, Select } from 'antd';
const { Option } = Select;

export const HistoryPage = () => {
  const [select, setSelect] = useState('')
  const [editProfileModal, setEditProfileModal] = useState(false)
  const handleOnClose = () => setEditProfileModal(false)
  return (
    <div className='h-auto bg-slate-100'>
      <Navbar />
      <div className='grid md:grid-cols-4 pt-[100px] gap-2 md:px-2 mb-10 md:h-auto'>
        <div className='hidden md:flex flex-col md:col-span-1 col-span-4 bg-white rounded-md border-2 md:h-[600px] md:ml-[130px] shadow-md w-auto mx-5 '> 
            <div className='px-16 pt-10'>
                <img src="https://images.pexels.com/photos/8214192/pexels-photo-8214192.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="noimg" className='w-[100px] h-[100px] rounded-full bg-slate-300 object-cover'/>
            </div>
                <p className='mx-14 mt-5'>Maudy Ayunda</p>
            <div className='px-10 mt-10'>
                <ul>
                    <div className='flex items-center gap-2'>
                        <HiUser size={25} />
                        <li className='py-2 w-full cursor-pointer' onClick={() => setEditProfileModal(true)} >Edit Account</li>
                    </div>  
                    <div className='flex items-center gap-2'>
                        <HiLogout size={25} />
                        <li className='py-2 w-full'>Logout</li>
                    </div>  
                </ul>
            </div>
        </div>
        <div className='flex flex-col col-span-4 md:col-span-3 border-2 bg-white rounded-md shadow-md mx-5 md:mr-[80px] md:h-full'>
        <div className='md:flex justify-between items-center mt-5 border-b-2'>
          <div className='px-5'>
            <h1 className='font-semibold'>Order History</h1>
            <p className='text-gray-400'>This is the history of your trip</p>
          </div>
         <div className='mx-5 md:w-[20%] mr-5'>
                  <Form.Item
                    name="sort"
                    style={{width:'100%'}}
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    >
                    <Select placeholder="Sort By" allowClear>
                    <Option value="recent">Recently purchased</Option>
                    <Option value="early">Early trip date</Option>
                    </Select>
                  </Form.Item>     
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
          
        </div>
      </div>
      <Footer />
      <SecondFooter />
      <EditProfileModal open={editProfileModal} close={handleOnClose} />
    </div>
  )
}
