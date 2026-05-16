import React, { useState } from "react";
import patient from "../assets/patient.jpg";
import { motion } from "framer-motion";
import notebook from "../assets/notebook.svg";
import call from "../assets/call.svg";

const departments = [
  { title: "Surgery" },
  { title: "Gynecology" },
  { title: "Pediatrics" },
  { title: "Laparoscopic Surgery" },
  { title: "Ophthalmology" },
  { title: "Orthopedic Surgery" },
  { title: "Urology" },
  { title: "Neurology" },
  { title: "Pathology" },
  { title: "Plastic Surgery" },
  { title: "Psychiatry" },
  { title: "Neurosurgery" },
  { title: "Physiotherapy" },
  { title: "Laboratory" },
];

const today = new Date().toISOString().split("T")[0];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    date: "",
    department: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      date: formData.date ? new Date(formData.date).toISOString() : null,
    };

    console.log("Sending payload:", payload);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/appointments/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormData({ patientName: "", patientEmail: "", patientPhone: "", date: "", department: "" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 mt-5 overflow-hidden">
      {/* Background Image */}
      <img
        src={patient}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* New Gradient Overlay - Using your brand color */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#023E8A]/65 to-[#012c6b]/90" />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.img
            src={notebook}
            alt="Notebook"
            className="w-20 sm:w-24 mx-auto mb-6"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tighter">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-md mx-auto">
            Experience care that goes beyond medicine
          </p>
        </motion.div>

        {/* Premium Form Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/60">
          {/* Contact Info */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-[#023E8A]/10 rounded-2xl">
              <img src={call} alt="Phone" className="w-9" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call us directly</p>
              <h3 className="text-2xl font-semibold text-[#023E8A]">+251-977434445</h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              id="patientName"
              type="text"
              placeholder="Full Name"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#023E8A] focus:ring-1 focus:ring-[#023E8A] transition-all text-lg"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                id="patientEmail"
                type="email"
                placeholder="Email Address"
                value={formData.patientEmail}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#023E8A] focus:ring-1 focus:ring-[#023E8A] transition-all"
              />

              <input
                id="patientPhone"
                type="tel"
                placeholder="Phone Number"
                value={formData.patientPhone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#023E8A] focus:ring-1 focus:ring-[#023E8A] transition-all"
              />
            </div>

            <select
              id="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#023E8A] focus:ring-1 focus:ring-[#023E8A] transition-all text-base"
            >
              <option value="">Select Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept.title}>
                  {dept.title}
                </option>
              ))}
            </select>

            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#023E8A] focus:ring-1 focus:ring-[#023E8A] transition-all"
            />

            <button
              type="submit"
              className="w-full bg-[#023E8A] hover:bg-[#012c6b] active:scale-[0.985] transition-all duration-200 text-white py-4 rounded-2xl text-lg font-medium shadow-lg shadow-[#023E8A]/30 mt-4"
            >
              Confirm Appointment
            </button>
          </form>
        </div>

        <p className="text-center text-white/60 text-sm mt-6">
          Your health deserves the best care
        </p>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-400 text-white px-8 py-4 rounded-2xl shadow-xl z-80 flex items-center gap-3">
          <span className="text-2xl">✓</span>
          Appointment request sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;