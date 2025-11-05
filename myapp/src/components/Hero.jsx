import React from 'react'
import hospital from "../assets/hospital.jpg";


const Hero = () => {
  return (
         <section className="relative w-full h-screen pt-16">
  <img
    src={hospital}
    alt="Hospital"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-10">

    <button className="mt-3 mb-4 px-5 py-1 bg-sky-400 text-white rounded-full transition">
          Leading Health Specialists
    </button>
    
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Grand Bishoftu Hospital
    </h1>
    <p className="mt-6 text-lg text-white max-w-2xl text-justify">
      Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
    </p>
    <div className='mt-3 flex space-x-4'>
      <button className="font-bold mt-6 px-6 py-3 bg-sky-400 text-white rounded-full hover:bg-sky-700 transition">
        Learn More
      </button>
      <button className="border border-sky-400 font-bold mt-6 px-6 py-3 bg-transparent text-white rounded-full hover:bg-sky-400 transition">Explore Services</button>
    </div>
  </div>
</section>

        )
}

export default Hero