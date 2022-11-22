import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {Link, useNavigate} from 'react-router-dom'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [select, setSelect] = useState('')
    const handleClick = () => setNav(!nav)
    const [isScrolled, setIsScrolled] = useState(false)
    // const navigate = useNavigate();

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
    <header className={`${isScrolled && 'bg-[#ffff] shadow-lg'}`}>
    <div className='w-screen h-[80px] z-10 text-white font-light drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Link to='/' className='text-3xl font-bold ml-5 sm:text-4xl text-black cursor-pointer '>Binar Air</Link>  
                <ul className='hidden md:flex'>
                    {/* <li>Pesawat</li>
                    <li>Hotel</li> */}
                </ul>
            </div>
            
            <div className='hidden md:flex pr-4 items-center'>
                {/* <p>{userData?.displayName}</p> */}
                <div className="filter-dropdowns mr-5">
                    <div className="relative inline-block text-left">
                        <div>
                            {/* <button 
                                type="button" 
                                className="inline-flex w-44 md:w-56 justify-between rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                                id="menu-button" 
                                aria-expanded="true" 
                                aria-haspopup="true"
                                onClick={() => setSelect(!select)}
                            >
                                All Genres
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            </button> */}
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
                                {/* <ul className='mx-5'>
                                    <li>This is Notification</li>
                                    <li>This is Notification</li>
                                    <li>This is Notification</li>
                                </ul> */}
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
                                <p className='flex justify-end mt-6 text-blue-400 cursor-pointer'>view all ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Link to='/profile' className='mx-5'><IoMdNotifications size={30} color='black' /></Link> */}
                <Link to='/register' className='mt-3 mr-5 bg-[#FFD24C] border-2 text-black font-light rounded-lg hover:bg-transparent hover:border-[#FFD24C] text-center  px-8 py-3 mb-4'>Sign Up</Link>
            </div>

            <div className='md:hidden mr-4 cursor-pointer' onClick={handleClick}>
                {!nav ? <AiOutlineMenu color='black' size={30} className='cursor-pointer' /> : <AiOutlineClose color='black' size={40} className='w-5 cursor-pointer ' />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-7 text-black pb-10 '}>
            <li className='border-b-2 py-2 border-[#FFE69A] w-full'>Pesawat</li>
            <li className='border-b-2 py-2 border-[#FFE69A] w-full'><Link to='/profile'>Profile</Link></li>
           
            <div className='flex flex-rows gap-3 justify-end my-4'>
                <Link to='/login' className='bg-transparent border-2 border-[#FFE69A] text-black rounded-lg hover:bg-[#FFE69A] font-semibold text-center px-8 py-3 mb-4'>Sign In</Link>
                <Link to='/register' className='bg-[#FFD24C] border-[#FFD24C] text-black font-bold rounded-lg hover:bg-[#FFE69A] text-center text-white-600 px-8 py-3 mb-4'>Sign Up</Link>
            </div>
        </ul>
    </div>
        </header>
  )
}
