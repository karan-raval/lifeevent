import React from "react";
import Ourservices from "./OurServices.json";
import { Link } from "react-router-dom";

function OurService() {
  return (
    <>
      <h1 className="destination-titles  font-extrabold text-center sm:text-4xl md:text-5xl text-5xl pt-20">
        Our Services
      </h1>
      <div className="flex ">
        <p className=" ml-[44.5%] w-32 sm:w-32 border-2 border-red-600 mt-4"></p>
        <p className="border-2 ml-1 w-1 border-black mt-4"></p>
        <p className="border-2 w-1 ml-1 border-black mt-4"></p>
      </div>
      <div className="h-[auto] w-[100%] gap-10  text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {Ourservices.map((data) => (
          <div key={data.id} className="h-[400px] w-[100%] ">
            <div className="m-5">
              <img src={data.image} alt="" />
            </div>
            <div>
              <h1 className="destination-title pt-4 text-3xl">
                {data["wedding-type"]}
              </h1>
              <p className="text-sm mt-3 text-black">{data.text}.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
      {/* <button className=" text-red border-2 border-white rounded-[25vh] text-lg sm:text-xl md:text-2xl mt-40 ml-50  bg-red-500  text-white px-4 py-2 text-3xl   inline-block transition-all duration-300  hover:rounded-3xl font-bold w-32 sm:w-48 md:w-56 lg:w-60 p-2 hover:bg-red-500">
        <Link to="/services">VIEW MORE</Link>
      </button> */}
      <div className="flex items-center justify-center mb-1 mt-20">
  <Link
    to="/services"
    className="bg-red-500 text-white px-4 py-2 text-3xl inline-block transition-all duration-300 hover:bg-green-500 hover:rounded-3xl"
  >
    VIEW MORE
  </Link>
</div>

      </div>
    </>


    //     <>
    //  <h1 className="container destination-titles font-extrabold text-center text-3xl sm:text-4xl md:text-5xl pt-24 mx-auto">
    //   Our Services
    // </h1>
    // <div className="flex justify-center mt-4">
    //   <p className="w-16  sm:w-32 border-2 border-red-600"></p>
    //   <p className="border-2 ml-1 w-1 border-black"></p>
    //   <p className="border-2 ml-1 w-1 border-black"></p>
    // </div>

    // <div className="pl-4 sm:pl-24 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    //   {Ourservices.map((data) => (
    //     <div key={data.id} className="h-auto w-full sm:w-[90%] mx-auto flex flex-col items-center">
    //       {/* Image Section */}
    //       <div className="h-[40vh] sm:h-[30vh] md:h-[25vh] lg:h-[20vh] overflow-hidden rounded-lg flex justify-center items-center">
    //         <img
    //           src={data.image}
    //           alt=""
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       {/* Text Section */}
    //       <div className="mt-4 text-center">
    //         <h1 className="destination-title text-xl sm:text-2xl md:text-3xl font-semibold">
    //           {data['wedding-type']}
    //         </h1>
    //         <p className="text-sm sm:text-base md:text-lg mt-3 text-black leading-relaxed">
    //           {data.text}
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // <div className="text-center mt-10">
    //   <Link
    //     to="/services"
    //     className="bg-red-500 text-white px-6 py-3 text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:bg-green-500 hover:rounded-3xl"
    //   >
    //     VIEW MORE
    //   </Link>
    // </div>

    //     </>

    // <>
    /* <>
  <h1 className="destination-titles font-extrabold text-center text-3xl pt-16">
    Our Services
  </h1>
  <div className="flex justify-center items-center mt-4">
    <p className="w-16 border-2 border-red-600"></p>
    <p className="border-2 w-1 border-black mx-1"></p>
    <p className="border-2 w-1 border-black"></p>
  </div>

  <div className="h-auto w-full px-4 pt-10 flex flex-col gap-6">
    {Ourservices.map((data) => (
      <div key={data.id} className="w-full flex flex-col items-center">
        <div className="w-full">
          <img src={data.image} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="text-center mt-4">
          <h1 className="destination-title text-xl font-bold">{data['wedding-type']}</h1>
          <p className="text-sm mt-2 text-black">{data.text}.</p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-8">
    <Link
      to="/services"
      className="bg-red-500 text-white px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-green-500 hover:rounded-3xl"
    >
      VIEW MORE
    </Link>
  </div>
</> */

    // </>
  );
}

export default OurService;
