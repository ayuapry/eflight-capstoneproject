import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonBorder from '../components/ButtonBorder';
import LoginBg from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { SecondFooter } from '../components/SecondFooter';
import googleIcon from '../assets/google.png';
import { useDispatch, useSelector } from 'react-redux';
import { LoginEmail } from '../redux/feature/authSlice';

export default function LoginPage() {
    const navigate = useNavigate()
    const {login, loading} = useSelector ((state) => state.auth)
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(LoginEmail(values))
        // navigate('/')
      };

  return (
    <div className='h-screen'>
    <div className='max-w-7xl mx-auto my-auto grid lg:grid-cols-2 items-center h-[90vh]'>
        <div className='hidden ml-20 p-2 lg:w-[100%] lg:block'>
            <img src={LoginBg} />
        </div>
        <div className='items-center'>
        <div className='lg:ml-auto lg:mr-20 mx-4 rounded-lg lg:p-12 p-2 lg:shadow-md lg:shadow-gray-400 lg:w-[70%] lg:border-t-2 items-center bg-white'>
            <h1 className='text-2xl text-slate-700 font-bold mb-6'>Login</h1>
              <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
              >
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
                      <Input suffix={<MailOutlined />} className="round-input" placeholder="Email Address" />
                  </Form.Item>

                  <Form.Item
                      name="password"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your Password!',
                          },
                      ]}
                  >
                      <Input.Password
                          className="round-input"
                          type="password"
                          placeholder="Password"
                      />
                  </Form.Item>

                  <Form.Item>
                    <ButtonPrimary type="submit" title="Login" />
                    <div className='flex justify-center'>
                    <div className='border-b-2 border-slate-700 w-20 mb-6 mr-2'></div>
                    <p className='text-center text-slate-700 mt-2'>Or</p>
                    <div className='border-b-2 border-slate-700 w-20 mb-6 ml-2'></div>
                    </div>
                    <ButtonBorder title="Login With Google" img={googleIcon}/>
                    <div className='flex'>
                    <p className='mr-2 mt-4 mb-0 text-slate-700'>Don't have an accout?</p>
                    <a className='text-sky-600 mt-4 mb-0 hover:font-bold hover:text-sky-500' onClick={() => navigate(`/Register`)}> Register </a>
                    </div>
                  </Form.Item>
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