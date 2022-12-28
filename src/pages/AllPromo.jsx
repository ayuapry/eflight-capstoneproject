import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Pagination from '../components/Pagination';
import  promoImg from '../assets/promo4.png'
import ButtonPrimary from '../components/ButtonPrimary';
import Footer from '../components/Footer';
import { SecondFooter } from '../components/SecondFooter';

const AllPromo = () => {
    const { pagination } = useSelector((state) => state.promo);
    const {id} = useParams();
    console.log(id);
    console.log("data pegination",pagination);
    const navigate = useNavigate();

    const seeMore = (id) => {
        navigate(`/detailpromo/${id}`);
    };
  return (
    <div className='bg-slate-100 min-h-screen'>
        <Navbar />
        <div className='min-h-screen'>
            <div className='w-full md:max-w-[1240px] mx-auto px-4 md:px-14 bg-slate-100 pt-[30px] md:pt-[65px]'>
                <div className='h-full md:h-[80vh]'>
                    <div className='flex flex-col md:grid gap-2 md:gap-4 md:grid-cols-2 rounded-md md:max-w-[1240px] md:mx-auto pt-10'>
                        {pagination && pagination.map((e) => {
                            return (
                                <div key={e.id} className="haii w-full md:max-w-7xl bg-white shadow-md p-3 md:p-5 rounded-md mb-0">
                                    <div className='hidden md:grid md:grid-rows md:grid-cols-[45%_55%] gap-2'>
                                        <div className='imgDet w-full flex items-center justify-center'>
                                            <img src={e?.imageURL} alt="PromoBanner" className='rounded-md flex'/>
                                        </div>
                                        <div className='hidden md:flex flex-col justify-center items-start pl-2 pr-5'>
                                            <h1 className='text-[1rem] font-semibold mb-0 leading-relaxed text-justify '>
                                                {e?.title}
                                            </h1>
                                            <div  className='mt-2 w-full'>
                                                <ButtonPrimary title="VIEW DETAIL" key={e.id} click={() => seeMore(e.id)}/>
                                            </div>
                                        </div>
                                    </div>
        
                                    {/* mobile */}
                                    <Link className='flex md:hidden' to={`/detailpromo/${e?.id}`}>
                                        <div className='imgDet w-full flex items-center justify-center'>
                                            <img src={e?.imageURL} alt="PromoBanner" className='rounded-md flex'/>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}  
                    </div>
                </div>
                    <Pagination/>
            </div>
        </div>
        <Footer/>
        <SecondFooter/>
    </div>
  )
}

export default AllPromo