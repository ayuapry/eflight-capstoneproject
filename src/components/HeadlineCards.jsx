import React from 'react'
import { HeadingCard } from './HeadingCard'
import Holiday from '../assets/Holiday.png'
import {MdAirlineSeatLegroomExtra} from 'react-icons/md'
import {GiHotMeal,GiHandBag, GiUpgrade} from 'react-icons/gi'
import meals from '../assets/meals.png'
import seat from '../assets/seat.png'
import bag from '../assets/bag.png'
import baggage from '../assets/baggage.png'

export const HeadlineCards = () => {
  return (
    <>
    <div id='Destination' className='py-10'>
        <div className='max-w-[1240px] mx-auto px-4 text-center'>
            <h1>Our Top Tour Places</h1>
            <span className=''>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge.</span>
        </div>
        <div className='max-w-[1024px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
            <HeadingCard bg='https://media.istockphoto.com/id/474127808/id/foto/makam-kuno-yang-ditempa-di-batu.jpg?s=612x612&w=0&k=20&c=Cx0uX_fDvPjVz-9Kgw828cJLsnCbCRFqoMQ-MAisdMw=' text='Toraja Island' />
            <HeadingCard bg='https://media.istockphoto.com/id/653953140/id/foto/candi-hindu-di-bali.jpg?s=612x612&w=0&k=20&c=RHnKo1W5qOArOWwR3BHgd2GiAquTB0FGMouoEFlIXT4=' text='Bali' />
            <HeadingCard bg='https://media.istockphoto.com/id/692520370/id/foto/candi-prambanan.jpg?s=612x612&w=0&k=20&c=Vf2-yCqTbMLn-D6-7gKjK29jjFR00OdChCf2D3FA4ls=' text='Yogyakarta' />
            <HeadingCard bg='https://media.istockphoto.com/id/909449006/id/foto/pulau-padar.jpg?s=612x612&w=0&k=20&c=dODNFZUa47JpBSP9FQ_1nXhqki82tOEMdBRg6AImmxQ=' text='Labuan Bajo' />
            <HeadingCard bg='https://media.istockphoto.com/id/500798563/id/foto/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=dICfiBlbElOeu0UceZMoFpBJ7xJF5bKyriTRZmGXHO4=' text='Jakarta' />
            <HeadingCard bg='https://media.istockphoto.com/id/1164092944/id/foto/lanskap-perkebunan-teh-yang-indah-di-pagi-hari.jpg?s=612x612&w=0&k=20&c=PjbtnvVtI0MLMu8jFEoeiFlGI0uGqRBkZwO7O92tuPI=' text='Bandung' />
        </div>
        <div className='max-w-[1240px] mx-auto px-4 hidden md:flex items-center '>
            <div className='w-[40%]'>
                <img src={Holiday} alt="/" className='h-auto w-auto object-cover ' />
            </div>
            <div className='w-[50%]'>
                <h1>Ordering Tickets and Planning Vacations Made Easy</h1>
                <div className='border-l-4 py-3 border-blue-600 px-4'>
                    <div>
                        <h2>Easily Book Tickets and Hotels.</h2>
                        <p className='text-justify'>Book flight tickets easily and quickly. No need to worry, with just one touch of a finger, you can easily get the flight ticket you need.</p>
                    </div>
                    <div className='mt-4'>
                        <h2>Lots of Special Promos.</h2>
                        <p className='text-justify'>Many promos for your favorite airline tickets. Get the best price discounts so that your vacation budget is even more economical. There is no more reason to postpone your vacation.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto px-4'>
            <h1 id='Services' className='text-center py-4'>Discover further services</h1>
            <div className='bg-slate-50 px-4 md:px-20 h-full pb-5 md:pb-20 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
                <div className='flex flex-col items-center'>
                    <img src={seat} alt='seat' className='h-16 mb-2' />
                    <p className='font-semibold text-center'>ADITIONAL SEAT</p>
                    <h3 className='font-light'>Reserve your seat before flight that best suit for you</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={bag} alt='bag' className='h-16 mb-2' />
                    <p className='font-semibold text-center'>MORE BAGS</p>
                    <h3 className='font-light' style={{textJustify: "inter-character"}}>Purchasing extra baggage allowance before your flight to stress-free travel</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={meals} alt='meals' className='h-16 mb-2' />
                    <p className='font-semibold text-center'>SPECIAL MEALS</p>
                    <p className='font-light'>Make your travel easy and enjoyable with delicious in-flight meals service</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={baggage} alt='baggage' className='h-16 mb-2' />
                    <p className='font-semibold text-center'>CABIN UPGRADE</p>
                    <p className='font-light'>Treat yourself to an upgrade and enjoy better amenities for your flight</p>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}
