import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {IoMdNotifications, IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import {MdOutlineReceiptLong} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
import ButtonPrimary from './ButtonPrimary'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [select, setSelect] = useState('')
    const handleClick = () => setNav(!nav)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
              setIsScrolled(true)
            } else {
              setIsScrolled(false)
            }
          }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, )


    return (
    <header className={`${isScrolled && 'bg-white shadow-lg'}`}>
    <div className='w-screen h-[80px] z-10 text-white font-light drop-shadow-lg'>
        <div className='px-8 lg:px-16 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='text-3xl font-bold sm:text-4xl text-sky-600 cursor-pointer '>Binar<span className='text-yellow-400'>Air</span></Link>  
                <ul className='hidden md:flex'>
                    {/* <li>Pesawat</li>
                    <li>Hotel</li> */}
                </ul>
            </div>
            
            <div className='hidden md:flex items-center'>
                {/* <p>{userData?.displayName}</p> */}
                <div className="filter-dropdowns mr-5">
                    <div className="relative inline-block text-left">
                        <div>
                            <IoMdNotifications size={30} color='black' onClick={() => setSelect(!select)} className='cursor-pointer' />
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
                {/* <Link to='/profile' className='mx-5'><IoMdNotifications size={30} color='black' /></Link> */}
                <ButtonPrimary title='sign in' className='font-light' click={() => navigate('/login')} />
                {/* <Link to='/login' className='mt-3 bg-[#FFD24C] text-black font-light rounded-lg hover:bg-transparent hover:bg-[#FFE69A] text-center  px-8 py-3 mb-4'>Sign In</Link> */}
            </div>

            <div className='md:hidden cursor-pointer' onClick={handleClick}>
                {!nav ? <AiOutlineMenu color='black' size={30} className='cursor-pointer' /> : <AiOutlineClose color='black' size={40} className='w-5 cursor-pointer ' />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-7 text-black pb-10 '}>
            <div className='flex items-center gap-2'>
                <AiOutlineHome />
                <li className=' border-b-2 py-2 border-[#FFE69A] w-full'><Link to='/'>Home</Link></li>
            </div>
            <div className='flex items-center gap-2'>
                <IoMdNotificationsOutline />
                <li className=' border-b-2 py-2 border-[#FFE69A] w-full'><Link to='/notification'>Notification</Link></li>
            </div>
            <div className='flex items-center gap-2'>
                <AiOutlineUser />
                <li className=' border-b-2 py-2 border-[#FFE69A] w-full'><Link to='/history'>Profile</Link></li>
            </div>
            {/* <div className='flex items-center gap-2'>
                <MdOutlineReceiptLong />
                <li className=' border-b-2 py-2 border-[#FFE69A] w-full'><Link to='/history'>Order History</Link></li>
            </div> */}

            <div className='flex flex-rows gap-3 justify-end my-4'>
                <Link to='/Login' className='bg-transparent border-2 border-[#FFE69A] text-black rounded-lg hover:bg-[#FFE69A] font-semibold text-center px-8 py-3 mb-4'>Sign In</Link>
                <Link to='/Register' className='bg-[#FFD24C] border-[#FFD24C] text-black font-bold rounded-lg hover:bg-[#FFE69A] text-center text-white-600 px-8 py-3 mb-4'>Sign Up</Link>
            </div>
        </ul>
    </div>
        </header>
  )
}
