import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { SecondFooter } from '../components/SecondFooter';

export const DetailArticle = () => {
    const { id } = useParams();

    const [detailArticle, setDetailArticle] = useState([]);
  
    const getDetailArticle = async () => {
      try {
        let response = await axios.get("https://63a5b0fc318b23efa79ae8d9.mockapi.io/api/v1/topplaces/article");
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
        <div className='pt-[80px]'>
        <div className='max-w-[1240px] mx-auto md:px-14 px-5 md:h-screen'>
        {detailArticle.map((item) => {
            if (item.id === id) {
                return (
                <div key={item.id} className="mt-5">
                    <div className='flex align-center '>
                        <img src={item.image} alt="" className="mb-5 mx-auto rounded-md shadow-lg " />
                    </div>
                    <h1 className="text-center">{item.title}</h1>
                    <h6 className="mb-3 font-normal">{item.description}</h6>
                </div>
                );
            }
            else {
                return (<p></p>)
            }
        })}
        </div>
        </div>
        <SecondFooter />
    </div>
  )
}
