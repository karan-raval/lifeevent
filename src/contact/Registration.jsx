import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { useState } from "react";

const TransparentOverlayWithText = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Data saved successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          message: "",
        });
      });
  };

  return (
    <>
  <div className="w-full h-full min-h-screen pt-3">
        <div
          className="relative bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "url('https://www.visionvivaah.com/argon/img/contactus.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-white relative pt-24">
            Contact us
          </h1>
          <div className="flex justify-center items-center mt-4">
            <div className="w-20 sm:w-36 h-1 bg-red-600"></div>
            <div className="w-2 h-1 bg-black mx-1"></div>
            <div className="w-2 h-1 bg-black"></div>
          </div>
          <h2 className="relative text-white text-sm sm:text-lg font-semibold text-center pt-4">
            We Look Forward To Hearing From You
          </h2>

          <div className="flex flex-wrap justify-center mt-16 relative px-4">
            {/* Form Section */}
            <div className="w-full sm:w-[60%] lg:w-[50%] relative">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 rounded-lg bg-opacity-50"
              >
                {["name", "email", "mobile", "city", "message"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-white text-base sm:text-xl font-semibold"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    {field === "message" ? (
                      <textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field}`}
                        rows="4"
                        required
                        className="border-2 bg-transparent border-white rounded w-full p-2 text-sm sm:text-base"
                      ></textarea>
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field}`}
                        required
                        className="border-2 bg-transparent border-white rounded w-full p-2 text-sm sm:text-base"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="text-white text-base sm:text-xl w-full py-2 rounded-3xl bg-red-600 hover:bg-blue-700 hover:border-4 border-sky-500"
                >
                  SEND NOW
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="w-full sm:w-[40%] lg:w-[30%] relative text-white mt-10 sm:mt-0">
              <div className="flex flex-col items-center text-center space-y-12">
                <div>
                  <LuPhoneCall className="text-3xl sm:text-4xl mx-auto" />
                  <p className="text-sm sm:text-base mt-2">
                    +91-8266000652
                    <br />
                    +91-8077320515
                  </p>
                </div>
                <div>
                  <TfiEmail className="text-3xl sm:text-4xl mx-auto" />
                  <p className="text-sm sm:text-base mt-2">
                    lifeevents001@gmail.com
                  </p>
                </div>
                <div>
                  <PiMapPinAreaDuotone className="text-4xl sm:text-5xl mx-auto" />
                  <p className="text-sm sm:text-base mt-2">
                    Life Events,
                    <br />
                    220/4 Nehru Nagar, GarhRoad, Meerut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default TransparentOverlayWithText;
