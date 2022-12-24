import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
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
      {/* <div className="flex flex-1 justify-between sm:hidden">
        <span
       
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </span>
        <div
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </div>
      </div> */}
      <div className="flex flex-1 items-center justify-center">
      {/* <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center"> */}
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div
              className="relative inline-flex items-center rounded-l-md cursor-pointer border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              onClick={()=>{
                if(count <= 0-1) return setCount(0-1);
                 setCount(prev => prev-1)}}
            >
              <span className="sr-only" >Previous</span>
              <FaArrowLeft className="h-5 w-5" aria-hidden="true" />
            </div>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <span
           
            //   aria-current="page"
              className={`relative inline-flex items-center cursor-pointer border ${count === 0-1 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
              onClick={()=>(setCount(0-1))}
            >
              1
            </span>
            <span
           
              className={`relative inline-flex items-center border cursor-pointer ${count === 1 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
              onClick={()=>(setCount(1))}
            >
              2
            </span>
            {/* <span
           
                className={`relative inline-flex items-center border cursor-pointer ${count === 3 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
              onClick={()=>(setCount(3))}
            >
              3
            </span> */}
            {/* <span
           
                className={`relative inline-flex items-center border cursor-pointer ${count === 4 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
              onClick={()=>(setCount(4))}
            >
              4
            </span>
            <span
           
                className={`relative inline-flex items-center border cursor-pointer ${count === 5 ? 'border-indigo-500 z-30 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600' : 'border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'} focus:z-20`}
              onClick={()=>(setCount(5))}
            >
              5
            </span> */}
            
            <div
              className="relative inline-flex items-center rounded-r-md cursor-pointer border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              onClick={()=>{
                if(count >= 1) return setCount(1);
                 setCount(prev => prev+1)}}
            >
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