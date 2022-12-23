import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { SecondFooter } from '../components/SecondFooter';

export const DetailArticle = () => {
    const { id } = useParams();

    const [detailArticle, setDetailArticle] = useState([]);
  
    const getDetailArticle = async () => {
      try {
        let response = await axios.get("https://63a5b0fc318b23efa79ae8d9.mockapi.io/api/v1/topplaces/article");
        console.log();
        setDetailArticle(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    useEffect(() => {
      getDetailArticle();
    }, []);

    return (
    <div className=''>
        <ScrollToTop />
        <Navbar />
        <div className='pt-[90px]'>
        <div className='max-w-[1240px] mx-auto md:px-14 md:h-screen'>
        {detailArticle.map((item) => {
            if (item.id === id) {
                return (
                <div key={item.id} className="mt-5">
                    <h1 className="text-center">{item.title}</h1>
                    <div className='flex align-center '>
                        <img src={item.image} alt="" className="mb-5 mx-auto rounded-md shadow-lg " />
                    </div>
                    <h6 className="fw-semibold mb-3 fs-5 fst-italic">{item.description}</h6>
                </div>
                );
            }
            else {
                return (<p></p>)
            }
        })}
        </div>
        </div>
        <Footer />
        <SecondFooter />
    </div>
  )
}
