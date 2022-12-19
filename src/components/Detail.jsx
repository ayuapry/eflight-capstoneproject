import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ChevronDownIcon, ShoppingBagIcon, TvIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Filter from '../components/Filter';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Button, Drawer } from 'antd';
import { getTiket } from '../redux/feature/homeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import format from 'date-fns/format'
import { MdFoodBank } from 'react-icons/md'
import Meal from '../assets/meal.png'
import Entertain from '../assets/entertain.png'
import Bagage from '../assets/bagIcon.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Detail() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const {tiket, loading} = useSelector ((state) => state.homepage)
    const dispatch = useDispatch()
    const {D} = useParams()
    const {A} = useParams()
    const {B} = useParams()

    useEffect(() => {
      dispatch(getTiket())
    },[dispatch]); 

    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

    
  return (
    <div className='w-full'>
      {tiket && tiket.map((tiket,index) => {
        return (
      <div key={tiket.id} className='max-w-7xl mx-auto'>
      <div className='shadow-sm shadow-gray-400 rounded-xl lg:p-8 p-4 h-fit mb-4 bg-white lg:mx-20'>
        <div className='flex justify-between mb-2'>
        <div className='flex items-center'>
        <img src={tiket?.airLinesLogoURL} alt='airplane-logo' className='h-6 mr-2'/>
        <p className='font-bold mb-0'>{tiket.airlines}</p> 
        </div>
        <ChevronDownIcon onClick={showDrawer} className='h-4 lg:hidden cursor-pointer'/>
        </div>
          <div className='flex justify-between w-full text-sm items-center lg:items-start'>
          <div>
              <p className='mx-auto'>{(tiket.departureTime).slice(0,-3)}</p>
              <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400'>{tiket.iataOriginAirport}</p>
          </div>
          <div className='text-center text-xs items-center h-full'>
              <p>{tiket.flightDuration}</p>
              <div className='flex items-center -mt-2'>
              <div className='p-1 border-[1.5px] border-gray-400 rounded-full'></div>
              <div className='border-b-[1.5px] lg:w-24 w-14 border-gray-400'></div>
              <div className='p-1 border-[1.5px] border-gray-400 bg-gray-400 rounded-full'></div>
              </div>
              <p>Direct</p>
          </div>
          <div>
          <p>{(tiket.arrivalTime).slice(0,-3)}<span className='lg:text-sm'></span></p>
          <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto'>{tiket.iataDestinationAirport}</p>
          </div>
          <div className='lg:flex hidden'>
              {tiket.facilities && tiket.facilities.map((fc, index) => {
                  return(
                    fc.name === 'Meal' ? <img src={Meal} className='h-6 mr-2' /> : fc.name === 'Entertainment' ? <img src={Entertain} className='h-6 mr-2' /> : <img src={Bagage} className='h-6 mr-2' />
                  )
              })}
          </div>
          <div className='lg:-mt-2 lg:block ml-4 lg:ml-0'>
          <h1 className='font-bold lg:text-lg text-sm'>{(tiket.price.display).slice(0,-3)} / <span className='lg:text-sm text-xs font-normal pt-0'>pax</span></h1>
          <ButtonPrimary title="SELECT" click={()=>navigate(`/Booking/${tiket.aircraft.id}/${tiket.departureTime}`)} className='text-sm lg:text-base'/>
          </div>
          </div>
          <div className='flex mt-2 lg:hidden'>
          <WifiIcon className='lg:h-5 h-4 mr-4 text-sky-600'/>
          <ShoppingBagIcon className='lg:h-5 h-4 text-sky-600'/>
        
        </div>
        <div className='hidden lg:block'>
        <Disclosure>
        {({ open }) => (
          <>
          <Disclosure.Button className="flex w-full mt-4 rounded-lg justify-center text-left text-sm text-gray-400">
            <span>View Detail</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-gray-400`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <Tab.Group>
            <Tab.List>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-fit py-2.5 text-sm leading-5 text-sky-600 mr-4',
                  ' focus:outline-none focus:border-b-2 focus:border-sky-500',
                  selected
                    ? 'font-medium'
                    : 'text-sky-500'
                )
              }
            >
              Flight Details
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-fit py-2.5 text-sm leading-5 text-sky-600',
                  ' focus:outline-none focus:border-b-2 focus:border-sky-500',
                  selected
                    ? 'font-medium'
                    : 'text-sky-500'
                )
              }
            >
              Price Details
            </Tab>
            </Tab.List>
            <Tab.Panels className="mt-4 max-h-72">
            <Tab.Panel>
            <div className="flex mx-auto w-full rounded-2xl bg-white">
            <div className='flex flex-col justify-between h-60 w-20 mr-10'>
              <p className='text-sm'>{(tiket.departureTime).slice(0,-3)}<br />{format(new Date(`${tiket.departureDate}`), 'dd MMM')}</p>

              <p className='text-sm'>{tiket.flightDuration}</p>

              <p className='text-sm mb-0'>{(tiket.arrivalTime).slice(0,-3)} <br /> {format(new Date(`${tiket.arrivalDate}`), 'dd MMM')}</p>
            </div>

            <div className='flex flex-col justify-between items-center h-60 py-4'>
              <div className='rounded-full p-1 border-2 border-sky-600 h-2'></div>
              <div className='border-l-2 border-sky-600 h-full'></div>
              <div className='rounded-full p-1 border-2 border-sky-600 bg-sky-600 h-2'></div>
            </div>

            <div className='flex flex-col justify-between ml-10 h-60 align-bottom w-full'>
              <p className='mb-0'>{tiket.originCity} <br /><span>{tiket.originAirport}</span></p>
              <div className='p-4 w-full bg-sky-50 rounded-md pb-0'>
              <p className='border-b-2 border-sky-200 w-full pb-4'>Indonesia {tiket.airlines}, {tiket.aircraft.type} | {tiket.flightClass}</p>
              <p className='flex'><ShoppingBagIcon className='h-5 text-sky-600 mr-2'/><span className='font-medium text-sm'>Kabin : {tiket.aircraft.freeBaggageCabin} KG  |  Bagasi : {tiket.aircraft.freeBaggage} KG</span></p>
              </div>
              <p className='mb-0'>{tiket.destinationCity} <br /> {tiket.destinationAirport}</p>
            </div>
            </div>
            </Tab.Panel>
            <Tab.Panel>
              <p>Far</p>
              {D != 0 ? <div className='flex justify-between'>
              <li className='text-gray-400'>Adult (x{D})</li>
              <p>{tiket.price.amount * D}</p>
              </div> : ''}
              {A != 0?<div className='flex justify-between'>
              <li className='text-gray-400'>Child (x{A})</li>
              <p>{tiket.price.amount * A}</p>
              </div>:''}
              {B != 0?<div className='flex justify-between'>
              <li className='text-gray-400'>Infant (x{B})</li>
              <p>{tiket.price.amount * B}</p>
              </div>:''}
              <br />
              <p>Tax and other fees</p>
              <div className='flex justify-between'>
              <li className='text-gray-400'>Tax</li>
              <p>Included</p>
              </div>
              <div className='border-b-2 w-full'></div>
              <div className='flex justify-between mt-4'>
              <p>Total</p>
              <p className='text-sky-500 font-medium mb-0'>
              {(tiket.price.amount * D) + (tiket.price.amount * A) + (tiket.price.amount * B)}
              </p>
              </div>
            </Tab.Panel>
            </Tab.Panels>
            </Tab.Group>
          </Disclosure.Panel>
          </>
        )}
        </Disclosure>
        </div>
      </div>
      <Drawer
        title={`${tiket.originCity}`+' - '+`${tiket.destinationCity}`}
        placement={"bottom"}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
        height="70vh"
        bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "1rem"}}
      >
        <div>
        <Tab.Group>
            <Tab.List>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-fit leading-5 text-sky-600 mr-4',
                  ' focus:outline-none focus:border-b-2 focus:border-sky-500',
                  selected
                    ? 'font-medium'
                    : 'text-sky-500'
                )
              }
            >
              Flight Details
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-fit leading-5 text-sky-600',
                  ' focus:outline-none focus:border-b-2 focus:border-sky-500',
                  selected
                    ? 'font-medium'
                    : 'text-sky-500'
                )
              }
            >
              Price Detail
            </Tab>
            </Tab.List>
            <Tab.Panels className="mt-8 max-h-64">
            <Tab.Panel>
            <div className="flex mx-auto w-full rounded-2xl bg-white">
            {/* <div className='flex flex-col justify-between h-60 w-14 mr-10'>
              <p className='text-sm'>20.00 <br /> 28 Nov</p>

              <p className='text-sm'>23j5m</p>

              <p className='text-sm mb-0'>10:45 <br /> 29 Nov</p>
            </div> */}

            <div className='flex flex-col justify-between items-center h-60 py-4'>
              <div className='rounded-full p-1 border-2 border-sky-600 h-2'></div>
              <div className='border-l-2 border-sky-600 h-full'></div>
              <div className='rounded-full p-1 border-2 border-sky-600 bg-sky-600 h-2'></div>
            </div>

            <div className='flex flex-col justify-between ml-10 h-60 align-bottom w-full'>
              <p className='mb-0'><b>28 Nov - 20.00</b> <br /> <span>{tiket.originAirport}</span></p>
              <div className='p-4 w-full bg-sky-50 rounded-md pb-0'>
              <p className='border-b-2 border-sky-200 w-full pb-4'>Indonesia {tiket.airlines}, {tiket.aircraft.type} | {tiket.flightClass}</p>
              <p className='flex'><ShoppingBagIcon className='h-5 text-sky-600 mr-2'/><span className='font-medium text-sm'>Kabin : {tiket.aircraft.freeBaggageCabin} KG  |  Bagasi : {tiket.aircraft.freeBaggage} KG</span></p>
              </div>
              <p className='mb-0'> <b>29 Nov - 10:45</b> <br /><span>{tiket.destinationAirport}</span></p>
            </div>
            </div>
            </Tab.Panel>
            <Tab.Panel>
              <p>Far</p>
              { D != 0 ? <div className='flex justify-between'>
              <li className='text-gray-400'>Adult (x{D})</li>
              <p>{tiket.price.amount * D}</p>
              </div> : ''}
              { A != 0 ? <div className='flex justify-between'>
              <li className='text-gray-400'>Child (x{A})</li>
              <p>{tiket.price.amount * D}</p>
              </div> : ''}
              { B != 0 ? <div className='flex justify-between'>
              <li className='text-gray-400'>Infant (x{B})</li>
              <p>{tiket.price.amount * D}</p>
              </div> : ''}
              <br /><br />
              <p>Tax and other fees</p>
              <div className='flex justify-between'>
              <li className='text-gray-400'>Tax</li>
              <p>Included</p>
              </div>
              <div className='border-b-2 w-full'></div>
              <div className='flex justify-between mt-4'>
              <p>Total</p>
              <p className='text-sky-500 font-medium mb-0'>
              {(tiket.price.amount * D) + (tiket.price.amount * A) + (tiket.price.amount * B)}
              </p>
              </div>
            </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </div>
            <div className='flex justify-between items-center lg:hidden'>
              <p className='font-medium mb-0'>Total <br /> <span className='text-base font-medium'>IDR 875.000</span></p>
              <div className='w-fit'>
              <ButtonPrimary title="SELECT" click={()=>navigate(`/Booking/${tiket.aircraft.id}/${tiket.departureTime}`)} className='text-sm lg:text-base'/>
              </div>
            </div>
      </Drawer>
      </div>
        )
      })
      }
      
    </div>
  )
}
