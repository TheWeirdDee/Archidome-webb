/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'
import Footer from './Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',  
      once: true,  
    })
  }, [])

  return (
    <div className='antialiased'>
      <div className='w-full bg-purple-900'>
        <div className='flex w-full min-h-screen justify-center items-center'>
          <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
            <div className='flex flex-col space-y-8 justify-between lg:w-1/2' data-aos="fade-up">
              <div><h1 className='font-bold text-4xl tracking-wide text-white'>Contact Us</h1></div>
              <p className='pt-2 text-gray-200 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laudantium debitis facere consectetur?</p>
              
              <div className='flex flex-col space-y-6'>
                <div className='inline-flex space-x-2 items-center'>
                  <FaPhone className='text-xl' />
                  <span className='pl-2'>09030129356</span>
                </div>
                <div className='inline-flex space-x-2 items-center'>
                  <FaMessage className='text-xl' />
                  <span className='pl-2'>divinenation1@gmail.com</span>
                </div>
                <div className='inline-flex space-x-2 items-center'>
                  <FaLocationDot className='text-xl' />
                  <span className='pl-2'>Lekki Palm City, Ajah</span>
                </div>
              </div>

              <div>
                <div className='flex space-x-4 text-lg'>
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaWhatsapp /></a>
                  <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 lg:w-1/2' data-aos="fade-up">
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="name" className='text-sm'>Your Name</label>
                  <input type="text" id="name" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-purple-900' />
                </div>
                <div>
                  <label htmlFor="email" className='text-sm'>Your Email</label>
                  <input type="email" id="email" placeholder='Your Email' className='ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-900' />
                </div>
                <div>
                  <label htmlFor="message" className='text-sm'>Message</label>
                  <textarea id="message" placeholder='Message' rows="4" className='ring-1 ring-gray-300 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-900'></textarea>
                </div>
                <button className='inline-block self-end btn'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
