import React from "react";
import home from "../assets/home.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[80vh] min-h-[250px] overflow-hidden">

        
        {/* Hero background image + clip-path curve */}
        <div className="hero-clip absolute inset-0">
          <img
            src={home}
            alt="Hospital"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 70%" }}
          />
        </div>


        {/* Gradient overlay - also clipped to the curve */}
        <div
            className="hero-clip absolute inset-0"
            style={{
              background: ` linear-gradient( to right, #023E8A 0%, rgba(2,62,138,0.85) 15%, rgba(2,62,138,0.6) 30%, rgba(2,62,138,0.35) 45%, rgba(2,62,138,0.18) 60%, rgba(255,255,255,0.35) 72%, rgba(255,255,255,0.35) 100%
                )
              `,
            }}
          />

        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24">
          <h1 className=" text-center text-3xl sm:text-4xl md:text-5xl font-opensans font-bold text-white leading-tight drop-shadow-2xl">
            <span>Health is a treasure </span>
            <span>we care together</span>
          </h1>
        </div>

        {/* Overlapping cards at bottom */}
         <div className="absolute bottom-[-40px]  left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-8 pb-10 px-4 z-[50]">
          <div className="bg-[#023E8A] backdrop-blur-sm border border-white/20 w-80 h-40 rounded-lg text-left p-6 transition-transform duration-300 hover:scale-105 shadow-2xl">
            <p className="text-white font-bold mb-2">Compassionate Care</p>
            <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-[#023E8A] backdrop-blur-sm border border-white/20 w-80 h-40 rounded-lg text-left p-6 transition-transform duration-300 hover:scale-105 shadow-2xl">
            <p className="text-white font-bold mb-2">Expert Team</p>
            <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
       

        {/* White wavy divider with upward soft shadow → creates the blurry/shadowy blend at curve */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-30">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
            style={{ filter: "drop-shadow(0 -12px 24px rgba(0,0,0,0.35))" }}
          >
            <path
              fill="#ffffff" // White to match page background below
              d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;