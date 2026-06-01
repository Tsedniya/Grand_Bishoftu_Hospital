import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cancer from "../assets/cancer.jpg";
import photo_1 from "../assets/photo_1.jpg";
import home from "../assets/home.jpg";
import map from "../assets/map.svg";
import heartpulse from "../assets/heartpulse.svg";
import notebook from "../assets/notebook.svg";
import photo23 from "../assets/new/photo23.jpg";
import photo14 from "../assets/new/photo14.jpg";
import photo15 from "../assets/new/photo15.jpg";
import photo16 from "../assets/new/photo16.jpg";
import photo22 from "../assets/new/photo22.jpg";
import photo19 from "../assets/new/photo19.jpg";
import photo8 from "../assets/new/photo8.jpg";
import photo10 from "../assets/new/photo10.jpg";
import photo13 from "../assets/new/photo13.jpg";
import photo5 from "../assets/new/photo5.jpg";
import photo6 from "../assets/new/photo6.jpg";
import photo12 from "../assets/new/photo12.jpg";
import photo38 from "../assets/new/photo38.jpg";
import photo41 from "../assets/new/photo41.jpg";
import photo08 from "../assets/new/photo08.JPG";

const EmergencyBox = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const cards = [
    {
      title: "Emergency Care Unit",
      subtitle: "Immediate medical response for critical cases",
      icon: heartpulse,
      bgImages: [cancer, photo6, photo14, photo38],
    },
    {
      title: "Hospital Location Services",
      subtitle: "Find our facilities and departments easily",
      icon: map,
      bgImages: [photo15, photo13, home, photo12],
    },
    {
      title: "Patient Appointment Booking",
      subtitle: "Schedule consultations with specialists",
      icon: notebook,
      bgImages: [photo5, photo12, photo08, photo41],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((index, i) => (index + 1) % cards[i].bgImages.length)
      );
    }, 2000); // Faster image rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-5 mb-20 px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <div className="flex flex-col items-center mt-32 mb-10">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] tracking-tighter">
          Contact Us
        </p>

        <p className="text-[#023E8A]/70 text-sm md:text-base mt-2 tracking-[2px] font-medium">
          Reach our medical team anytime
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="
              group relative h-[460px] rounded-3xl overflow-hidden
              shadow-xl border border-white/10
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
            "
            animate={{
              backgroundPosition: ["50% 50%", "52% 50%", "50% 50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `linear-gradient(rgba(2,62,138,0.65), rgba(2,62,138,0.82)), url(${
                card.bgImages[currentImages[index]]
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60" />

            {/* Shine Effect */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-white/20 to-transparent
                opacity-0 group-hover:opacity-30
                transition-opacity duration-400
              "
            />

            <div className="relative h-full flex flex-col items-center justify-center text-center px-8 z-10">
              <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3 className="text-3xl font-semibold text-white tracking-tight mb-3">
                {card.title}
              </h3>

              <p className="text-sky-100/90 text-[15px] max-w-[220px] leading-relaxed">
                {card.subtitle}
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white/80 rounded-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EmergencyBox;