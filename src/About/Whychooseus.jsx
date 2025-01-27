import React from 'react'
import { MdAcUnit } from "react-icons/md";

function Whychooseus() {
  return (
    <>
  <div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] bg-cover bg-top w-full">
  <h1 className="destination-titles font-extrabold text-center pt-24 text-5xl sm:text-3xl md:text-4xl lg:text-5xl">Why Choose Us</h1>
  
  <div className="flex justify-center mt-3">
    <p className="ml-[44.5%] w-32 mt-4 border-red-500 border-2 sm:w-24 md:w-32"></p>
    <p className="border-2 ml-1 w-1 border-black mt-4 sm:w-0.5 md:w-1"></p>
    <p className="border-2 w-1 ml-1 border-black mt-4 sm:w-0.5 md:w-1"></p>
  </div>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-9 mt-20 px-4 md:px-16">
    <div className="h-[60vh] w-full md:w-[90vh] mt-5">
      <img
        className="h-full w-full object-cover"
        src="https://www.visionvivaah.com/sectionmedia/1563884033156609.png"
        alt="Wedding Services"
      />
    </div>
    
    <div className="h-auto md:h-[120vh] w-full md:w-[50%] text-center md:text-left mt-6 md:mt-0">
      <ul className="text-sm space-y-4">
        <li className="flex p-3 py-1">
          The goal behind establishing Vision Vivaah is to offer people worldwide services tailored to their wedding needs. This includes connecting them with the best service providers, offering gift solutions, providing guidance on pre and post-marriage etiquette, and most importantly, efficiently managing the entire event.
        </li>

        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Your one stop shop for designer weddings.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Adding uniqueness to your wedding event.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>A strong network to provide you with various specialties from different cities of India.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Adding a designer touch to enhance the ambiance.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Highly cost-effective services.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>We assist you in identifying the best service providers in your town.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Maintaining high professionalism and dedication.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Comprehensive coverage of every aspect of your wedding, ensuring a symmetrical touch.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Our development department gives new concepts and designs.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>Enjoy a hassle-free wedding experience.</span>
        </li>
        <li className="flex p-3 py-1">
          <span className="pt-1 mr-2"><MdAcUnit /></span><span>We work to exacting standards and ensure timely delivery.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default Whychooseus