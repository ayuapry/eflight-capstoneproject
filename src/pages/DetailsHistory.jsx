import { ArrowLeftIcon, ArrowRightIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary';
import { Navbar } from '../components/Navbar';
import { SecondFooter } from '../components/SecondFooter';
import { getHistory } from '../redux/feature/historySlice';

export const DetailsHistory = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const { history } = useSelector( (state) => state.history );

    useEffect(() => {
        dispatch(getHistory(id))
    },[dispatch, id]); 
    console.log(history);

  return (
    <div className='bg-slate-100'>
        <Navbar />
        {history && history.map((e, i) => (
        <div className='max-w-[1240px] md:px-14 mx-auto bg-slate-100 md:h-screen'>
          <div className='grid md:grid-cols md:grid-cols-[60%_40%] gap-2'>
            <div className='bg-white mt-20 rounded-md shadow-md'>
              <div className='bg-slate-100 py-2 px-2 mx-3 my-3 rounded-full'>
                <div className='flex justify-between'>
                  <div className='flex font-bold items-center gap-1 mx-3'>
                    {e && e?.departure?.data.map(city => (
                      <>
                          <div>{city.schedule.originAirport.city}</div>
                          {/* <ArrowRightIcon className='h-4 w-4'  /> */}
                          <div>to</div>
                          <div>{city.schedule.destinationAirport.city}</div>
                      </>
                      ))}
                      <div className='bg-blue-600 rounded-full text-white text-sm py-1 px-2'>{e?.bookingType}</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='hidden md:flex text-gray-400 mx-3 font-medium'>Booking Id : {e?.bookingId}</div>
                  </div>
                </div>
              </div>

              <div className='mx-8'>
                
                {e && e?.departure?.data.map((item,i) => (
                  <div key={i}>
                    <div className='font-bold mb-2 text-blue-600'>Passenger Details</div>
                    <div className='grid md:grid-cols-[60%_40%] md:mb-2 text-sm '>
                      <div>Firstname : <span className='font-semibold'>{item?.firstName}</span></div>
                      <div>Lastname  : <span className='font-semibold'>{item?.lastName}</span></div>
                    </div>
                    <div className='grid md:grid-cols-[60%_40%] md:mb-2 text-sm'>
                      <div>Birth Date  : <span className='font-semibold'>{item?.birthDate}</span></div>
                      <div>citizenship : <span className='font-semibold'>{item?.citizenship}</span></div>
                    </div>
                    <div className='grid md:grid-cols-[60%_40%] md:mb-2 text-sm'>
                      <div>Passport Number  : <span className='font-semibold'>{item?.passportNumber}</span></div>
                      <div>Seat Code  <span className='font-bold text-blue-600'>{item?.aircraftSeat.seatCode}</span></div>
                    </div>
                    <div className='font-bold mb-2 mt-5 text-blue-600'>Flight Details</div>
                    <div className='grid md:grid-cols-[60%_40%] mb-2 text-sm'>
                      <div>From {item?.schedule?.originAirport?.name}</div>
                      <div className='text-gray-400'>{item?.schedule?.departureDate}</div>
                    </div>
                    <div className='grid md:grid-cols-[60%_40%] mb-2 text-sm'>
                      <div>To {item?.schedule?.destinationAirport?.name}</div>
                      <div className='text-gray-400'>{item?.schedule?.arrivalDate}</div>
                    </div>
                    <div className='grid md:grid-cols-[60%_40%] mb-2 text-sm'>
                      <div className='font-semibold'>Departure Time at {item?.schedule?.departureTime}</div>
                      <div className='font-semibold'> Arrive at {item?.schedule?.arrivalTime}</div>
                    </div>
                    <div className='grid md:grid-cols-[60%_40%] mt-7 mb-2 text-sm'>
                      <div className='font-semibold'>
                        Your booking reference number <span className='text-blue-600 font-bold'>{item?.bookingReferenceNumber}</span>
                        <p className='font-light cursor-pointer text-blue-600' onClick={() => (navigate('/checkin'))}>Check In Here</p>  
                      </div>
                      <div className='font-semibold'>
                      {(item?.checkInStatus === true) ?
                        <div className='w-fit bg-green-500 rounded-full text-white px-3 py-1'>Already checked in</div>
                        :
                        <div className='w-fit bg-red-500 rounded-full text-white px-3 py-1'>Haven't checked in</div>
                      }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {e && e?.departure?.data.map((item,i) => (
            <div key={i} className='bg-white rounded-md shadow-md md:mt-20 px-5 py-5 '>
              <p className='font-bold'>Amount Details</p>
              <div className='bg-slate-100 rounded-lg px-2 py-2'>
                <div className='flex justify-between mb-2'>
                  <div>Flight Ticket</div>
                  <div>{item?.schedule?.price?.display}</div>
                </div>
                <div className='flex justify-between mb-2'>
                  <div>Extra Bagage {item?.bagage?.extraBagage}kg</div>
                  <div>{item?.bagage?.price?.display}</div>
                </div>
                <div className='flex justify-between mb-2'>
                  <div>Seat Code {item?.aircraftSeat?.seatCode}</div>
                  <div>{item?.aircraftSeat?.price?.display}</div>
                </div>
                <div className='flex justify-between mt-5 mb-2 text-blue-600'>
                  <div className='font-bold'>Total Amount </div>
                  <div className='font-bold ite'>{e?.totalAmount?.display}</div>
                </div>
              </div>
              <p className='text-xs text-gray-400'>Ordered At {e?.orderedAt}</p>
              <div className='md:mt-40'>
                <ButtonPrimary title='Download Ticket Here' />
              </div>
            </div>
            ))}
          </div>
        </div>
      ))}
      <SecondFooter />
    </div>
  )
}
