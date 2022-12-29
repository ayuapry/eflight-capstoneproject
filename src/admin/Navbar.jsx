import React from 'react'

export const Navbar = () => {
  return (
    <div className='bg-blue-600 h-[80px]'>
        <div className='flex justify-end'>
                  <ul className='flex gap-4 mx-5 my-5'>
                    <li className='bg-red-600 px-3 py-3 rounded-md text-white hover:bg-red-400 cursor-pointer'>Add</li>
                    <li className='bg-green-600 px-3 py-3 rounded-md text-white hover:bg-green-400 cursor-pointer'>Update</li>
                    <li className='bg-yellow-400 px-3 py-3 rounded-md text-white hover:bg-yellow-200 cursor-pointer'>Delete</li>
                  </ul>
                </div>
    </div>
  )
}
