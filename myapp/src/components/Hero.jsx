import React from "react";
import home from "../assets/home.jpg";
import tpulse from "../assets/tpulse.svg";
import heart from "../assets/heart.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-white mt-26 relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] min-h-[350px] overflow-hidden">

        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src={home}
            alt="Hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 75%" }}
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to right, 
              #023E8A 0%, 
              rgba(2,62,138,0.85) 15%, 
              rgba(2,62,138,0.6) 30%, 
              rgba(2,62,138,0.35) 45%, 
              rgba(2,62,138,0.18) 60%, 
              rgba(255,255,255,0.35) 72%, 
              rgba(255,255,255,0.35) 100%
            )`,
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-opensans font-bold text-white leading-tight drop-shadow-2xl">
            <span>Health is a treasure </span>
            <span>we care together</span>
          </h1>
        </div>

        {/* Overlapping flip cards */}
        <div className="
          hidden
          sm:flex
          sm:absolute sm:inset-x-0 sm:bottom-[-40px]
          sm:pb-12 sm:px-8
          gap-4 justify-center items-end z-50
        ">
          {/* Card 1 */}
          <div className="group perspective w-80 h-40">
            <div className="
              relative w-full h-full
              transition-transform duration-500
              transform-style preserve-3d
              group-hover:rotate-y-180
            ">
              <div className="
                absolute inset-0 bg-[#023E8A]/95 backdrop-blur-md rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                backface-hidden
              ">
                <p className="text-white font-bold mb-2 text-xl font-poppins">Compassionate Care</p>
                <p className="text-white/80 text-base font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white absolute inset-0 text-[#023E8A]/95 font-semibold rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                rotate-y-180 backface-hidden">
                  <img src={tpulse} alt="Star" className="mb-3 w-10" />
                  <p className="font-semibold mb-1 font-poppins text-2xl">Compassionate Care</p>
                  <p className="text-sm font-poppins">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group perspective w-80 h-40">
            <div className="
              relative w-full h-full
              transition-transform duration-500
              transform-style preserve-3d
              group-hover:rotate-y-180
            ">
              <div className="
                absolute inset-0 bg-[#023E8A]/95 backdrop-blur-md rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                backface-hidden
              ">
                <p className="text-white font-bold mb-2 text-xl font-poppins">Expert Team</p>
                <p className="text-white/80 text-base font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white absolute inset-0 text-[#023E8A]/95 font-semibold rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                rotate-y-180 backface-hidden">
                  <img src={heart} alt="Heart" className="mb-3 w-10" />
                  <p className="font-semibold mb-1 text-2xl font-poppins">Patient Safety</p>
                  <p className="text-sm font-poppins">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked page-curl / bottom divider */}
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-40">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 w-full h-full"
          >
            <path
              fill="#ffffff"
              d="M0,100 C360,20 1080,180 1440,80 L1440,200 L0,200 Z"
            />
          </svg>
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 w-full h-full opacity-60"
          >
            <path
              fill="#ffffff"
              d="M0,120 C400,40 1000,160 1440,100 L1440,200 L0,200 Z"
            />
          </svg>
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 w-full h-full opacity-40"
          >
            <path
              fill="#ffffff"
              d="M0,140 C300,60 1100,140 1440,120 L1440,200 L0,200 Z"
            />
          </svg>
        </div>

      </section>

      <style>{`
        .perspective { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style { transform-style: preserve-3d; }
      `}</style>
    </>
  );
};

export default Hero;
