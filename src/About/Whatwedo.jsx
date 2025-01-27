import React from 'react'
import { MdAcUnit } from "react-icons/md";
function Whatwedo() {
  return (
    <>
<div className="mt-[10px]">
  <h1 className="destination-titles font-extrabold text-center text-5xl sm:text-3xl md:text-4xl lg:text-5xl">
    What We Do
  </h1>

  <div className="flex justify-center mt-4">
    <p className="w-32 border-2 border-red-600 sm:w-24 md:w-32"></p>
    <p className="border-2 w-1 border-black mx-1 sm:w-0.5 md:w-1"></p>
    <p className="border-2 w-1 border-black sm:w-0.5 md:w-1"></p>
  </div>

  <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-10">
    {/* <!-- Left Content --> */}
    <div className="flex flex-col w-full md:w-1/3">
      <ul className="space-y-4">
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Artist Management</span>
        </li>
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Videography</span>
        </li>
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Photography</span>
        </li>
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Ritual Ceremony</span>
        </li>
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Home Decoration</span>
        </li>
        <li className="flex items-center p-3">
          <span className="text-lg mr-2 text-red-600"><MdAcUnit /></span>
          <span className="text-lg">Many More!</span>
        </li>
      </ul>
    </div>

    {/* <!-- Right Content --> */}
    <div className="flex justify-center items-center w-full md:w-2/3">
      <img
        src="https://www.visionvivaah.com/sectionmedia/1563884033787808.png"
        className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
        alt="Wedding Services"
      />
    </div>
  </div>
</div>



  </>
  )
}

export default Whatwedo