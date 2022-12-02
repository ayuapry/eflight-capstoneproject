import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { ShoppingBagIcon, WifiIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Checkbox } from 'antd';
import { InputNumber, Slider, Segmented } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Input, Radio, Space } from 'antd';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NewDetail() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState(1);

  const onChangeHour = (newValue) => {
    setInputValue(newValue);
  };

  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeBerangkat = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }

  return (
    <div className='w-full lg:p-16 p-4 flex'>
      <div className='hidden lg:block'>
      <h1 className='text-lg'>Filter</h1>
      <div className='shadow-sm shadow-gray-400 rounded-xl p-2 w-72'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                <span>Transit</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-sky-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={"Langsung"}>Langsung</Radio>
                    <Radio value={"1 Transit"}>1 Transit</Radio>
                    <Radio value={"2+ Transit"}>2+ Transit</Radio>
                  </Space>
                </Radio.Group>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure>
          {({ open }) => (
            <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                <span>Durasi Penerbangan</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-sky-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className='flex justify-between items-center'>
                <p className='mb-0'>Durasi penerbangan</p>
                <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: '5', width: '4.5rem' }}
                      value={inputValue + ' h'}
                      onChange={onChangeHour}
                />
                </div>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChangeHour}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
              </Disclosure.Panel>
              
            </>
            )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                <span>Waktu</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-sky-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Waktu Berangkat</p>
                <Radio.Group onChange={onChange} style={{border: 0}}>
                  <div className='grid grid-cols-2 gap-4'>
                  <Radio.Button value="a" className='rounded-lg h-auto text-center'>Dini Hari <br /> 00:00 - 06:00</Radio.Button>
                  <div className='border-0'>
                  <Radio.Button value="b" className='rounded-lg h-auto text-center'>Pagi Hari <br /> 06:00 - 12:00</Radio.Button>
                  </div>
                  <div className='border-0'>
                  <Radio.Button value="c" className='rounded-lg h-auto text-center'>Siang - Sore <br /> 12:00 - 18:00</Radio.Button>
                  </div>
                  <div className='border-0'>
                  <Radio.Button value="d" className='rounded-lg h-auto text-center'>Malam Hari <br /> 18:00 - 24:00</Radio.Button>
                  </div>
                  </div>
                </Radio.Group>
                <br /><br />
                <p>Waktu Pulang</p>
                <Radio.Group onChange={onChange} style={{border: 0}}>
                  <div className='grid grid-cols-2 gap-4'>
                  <Radio.Button value="a" className='rounded-lg h-auto text-center'>Dini Hari <br /> 00:00 - 06:00</Radio.Button>
                  <div className='border-0'>
                  <Radio.Button value="b" className='rounded-lg h-auto text-center'>Pagi Hari <br /> 06:00 - 12:00</Radio.Button>
                  </div>
                  <div className='border-0'>
                  <Radio.Button value="c" className='rounded-lg h-auto text-center'>Siang - Sore <br /> 12:00 - 18:00</Radio.Button>
                  </div>
                  <div className='border-0'>
                  <Radio.Button value="d" className='rounded-lg h-auto text-center'>Malam Hari <br /> 18:00 - 24:00</Radio.Button>
                  </div>
                  </div>
                </Radio.Group>
              </Disclosure.Panel>
            </>
            )}
        </Disclosure>
        </div>
      </div>

      <div className='shadow-sm shadow-gray-400 rounded-xl p-8 w-full lg:ml-8 h-fit'>
      <div className='lg:flex lg:justify-between block'>
        <p className='font-bold'>Binar</p>
        <div className='flex justify-between lg:w-96 w-full items-start text-sm'>
        <div>
            <p className='mx-auto'>20.00</p>
            <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400'>CGK</p>
        </div>
        <div className='text-center text-xs'>
            <p>23j5m</p>
            <div className='flex items-center -mt-2'>
            <div className='p-1 border-[1.5px] border-gray-400 rounded-full'></div>
            <div className='border-b-[1.5px] lg:w-24 w-20 border-gray-400'></div>
            <div className='p-1 border-[1.5px] border-gray-400 bg-gray-400 rounded-full'></div>
            </div>
            <p>langsung</p>
        </div>
        <div>
        <p>10:45<span className='lg:text-sm'>(+1h)</span></p>
        <p className='px-2 bg-slate-100 w-fit rounded-full text-sm text-gray-400 mx-auto'>DPS</p>
        </div>
        <div className='hidden lg:flex'>
        <WifiIcon className='h-5 mr-4 text-sky-600'/>
        <ShoppingBagIcon className='h-5 text-sky-600'/>
        </div>
        </div>
        <div className='w-fit'>
        <h1 className='font-bold lg:text-lg text-sm'>Rp. 2.500.000 / <span className='lg:text-sm text-xs font-normal'>org</span></h1>
        <ButtonPrimary title="Beli Sekarang" click={()=>navigate('/booking')} className='text-sm lg:text-base'/>
        </div>
        </div>
        <Disclosure>
        {({ open }) => (
          <>
          <Disclosure.Button className="flex w-full mt-4 rounded-lg justify-center text-left text-sm text-gray-400">
            <span>View Detail</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-sky-500`}
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
  )
}
