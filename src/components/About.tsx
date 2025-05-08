import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold border-b border-gray-600 pb-2 mb-6 text-white">
        <span className="text-blue-400">Introduce</span>
      </h2>
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <p className="text-gray-300">
          간단한 자기소개 및 인삿말
        </p>
      </div>
    </div>
  );
};

export default About; 