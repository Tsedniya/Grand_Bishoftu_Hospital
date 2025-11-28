import React from 'react'
import opration from '../assets/opration.jpg'

const Homeone = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-8">
  
      {/* Image + overlay */}
      <div className="relative w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 my-20 ">
        <img
          className="rounded-2xl w-full max-w-xl object-cover relative z-0"
          src={opration}
          alt=""
        />
        <div
          className="absolute bottom-[-50px] right-10 
                     h-28 w-40 
                     flex items-center justify-center
                     rounded-2xl text-sm bg-sky-400 text-white z-50"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-4xl">25+</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>

      {/* Text heading */}
      <div className="w-full sm:w-1/2 text-left sm:text-right mt-10">
        <h1 className="text-3xl font-bold">
          Committed to Exceptional Patient Care
        </h1>
        <p className='text-justify'>Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment and personalized care.
          </p>
      </div>

    </div>
  ) 
}

export default Homeone;
