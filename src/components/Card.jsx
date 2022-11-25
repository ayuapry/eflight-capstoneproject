import React, { useEffect, useState, useRef } from 'react'
import Logo from '../image/Logo.png'
import { TbPlaneDeparture, TbPlaneInflight, TbCalendarEvent,TbCalendarStats } from 'react-icons/tb';
import { BiSearchAlt, BiChevronDown, BiPlusCircle, BiMinusCircle} from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { ImManWoman } from 'react-icons/im';
import { FaBabyCarriage, FaChild } from 'react-icons/fa';
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Card = () => {
    const [city, setCity] = useState(null)
    const [inputCity, setInputCity] = useState("");
    const [inputCityTo, setInputCityTo] = useState("");
    const [selectCity, setSelectCity] = useState("");
    const [selectCityTo, setSelectCityTo] = useState("");
    const [open, setOpen] = useState(false)
    const [openTo, setOpenTo] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [calendar, setCalendar] = useState('')
    const [calendarGo, setCalendarGo] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [openDateGo, setOpenDateGo] = useState(false)
    const [openClass, setOpenClass] = useState(false)
    const [selectClass, setselectClass] = useState("")
    const [selectHuman, setselectHuman] = useState("")
    const [countD, setCountD] = useState(0);
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    // get the target element to toggle 
    const refOne = useRef(null)
    const result = useRef()

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
    
    const display = countD + countA + countB;
        

  return (
    <div>
        <div className='CardWrap bg-blue-100 mx-[2rem] md:mx-[4rem] my-[1rem] md:my-[3rem] rounded-xl'>
            
            <div className='TitleCard flex flex-row items-center px-[1.5rem] md:px-[3rem] py-[2rem] md:py-[2rem]'>
                <img 
                className='w-[3rem]'
                src={Logo} 
                alt="BinarLogo" />
                <h1
                className='text-blue-800 font-bold px-[0.5rem]'>
                Cari Tiket Pesawat
                </h1>
            </div>

            <div>
                <form className='px-[1.5rem] md:px-[4rem] pb-[1rem] md:pb-[2rem]'
                    onClick={() => setHidden(!hidden)} >
                    <input type="radio" id='sekali' name="Sekali" value="SekaliJalan" />
                    <label for="sekali" className='p-2 mr-5'>
                        Sekali Jalan
                    </label>
                    
                    <input type="radio" id="PP" name="Sekali" value="PulangPergi" />
                    <label for="PP" className='p-2'>
                        Pulang Pergi
                    </label>
                </form>
            </div>

            <div className='flex flex-col justify-between md:flex-row px-[1.5rem] md:px-[4rem] md:border-double md:border-y-2 md:border-sky-400'>
                <div className='flex flex-col w-full md:w-[50%] md:border-double md:border-r-2 md:border-sky-400'>
                
                    <div className="flex w-full flex-col md:flex-row md:items-center md:pr-[4rem]">
                        <div className='FromWrap flex flex-col mb-3 md:mb-1 md:w-[50%]'>
                            <h2 className='hidden md:flex py-[0.2rem]'>Dari</h2>
                            <div
                                className='flex flex-col cursor-pointer border-2 border-black hover:border-sky-400 transition-all duration-[0.2s] ease-linear rounded-md md:mr-[1rem]'>
                                <div 
                                    onClick={() => setOpen(!open)} 
                                    className='flex flex-row py-[0.2rem] px-[0.5rem]'>
                                    <TbPlaneDeparture className='mr-3 text-[1.5rem] text-blue-400'/>
                                    <p className='w-full wmd:w-40 md:truncate'>
                                        {selectCity ? selectCity : "Pilih Kota Disini"}
                                    </p>
                                </div>
                                <div className='fixed top-[14.2rem] md:top-[19.5rem]'>
                                    <ul className={`bg-white overflow-y-auto py-[0.2rem] px-[0.5rem]
                                        ${open? "max-h-60" : "max-h-0"}`}>
                                        <div className='flex flex-row justify-between sticky top-0'>
                                            <input 
                                                className='outline-blue-200'
                                                type="text" value={inputCity}
                                                placeholder='Kota Asal di Sini'
                                                onChange={(e) =>setInputCity(e.target.value.toLocaleLowerCase())} 
                                            />
                                            <RiCloseFill 
                                                className='text-[1.5rem] cursor-pointer text-gray-300 hover:text-blue-400'
                                                onClick={() => setOpen(!open)} />
                                        </div>
                                        
                                        {city?.map((e) => (
                                        <li key={e?.name}
                                            className={`hover:bg-sky-50 w-full md:w-40 md:truncate ${e?.name?.toLowerCase().startsWith(inputCity) ? "block" : "hidden"}`}
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

                        <div className='ToWrap flex flex-col mb-3 md:mb-1 md:w-[50%] '>
                            <h2 className='hidden md:flex py-[0.2rem]'>Ke</h2>
                            <div
                                className='flex flex-col cursor-pointer border-2 border-black hover:border-sky-400 transition-all duration-[0.2s] ease-linear rounded-md'>
                                <div 
                                    onClick={() => setOpenTo(!openTo)} 
                                    className='flex flex-row py-[0.2rem] px-[0.5rem]'>
                                    <TbPlaneInflight className='mr-3 text-[1.5rem] text-blue-400'/>
                                    <p className='w-full md:w-40 md:truncate'>
                                        {selectCityTo ? selectCityTo : "Mau Ke Mana?"}
                                    </p>
                                </div>
                                <div className='fixed top-[17.2rem] md:top-[19.5rem]'>
                                    <ul className={`bg-white overflow-y-auto py-[0.2rem] px-[0.5rem]
                                        ${openTo? "max-h-60" : "max-h-0"}`}>
                                        <div className='flex flex-row justify-between sticky top-0'>
                                            <input 
                                                className='outline-blue-200'
                                                type="text" value={inputCityTo}
                                                placeholder='Kota Asal di Sini'
                                                onChange={(e) =>setInputCityTo(e.target.value.toLocaleLowerCase())} 
                                            />
                                            <RiCloseFill 
                                                className='text-[1.5rem] cursor-pointer text-gray-300 hover:text-blue-400'
                                                onClick={() => setOpenTo(!openTo)} />
                                        </div>
                                        
                                        {city?.map((e) => (
                                        <li key={e?.name}
                                            className={`hover:bg-sky-50 w-full md:w-40 md:truncate ${e?.name?.toLowerCase().startsWith(inputCityTo) ? "block" : "hidden"}`}
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
                
                    <div className='flex items-center'>
                        <div className='DateWrap flex flex-col md:flex-row md:items-center mb-3 md:mb-1 w-full md:pr-[4rem]'>
                            <div className='flex flex-col mb-3 md:mb-1 md:w-[50%]'>
                                <h2 className='hidden md:flex py-[0.2rem]'>Berangkat</h2>
                                <div className='flex flex-col justify-center md:mr-[1rem]'>
                                    <div
                                        ref={refOne}
                                        className='flex flex-row cursor-pointer border-2 border-black hover:border-sky-400 transition-all duration-[0.2s] ease-linear rounded-md py-[0.2rem] px-[0.5rem]'>
                                        <TbCalendarEvent className='mr-3 text-[1.5rem] text-blue-400'/>
                                        <input
                                            className="inputBox outline-none bg-transparent cursor-pointer"
                                            value={ calendar }
                                            readOnly
                                            onClick={ () => setOpenDate(openDate => !openDate) }
                                            />
                                    </div>
                                    
                                        <div ref={refOne}>
                                            {openDate && 
                                            <Calendar
                                            className="calendarElement fixed top-[20rem] md:top-[23.8rem]"
                                            date={ new Date() }
                                            onChange = { handleSelect }/>
                                            }
                                        </div>
                                    
                                </div>
                            </div>
                            
                            <div className='flex flex-col md:w-[50%]'
                                >
                                <div className='hidden md:flex flex-row py-[0.2rem]'
                                    onClick={() => setHidden(!hidden)}  
                                >
                                    <input
                                        className='hidden md:flex flex-col md:flex-row mr-3 cursor-pointer' 
                                        type="checkbox" id="select" 
                                        onClick={() => setHidden(false)} />
                                    <label for="select" 
                                        className='hidden md:flex flex-col md:flex-row'>
                                        Pulang
                                    </label>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <div
                                        ref={refOne}
                                        className={`flex flex-row cursor-pointer border-2 transition-all duration-[0.2s] ease-linear rounded-md py-[0.2rem] px-[0.5rem]
                                        ${hidden? "border-black hover:border-sky-400" : "border-gray-300"}`}>
                                        <TbCalendarStats className='mr-3 text-[1.5rem] text-blue-400'/>
                                        <input
                                            className={`inputBox outline-none bg-transparent cursor-pointer
                                            ${hidden? "text-black" : "text-gray-300" }`}
                                            value={ calendarGo }
                                            readOnly
                                            onClick={ () => {
                                                setOpenDateGo(openDateGo => !openDateGo);
                                                setHidden(!hidden);
                                            }}
                                            />
                                    </div>
                                        <div ref={refOne}>
                                            {openDateGo && 
                                            <Calendar
                                            className="calendarElement fixed top-[23rem] md:top-[23.8rem]"
                                            date={ new Date() }
                                            onChange = { handleSelectGo }/>
                                            }
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                    <div className="AirClass flex flex-col w-full md:w-[50%] md:pl-[4rem]">
                        <div className="jPenumpang">
                            <h2 className='hidden md:flex py-[0.2rem]'>Penumpang & Kelas Kabin</h2>
                        </div>

                        <div className="className='flex flex-col cursor-pointer border-2 border-black hover:border-sky-400 transition-all duration-[0.2s] ease-linear rounded-md mr-[1rem]'">
                            <div className='flex flex-row items-center justify-between py-[0.2rem] px-[0.5rem]'
                                onClick={() => setOpenClass(!openClass)}>
                                <p>
                                    {display ? display : "Jumlah Penumpang"},
                                    {selectClass ? selectClass : " Pilih Kelas Kabin"}
                                </p>
                                <BiChevronDown
                                    className='text-[1.5rem] cursor-pointer text-black hover:text-blue-400'/>
                            </div>


                            <div className='flex flex-row-reverse fixed top-[25.8rem] md:top-[19.5rem] bg-white'>
                            <div className='ClassWrap '>
                                <ul className={`bg-white overflow-y-auto py-[0.2rem] px-[0.5rem]
                                    ${openClass? "max-h-60" : "max-h-0"}`}>
                                    <div className='flex flex-row items-center justify-between sticky top-0 mb-3 md:mb-1' >
                                        <p>Kelas Kabin</p>
                                        <RiCloseFill
                                            className='text-[1.5rem] cursor-pointer text-gray-300 hover:text-blue-400'
                                            onClick={() => setOpenClass(!openClass)} />
                                    </div>
                                    <hr />
                                    <li 
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Ekonomi");
                                    }}>
                                        Ekonomi
                                    </li>
                                    <li 
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Premium Ekonomi");
                                    }}>
                                        Premium Ekonomi
                                    </li>
                                    <li 
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("Bisnis");
                                    }}>
                                        Bisnis
                                    </li>
                                    <li 
                                        onClick={() => {
                                        setOpenClass(false);
                                        setselectClass("First");
                                    }}>
                                        First
                                    </li>
                                </ul>
                            </div>

                        
                        
                            <div className={`countWrap flex flex-col bg-white overflow-y-auto py-[0.2rem] px-[0.5rem] ${openClass? "max-h-60" : "max-h-0"}`}>
                                <div className='sticky top-0 mb-3 md:mb-1'>
                                    <p>Jumlah Penumpang</p>
                                </div>
                                <hr/>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                        <ImManWoman className='text-[1.5rem] mr-3 text-blue-400'/>
                                            <div className='flex flex-col'>
                                                <h1 className='text-[1rem]'>
                                                    Dewasa
                                                </h1>
                                                <h2 className='text-[0.7rem] text-gray-500'>
                                                    Usia 12+
                                                </h2>
                                            </div>
                                    </div>
                                    <div className='flex flex-row items-center '>
                                        <button
                                            className='cursor-pointer mr-2'
                                            onClick={() => setCountD(countD - 1)}
                                            disabled={countD === 0}>
                                            <BiMinusCircle />
                                        </button>
                                        <h2>{countD}</h2>
                                        <button
                                            className='cursor-pointer ml-2'
                                            onClick={() => setCountD(countD + 1)}>
                                            <BiPlusCircle/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                        <FaChild className='text-[1.5rem] mr-3 text-blue-400'/>
                                            <div className='flex flex-col'>
                                                <h1 className='text-[1rem]'>
                                                    Anak
                                                </h1>
                                                <h2 className='text-[0.7rem] text-gray-500'>
                                                    Usia 2-11
                                                </h2>
                                            </div>
                                    </div>
                                    <div className='flex flex-row items-center '>
                                        <button
                                            className='cursor-pointer mr-2'
                                            onClick={() => setCountA(countA - 1)}
                                            disabled={countA === 0}>
                                            <BiMinusCircle />
                                        </button>
                                        <h2>{countA}</h2>
                                        <button
                                            className='cursor-pointer ml-2'
                                            onClick={() => setCountA(countA + 1)}>
                                            <BiPlusCircle/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center py-[0.2rem] px-[0.5rem]'>
                                        <FaBabyCarriage className='text-[1.5rem] mr-3 text-blue-400'/>
                                            <div className='flex flex-col'>
                                                <h1 className='text-[1rem]'>
                                                    Bayi
                                                </h1>
                                                <h2 className='text-[0.7rem] text-gray-500'>
                                                    Di Bawah 2
                                                </h2>
                                            </div>
                                    </div>
                                    <div className='flex flex-row items-center '>
                                        <button
                                            className='cursor-pointer mr-2'
                                            onClick={() => setCountB(countB - 1)}
                                            disabled={countB === 0}>
                                            <BiMinusCircle/>
                                        </button>
                                        <h2>{countB}</h2>
                                        <button
                                            className='cursor-pointer ml-2'
                                            onClick={() => setCountB(countB + 1)}>
                                            <BiPlusCircle />
                                        </button>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>
            </div>

            <div className="w-full flex flex-row items-center justify-end px-[1.5rem] md:px-[4rem] py-[1rem]">
                <div className='flex items-center p-[0.5rem] bg-yellow-500 rounded-xl'>
                    <span>
                        <BiSearchAlt className='flex items-center text-[1.4rem] md:mr-2'/>
                    </span>
                    <button
                        className='flex items-center' 
                        type="submit">
                        {/* Cari Tiket */}
                        <h2 className='hidden md:flex'>
                            Cari Tiket
                        </h2>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card