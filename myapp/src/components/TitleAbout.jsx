import React from 'react';
import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import inside from "../assets/inside.jpg";

const TitleAbout = ({ className = "" }) => {
  return (
    <div className='pt-20'>
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <p className="text-center font-poppins text-3xl md:text-6xl text-sky-400 mt-8 md:mt-16">
          About
        </p>
        <p className="text-center text-gray-700 mt-4 md:mt-6 max-w-3xl">
          Providing trusted healthcare services with compassion and excellence.
          Our experienced medical specialists are committed to ensuring the
          well-being of every patient through advanced treatment, personalized care,
          and a patient-first approach.
        </p>
      </div>

      <hr className="border-gray-200 border-t-2 mt-15" />

      {/* Main Section */}
      <div className="my-20 flex flex-col gap-16">

        {/* Row 1 — Hospital + About Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Image */}
          <div className="flex justify-center md:max-w-[450px] w-full">
            <img
              className="w-full rounded-2xl transition-transform duration-300 hover:scale-105"
              src={hospital}
              alt="Hospital"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-6 text-gray-600 text-justify">
            <p>
              At Grand Bishoftu Hospital, we are committed to providing exceptional
              healthcare with compassion and expertise. Our experienced medical
              specialists work tirelessly to ensure every patient's well-being through
              advanced treatments and personalized care.
            </p>
            <p className="mt-5">
              We strive to create a safe and welcoming environment where health,
              comfort, and trust come first. Our mission is to deliver trusted healthcare 
              services with excellence and compassion.
            </p>
          </div>
        </div>

        {/* Row 2 — Doctor & Inside Images + Stats */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          
          {/* Images */}
          <div className="flex justify-center gap-6 flex-wrap md:max-w-[450px] w-full">
            <img
              className="border border-gray-500 rounded-2xl max-w-[200px] h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              src={doctor}
              alt="Doctor"
            />
            <img
              className="border border-gray-500 rounded-2xl max-w-[200px] h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              src={inside}
              alt="Inside"
            />
          </div>

          {/* Stats */}
          <div className="flex-1 flex flex-col items-center justify-center gap-2 h-40 bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-gray-700 font-semibold">
            <p>25+</p>
            <p className="text-5xl font-bold">800</p>
            <p className="text-sm text-gray-500">Patients</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TitleAbout;
