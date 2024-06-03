/* eslint-disable no-unused-vars */
// src/components/Services.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const services = [
  {
    title: 'Evans George',
    description: 'CEO',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://s3.envato.com/files/341899796/235_1R3A1615.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/divine-dilibe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/divine.dilibe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/divine.dilibe' },
      { icon: FaTwitter, url: 'https://twitter.com/divine_dilibe' },
    ],
  },
  {
    title: 'Williams Gareth',
    description: 'Founder',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://st2.depositphotos.com/3917667/11003/i/950/depositphotos_110038202-stock-photo-the-smiling-male-office-worker.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Lucy James',
    description: 'Manager',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://wearethecity.com/wp-content/uploads/2021/07/shutterstock_1008711619.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div>
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
      <div className="container pt-8 flex flex-col items-center justify-center mx-auto" data-aos="fade-up">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <div key={index} className="bg-black shadow-md overflow-hidden" data-aos="fade-up">
        <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold mb-3 pt-2 text-white">{service.title}</h3>
          <h3 className="text-purple-900 font-bold">{service.description}</h3>
          <p className='text-gray-300 pt-3 mb-5'>{service.text}</p>
          <div className='flex justify-center items-center space-x-4'>
            {service.socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white">
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
          ))}
        </div>
      </div>
       
    </div>
  );
};

export default Services;
