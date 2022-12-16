import React from 'react'
import { Navbar } from '../components/Navbar'

export const Coba = () => {
  return (
    <div>
        <Navbar />
          <div className='max-w-[1240px] mx-auto px-4 bg-slate-100 md:h-screen'>
          <div className=' pb-5 '> 
          <article className='border-b-2 mx-[20px] border-gray-400 bg-white'>
            <div className='flex gap-5 items-center'>
              <div className=" mb-4 space-x-4 mt-[150px]">
                <img className="w-[200px] h-[100px] object-contain rounded-full" src='https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0' alt="" />
              </div>
              <div className='mt-5'>
                <p className="mb-2 text-semibold text-black dark:text-gray-400">Lorem, ipsum dolor.</p>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, facilis!</p>
                <p className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</p>
              </div>
            </div>
          </article>
        </div>
          </div>

    </div>
  )
}
