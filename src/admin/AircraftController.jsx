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
    </div>
  )
}
