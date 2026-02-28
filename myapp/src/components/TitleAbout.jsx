import React from "react";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import photo5 from "../assets/new/photo5.jpg";
import photo6 from "../assets/new/photo6.jpg";
import photo13 from "../assets/new/photo13.jpg";

const TitleAbout = () => {
    const imgStyle = "rounded-2xl object-cover w-full h-full transition-transform duration-300 hover:scale-110";

  return (
    <div className="mt-10 bg-white py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Title */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-10 ">
            About
        </p>
      </motion.div>

      {/* MAIN GRID */}
      <div className="mt-6 md:my-17 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="grid grid-rows-[1fr_180px] gap-4">

          {/* Big image (row 1) */}
          <motion.div
            className="overflow-hidden h-[320px] sm:h-[360px] md:h-[400px] lg:h-[400px]"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={photo5} alt="Hospital" className={imgStyle} />
          </motion.div>

          {/* Small images (row 2) */}
          <div className="flex gap-4 h-[180px] sm:h-[200px] md:h-[220px]">
            <motion.div
              className="flex-1 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={photo6} alt="Doctor" className={imgStyle} />
            </motion.div>

            <motion.div
              className="flex-1 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={photo13} alt="Inside" className={imgStyle} />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-rows-[1fr_180px] gap-4">

          {/* Text (row 1) */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >

            <p className= "font-opensans mb-6 sm:text-base lg:text-lg leading-relaxed text-left lg:text-justify break-words hyphens-auto tracking-normal lg:tracking-wide">
              We deliver compassionate and trusted healthcare.
              Our cardiology and neurology teams provide advanced heart and brain care.
              Orthopedics specialists restore mobility with modern treatments and surgeries.
              Pediatrics ensures comprehensive, child-friendly medical care for all ages.
              Oncology offers cutting-edge cancer treatments with expert guidance.
              Pulmonology and infectious disease departments protect lung and infection health.
            
            </p>

            <p className= "font-opensans mb-3 sm:text-base lg:text-lg leading-relaxed text-left lg:text-justify break-words hyphens-auto tracking-normal lg:tracking-wide">
              We offer minimally invasive laparoscopic surgery for faster recovery and less pain.  
              Our urology services treat urinary and male reproductive conditions.  
              We also provide expert ophthalmology care for eye health.
            </p>
          </motion.div>

          {/* Stats card (row 2) */}
          <motion.div
            className="bg-sky-500 rounded-2xl shadow-2xl p-6 flex items-center justify-center h-[180px] sm:h-[200px] md:h-[220px] hover:shadow-xl transition"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center w-full">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={20} suffix="+" />
                </div>
                <p className="mt-2 font-poppins text-base text-white">Years of Experience</p>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={17500} suffix="+" />
                </div>
                <p className="mt-2 font-poppins text-base text-white">Patients Treated</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default TitleAbout;
