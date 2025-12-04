import React from "react";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Hero image */}
      <section
        className="relative flex-1 w-full"
        style={{
          backgroundImage: `url(${home})`,
          backgroundPosition: "center 70%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat" ,
        }}
      >
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/35 to-white/0" />

        {/* Content on image */}
        <div className="relative z-10 flex flex-col justify-center h-full mt-10 px-6 md:px-16 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
            Grand Bishoftu Hospital
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-opensans text-white max-w-full md:max-w-2xl leading-relaxed mt-4">
            Providing trusted healthcare services with compassion and excellence.
            Our experienced medical specialists are committed to ensuring the
            well-being of every patient through advanced treatment and
            personalized care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <button className="font-bold font-opensans px-6 py-3 bg-sky-400 text-white rounded-full hover:bg-sky-700">
              Learn More
            </button>
            <button className="font-bold font-opensans px-6 py-3 border border-sky-400 text-white rounded-full hover:bg-sky-400">
              Explore Services
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <div className="text-left">
              <p className="text-white font-bold">Emergency Line</p>
              <p className="text-white font-bold pt-2 text-xl">+1 (555) 987-6543</p>
            </div>
           <div className="text-left">
             <p className="text-white font-bold">Working Hours</p>
             <p className="text-white font-bold pt-2 text-xl">Mon-Fri: 8AM-8PM</p>
           </div>
          </div>
        </div>
      </section>

      
    </div>


  );
};

export default Hero;
