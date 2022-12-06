import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { FaUserCircle} from 'react-icons/fa'
import { Select, Form, Input, DatePicker } from 'antd';
import { GiHandBag} from 'react-icons/gi'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { MdEventSeat} from 'react-icons/md'
import { SeatModal } from '../components/SeatModal';
import ButtonPrimary from '../components/ButtonPrimary';

export const BookingPage = () => {
    const [Bmodal, setBmodal] = useState(false)
    const handleOnClose = () => setBmodal(false)
    const [formValues, setFormValues] = useState([]);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const submitForm = () => {
        setFormValues((prevFormValues) => [...prevFormValues]);
      };

      useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
      }, [formValues]);

    // const onFinish = (values) => {
    //     localStorage.setItem("values", JSON.stringify(value));
    //   };
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
            <div className=' bg-white shadow-lg rounded-md py-5 px-3 md:w-[1200px] md:mx-[100px]'>
                <div className='flex items-center gap-3'>
                    <FaUserCircle size={30} />
                    <div className='text-lg'>Passenger Details</div>  
                </div>
                <div className='bg-slate-100 rounded-md'>
                    <p className=' mt-5 py-3 px-3'>Passenger 1: Adults</p>
                </div>
                <div className='pt-1'>
                    <Form validateMessages={validateMessages}>
                        <Form.Item style={{width:'49%'}} >
                            <Select placeholder='Title'>
                                <Select.Option value="Mr.">Mr.</Select.Option>
                                <Select.Option value="Mrs.">Mrs.</Select.Option>
                                <Select.Option value="Ms.">Ms.</Select.Option>
                            </Select>
                            <span className='text-xs text-gray-400'>Mr/Mrs/Ms</span>
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
                                <Input name='firstName' onChange={handleChange} placeholder="FirstName and MidlleName" />
                                <span className='text-xs text-gray-400'>Fill in according to KTP / Passport / SIM (without punctuation and titles)</span>
                            </Form.Item>
                            <Form.Item
                                name={['LastName']}
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input name='lastName' onChange={handleChange} placeholder="LastName" />
                                <span className='text-xs text-gray-400'>As in KTP/Passport/SIM (without punctuation and title) & must be a single name.</span>
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
                                    <span className='text-xs text-gray-400'>Citizenship</span>
                            </Form.Item>
                            <Form.Item style={{width:'50%'}} name={['birthdate']}  >
                                <DatePicker name='birthDate'  onChange={handleChange} style={{width:'100%'}} placeholder='Birth Date' />
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
                            <Input onChange={handleChange} name='pasportNumber' placeholder="Passport Number" />
                            <span className='text-xs text-gray-400'>Valid for at least 6 months from the date of departure</span>
                        </Form.Item>
                        <Form.Item 
                            style={{width:'50%'}}
                            name={['created_at']}>
                            <DatePicker name='created_at' onChange={handleChange} style={{width:'100%'}} placeholder='created at' />
                            <span className='text-xs text-gray-400'>The date the passport was issued</span>
                        </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>

            

            <div className='bg-white shadow-lg rounded-md mt-5 py-5 px-3  md:w-[1200px] md:mx-[100px]'>
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
                                <h1>Seat</h1>
                                <span className='font-light'>Choose a seat on the plane.</span>
                            </div>
                        </div>
                        </div>
                        <h3 className='text-blue-600 hover:text-blue-400 cursor-pointer' onClick={() => setBmodal(true)} >Order</h3>
                    </div>
                    <div className='flex gap-4 justify-between mt-5 items-center'>
                        <div className='flex gap-4'>
                        <GiHandBag size={25} />
                        <div>
                            <h1>Baggage</h1>
                            <span className='font-light'>Increase the capacity of your luggage.</span>
                            <Form.Item className='mt-3'>
                                <Select placeholder='Baggage'>
                                    <Select.Option value="No Baggage">No Baggage</Select.Option>
                                    <Select.Option value="10kg">10kg - Rp 50.000</Select.Option>
                                    <Select.Option value="15kg">15kg - Rp 100.000</Select.Option>
                                    <Select.Option value="20kg">20kg - Rp 150.000</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-[100px] mr-[120px] mt-10 '>
                {/* <button className='md:w-[700px] bg-yellow-400 hover:bg-yellow-300 py-2 rounded-full' onSubmit={submitForm}>Booking</button> */}
                <ButtonPrimary type="submit" title="Booking Now"/> 
            </div>
        </div>
        <SeatModal open={Bmodal} close={handleOnClose} />
    </div>
  )
}
