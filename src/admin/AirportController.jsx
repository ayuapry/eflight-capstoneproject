import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/feature/homeSlice';

export const AirportController = () => {
    const { country } = useSelector((state) => state.homepage);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCountry());
    }, [dispatch]);
  return (
    <div className='px-5 py-5'>
        <section className="container mx-auto">
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="text-sm font-semibold text-left text-white bg-yellow-400 border-b border-gray-600">
                                <th className="text-center px-2">IATA</th>
                                <th className="text-center">Airport Name</th>
                                <th className="text-center">City Code</th>
                                <th className="text-center">City</th>
                                <th className="text-center">Country Code</th>
                                <th className="text-center">Country</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {country?.slice(0,22).map((item, i) => {
                                return (
                                <tr className="text-gray-700 hover:bg-gray-100" key={i}>
                                    <td className="px-2 py-1 text-xs border truncate overflow-hidden">
                                    {item.iata}
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
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </section>
    </div>
  )
}
