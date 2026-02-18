import React from "react";
import { motion } from "framer-motion";
import men from "../assets/men.jpg";       // left card image
import inside from "../assets/inside.jpg"; // right card image
import map from "../assets/map.svg";
import heartpulse from "../assets/heartpulse.svg";
import notebook from "../assets/notebook.svg";
import logo from "../assets/logo.jpeg";

const EmergencyBox = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // content for each card
  const cards = [
    { title: "Emergency Services", icon: heartpulse, bgImage: men },
    { title: "Get Directions", icon: map, bgImage: logo },
    { title: "Book Appointment", icon: notebook, bgImage: inside },
  ];

  return (
    <div className="w-full mt-15 mb-25 px-4 sm:px-8 md:px-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 w-full gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative h-[420px] flex items-center justify-center text-white p-10 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(2,62,138,0.75), rgba(2,62,138,0.75)), url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Icon + Text */}
            <div className="flex items-center gap-4">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
              <h3 className="text-2xl md:text-3xl font-semibold">{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EmergencyBox;
