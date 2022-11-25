import React, {useState} from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ChevronUpIcon, ShoppingBagIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

export default function Detail() {
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
        <ButtonPrimary title="Beli Sekarang" />
        </div>
        </div>
        <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
        </div>
    </Disclosure.Button>
    </div>
    </Disclosure>
  )
}
