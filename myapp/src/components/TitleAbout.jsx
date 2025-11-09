import React from 'react'
import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import inside from "../assets/inside.jpg";

const About = () => {
  return (
    <div className="pt-20">

      {/* Header */}
      <div className='flex flex-col items-center px-4 md:px-16'>
        <p className='text-center font-poppins text-3xl md:text-6xl text-sky-400 mt-8 md:mt-16'>About</p>
        <p className="text-center text-gray-700 mt-4 md:mt-6 mx-0 md:mx-16 mb-4 ">
          Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
        </p>
      </div>

      <hr className="border-gray-200 border-t-2 mt-8" />

              {/* Main Section */}
      <div className='my-15 flex flex-col md:flex-row gap-10 items-center md:items-start'>

        {/* Left Column — Hospital + Doctor + Inside */}
        <div className='flex flex-col items-center gap-6 md:max-w-[450px] w-full'>
          {/* Hospital Image */}
          <img className='w-full rounded-2xl' src={hospital} alt='Hospital'/>

          {/* Doctor & Inside Images */}
          <div className='mt-6 flex gap-6 justify-center flex-wrap'>
            <img className="border border-gray-500 rounded-2xl max-w-[200px]  h-[230px] object-cover transition-transform duration-300 hover:scale-105" src={doctor} alt='Doctor'/>
            <img className="border border-gray-500 rounded-2xl max-w-[200px] h-[230px] object-cover transition-transform duration-300 hover:scale-105" src={inside} alt='Inside'/>
          </div>
        </div>

      {/* Right Column — Main Text + New Text Below */}
      <div className='flex-1 flex flex-col justify-center text-gray-600 text-justify'>

        {/* Main About Text */}
        <div className='flex flex-col gap-6'>
          <p>
            At Grand Bishoftu Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our experienced medical specialists work tirelessly to ensure the well-being of every patient, offering advanced treatments, personalized care, and a patient-first approach.
          </p>
          <p className='mt-5'>
            We strive to create a safe and welcoming environment where health, comfort, and trust come first. Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
          </p>
        </div>

        {/* New Text Below */}
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-sky-500 mb-3'>Our Commitment</h3>
          <p>
            Beyond medical excellence, we believe in building lasting relationships with our patients.
            Every visit is guided by compassion, respect, and understanding, ensuring that you feel supported every step of the way.
          </p>
        </div>

      </div>

    </div>



    </div>
  );
}

export default About;
