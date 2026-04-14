import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
const TestimonialCard = ({ rating, title, review, name, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition"
  >
    
    {/* Top section */}
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-[#023E8A] text-white flex items-center justify-center font-semibold">
        {name.charAt(0)}
      </div>

      <div>
        <p className="font-semibold text-gray-800">{name}</p>

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

    <h3 className="text-base font-semibold mb-2">{title}</h3>

    <p className="text-sm leading-relaxed">{review}</p>
  </motion.div>
);

/* ---------- MAIN ---------- */
const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-poppins text-[#023E8A]">
          Patient Feedback
        </h2>
        <p className="mt-3 text-gray-600 font-opensans">
          What our patients say about their experience and care.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-gray-700">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;