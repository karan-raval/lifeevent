import React from "react";
import { NavLink } from 'react-router-dom'

const TransparentOverlayWithText = () => {
  return (
    <>
    <div className="pt-28 h-auto">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center w-full h-auto sm:h-auto md:h-auto lg:h-auto"
        style={{
          backgroundImage: "url('https://www.visionvivaah.com/argon/img/s3.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>
  
        {/* Content */}
        <div className="relative flex flex-col justify-center items-center text-center text-white h-full px-4">
          {/* Title */}
          <h1 className="destination-titles font-extrabold text-5xl md:text-6xl lg:text-7xl">
            Testimonials
          </h1>
  
          {/* Decorative Borders */}
          <div className="flex justify-center mt-4">
            <p className="w-16 md:w-32 border-2 border-red-600"></p>
            <p className="w-1 border-2 border-black ml-1"></p>
            <p className="w-1 border-2 border-black ml-1"></p>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex gap-2 text-xl mt-3">
            <li className="hover:border-b-2 border-white transition-all">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>/</li>
            <li className="hover:border-b-2 border-white transition-all">
              Testimonials
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default TransparentOverlayWithText;
