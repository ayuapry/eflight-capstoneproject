import React from 'react'
import { Navbar } from '../components/Navbar'
import { OrderHistory } from '../components/OrderHistory'
import { SecondFooter } from '../components/SecondFooter';
import { SidebarHistory } from '../components/SidebarHistory';

export const HistoryPage = () => {
  return (
  <div className='bg-slate-100 h-full'>
    <Navbar />
      <div className='max-w-[1240px] min-h-screen mx-auto md:px-14 md:grid md:grid-cols-[30%_70%]'>
        <div className='md:mt-[90px]'>
            <SidebarHistory />
        </div>
        <div>
          <OrderHistory />
        </div>
    </div>
    <SecondFooter />
  </div>
  );
};