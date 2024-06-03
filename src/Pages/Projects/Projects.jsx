/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import Project from '../../Components/Project';
import Footer from '../../Components/Footer/Footer';
import ProjectsPage from '../../Components/ProjectsPage';

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',  
      once: true  
    });
  }, []);

  return (
    <div>
      <div className='px-4 py-32 bg-white mx-auto blogbanner' data-aos="fade-up">
        <div className='text-white text-center'>
          <h1 className='blogherotext text-white text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Projects</h1>
          <p className='text-gray-300 lg:w-3/5 mx-auto'>Explore the latest trends, groundbreaking projects, and visionary ideas shaping the skyline of tomorrow.</p>
          <p className='text-gray-300 lg:w-3/5 mx-auto mb-5'>Join our community of architects, designers, and enthusiasts as we delve into the art and science of creating spaces that inspire</p>
          <div>
            <Link to='/' className='font-medium hover:text-white-500 btn inline-flex items-center'>Explore Further <FaArrowRight className='mt-1 ml-2' /></Link>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Project />
        <ProjectsPage />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Footer />
      </div>
       
    </div>
  );
}

export default Projects;
