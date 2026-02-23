import React, { useState } from "react";
import patient from "../assets/patient.jpg";
import { motion } from "framer-motion";
import notebook from "../assets/notebook.svg";
import call from "../assets/call.svg";

const ContactForm = () => {
  // form state
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    date: ""
  });

  // toast state
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/appointments/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Appointment sent:", data);

      // reset form
      setFormData({
        patientName: "",
        patientEmail: "",
        patientPhone: "",
        date: ""
      });

      // show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // hide after 3s

    } catch (error) {
      console.log("Error sending form:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <img
        src={patient}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#023E8A]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl px-6 py-16 flex flex-col items-center text-center gap-6">
        <motion.img
          src={notebook}
          alt="Doctor"
          className="w-20 sm:w-24 lg:w-28"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-poppins">
          Book Your Appointment
        </h1>

        <p className="text-base sm:text-lg text-white max-w-xl">
          Schedule your visit with our experienced doctors easily and quickly.
        </p>

        <div className="w-full bg-white rounded-3xl shadow-2xl px-6 sm:px-10 py-8 sm:py-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={call} alt="Phone" className="w-8 sm:w-10" />
            <h3 className="text-lg sm:text-2xl text-[#023E8A]">
              +251-977434445
            </h3>
          </div>

          <h2 className="text-2xl sm:text-3xl text-[#023E8A] mb-6">
            Book an Appointment
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              id="patientName"
              type="text"
              placeholder="Full Name"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
            />

            <input
              id="patientEmail"
              type="email"
              placeholder="Email Address"
              value={formData.patientEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
            />

            <input
              id="patientPhone"
              type="tel"
              placeholder="Phone Number"
              value={formData.patientPhone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
            />

            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#023E8A]"
            />

            <button
              type="submit"
              className="sm:col-span-2 w-full sm:w-60 mx-auto bg-[#023E8A] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
     
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-75 animate-fadeIn">
          Appointment sent successfully!
        </div>
      )}

      {/* Tailwind fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;