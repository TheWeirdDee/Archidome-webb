/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-6 inline-block bg-purple-900 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
