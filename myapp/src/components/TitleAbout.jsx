import React from "react";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import middle from "../assets/middle.jpg";

const TitleAbout = () => {
  const imgStyle =
    "rounded-2xl object-cover w-full h-full transition-transform duration-300 hover:scale-120";

  return (
    <div className="mt-10 bg-white py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Title */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-16">
          About
        </p>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-3xl">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment, personalized
          care, and a patient-first approach.
        </p>
      </motion.div>

      {/* Main Section */}
      <div className="my-20 flex flex-col md:flex-row gap-10 items-start">

        {/* Left: Large Image + 2 small images */}
        <motion.div
          className="w-full md:w-7/12 flex flex-col gap-4"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Large hospital image */}
          <div className="overflow-hidden h-[320px] md:h-auto">
            <img src={hospital} alt="Hospital" className={imgStyle} />
          </div>

          {/* 2 small images below the big image */}
          <div className="flex gap-4 h-[180px]">
            <motion.div
              className="flex-1 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={doctor} alt="Doctor" className={imgStyle} />
            </motion.div>

            <motion.div
              className="flex-1 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src={middle} alt="Inside" className={imgStyle} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text Column + Stats Card below text */}
        <motion.div
          className="w-full md:w-5/12 flex flex-col justify-between gap-6 h-full"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Text at the top */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
              Exceptional Patient Care
            </h3>
            <p className="text-lg mt-4 md:mt-6">
              At Grand Bishoftu Hospital, we are committed to providing exceptional
              healthcare with compassion and expertise. Our experienced medical
              specialists work tirelessly to ensure every patient's well-being
              through advanced treatments and personalized care. Providing trusted
              healthcare services with compassion and excellence. Our experienced
              medical specialists are committed to ensuring the well-being of every
              patient through advanced treatment, personalized care, and a
              patient-first approach.
            </p>
          </div>

          {/* Stats Card below text, same height as 2 small images */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 flex items-center justify-center h-[180px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-center w-full">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#023E8A]">
                  <CountUp end={25} suffix="+" />
                </div>
                <p className="mt-2 text-sm">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#023E8A]">
                  <CountUp end={50000} suffix="+" />
                </div>
                <p className="mt-2 text-sm">Patients Treated</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default TitleAbout;
