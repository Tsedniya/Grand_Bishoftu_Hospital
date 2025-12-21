import React from "react";
import home from "../assets/home.jpg";
import star from "../assets/star.svg";
import heart from "../assets/heart.svg";


const Hero = () => {
  return (
    <>
      <section className="bg-white mt-26 relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] min-h-[350px] overflow-hidden">

        {/* Hero background image + clip-path curve */}
        <div className="hero-clip absolute inset-0">
          <img
            src={home}
            alt="Hospital"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 75%" }}
          />
        </div>

        {/* Gradient overlay - also clipped to the curve */}
        <div
          className="hero-clip absolute inset-0"
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
              {/* Front */}
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
              {/* Back */}
              <div className="bg-white  absolute inset-0  text-black font-semibold  rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                rotate-y-180 backface-hidden">
                    <img src={star} alt="Star" className="mb-3 w-10" />
                    <p className="font-semibold mb-1 font-poppins">Compassionate Care</p>
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
              {/* Front */}
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
              {/* Back */}
              <div className="bg-white  absolute inset-0 text-black font-semibold  rounded-xl shadow-2xl
                flex flex-col justify-center p-6 text-left
                rotate-y-180 backface-hidden">
                    <img src={heart} alt="Heart" className="mb-3 w-10" />
                    <p className="font-semibold mb-1 font-poppins">Patient Safety</p>
                    <p className="text-sm font-poppins">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>
            </div>
          </div>
        </div>

        {/* White wavy divider */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-30">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
            style={{ filter: "drop-shadow(0 -12px 24px rgba(0,0,0,0.35))" }}
          >
            <path
              fill="#ffffff"
              d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Tailwind 3D flip utilities */}
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
