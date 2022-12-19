import React, { useState, useEffect } from 'react'
import { ArrowLongRightIcon, UsersIcon } from '@heroicons/react/20/solid'
import { Navbar } from '../components/Navbar'
import { DatePicker, Form, Input, Select } from 'antd';
import { SecondFooter } from '../components/SecondFooter';
import { useDispatch, useSelector } from 'react-redux';
import { getBagage, getBenefit, getTitel } from '../redux/feature/BookingSlice';
import ButtonPrimary from '../components/ButtonPrimary';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GiHandBag} from 'react-icons/gi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { MdEventSeat} from 'react-icons/md'
import { SeatModal } from '../components/SeatModal';
import Logo from '../assets/Logo.png'
import { getTiket } from '../redux/feature/homeSlice';

export const BookingPage = (tiket) => {
  const {titel, bagage, benefit } = useSelector((state) => state.booking);
  // const {tiket, loading} = useSelector ((state) => state.homepage)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [seatModal, setSeatModal] = useState(false)
  const handleOnClose = () => setSeatModal(false)
  const {id} = useParams()

  useEffect(() => {
    dispatch(getTitel())
    dispatch(getBagage(id))
    dispatch(getBenefit(id))
    dispatch(getTiket(id))
  },[dispatch]); 




  const token = localStorage.getItem('token')
  return (
    // <div>
    // {(token) ? 
    <div className='bg-slate-100'>
        <Navbar />
        <div className='max-w-[1240px] mx-auto md:px-14 bg-slate-100 '>
            <div className='grid md:grid-cols md:grid-cols-[60%_40%] gap-2 py-5'>
              <div>
                <div className='bg-white mt-20 rounded-md shadow-md py-5 px-5'>
                  <div className='flex items-center gap-3'>
                      <UsersIcon className='h-7 w-7' />
                      <div className='text-lg font-semibold'>Passenger Details</div>  
                  </div>
                  <div className='bg-slate-100 rounded-md'>
                      <p className=' mt-5 py-3 px-3'>Passenger 1: Adults</p>
                  </div>
                  <Form
                      name="wrap"
                      labelCol={{ flex: '110px' }}
                      labelAlign="left"
                      labelWrap
                      wrapperCol={{ flex: 1 }}
                      colon={false}
                  >
                    <Form.Item style={{width:'49%'}} >
                      <Select placeholder='Title'>
                        {titel?.map((e,i) => (
                          <Select.Option key={i} >{e?.titelName}</Select.Option>
                        ))}
                      </Select>
                      <span className='text-xs text-gray-400'>Mr/Mrs/Ms</span>
                    </Form.Item>

                    <Form.Item name={['FirstName']} rules={[{ required: true}]}>
                      <Input name='firstName' placeholder="FirstName and MidlleName" />
                      <span className='text-xs text-gray-400'>Fill in according to KTP / Passport / SIM (without punctuation and titles)</span>
                    </Form.Item> 

                    <Form.Item name={['LastName']} rules={[{required: true}]}>
                      <Input name='lastName' placeholder="LastName" />
                      <span className='text-xs text-gray-400'>As in KTP/Passport/SIM (without punctuation and title) & must be a single name.</span>
                    </Form.Item>

                    <div className='flex gap-2'>
                      <Form.Item
                        style={{width:'50%'}}
                        name={['Citizenship']}
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                      >
                        <Input name='citizenship' placeholder="citizenship" />
                        <span className='text-xs text-gray-400'>Citizenship</span>
                      </Form.Item>

                      <Form.Item style={{width:'50%'}} name={['birthdate']}  >
                          <DatePicker name='birthDate'  style={{width:'100%'}} placeholder='Birth Date' />
                          <span className='text-xs text-gray-400'>Birth Date</span>
                      </Form.Item>
                    </div>

                    <div className='flex gap-2'>
                      <Form.Item
                        style={{width:'50%'}}
                        name={['pasport_number']}
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input name='pasportNumber' placeholder="Passport Number" />
                        <span className='text-xs text-gray-400'>Valid for at least 6 months from the date of departure</span>
                      </Form.Item>

                      <Form.Item 
                        style={{width:'50%'}}
                        name={['created_at']}>
                        <DatePicker name='created_at' style={{width:'100%'}} placeholder='created at' />
                        <span className='text-xs text-gray-400'>The date the passport was issued</span>
                      </Form.Item>
                    </div>
                  </Form>
                  </div>

                <div className='bg-white shadow-lg rounded-md mt-5 py-5 px-3'>
                <div className='flex items-center gap-3'>
                    <AiOutlineAppstoreAdd size={30} />
                    <div className='text-lg'>Extra Facilities</div>  
                </div>
                <div  className='mt-5'>
                    <div className='flex justify-between items-center pb-5 border-b-2'>
                    <div className='flex justify-between items-center gap-4'>
                        <MdEventSeat size={25} />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2>Seat</h2>
                                <span className='font-light'>Choose a seat on the plane.</span>
                            </div>
                        </div>
                        </div>
                        <h3 className='text-blue-600 hover:text-blue-400 cursor-pointer' onClick={() => setSeatModal(true)} >Order</h3>
                    </div>
                    <div className='flex gap-4 justify-between mt-5 items-center'>
                        <div className='flex gap-4'>
                        <GiHandBag size={25} />
                        <div>
                            <h2>Baggage</h2>
                            <span className='font-light'>Increase the capacity of your luggage.</span>
                            <Form.Item className='mt-3'>
                                <Select placeholder='Baggage'>
                                  {bagage?.map((e,i) => (
                                    <Select.Option key={i} >{e?.weight}kg - Rp {e?.price},-</Select.Option>
                                  ))}
                                </Select>
                            </Form.Item>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md md:mt-20 px-5 py-5 md:h-[535px]'>
            <div className='text-lg font-semibold'>Flight</div>

            <div className='flex justify-between'>
              <div className='flex gap-3 items-center py-3'>
                <h2>Jakarta</h2>
                <ArrowLongRightIcon className='h-4 w-4' />
                <h2>Bangkok</h2>
              </div>
              {/* <div className='py-5 font-semibold text-blue-600 hover:text-blue-400'>
                <Link to='' >Details</Link>
              </div> */}
            </div>  

            <div className='flex items-center gap-6 text-gray-500'>
              <img src={Logo} alt="" className='h-12 w-12'/>
              <div className='flex mt-4'>
                <p>CGK</p>
                <p>-</p>
                <p>DMK</p>
              </div>
              <div>Sat, 24 Dec 2022</div>
              <div>{tiket?.departureTime}</div>
            </div>

            <h2 className='py-3'>Ticket Policy</h2>
            {benefit?.map((e,i) => (
              <p key={i} className='text-green-600' >{e?.desription}</p>
            ))}
            <hr />

            <div className='flex justify-between py-4'>
              <h2>Total Payment</h2>
              <h2 className='text-blue-600'>IDR 2,942,999</h2>
            </div>
            <div className='max-w-7xl' onClick={() => navigate(`/history?sort=DESC`) }>
              <ButtonPrimary type="submit" title="Booking Now" className='w-fit'/> 
            </div>
          </div>
        </div>
      </div>
        <SecondFooter />
        <SeatModal open={seatModal} close={handleOnClose} />
    </div>
      // :
      // <div>
      //   Login Dulu
      // </div>
      //       }
    // </div>
  )
}

