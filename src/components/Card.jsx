import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/Logo.png";
import {
  TbPlaneDeparture,
  TbPlaneInflight,
  TbCalendarEvent,
  TbCalendarStats,
} from "react-icons/tb";
import { BiChevronDown, BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";
import { FaBabyCarriage, FaChild } from "react-icons/fa";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getAge, getCabinClass } from "../redux/feature/homeSlice";
import ButtonPrimary from "./ButtonPrimary";

export default function Card() {
  const { country, age, cabinClass } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getAge());
    dispatch(getCabinClass());
  }, [dispatch]);

  const [inputCity, setInputCity] = useState("");
  const [inputCityTo, setInputCityTo] = useState("");
  const [selectCity, setSelectCity] = useState("Jakarta");
  const [selectCityTo, setSelectCityTo] = useState("Denpasar");
  const [open, setOpen] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [selectRadio, setSelectRadio] = useState("OneWay");
  const [calendar, setCalendar] = useState("");
  const [calendarGo, setCalendarGo] = useState("");
  const [iata, setIata] = useState({
    iata1: "CGK",
    iata2: "DPS",
  });

  const [openDate, setOpenDate] = useState(false);
  const [openDateGo, setOpenDateGo] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [selectClass, setselectClass] = useState("Economy");
  const [countD, setCountD] = useState(1);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const navigate = useNavigate();
  // get the target element to toggle
  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    // set current date on component load
    setCalendar(format(new Date(), "dd-MM-yyyy"));
    setCalendarGo(format(new Date(), "dd-MM-yyyy"));
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("keydown", hideOnEscapeGo, true);
    document.addEventListener("click", hideOnClickOutside, true);
    document.addEventListener("click", hideOnClickOutsideGo, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpenDate(false);
    }
  };
  const hideOnEscapeGo = (e) => {
    if (e.key === "Escape") {
      setOpenDateGo(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.children[0]) {
      setOpenDate(false);
    }
  };
  const hideOnClickOutsideGo = (e) => {
    if (refTwo.current && !refTwo.current.children[0]) {
      setOpenDateGo(false);
    }
  };

  // on date change, store date in state
  const handleSelect = (date) => {
    setCalendar(format(date, "dd-MM-yyyy"));
    setOpenDate((prev) => !prev);
  };
  const handleSelectGo = (date) => {
    setCalendarGo(format(date, "dd-MM-yyyy"));
    setOpenDateGo((openDateGo) => !openDateGo);
  };

  const display = countD + countA + countB + " Passenger, ";

  const onFinishOne = (values) => {
    navigate(
      `/search?ap=${iata.iata1}.${iata.iata2}&dt=${calendar}.${
        selectRadio === "RoundTrip" ? calendarGo : "NA"
      }&ps=${countD}.${countA}.${countB}&sc=${selectClass}`,
      { state: { values, D: countD, A: countA, B: countB } }
    );
  };

  return (
    <div className=" CardWrap bg-white shadow md:shadow-md w-[90%] md:max-w-5xl md:mx-auto m-0 px-4 rounded-md md:rounded-xl z-10">
      <div className="TitleCard hidden md:flex justify-between flex-row items-center px-[1.5rem] md:px-[3rem] py-[2rem] md:py-[2rem]">
        <div className="flex items-center">
          <img loading="lazy" className="w-[3rem]" src={Logo} alt="BinarLogo" />
          <h1 className="text-[1.8rem] px-[0.5rem] mb-0">
            Find Flights Tickets
          </h1>
        </div>
        <Link to="/checkin" className="flex cursor-pointer">
          <p className="flex text-blue-600 font-semibold hover:text-blue-400 mb-0">
            Check-In Here
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              color="blue"
            />
          </svg>
        </Link>
      </div>
      {/* Mobile */}
      <div className="TitleCard md:hidden flex justify-between flex-row items-center px-0 md:px-[3rem] py-[2rem] md:py-[2rem]">
        <div className="flex items-center">
          <img className="w-10" src={Logo} alt="BinarLogo" />
          <h1 className="text-xl px-[0.5rem] mb-0">Find Flights</h1>
        </div>
        <Link to="/checkin" className="flex cursor-pointer">
          <p className="flex text-blue-600 font-semibold hover:text-blue-400 mb-0">
            Check-In
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              color="blue"
            />
          </svg>
        </Link>
      </div>

      <div className="text-black">
        <form className="px-[1.5rem] md:px-[4rem] mb-[1rem] md:mb-[2rem] flex md:flex-row cursor-pointer">
          <div className="mb-2 md:mb-0">
            <input
              type="radio"
              id="OneWay"
              name="OneWay"
              checked={selectRadio === "OneWay"}
              onChange={(e) => setSelectRadio(e.target.value)}
              value="OneWay"
              className="cursor-pointer"
            />
            <label
              htmlFor="OneWay"
              className="p-2 mr-5 cursor-pointer font-semibold"
            >
              One Way
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="RpundTrip"
              name="RoundTrip"
              value="RoundTrip"
              onChange={() => {}}
              checked={selectRadio === "RoundTrip"}
              onClick={(e) =>
                setSelectRadio(
                  selectRadio === "RoundTrip" ? "OneWay" : "RoundTrip"
                )
              }
              className="cursor-pointer"
            />
            <label
              htmlFor="RpundTrip"
              className="p-2 cursor-pointer font-semibold"
            >
              RoundTrip
            </label>
          </div>
        </form>
      </div>

      <div className="flex flex-col justify-between md:flex-row px-0 md:px-[4rem] md:border-double md:border-y-2 md:border-blue-300">
        <div className="flex flex-col w-full md:w-[50%] md:border-double md:border-r-2 md:border-blue-200 md:py-2">
          <div className="flex w-full flex-col md:flex-row md:items-center md:pr-[4rem] mb-3 md:mb-0">
            <div className="FromWrap flex flex-col mb-3 md:mb-1 md:w-[50%] text-black">
              <h2 className="text-[0.9rem] font-semibold hidden md:flex py-[0.2rem]">
                From
              </h2>
              <div className="relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear md:mr-[1rem]">
                <div
                  onClick={() => {
                    setOpen(!open);
                    setOpenTo(false);
                    setOpenDate(false);
                    setOpenDateGo(false);
                    setOpenClass(false);
                  }}
                  className="flex flex-row items-center py-[0.2rem] px-[0.5rem]"
                >
                  <TbPlaneDeparture className="mr-3 text-[1.5rem] text-blue-600 " />
                  <p className="text-[0.9rem] w-full wmd:w-40 md:truncate mb-0">
                    {selectCity ? selectCity : "City or Airport"}
                  </p>
                </div>
                <div
                  className={`${
                    open ? "clip-path" : "close-path"
                  } transition-all duration-500 flex absolute bottom-[-15.1rem] m-0 h-[240px] w-full md:w-[300%] z-30`}
                >
                  <ul className="overflow-y-auto w-full h-full">
                    <div className="flex border-b-2 border-blue-600 px-2 w-full flex-row justify-between items-center bg-white sticky top-0">
                      <input
                        className="text-[0.9rem] w-full  p-2 focus:outline-none  outline-[#0099b7] text-black"
                        type="text"
                        value={inputCity}
                        placeholder="Select City or Airport"
                        onChange={(e) =>
                          setInputCity(e.target.value.toLocaleLowerCase())
                        }
                      />
                      <RiCloseFill
                        className="text-[1.5rem]  cursor-pointer text-gray-300  hover:text-blue-600"
                        onClick={() => setOpen(!open)}
                      />
                    </div>

                    {country?.map((e) => (
                      <li
                        key={e?.iata}
                        className={`p-2 hover:bg-sky-50 bg-white  text-black pb-1 w-full md:truncate ${
                          e?.city?.toLowerCase().startsWith(inputCity)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          if (
                            e?.city?.toLowerCase() !== selectCity.toLowerCase()
                          ) {
                            setSelectCity(e?.city);
                            setOpen(false);
                            setIata({ ...iata, iata1: e.iata });
                            setInputCity("");
                          }
                        }}
                      >
                        <div className="flex flex-row items-center justify-between px-2">
                          <div className="flex flex-row">
                            <BsBuilding className="mr-3 text-[1.2rem] text-blue-600" />
                            <div className="flex flex-col">
                              <h2 className="text-[0.8rem] font-semibold">
                                {e?.city},{e?.country}
                              </h2>
                              <h3 className="text-[0.7rem]">{e?.name}</h3>
                            </div>
                          </div>
                          <h4 className="text-[0.6rem] text-gray-400 bg-gray-200 p-1 rounded-md w-[2.5rem] flex justify-center">
                            {e?.iata}
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="ToWrap flex flex-col mb-3 md:mb-1 md:w-[50%] text-black">
              <h2 className="text-[0.9rem] font-semibold hidden md:flex py-[0.2rem]">
                To
              </h2>
              <div className="relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear">
                <div
                  onClick={() => {
                    setOpenTo(!openTo);
                    setOpen(false);
                    setOpenDate(false);
                    setOpenDateGo(false);
                    setOpenClass(false);
                  }}
                  className="flex flex-row items-center py-[0.2rem] px-[0.5rem]"
                >
                  <TbPlaneInflight className="mr-3 text-[1.5rem] text-blue-600 " />
                  <p className="text-[0.9rem] w-full md:w-40 md:truncate mb-0">
                    {selectCityTo ? selectCityTo : "Going Anywhere?"}
                  </p>
                </div>
                <div
                  className={`${
                    openTo ? "clip-path" : "close-path"
                  } transition-all duration-500 flex absolute bottom-[-15.1rem] m-0  h-[240px] w-full md:w-[270%] z-30`}
                >
                  <ul className="overflow-y-auto w-full h-full">
                    <div className="flex border-b-2 border-blue-600 px-2 w-full flex-row justify-between items-center bg-white sticky top-0">
                      <input
                        className="text-[0.9rem] w-full  p-2 focus:outline-none  outline-[#0099b7] text-black"
                        type="text"
                        value={inputCityTo}
                        placeholder="Going Anywhere?"
                        onChange={(e) =>
                          setInputCityTo(e.target.value.toLocaleLowerCase())
                        }
                      />
                      <RiCloseFill
                        className="text-[1.5rem] mr -2  cursor-pointer text-gray-300  hover:text-blue-600"
                        onClick={() => {
                          setOpenTo(!openTo);
                        }}
                      />
                    </div>

                    {country?.map((e) => (
                      <li
                        key={e?.iata}
                        className={`p-2 hover:bg-sky-50 bg-white  text-black pb-1 w-full md:truncate ${
                          e?.city?.toLowerCase().startsWith(inputCityTo)
                            ? "block"
                            : "hidden"
                        }`}
                        onClick={() => {
                          if (
                            e?.city?.toLowerCase() !==
                            selectCityTo.toLowerCase()
                          ) {
                            setSelectCityTo(e?.city);
                            setOpenTo(false);
                            setIata({ ...iata, iata2: e.iata });
                            setInputCityTo("");
                          }
                        }}
                      >
                        <div className="flex flex-row items-center justify-between px-2">
                          <div className="flex flex-row">
                            <BsBuilding className="mr-3 text-[1.2rem] text-blue-600" />
                            <div className="flex flex-col">
                              <h2 className="text-[0.8rem] font-semibold">
                                {e?.city}, {e?.country}
                              </h2>
                              <h3 className="text-[0.7rem]">{e?.name}</h3>
                            </div>
                          </div>
                          <h4 className="text-[0.6rem] text-gray-400 bg-gray-200 p-1 rounded-md w-[2.5rem] flex justify-center">
                            {e?.iata}
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DATE */}
          <div className="flex items-center">
            <div className="DateWrap flex flex-col md:flex-row md:items-center mb-3 md:mb-1 w-full md:pr-[4rem] text-black">
              {/* OneWay */}
              <div className="flex flex-col mb-3 md:mb-0 md:w-[50%]">
                <h2 className="text-[0.9rem] font-semibold hidden md:flex py-[0.2rem]">
                  Departure
                </h2>
                <div className="relative flex flex-col justify-center md:mr-[1rem]">
                  <div
                    ref={refOne}
                    className="tranform flex flex-row cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear py-[0.2rem] px-[0.5rem]"
                  >
                    <TbCalendarEvent className="mr-3 text-[1.5rem] text-blue-600" />
                    <input
                      className="inputBox outline-none bg-transparent cursor-pointer w-full"
                      value={calendar}
                      readOnly
                      onClick={() => {
                        setOpenDate((prev) => !prev);
                        setOpenDateGo(false);
                        setOpen(false);
                        setOpenTo(false);
                        setOpenClass(false);
                      }}
                    />
                  </div>
                  <div ref={refOne}>
                    {openDate && (
                      <Calendar
                        name="cal1"
                        className="calendarElement absolute bottom-[-18.3rem] z-30"
                        date={new Date()}
                        onChange={handleSelect}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* RoundTrip */}
              <div className="flex flex-col md:w-[50%]">
                <div className="hidden md:flex flex-row items-center py-[0.2rem]">
                  <input
                    className="hidden md:flex flex-col md:flex-row mr-2 cursor-pointer mb-[0.5em]"
                    type="checkbox"
                    id="select"
                    value="RoundTrip"
                    checked={selectRadio === "RoundTrip"}
                    onChange={(e) =>
                      setSelectRadio(
                        selectRadio === "OneWay" ? "RoundTrip" : "OneWay"
                      )
                    }
                  />
                  <h2 className="text-[0.9rem] font-semibold hidden md:flex flex-col md:flex-row select-none">
                    Return
                  </h2>
                </div>
                <div className="relative flex flex-col justify-center">
                  <div
                    ref={refTwo}
                    className={`flex flex-row cursor-pointer border-b-2 transition-all duration-[0.2s] ease-linear py-[0.2rem] px-[0.5rem] 
                                        ${
                                          selectRadio !== "RoundTrip"
                                            ? "border-gray-300 opacity-70"
                                            : "border-blue-400 hover:border-blue-600"
                                        }`}
                  >
                    <TbCalendarStats className="mr-3 text-[1.5rem] text-blue-600" />
                    <input
                      className={`inputBox outline-none  disabled:opacity-30 bg-transparent cursor-pointer w-full
                                            ${
                                              selectRadio !== "RoundTrip"
                                                ? "opacity-70"
                                                : "text-black"
                                            }`}
                      value={calendarGo}
                      disabled={selectRadio === "OneWay"}
                      onClick={() => {
                        setOpenDateGo((openDateGo) => !openDateGo);
                        // setSelectRadio(!selectRadio);
                        setOpenDate(false);
                        setOpen(false);
                        setOpenTo(false);
                        setOpenClass(false);
                      }}
                    />
                  </div>
                  <div ref={refTwo}>
                    {openDateGo && (
                      <Calendar
                        name="cal2"
                        className="calendarElement absolute bottom-[-18.3rem] z-30 "
                        date={new Date()}
                        onChange={handleSelectGo}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="AirClass flex flex-col w-full md:w-[50%]  md:pl-[4rem] py-2">
          <div className="jPenumpang">
            <h2 className="text-[0.9rem] font-semibold hidden md:flex py-[0.2rem] text-black">
              Passenger & Cabin Class
            </h2>
          </div>

          <div className="relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear md:mr-[1rem]">
            <div
              className=" flex flex-row items-center justify-between py-[0.2rem] px-[0.5rem] text-black"
              onClick={() => {
                setOpenClass(!openClass);
                setOpen(false);
                setOpenTo(false);
                setOpenDate(false);
                setOpenDateGo(false);
              }}
            >
              <div className="flex flex-row items-center">
                <MdOutlineAirlineSeatReclineNormal className="mr-3 text-[1.5rem] text-blue-600" />
                <p className="text-[0.9rem] mb-0">
                  {display ? display : "Jumlah Penumpang"}
                  {selectClass ? selectClass : " Select Cabin Class"}
                </p>
              </div>
              <BiChevronDown className="text-[1.5rem] cursor-pointer text-blue-400 hover:text-blue-600" />
            </div>

            <div
              className={`${
                openClass ? "clip-path" : "close-path"
              } flex transition-all duration-500 absolute top-[2rem] md:bottom-[-15.1rem] md:right-[-1rem] m-0 h-auto md:h-[240px] w-full md:w-[150%] z-30 flex-col md:flex-row justify-between`}
            >
              <div
                className={`countWrap flex flex-col bg-white py-[0.5rem] px-[0.5rem] m-0 h-auto md:h-[240px] w-[100%] md:w-[55%] z-30 ${
                  openClass ? "flex" : "hidden"
                }`}
              >
                <div className="text-[0.9rem] font-semibold hidden md:flex flex-row items-center justify-between sticky top-0 my-3 md:my-1">
                  <p className="mb-0 font-normal">Passenger</p>
                  <RiCloseFill
                    className="text-[1.5rem] cursor-pointer lg:text-transparent lg:hover:text-transparent text-gray-300 hover:text-blue-600"
                    onClick={() => {
                      setOpenClass(!openClass);
                      setOpen(false);
                      setOpenTo(false);
                      setOpenDate(false);
                      setOpenDateGo(false);
                    }}
                  />
                </div>
                <hr className="hidden md:flex md:my-1 border-b-1 border-blue-600 " />
                <div key={age[0]?.id} className="flex flex-row justify-between">
                  <div className="flex flex-row items-center py-[0.2rem] px-[0.5rem]">
                    <ImManWoman className="text-[1.3rem] mr-3 text-blue-600 w-[1.5rem]" />
                    <div className="flex flex-col">
                      <h1 className="text-[0.9rem] font-semibold mb-0 leading-loose">
                        {age[0]?.categoryName}
                      </h1>
                      <h2 className="text-[0.7rem] text-gray-500 mb-0">
                        {age[0]?.description}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-center ">
                    <button
                      className="cursor-pointer mr-2 hover:text-blue-600"
                      onClick={() => setCountD(countD - 1)}
                      disabled={countD === 0}
                    >
                      <BiMinusCircle />
                    </button>
                    <h2 className="mb-0 font-semibold">{countD}</h2>
                    <button
                      className="cursor-pointer ml-2 hover:text-blue-600"
                      onClick={() => setCountD(countD + 1)}
                      disabled={countD === 5}
                    >
                      <BiPlusCircle />
                    </button>
                  </div>
                </div>
                <div key={age[1]?.id} className="flex flex-row justify-between">
                  <div className="flex flex-row items-center py-[0.2rem] px-[0.5rem]">
                    <FaChild className="text-[1.2rem] mr-3 text-blue-600 w-[1.5rem]" />
                    <div className="flex flex-col">
                      <h1 className="text-[0.9rem] font-semibold mb-0 leading-loose">
                        {age[1]?.categoryName}
                      </h1>
                      <h2 className="text-[0.7rem] text-gray-500 mb-0">
                        {age[1]?.description}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-center ">
                    <button
                      className="cursor-pointer mr-2 hover:text-blue-600"
                      onClick={() => setCountA(countA - 1)}
                      disabled={countA === 0}
                    >
                      <BiMinusCircle />
                    </button>
                    <h2 className="mb-0 font-semibold">{countA}</h2>
                    <button
                      className="cursor-pointer ml-2 hover:text-blue-600"
                      onClick={() => setCountA(countA + 1)}
                      disabled={countA === 2}
                    >
                      <BiPlusCircle />
                    </button>
                  </div>
                </div>
                <div key={age[2]?.id} className="flex flex-row justify-between">
                  <div className="flex flex-row items-center py-[0.2rem] px-[0.5rem]">
                    <FaBabyCarriage className="text-[1.2rem] mr-3 text-blue-600 w-[1.5rem]" />
                    <div className="flex flex-col">
                      <h1 className="text-[0.9rem] font-semibold mb-0 leading-loose">
                        {age[2]?.categoryName}
                      </h1>
                      <h2 className="text-[0.7rem] text-gray-500 mb-0">
                        {age[2]?.description}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-center ">
                    <button
                      className="cursor-pointer mr-2 hover:text-blue-600"
                      onClick={() => setCountB(countB - 1)}
                      disabled={countB === 0}
                    >
                      <BiMinusCircle />
                    </button>
                    <h2 className="mb-0 font-semibold">{countB}</h2>
                    <button
                      className="cursor-pointer ml-2 hover:text-blue-600"
                      onClick={() => setCountB(countB + 1)}
                      disabled={countB === 2}
                    >
                      <BiPlusCircle />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[45%]">
                <ul
                  className={`flex flex-row md:flex-col flex-wrap justify-center md:justify-start text-[0.9rem] bg-white py-[0.5rem] px-[0.5rem] mb-0 overflow-y-auto w-full h-full`}
                >
                  <div className="text-[0.9rem] font-semibold hidden md:flex flex-row items-center justify-between sticky top-0 my-3 md:my-1">
                    <p className="mb-0 font-normal">Cabin Class</p>
                    <RiCloseFill
                      className="text-[1.5rem] cursor-pointer text-transparent md:text-gray-300 md:hover:text-blue-600"
                      onClick={() => {
                        setOpenClass(!openClass);
                        setOpen(false);
                        setOpenTo(false);
                        setOpenDate(false);
                        setOpenDateGo(false);
                      }}
                    />
                  </div>
                  <hr className="hidden md:flex md:my-1 border-b-1 border-blue-600" />
                  {cabinClass &&
                    cabinClass.map((e) => {
                      return (
                        <li
                          className="text-[0.8rem] font-semibold mb-[1em] md:mb-1 mr-1 md:py-2 max-md:py-1 max-md:px-2 max-md:border-solid max-md:border-[0.1rem] max-md:rounded-md hover:max-md:border-blue-600 md:hover:bg-sky-50 max-md:border-blue-300 md:border-b-[1px]"
                          onClick={() => {
                            setOpenClass(false);
                            setselectClass(e.travelClassName);
                          }}
                          key={e.travelClassId}
                        >
                          {e.travelClassName}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-end px-0 md:px-[4rem] py-[1rem] cursor-pointer">
        <div className="w-full md:w-fit">
          <ButtonPrimary
            title="SEARCH FLIGHTS"
            click={() => {
              onFinishOne({
                ap1: iata.iata1,
                ap2: iata.iata2,
                dt1: calendar,
                dt2: selectRadio === "RoundTrip" ? calendarGo : "NA",
                psD: countD,
                psA: countA,
                psB: countB,
                sc: selectClass,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
