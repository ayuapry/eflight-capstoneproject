import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { ArrowLeftCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Form, Select } from 'antd';
import { GiCommercialAirplane } from 'react-icons/gi'
import { BsArrowLeftRight } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import ButtonPrimary from '../components/ButtonPrimary'
import { EditProfileModal } from '../components/EditProfileModal'
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux'
import { Profile } from '../redux/feature/authSlice'
import Footer from '../components/Footer';
import { SecondFooter } from '../components/SecondFooter';
import { useNavigate } from 'react-router-dom';
import { EditProfileModal } from '../components/EditProfileModal';

export const HistoryPage = () => {
    const { Option } = Select;
    const [select, setSelect] = useState('')
    const [editProfileModal, setEditProfileModal] = useState(false)
    const handleOnClose = () => setEditProfileModal(false)
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(Profile())
    }, []);

    const logout = async () => {
        localStorage.clear();
        navigate('/')
        setTimeout(function () {
            window.location.reload(1);
          }, 1500);
      };
  return (
    <div className='bg-slate-100'>
        <Navbar />
        <div className='max-w-[1240px] mx-auto px-4 bg-slate-100 h-screen'>
            <div className='grid md:grid-cols md:grid-cols-[30%_70%] gap-2'>
                <div className='bg-white mt-20 rounded-md shadow-md md:h-[220px] '>
                    <div className='flex my-4 gap-2 mx-16 items-center text-center'>
                        <div className=''>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="nope" 
                            className='h-20 w-20 object-cover rounded-full' />
                        </div>
                        <div>
                            <h1 className='font-bold md:text-xl text-lg'>Maudy Ayunda</h1>
                            <span className='text-sm'>ayuapry@gmail.com</span>
                        </div>
                    </div>
                    <div className='hidden md:block mx-10 my-10'>
                        <div className='flex gap-2' onClick={() => setEditProfileModal(true)}>
                            <UserCircleIcon className="h-6 w-6 text-blue-600"/>
                            <p className='font-semibold'>Account</p>
                        </div>
                        <div className='flex gap-2' onClick={logout}>
                            <ArrowLeftCircleIcon className="h-6 w-6 text-blue-600"/>
                            <p className='font-semibold'>Logout</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md md:mt-20'>
                    <div className='grid md:grid-cols md:grid-cols-[60%_40%] px-4 my-4 border-b-2 bor'>
                        <div className=''>
                            <h1>Order History</h1>
                            <span className='text-gray-400'>This is the history of your trip</span>
                        </div>
                        <div className='my-4'>
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
                        <div className='bg-white border-2 border-gray-100 shadow-md w-full md:h-[220px] px-3 py-3  rounded-md'>
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
                            <p className='text-end text-sm text-blue-600 hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
                        </div>
                    </div>

                    <div className='mx-2 my-2'>
                        <div className='bg-white border-2 border-gray-100 shadow-md w-full md:h-[220px] px-3 py-3  rounded-md'>
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
                            <p className='text-end text-sm text-blue-600 hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
                        </div>
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
