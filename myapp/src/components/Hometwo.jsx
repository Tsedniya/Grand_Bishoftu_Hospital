import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo12 from "../assets/new/photo12.jpg";

const Hometwo = () => {
  // slide-in from right
  const slideFromRight = {
    hidden: { x: 120 },
    visible: { x: 0 },
  };

  // Detect if screen is desktop (lg breakpoint >= 1024px)
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="-mt-20 flex flex-col lg:flex-row-reverse bg-white items-center justify-between pt-10 pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-4 lg:gap-8">

      {/* Image Section */}
      {isDesktop ? (
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
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
              src={photo12}
              alt="Operation"
              className="w-full h-full object-cover shadow-xl rounded-lg"
              style={{ clipPath: "url(#blobClip)" }}
            />
          </div>
        </motion.div>
      ) : (
        <div className="relative w-full lg:w-1/2 flex items-center justify-center py-6">
          <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[5/4]">
            <img
              src={photo12}
              alt="Operation"
              className="w-full h-full object-cover shadow-xl rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Text Section */}
      {isDesktop ? (
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
            We Take Care of You
          </h3>
          <p className="mt-4 font-opensans text-lg text-justify">
             At Grand Bishoftu Hospital, we deliver compassionate and reliable healthcare for every patient. Our team of skilled medical professionals is dedicated to providing personalized treatment, advanced care, and unwavering support to ensure your health and well-being at every step.
          </p>
          <p className="mt-4 font-opensans text-lg text-justify">
             We are committed to providing world-class healthcare with compassion and innovation. Our priority is the safety, comfort, and trust of every patient, ensuring exceptional care at every stage of treatment
          </p>
        </motion.div>
      ) : (
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
            We Take Care of You
          </h3>
          <p className="mt-4 font-opensans text-lg text-justify">
            Providing trusted healthcare services with compassion and excellence.
            Our experienced medical specialists are committed to ensuring the
            well-being of every patient through advanced treatment and personalized care.
          </p>
          <p className="mt-4 font-opensans text-lg text-justify">
            At Grand Bishoftu Hospital, we are dedicated to delivering world-class
            healthcare with empathy and innovation, ensuring safety, comfort, and
            trust for every patient we serve.
          </p>
        </div>
      )}

    </div>
  );
};

export default Hometwo;