import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoText from '../assets/LogoText.png'
import { Dropdown } from 'antd';
import {MdCircleNotifications} from 'react-icons/md'

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
    <div className='h-[90px] w-screen bg-white py-5 fixed z-50'>
        <div className='flex justify-between items-center md:mx-20'>
            <div className='flex gap-3 '>
                <div className='md:hidden'>
                <Dropdown menu={{items,}} placement="bottom" arrow >
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </Dropdown>
                </div>
                <Link to='/' className='flex items-center'>
                    <img src={LogoText} className='w-40 lg:block' alt="" />
                </Link>
            </div>
            <div className='text-[#171717] mt-3'>
              <ul className='hidden md:flex gap-3 md:text-lg'>
                  <a href='#Destination' className='hover:text-blue-600 hover:font-semibold'>Destination</a>
                  <a href='#Booking' className='hover:text-blue-600 hover:font-semibold'>Booking</a>
                  <a href='#Services' className='hover:text-blue-600 hover:font-semibold'>Services</a>
              </ul>
            </div>    
            <div className='flex gap-3 items-center'>
                <div className='flex items-center'>
                <div className="filter-dropdowns">
                    <div className="relative inline-block text-left">
                        <div className='h-8 w-8 rounded-full'>
                            <MdCircleNotifications size={38} color='blue' onClick={() => setSelect(!select)} className='cursor-pointer' />
                        </div>
                        <div 
                            className={`absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black 
                            ring-opacity-5 focus:outline-none transition ease-out duration-100 ${select ? 'visible transform opacity-100 scale-100' : 'invisible transform opacity-0 scale-95'}`}
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                            <div className="p-5 text-black" role="none">
                                {/* {
                                    genre && genre.map((item, index) => (
                                        <a href={`/Genres/${item.name}`} className="block px-4 py-2 text-sm" key={index} role="menuitem" tabIndex="-1" id="menu-item-0">
                                            {item.name}
                                        </a>
                                    ))
                                } */}

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
