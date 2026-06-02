import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo06 from "../assets/new/photo06.JPG";
import photo41 from "../assets/new/photo41.jpg";

const TitleAbout = () => {
  const slideFromRight = {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.9, 1.1]
  );

  return (
    <section className="bg-[#f8fafa] -mt-16 sm:-mt-24 md:mt-0 py-10 md:py-16 px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]">
      
      {/* Main Row */}
      <div className="flex flex-col lg:flex-row-reverse items-stretch gap-8 lg:gap-12">

        {/* Image Section */}
        <motion.div
          variants={isDesktop ? slideFromRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="absolute w-[70%] h-[70%] bg-[#5dc8c8]/30 rounded-full blur-3xl" />

          <div className="relative z-10 w-full h-full max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={photo41}
              alt="Grand Bishoftu Hospital"
              className="w-full h-full object-cover rounded-3xl shadow-2xl border border-[#5dc8c8]/30"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl flex items-end p-6">
              <div>
                <p className="text-[#5dc8c8] text-xs uppercase tracking-[3px] mb-2">
                  Grand Bishoftu Hospital
                </p>

                <p className="text-white text-lg md:text-xl font-medium leading-snug">
                  Compassionate healthcare supported by modern medicine
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={isDesktop ? slideFromRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          {/* Animated "Who We Are" Badge */}
          <motion.span
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#0b6e6e] uppercase tracking-[3px] text-sm font-medium mb-3 inline-block"
          >
            Who We Are
          </motion.span>

          {/* Animated Main Heading */}
          <motion.h3
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#0d1f2d] leading-tight mb-6"
          >
            Excellence in Healthcare,
            <br />
            Compassion in Every Service
          </motion.h3>

          <motion.p
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-dmsans text-base lg:text-lg leading-8 text-[#6a7c8a] text-left lg:text-justify"
          >
            Grand Bishoftu Hospital is dedicated to delivering
            comprehensive, patient-centered healthcare through
            advanced medical technology, experienced professionals,
            and a commitment to excellence. Our focus is on
            providing safe, accessible, and high-quality medical
            services for every patient who walks through our doors.
          </motion.p>


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
              Trusted Healthcare Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Featured Image with Professional Frame */}
      <div
        ref={imageRef}
        className="mt-14 md:mt-20 h-auto lg:h-[80vh] relative"
      >
        {/* Outer Frame - Decorative Border */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5dc8c8]/30">
          
          {/* Inner Frame - Secondary Border */}
          <div className="absolute inset-2 rounded-2xl border-2 border-[#5dc8c8]/20 pointer-events-none z-20" />

          {/* Frame Corners - Decorative accent corners */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-[#5dc8c8] rounded-tl-lg z-30" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-[#5dc8c8] rounded-tr-lg z-30" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-[#5dc8c8] rounded-bl-lg z-30" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-[#5dc8c8] rounded-br-lg z-30" />

          {/* Zoom Image */}
          <motion.img
            src={photo06}
            alt="Grand Bishoftu Hospital Medical Team"
            style={{ scale }}
            className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full object-cover relative z-10"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 rounded-3xl z-15" />
        </div>

        {/* Animated Bottom Text */}
        <div className="absolute bottom-6 md:bottom-10 left-5 md:left-10 right-5 md:right-10 text-white z-20">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-playfair text-3xl md:text-5xl lg:text-6xl leading-tight"
          >
            Dedicated Hands.
            <br />
            <span className="text-[#5dc8c8]">
              Trusted Care.
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-[#5dc8c8] text-xs sm:text-sm uppercase tracking-[4px]"
          >
            — Grand Bishoftu Hospital Medical Team
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TitleAbout;