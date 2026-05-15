import React from "react";
import now from "../assets/new/now.png";
import photo11 from "../assets/new/photo11.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSecond = () => {
  return (
    <section className="w-full relative">
      <div className="relative w-full h-screen lg:h-[100vh] overflow-hidden">

        {/* Background Image */}
        <picture>
          <source srcSet={now} media="(min-width: 1024px)" />
          <img
            src={photo11}
            alt="Grand Bishoftu Hospital"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Main Content */}
        <div className="relative z-20 h-full flex items-center px-6 sm:px-10 lg:px-20 max-w-4xl">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none">
                Grand Bishoftu<br />
                <span className="text-sky-400">Hospital</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-lg"
            >
              Exceptional healthcare delivered with compassion, innovation, 
              and unwavering commitment to your well-being.
            </motion.p>

            {/* Premium Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link to="/contact">
                <button className="group px-8 py-4 bg-white text-[#023E8A] font-medium rounded-2xl 
                                 hover:bg-[#023E8A] hover:text-white transition-all duration-300 
                                 flex items-center gap-3 shadow-lg shadow-black/20 hover:shadow-xl">
                  <span>Emergency Care</span>
                  <span className="text-xl group-hover:rotate-12 transition">→</span>
                </button>
              </Link>

              <Link to="/services">
                <button className="group px-8 py-4 border border-white/70 text-white font-medium 
                                 rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                  Explore Our Services
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-white/70 text-sm tracking-widest"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-8 bg-white/40 mt-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSecond;