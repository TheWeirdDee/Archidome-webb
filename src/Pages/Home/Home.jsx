/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import AboutComponent from '../../Components/AboutComponent';
import Footer from '../../Components/Footer/Footer';
import Workflow from '../../Components/Workflow';
import Services from '../../Components/Services';
import Project from '../../Components/Project';
import Teamhome from '../../Components/Teamhome';
import Projectshome from '../../Components/Projectshome';
import Slider from '../../Components/Slider';

const Home = () => {
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
        <div className=" hero px-4 py-32 min-h-screen flex items-center justify-center">
      <div className="hero-text text-center text-white" data-aos="fade-up">
      <h1 className="homeherotext md:text-2xl lg:text-7xl">Where Architecture Meets Innovation</h1>
<p className="text-base md:text-lg lg:text-xl">
  We do not just design buildings; we craft experiences. Our team of visionary architects and designers are dedicated to creating spaces that inspire, innovate, and captivate.
</p>

        <button className="px-6 py-3 btn bg-white  font-semibold rounded-lg shadow-md   transition duration-300">Explore More</button>
      </div>
    </div>
      <AboutComponent />
       <Workflow />
       <Services />
       <Project />
       <Projectshome />
       <Slider />
       <Teamhome />
       <Footer />
     </div>
  );
}

export default Home;
