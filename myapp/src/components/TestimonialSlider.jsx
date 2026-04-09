import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    title: "Excellent Specialists",
    review:
      "I suffered from heat and exercise-induced hives for six months without relief. At this hospital, the condition was quickly diagnosed and treated effectively. The improvement was remarkable.",
    name: "Ararsa Tesema",
  },
  {
    rating: 5,
    title: "Highly Recommend",
    review:
      "Very good service and care. The staff were attentive, and I received consistent support throughout my visit.",
    name: "Dawo Bito",
  },
  {
    rating: 4,
    title: "Great Experience",
    review:
      "A well-equipped hospital with professional staff and compassionate service.",
    name: "Abiy Tadele",
  },
  {
    rating: 5,
    title: "Professional Staff",
    review:
      "An excellent hospital with knowledgeable specialists and a strong commitment to patient care.",
    name: "Bethelhem Tassew",
  },
];

/* ---------- CARD ---------- */
const TestimonialCard = ({ rating, title, review, name }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
    
    {/* Top section */}
    <div className="flex items-center gap-4 mb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-[#023E8A] text-white flex items-center justify-center font-semibold">
        {name.charAt(0)}
      </div>

      <div>
        <p className="font-semibold text-gray-800">{name}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-base font-semibold mb-2">
      {title}
    </h3>

    {/* Review */}
    <p className="text-sm leading-relaxed">
      {review}
    </p>
  </div>
);

/* ---------- MAIN ---------- */
const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-poppins text-[#023E8A]">
          Patient Feedback
        </h2>
        <p className="mt-3 text-gray-600 font-opensans">
          What our patients say about their experience and care.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;