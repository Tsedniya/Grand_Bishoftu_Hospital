import React from "react";
import frontal from "../assets/frontal.jpg"; // your single image

const Hero = () => {
  return (
    <section className="relative w-full h-screen pt-16">
      {/* Background Image */}
      <img
        src={frontal}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ objectPosition: "center 30%" }}   // ← This actually works!
        loading="eager"
      />

      {/* Optional transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">
        <button className="mt-3 mb-4 px-4 md:px-5 py-1 bg-sky-400 text-white text-sm md:text-base rounded-full">
          Leading Health Specialists
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Grand Bishoftu Hospital
        </h1>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white max-w-xl md:max-w-2xl">
          Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment and personalized care.
        </p>

        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="font-bold px-6 py-3 bg-sky-400 text-white rounded-full hover:bg-sky-700">
            Learn More
          </button>
          <button className="font-bold px-6 py-3 border border-sky-400 text-white rounded-full hover:bg-sky-400">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
