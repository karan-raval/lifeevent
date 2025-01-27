import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../image/logo.png"
import GST from "../image/GST.png"
import MSME from "../image/MSME.png"


function Footer() {
  return (
    <>
      <div className=" h-[62vh] w-full sm:bg-deepblue flex flex-col items-center justify-center" style={{ backgroundColor: "var(--deepblue)" }}>
        {/* Logo and Certification Images */}
        <div className="flex items-center justify-center gap-6 pt-10">
          <img 
            src={MSME} 
            className="h-[12vh] w-[12vh] md:h-[12vh] md:w-[10vh]" 
            alt="MSME"
          />
          <img 
            src={logo} 
            className="h-[20vh] w-[20vh] md:h-[35vh] md:w-[35vh]" 
            alt="Logo"
          />
          <img 
            src={GST} 
            className="h-[12vh] w-[12vh] md:h-[12vh] md:w-[10vh]" 
            alt="GST"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-5 mb-2 gap-2">
          <FontAwesomeIcon 
            icon={faFacebookF} 
            className="text-blue-600 text-2xl border-2 h-7 w-7 p-2 border-white rounded-full"
          />
          <FontAwesomeIcon 
            icon={faTwitter} 
            className="text-blue-400 text-2xl border-2 h-7 w-7 p-2 border-white rounded-full"
          />
          <FontAwesomeIcon 
            icon={faPinterestP} 
            className="text-red-600 text-2xl border-2 h-7 w-7 p-2 border-white rounded-full"
          />
          <FontAwesomeIcon 
            icon={faYoutube} 
            className="text-red-600 text-2xl border-2 h-7 w-7 p-2 border-white rounded-full"
          />
          <FontAwesomeIcon 
            icon={faInstagram} 
            className="text-pink-500 text-2xl border-2 h-7 w-7 p-2 border-white rounded-full"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-white">
            2024, All Right Reserved @ Life Event | Web Design & Development By 
            <span className="text-center text-blue-500">
               
              <span className="ml-1 text-center text-red-500">adplace</span>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer