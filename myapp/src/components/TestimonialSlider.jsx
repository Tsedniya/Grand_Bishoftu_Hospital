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

const TestimonialCard = ({ rating, title, review, name, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 p-8 transition-all duration-500"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}
        />
      ))}
    </div>

    {/* Review */}
    <p className="text-[15.5px] leading-relaxed text-gray-700 mb-8 line-clamp-5 group-hover:line-clamp-none transition-all">
      "{review}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#023E8A] to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-inner">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">Patient</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSection = () => {
  return (
    <div className="bg-white py-20 md:py-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#023E8A] tracking-tighter">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from people who experienced our care
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              {...testimonial}
              index={idx}
            />
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">★</span> Trusted by hundreds
            </div>
            <div className="h-px w-8 bg-gray-300" />
            <div>4.9 Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;