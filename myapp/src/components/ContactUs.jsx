import React from "react";
import patient from "../assets/patient.jpg";
import { motion } from "framer-motion";
import notebook from "../assets/notebook.svg";
import call from '../assets/call.svg';

const ContactUs = () => {
  return (
    <div className="relative w-full bg-white pb-48 lg:pb-64">
      {/* Hero / Background */}
      <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px]">

        {/* Background image */}
        <img
          src={patient}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#023E8A]/80 to-transparent"></div>

        {/* Floating image + Hero text */}
        <div className="-mt-10 absolute inset-0 flex flex-col items-center justify-start pt-20 sm:pt-24 lg:pt-28 text-center px-6 z-10">

          {/* Floating image with framer-motion */}
          <motion.img
            src={notebook}
            alt="Doctor"
            className="w-20 sm:w-24 lg:w-28 mb-4"
            animate={{ y: ["0px", "-14px", "0px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-poppins leading-tight z-20">
            Book Your Appointment
          </h1>
          <p className="mt-3 sm:mt-4 text-base text-white sm:text-xl font-opensans z-20">
            Schedule your visit with our experienced doctors easily and quickly.
          </p>
        </div>
      </div>

      {/* Floating Appointment Box */}
      <div className="-mt-80 absolute left-1/2 transform -translate-x-1/2 top-[550px] sm:top-[600px] lg:top-[650px] w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-3xl shadow-2xl px-4 sm:px-12 py-16 sm:py-20 lg:py-24 z-20">
        
        <div className="flex items-center justify-center gap-3 -mt-15 mb-3">
          <img src={call} alt="Phone" className="w-8 sm:w-10" /> 
          <h3 className="text-lg sm:text-2xl text-[#023E8A]">
            +251-977434445
          </h3>
        </div>

        <h2 className="text-2xl sm:text-3xl text-[#023E8A] text-center mb-4">
          Book an Appointment
        </h2>



        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
          />
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
          />
          <button
          type="submit"
          className="sm:col-span-2 w-60 bg-[#023E8A] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition mx-auto"
        >
          Submit
        </button>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;
