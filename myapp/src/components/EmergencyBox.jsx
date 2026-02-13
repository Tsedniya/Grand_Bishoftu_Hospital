import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Clock } from "lucide-react";

const cardStyle = `
  w-full
  bg-gradient-to-br from-[#023E8A] to-[#0077B6]
  text-white
  rounded-3xl
  shadow-2xl
  p-8
  flex flex-col
  gap-4
  hover:scale-105 transition-all duration-300
`;

const ClinicInfoCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-13">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Emergency Services */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={cardStyle}
        >
          <div className="bg-white/20 w-fit p-3 rounded-full">
            <PhoneCall size={28} />
          </div>

          <h3 className="text-2xl font-semibold">
            Emergency Services
          </h3>

          <p className="text-white/90 text-sm">
            We provide 24/7 emergency medical care with expert doctors
            and advanced equipment to ensure immediate treatment.
          </p>

          <div className="text-xl font-bold mt-2">
            Call: +251-977434445
          </div>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cardStyle}
        >
          <div className="bg-white/20 w-fit p-3 rounded-full">
            <Clock size={28} />
          </div>

          <h3 className="text-2xl font-semibold">
            Opening Hours
          </h3>

          <p className="text-white/90 text-sm">
            Visit us during our working hours for consultations,
            treatments, and healthcare services.
          </p>

          <div className="space-y-2 mt-2 text-sm">

            <div className="flex justify-between border-b border-white/20 pb-1">
              <span>Mon – Wed</span>
              <span>10AM – 4PM</span>
            </div>

            <div className="flex justify-between border-b border-white/20 pb-1">
              <span>Thu – Fri</span>
              <span>9AM – 6PM</span>
            </div>

            <div className="flex justify-between">
              <span>Sat – Sun</span>
              <span>Closed</span>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ClinicInfoCards;
