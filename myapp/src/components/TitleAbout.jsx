import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo06 from "../assets/new/photo06.JPG";
import photo41 from "../assets/new/photo41.jpg";

const TitleAbout = () => {
  const slideFromRight = {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Scroll zoom (bottom image)
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <div className="bg-white mt-10 px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]">

      {/* CONTENT SECTION */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-10">

        {/* Image Section (Blob) */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="absolute w-[65%] h-[65%] bg-sky-200/40 rounded-full blur-2xl" />

          <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[5/4]">
            <div className="absolute top-[10%] left-[10%] w-5 h-5 bg-[#023E8A] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" />

            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.83,0.14 C0.92,0.28 0.98,0.45 0.96,0.6 C0.94,0.75 0.84,0.88 0.7,0.94 C0.56,1 0.38,0.98 0.23,0.9 C0.08,0.82 -0.02,0.68 0.01,0.52 C0.04,0.36 0.2,0.18 0.38,0.1 C0.56,0.02 0.74,0.01 0.83,0.14 Z" />
                </clipPath>
              </defs>
            </svg>

            <img
              src={photo41}
              alt="Operation"
              className="w-full h-full object-cover shadow-xl rounded-lg"
              style={{ clipPath: "url(#blobClip)" }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 text-[#023E8A] font-poppins leading-tight md:leading-snug">
            Committed to Care
          </h3>

          <p className="font-opensans mb-3 text-base lg:text-lg leading-relaxed text-left lg:text-justify">
            We deliver compassionate and trusted healthcare. Our cardiology and neurology teams provide advanced heart and brain care. Orthopedics specialists restore mobility with modern treatments and surgeries. Pediatrics ensures comprehensive, child-friendly medical care for all ages. Oncology offers cutting-edge cancer treatments with expert guidance. Pulmonology and infectious disease departments protect lung and infection health.
          </p>

          <p className="font-opensans text-base lg:text-lg leading-relaxed text-left lg:text-justify">
            We offer minimally invasive laparoscopic surgery for faster recovery and less pain. Our urology services treat urinary and male reproductive conditions. We also provide expert ophthalmology care for eye health.
          </p>
        </motion.div>

      </div>

      {/* FINAL ZOOM IMAGE (FIXED) */}
      <div
        ref={imageRef}
        className="my-12 md:my-20 h-auto lg:h-[80vh] overflow-hidden"
      >
        <motion.img
          src={photo06}
          style={{ scale }}
          className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full rounded-2xl shadow-2xl object-cover"
        />
      </div>

    </div>
  );
};

export default TitleAbout;