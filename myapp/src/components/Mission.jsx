import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "./CountUp";
import photo08 from "../assets/new/photo08.JPG";

const Mission = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  // Zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const missionValues = [
    {
      title: "Our Mission",
      desc: "To deliver high-quality, compassionate, and accessible healthcare for all members of our community.",
    },
    {
      title: "Our Vision",
      desc: "To be the leading healthcare provider recognized for excellence, innovation, and patient trust.",
    },
    {
      title: "Our Values",
      desc: "Integrity, Compassion, and Patient-Centered Care guide everything we do.",
    },
  ];

  return (
    <div className="bg-white  pt-14 mt-20 md:mt-24 lg:mt-20 py-5 md:pt-16 lg:min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Hero Section - Unchanged */}
      <motion.div
        className="text-center mb-10 md:mb-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] tracking-tighter">
          About Grand Bishoftu Hospital
        </h1>
        <p className="mt-3 text-[#023E8A]/70 text-sm md:text-base tracking-[2px] font-medium">
          Providing compassionate care with advanced medical expertise.
        </p>
      </motion.div>

      {/* Mission & Values - Apple Style Cards Only */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
        {missionValues.map((item, idx) => (
          <motion.div
            key={idx}
            className="group bg-[#023E8A] text-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 hover:-translate-y-2 border border-white/10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm mb-5">
                <span className="text-2xl">★</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 tracking-tight">
              {item.title}
            </h3>

            <p className="text-white/90 leading-relaxed text-[15.2px]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Dramatic Zoom Image - Unchanged */}
      <div
        ref={imageRef}
        className="my-12 md:my-20 h-auto lg:h-[80vh] overflow-hidden relative"
      >
        <motion.img
          src={photo08}
          style={{ scale }}
          className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full rounded-2xl shadow-2xl object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 rounded-2xl" />
        
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="sm:text-3xl md:text-5xl font-medium tracking-tighter leading-none mb-4">
            "Your health is our priority..."
            <br />
            <span className="text-sky-500">we are here to care for you.</span>
          </p>

          <p className="text-sky-200 text-sm uppercase tracking-[3px] font-light">
            — Grand Bishoftu Hospital
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;