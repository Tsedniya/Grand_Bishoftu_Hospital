import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo11 from "../assets/new/photo11.jpg";

const Treatment = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideFromRight = {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white items-center justify-between pt-10 pb-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-4 lg:gap-8">

      {/* IMAGE SECTION - The Exorcist */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="relative w-full lg:w-1/2 flex items-center justify-center py-6"
      >
        {/* Romantic glow */}
        <div className="absolute w-[65%] h-[65%] bg-rose-300/30 rounded-full blur-2xl" />

        {/* Image Container */}
        <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg h-[260px] sm:h-[340px] md:h-[400px] lg:h-[420px]">
          <img
            src={photo11}
            alt="The Exorcist"
            className="w-full h-full object-cover shadow-xl rounded-2xl border border-rose-200"
          />

          {/* Dramatic romantic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl flex items-end p-6">
            <div className="text-white">
                <p className="text-xs uppercase tracking-widest text-sky-200">
                  Experienced Specialists Team
                </p>
                <p className="text-xl md:text-lg font-semibold">
                  Advanced care delivered by medical professionals
                </p>
              </div>
          </div>
        </div>
      </motion.div>

      {/* TEXT SECTION - Dark Romance Version */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        <h3 className="text-lg sm:text-3xl md:text-5xl mb-3 text-[#023E8A] font-poppins leading-tight md:leading-snug">
          Our Story
        </h3>

      
        <p className="font-opensans mb-3 sm:text-base lg:text-lg leading-relaxed text-left lg:text-justify text-gray-700">Established with over 30 experienced specialists and sub-specialists, Grand Bishoftu Hospital is committed to delivering exceptional healthcare across a wide range of medical fields. Our team combines expertise, advanced technology, and compassionate care to ensure every patient receives personalized treatment and guidance.</p>
         <p className="font-opensans mb-3 sm:text-base lg:text-lg leading-relaxed text-left lg:text-justify text-gray-700">
            Our hospital is supported by a dedicated team of doctors, nurses, and medical specialists
            who work across multiple departments including neurology, pediatrics,
            ophthalmology, orthopedics, and emergency care. 
          </p>
        <div className="mt-6 inline-flex items-center gap-3 text-sm text-[#023E8A]">
          <div className="h-px w-12 bg-rose-200" />
          <span className="italic">Experienced specialists...</span>
        </div>
      </motion.div>

    </div>
  );
};

export default Treatment;