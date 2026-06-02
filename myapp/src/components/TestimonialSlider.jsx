import React, { useEffect, useState } from "react";
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
      "A well-equipped hospital with professional staff and compassionate service, dedicated to providing quality healthcare and ensuring every patient feels safe, respected, and cared for.",
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

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const TestimonialCard = ({ rating, title, review, name, index, isDesktop }) => (
  <motion.div
    variants={isDesktop ? slideUp : {}}
    initial={isDesktop ? "hidden" : false}
    whileInView={isDesktop ? "visible" : false}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-[#5dc8c8]/20 p-8 transition-all duration-500"
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
    <p className="text-[15.5px] leading-relaxed text-[#6a7c8a] mb-8 line-clamp-5 group-hover:line-clamp-none transition-all">
      "{review}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#5dc8c8] to-[#0b6e6e] flex items-center justify-center text-white font-semibold text-lg shadow-inner">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-[#0d1f2d]">{name}</p>
        <p className="text-sm text-[#6a7c8a]">Patient</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSection = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f8fafa] py-14 md:py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={isDesktop ? slideUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >

          <motion.h2
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#0d1f2d] leading-tight md:leading-snug"
          >
            What Our Patients Say
          </motion.h2>

          <motion.p
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-[#0b6e6e] text-sm md:text-base tracking-[2px] font-medium max-w-2xl mx-auto"
          >
            Real stories from people who experienced our care
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              {...testimonial}
              index={idx}
              isDesktop={isDesktop}
            />
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-12 flex justify-center">
          <motion.div
            variants={isDesktop ? slideUp : {}}
            initial={isDesktop ? "hidden" : false}
            whileInView={isDesktop ? "visible" : false}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-sm text-[#6a7c8a] text-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl text-[#5dc8c8]">★</span>
              <span>Trusted by hundreds</span>
            </div>

            <div className="hidden sm:block h-px w-8 bg-[#5dc8c8]/30" />

            <div className="text-[#0b6e6e] font-medium">4.9 Average Rating</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;