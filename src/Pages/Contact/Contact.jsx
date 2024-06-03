/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Contact.css'
import ContactPage from '../../Components/ContactPage.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',  
      once: true,  
    })
  }, [])

  return (
    <div>
      <div className='px-4 py-32 bg-white mx-auto contactBanner' data-aos="fade-up">
        <div className='text-white text-center'>
          <h1 className='text-white text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>Get In Touch</h1>
          <p className='text-gray-300 lg:w-3/5 mx-auto'>Have questions or inquiries? Reach out to us today for expert advice, or to discuss your next project.</p>
          <p className='text-gray-300 lg:w-3/5 mx-auto mb-5'>Let us turn your architectural dream into reality together.</p>
          <div>
            <Link to='/' className='font-medium hover:text-white-500 btn inline-flex items-center'>Learn More <FaArrowRight className='mt-1 ml-2' /></Link>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  )
}

export default Contact
