import React from 'react'
import BinarLogo from '../assets/BinarLogo.png'
import { SiFacebook, SiYoutubemusic, SiLinkedin } from 'react-icons/si';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className="FooterWrap hidden md:flex flex-col bg-gray-100">
        <div className='FooterImg flex justify-center md:justify-start px-[3rem] md:px-16 py-[2rem] md:py-[2rem]'>
          <img 
            className='w-[10rem]'
            src={BinarLogo} 
            alt="BinarLogo" />
        </div>

          <div className='FooterText flex items-center md:items-start md:justify-between flex-col md:flex-row px-[3rem] md:px-16 pb-[1.5rem] md:pb-[4rem]'>
            <div className="FooterOne flex items-center md:items-start flex-col mb-5 md:mb-0">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-0 md:pb-5'>
                BinarAir
              </h2>
              <div className="FooterOneLink flex flex-col items-center md:items-start ">
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

            <div className="FooterOne flex items-center md:items-start flex-col mb-5 md:mb-0">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-0 md:pb-5'>
                BinarAir Service
              </h2>
              <div className="FooterOneLink flex flex-col items-center md:items-start ">
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
            
            <div className="FooterOne flex items-center md:items-start flex-col mb-5 md:mb-0">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-0 md:pb-5'>
                About BinarAir
              </h2>
              <div className="FooterOneLink flex flex-col items-center md:items-start ">
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

            <div className="FooterOne flex items-center md:items-start flex-col mb-5 md:mb-0">
              <h2 className='text-blue-800 text-[1.2rem] font-bold pb-0 md:pb-5'>
                FollowUs
              </h2>
              <div className="FooterOneLink flex flex-row gap-4 items-center md:items-start">
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
  )
}

export default Footer