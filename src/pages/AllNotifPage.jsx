import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { getNotification } from '../redux/feature/NotificationSlice'
import { SpeakerWaveIcon } from '@heroicons/react/20/solid'
import { Link, useParams } from 'react-router-dom'
import { TbHandClick, TbChecks } from 'react-icons/tb';
import { SecondFooter } from '../components/SecondFooter'

const AllNotifPage = () => {
    const {notification} = useSelector((state) => state.notification)
    const dispatch = useDispatch()
    const { id } = useParams();
    const userId = localStorage.getItem('id');
    
    useEffect(() => {
    dispatch(getNotification(id))
    }, [dispatch, id])

    return (
        <div className='min-h-screen bg-slate-100 '>
            <Navbar/>
            <div className='max-w-[1240px] mx-auto px-5 md:px-14 pb-10 '>
                <div className='pt-[100px] min-h-screen'>
                    <div className='font-semibold text-blue-600 text-xl mb-5 bg-yellow-400 w-fit px-4 py-1 rounded-[100px]'>All Notification</div>
                    {
                        notification?.notifications?.map((e, i) => (
                        <div key={i} className=' pb-5 '> 
                            <div className={`${ e?.read ? 'bg-gray-300' : 'bg-blue-600' } border-b-2 border-white shadow-md rounded-md`}>
                                <Link 
                                    to={`/notification/${userId}/${e?.id}`}
                                    className='flex flex-row gap-5 items-center justify-between py-3 px-2 md:px-0'>
                                        <div className='flex flex-row'>
                                            <div className="flex items-center">
                                                <SpeakerWaveIcon className={`${ e?.read ? 'text-black' : 'text-white' } h-16 w-16 m-2 md:mx-5`} />
                                            </div>
                                            <div className='flex flex-col justify-center items-start ml-2 md:ml-5'>
                                                <p className={`${ e?.read ? 'text-black' : 'text-white' } mb-2 font-semibold`}>
                                                    {e?.title}
                                                </p>
                                                <p className={`${ e?.read ? 'text-black' : 'text-white' } font-light mb-0`}>
                                                    {e?.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='hidden md:flex'>
                                            {e?.read ? <TbChecks className='text-semibold text-black text-[2rem] mr-5'/> 
                                            : 
                                            <TbHandClick className='text-semibold text-white text-[2rem] mr-5'/>}
                                        </div>
                                </Link>
                            </div>
                        </div>
                        )) 
                    }
                </div>  
            </div>
            <Footer />
            <SecondFooter/>
        </div>
    )
}

export default AllNotifPage