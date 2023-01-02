import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../redux/feature/UserSlice";
import { useState, useEffect } from "react";
import { getHistory } from "../redux/feature/historySlice";
import noFlightData from "../assets/NoFlightData.svg";

export const OrderHistory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { id } = useParams();
    const { history, loading } = useSelector((state) => state.history);
    const [sorting, setSorting] = useState('DESC')
  
    useEffect(() => {
      dispatch(getProfile(id));
      dispatch(getHistory(sorting));
    }, [dispatch, id, sorting]);
  
    const handleClick = (bookingId) => {
      navigate(`/detail-history/${bookingId}`);
    };

    if(loading){
      return <h2>Loading</h2>
    }  
  
    const noData = () => {
      return (
        <div className="flex justify-center items-center text-center">
          <div>
            <img src={noFlightData} className="h-66 pt-4" alt="/" />
            <p className="font-semibold mb-0 text-lg">
              You don't have a booking history
            </p>
            <p className="text-gray-400 md:text-base text-sm">
              Book your flight tickets now
            </p>
          </div>
        </div>
      );
    };
  
  return (
    <div className="mx-2 md:mt-[90px] md:ml-5 bg-white shadow-md rounded-md">
         <div className="grid md:grid-cols md:grid-cols-[75%_25%] px-4 my-4 border-b-2">
              <div className="">
                <h1>Order History</h1>
                <span className="text-gray-400">
                  This is the history of your trip
                </span>
              </div>
              <div className="my-4">
                <button className="border-2 px-2 py-2 rounded-full text-gray-600 hover:bg-slate-200 items-center  bg-slate-100 mr-2" onClick={() => setSorting('DESC')} >Recently </button>
                <button className="border-2 px-2 py-2 rounded-full text-gray-600 hover:bg-slate-200 items-center bg-slate-100 " onClick={() => setSorting('ASC')}>Long Ago</button>
              </div>
            </div>
        <div className="flex h-[500px] justify-center mt-10">
            <div className="flex flex-col overflow-y-auto scrollbar-hide">
            {history ? "" : noData()}
            {history?.length > 0 &&
              history.map((histo, i) => (
                <div key={i} className="mx-2 my-2">
                  <div className="bg-white w-full border-2 border-gray-100 shadow-md  md:h-[220px] px-14 md:px-4 py-3  rounded-md">
                    <div className="flex gap-2 pb-4">
                      <GiCommercialAirplane color="skyblue" />
                      <p>Flights</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Order ID: {histo.bookingId}
                    </p>

                    {histo?.departure?.data.slice(0, 1).map((city, i) => (
                      <>
                        <div key={i} className="flex gap-2 font-semibold">
                          <p>{city.schedule.originAirport.city}</p>
                          <BsArrowLeftRight />
                          <p>{city.schedule.destinationAirport.city}</p>
                        </div>
                      </>
                    ))}
                    <div className="md:flex gap-3 items-center text-sm">
                      <p>
                        {histo.bookingType} - {histo.adult} adults,{" "}
                        {histo.child} child
                      </p>
                      {histo?.departure?.data.slice(0, 1).map((data, i) => (
                        <>
                          <div key={i} className="flex gap-2">
                            <FaPlaneDeparture color="skyblue" />
                            <p>
                              {data.schedule.departureDate} .{" "}
                              {data.schedule.departureTime}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <FaPlaneArrival color="skyblue" />
                            <p>
                              {data.schedule.arrivalDate} .{" "}
                              {data.schedule.arrivalTime}
                            </p>
                          </div>
                          <div className="">
                            <p>
                              {data?.checkInStatus === true ? (
                                <div className="w-fit bg-green-500 rounded-full text-white px-3 py-1">
                                  Already checked in
                                </div>
                              ) : (
                                <div className="w-fit bg-red-500 rounded-full text-white px-3 py-1">
                                  Haven't checked in
                                </div>
                              )}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                    <p
                      className="text-end text-sm text-blue-600 hover:text-[#a6c2d0] pr-2 cursor-pointer"
                      onClick={() => handleClick(histo.bookingId)}
                    >
                      See Details
                    </p>
                  </div>
                </div>
              ))}
                </div>

            </div>
        </div>

  )
}
