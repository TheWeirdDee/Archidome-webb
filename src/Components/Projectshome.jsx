/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',  
      once: true  
    });
  }, []);

  const projectImages = [
    {
      url: "https://media.licdn.com/dms/image/D5612AQFZjC_CeSCaxQ/article-cover_image-shrink_720_1280/0/1702816552531?e=2147483647&v=beta&t=QQHEW2HHrxE1GDv9og6avQn9CkB3VgSH4UDX8uaNE68",
      type: "Architectural Design",
      note: "Beautiful architectural design concept."
    },
    {
      url: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      type: "Interior Design",
      note: "Beautiful Interior house design."
    },
    {
      url: "https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1992.jpg",
      type: "Commercial Design",
      note: "Superb Commercial house design."
    },
     
    {
      url: "https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=",
      type: "Residential Design",
      note: "Great Residential house design."
    } 
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-0">
          {projectImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden w-full h-64 shadow-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}  
            >
              <img src={image.url} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" />
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-purple-900 bg-opacity-50 transition-opacity duration-500 ease-in-out">
                  <div className="text-white text-center">
                    <h1 className="text-2xl font-bold text-white">{image.type}</h1>
                    <p className="text-l text-white">{image.note}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
