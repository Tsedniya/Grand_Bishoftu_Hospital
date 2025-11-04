import React from 'react'
import hospital from "../assets/hospital.jpg";


const Hero = () => {
  return (
    <div>
        
       <section className="relative h-screen">
  {/* Background Image */}
  <img
    src={hospital}
    alt="Hospital Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Transparent Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
      Grand Bishoftu Hospital
    </h1>
    <p className="mt-4 text-lg text-white max-w-xl">
      Providing trusted healthcare services with compassion and excellence.
    </p>
  </div>
</section>


    </div>
        )
}

export default Hero