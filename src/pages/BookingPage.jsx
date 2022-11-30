import React from 'react'
import { Navbar } from '../components/Navbar'
import { FaUserCircle} from 'react-icons/fa'
import { Select, Form, Input, DatePicker } from 'antd';
import { GiHandBag} from 'react-icons/gi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { MdEventSeat} from 'react-icons/md'
import ButtonPrimary from '../components/ButtonPrimary';

export const BookingPage = () => {
    const onFinish = (values) => {
        console.log(values);
      };
      const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    return (
    <div className='bg-slate-100'>
        <Navbar />
        <div className='py-[100px] mx-5 md:mx-14'>
            <div className=' bg-white shadow-lg rounded-md py-5 px-3 md:w-[700px]'>
                <div className='flex items-center gap-3'>
                    <FaUserCircle size={30} />
                    <div className='text-lg'>Passenger Details</div>  
                </div>
                <div className='bg-slate-100 rounded-md'>
                    <p className=' mt-5 py-3 px-3'>Passenger 1: Adults</p>
                </div>
                <div className='pt-1'>
                    <Form onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item style={{width:'49%'}} >
                            <Select placeholder='Title'>
                                <Select.Option value="Mr.">Mr.</Select.Option>
                                <Select.Option value="Mrs.">Mrs.</Select.Option>
                                <Select.Option value="Ms.">Ms.</Select.Option>
                            </Select>
                        </Form.Item>
                        {/* <div className='flex gap-2'> */}
                            <Form.Item
                                name={['FirstName']}
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input placeholder="FirstName and MidlleName" />
                            </Form.Item>
                            <Form.Item
                                name={['LastName']}
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input placeholder="LastName" />
                            </Form.Item>
                        {/* </div> */}
                        <div className='flex gap-2'>
                            <Form.Item style={{width:'50%'}}>
                                <Select 
                                    showSearch
                                    placeholder="Citizenship       "
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                    {
                                        value: 'Indonesia',
                                        label: 'Indonesia',
                                    },
                                    {
                                        value: 'Germany',
                                        label: 'Germany',
                                    },
                                    {
                                        value: 'England',
                                        label: 'England',
                                    },
                                    ]}
                                    />
                            </Form.Item>
                            <Form.Item style={{width:'50%'}} name={['birthdate']}  >
                                <DatePicker style={{width:'100%'}} placeholder='Birth Date' />
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
                            <Input placeholder="Passport Number" />
                        </Form.Item>
                        <Form.Item 
                            style={{width:'50%'}}
                            name={['created_at']}>
                            <DatePicker style={{width:'100%'}} placeholder='created at' />
                        </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>

            <div className='bg-white shadow-lg rounded-md mt-5 py-5 px-3 md:w-[700px]'>
                <div className='flex items-center gap-3'>
                    <AiOutlineAppstoreAdd size={30} />
                    <div className='text-lg'>Extra Facilities</div>  
                </div>
                <div  className='mt-5'>
                    <div className='flex justify-between items-center pb-5 border-b-2'>
                        <div className='flex justify-between items-center gap-4'>
                        <GiHandBag size={25} />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1>Baggage</h1>
                                <span className='font-light'>Increase the capacity of your luggage.</span>
                            </div>
                        </div>
                        </div>
                        <h3 className='text-blue-600 hover:text-blue-400 cursor-pointer'>Order</h3>
                    </div>

                    <div className='flex gap-4 justify-between mt-5 items-center'>
                        <div className='flex gap-4'>
                        <MdEventSeat size={25} />
                        <div>
                            <h1>Seat</h1>
                            <span className='font-light'>Choose a seat on the plane.</span>
                        </div>
                        </div>
                        <h3 className='text-blue-600 hover:text-blue-400 cursor-pointer'>Order</h3>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <button className='md:w-[700px] bg-yellow-400 hover:bg-yellow-300 py-2 rounded-full '>Booking</button>
                {/* <ButtonPrimary type="submit" title="Booking Now"/>  */}
            </div>
        </div>
    </div>
  )
}
