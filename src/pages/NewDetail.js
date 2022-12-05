import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ChevronDownIcon, ShoppingBagIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Filter from '../components/Filter';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Button, Drawer } from 'antd';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NewDetail() {
  const [inputValue, setInputValue] = useState(1);
  const navigate = useNavigate()

  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeBerangkat = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='w-full lg:p-16 p-4 flex'>
      <Filter />
      <div className='shadow-sm shadow-gray-400 rounded-xl lg:p-8 p-4 w-full lg:ml-8 h-fit'>
        <div className='flex justify-between'>
        <p className='font-bold'>Binar</p> 
        <ChevronDownIcon onClick={showDrawer} className='h-4 lg:hidden cursor-pointer'/>
        </div>
          <div className='flex justify-between w-full text-sm items-center lg:items-start'>
          <div>
              <p className='mx-auto'>20.00</p>
              <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400'>CGK</p>
          </div>
          <div className='text-center text-xs items-center h-full'>
              <p>23j5m</p>
              <div className='flex items-center -mt-2'>
              <div className='p-1 border-[1.5px] border-gray-400 rounded-full'></div>
              <div className='border-b-[1.5px] lg:w-24 w-14 border-gray-400'></div>
              <div className='p-1 border-[1.5px] border-gray-400 bg-gray-400 rounded-full'></div>
              </div>
              <p>langsung</p>
          </div>
          <div>
          <p>10:45<span className='lg:text-sm'>(+1h)</span></p>
          <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto'>DPS</p>
          </div>
          <div className='lg:flex hidden'>
          <WifiIcon className='h-5 mr-4 text-sky-600'/>
          <ShoppingBagIcon className='h-5 text-sky-600'/>
          </div>
          <div className='lg:-mt-2 lg:block ml-4 lg:ml-0'>
          <h1 className='font-bold lg:text-lg text-sm'>Rp. 2.500.000 / <span className='lg:text-sm text-xs font-normal pt-0'>org</span></h1>
          <ButtonPrimary title="Pilih" click={()=>navigate('/booking')} className='text-sm lg:text-base'/>
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
            </Tab.List>
            <Tab.Panels className="mt-4 max-h-60">
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
              <p className='text-sky-500 font-medium mb-0'>IDR 875.000</p>
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
        title="JAKARTA - BALI"
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
              Detail Penerbangan
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
              Detail Harga
            </Tab>
            </Tab.List>
            <Tab.Panels className="mt-8 max-h-60">
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
              <p className='mb-0'><b>28 Nov - 20.00</b> <br /> Jakarta <br /><span>Bandara Internasional Soekarno Hatta (CGK)</span></p>
              <div className='p-4 w-full bg-sky-50 rounded-md pb-0'>
              <p className='border-b-2 border-sky-200 w-full pb-4'>Indonesia BinarAir, QZ 7518 | ECONOMY</p>
              <p className='flex'><ShoppingBagIcon className='h-5 text-sky-600 mr-2'/><span className='font-medium text-sm'>Kabin : 7 kg  |  Bagasi : 20 kg</span></p>
              </div>
              <p className='mb-0'> <b>29 Nov - 10:45</b> <br /> Bali <br /><span>Bandara Internasional Denpasar Ngurah Rai (DPS)</span></p>
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
              <p className='text-sky-500 font-medium mb-0'>IDR 875.000</p>
              </div>
            </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </div>
            <div className='flex justify-between items-center lg:hidden'>
              <p className='font-medium mb-0'>Total <br /> <span className='text-base font-medium'>IDR 875.000</span></p>
              <div className='w-fit'>
              <ButtonPrimary title="Pilih" click={()=>navigate('/booking')} className='text-sm lg:text-base'/>
              </div>
            </div>
      </Drawer>
    </div>
  )
}
