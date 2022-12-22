import React, { useEffect } from 'react'
import { DatePicker, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTitel } from '../redux/feature/BookingSlice';


export const FormBooking = () => {
    const {titel, bagage, benefit } = useSelector((state) => state.booking);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTitel())      
    },[dispatch]); 
    return (
    <div>
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
  )
}
