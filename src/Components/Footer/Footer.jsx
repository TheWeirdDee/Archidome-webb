/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);

  return (
    <div className='bg-white-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>
          <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
            <div data-aos="fade-up">
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
              <ul className='mt-2 -space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>About Us</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Services</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Project</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Team</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Blog</a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up">
              <p className='font-medium tracking-wide text-gray-300'>Services</p>
              <ul className='mt-2 -space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Architectural Designs</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Interior Designs</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Residential Designs</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Commercial Designs</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Renovation and Restoration Designs</a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up">
              <p className='font-medium tracking-wide text-gray-300'>Projects</p>
              <ul className='mt-2 -space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Architectural</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Interior</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Commercial</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Residential</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Renovation & Restoration</a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up">
              <p className='font-medium tracking-wide text-gray-300'>Resources</p>
              <ul className='mt-2 -space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Blog</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>FAQs</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Glossary</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-purple-900'>Downloads</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='md:max-w-md lg:col-span-2 lg:mt-0' data-aos="fade-up">
            <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
            <form className='mt-4 flex flex-col md:flex-row'> 
              <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:0 focus:border-purple-900 focus:outline-none' />
              <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bgpurple-900 focus:outline-none border'>
                  Subscribe
              </button>
            </form>
            <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda nam, sit commodi culpa enim quaerat autem esse eum. Commodi?</p>
          </div>
        </div>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row' data-aos="fade-up">
          <p className='text-sm text-gray-500'>© copyright 2024 | All rights reserved.</p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href="" className='text-gray-700 transition-all duration-300 hover:text-purple-900'><FaTwitter className='h-6 w-6' /> </a>
            <a href="" className='text-gray-700 transition-all duration-300 hover:text-purple-900'><FaLinkedin className='h-6 w-6' /> </a>
            <a href="" className='text-gray-700 transition-all duration-300 hover:text-purple-900'><FaFacebookSquare className='h-6 w-6' /> </a>
            <a href="" className='text-gray-700 transition-all duration-300 hover:text-purple-900'><FaInstagramSquare className='h-6 w-6' /> </a>
            <a href="" className='text-gray-700 transition-all duration-300 hover:text-purple-900'><FaWhatsappSquare className='h-6 w-6' /> </a>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Footer;
