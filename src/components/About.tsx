import React from 'react';
import Image from 'next/image';
import { IconFileCv } from '@tabler/icons-react';

import Zane from '../../public/Zane.jpg';



const About = () => {
  return (
    <section id="about" className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden lg:flex lg:items-center">
        {/* Left Section - Text Content */}
        <div className="p-8 lg:w-2/3">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Hello I am Zane Falcao
          </h1>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Full-Stack WebDeveloper.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Strong engineering professional, completed Bachelor of Engineering focused in Computer Engineering from Fr. Conceicao Rodrigues College of Engineering.
          </p>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 rounded-md text-white border-none transition-transform transform hover:scale-105">
              <IconFileCv />
                RESUME
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-outline rounded-md text-orange-500 hover:bg-orange-500 hover:text-white hover:border-amber-500">
                MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="p-8 lg:w-1/3 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={Zane}
              alt="Zane Falcao Logo"
              width={350} // Adjust width as needed
              height={350} // Adjust height as needed
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;