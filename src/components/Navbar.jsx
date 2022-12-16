import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LogoText from '../assets/LogoText.png'
import { Dropdown } from 'antd';
import {MdCircleNotifications} from 'react-icons/md'
import userIcon from '../assets/userIcon.png'
import ButtonPrimary from './ButtonPrimary';
import { BellIcon, BellSlashIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../redux/feature/NotificationSlice';

export const Navbar = () => {
  const [select, setSelect] = useState('')
  const navigate = useNavigate()
  const token =  localStorage.getItem('token');

  const logout = async () => {
    localStorage.clear();
    navigate('/')
    setTimeout(function () {
        window.location.reload(1);
      }, 1500);
  };
  const items = [
    {
      key: '1',
      label: (
        <Link to='/history'>Profile</Link>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={logout}>
          Logout
        </div>
      ),
    },
  ];
  
  const {notification} = useSelector((state) => state.notification)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(getNotification(id))
    console.log(notification)
  },[dispatch, id]); 

    return (
    <div className='py-3 w-screen bg-white fixed z-50'>
        <div className='flex justify-between items-center px-5 max-w-7xl mx-auto md:px-20'>
            {/* <div className='flex gap-3'> */}
                <div className='md:hidden'>
                { token ? 
                  <Dropdown menu={{items,}} placement="bottom" arrow >
                    <img className="h-8 w-8 rounded-full bg-gray-400 p-1" src={userIcon} alt="profile" /> 
                  </Dropdown> :
                  <img className="h-8 w-8 rounded-full bg-gray-400 p-1" src={userIcon} alt="profile" onClick={()=>navigate("/Login")} />
                }
                </div>
                <a href='/#hero' className='flex items-center'>
                    <img src={LogoText} className='w-40' alt="" />
                </a>
                <ul className='hidden md:flex gap-3 md:text-md mt-3'>
                  <a href='/#Destination' className='hover:text-blue-600 hover:font-semibold'>Destination</a>
                  <a href='/#Booking' className='hover:text-blue-600 hover:font-semibold'>Booking</a>
                  <a href='/#Services' className='hover:text-blue-600 hover:font-semibold'>Services</a>
                </ul>
            {/* </div> */}

            <div className='flex gap-3 items-center md:w-40 justify-end'>
                <div className="filter-dropdowns">
                    <div className="relative inline-block text-left">
                    {(token) ?
                    <div className='h-8 w-8 rounded-full'>
                    <BellIcon size={38} onClick={() => setSelect(!select)} className='cursor-pointer text-gray-400' />
                    </div>:
                    <div></div>

                    }
                    {(token) ? 
                    <div 
                    className={`absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
                    ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="menu-button" 
                    tabIndex="-1"
                    >
                    {notification.length > 0 ? (
                      notification.map((notif, i) => (
                        <div>
                          <div key={i} className='mt-3'>
                            <p className='font-semibold'>{notif?.notification.title}Lorem, ipsum.</p>
                            <span>{notif?.notification.description}</span>
                          </div>
                          <Link to='/notification' className='flex justify-end mt-6 text-blue-400 cursor-pointer hover:text-blue-200'>view all ...</Link>
                        </div>
                      ))
                    ):(
                      <div>
                        <div className='h-10 w-10 flex items-center text-center mx-auto my-5'>
                          <BellSlashIcon className='text-gray-200' />
                        </div>
                          <p className='mx-auto text-center text-gray-300'>You don't have any notifications ..</p>
                      </div>
                    )}
                    
                  
                    </div>
                    :
                    <div>
                      
                    </div>
                    }

                    </div>
                    </div>
                <div className='hidden md:flex cursor-pointer'>
                    <Dropdown menu={{items}} placement="bottom" arrow >
                        {
                          token ? 
                          <img className="h-8 w-8 rounded-full bg-gray-400 p-1" src={userIcon} alt="" /> :
                          <ButtonPrimary title="Login" click={() => navigate("/Login")}/>
                        }
                    </Dropdown>
                </div>
              </div>
            </div>
        </div>
  )
}
