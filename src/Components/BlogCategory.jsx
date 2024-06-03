/* eslint-disable no-unused-vars */
// src/components/BlogCategory.js
import React from 'react';
import PropTypes from 'prop-types';

const BlogCategory = ({ category, posts }) => (
  <div className="container mx-auto py-8">
    <h2 className="text-3xl font-semibold mb-4">{category}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="fade-up">
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

BlogCategory.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogCategory;
