import React from 'react';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Alert } from 'antd';
import ButtonPrimary from '../components/ButtonPrimary';
import LoginBg from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { SecondFooter } from '../components/SecondFooter';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../redux/feature/AuthSlice';

export default function RegisterPage() {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const {register} = useSelector ((state) => state.auth)
    const dispatch = useDispatch();
    const id =  localStorage.getItem('id');

    const onFinish = async (values) => {
        dispatch(Register(values))
    };

    const isRegistered = () => {
        navigate('/Login')
        window.location.reload(1)
    }

  return (
    <div className='flex flex-col justify-between h-screen'>
    <div className='max-w-7xl mx-auto my-auto grid lg:grid-cols-2 items-center h-[90vh]'>
        <div className='hidden ml-20 p-2 lg:w-[100%] lg:block'>
            <img src={LoginBg} alt='/' />
        </div>
        <div className='items-center pt-auto pb-auto'>
        <div className='lg:ml-auto lg:mr-20 mx-4 rounded-xl lg:px-12 p-2 lg:shadow-md lg:shadow-gray-400 lg:w-[70%] lg:border-t-2 items-end bg-white'>
        {id? (isRegistered()) :
        register.length?<div className='flex justify-center'><Alert message={register} type="error" showIcon className='w-full md:mt-4'/></div>:''}
            <h1 className='text-2xl font-bold my-6 text-slate-700'>Create your account</h1>
                  <Form
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      scrollToFirstError
                  >
                      <Form.Item
                          name="fullname"
                          rules={[
                              {
                                  required: true,
                                  message: 'Please input your fullname!',
                                  whitespace: true,
                              },
                          ]}
                      >
                          <Input className="round-input" suffix={<UserOutlined />} placeholder="Fullname" />
                      </Form.Item>

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
                          name="password-validation"
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
                      <div className='flex mb-6'>
                        <p className='mr-2 mt-4 mb-0 text-slate-700'>Have an accout?</p>
                        <a href className='text-[#46B3E6] mt-4 hover:font-bold hover:text-[#46B3E6]' onClick={() => navigate(`/Login`)}> Login </a>
                        </div>
                  </Form>
        </div>
        </div>
        <div className='px-4 lg:hidden'>
            <img src={LoginBg} alt='/'/>
        </div>
    </div>
    <SecondFooter />
    </div>
  )
}
