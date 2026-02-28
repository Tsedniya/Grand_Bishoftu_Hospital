import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo15 from "../assets/new/photo15.jpg";
import handheart from "../assets/handheart.svg";
import heartpulse from "../assets/heartpulse.svg";

const Homeone = () => {
  // Detect desktop screen (≥1024px)
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation configs
  const slideFromLeft = {
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideTextFromLeft = {
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="mt-85 md:mt-83 lg:mt-63 flex flex-col lg:flex-row gap-4 lg:gap-8 bg-white items-center justify-between pt-10 pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Image Section */}
      <motion.div
        variants={isDesktop ? slideFromLeft : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="relative w-full lg:w-1/2 flex items-center justify-center py-6"
      >
        <div className="absolute w-[65%] h-[65%] bg-sky-200/40 rounded-full blur-2xl" />

        <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[5/4]">
          <div className="absolute top-[10%] left-[10%] w-6 h-6 bg-[#023E8A] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" />

          <svg width="0" height="0" className="absolute inset-0">
            <defs>
              <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                <path d="M0.83,0.14 C0.92,0.28 0.98,0.45 0.96,0.6 C0.94,0.75 0.84,0.88 0.7,0.94 C0.56,1 0.38,0.98 0.23,0.9 C0.08,0.82 -0.02,0.68 0.01,0.52 C0.04,0.36 0.2,0.18 0.38,0.1 C0.56,0.02 0.74,0.01 0.83,0.14 Z" />
              </clipPath>
            </defs>
          </svg>

          <img
            src={photo15}
            alt="Operation"
            className="w-full h-full object-cover shadow-xl rounded-lg"
            style={{ clipPath: "url(#blobClip)" }}
          />
        </div>
      </motion.div>

      {/* Text + Cards */}
      <motion.div
        variants={isDesktop ? slideTextFromLeft : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        <h3 className="text-2xl lg:text-5xl mb-3 m sm:text-3xl md:text-4xl text-[#023E8A] font-poppins leading-tight md:leading-snug">
          Exceptional Patient Care
        </h3>

        <p className="font-opensans mb-3 sm:text-base lg:text-lg leading-relaxed text-left lg:text-justify break-words hyphens-auto tracking-normal lg:tracking-wide">
             Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment and personalized care. 
             We deliver comprehensive services across cardiology, neurology, orthopedics, pediatrics, oncology, pulmonology, and infectious disease care. 
 
        </p>

        

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 my-8 justify-center md:justify-start">
          <div className="bg-sky-500 w-full md:w-80 h-40 rounded-2xl shadow-2xl p-5 hover:scale-110 transition duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src={handheart} alt="handheart" className="w-10" />
              <p className="font-semibold font-opensans text-white">Compassionate Care</p>
            </div>
            <p className="text-base text-center text-white ">
              We provide personalized and compassionate care.
            </p>
          </div>

          <div className="bg-sky-500 w-full md:w-80 h-40 rounded-2xl shadow-2xl p-5 hover:scale-110 transition duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src={heartpulse} alt="Heart" className="w-10" />
              <p className="font-semibold font-opensans text-white"> Medical Excellence</p>
            </div>
            <p className="text-base text-center text-white">
               We follow strict medical standards to ensure patient safety.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homeone;