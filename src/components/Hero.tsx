import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold border-b border-gray-600 pb-2 mb-6 text-white flex items-center">
        <span className="text-blue-400">Profile</span>
        <span className="mx-2 text-gray-500">:</span>
        <span className="text-purple-400">Title</span>
      </h2>
      
      <div className="flex items-start gap-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 overflow-hidden p-1">
          <Image
            src="/profile_Ex.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
          />
        </div>

        <div className="flex-grow">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-1 text-blue-400">_I AM</h3>
            <p className="mb-2 text-gray-300">이름: <span className="text-purple-300">이프로</span></p>
            <p className="text-gray-300">포지션: <span className="text-purple-300">PM 서비스 기획 / FE Developer(jr)</span></p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-1 text-blue-400">_Contact</h3>
            <p className="mb-2 text-gray-300">Email: <span className="text-purple-300">leepro@naver.com</span></p>
            <p className="text-gray-300">Phone: <span className="text-purple-300">+082-1234-5678</span></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1 text-blue-400">_Channel</h3>
            <p className="mb-2 text-gray-300">SNS: <span className="text-purple-300 hover:text-purple-400 cursor-pointer">@leepro</span></p>
            <p className="text-gray-300">GitHub: <span className="text-purple-300 hover:text-purple-400 cursor-pointer">github.com/leepro</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 