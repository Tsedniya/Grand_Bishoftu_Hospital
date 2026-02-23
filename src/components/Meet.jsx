import React, { useEffect, useState } from "react";
import photo24 from "../assets/new/photo24.jpg";
import photo30 from "../assets/new/photo30.jpg";
import photo31 from "../assets/new/photo31.jpg";
import photo26 from "../assets/new/photo26.jpg";
import photo27 from "../assets/new/photo27.jpg";
import photo28 from "../assets/new/photo28.jpg";
import photo29 from "../assets/new/photo29.jpg";
import { Link } from 'react-router-dom';

const Meet = () => {
  const doctors = [
    { img: photo24, name: "Dr. Tatek Belay", role: "Medical Director & General Surgeon" },
    { img: photo26, name: "Dr. Shibiru Dula", role: "Senior Obstetrician & Gynecologist" },
    { img: photo27, name: "Dr. Segni Bekele", role: " CEO, General & Laparascopic Surgeon" },
    { img: photo28, name: "Dr. Dejene Degu", role: "Senior Pediatrician" },
    { img: photo29, name: "Dr. Yeshi Teshome", role: "Senior Ophthalmologist" },
    { img: photo30, name: "Dr. Tsion Mekasha", role: "V.Medical Director & General Practitioner" },
    { img: photo31, name: "Dr. Habib Ebrahim", role: "Pathologist" },
  ];

  // duplicate for infinite loop
  const sliderDoctors = [...doctors, ...doctors];

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);

  // detect screen size → responsive cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // smooth reset
  useEffect(() => {
    if (current === doctors.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700);

      setTimeout(() => setTransition(true), 750);
    }
  }, [current, doctors.length]);

  // dynamic movement %
  const movePercent = 100 / visibleCards;

  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] -mt-18 sm:-mt-25 mb-3 ">

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
          Meet Our Doctors
        </h3>

        <p className="mt-3 sm:mt-4 text-base sm:text-xl font-opensans">
          Our experienced medical professionals provide compassionate care.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className={`flex ${transition ? "transition-transform duration-700" : ""}`}
          style={{
            transform: `translateX(-${current * movePercent}%)`,
          }}
        >
          {sliderDoctors.map((doctor, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 sm:px-4 flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">

                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />

                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {doctor.name}
                  </h3>

                  <p className="text-base">{doctor.role}</p>
                  <Link to='/services'>
                    <button className="mt-3 sm:mt-4 px-5 py-2 bg-[#023E8A] font-opensans text-white rounded-3xl text-sm sm:text-base hover:opacity-90">
                      Learn more
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Meet;
