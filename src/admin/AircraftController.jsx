import { PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAircraft } from '../redux/feature/AdminSlice';

export const AircraftController = () => {
    const { aircraft } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAircraft());
    }, [dispatch]);
  return (
    <div>
    {aircraft?.map((e,i) => (
    <div className='px-5 py-5'>
            <div className='bg-white shadow-md px-5'>
                <div className='py-3'>
                    <p>{e?.airlines?.airlineName} with id : <span className='text-gray-400'>{e.id}</span></p>
                    <div className='gap-0'>
                        <p>Model <span className='text-gray-400'>{e.model}</span> Manufacture: <span className='text-gray-400'>{e?.manufacture.name}</span></p>
                        <span>Total unit : {e.totalUnit}, with passenger capacity {e?.passengerCapacity} and Seat Arrangement {e?.seatArrangement} </span>
                    </div>
                </div>
            </div>

        </div>
        ))}
        
        {/* <section className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <h1 className="text-lg font-bold mb-3">Airport Controller </h1>
                    </div>
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-sm font-semibold text-left text-white bg-blue-600 border-b border-gray-600">
                                <th className="text-center px-2">IATA</th>
                                <th className="text-center">Airport Name</th>
                                <th className="text-center">City Code</th>
                                <th className="text-center">City</th>
                                <th className="text-center">Country Code</th>
                                <th className="text-center">Country</th>
                                <th className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {aircraft?.map((item, i) => {
                                return (
                                <tr className="text-gray-700 hover:bg-gray-100" key={i}>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.id}
                                    </td>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.name}
                                    </td>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.cityCode}
                                    </td>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.city}
                                    </td>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.countryCode}
                                    </td>
                                    <td className={` py-1 px-2 text-xs border text-center `}>
                                    {item.country}
                                    </td>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                        <div className='flex justify-between cursor-pointer'>
                                            <div><PlusCircleIcon className='w-5 h-5 text-blue-600' /></div>
                                            <div><PencilIcon className='w-5 h-5 text-yellow-400' /></div>
                                            <div><TrashIcon className='w-5 h-5 text-red-400' /></div>
                                        </div>
                                    <span
                                        className={`px-2 py-1 font-semibold leading-tight  rounded-sm `}
                                    >
                                    </span>
                                    </td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </section> */}

        
    </div>
  )
}
