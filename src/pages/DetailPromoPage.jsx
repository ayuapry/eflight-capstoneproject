import { data } from 'autoprefixer';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Pagination from '../components/Pagination';
import { getDetPromo } from '../redux/feature/promoSlice';
import  promoImg from '../assets/promo4.png'

const DetailPromoPage = () => {
    const {detPromo,pagination } = useSelector((state) => state.promo);

    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
      dispatch(getDetPromo(id))
    },[dispatch, id]); 

    console.log("detpromo",detPromo);
    console.log("data pegination",pagination);
  return (
    <div className='bg-slate-100'>
        {/* <div className='max-w-[1240px] mx-auto px-4 flex items-center'> */}
        <Navbar />
        <div className='flex items-center h-screen justify-center '>
        <div className=' max-w-[1240px] mx-auto md:px-14 bg-slate-100 pt-[65px]'>
            <div className='grid md:grid-cols md:grid-cols-[65%_35%] gap-2 py-5'>
                <div className='flex flex-col rounded-md max-w-[1240px] mx-auto'>
                    {
                        pagination.length > 0 ? pagination.map(e => (
                        <div key={e.id} className="haii md:max-w-7xl mx-auto bg-white shadow-md p-5 rounded-md mb-2">
                            <div className=' grid md:grid-cols md:grid-cols-[25%_75%] gap-2 py-5'>
                                <div className='imgDet  max-w-[12rem] flex items-center justify-center' to={`/detail-promo/${e?.id}`}>
                                    <img src={e?.imageURL} alt="PromoBanner" className='rounded-md flex'/>
                                </div>
                                <div className='flex flex-col justify-center items-center pr-5'>
                                    <h1 className='text-[1rem] font-semibold mb-0 text-justify leading-relaxed'>
                                        {e?.title}
                                    </h1>
                                    <h2 className='text-[0.6rem] text-gray-600 text-justify mb-0 leading-relaxed'>
                                    {e?.description}
                                    </h2>
                                {/* </div> */}
                                </div>
                            </div>
                        </div>
                        )) : (
                            // <div className=''>

                            
                            <div key={detPromo.id} className="haii md:max-w-7xl mx-auto bg-white shadow-md p-5 rounded-md" >
                            <div className='img md:max-w-7xl flex items-center justify-center pb-5' to={`/detail-promo/${detPromo?.data?.id}`}>
                                <img src={detPromo?.data?.imageURL} alt="PromoBanner" className='rounded-md flex '/>
                            </div>
                            <div className='md:max-w-7xl mx-auto flex flex-col justify-center'>
                                <p className='text-[1.5rem] font-semibold mb-0 pb-3 text-justify'>
                                    {detPromo?.data?.title}
                                </p>
                                <p className='text-[0.9rem] text-gray-600 text-justify mb-0 leading-relaxed'>
                                {detPromo?.data?.description}
                                </p>
                            </div>
                        {/* </div> */}
                        </div>
                        )
                    }
                </div>
                <div className='py-5 max-w-[1240px] mx-auto bg-white shadow-md rounded-md h-fit'>
                    <img src={promoImg} alt="PromoImg" />
                </div>
            </div>
                    <Pagination/>
        </div>
        </div>
    </div>
  )
}

export default DetailPromoPage