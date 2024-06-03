/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Blog.css';
import BlogPage from '../../Components/BlogPage';
import Footer from '../../Components/Footer/Footer';

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
  }, []);

  return (
    <div>
      <div
        className="px-4 py-32 bg-white mx-auto blogbanner"
        data-aos="fade-in"  
      >
        <div className="text-white text-center">
          <h1
            className="blogherotext text-white text-5xl lg:text-7xl leading-snug font-bold mb-5"
            data-aos="fade-up"  
          >
            The Future Of Architecture
          </h1>
          <p
            className="text-gray-300 lg:w-3/5 mx-auto"
            data-aos="fade-up"  
            data-aos-delay="200"  
          >
            Explore the latest trends, groundbreaking projects, and visionary ideas shaping the skyline of tomorrow.
          </p>
          <p
            className="text-gray-300 lg:w-3/5 mx-auto mb-5"
            data-aos="fade-up"  
            data-aos-delay="400"  
          >
            Join our community of architects, designers, and enthusiasts as we delve into the art and science of creating spaces that inspire.
          </p>
          <div data-aos="fade-up" data-aos-delay="600">  
            <Link
              to="/"
              className="font-medium hover:text-white-500 btn inline-flex items-center"
            >
              Explore Further <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <BlogPage />
      <Footer />
    </div>
  );
}

export default Blog;
