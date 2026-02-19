import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    title: "Excellent Eye Care",
    review:
      "The staff were very friendly and professional. I felt very well taken care of!",
    name: "John Doe",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    review: "Fantastic service and very knowledgeable doctors. I’m very satisfied!",
    name: "Sarah O'Brien",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    rating: 4,
    title: "Great Experience",
    review:
      "The clinic was clean and welcoming, and the staff made me feel at ease.",
    name: "Michael Smith",
    avatar: "https://i.pravatar.cc/80?img=56",
  },
  {
    rating: 5,
    title: "Professional Staff",
    review: "The doctors and nurses were very attentive. Highly recommended!",
    name: "Emma Watson",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
];

/* ---------- CARD ---------- */
const TestimonialCard = ({ rating, title, review, name, avatar }) => (
  <div
    className="
      bg-white rounded-xl shadow-lg p-4 text-center flex-shrink-0 mx-2

      /* MOBILE → smaller */
      w-full max-w-[260px] mx-auto

      /* DESKTOP + MD → YOUR ORIGINAL SIZE */
      md:w-auto md:max-w-none md:min-w-[260px]
      lg:min-w-[260px]
    "
  >
    <img
      src={avatar}
      alt={name}
      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 object-cover"
    />

    <div className="flex justify-center text-yellow-400 text-lg sm:text-xl mb-2">
      {[...Array(rating)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>

    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1">
      {title}
    </h3>

    <p className="text-gray-600 text-xs sm:text-sm mb-3">{review}</p>

    <p className="text-gray-900 text-sm font-medium">{name}</p>
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
    <div className="py-10 bg-gray-100">

      {/* ---------- MOBILE (ONE CARD + ARROWS) ---------- */}
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

      {/* ---------- DESKTOP + MD (ORIGINAL AUTO SLIDER) ---------- */}
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
