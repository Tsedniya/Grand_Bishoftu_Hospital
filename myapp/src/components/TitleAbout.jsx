import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo06 from "../assets/new/photo06.JPG";
import photo41 from "../assets/new/photo41.jpg";

const TitleAbout = () => {
  const slideFromRight = {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <div className="bg-white sm:-mt-5  md:mt-0 py-10 px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw]">

      {/* ROW */}
      <div className="flex flex-col lg:flex-row-reverse lg:h-[420px] items-stretch gap-3 lg:gap-10">

        {/* IMAGE SIDE */}
        <motion.div
          variants={isDesktop ? slideFromRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 h-full flex items-center justify-center"
        >
          <div className="absolute w-[65%] h-[65%] bg-sky-300/30 rounded-full blur-2xl" />

          <div className="relative z-10 w-full h-full max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={photo41}
              alt="Eye treatment hospital care"
              className="w-full h-full object-cover shadow-2xl rounded-2xl border border-sky-200"
            />

            {/* overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end p-6">
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest text-sky-200">
                  Eye Care Department
                </p>

                <p className="text-lg md:text-xl font-semibold leading-snug">
                  Precision vision treatment with modern technology
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 h-full flex flex-col justify-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl mb-3 text-[#023E8A] font-poppins leading-tight md:leading-snug">
            Hospital Eye Treatment Services
          </h3>

          <p className="font-opensans text-base lg:text-lg leading-relaxed text-left lg:text-justify text-gray-700">
            Our ophthalmology department provides comprehensive eye care including
            diagnosis, treatment, and surgery for vision-related conditions. We use
            modern diagnostic tools and evidence-based procedures to protect and
            restore eyesight.
          </p>

          <p className="font-opensans text-base lg:text-lg leading-relaxed text-left lg:text-justify mt-4 text-gray-700">
            From routine eye exams to advanced surgical procedures, our specialists
            focus on accuracy, safety, and long-term visual health for every patient.
          </p>

          <div className="mt-4 flex items-center gap-3 text-sm text-[#023E8A]">
            <div className="h-px w-8 bg-sky-200" />
            <span>Specialized eye care you can trust</span>
          </div>
        </motion.div>

      </div>

      {/* FINAL ZOOM IMAGE */}
      <div
        ref={imageRef}
        className="mt-4 md:mt-16 h-auto lg:h-[80vh] overflow-hidden relative"
      >
        <motion.img
          src={photo06}
          style={{ scale }}
          className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full rounded-2xl shadow-2xl object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 rounded-2xl" />

        <div className="absolute bottom-6 md:bottom-10 left-5 md:left-10 right-5 md:right-10 text-white">
          <p className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight">
            Dedicated hands.{" "}
            <span className="text-sky-500">Trusted care.</span>
          </p>

          <p className="mt-3 text-sky-200 text-xs sm:text-sm uppercase tracking-widest">
            — Our Medical Staff
          </p>
        </div>
      </div>

    </div>
  );
};

export default TitleAbout;