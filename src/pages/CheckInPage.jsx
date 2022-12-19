import React from 'react'
import { Navbar } from '../components/Navbar'
import { Form, Input } from 'antd';
import ButtonPrimary from '../components/ButtonPrimary';
import { SecondFooter } from '../components/SecondFooter';
import login from '../assets/login.png'
import { useDispatch, useSelector } from 'react-redux';
import { getCheckin } from '../redux/feature/historySlice';

export const CheckInPage = () => {
  const {checkin} = useSelector ((state) => state.history)
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  
  const onFinish = async (values) => {
    dispatch(getCheckin(values))
  };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <Navbar />
      <div className='max-w-[1240px] mx-auto h-screen md:h-[670px]'>
        <div className='md:pt-40 pt-20'>
          <div className='bg-white md:mx-14 rounded-md shadow-md md:py-20 py-5 mx-2 px-5 md:h-[400px]'>
            <p className='text-gray-500 text-sm'>Start check-in with your departure date and booking reference</p>
            <div>
              <h2 className='text-lg '>Your Details</h2>
              <Form
                form={form}
                name="checkin"
                onFinish={onFinish}
                labelCol={{
                  flex: '150px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
              >
                <Form.Item
                  label="LastName"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Booking Reference Number"
                  name="bookingReferenceNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div className='flex justify-end'>
                  <div className='w-[30%]'>
                      <ButtonPrimary type="submit" title='Check In' />
                  </div>
                </div>
              </Form>
            </div>
          </div>
            <div className='md:hidden mt-20'>
              <img src={login} alt="/" />
            </div>
        </div>
      </div>
      <SecondFooter />
    </div>

  )
}
