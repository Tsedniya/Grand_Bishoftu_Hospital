import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo12 from "../assets/new/photo12.jpg";

const Hometwo = () => {
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
    <div className="flex flex-col lg:flex-row-reverse bg-white items-center justify-between pt-4 pb-10 sm:pt-8 sm:pb-16 md:py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-6 sm:gap-10 lg:gap-16">

      {/* IMAGE SIDE */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
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
            src={photo12}
            alt="Patient Care"
            className="w-full h-auto aspect-[16/13] object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Shine Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        variants={isDesktop ? slideFromLeft : {}}
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
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#023E8A] tracking-tighter leading-tight mb-4 sm:mb-6">
          We Take Care of You
        </h3>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
          At Grand Bishoftu Hospital, we deliver compassionate and reliable
          healthcare for every patient. Our team of skilled medical
          professionals is dedicated to providing personalized treatment,
          advanced care, and unwavering support.
        </p>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          • Your safety, comfort, and trust are our top priority.
        </p>
      </motion.div>
    </div>
  );
};

export default Hometwo;