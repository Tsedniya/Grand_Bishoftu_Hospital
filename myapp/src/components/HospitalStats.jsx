import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, UserRound, Building2, Heart } from "lucide-react";

const stats = [
  { icon: <Users className="w-10 h-10 text-white" />, number: 17000, label: "Patients Treated", suffix: "+" },
  { icon: <UserRound className="w-10 h-10 text-white" />, number: 30, label: "Expert Doctors", suffix: "+" },
  { icon: <Building2 className="w-10 h-10 text-white" />, number: 15, label: "Departments", suffix: "" },
  { icon: <Heart className="w-10 h-10 text-white" />, number: 98, label: "Patient Satisfaction", suffix: "%" },
];

const Counter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(end * progress);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
      {count.toLocaleString()}
      <span className="text-3xl text-white/90">{suffix}</span>
    </span>
  );
};

const HospitalStats = () => {
  return (
    <section className="py-16 bg-[#0b6e6e]">
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
              {/* Icon Container */}
              <div className="mb-5 p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                {stat.icon}
              </div>

              {/* Animated Counter */}
              <Counter end={stat.number} suffix={stat.suffix} />

              {/* Label */}
              <p className="mt-3 text-white/70 font-medium text-lg">
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