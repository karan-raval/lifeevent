import React, { useState, useEffect } from "react";
import axios from "axios";
import Simage from "./Simage"

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <>
    <div><Simage /></div>
    <div className="bg-[url('https://www.visionvivaah.com/argon/img/back.jpg')] pt-14 h-auto w-[100%] pb-40">

      <div className=" w-[100%] text-center pt-32 gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {services.map((data) => (
          <div key={data.id} className=" h-auto w-[100%] mt-8">
            
              <img className="h-auto w-[100%] mt-3 " src={data.image} alt=""  />
            
        
              <h1 className="destination-title pt-4 text-3xl">
                {data["wedding-type"]}
              </h1>
              <p className="text-sm mt-3 text-black">{data.text}</p>
            
            </div>
          
        ))}
      </div>
    </div>
    </>
  );
};

export default Service;
