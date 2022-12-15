import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'    
import { Button, DatePicker, Form, Input, Select } from 'antd';
import ButtonPrimary from './ButtonPrimary';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile, getCity } from '../redux/feature/UserSlice';
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
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCity())
    }, [])

    const onFinish = (values) => {
        dispatch(editProfile(values))
        console.log(values);
    };

    const {id} = useParams()
    const [fullName, setFullName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    
    // const updateProfile = () => {
    //     axios.put(`${process.env.REACT_APP_BASE_URL}/user/update/${id}`, {
    //         fullName: fullName,
    //         birthDate: birthDate,
    //         gender: gender,
    //     })
    //     .then((response) => {
    //         window.location.reload()
    //     })
    // }

    // const getPropi = () => {
    //     axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`.then((response) => {
    //       setFullName(response.data.fullName);
    //       setBirthDate(response.data.birthDate);
    //       setGender(response.data.gender);
    //     }));
    //   };

    // useEffect(() => {
    //     getPropi();
    // }, [])
    

    if(!open) return null
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black'>
        <div className="bg-white p-2 rounded w-[500px]">
            <div className='flex items-center justify-between mb-7 '>
                <p className='font-semibold '>Edit Account</p>
                <button onClick={close}><AiOutlineClose /></button>
            </div>
            <div className='flex justify-between items-center'>
            <Form {...layout} name="update" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='fullName'
                    label="FullName"
                    rules={[
                    {
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
                    <Select placeholder="Gender" allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                {/* <Form.Item  
                    name="birthDate"
                    label="Birth Date"
                    rules={[
                    {
                        required: true,
                    },
                    ]}  >
                    <DatePicker name='birthDate'  style={{width:'100%'}} placeholder='Birth Date' />
                </Form.Item> */}
                <Form.Item
                    name={['birthDate']}
                    label="birthDate"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['cityId']}
                    label="cityId"
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
            {/* <form>
            <div className='border-2'>
                <input type="text" onChange={(e) => {
                    setFullName(e.target.value);
                }} placeholder='FullName' value={fullName} />
            </div>
            <div>
                 <input type="text" onChange={(e) => {
                    setBirthDate(e.target.value);
                }} placeholder='Birth Date' value={fullName} /> 
            </div>
            <div>
                <select
                  onChange={(event) => setGender(event.target.value)}
                  type="text"
                >
                  <option selected>Gender</option>
                  {gender === "WANITA" ? (
                    <option selected className="text-black" value="Wanita">
                      Wanita
                    </option>
                  ) : (
                    <option className="text-black" value="Pria">
                      Wanita
                    </option>
                  )}
                  {gender === "PRIA" ? (
                    <option selected className="text-black" value="Wanita">
                      Pria
                    </option>
                  ) : (
                    <option className="text-black" value="Pria">
                      Pria
                    </option>
                  )}
                </select>
            </div>
            </form> */}
            </div>
        </div>
    </div>
  )
}
