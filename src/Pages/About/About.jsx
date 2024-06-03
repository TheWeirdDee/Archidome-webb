/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './About.css';
import AboutComponent from '../../Components/AboutComponent';
import Slider from '../../Components/Slider';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
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
      <div className="Abouthero min-h-screen px-4 py-32 flex items-center justify-center" data-aos="fade-up">
        <div className="text-center text-white p-8 abouthero-text">
          <h1 className="text-5xl md:4xl lg:text-7xl text-green-400 font-bold mb-4 aboutherotext">A Reflection Of Our Collective Imagination</h1>
          <p className="text-xl mb-6 sectionAboutP">With a legacy built on creativity, craftsmanship, and collaboration, we are dedicated to shaping spaces that transcend the ordinary and inspire the extraordinary.</p>
          <button className="btn">
            Explore More <img src="" alt=""/>
          </button>
        </div>
      </div>

      <AboutComponent />
      
      <div className='sectionAbout'>
        <div className='AboutUs first' data-aos="fade-right">
          <h3 className='ht'>Vision</h3>
          <p className='sectionAboutP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo architecto fugit aut aperiam velit minus soluta nostrum veniam, nesciunt voluptates repellendus! Reiciendis molestiae.</p>
        </div>
        <div className='AboutUs second' data-aos="fade-left">
          <h3 className='ht'>Mission</h3>
          <p className='sectionAboutP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo architecto fugit aut aperiam velit minus soluta nostrum veniam, nesciunt voluptates repellendus! Reiciendis molestiae.</p>
        </div>
        <div className='AboutUs three' data-aos="fade-up">
          <h3 className='ht'>ArchiDome</h3>
          <p className='sectionAboutP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo architecto fugit aut aperiam velit minus soluta nostrum veniam, nesciunt voluptates repellendus! Reiciendis molestiae.</p>
        </div>  
      </div>
    
    <Slider data-aos="zoom-in" />  
    <Footer />
    </div>
  );
}

export default About;
