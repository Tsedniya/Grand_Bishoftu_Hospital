import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    title: "Excellent Specialists",
    review:
      "I suffered from heat and exercise-induced hives for six months in America without relief. At this hospital, Dr. Endalkachew quickly diagnosed the issue and prescribed Montelukast for 10 days. The results were amazing",
    name: "Ararsa Tesema",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    review:
      "Very good service and care! I received good care and service throughout my visit.",
    name: "Dawo Bito",
  },
  {
    rating: 4,
    title: "Great Experience",
    review:
      "A well equipped hospital, with quality and compassionate service",
    name: "Abiy Tadele",
  },
  {
    rating: 5,
    title: "Professional Staff",
    review: "Marvellous hospital with intelligent specialists",
    name: "Bethelhem Tassew",
  },
];

/* ---------- CARD ---------- */
const TestimonialCard = ({ rating, title, review, name }) => (
  <div
    className="
      bg-white rounded-xl shadow-lg p-4 text-center flex-shrink-0 mx-2
      w-[260px] flex flex-col 
    "
  >
    {/* Avatar as initial */}
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#023E8A] text-white flex items-center justify-center mx-auto mb-3 text-lg sm:text-xl font-semibold">
      {name.charAt(0)}
    </div>

    {/* Rating */}
    <div className="flex justify-center text-yellow-400 text-lg sm:text-xl mb-2">
      {[...Array(rating)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>

    {/* Title */}
    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1">
      {title}
    </h3>

    {/* Name */}
    <p className=" text-xs sm:text-base font-bold mb-2">{name}</p>

    {/* Review */}
    <p className="text-center text-xs sm:text-base mb-3 break-words whitespace-normal">
      {review}
    </p>
  </div>
);

/* ---------- SLIDER ---------- */
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div className="py-10 bg-gray-100 mb-8 md:mb-12 md:-mt-6 -mt-10">
      {/* MOBILE — ONE CARD */}
      <div className="relative md:hidden px-6 flex justify-center items-center">
        <button
          onClick={prev}
          className="absolute left-0 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
        >
          ←
        </button>

        <TestimonialCard {...testimonials[index]} />

        <button
          onClick={next}
          className="absolute right-0 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
        >
          →
        </button>
      </div>

      {/* DESKTOP — AUTO SLIDER */}
      <div className="hidden md:block overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-25%", "-50%", "-75%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {testimonials.concat(testimonials).map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSlider;