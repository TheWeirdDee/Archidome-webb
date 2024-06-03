/* eslint-disable no-unused-vars */
import React, { useState,  useEffect } from "react";
import { FaRegComments } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

 

const posts = [
  {
    id: 1,
    image:
      "https://www.shutterstock.com/image-photo/realize-your-interior-dream-mixed-600nw-533636479.jpg",
    title: "Architectural Insights: Exploring Design Wonders",
    date: "June 1, 2024",
    author: "Divine Dilibe",
    comments: 100,
  },
  {
    id: 2,
    image:
      "https://tera-media.s3.amazonaws.com/service-multimedia/330002284-photo-2825",
    title: "Architectural Insights: Exploring Design Wonders",
    date: "June 2, 2024",
    author: "Divine Dilibe",
    comments: 110,
  },
  {
    id: 3,
    image:
      "https://www.modernhousemaker.com/MHM/img/Contemporary.jpg",
    title: "Design Chronicles: Architectural Stories in Brief",
    date: "June 3, 2024",
    author: "Divine Dilibe",
    comments: 101,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/2b/ac/54/2bac54866266574f542e92768979acbb.jpg",
    title: "Blueprints & Beyond: Unraveling Architectural Excellence",
    date: "June 3, 2024",
    author: "Divine Dilibe",
    comments: 123,
  },
  {
    id: 5,
    image:
      "https://imgv3.fotor.com/images/gallery/a-classic-house-ai-architecture-design-with-many-trees-made-by-ai-architecture-generator.jpg",
    title: "Structure Spotlight: A Peek into Iconic Designs",
    date: "June 4, 2024",
    author: "Divine Dilibe",
    comments: 130,
  },
  {
    id: 6,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/UU/TN/SG/27215609/capture1-500x500.PNG",
    title: "Cityscape Chronicles: Architectural Wonders Worldwide",
    date: "June 5, 2024",
    author: "Divine Dilibe",
    comments: 123,
  },
  {
    id: 7,
    image:
      "https://planner5d.com/assets/images/landing-seo/architecture-design-software/created_with_our_tool_center@2x.webp",
    title: "Building Brilliance: Architectural Feats Explored",
    date: "June 6, 2024",
    author: "Divine Dilibe",
    comments: 110,
  },
  {
    id: 8,
    image:
      "https://pictures-nigeria.jijistatic.net/25537895_d-architectural-design-wallpaper-x-wallpaper-download-d-architectural-design-wallpaper-des-1436564279p8cl4_620x349.jpg",
    title: "Design Dialogues: Conversations on Architecture",
    date: "June 7, 2024",
    author: "Divine Dilibe",
    comments: 102,
  },
  {
    id: 9,
    image:
      "https://images.squarespace-cdn.com/content/v1/5567598ce4b0354e4ca0cf84/1511813727047-6E00C3TSZD18TDJMBQV1/AdobeStock_91616961.jpeg",
    title: "Architectural Alchemy: Transforming Spaces",
    date: "June 8, 2024",
    author: "Divine Dilibe",
    comments: 107,
  },
  {
    id: 10,
    image:
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/modern-interior-design-grey-living-room2-scaled.jpeg",
    title: "Innovative Edifices: Architectural Innovations Explored",
    date: "June 9, 2024",
    author: "Divine Dilibe",
    comments: 108,
  },
  {
    id: 11,
    image:
      "https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/11/09150902/220511CG_804_519Indiana_003-740x560.jpg",
    title: "Blueprint Breakdown: Exploring Architectural Elements",
    date: "June 10, 2024",
    author: "Divine Dilibe",
    comments: 150,
  },
  {
    id: 12,
    image:
      "https://www.nitidodesign.com/blog/wp-content/uploads/2021/08/residential-interior-design.jpg",
    title:"Spaces Reimagined: Architectural Visions Unveiled",
    date: "June 11, 2024",
    author: "Divine Dilibe",
    comments: 210,
  },
  {
    id: 13,
    image:
      "https://www.sbid.org/wp-content/uploads/2022/04/spacejoy-4xRP0Ajk9ys-unsplash-e1655133373712.jpg",
    title: "Urban Elegance: Architectural Marvels in Focus",
    date: "June 12, 2024",
    author: "Divine Dilibe",
    comments: 110,
  },
  {
    id: 14,
    image:
      "https://www.ebhosworks.com.ng/wp-content/uploads/2022/07/MODERN-HOUSE-DESIGN-SERIES-2.jpg",
    title: "Design Dynamics: Unraveling Architectural Beauty",
    date: "June 13, 2024",
    author: "Divine Dilibe",
    comments: 120,
  },
  {
    id: 15,
    image:
      "https://foyr.com/learn/wp-content/uploads/2020/10/best-free-home-design-software-1.jpg",
    title:"Built to Last: Exploring Timeless Architecture",
    date: "June 14, 2024",
    author: "Divine Dilibe",
    comments: 106,
  },
  {
    id: 16,
    image:
      "https://1.bp.blogspot.com/-12wzVWxiqxU/Xqn9CUOD_jI/AAAAAAAAwZk/OFzMtloWzYo-J8_96Ou4UEbth8i9NO8NQCEwYBhgL/s1600/04MODERN%2BVILLA.jpg",
    title: "City Canvas: Architectural Inspirations Worldwide",
    date: "June 15, 2024",
    author: "Divine Dilibe",
    comments: 110,
  },
  {
    id: 17,
    image:
      "https://archi-monarch.com/wp-content/uploads/2023/02/RESIDENTIAL-BUILDING-DESIGN-IN-ARCHITECTURE.webp",
    title: "Structural Symphony: Harmonizing Form and Function",
    date: "June 16, 2024",
    author: "Divine Dilibe",
    comments: 106,
  },
  {
    id: 18,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/02/16132807/cottage-house-design.jpg",
    title: "Design Dispatch: Architectural Insights in Brief",
    date: "June 17, 2024",
    author: "Divine Dilibe",
    comments: 155,
  },
  {
    id: 19,
    image:
      "https://philkeandesigns.com/wp-content/uploads/2015/08/Residential-Architectural-Design.jpg",
    title: "Urban Unveil: Exploring Architectural Diversity",
    date: "June 18, 2024",
    author: "Divine Dilibe",
    comments: 99,
  },
  {
    id: 20,
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2021/02/archlab-1-1024x766.jpg",
    title: "Skyline Stories: Architectural Marvels Reimagined",
    date: "June 19, 2024",
    author: "Divine Dilibe",
    comments: 60,
  },
  {
    id: 21,
    image:
      "https://pictures-nigeria.jijistatic.net/25537895_d-architectural-design-wallpaper-x-wallpaper-download-d-architectural-design-wallpaper-des-1436564279p8cl4_620x349.jpg",
    title: "Design Dialogues: Conversations on Architecture",
    date: "June 20, 2024",
    author: "Divine Dilibe",
    comments: 116,
  },
  {
    id: 22,
    image:
      "https://images.squarespace-cdn.com/content/v1/5567598ce4b0354e4ca0cf84/1511813727047-6E00C3TSZD18TDJMBQV1/AdobeStock_91616961.jpeg",
    title: "Architectural Alchemy: Transforming Spaces",
    date: "June 21, 2024",
    author: "Divine Dilibe",
    comments: 133,
  },
  {
    id: 23,
    image:
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/modern-interior-design-grey-living-room2-scaled.jpeg",
    title: "Innovative Edifices: Architectural Innovations Explored",
    date: "June 22, 2024",
    author: "Divine Dilibe",
    comments: 110,
  },
  {
    id: 24,
    image:
      "https://sola-images.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/11/09150902/220511CG_804_519Indiana_003-740x560.jpg",
    title: "Blueprint Breakdown: Exploring Architectural Elements",
    date: "June 23, 2024",
    author: "Divine Dilibe",
    comments: 188,
  }
];

const categories = [
  { name: "Architectural Designs", count: 12 },
  { name: "Interior Designs", count: 8 },
  { name: "Residential Designs", count: 15 },
  { name: "Commercial Designs", count: 9 },
  { name: "Renovation and Restoration Designs", count: 6 },
];

const popularArticles = [
  {
    id: 1,
    image:
      "https://homezonline.in/wp-content/uploads/2022/07/Simplex-single-floor-home.jpg",
    title: "Urban Unveil: Exploring Architectural Diversity",
    date: "June 18, 2024",
    publisher: "Divine Dilibe",
  },
  {
    id: 2,
    image: "https://thearchitectsdiary.com/wp-content/uploads/2021/02/archlab-1-1024x766.jpg",   
    title:"Skyline Stories: Architectural Marvels Reimagined",
    date: "June 19, 2024",
    publisher: "Divine Dilibe",
  },
  {
    id: 3,
    image:
      "https://foyr.com/learn/wp-content/uploads/2020/10/best-free-home-design-software-1.jpg",
    title: "Built to Last: Exploring Timeless Architecture",
    date: "June 14, 2024",
    publisher: "Divine Dilibe",
  },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
   
    
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen container mx-auto py-8 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 lg:pr-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPosts.map((post) => (
              <div key={post.id} className="rounded-lg p-4"  data-aos="fade-up">
               <img
  src={post.image}
  alt={post.title}
  className="w-full h-auto md:h-48 md:w-full object-cover mb-4"
/>

                <h2 className="text-2xl text-gray-300 font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-2">
                  {post.date} by {post.author}
                </p>
                <div className="flex text-gray-500 items-center">
                  <FaRegComments className="mr-2" />
                  <span>{post.comments}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-l ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastPost >= posts.length}
              className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-r ${
                indexOfLastPost >= posts.length
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 lg:pl-8 mt-8 lg:mt-0 flex flex-col justify-between"  data-aos="fade-up">
          <div className="mb-8">
            <h3 className="text-xl text-gray-200 font-bold mb-4">Categories</h3>
            <ul className="text-gray-300">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="mb-2 pb-2 border-b-2 border-gray-700 flex justify-between"
                >
                  <span>{category.name}</span>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-white font-bold mb-4">
              Popular Articles
            </h3>
            <ul className="text-gray-300">
  {popularArticles.map((article) => (
    <li key={article.id} className="mb-4">
      <img
        src={article.image}
        alt={article.title}
        className="md:h-20 md:w-20 w-full h-auto object-cover mb-2 rounded"
      />
      <h4 className="text-lg text-gray-400 font-semibold mb-1">
        {article.title}
      </h4>
      <p className="text-sm text-gray-500 mb-1">{article.date}</p>
      <p className="text-sm text-gray-500">
        Published by {article.publisher}
      </p>
    </li>
  ))}
</ul>

          </div>
          <div className="mb-8">
            <h3 className="text-xl text-white font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full text-white">
                Houses
              </span>
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full text-white">
                Land
              </span>
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full text-white">
                Office
              </span>
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full text-white">
                Building
              </span>
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full text-white">
                Design
              </span>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-white font-bold mb-4">Archives</h3>
            <ul className="text-gray-300">
              {[
                { month: "June", year: 2024, count: 10 },
                { month: "July", year: 2024, count: 8 },
                { month: "August", year: 2024, count: 15 },
                { month: "September", year: 2024, count: 9 },
                { month: "October", year: 2024, count: 6 },
              ].map((archive, index) => (
                <li
                  key={index}
                  className="mb-2 pb-2 border-b-2 border-gray-700 flex justify-between"
                >
                  <span>{`${archive.month} ${archive.year} (${archive.count})`}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white font-bold mb-4">About</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              neque arcu. Integer in velit varius, tempor massa in, tempus
              libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
