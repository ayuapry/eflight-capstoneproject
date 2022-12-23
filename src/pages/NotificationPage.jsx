import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getNotification } from '../redux/feature/NotificationSlice'
import ScrollToTop from '../components/ScrollToTop'
import { SpeakerWaveIcon } from '@heroicons/react/20/solid'

export const NotificationPage = () => {
  const {notification} = useSelector((state) => state.notification)
  const dispatch = useDispatch()
  const {id} = useParams()

  
  useEffect(() => {
    dispatch(getNotification(id))
  })
  return (
  <div className='h-screen bg-slate-100'>
    <ScrollToTop />
    <Navbar />
    <div className='max-w-[1240px] mx-auto md:px-14 bg-slate-100 '>
      <div className='pt-[100px] h-screen'>
        <button className='font-semibold text-white text-xl mb-5 bg-blue-600 hover:bg-blue-300  px-4 py-1 rounded-[100px]'>All Notification</button>
        {notification?.notifications.slice(0,3).map((e, i) => (
        <div key={i} className=' pb-5 '> 
          <article className='border-b-2 border-white bg-blue-600 shadow-md rounded-md '>
            <div className='flex gap-5 items-center'>
              <div className=" mb-4 space-x-4 mt-5">
                <SpeakerWaveIcon className='h-16 w-16 text-white mx-5' />
                {/* <img className="w-[200px] h-[100px] object-contain rounded-full" src='https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0' alt="" /> */}
              </div>
              <div className='mt-5'>
                <p className="mb-2 text-semibold text-white">{e?.title}</p>
                <p className="mb-5 font-light text-white">{e?.description}</p>
              </div>
            </div>
          </article>
        </div>
        ))}
      </div>  
  </div>
    <Footer />
  </div>
  )
}
