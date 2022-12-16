import React from 'react'
import Footer from '../components/Footer'
import { ArrowLeftCircleIcon, CheckCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Navbar } from '../components/Navbar'
import { GiCommercialAirplane } from 'react-icons/gi'
import { BsArrowLeftRight } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import ButtonPrimary from '../components/ButtonPrimary'
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { SecondFooter } from '../components/SecondFooter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EditProfileModal } from '../components/EditProfileModal';
import { getProfile } from '../redux/feature/UserSlice'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { getHistory } from '../redux/feature/historySlice'

export const HistoryPage = () => {
    const { Option } = Select;
    const [select, setSelect] = useState('')

    const [fullName, setFullName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')

    const [editProfileModal, setEditProfileModal] = useState(false)
    const handleOnClose = () => setEditProfileModal(false)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {id} = useParams()
    
    const {profile} = useSelector((state) => state.user)
    const { history } = useSelector( (state) => state.history );

    useEffect(() => {
        dispatch(getProfile(id))
        // console.log(profile)
    },[dispatch, id]); 

    useEffect(() => {
        dispatch(getHistory())
        // console.log(profile)
    },[dispatch]); 
    
    const logout = async () => {
        localStorage.clear();
        navigate('/')
        setTimeout(function () {
            window.location.reload(1);
          }, 1500);
      };

    const updateProfile = () => {
        axios.put(`${process.env.REACT_APP_BASE_URL}/user/update/${id}`, {
            fullName: fullName,
            birthDate: birthDate,
            gender: gender,
        })
        .then((response) => {
            window.location.reload()
        })
    }

    console.log(history);

  return (
    <div className='bg-slate-100'>
        <Navbar />
        <div className='max-w-[1240px] mx-auto px-4 bg-slate-100 md:h-screen'>
            <div className='grid md:grid-cols md:grid-cols-[30%_70%] gap-2'>
                <div className='bg-white mt-20 rounded-md shadow-md md:h-[350px] '>
                    <div className=' my-4 gap-2 mx-16 items-center text-center'>
                        <div className=''>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="nope" 
                            className='h-24 w-24 object-cover rounded-full mx-auto' />
                        </div>
                        <div>
                            <h1 className='font-bold md:text-xl text-lg'>{profile?.fullName}</h1>
                            <span className='text-sm'>{profile?.email}</span>
                        </div>
                    </div>
                    <div className='hidden md:block mx-10 my-10'>
                        <div className='flex gap-2 cursor-pointer' onClick={() => setEditProfileModal(true)} >
                            <UserCircleIcon className="h-6 w-6 text-blue-600"/>
                            <p className='font-semibold'>Account</p>
                        </div>
                        <Link to='/checkin' className='flex gap-2 cursor-pointer' >
                            <CheckCircleIcon className="h-6 w-6 text-blue-600"/>
                            <p className='font-semibold'>Check-In</p>
                        </Link>
                        <div className='flex gap-2 cursor-pointer' onClick={logout} >
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

                    {history?.length > 0 && history.map(histo => (
                        <div className='mx-2 my-2'>
                            <div className='bg-white border-2 border-gray-100 shadow-md w-full md:h-[220px] px-3 py-3  rounded-md'>
                                <div className='flex gap-2 pb-4'>
                                    <GiCommercialAirplane color='skyblue' />
                                    <p>Flights</p>
                                </div>
                                <p className='text-gray-400 text-sm'>
                                    Order ID: {histo.bookingId}
                                </p>

                                {histo?.departure?.data.map(city => (
                                    <>
                                        <div className='flex gap-2 font-semibold'>
                                            <p>{city.schedule.originAirport.city}</p>
                                            <BsArrowLeftRight />
                                            <p>{city.schedule.destinationAirport.city}</p>
                                        </div>

                                    </>
                                ))}
                                <div className='md:flex gap-3 text-sm'>
                                    <p>
                                        {histo.bookingType} - {histo.adult} adults, {histo.child} child
                                    </p>
                                    {
                                            histo?.departure?.data.map(data => (
                                            <>
                                                <div className='flex gap-2'>
                                                    <FaPlaneDeparture color='skyblue' />
                                                    <p>{data.schedule.departureDate} . {data.schedule.departureTime}</p>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <FaPlaneArrival color='skyblue' />
                                                </div>
                                                <p>{data.schedule.arrivalDate} . {data.schedule.arrivalTime}</p>
                                            </>
                                            ))
                                        }
                                </div>       
                                        <p className='text-end text-sm text-blue-600 hover:text-[#a6c2d0] pr-2 cursor-pointer'>See Details</p>
                            </div>
                        </div>
                    ))}

                    {/* <div className='mx-2 my-2'>
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
                    </div> */}

                </div>
            </div>
        </div>
        <Footer />
        <SecondFooter />
        <EditProfileModal open={editProfileModal} close={handleOnClose} />
    </div>
  )
}
