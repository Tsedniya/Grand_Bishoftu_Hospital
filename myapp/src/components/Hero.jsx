import React from "react";
import now from "../assets/new/now.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSecond = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[115vh] overflow-hidden">

        {/* Single background image */}
        <img
          src={now}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(2,62,138,0.75) 0%,
                rgba(2,62,138,0.55) 25%,
                rgba(2,62,138,0.30) 50%,
                rgba(255,255,255,0.10) 75%,
                rgba(255,255,255,0.20) 100%
              )
            `,
          }}
        />

        {/* HERO CONTENT */}
        <div className="absolute top-[35%] left-6 z-50 translate-x-10 max-w-xl text-white">

          {/* Title */}
          <motion.h2
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-2xl md:text-7xl font-extrabold leading-tight text-white"
          >
            Grand Bishoftu
          </motion.h2>

          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-7xl font-bold leading-tight text-sky-500"
          >
            Hospital
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed font-bold"
          >
            We provide high-quality, patient-centered healthcare services with
            modern facilities and experienced medical professionals dedicated
            to your well-being.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 mt-6"
          > 
          <Link to="/contact">
            <button className="bg-white text-sky-500 hover:bg-blue-900 px-6 py-3 rounded-3xl font-semibold transition">
              Emergency
            </button>
          </Link>
           
          <Link to="/services">
            <button className="bg-white text-blue-900 hover:bg-sky-500 px-6 py-3 rounded-3xl font-semibold transition">
              Our Services
            </button>
          </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSecond;