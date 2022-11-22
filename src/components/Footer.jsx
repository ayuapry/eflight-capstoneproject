import React from 'react'
import BinarLogo from '../image/BinarLogo.png'
import { SiFacebook, SiYoutubemusic, SiLinkedin } from 'react-icons/si';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="FooterWrap bg-blue-50">
        <div className='FooterImg px-[3rem] md:px-[7rem] py-[2rem] md:py-[2rem]'>
          <img 
            className='w-[10rem]'
            src={BinarLogo} 
            alt="BinarLogo" />
        </div>

          <div className='FooterText flex justify-between flex-row px-[3rem] md:px-[7rem] pb-[1.5rem] md:pb-[4rem]'>
            <div className="FooterOne">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-5'>
                BinarAir
              </h2>
              <div className="FooterOneLink flex flex-col ">
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/binar-bootcamp'
                    target='blank'>
                  About Us
                  </a>
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/binar-insight'
                    target='blank'>
                  Travel Warnings
                  </a>
                  <a
                    href='https://www.binaracademy.com/old-design/binar-go-6-sep'
                    target='blank'>
                  Sponsorship
                  </a>
              </div>
            </div>

            <div className="FooterOne">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-5'>
                BinarAir Service
              </h2>
              <div className="FooterOneLink flex flex-col">
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/job-portal'
                    target='blank'>
                  News
                  </a>
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/old-design/rekrut-talent-digital-old'
                    target='blank'>
                  Partners
                  </a>
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/job-portal'
                    target='blank'>
                  FAQ
                  </a>
              </div>
            </div>
            
            <div className="FooterOne">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-5'>
                About BinarAir
              </h2>
              <div className="FooterOneLink flex flex-col">
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/id/about'
                    target='blank'>
                  About Us
                  </a>
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/blog'
                    target='blank'>
                  Corporate Travel
                  </a>
                  <a
                    className='pb-1'
                    href='https://www.binaracademy.com/promo'
                    target='blank'>
                  Pomotion & Discounts
                  </a>
                  <a
                    className='pb-1'
                    href='https://binaracademy.jobseeker.software/'
                    target='blank'>
                  Career
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
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-5'>
                FollowUs
              </h2>
              <div className="FooterOneLink flex flex-col md:flex-row gap-4 items-center">
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
          <p className='text-center pb-10 '>Copyright © 2022 BinarAir</p>
        </div>
  )
}

export default Footer