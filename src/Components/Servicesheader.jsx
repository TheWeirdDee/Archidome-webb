/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Servicesheader = () => {
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
          <h1 className='text-white text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>Our Services</h1>
          <p className='text-gray-300 lg:w-3/5 mx-auto'>From innovative architectural designs to sustainable solutions, our team is dedicated to meeting your needs.</p>
          <p className='text-gray-300 lg:w-3/5 mx-auto mb-5'>Let us turn your architectural dream into reality together.</p>
          <div>
            <Link to='/' className='font-medium hover:text-white-500 btn inline-flex items-center'>Learn More <FaArrowRight className='mt-1 ml-2' /></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Servicesheader
