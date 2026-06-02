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
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideFromRight = {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="mt-20 lg:mt-24 flex flex-col lg:flex-row gap-3 sm:gap-6 lg:gap-16 bg-white items-center justify-between pt-4 sm:pt-8 lg:pt-10 pb-10 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* IMAGE SIDE */}
      <motion.div
        variants={isDesktop ? slideFromLeft : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full lg:w-1/2 flex justify-center"
      >
        {/* Soft background glow */}
        <div className="absolute w-[65%] h-[65%] bg-[#5dc8c8]/25 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-md lg:max-w-lg h-[260px] sm:h-[340px] md:h-[420px]">
          <img
            src={photo15}
            alt="Patient Care"
            className="w-full h-full object-cover rounded-2xl shadow-xl border border-[#5dc8c8]/30"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl flex items-end p-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#5dc8c8]">
                Advanced Medical Care
              </p>
              <p className="text-white text-lg font-semibold leading-snug">
                Modern treatment delivered with precision
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        variants={isDesktop ? slideFromRight : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        {/* Animated SECTION TAG */}
        <motion.span
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#0b6e6e] uppercase tracking-[3px] text-sm font-medium mb-3 inline-block"
        >
          Exceptional Patient Care
        </motion.span>

        {/* Animated HEADING */}
        <motion.h3
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#0d1f2d] leading-tight mb-6"
        >
          Providing healthcare services  with  excellence
         
         
        </motion.h3>

        {/* Animated PARAGRAPHS */}
        <motion.p
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-dmsans text-base lg:text-lg leading-8 text-[#6a7c8a] text-left lg:text-justify"
        >
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment and personalized
          care. We provide trusted healthcare services with compassion and excellence.
        </motion.p>

        <motion.p
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-[#0b6e6e] text-sm font-medium"
        >
          • Neurology • Orthopedics • Pediatrics • Pathology • Urology
        </motion.p>

        {/* Animated DIVIDER LINE */}
        <motion.div
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-[#5dc8c8]" />
          <span className="text-[#0b6e6e] text-sm font-medium tracking-wide">
            Trusted Clinical Excellence
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homeone;