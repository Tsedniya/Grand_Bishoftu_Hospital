import React from "react";
import { motion } from "framer-motion";
import { Users, UserRound, Building2, FlaskConical, Clock, Heart } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-10 h-10 text-[#023E8A]" />,
    number: "15,000+",
    label: "Patients Treated",
    suffix: "",
  },
  {
    icon: <UserRound className="w-10 h-10 text-[#023E8A]" />,
    number: "30+",
    label: "Expert Doctors",
    suffix: "",
  },
  {
    icon: <Building2 className="w-10 h-10 text-[#023E8A]" />,
    number: "15",
    label: "Departments",
    suffix: "",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#023E8A]" />,
    number: "98",
    label: "Patient Satisfaction",
    suffix: "%",
  },
];

const HospitalStats = () => {
  return (
    <section className="py-16 bg-gray-100 mb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 place-items-center">
            {stats.map((stat, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center text-center group w-full max-w-[220px]"
                >
                <div className="mb-5 p-4 bg-[#023E8A]/5 rounded-2xl group-hover:bg-[#023E8A]/10 transition-colors">
                    {stat.icon}
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold text-[#023E8A] tracking-tighter">
                    {stat.number}
                    <span className="text-3xl">{stat.suffix}</span>
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                    {stat.label}
                </p>
                </motion.div>
            ))}
            </div>
      </div>
    </section>
  );
};

export default HospitalStats;