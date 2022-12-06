import React, { useEffect, useState, useRef } from 'react'
import Logo from '../assets/Logo.png'
import { TbPlaneDeparture, TbPlaneInflight, TbCalendarEvent,TbCalendarStats } from 'react-icons/tb';
import { BiSearchAlt, BiChevronDown, BiPlusCircle, BiMinusCircle} from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { ImManWoman } from 'react-icons/im';
import { FaBabyCarriage, FaChild } from 'react-icons/fa';
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from './ButtonPrimary';

const Card = () => {
    const [city, setCity] = useState(null)
    const [inputCity, setInputCity] = useState("");
    const [inputCityTo, setInputCityTo] = useState("");
    const [selectCity, setSelectCity] = useState("");
    const [selectCityTo, setSelectCityTo] = useState("");
    const [open, setOpen] = useState(false)
    const [openTo, setOpenTo] = useState(false)
    const [selectRadio, setSelectRadio] = useState(
        "OneWay"
    )
    const [calendar, setCalendar] = useState('')
    const [calendarGo, setCalendarGo] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [openDateGo, setOpenDateGo] = useState(false)
    const [openClass, setOpenClass] = useState(false)
    const [selectClass, setselectClass] = useState("")
    const [countD, setCountD] = useState(0);
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const navigate = useNavigate()
    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect( () => {
        fetch ("https://restcountries.com/v2/all?fields=name")
        .then( (res) => res.json())
        .then((data) => {
        // console.log(data)
        setCity(data)
    });
    },[])

    useEffect(() => {
        // set current date on component load
        setCalendar(format(new Date(), 'dd/MM/yyyy'))
        setCalendarGo(format(new Date(), 'dd/MM/yyyy'))
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("keydown", hideOnEscapeGo, true)
        document.addEventListener("click", hideOnClickOutside, true)
        document.addEventListener("click", hideOnClickOutsideGo, true)
    }, [])
        
     // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if( e.key === "Escape" ) {
            setOpenDate(false)
            }
        }
    const hideOnEscapeGo = (e) => {
        if( e.key === "Escape" ) {
            setOpenDateGo(false)
            }
        }
        
    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) {
            setOpenDate(false)
        }
    }
    const hideOnClickOutsideGo = (e) => {
        if( refOne.current && !refOne.current.contains(e.target) ) {
            setOpenDateGo(false)
        }
    }
        
    // on date change, store date in state
    const handleSelect = (date) => {
        // console.log(date)
        // console.log(format(date, 'MM/dd/yyyy'))
        setCalendar(format(date, 'MM/dd/yyyy'))
    }
    const handleSelectGo = (date) => {
        setCalendarGo(format(date, 'MM/dd/yyyy'))
    }
    
    const display = countD + countA + countB + " Passenger, ";
        

  return (
    <div id='Booking' className=' bg-slate-50 md:bg-transparent w-full h-auto md:h-screen pb-5 md:pb-10 relative md:absolute bottom-0 md:bottom-[-65%] z-10 md:z-20'>
        <div className=' CardWrap bg-white shadow md:shadow-md mx-0 md:mx-20 my-0 md:my-[3rem] rounded-none md:rounded-xl'>
            
            <div className='TitleCard flex flex-row items-center px-[1.5rem] md:px-[3rem] py-[2rem] md:py-[2rem]'>
                <img 
                className='w-[3rem]'
                src={Logo} 
                alt="BinarLogo" />
                <h1
                    className='fontMont text-[1.3rem] text-black font-extrabold px-[0.5rem] mb-0'>
                    Find Flights Tickets
                </h1>
            </div>

            <div className='text-black'>
                <form className='px-[1.5rem] md:px-[4rem] mb-[1rem] md:mb-[2rem] flex md:flex-row cursor-pointer'>
                    <div className='mb-2 md:mb-0'>
                        <input type="radio" id='OneWay' name="OneWay" checked={selectRadio === 'OneWay'}  onChange={(e) => setSelectRadio(e.target.value)} value="OneWay" className='cursor-pointer' />
                        <label htmlFor="OneWay" className='p-2 mr-5 cursor-pointer'>
                            One Way
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="RpundTrip" name="RoundTrip" value="RoundTrip" onChange={()=>{}}  checked={selectRadio === 'RoundTrip'}  onClick={(e) => setSelectRadio( selectRadio === 'RoundTrip' ? 'OneWay' : 'RoundTrip')} className='cursor-pointer' /> 
                        <label htmlFor="RpundTrip" className='p-2 cursor-pointer fontMont'>
                            Round Trip
                        </label>
                    </div>
                </form>
            </div>

            <div className='flex flex-col justify-between md:flex-row px-[1.5rem] md:px-[4rem] md:border-double md:border-y-2 md:border-blue-600'>
                <div className='flex flex-col w-full md:w-[50%] md:border-double md:border-r-2 md:border-blue-600 md:py-2'>
                    <div className="flex w-full flex-col md:flex-row md:items-center md:pr-[4rem] mb-3 md:mb-0">
                        
                        <div className='FromWrap flex flex-col mb-3 md:mb-1 md:w-[50%] text-black'>
                            <h2 className='fontMont text-[0.9rem] font-bold hidden md:flex py-[0.2rem]'>From</h2>
                            <div
                                className='relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear md:mr-[1rem]'>
                                <div 
                                    onClick={() => setOpen(!open)} 
                                    className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                    <TbPlaneDeparture className='mr-3 text-[1.5rem] text-black'/>
                                    <p className='fontMont text-[0.9rem] w-full wmd:w-40 md:truncate mb-0'>
                                        {selectCity ? selectCity : "City or Airport"}
                                    </p>
                                </div>
                                <div className={`${open? 'clip-path' : "close-path"} transition-all duration-500 flex absolute bottom-[-15.1rem] m-0  h-[240px] w-full z-30`}>
                                    <ul className={` overflow-y-auto w-full h-full`}>
                                        <div className='flex border-b-2 border-blue-600 w-full flex-row justify-between items-center bg-white sticky top-0'>
                                            <input 
                                                className='fontMont text-[0.9rem] w-full  p-2 focus:outline-none  outline-[#0099b7] text-black'
                                                type="text" value={inputCity}
                                                placeholder='Select City or Airport'
                                                onChange={(e) =>setInputCity(e.target.value.toLocaleLowerCase())} 
                                            />
                                            <RiCloseFill 
                                                className='text-[1.5rem] mr -2  cursor-pointer text-gray-300  hover:text-blue-600'
                                                onClick={() => setOpen(!open)} />
                                        </div>
                                        
                                        {city?.map((e) => (
                                        <li key={e?.name}
                                            className={`fontMont text-[0.9rem] p-2 hover:bg-sky-50 bg-white  text-black pb-1 w-full md:truncate ${e?.name?.toLowerCase().startsWith(inputCity) ? "block" : "hidden"}`}
                                            onClick={() => {
                                                if(e?.name?.toLowerCase() !== selectCity.toLowerCase()) {
                                                    setSelectCity(e?.name);
                                                    setOpen(false);
                                                    setInputCity("");
                                                }
                                            }}
                                            >
                                            {e?.name}
                                        </li>
                                        )
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='ToWrap flex flex-col mb-3 md:mb-1 md:w-[50%] text-black'>
                        <h2 className='fontMont text-[0.9rem] font-bold hidden md:flex py-[0.2rem]'>To</h2>
                            <div
                                className='relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear'>
                                <div 
                                    onClick={() => setOpenTo(!openTo)} 
                                    className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                    <TbPlaneInflight className='mr-3 text-[1.5rem] text-black'/>
                                    <p className='fontMont text-[0.9rem] w-full md:w-40 md:truncate mb-0'>
                                        {selectCityTo ? selectCityTo : "Going Anywhere?"}
                                    </p>
                                </div>
                                <div className={`${openTo? 'clip-path' : "close-path"} transition-all duration-500 flex absolute bottom-[-15.1rem] m-0  h-[240px] w-full z-30`}>
                                    <ul className={` overflow-y-auto w-full h-full`}>
                                    <div className='flex border-b-2 border-blue-600 w-full flex-row justify-between items-center bg-white sticky top-0'>
                                            <input 
                                                className='fontMont text-[0.9rem] w-full  p-2 focus:outline-none  outline-[#0099b7] text-black'
                                                type="text" value={inputCityTo}
                                                placeholder='Going Anywhere?'
                                                onChange={(e) =>setInputCityTo(e.target.value.toLocaleLowerCase())} 
                                            />
                                            <RiCloseFill 
                                                className='text-[1.5rem] mr -2  cursor-pointer text-gray-300  hover:text-blue-600'
                                                onClick={() => setOpenTo(!openTo)} />
                                        </div>
                                        
                                        {city?.map((e) => (
                                        <li key={e?.name}
                                            className={`fontMont text-[0.9rem] p-2 hover:bg-sky-50 bg-white  text-black pb-1 w-full md:truncate ${e?.name?.toLowerCase().startsWith(inputCityTo) ? "block" : "hidden"}`}
                                            onClick={() => {
                                                if(e?.name?.toLowerCase() !== selectCityTo.toLowerCase()) {
                                                    setSelectCityTo(e?.name);
                                                    setOpenTo(false);
                                                    setInputCityTo("");
                                                }
                                            }}
                                            >
                                            {e?.name}
                                        </li>
                                        )
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                
                    {/* DATE */}
                    <div className='flex items-center'>
                        <div className='DateWrap flex flex-col md:flex-row md:items-center mb-3 md:mb-1 w-full md:pr-[4rem] text-black'>
                            
                            {/* OneWay */}
                            <div className='flex flex-col mb-3 md:mb-0 md:w-[50%]'>
                                <h2 className='fontMont text-[0.9rem] font-bold hidden md:flex py-[0.2rem]'>
                                    Departure
                                </h2>
                                <div className='relative flex flex-col justify-center md:mr-[1rem]'>
                                    <div
                                        ref={refOne}
                                        className='tranform flex flex-row cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear py-[0.2rem] px-[0.5rem]'>
                                        <TbCalendarEvent className='mr-3 text-[1.5rem] text-black'/>
                                        <input
                                            className="inputBox outline-none bg-transparent cursor-pointer"
                                            value={ calendar }
                                            readOnly
                                            onClick={ () => setOpenDate(openDate => !openDate) }
                                            />
                                    </div>
                                        <div 
                                            ref={refOne}>
                                            {openDate && 
                                            <Calendar
                                            className=  "calendarElement absolute bottom-[-18.3rem] z-30"
                                            date={ new Date() }
                                            onChange = { handleSelect }/>
                                            }
                                        </div>
                                    
                                </div>
                            </div>
                            
                            {/* RoundTrip */}
                            <div className='flex flex-col md:w-[50%]'>
                                <div className='hidden md:flex flex-row items-center py-[0.2rem]'
                                    >
                                    <input
                                        className='hidden md:flex flex-col md:flex-row mr-2 cursor-pointer mb-[0.5em]' 
                                        type="checkbox" id="select" 
                                        value="RoundTrip"
                                        checked={selectRadio === 'RoundTrip'}
                                        onChange={(e) => setSelectRadio( selectRadio === 'OneWay' ? 'RoundTrip' : 'OneWay')} />
                                    <h2
                                        className='fontMont text-[0.9rem] font-bold hidden md:flex flex-col md:flex-row select-none'>
                                        Return
                                    </h2>
                                </div>
                                <div className="relative flex flex-col justify-center">
                                    <div
                                        ref={refOne}
                                        className={`flex flex-row cursor-pointer border-b-2 transition-all duration-[0.2s] ease-linear py-[0.2rem] px-[0.5rem] 
                                        ${selectRadio !== 'RoundTrip'? "border-gray-300 opacity-70" : "border-blue-400 hover:border-blue-600"}`}>
                                        <TbCalendarStats className='mr-3 text-[1.5rem] text-black'/>
                                        <input
                                            className={`inputBox outline-none  disabled:opacity-30 bg-transparent cursor-pointer
                                            ${selectRadio !== 'RoundTrip' ? "opacity-70" : "text-black" }`}
                                            value={ calendarGo }
                                            disabled={selectRadio === 'OneWay'}
                                            onClick={ () => {
                                                setOpenDateGo(openDateGo => !openDateGo);
                                                // setSelectRadio(!selectRadio);
                                            }}
                                            />
                                    </div>
                                        <div ref={refOne}>
                                            {openDateGo && 
                                            <Calendar
                                            className="calendarElement absolute bottom-[-18.3rem] z-30 "
                                            date={ new Date() }
                                            onChange = { handleSelectGo }/>
                                            }
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                    <div className="AirClass flex flex-col w-full md:w-[50%]  md:pl-[4rem] py-2">
                        <div className="jPenumpang">
                            <h2 className='fontMont text-[0.9rem] font-bold hidden md:flex py-[0.2rem] text-black'>Passenger & Cabin Class</h2>
                        </div>

                        <div 
                            className='relative flex flex-col cursor-pointer border-b-2 border-blue-400 hover:border-blue-600 transition-all duration-[0.2s] ease-linear md:mr-[1rem]'>
                            <div className=' flex flex-row items-center justify-between py-[0.2rem] px-[0.5rem] text-black'
                                onClick={() => setOpenClass(!openClass)}>
                                <p className='fontMont text-[0.9rem] mb-0'>
                                    {display ? display : "Jumlah Penumpang"}
                                    {selectClass ? selectClass : " Choose Cabin Class"}
                                </p>
                                <BiChevronDown
                                    className='text-[1.5rem] cursor-pointer text-blue-400 hover:text-blue-600'/>
                            </div>

                            <div className={`${openClass? 'clip-path' : "close-path"} flex  transition-all duration-500 absolute bottom-[-15.1rem] m-0 h-[240px] w-full z-30 flex-col md:flex-row justify-between `}>
                                
                            <div className={`countWrap flex flex-col bg-white py-[0.2rem] px-[0.5rem] m-0  h-[240px] w-full md:w-[50%] z-30 ${openClass? 'flex' : "hidden"}`}>
                                    <div className='fontMont text-[0.9rem] font-bold hidden md:flex flex-row items-center justify-between sticky top-0 my-3 md:my-1' >
                                        <p className='mb-0'>
                                            Passenger
                                        </p>
                                        <RiCloseFill
                                            className='text-[1.5rem] cursor-pointer lg:text-transparent lg:hover:text-transparent text-gray-300 hover:text-blue-600'
                                            onClick={() => setOpenClass(!openClass)} />
                                    </div>
                                    <hr className='hidden md:flex md:my-1 border-b-1 border-blue-600 ' />
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                            <ImManWoman className='text-[1.5rem] mr-3 text-blue-600'/>
                                                <div className='flex flex-col'>
                                                    <h1 className='fontMont text-[0.9rem] font-bold mb-[0.2rem]'>
                                                        Adult
                                                    </h1>
                                                    <h2 className='fontMont text-[0.7rem] text-gray-500'>
                                                        Age 12+
                                                    </h2>
                                                </div>
                                        </div>
                                        <div className='flex flex-row items-center '>
                                            <button
                                                className='cursor-pointer mr-2 hover:text-blue-600'
                                                onClick={() => setCountD(countD - 1)}
                                                disabled={countD === 0}>
                                                <BiMinusCircle />
                                            </button>
                                            <h2 className='fontMont mb-0 font-bold'>
                                                {countD}
                                            </h2>
                                            <button
                                                className='cursor-pointer ml-2 hover:text-blue-600'
                                                onClick={() => setCountD(countD + 1)}
                                                disabled={countD === 5}>
                                                <BiPlusCircle/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                            <FaChild className='text-[1.5rem] mr-3 text-blue-600'/>
                                                <div className='flex flex-col'>
                                                    <h1 className='fontMont text-[0.9rem] font-bold mb-[0.2rem]'>
                                                        Child
                                                    </h1>
                                                    <h2 className='fontMont text-[0.7rem] text-gray-500'>
                                                        Age 2-11
                                                    </h2>
                                                </div>
                                        </div>
                                        <div className='flex flex-row items-center '>
                                            <button
                                                className='cursor-pointer mr-2 hover:text-blue-600'
                                                onClick={() => setCountA(countA - 1)}
                                                disabled={countA === 0}>
                                                <BiMinusCircle />
                                            </button>
                                            <h2 className='fontMont mb-0 font-bold'>
                                                {countA}
                                            </h2>
                                            <button
                                                className='cursor-pointer ml-2 hover:text-blue-600'
                                                onClick={() => setCountA(countA + 1)}
                                                disabled={countA === 2}>
                                                <BiPlusCircle/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                            <FaBabyCarriage className='text-[1.5rem] mr-3 text-blue-600'/>
                                                <div className='flex flex-col'>
                                                    <h1 className='fontMont text-[0.9rem] font-bold mb-[0.2rem]'>
                                                        Infant
                                                    </h1>
                                                    <h2 className='fontMont text-[0.7rem] text-gray-500'>
                                                        Below Age 2
                                                    </h2>
                                                </div>
                                        </div>
                                        <div className='flex flex-row items-center '>
                                            <button
                                                className='cursor-pointer mr-2 hover:text-blue-600'
                                                onClick={() => setCountB(countB - 1)}
                                                disabled={countB === 0}>
                                                <BiMinusCircle/>
                                            </button>
                                            <h2 className='fontMont mb-0 font-bold'>
                                                {countB}
                                            </h2>
                                            <button
                                                className='cursor-pointer ml-2 hover:text-blue-600'
                                                onClick={() => setCountB(countB + 1)}
                                                disabled={countB === 2}>
                                                <BiPlusCircle />
                                            </button>
                                                
                                                
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className='w-full md:w-[50%]'>
                                <ul className={`fontMont flex flex-row md:flex-col flex-wrap justify-center md:justify-start text-[0.9rem] bg-white py-[0.2rem] px-[0.5rem] mb-0 overflow-y-auto w-full h-full`}>
                                    <div className='fontMont text-[0.9rem] font-bold hidden md:flex flex-row items-center justify-between sticky top-0 my-3 md:my-1' >
                                        <p className='mb-0'>
                                            Cabin Class
                                        </p>
                                        <RiCloseFill
                                            className='text-[1.5rem] cursor-pointer text-transparent md:text-gray-300 md:hover:text-blue-600'
                                            onClick={() => setOpenClass(!openClass)} />
                                    </div>
                                    <hr className='hidden md:flex md:my-1 border-b-1 border-blue-600' />
                                    <li 
                                        className='fontMont text-[0.8rem] font-bold mb-[1em] md:mb-1 mr-1 max-md:py-1 max-md:px-2 max-md:border-solid max-md:border-[0.1rem] max-md:rounded-lg hover:max-md:border-blue-600 md:hover:bg-sky-50 max-md:border-blue-300'
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Economy");
                                    }}>
                                        Economy
                                    </li>
                                    <li 
                                        className='fontMont text-[0.8rem] font-bold max-md:mb-[1em] mb-1 max-md:ml-[1em] mr-1 max-md:py-1 max-md:px-2 max-md:border-solid max-md:border-[0.1rem] max-md:rounded-lg hover:max-md:border-blue-600 md:hover:bg-sky-50 max-md:border-blue-300'
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Premium Economy");
                                    }}>
                                        Premium Economy
                                    </li>
                                    <li 
                                        className='fontMont text-[0.8rem] font-bold mb-[1em] md:mb-1 mr-1 max-md:py-1 max-md:px-2 max-md:border-solid max-md:border-[0.1rem] max-md:rounded-lg hover:max-md:border-blue-600 md:hover:bg-sky-50 max-md:border-blue-300'
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Business");
                                    }}>
                                        Business
                                    </li>
                                    <li 
                                        className='fontMont text-[0.8rem] font-bold max-md:mb-[1em] mb-1 max-md:ml-[1em] max-md:py-1 max-md:px-2 max-md:border-solid max-md:border-[0.1rem] max-md:rounded-lg hover:max-md:border-blue-600 md:hover:bg-sky-50 max-md:border-blue-300'
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("First");
                                    }}>
                                        First
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                       
            <div className="w-full flex items-center justify-end px-[1.5rem] md:px-[4rem] py-[1rem] cursor-pointer"  >
                <div className='w-fit' onClick={()=>navigate('/Filter')}>
                    <ButtonPrimary type='submit' title='Find Tickets' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card