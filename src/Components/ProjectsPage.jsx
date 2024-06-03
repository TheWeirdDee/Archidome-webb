/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
      url: "https://png.pngtree.com/background/20230716/original/pngtree-architectural-house-design-in-3d-render-picture-image_4237732.jpg",
      type: "Architectural Design",
      note: "Futuristic architectural house design."
    },
    {
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-79873-323780.jpg&fm=jpg",
      type: "Architectural Design",
      note: "Futuristic architectural house design."
    },
    {
      url: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      type: "Interior Design",
      note: "Beautiful Interior house design."
    },
    {
      url: "https://media.designcafe.com/wp-content/uploads/2020/03/21013530/interior-design-trends-hyderabad-2020.jpg",
      type: "Interior Design",
      note: "Beautiful Interior house design."
    },
    {
      url: "https://i.pinimg.com/736x/3a/c6/22/3ac62266fb4e9197d3a1bfc221b6691e.jpg",
      type: "Architectural Design",
      note: "Futuristic architectural house design."
    },
    {
      url: "https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1992.jpg",
      type: "Commercial Design",
      note: "Superb Commercial house design."
    },
    {
      url: "https://www.shutterstock.com/image-illustration/coworking-office-room-computers-yellow-600nw-1727875453.jpg",
      type: "Commercial Design",
      note: "Superb Commercial house design."
    },
    {
      url: "https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=",
      type: "Residential Design",
      note: "Great Residential house design."
    },
    {
      url: "https://www.e-architect.com/images/jpgs/new_zealand/brown-vujcich-house-b021013-p2.jpg",
      type: "Residential Design",
      note: "Great Residential house design."
    },
    {
      url: "https://i.pinimg.com/originals/af/3a/0b/af3a0b26bdf0c6a084803a24b91f1727.jpg",
      type: "Residential Design",
      note: "Great Residential house design."
    },
    {
      url: "https://media.istockphoto.com/id/930378238/photo/interior-of-apartment-during-construction-remodeling-renovation-extension-restoration-and.jpg?s=612x612&w=0&k=20&c=iBpWqa0Q-d3G1fsumRuHwuQ5L8dq4aMYcebTz_yPLyA=",
      type: "Restoration & Renovation",
      note: "Perfect R&R house design."
    },
    {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      type: "Residential Design",
      note: "Residential design."
    },
    {
      url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
      type: "Interior Design",
      note: "Beautiful Interior design."
    },
    {
      url: "https://www.thesun.co.uk/wp-content/uploads/2022/01/kc-diyreno-comp-1.jpg?strip=all&quality=100&w=1080&h=1000&crop=1",
      type: "Restoration & Renovation",
      note: "Perfect R&R house design."
    },
    {
      url: "https://www.lansingstatejournal.com/gcdn/presto/2019/11/14/PLSJ/d4782164-5755-4364-8e37-f6728a29fd54-Over_Improving_WEB.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
      type: "Restoration & Renovation",
      note: "Perfect R&R house design."
    },


    // PAGE TWO

      {
        url: "https://www.shutterstock.com/image-illustration/coworking-office-room-computers-yellow-600nw-1727875453.jpg",
        type: "Commercial Design",
        note: "Superb Commercial house design."
      },
      {
        url: "https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=",
        type: "Residential Design",
        note: "Great Residential house design."
      },
      {
        url: "https://www.e-architect.com/images/jpgs/new_zealand/brown-vujcich-house-b021013-p2.jpg",
        type: "Residential Design",
        note: "Great Residential house design."
      },
      {
        url: "https://i.pinimg.com/originals/af/3a/0b/af3a0b26bdf0c6a084803a24b91f1727.jpg",
        type: "Residential Design",
        note: "Great Residential house design."
      },
      {
        url: "https://media.istockphoto.com/id/930378238/photo/interior-of-apartment-during-construction-remodeling-renovation-extension-restoration-and.jpg?s=612x612&w=0&k=20&c=iBpWqa0Q-d3G1fsumRuHwuQ5L8dq4aMYcebTz_yPLyA=",
        type: "Restoration & Renovation",
        note: "Perfect R&R house design."
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        type: "Residential Design",
        note: "Residential design."
      },
      {
        url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
        type: "Interior Design",
        note: "Beautiful Interior design."
      },
      {
        url: "https://www.thesun.co.uk/wp-content/uploads/2022/01/kc-diyreno-comp-1.jpg?strip=all&quality=100&w=1080&h=1000&crop=1",
        type: "Restoration & Renovation",
        note: "Perfect R&R house design."
      },
      {
        url: "https://www.lansingstatejournal.com/gcdn/presto/2019/11/14/PLSJ/d4782164-5755-4364-8e37-f6728a29fd54-Over_Improving_WEB.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
        type: "Restoration & Renovation",
        note: "Perfect R&R house design."
      },
      {
        url: "https://media.licdn.com/dms/image/D5612AQFZjC_CeSCaxQ/article-cover_image-shrink_720_1280/0/1702816552531?e=2147483647&v=beta&t=QQHEW2HHrxE1GDv9og6avQn9CkB3VgSH4UDX8uaNE68",
        type: "Architectural Design",
        note: "Beautiful architectural design concept."
      },
      {
        url: "https://png.pngtree.com/background/20230716/original/pngtree-architectural-house-design-in-3d-render-picture-image_4237732.jpg",
        type: "Architectural Design",
        note: "Futuristic architectural house design."
      },
      {
        url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-79873-323780.jpg&fm=jpg",
        type: "Architectural Design",
        note: "Futuristic architectural house design."
      },
      {
        url: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
        type: "Interior Design",
        note: "Beautiful Interior house design."
      },
      {
        url: "https://media.designcafe.com/wp-content/uploads/2020/03/21013530/interior-design-trends-hyderabad-2020.jpg",
        type: "Interior Design",
        note: "Beautiful Interior house design."
      },
      {
        url: "https://i.pinimg.com/736x/3a/c6/22/3ac62266fb4e9197d3a1bfc221b6691e.jpg",
        type: "Architectural Design",
        note: "Futuristic architectural house design."
      },
      {
        url: "https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1992.jpg",
        type: "Commercial Design",
        note: "Superb Commercial house design."
      }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 16;

  const handleNext = () => {
    if ((currentPage + 1) * imagesPerPage < projectImages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = projectImages.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full h-64 shadow-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={image.url} alt={`Project ${startIndex + index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105" />
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
        <div className="flex justify-between items-center mt-8">
          <button onClick={handlePrev} className="text-white bg-purple-900 p-2 rounded-full hover:bg-purple-700" disabled={currentPage === 0}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="text-white bg-purple-900 p-2 rounded-full hover:bg-purple-700" disabled={(currentPage + 1) * imagesPerPage >= projectImages.length}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
