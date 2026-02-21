import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import men from "../assets/men.jpg";
import cancer from "../assets/cancer.jpg";
import photo_1 from "../assets/photo_1.jpg";
import photo_2 from "../assets/photo_2.jpg";
import machine from "../assets/machine.jpg";
import home from "../assets/home.jpg";
import map from "../assets/map.svg";
import heartpulse from "../assets/heartpulse.svg";
import notebook from "../assets/notebook.svg";
import photo23 from "../assets/new/photo23.jpg";
import photo14 from "../assets//new/photo14.jpg";
import photo15 from "../assets/new/photo15.jpg";
import photo16 from "../assets/new/photo16.jpg";
import photo22 from "../assets/new/photo22.jpg";
import photo19 from "../assets/new/photo19.jpg";
import photo8 from "../assets/new/photo8.jpg";
import photo10 from "../assets/new/photo10.jpg";
import photo13 from "../assets/new/photo13.jpg";

const EmergencyBox = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cards = [
    { title: "Emergency Services", icon: heartpulse, bgImages: [cancer, photo_1, photo14,photo16] },
    { title: "Get Directions", icon: map, bgImages: [photo15, photo13, home,photo23] },
    { title: "Book Appointment", icon: notebook, bgImages: [photo10, photo8, photo22,photo19,] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((index, i) => (index + 1) % cards[i].bgImages.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full -mt-2 mb-25 px-4 sm:px-8 md:px-16">

      {/* Heading on top */}
      <div className="flex flex-col items-center mt-2 md:mt-25 mb-6 md:mb-7">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-12 md:mt-13">
          Contact
        </p>
      </div>

      {/* Cards */}
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
              backgroundImage: `linear-gradient(rgba(2,62,138,0.75), rgba(2,62,138,0.75)), url(${card.bgImages[currentImages[index]]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center gap-4">
              <img src={card.icon} alt={card.title} className="w-12 h-12 text-center" />
              <h3 className="text-2xl md:text-3xl text-center font-semibold">{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EmergencyBox;
