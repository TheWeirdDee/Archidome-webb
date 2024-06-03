/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../Pages/About/About.css';
import AboutUs from '../assets/AboutUs.jpg';
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',  
      once: true, 
      mirror: true,  
    });
  }, []);

  return (
    <div>
      <div className='about'>
  <div className='aboutLeft aboutt' data-aos="fade-right">
    <img src={AboutUs} alt="About Us" className='aboutimg md:w-full' />
  </div>
  <div className='aboutRight aboutt' data-aos="fade-left">
    <h3>About</h3>
    <h2>ArchiDome: Redefining Architecture For A New Era</h2>
    <p>At ArchiDome, we believe that architecture is more than just buildings; it is a reflection of society, culture, and innovation. Founded in 2016, our journey began with a simple yet profound vision: to create spaces that inspire and endure.</p>
    <p>Driven by a passion for design excellence and a commitment to client satisfaction, ArchiDome has evolved into a leading architectural firm known for its creativity, expertise, and dedication to pushing the boundaries of possibility.</p>
    <p>At ArchiDome, we do not just design buildings; we shape experiences. With every project, we strive to create spaces that inspire, evoke emotion, and leave a lasting impact on the world around us.</p>
    <p className='line'></p>
  </div>
</div>

      <Counter data-aos="fade-up" />
    </div>
  );
}

export default AboutComponent;
