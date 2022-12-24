import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LogoText from '../assets/LogoText.png'
import { Dropdown } from 'antd';
import userIcon from '../assets/userIcon.png'
import ButtonPrimary from './ButtonPrimary';
import { BellIcon, BellSlashIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../redux/feature/NotificationSlice';
import Swal from 'sweetalert2';

export const Navbar = () => {
  const [select, setSelect] = useState('')
  const navigate = useNavigate()
  const token =  localStorage.getItem('token');

  const logout = () => {
    Swal.fire({
      title: 'Do you want to Log Out?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/');
      } else if (result.isDenied) {
        Swal.fire('Log Out Failed!', '','error');
      }
    });
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
                  <img className="h-8 w-8 rounded-full bg-gray-400 p-1" src={userIcon} alt="profile" onClick={()=>navigate("/login")} />
                }
                </div>
                <a href='/' className='flex items-center'>
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
                    <div>
                    <div className=' h-4 w-4 bg-blue-600 ml-5 -mb-3 rounded-full border-1 border-gray-300'>
                      <p className='text-xs text-center text-white'>{notification?.unreadCount}</p>
                    </div>
                    <div className='h-8 w-8 rounded-full my-0 '>
                    <BellIcon size={30} onClick={() => setSelect(!select)} className='cursor-pointer text-gray-400' />
                    </div>
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
                    {notification?.notifications?.length > 0 ? (
                      notification?.notifications?.map((notif, i) => (
                        <div className='mx-3 my-3'>
                          <div key={i} className=''>
                            <span className='font-semibold'>{notif?.title}</span><br />
                            <span className='text-sm'>{notif?.description}</span>
                          </div>
                          <Link to='/notification' className='flex justify-end mt-6 text-blue-400 cursor-pointer hover:text-blue-200 b-3'>view all ...</Link>
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
                          <ButtonPrimary title="LOGIN" click={() => navigate("/login")}/>
                        }
                    </Dropdown>
                </div>
              </div>
            </div>
        </div>
  )
}
