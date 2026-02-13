import React from "react";
import { motion } from "framer-motion";
import opration from "../assets/opration.jpg";
import star from "../assets/star.svg";
import heart from "../assets/heart.svg";

const Homeone = () => {
  // slide-in from left for image
  const slideFromLeft = {
    hidden: { x: -120 },  // start offscreen left
    visible: { x: 0 },    // move to original position
  };

  // slide-in from left for text + cards with slight delay
  const slideTextFromLeft = {
    hidden: { x: -120 },
    visible: { x: 0 },
  };

  return (
    <div className="mt-75 sm:mt-63 flex flex-col lg:flex-row gap-4 lg:gap-8 bg-white items-center justify-between pt-10 pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Image Section — slides from left */}
      <motion.div
        variants={slideFromLeft}
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
            src={opration}
            alt="Operation"
            className="w-full h-full object-cover shadow-xl rounded-lg"
            style={{ clipPath: "url(#blobClip)" }}
          />
        </div>
      </motion.div>

      {/* Text + Cards Section — slides from left with slight delay */}
      <motion.div
        variants={slideTextFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        {/* Text */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
          Exceptional Patient Care
        </h3>

        <p className="mt-4 text-lg font-opensans text-justify">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment and personalized care.
        </p>

        <p className="mt-4 text-lg font-opensans text-justify">
          At Grand Bishoftu Hospital, we are dedicated to delivering world-class
          healthcare with empathy and innovation, ensuring safety, comfort, and trust for every patient we serve.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 my-8 justify-center md:justify-start">
          <div className="bg-white w-full md:w-80 h-40 rounded-2xl shadow-md p-5 hover:scale-110 transition duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src={star} alt="Star" className="w-10" />
              <p className="font-semibold">Compassionate Care</p>
            </div>
            <p className="text-base">
              We provide personalized and compassionate care, ensuring every patient feels supported.
            </p>
          </div>

          <div className="bg-white w-full md:w-80 h-40 rounded-2xl shadow-md p-5 hover:scale-110 transition duration-300">
            <div className="flex items-center gap-3 mb-2">
              <img src={heart} alt="Heart" className="w-10" />
              <p className="font-semibold">Patient Safety</p>
            </div>
            <p className="text-base">
              We follow strict medical standards to deliver safe and reliable healthcare services.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Homeone;
