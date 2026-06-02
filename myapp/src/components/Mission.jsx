import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photo08 from "../assets/new/photo08.JPG";
import {
  HeartHandshake,
  Eye,
  ShieldCheck,
} from "lucide-react";

const Mission = () => {
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

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const missionValues = [
    {
      title: "Our Mission",
      icon: HeartHandshake,
      desc: "To deliver high-quality, compassionate, and accessible healthcare services that improve the health and well-being of every patient and family we serve.",
    },
    {
      title: "Our Vision",
      icon: Eye,
      desc: "To become the most trusted healthcare institution in Ethiopia, recognized for medical excellence, innovation, and patient-centered care.",
    },
    {
      title: "Our Values",
      icon: ShieldCheck,
      desc: "Integrity, compassion, professionalism, respect, and excellence guide every decision and every interaction within our hospital.",
    },
  ];

  return (
    <section className="bg-[#f8fafa] pt-14 mt-20 md:mt-24 lg:mt-20 py-8 md:py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      {/* Header */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={isDesktop ? slideUp : {}}
        initial={isDesktop ? "hidden" : false}
        whileInView={isDesktop ? "visible" : false}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block text-[#0b6e6e] text-sm font-medium tracking-[3px] uppercase mb-4"
        >
          About Us
        </motion.span>

        <motion.h1
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-playfair text-4xl md:text-6xl text-[#0d1f2d] tracking-tight leading-tight"
        >
          Grand Bishoftu Hospital
        </motion.h1>

        <motion.p
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-3xl text-[#0b6e6e] text-sm md:text-base tracking-[2px] font-medium mx-auto leading-relaxed"
        >
          Delivering exceptional healthcare with compassion, innovation,
          and excellence.
        </motion.p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
        {missionValues.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#0b6e6e] to-[#0d4f4f] rounded-3xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              variants={isDesktop ? slideUp : {}}
              initial={isDesktop ? "hidden" : false}
              whileInView={isDesktop ? "visible" : false}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + idx * 0.1,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={isDesktop ? slideUp : {}}
                initial={isDesktop ? "hidden" : false}
                whileInView={isDesktop ? "visible" : false}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + idx * 0.1,
                }}
                className="w-14 h-14 rounded-2xl bg-[#5dc8c8]/20 flex items-center justify-center mb-6"
              >
                <Icon
                  size={28}
                  className="text-[#5dc8c8]"
                />
              </motion.div>

              <motion.h3
                variants={isDesktop ? slideUp : {}}
                initial={isDesktop ? "hidden" : false}
                whileInView={isDesktop ? "visible" : false}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + idx * 0.1,
                }}
                className="font-playfair text-3xl font-semibold mb-4"
              >
                {item.title}
              </motion.h3>

              <motion.p
                variants={isDesktop ? slideUp : {}}
                initial={isDesktop ? "hidden" : false}
                whileInView={isDesktop ? "visible" : false}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + idx * 0.1,
                }}
                className="text-white/90 leading-8 text-[15px] text-justify"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Image Section with Professional Frame */}
      <div
        ref={imageRef}
        className="my-12 md:my-20 h-auto lg:h-[80vh] relative"
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
            src={photo08}
            alt="Grand Bishoftu Hospital"
            style={{ scale }}
            className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-full object-cover relative z-10"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-3xl z-15" />
        </div>

        {/* Animated Bottom Text */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 right-6 md:right-10 text-white z-20">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-playfair text-3xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Your health is our priority.
            <br />
            <span className="text-[#5dc8c8]">
              We are here to care for you.
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#5dc8c8] text-sm md:text-base uppercase tracking-[4px]"
          >
            Grand Bishoftu Hospital
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;