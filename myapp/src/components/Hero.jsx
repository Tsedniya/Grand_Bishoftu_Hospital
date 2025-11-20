import React, { useState, useEffect } from "react";

import hospital from "../assets/hospital.jpg";
import after from "../assets/after.jpg";
import inside from "../assets/inside.jpg";
import machine from "../assets/machine.jpg";
import middle from "../assets/middle.jpg";
import opration from "../assets/opration.jpg";
import place from "../assets/place.jpg";

const images = [
  hospital,
  after,
  inside,
  machine,
  middle,
  opration,
  place
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen pt-16">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">
        <button className="mt-3 mb-4 px-4 md:px-5 py-1 bg-sky-400 text-white text-sm md:text-base rounded-full">
          Leading Health Specialists
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Grand Bishoftu Hospital
        </h1>

        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white max-w-xl md:max-w-2xl">
          Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
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
