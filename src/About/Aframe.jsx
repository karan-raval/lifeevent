import React from 'react'
import { MdAcUnit } from "react-icons/md";
import whatwedo from "./whatwedo.json"
function Aframe() {
  return (
  <>
   {/* <div class="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] top-0 h-screen w-[100%]  ">
 <h1 className='destination-titles  font-extrabold text-center text-5xl  pt-24'>What We are</h1>
 <div className='flex'>
 <p className=' ml-[44.5%] w-32 border-2 border-red-600 mt-4'></p>
 <p className='border-2 ml-1 w-1 border-black mt-4'></p>
 <p className='border-2 w-1 ml-1 border-black mt-4'></p>
 </div>

 <div className='w-[94%]  flex  pt-10'>

    <div className=' w-[45%]  mt-14 justify-center'><img src="https://www.visionvivaah.com/sectionmedia/1563884033717864.png" alt="" className='w-[100%]' /></div>
    <div>
    {whatwedo.map((data) => ( 
    
    <div key={data.id} className='w-[90%] ml-4  pt-4'>
        <ul className='p-6'>
            <li className='flex '><span className='pt-1 mr-2'><MdAcUnit /></span><span className='absolute ml-5 text-md'>{data.title} <span className=' font-thin'>{data.text}</span></span>  </li> 
            
        </ul>
       
    </div>
    
    ))}
 </div>
    </div>
    </div>
  */}
<div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] bg-cover bg-center w-full flex flex-col items-center">
  {/* Title Section */}
  <h1 className="destination-titles font-extrabold text-center text-4xl sm:text-5xl md:text-6xl pt-10 text-black">
    What We Are
  </h1>

  {/* Border Under Title */}
  <div className="flex justify-center mt-4">
    <p className="w-16 sm:w-32 border-2 border-red-600 mt-4"></p>
    <p className="border-2 ml-1 w-1 border-black mt-4"></p>
    <p className="border-2 ml-1 w-1 border-black mt-4"></p>
  </div>

  {/* Content Section */}
  <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl pt-10 sm:pt-20 px-6 sm:px-10">
    {/* Image Section */}
    <div className="flex justify-center w-full sm:w-1/2">
      <img
        src="https://www.visionvivaah.com/sectionmedia/1563884033717864.png"
        alt="Image"
        className="max-w-full h-auto object-contain"
      />
    </div>

    {/* Text Section */}
    <div className="w-full sm:w-1/2 mt-10 sm:mt-0 sm:pl-10">
      {whatwedo.map((data) => (
        <div key={data.id} className="mb-6">
          <ul>
            <li className="flex items-center">
              <span className="text-red-500 text-2xl mr-4">
                <MdAcUnit />
              </span>
              <span className="text-sm sm:text-base">
                <strong>{data.title}</strong>
                <span className="font-thin block sm:inline">{data.text}</span>
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}

export default Aframe