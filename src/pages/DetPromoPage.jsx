import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { getDetPromo } from '../redux/feature/promoSlice';
import  promoImg from '../assets/promo4.png'
import ButtonPrimary from '../components/ButtonPrimary';
import Footer from '../components/Footer'
import { SecondFooter } from '../components/SecondFooter';

const DetPromoPage = () => {
    const {detPromo,pagination } = useSelector((state) => state.promo);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
      dispatch(getDetPromo(id))
    },[dispatch, id]); 

    const SeePromos = () => {
        navigate("/allpromo")
    }

    console.log("detpromo",detPromo);
    console.log("data pegination",pagination);
  return (
    <div className='bg-slate-100 min-h-screen'>
        <Navbar />
        <div className='flex items-center justify-center flex-col'>
            
        <div className=' max-w-[1240px] mx-auto px-4 md:px-14 bg-slate-100 pt-[65px]'>
            <h1 className='text-[1.4rem] md:text-[1.9rem] py-5 flex justify-center items-center mb-0'>
                Enjoy Our Great Ongoing Promos!
            </h1>
            <div className='flex flex-col gap-3 max-w-[1240px] mx-auto'>
                <div className='flex flex-col rounded-md max-w-[1240px] mx-auto'>
                            <div key={detPromo.id} className="haii md:max-w-7xl mx-auto bg-white shadow-md p-5 rounded-md" >
                            <div className='img w-full flex items-center justify-center pb-2'>
                                <img src={detPromo?.data?.imageURL} alt="PromoBanner" className='rounded-md flex w-[40rem]'/>
                            </div>
                            <div className='md:max-w-7xl mx-auto flex flex-col justify-center'>
                                <p className='text-[1.1rem] md:text-[1.5rem] leading-relaxed font-semibold mb-0 pb-2 text-justify'>
                                    {detPromo?.data?.title}
                                </p>
                                <p className='text-[0.85rem] md:text-[1rem] text-gray-600 font-light text-justify mb-0 leading-relaxed'>
                                {detPromo?.data?.description}
                                </p>
                            </div>
                        </div>
                </div>
                <div className='mb-5 w-full'>
                    <ButtonPrimary title='SEE ALL PROMOS' click={SeePromos} className='w-full'/>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        <SecondFooter/>
    </div>
  )
}

export default DetPromoPage