import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo11 from "../assets/new/photo11.jpg";

const Treatment = () => {
  // detect desktop screen
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // slide-in from right animation
  const slideFromRight = {
    hidden: { x: 120 },
    visible: { x: 0 },
  };

  return (
    <div className="-mt-20 flex flex-col lg:flex-row-reverse bg-white items-center justify-between pt-10 pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-4 lg:gap-8">

      {/* Image Section */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6 }}
        className="relative w-full lg:w-1/2 flex items-center justify-center py-6"
      >
        {/* background glow */}
        <div className="absolute w-[65%] h-[65%] bg-sky-200/40 rounded-full blur-2xl" />

        {/* image container */}
        <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[5/4] overflow-visible">

          {/* small circle decoration */}
          <div className="absolute top-[10%] left-[10%] w-6 h-6 bg-[#023E8A] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" />

          {/* blob clip path */}
          <svg width="0" height="0" className="absolute inset-0">
            <defs>
              <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                <path d="M0.83,0.14 C0.92,0.28 0.98,0.45 0.96,0.6 C0.94,0.75 0.84,0.88 0.7,0.94 C0.56,1 0.38,0.98 0.23,0.9 C0.08,0.82 -0.02,0.68 0.01,0.52 C0.04,0.36 0.2,0.18 0.38,0.1 C0.56,0.02 0.74,0.01 0.83,0.14 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* image */}
          <img
            src={photo11}
            alt="Operation"
            className="w-full h-full object-cover shadow-xl rounded-lg"
            style={{
              clipPath: "url(#blobClip)",
              transform: "scale(1.08)",
            }}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
            Specialized Care Team
        </h3>

        <p className="mt-2 font-opensans text-lg text-justify">
          Established with over 30 experienced specialists and sub-specialists, Grand Bishoftu Hospital is committed to delivering exceptional healthcare across a wide range of medical fields. Our team combines expertise, advanced technology, and compassionate care to ensure every patient receives personalized treatment and guidance. 
        </p>

        <p className="mt-2 font-opensans text-lg text-justify">
           From routine check-ups to complex procedures, we provide comprehensive services with a focus on safety, comfort, and outstanding outcomes.
        </p>
      </motion.div>

    </div>
  );
};

export default Treatment;