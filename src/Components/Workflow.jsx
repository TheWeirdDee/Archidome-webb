/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';

const Workflow = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',  
      once: true,  
      mirror: true, 
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-start text-white">Our Workflow</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 1: Planning</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <FaArrowRight className="hidden sm:inline absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 2: Design</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <FaArrowRight className="hidden sm:inline absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 3: Development</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <FaArrowDown className="hidden sm:inline absolute right-1/2 bottom-0 transform translate-x-1/2 text-gray-700" />
        </div>
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 6: Maintenance</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 5: Deployment</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <FaArrowLeft className="hidden sm:inline absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>
        <div className="relative p-6 m-4 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-semibold mb-4 text-white">Step 4: Testing</h2>
          <p className="text-gray-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <FaArrowLeft className="hidden sm:inline absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
