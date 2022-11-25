import React, {useState} from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import ButtonPrimary from '../components/ButtonPrimary';
import LoginBg from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { SecondFooter } from '../components/SecondFooter';

export default function Register() {
    const navigate = useNavigate()
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/')
    };

  return (
    <div>
    <div className='grid lg:grid-cols-2 items-center h-screen'>
        <div className='hidden p-2 lg:w-[120%] lg:block'>
            <img src={LoginBg} />
        </div>
        <div className='items-center pt-auto pb-auto'>
        <div className='lg:ml-auto lg:mr-6 mx-4 rounded-lg lg:p-12 p-2 lg:shadow-md lg:shadow-gray-400 lg:w-[70%] lg:border-t-2 items-center bg-white'>
            <h1 className='text-2xl font-bold mb-6 text-slate-700'>Create your account</h1>
                  <Form
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      scrollToFirstError
                  >
                      <Form.Item
                          name="name"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your name!',
                                  whitespace: true,
                              },
                          ]}
                      >
                          <Input className="round-input" suffix={<UserOutlined />} placeholder="Name" />
                      </Form.Item>

                      {/* <Form.Item
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
      <Input className="round-input" suffix={<UserOutlined />} placeholder="Last Name"/>
      </Form.Item> */}

                      <Form.Item
                          name="email"
                          rules={[
                              {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!',
                              },
                              {
                                  required: true,
                                  message: 'Please input your E-mail!',
                              },
                          ]}
                      >
                          <Input className="round-input" suffix={<MailOutlined />} placeholder="Email Address" />
                      </Form.Item>

                      <Form.Item
                          name="password"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your password!',
                              },
                          ]}
                          hasFeedback
                      >
                          <Input.Password className="round-input" placeholder="Password" />
                      </Form.Item>

                      <Form.Item
                          name="password_confirmation"
                          dependencies={['password']}
                          hasFeedback
                          rules={[
                              {
                                  required: true,
                                  message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                  validator(_, value) {
                                      if (!value || getFieldValue('password') === value) {
                                          return Promise.resolve();
                                      }

                                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                  },
                              }),
                          ]}
                      >
                          <Input.Password className="round-input items-center" placeholder="Password Confirmation" />
                      </Form.Item>

                      <ButtonPrimary type="submit" title="Register Now" />
                      <div className='flex'>
                        <p className='mr-2 mt-4 mb-0 text-slate-700'>Have an accout?</p>
                        <a className='text-[#46B3E6] mt-4 hover:font-bold hover:text-[#46B3E6]' onClick={() => navigate(`/Login`)}> Login </a>
                        </div>
                  </Form>
        </div>
        </div>
        <div className='px-4 lg:hidden'>
            <img src={LoginBg} />
        </div>
    </div>
    <SecondFooter />
    </div>
  )
}
