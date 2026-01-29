import React, { useEffect, useState } from "react";
import home from "../assets/home.jpg";
import bone from "../assets/bone.svg";
import brain from "../assets/brain.svg";
import testtube from "../assets/testtube.svg";
import FlipCard from "./FlipCard";

const HeroSecond = () => {
  const lines = ["Health is a treasure", "We care together"];
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedLines, setTypedLines] = useState(["", ""]);

  useEffect(() => {
    let timeout;

    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
          setTypedLines((prev) => {
            const updated = [...prev];
            updated[lineIndex] += lines[lineIndex][charIndex];
            return updated;
          });
          setCharIndex(charIndex + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 400);
      }
    } else {
      timeout = setTimeout(() => {
        setTypedLines(["", ""]);
        setLineIndex(0);
        setCharIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <section className="relative w-full overflow-visible">
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[100vh] min-h-[420px] pb-[220px]">

        {/* Background image */}
        <img
          src={home}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(2,62,138,0.95) 0%,
                rgba(2,62,138,0.85) 25%,
                rgba(2,62,138,0.55) 45%,
                rgba(2,62,138,0.25) 65%,
                rgba(255,255,255,0.25) 85%,
                rgba(255,255,255,0.35) 100%
              )
            `,
          }}
        />

        {/* Hero text */}
        <div className="absolute inset-0 z-40 flex items-center justify-center px-6 md:px-16 lg:px-24 text-center">
          <h1 className="font-bold text-white leading-tight drop-shadow-xl">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl min-h-[1.2em]">
              {typedLines[0]}
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl min-h-[1.2em]">
              {typedLines[1]}
            </span>
          </h1>
        </div>

        {/* Flip cards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[120px] z-50 flex">
          <FlipCard
            frontTitle="Our Care"
            frontText="We put patients first"
            backTitle="Our Promise"
            backText="Quality healthcare with compassion"
            frontImage={bone} 
            bg="bg-[#023E8A]"
          />

          <FlipCard
            frontTitle="Our Doctors"
            frontText="Trusted professionals"
            backTitle="Expertise"
            backText="Years of medical experience"
            frontImage={brain} 
            bg="bg-sky-400"
          />

          <FlipCard
            frontTitle="Our Mission"
            frontText="Health for everyone"
            backTitle="Commitment"
            backText="Accessible and affordable care"
            frontImage={testtube} 
            bg="bg-[#023E8A]"
          />
        </div>
      </div>

      {/* White curved divider */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] z-40 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C480,180 960,180 1440,0 L1440,200 L0,200 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSecond;
