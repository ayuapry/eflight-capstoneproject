import React from 'react'
import BinarLogo from '../image/BinarLogo.png'
import { SiFacebook, SiYoutubemusic, SiLinkedin } from 'react-icons/si';
import { FaInstagramSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <div className="FooterWrap bg-purple-50">
        <div className='FooterImg px-[3rem] md:px-[7rem] py-[2rem] md:py-[2rem]'>
          <img 
            className='w-[10rem]'
            src={BinarLogo} 
            alt="BinarLogo" />
        </div>

        <div className='FooterText flex justify-between flex-row px-[3rem] md:px-[7rem] pb-[1.5rem] md:pb-[4rem]'>
          <div className="FooterOne">
            <h2 className='text-purple-800 text-[1.2rem] font-bold pb-5'>
              Program Binar
            </h2>
            <div className="FooterOneLink flex flex-col">
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/binar-bootcamp'
                  target='blank'>
                Binar Bootcamp
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/binar-insight'
                  target='blank'>
                Binar Insight
                </a>
                <a
                  href='https://www.binaracademy.com/old-design/binar-go-6-sep'
                  target='blank'>
                BinarGO!
                </a>
            </div>
          </div>

          <div className="FooterOne">
            <h2 className='text-purple-800 text-[1.2rem] font-bold pb-5'>
              Layanan Binar
            </h2>
            <div className="FooterOneLink flex flex-col">
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/job-portal'
                  target='blank'>
                Hire Our Talent
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/old-design/rekrut-talent-digital-old'
                  target='blank'>
                Binar for Corporate
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/job-portal'
                  target='blank'>
                Job Connect
                </a>
            </div>
          </div>
          
          <div className="FooterOne">
            <h2 className='text-purple-800 text-[1.2rem] font-bold pb-5'>
              Tentang Binar
            </h2>
            <div className="FooterOneLink flex flex-col">
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/id/about'
                  target='blank'>
                Tentang Kami
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/blog'
                  target='blank'>
                Literasi
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/promo'
                  target='blank'>
                Promo & Diskon
                </a>
                <a
                  className='pb-1'
                  href='https://binaracademy.jobseeker.software/'
                  target='blank'>
                Karier
                </a>
                <a
                  className='pb-1'
                  href='https://www.binaracademy.com/privacy-policy'
                  target='blank'>
                Privacy Policy
                </a>
            </div>
          </div>

          <div className="FooterOne">
            <h2 className='text-purple-800 text-[1.2rem] font-bold pb-5'>
              FollowUs
            </h2>
            <div className="FooterOneLink flex flex-col items-center">
                <a
                  className='pb-2 text-[2rem] text-red-600' 
                  href='https://www.instagram.com/academybinar/'
                  target='blank'>
                  <FaInstagramSquare/>
                </a>
                <a
                  className='pb-2 text-[2rem] text-red-800'
                  href='https://www.youtube.com/c/BinarAcademy'
                  target='blank'>
                  < SiYoutubemusic />
                </a>
                <a
                  className='pb-2 text-[1.8rem] text-blue-600'
                  href='https://web.facebook.com/binaracademy/?_rdc=1&_rdr'
                  target='blank'>
                  <SiFacebook />
                </a>
                <a
                  className='pb-1 text-[1.7rem] text-green-800'
                  href='https://www.linkedin.com/school/binar-academy/mycompany/'
                  target='blank'>
                  <SiLinkedin/>
                </a>
            </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Footer