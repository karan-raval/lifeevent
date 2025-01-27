import React from "react";
import { NavLink } from 'react-router-dom'

const TransparentOverlayWithText = () => {
  return (
    <>
<div className="pt-28 h-[80vh]">
  {/* Background Image and Overlay */}
  <div
    className="relative bg-cover bg-center h-full"
    style={{
      backgroundImage: "url('https://www.visionvivaah.com/cms/about-us.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>

    {/* Heading */}
    <h1 className="destination-titles relative font-extrabold text-center text-white text-4xl sm:text-5xl md:text-7xl pt-24">
      About Us
    </h1>

    {/* Border Section */}
    <div className="flex justify-center mt-4">
      <p className="w-24 sm:w-32 border-2 border-red-600"></p>
      <p className="w-1 ml-1 border-2 border-black"></p>
      <p className="w-1 ml-1 border-2 border-black"></p>
    </div>

    {/* Breadcrumbs */}
    <ul className="flex justify-center text-white gap-2 mt-3 text-base sm:text-xl">
      <li className="hover:border-b-2 border-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>/</li>
      <li className="hover:border-b-2 border-white">About Us</li>
    </ul>
  </div>
</div>

    </>
  );
};

export default TransparentOverlayWithText;
