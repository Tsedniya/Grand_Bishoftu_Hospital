import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo15 from "../assets/new/photo15.jpg";
import handheart from "../assets/handheart.svg";
import heartpulse from "../assets/heartpulse.svg";

const Homeone = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideFromLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideFromRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="mt-20 lg:mt-24 flex flex-col lg:flex-row gap-3 sm:gap-6 lg:gap-16 bg-white items-center justify-between pt-4 sm:pt-8 lg:pt-10 pb-10 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* IMAGE SIDE */}
      <motion.div
        variants={isDesktop ? slideFromLeft : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative w-full lg:w-1/2 flex items-center justify-center"
      >
        <div className="absolute w-[68%] h-[68%] bg-sky-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-md lg:max-w-lg overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={photo15}
            alt="Patient Care"
            className="w-full h-auto aspect-[16/13] object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.4,
          delay: 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <div className="flex items-center gap-2 mb-2">
          <img
            src={handheart}
            alt="Care"
            className="w-7 h-7 sm:w-9 sm:h-9"
          />

          <img
            src={heartpulse}
            alt="Heart"
            className="w-7 h-7 sm:w-9 sm:h-9"
          />
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#023E8A] tracking-tighter leading-tight mb-3 sm:mb-6">
          Exceptional Patient Care
        </h3>

        <p className="text-[15px] sm:text-lg text-gray-700 leading-relaxed max-w-[520px]">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment and personalized
          care.
        </p>

        <p className="mt-2 sm:mt-5 text-sm sm:text-base text-gray-600">
          • Neurology • Orthopedics • Pediatrics • Oncology • Pulmonology
        </p>
      </motion.div>
    </div>
  );
};

export default Homeone;