import React, {useState} from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ShoppingBagIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Detail() {
  const navigate = useNavigate()

  return (
    <Disclosure>
      <div className='w-screen p-16'>
        <div className='shadow-sm shadow-gray-400 rounded-xl p-8 w-full'>
        <div className='flex justify-between'>
        <p className='font-bold'>Binar</p>
        <div className='flex justify-between w-96 items-start'>
        <div>
            <p className='mx-auto'>20.00</p>
            <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400'>CGK</p>
        </div>
        <div className='text-center'>
            <p>23j5m</p>
            <div className='flex items-center -mt-2'>
            <div className='p-1 border-[1.5px] border-gray-400 rounded-full'></div>
            <div className='border-b-[1.5px] w-24 border-gray-400'></div>
            <div className='p-1 border-[1.5px] border-gray-400 bg-gray-400 rounded-full'></div>
            </div>
            <p>langsung</p>
        </div>
        <div>
        <p>10:45<span className='text-sm'>(+1h)</span></p>
        <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto'>DPS</p>
        </div>
        <div className='flex'>
        <WifiIcon className='h-5 mr-4 text-sky-600'/>
        <ShoppingBagIcon className='h-5 text-sky-600'/>
        </div>
        </div>
        <div className='w-fit'>
        <h1 className='font-bold text-lg'>Rp. 2.500.000 / <span className='text-sm font-normal'>org</span></h1>
        <ButtonPrimary title="Beli Sekarang" click={()=>navigate('/')} />
        </div>
        </div>
        <Tab.Group>
        <Tab.List>
          {/* <Disclosure.Button className="flex space-x-1 w-1/2"> */}
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
              Detail Penerbangan
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
              Detail Harga
            </Tab>
            {/* </Disclosure.Button> */}
        </Tab.List>
        <div className='border-b-2 w-full'></div>
        {/* <Disclosure.Panel> */}
        <Tab.Panels className="mt-4">
            <Tab.Panel>
            <div className="flex mx-auto w-full rounded-2xl bg-white">
            <div className='flex flex-col justify-between h-60 w-14 mr-10'>
              <p className='text-sm'>20.00 <br /> 28 Nov</p>

              <p className='text-sm'>23j5m</p>

              <p className='text-sm mb-0'>10:45 <br /> 29 Nov</p>
            </div>

            <div className='flex flex-col justify-between items-center h-60 py-4'>
              <div className='rounded-full p-1 border-2 border-sky-600 h-2'></div>
              <div className='border-l-2 border-sky-600 h-full'></div>
              <div className='rounded-full p-1 border-2 border-sky-600 bg-sky-600 h-2'></div>
            </div>

            <div className='flex flex-col justify-between ml-10 h-60 align-bottom w-full'>
              <p className='mb-0'>Jakarta <br /><span>Bandara Internasional Soekarno Hatta (CGK)</span></p>
              <div className='p-4 w-full bg-sky-50 rounded-md pb-0'>
              <p className='border-b-2 border-sky-200 w-full pb-4'>Indonesia BinarAir, QZ 7518 | ECONOMY</p>
              <p className='flex'><ShoppingBagIcon className='h-5 text-sky-600 mr-2'/><span className='font-medium text-sm'>Kabin : 7 kg  |  Bagasi : 20 kg</span></p>
              </div>
              <p className='mb-0'>Bali <br /><span>Bandara Internasional Denpasar Ngurah Rai (DPS)</span></p>
            </div>
            </div>
            </Tab.Panel>
            <Tab.Panel>
              <p>Tarif</p>
              <div className='flex justify-between'>
              <li className='text-gray-400'>Dewasa</li>
              <p>IDR 875.000</p>
              </div>
              <br /><br />
              <p>Pajak dan Biaya Lainnya</p>
              <div className='flex justify-between'>
              <li className='text-gray-400'>Pajak</li>
              <p>Termasuk</p>
              </div>
              <div className='border-b-2 w-full'></div>
              <div className='flex justify-between mt-4'>
              <li>Total Pembayaran</li>
              <p className='text-sky-500 font-medium'>IDR 875.000</p>
              </div>
            </Tab.Panel>
        </Tab.Panels>
      {/* </Disclosure.Panel> */}
      </Tab.Group>
        </div>
    </div>

    </Disclosure>
  )
}
