import React, {useState} from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ChevronUpIcon, ShoppingBagIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

export default function Detail() {
  const navigate = useNavigate()
  return (
    <Disclosure>
      <div className='w-screen p-16'>
        <Disclosure.Button className='shadow-sm shadow-gray-400 rounded-xl p-8 w-full'>
        <div className='flex justify-between'>
        <p className='font-bold'>Binar</p>
        <div className='flex justify-around w-96 items-start'>
        <div>
            <p className='mx-auto'>20.00</p>
            <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400'>CGK</p>
        </div>
        <div>
            <p>23j5m</p>
            <div>
            <div className='border-b-[1.5px] w-16 border-gray-400 -mt-2 mb-2'></div>
            </div>
            <p>2 stop</p>
        </div>
        <div>
        <p>10:45<span className='text-sm'>(+1h)</span></p>
        <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto'>NRT</p>
        </div>
        <div className='flex'>
        <WifiIcon className='h-5 mr-4 text-blue-500'/>
        <ShoppingBagIcon className='h-5 text-blue-500'/>
        </div>
        </div>
        <div className='w-fit'>
        <h1 className='font-bold text-lg'>Rp. 2.500.000 / <span className='text-sm font-normal'>org</span></h1>
        <ButtonPrimary title="Beli Sekarang" click={()=>navigate('/')} />
        </div>
        </div>
        <div className="mx-auto w-full rounded-2xl bg-white">
              <Disclosure.Panel className="flex pt-4 h-48 text-left">
                <div className='flex flex-col justify-between h-48'>
                <p className='text-sm'>20.00 <br /> 28 Nov</p>

                <p className='text-sm'>23j5m</p>
                
                <p className='text-sm'>10:45 <br /> 29 Nov</p>
                </div>

                <div className='flex flex-col justify-between ml-6 items-center'>
                <div className='rounded-full p-1 bg-gray-400 h-2'></div>
                <div className='border-l-2 h-full'></div>
                <div className='rounded-full p-1 bg-gray-400 h-2'></div>
                </div>

                <div className='flex flex-col justify-between ml-6 h-48'>
                  <p>Jakarta <br/><span>Bandara Internasional Soekarno Hatta (CGK)</span></p>
                  <p className='p-4 bg-slate-100 rounded-md'>Indonesia BinarAir, QZ 7518</p>
                  <p>Bali <br/><span>Bandara Internasional Denpasar Ngurah Rai (DPS)</span></p>
                </div>
              </Disclosure.Panel>
        </div>
    </Disclosure.Button>
    </div>
    </Disclosure>
  )
}
