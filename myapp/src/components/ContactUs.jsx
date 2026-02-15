import React from "react";
import patient from "../assets/patient.jpg";
import { motion } from "framer-motion";
import notebook from "../assets/notebook.svg";
import call from "../assets/call.svg";

const ContactUs = () => {
  return (
    <div className="relative w-full">
      {/* Hero / Background */}
      <div className="relative w-full min-h-screen sm:h-[650px] lg:h-[750px]">

        {/* Background image */}
        <img
          src={patient}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#023E8A]/80 to-transparent"></div>

        {/* Content wrapper */}
        <div className="relative flex flex-col items-center justify-center px-6 py-16 sm:py-0 z-10 gap-6">

          {/* Floating animation image */}
          <motion.img
            src={notebook}
            alt="Doctor"
            className="w-20 sm:w-24 lg:w-28"
            animate={{ y: ["0px", "-14px", "0px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero text */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center font-poppins">
            Book Your Appointment
          </h1>

          <p className="text-base sm:text-xl text-white text-center font-opensans max-w-xl">
            Schedule your visit with our experienced doctors easily and quickly.
          </p>

          {/* Appointment Box */}
          <div
            className="
              w-full max-w-xl sm:max-w-2xl lg:max-w-3xl
              bg-white rounded-3xl shadow-2xl
              px-6 sm:px-10 py-8 sm:py-12
            "
          >
            {/* Phone */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src={call} alt="Phone" className="w-8 sm:w-10" />
              <h3 className="text-lg sm:text-2xl text-[#023E8A]">
                +251-977434445
              </h3>
            </div>

            <h2 className="text-2xl sm:text-3xl text-[#023E8A] text-center mb-6">
              Book an Appointment
            </h2>

            {/* Form */}
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
                className="sm:col-span-2 w-60 bg-[#023E8A] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
