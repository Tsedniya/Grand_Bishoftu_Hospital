import React from 'react'
import opration from '../assets/opration.jpg'
import star from '../assets/star.svg'
import heart from '../assets/heart.svg'

const Homeone = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-sky-100 items-center justify-between pt-7 pb-15 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-6">


      {/* Image */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center py-6 sm:py-8 md:py-10 my-4 md:my-6">
        <img
          className="rounded-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-xl object-cover relative z-0"
          src={opration}
          alt="Operation"
        />
        <div className="absolute bottom-[-20px] right-10 h-28 w-40 flex items-center justify-center rounded-2xl text-sm bg-sky-400 text-white z-40">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-4xl ">25+</p>
            <p className="font-opensans text-center">Years of experience</p>
          </div>
        </div>
      </div>

      {/* Text + Cards */}
      <div className="w-full lg:w-1/2 flex flex-col md:mt-6 lg:mt-0">

        {/* Text */}
        <div>
          <h3 className="text-3xl text-left font-poppins  leading-tight">
            Committed to Exceptional Patient Care
          </h3>
          <p className="mt-4 font-opensans text-justify">
            Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment and personalized care.
          </p>
          <p className="mt-4 font-opensans text-justify">
            At Grand Bishoftu Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our experienced medical specialists work tirelessly to ensure every patient's well-being through advanced treatments and personalized care.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 text-center my-6 justify-center">

          {/* Card 1 */}
          <div className="bg-white w-full md:w-80 h-40 rounded-2xl text-left transition-transform duration-300 hover:scale-105 pt-4 pb-2 shadow-md">
            <img src={star} className="px-5 mb-4 w-18"/>
            <p className="px-5 mb-2 font-semibold">Compassionate Care</p>
            <p className="px-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white  w-full md:w-80 h-40 rounded-2xl flex-row text-left items-center justify-center pt-4 pb-2 transition-transform duration-300 hover:scale-105 shadow-md">
            <img src={heart} className="px-5 mb-4 w-19"/>
            <p className="px-5 font-semibold">Patient Safety</p>
            <p className="px-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Homeone
