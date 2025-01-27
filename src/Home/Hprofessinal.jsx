import React from "react";
import { Link } from 'react-router-dom'

const TransparentOverlayWithText = () => {
  return (
    <>
<div className="pt-2 w-full h-screen">
  <div
    className="relative bg-cover bg-center h-full flex items-center justify-center"
    style={{
      backgroundImage: "url('https://www.visionvivaah.com/aboutvivaah/backgound.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>

    <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Heading */}
      <h1 className="destination-titles font-extrabold text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl">
        About Life Event The Wedding Professional Services
      </h1>

      {/* Decorative Borders */}
      <div className="flex justify-center mt-4">
        <p className="w-16 sm:w-32 border-2 border-red-600"></p>
        <p className="border-2 ml-1 w-1 border-black"></p>
        <p className="border-2 ml-1 w-1 border-black"></p>
      </div>

      {/* Description Text */}
      <div className="pt-5">
        <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
          The Emotion counts as it is related to the Bride and Groom’s childhood dream, and we value it.
        </p>
      </div>

      {/* Read More Button */}
      <button className="mt-10 text-white border-2 border-white rounded-[25vh] text-lg sm:text-xl md:text-2xl font-bold transition duration-300 w-32 sm:w-48 md:w-56 lg:w-60 p-2 hover:bg-red-500">
        <Link to="/about-us">Read More</Link>
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default TransparentOverlayWithText;
