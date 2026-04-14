import React, { useEffect, useState } from "react";
import photo05 from "../assets/new/photo05.JPG";
import photo08 from "../assets/new/photo08.JPG";
import photo06 from "../assets/new/photo06.JPG";
import { motion } from "framer-motion";

const images = [photo05, photo08, photo06];

const HeroSecond = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="relative w-full h-[115vh] overflow-hidden">

        {/* Background images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

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
            className="text-2xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text"
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
            className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed"
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
            <button className="bg-white text-sky-500 hover:bg-blue-900 px-6 py-3 rounded-3xl font-semibold transition">
              Emergency
            </button>

            <button className="bg-white text-blue-900 hover:bg-sky-500 px-6 py-3 rounded-3xl font-semibold transition">
              Our Services
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSecond;