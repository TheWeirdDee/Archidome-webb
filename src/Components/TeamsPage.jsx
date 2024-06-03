/* eslint-disable no-unused-vars */
// src/components/Services.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from './Project';
import Projectshome from './Projectshome';
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
  {
    title: 'Miriam Dell',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://i0.wp.com/amsterdamnews.com/wp-content/uploads/2021/03/BNY_LJoyWilliams_MaroHagopian_MG__headshot.jpg?fit=1200%2C949&ssl=1',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Daniel Thomas',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/53/40/61/1000_F_253406182_OFb1Ua1tBRRVxgcLwrvoMy7SInBexxTC.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Grace Stellar',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://images.herzindagi.info/image/2023/Sep/corporate-wear.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Ashley Looney',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://c8.alamy.com/comp/ED1EA7/1-indian-architect-lady-ED1EA7.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Susan Gru',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://www.theladders.com/wp-content/uploads/business_casual_190411-1490x838.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Rodney Danger',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://www.shutterstock.com/image-photo/architecture-construction-business-building-smiling-260nw-1307701033.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Emilia Cruz',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://static9.depositphotos.com/1003098/1120/i/450/depositphotos_11202717-stock-photo-portrait-of-young-woman-architect.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'James Nicolas',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://image.shutterstock.com/image-photo/architect-glasses-dressed-blue-checkered-260nw-1194065473.jpg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  },
  {
    title: 'Jude Smith',
    description: 'Architect',
    text: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3cKnwwGS_Jr2JYLYPpE7ND2w-ybDRVyKqu3or57p1moLc4-ATbka1BYxl8d04xpk8JI&usqp=CAUg',
    socials: [
      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jane-doe' },
      { icon: FaFacebookSquare, url: 'https://www.facebook.com/jane.doe' },
      { icon: FaWhatsappSquare, url: 'https://wa.me/1234567890' },
      { icon: FaInstagramSquare, url: 'https://www.instagram.com/jane.doe' },
      { icon: FaTwitter, url: 'https://twitter.com/jane_doe' },
    ],
  } 
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

      <Project />
      <Projectshome />
    </div>
  );
};

export default Services;
