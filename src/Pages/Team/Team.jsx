/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Team.css';
import TeamsPage from '../../Components/TeamsPage';
import Footer from '../../Components/Footer/Footer';

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <div className='px-4 py-32 bg-white mx-auto teambanner'>
        <div className='text-white text-center' data-aos='fade-up'>
          <h1 className='teamherotext text-white text-5xl lg:text-7xl leading-snug font-bold mb-5'>
            Our Team
          </h1>
          <p className='text-gray-300 lg:w-3/5 mx-auto' data-aos='fade-up' data-aos-delay='200'>
            Our team comprises highly skilled architects, innovative designers, and meticulous project managers, each bringing a wealth of experience and creativity to the table.
          </p>
          <p className='text-gray-300 lg:w-3/5 mx-auto mb-5' data-aos='fade-up' data-aos-delay='400'>
            We thrive on collaboration, leveraging our diverse expertise to craft bespoke solutions that meet and exceed our clients expectations.
          </p>
          <div data-aos='fade-up' data-aos-delay='600'>
            <Link to='/' className='font-medium hover:text-white-500 btn inline-flex items-center'>
              Explore Further <FaArrowRight className='mt-1 ml-2' />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center max-w-2xl mx-auto px-8 pt-10" data-aos='fade-up'>
          <h4 className="text-2xl text-gray-500 font-semibold mb-2 pt-10">
            Expert Team
          </h4>
          <h1 className="text-4xl font-bold text-white mb-4">
            Architectural Team
          </h1>
          <p className='text-gray-500 text-lg leading-relaxed'>
            Together, we build more than just buildings; we shape environments that enhance the way people live, work, and interact.
          </p>
        </div>
      </div>
      <TeamsPage />
      <Footer />
    </div>
  );
}

export default Team;
