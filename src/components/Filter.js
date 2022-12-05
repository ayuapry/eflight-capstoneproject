import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Radio, Space, Slider, InputNumber } from 'antd';
import { useState } from 'react';

export default function Filter() {
    const [inputValue, setInputValue] = useState(1);
    const [value, setValue] = useState();

    const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    };

    const onChangeHour = (newValue) => {
        setInputValue(newValue);
      };    

  return (
    <div>
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
    </div>
  )
}
