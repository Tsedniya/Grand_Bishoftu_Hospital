import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const Mission = () => {
  const missionValues = [
    {
      title: "Our Mission",
      desc: "To deliver high-quality, compassionate, and accessible healthcare for all members of our community.",
    },
    {
      title: "Our Vision",
      desc: "To be the leading healthcare provider recognized for excellence, innovation, and patient trust.",
    },
    {
      title: "Our Values",
      desc: "Integrity, Compassion, Professionalism, and Patient-Centered Care guide everything we do.",
    },
  ];

  return (
    <div className="bg-white lg:min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-10 pt-28">

      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-poppins text-[#023E8A]">
          About Grand Bishoftu Hospital
        </h1>
        <p className="mt-4 text-base sm:text-xl font-opensans text-gray-700">
          Providing compassionate care with advanced medical expertise.
        </p>
      </motion.div>

      {/* Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {missionValues.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#023E8A] text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
            {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">

        <motion.div
            className="bg-sky-500 rounded-2xl shadow-2xl p-6 text-center w-full sm:w-[360px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="text-3xl md:text-4xl font-bold text-white">
            <CountUp end={20} suffix="+" />
            </div>
            <p className="mt-2 font-poppins text-base text-white">
            Years of Experience
            </p>
        </motion.div>

        <motion.div
            className="bg-sky-500 rounded-2xl shadow-2xl p-6 text-center w-full sm:w-[360px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="text-3xl md:text-4xl font-bold text-white">
            <CountUp end={17500} suffix="+" />
            </div>
            <p className="mt-2 font-poppins text-base text-white">
            Patients Treated
            </p>
        </motion.div>

        </div>

    </div>
  );
};

export default Mission;