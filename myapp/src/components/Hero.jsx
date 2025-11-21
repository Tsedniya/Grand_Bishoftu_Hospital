import React from "react";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <section
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url(${home})`,
            backgroundPosition: "center 20%"   // tweak 10%-30% until the building looks perfect on phone
          }}
        >
      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-900/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">

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

        <div className="">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
