import React from "react";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Hero container */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[100vh] min-h-[350px]">

        {/* Background image */}
        <img
          src={home}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 75%" }}
        />

        {/* First gradient overlay - Main blue gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background: `linear-gradient(
              to right,
              #023E8A 0%,
              rgba(2,62,138,0.85) 18%,
              rgba(2,62,138,0.6) 35%,
              rgba(2,62,138,0.3) 55%,
              rgba(255,255,255,0.15) 70%,
              rgba(255,255,255,0.25) 100%
            )`,
          }}
        />

        {/* Second gradient overlay - Center radial gradient */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-11"
          style={{
            background: `radial-gradient(
              circle at center,
              rgba(255,255,255,0.15) 0%,
              rgba(255,255,255,0.1) 25%,
              rgba(255,255,255,0.05) 40%,
              rgba(2,62,138,0.1) 60%,
              rgba(2,62,138,0.2) 80%,
              rgba(2,62,138,0.3) 100%
            )`,
            mixBlendMode: 'screen'
          }}
        />

        {/* Third gradient overlay - Vertical light overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full z-12"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(255,255,255,0.2) 0%,
              rgba(255,255,255,0.15) 15%,
              rgba(255,255,255,0.1) 30%,
              rgba(255,255,255,0.05) 50%,
              rgba(2,62,138,0.1) 70%,
              rgba(2,62,138,0.2) 85%,
              rgba(2,62,138,0.3) 100%
            )`,
            mixBlendMode: 'overlay'
          }}
        />

        {/* Content */}
        <div className="relative z-30 flex flex-col justify-center items-center h-full px-6 md:px-16 lg:px-24">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl">
            <span className="block">Health is a treasure</span>
            <span className="block">we care together</span>
          </h1>
          
        </div>

        {/* Enhanced curved section with multiple layers */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-40">
          {/* Main curve */}
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="w-full h-32 md:h-40 lg:h-48"
          >
            <path
              d="M0,0 C480,180 960,180 1440,0 L1440,200 L0,200 Z"
              fill="#ffffff"
            />
          </svg>
          
          {/* Overlay gradient on curve */}
          <div 
            className="absolute bottom-0 left-0 w-full h-32 md:h-40 lg:h-48"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.3) 50%,
                rgba(255,255,255,0.7) 100%
              )`,
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Floating decorative elements (optional) */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 blur-xl z-0" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/5 blur-xl z-0" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-300/10 blur-xl z-0" />

      </div>
    </section>
  );
};

export default Hero;