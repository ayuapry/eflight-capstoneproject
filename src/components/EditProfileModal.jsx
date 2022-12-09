import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'    
import { Button, DatePicker, Form, Input, Select } from 'antd';
import ButtonPrimary from './ButtonPrimary';
const { Option } = Select;

const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 20,
    },
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

export const EditProfileModal = ({open, close}) => {
    const handleOnClose = (e) => {
        if(e.target.id === 'container') 
        close()
      }
    
    const onFinish = (values) => {
        console.log(values);
    };

    if(!open) return null
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        <div className="bg-white p-2 rounded w-[500px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Edit Account</p>
                <button onClick={close}><AiOutlineClose /></button>
            </div>
            <div className='flex justify-between items-center'>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select placeholder="Select a option and change input text above" allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item  name="birth_Date"
                    label="Birth Date"
                    rules={[
                    {
                        required: true,
                    },
                    ]}  >
                    <DatePicker name='birthDate'  style={{width:'100%'}} placeholder='Birth Date' />
                </Form.Item>
                <Form.Item
                    name={['city']}
                    label="City"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <div className="w-full flex items-center justify-end px-[1.5rem] md:px-[4rem] py-[1rem] cursor-pointer"  >
                    <div className='w-fit'>
                        <ButtonPrimary type='submit' title='Edit Profile' />
                    </div>
                </div>
            </Form>
            </div>
        </div>
    </div>
  )
}
