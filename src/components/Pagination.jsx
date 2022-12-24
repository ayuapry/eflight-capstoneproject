import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getPagination } from '../redux/feature/promoSlice';

const Pagination = () => {
    const [count, setCount] = useState(0-1)
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(count){
            dispatch(getPagination(count))
        }
    },[dispatch, count]); 
    console.log(count)

  return (
    <div className="flex items-center justify-between  bg-gray-1s00 px-4 py-3 sm:px-6">
      <div className="flex flex-1 items-center justify-center">
          <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <div
                    className="relative inline-flex items-center rounded-l-md cursor-pointer border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    onClick={()=>{
                      if(count <= 0-1) return setCount(0-1);
                        setCount(prev => prev-1)}}>
                      <span className="sr-only" >Previous</span>
                      <FaArrowLeft className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span
                    className={`relative inline-flex items-center cursor-pointer border ${count === 0-1 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
                    onClick={()=>(setCount(0-1))}>
                    1
                  </span>
                  <span
                    className={`relative inline-flex items-center border cursor-pointer ${count === 1 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
                    onClick={()=>(setCount(1))}>
                    2
                  </span>
                  <div
                    className="relative inline-flex items-center rounded-r-md cursor-pointer border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    onClick={()=>{
                      if(count >= 1) return setCount(1);
                        setCount(prev => prev+1)}}>
                      <span className="sr-only " >Next</span>
                      <FaArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
              </nav>
          </div>
      </div>
    </div>
  )
}

export default Pagination