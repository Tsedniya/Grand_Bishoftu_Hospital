import React from "react";
import CountUp from "../components/CountUp";
import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import middle from "../assets/middle.jpg";

const TitleAbout = () => {

  const imgStyle ="rounded-2xl object-cover w-full h-full transition-transform duration-300 hover:scale-110";

  return (
    <div className="mt-10 bg-white py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Title */}
      <div className="flex flex-col items-center">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-16">
          About
        </p>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-3xl">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment, personalized
          care, and a patient-first approach.
        </p>
      </div>

      {/* Main Section */}
      <div className="my-20 flex flex-col md:flex-row gap-10 items-start">

        {/* Left: Image Group */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">

          {/* Big image */}
          <div className="h-[320px] overflow-hidden">
            <img src={hospital} alt="Hospital" className={imgStyle} />
          </div>

          {/* Container for 2 small images */}
          <div className="flex gap-4 h-[180px]">
            <div className="flex-1 overflow-hidden">
              <img src={doctor} alt="Doctor" className={imgStyle} />
            </div>
            <div className="flex-1 overflow-hidden">
              <img src={middle} alt="Inside" className={imgStyle} />
            </div>
          </div>

        </div>

        {/* Right: Text + Stats Card */}
        <div className="w-full md:w-5/12 flex flex-col justify-between gap-6">

          {/* Top Text */}
          <div className="text-justify text-base">
            <p>
              At Grand Bishoftu Hospital, we are committed to providing exceptional
              healthcare with compassion and expertise. Our experienced medical
              specialists work tirelessly to ensure every patient's well-being
              through advanced treatments and personalized care. Providing trusted
              healthcare services with compassion and excellence. Our experienced
              medical specialists are committed to ensuring the well-being of every
              patient through advanced treatment, personalized care, and a
              patient-first approach.
            </p>

            <p className="mt-5">
              We strive to create a safe and welcoming environment where health,
              comfort, and trust come first. Our mission is to deliver trusted
              healthcare services with excellence and compassion.
            </p>
          </div>

          {/* Stats Card aligned with bottom images */}
          <div className="bg-[#023E8A] rounded-2xl shadow-lg p-8 w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mt-auto h-[180px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-center w-full">

              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={25} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-gray-200">
                  Years of Experience
                </p>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={50000} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-gray-200">
                  Patients Treated
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TitleAbout;
