import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoText from '../assets/LogoText.png'
import { Dropdown } from 'antd';
import {MdCircleNotifications} from 'react-icons/md'
import { BellIcon } from '@heroicons/react/20/solid';

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
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Logout
        </a>
      ),
    },
  ];
export const Navbar = () => {
    const [select, setSelect] = useState('')
    return (
    <div className='py-3 w-screen bg-white fixed z-50'>
        <div className='flex justify-between items-center px-5 max-w-7xl mx-auto md:px-20'>
            {/* <div className='flex gap-3'> */}
                <div className='md:hidden'>
                <Dropdown menu={{items,}} placement="bottom" arrow >
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </Dropdown>
                </div>
                <Link to='/' className='flex items-center'>
                    <img src={LogoText} className='w-40' alt="" />
                </Link>
                <ul className='hidden md:flex gap-3 md:text-md mt-3'>
                  <a href='#Destination' className='hover:text-blue-600 hover:font-semibold'>Destination</a>
                  <a href='#Booking' className='hover:text-blue-600 hover:font-semibold'>Booking</a>
                  <a href='#Services' className='hover:text-blue-600 hover:font-semibold'>Services</a>
                </ul>
            {/* </div> */}

            <div className='flex gap-3 items-center md:w-40 justify-end'>
                <div className="filter-dropdowns">
                    <div className="relative inline-block text-left">
                    <div className='h-8 w-8 rounded-full'>
                    <BellIcon size={38} onClick={() => setSelect(!select)} className='cursor-pointer text-gray-400' />
                    </div>
                    <div 
                    className={`absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
                    ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="menu-button" 
                    tabIndex="-1"
                    >
                    <div className='mt-3'>
                    <p className='font-semibold'>Lorem, ipsum.</p>
                    <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className='mt-3'>
                    <p className='font-semibold'>Lorem, ipsum.</p>
                    <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className='mt-3'>
                    <p className='font-semibold'>Lorem, ipsum.</p>
                    <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <Link to='/notification' className='flex justify-end mt-6 text-blue-400 cursor-pointer hover:text-blue-200'>view all ...</Link>
                    </div>
                    </div>
                    </div>
                <div className='hidden md:flex'>
                    <Dropdown menu={{items,}} placement="bottom" arrow >
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </Dropdown>
                </div>
            </div>
        </div>
        
    </div>
  )
}
