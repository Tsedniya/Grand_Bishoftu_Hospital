import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import patient from "../assets/patient.jpg";
import pulse from "../assets/pulse.svg";
import brain from "../assets/brain.svg";
import bone from "../assets/bone.svg";
import baby from "../assets/baby.svg";
import ambulance from "../assets/ambulance.svg";
import shield from "../assets/shield.svg";
import photo_1 from "../assets/photo_1.jpg";
import photo_2 from "../assets/photo_2.jpg";
import photo from "../assets/photo.jpg";
import men from "../assets/men.jpg";
import cancer from "../assets/cancer.jpg";
import users from "../assets/users.svg";
import stethoscope from "../assets/stethoscope.svg";
import bubbles from "../assets/bubbles.svg";
import syringe from "../assets/syringe.svg";
import microscope from "../assets/microscope.svg";
import testtube from "../assets/testtube.svg";
import camera from "../assets/camera.svg";
import eye from "../assets/eye.svg";
import pill from "../assets/pill.svg";
import x from "../assets/x.svg"
import photo20 from "../assets/new/photo20.jpg";
import photo8 from "../assets/new/photo8.jpg";
import photo21 from "../assets/new/photo21.jpg";
import photo9 from "../assets/new/photo9.jpg";
import photo23 from "../assets/new/photo23.jpg";
import photo25 from "../assets/new/photo25.jpg";
import photo32 from "../assets/new/photo32.jpg";
import photo34 from "../assets/new/photo34.jpg";
import photo33 from "../assets/new/photo33.jpg";
import photo36 from "../assets/new/photo36.jpg";
import photo35 from "../assets/new/photo35.jpg";
import photo15 from "../assets/new/photo15.jpg";
import photo5 from "../assets/new/photo5.jpg";
import photo13 from "../assets/new/photo13.jpg";
import photo65 from "../assets/new/photo65.jpg";
import photo66 from "../assets/new/photo66.jpg";
import photo67 from "../assets/new/photo67.jpg";
import photo70 from "../assets/new/photo70.jpg";
import photo69 from "../assets/new/photo69.jpg";
import photo71 from "../assets/new/photo71.jpg";
import photo68 from "../assets/new/photo68.jpg";
import briefcasemedical from "../assets/briefcasemedical.svg";
import searchcheck from "../assets/searchcheck.svg";
import venus from "../assets/venus.svg";
import shieldcheck from "../assets/shieldcheck.svg";

const Departements = () => {

    const departments = [
  {
    title: "Emergency Services",
    desc: "24/7 emergency medical care with rapid response teams, advanced life-saving equipment, and experienced physicians ready to handle critical and urgent conditions at any time.",
    img: men,
    icon: ambulance,
  },
  {
    title: "Internal Medicine",
    desc: "Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment of a wide range of diseases, with personalized care plans for a very long-term health management.",
    img: photo67,
    icon: stethoscope,
  },
  {
    title: "Surgery",
    desc: "Advanced surgical services covering a wide range of procedures, performed by skilled surgeons using modern techniques to ensure safe operations and optimal recovery.",
    img: photo13,
    icon:  shieldcheck,
  },
  {
    title: "Gynecology",
    desc: "Specialized care for women’s reproductive health, offering preventive screenings, diagnosis, and treatment of gynecological conditions in a supportive environment.",
    img: photo25,
    icon: venus,
  },
  {
    title: "Pediatrics",
    desc: "Dedicated healthcare for infants, children, and adolescents, providing comprehensive medical services in a safe and child-friendly setting.",
    img: photo_2,
    icon: baby,
  },
  {
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive surgical procedures using small incisions and advanced technology, allowing faster recovery, reduced pain, and shorter hospital stays.",
    img: photo21,
    icon: camera,
  },
  {
    title: "Ophthalmology",
    desc: "Complete eye care services including vision testing, diagnosis, and treatment of eye conditions, as well as advanced surgical procedures for improved vision.",
    img: photo5,
    icon: eye,
  },
  {
    title: "Orthopedic Surgery",
    desc: "Specialized care for bones, joints, and muscles, including trauma care, joint replacement, and rehabilitation to restore mobility and reduce pain.",
    img: photo35,
    icon: bone,
  },
  {
    title: "Urology",
    desc: "Diagnosis and treatment of urinary tract and male reproductive system conditions, including kidney stones, infections, and prostate disorders.",
    img: photo9,
    icon: briefcasemedical,
  },
  {
    title: "Neurology",
    desc: "Expert care for disorders of the brain, spinal cord, and nervous system, including stroke, epilepsy, and neurological conditions.",
    img: photo36,
    icon: brain,
  },
  {
    title: "Pathology",
    desc: "Advanced diagnostic services analyzing tissues and body fluids to accurately detect diseases and guide effective treatment decisions.",
    img: photo32,
    icon: microscope,
  },
  {
    title: "Plastic Surgery",
    desc: "Reconstructive and cosmetic procedures to restore function and improve appearance, including treatment for injuries, burns, and congenital conditions.",
    img: photo15,
    icon: syringe,
  },
  {
    title: "Psychiatry",
    desc: "Mental health services focused on diagnosis, treatment, and support for emotional, psychological, and behavioral conditions.",
    img: photo69,
    icon: brain,
  },
  {
    title: "Neurosurgery",
    desc: "Specialized surgical care for conditions affecting the brain, spine, and nervous system, using advanced techniques for precise and safe procedures.",
    img: photo70,
    icon: shield,
  },
  {
    title: "Physiotherapy",
    desc: "Rehabilitation services designed to restore movement, reduce pain, and improve physical function through personalized therapy programs.",
    img: photo68,
    icon: users,
  },
  {
    title: "CT Scan",
    desc: "Advanced imaging services providing detailed cross-sectional images to support accurate diagnosis and treatment planning.",
    img: photo71,
    icon:  searchcheck,
  },
  {
    title: "Laboratory",
    desc: "Comprehensive diagnostic testing with accurate and timely results to support effective medical decisions and patient care.",
    img: photo8,
    icon: testtube,
  },
  {
    title: "Pharmacy",
    desc: "Reliable medication services including prescription dispensing, patient counseling, and safe medication management.",
    img: photo33,
    icon: pill,
  },
  {
    title: "X-Ray",
    desc: "Fast and reliable imaging services for diagnosing fractures, infections, and other internal conditions using modern radiology equipment.",
    img: photo66,
    icon: x,
  },
  {
    title: "Ultrasound",
    desc: "Safe and non-invasive imaging used to examine internal organs, monitor pregnancies, and assist in accurate diagnosis.",
    img: photo65,
    icon:  baby,
  },
  {
    title: "Cardiology",
    desc: "Advanced heart care including diagnosis, treatment, and prevention of cardiovascular diseases using modern technology.",
    img: photo34,
    icon: pulse,
  },
];

  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile for initial cards
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? 4 : 6); // mobile shows 4 initially, desktop/tablet 6
  }, [isMobile]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + (isMobile ? 2 : 3));
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Responsive columns
  const getCols = () => {
    if (window.innerWidth >= 1024) return "lg:grid-cols-3"; // desktop
    if (window.innerWidth >= 768) return "md:grid-cols-2";  // tablet
    return "grid-cols-1"; // mobile
  };

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-4 sm:px-6">
      <div className="flex flex-col items-center mt-25 md:mt-20 mb-6 md:mb-15">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-16">
          Services
        </p>
      </div>

      <div className={`grid gap-6 ${getCols()}`}>
        {departments.slice(0, visibleCount).map((dept, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white rounded-2xl shadow-md w-full h-auto mb-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
          >
            <img
              src={dept.img}
              alt={dept.title}
              className="rounded-t-2xl w-full h-36 object-cover"
            />

            <div className="absolute -top-7 left-4 sm:left-10 rounded-full bg-[#023E8A] w-14 h-14 flex items-center justify-center overflow-hidden">
  <img
    src={dept.icon}
    alt={`${dept.title} icon`}
    className="w-8 h-8 object-contain"
  />
</div>

            <div className="px-4 sm:px-7 pb-6">
              <p className="mt-6 text-2xl font-bold text-[#023E8A]">{dept.title}</p>
              <p className="mt-2 text-justify">{dept.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < departments.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 rounded-lg bg-[#023E8A] text-white font-semibold hover:bg-[#012A5A] transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Departements;