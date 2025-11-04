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

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      Grand Bishoftu Hospital
    </h1>
    <p className="mt-4 text-lg text-white max-w-xl">
      Providing trusted healthcare services with compassion and excellence.
    </p>
    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
      Learn More
    </button>
  </div>
</section>

        )
}

export default Hero