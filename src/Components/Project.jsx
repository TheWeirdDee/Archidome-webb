/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',  
      once: true  
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pt-20" data-aos="fade-up">
        <div className="flex items-center">
          <h1 className="text-white text-3xl pl-8 border-r-2 border-gray-600">
            Projects 
            <span className="flex flex-col text-sm pr-8">
              <p className="lg:whitespace-nowrap lg:pt-2">Featured Projects</p>
            </span>
          </h1>
          <div className="flex flex-col ml-4">
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum doloremque tempora asperiores iure aliquam assumenda est aspernatur, esse sint nulla
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8" data-aos="fade-up" data-aos-delay="200">
        <div className="text-white flex flex-wrap justify-center">
          <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8 hover:text-purple-900">All Works</a>
          <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8 hover:text-purple-900">Architectural</a>
          <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8 hover:text-purple-900">Interior</a>
          <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8 hover:text-purple-900">Residential</a>
          <a href="#" className="mr-4 mb-2 md:mb-0 md:mr-8 hover:text-purple-900">Commercial</a>
          <a href="#" className="mb-2 md:mb-0 hover:text-purple-900">Renovation and Restoration</a>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
         
      </div>
    </div>
  );
};

export default Project;
