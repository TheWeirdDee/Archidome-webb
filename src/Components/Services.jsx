/* eslint-disable no-unused-vars */
// src/components/Services.js
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'

const services = [
  {
    title: 'Architectural Designs',
    description: 'We create stunning architectural designs that meet your needs and preferences.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB5dLhJmylewfSi1UGMXWfJOkYFmai8AIvQ&s'  
  },
  {
    title: 'Interior Designs',
    description: 'Our interior designs bring beauty and functionality to your spaces.',
    imageUrl: 'https://cityfurnish.com/blog/wp-content/uploads/2023/07/modern-apartment-with-bold-bright-walls-perfect-showcasing-your-art-collection-min.jpg'  
  },
  {
    title: 'Residential Designs',
    description: 'Specialized in designing beautiful and sustainable residential spaces.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07Gi1J-7WBbQuDysTPFV2YsqmBznu3czd3w&s'
  },
  {
    title: 'Commercial Designs',
    description: 'Designing commercial spaces that are both functional and aesthetically pleasing.',
    imageUrl: 'https://xworks.ae/wp-content/uploads/2023/07/Best-Interior-Design-Companies-for-Global-Business.jpg'
  },
  {
    title: 'Renovation and Restoration Designs',
    description: 'Expertise in renovation and restoration to give your space a new life.',
    imageUrl: 'https://home3ds.com/wp-content/uploads/2020/06/Capture.jpg'
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className="container mx-auto py-12 flex flex-col items-center justify-center" data-aos="fade-up">
    <h2 className="text-white text-4xl font-bold text-center mb-8">Our Services</h2>
    <div className="text-center">
      <p className='text-gray-300'>From innovative architectural designs to sustainable solutions, our team is dedicated to meeting your needs.</p>
      <p className='text-gray-300 mb-5'>Let us turn your architectural dream into reality together.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-black shadow-md rounded-lg overflow-hidden" data-aos="fade-up">
          <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  


  );
};

export default Services;
