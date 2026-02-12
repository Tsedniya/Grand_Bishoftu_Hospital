import React from "react";
import patient from "../assets/patient.jpg"; // replace with your image



const ContactUs = () => {
  return (
    <div className="relative w-full bg-gray-100 ">

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

        {/* Hero text: moved a bit higher */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-28 sm:pt-32 lg:pt-40 text-center px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-poppins">
            Book Your Appointment
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-white max-w-lg">
            Schedule your visit with our experienced doctors easily and quickly.
          </p>
        </div>
      </div>

      {/* Floating Appointment Box: taller and wider */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 bg-white rounded-3xl shadow-2xl px-8 sm:px-12 py-16 sm:py-20 lg:py-24">

        <h2 className="text-2xl sm:text-3xl font-semibold text-[#023E8A] text-center mb-6">
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

          {/* Submit button full width */}
          <button
            type="submit"
            className="sm:col-span-2 w-68 bg-[#023E8A] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
