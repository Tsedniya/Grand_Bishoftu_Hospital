import React from 'react'
import opration from '../assets/opration.jpg'
import star from '../assets/star.svg'
import heart from '../assets/heart.svg'

const Homeone = () => {
  return (
   <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-8">

     
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
            <p className='font-opensans'>Years of experience</p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 sm:text-right flex-col mt-8">
          < div >
              <h3 className="text-3xl text-left  font-poppins leading-tight ">
                Committed to Exceptional Patient Care
              </h3>

                <p className='mt-4 font-opensans text-justify '>Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment and personalized care.
                </p>
                <p  className='mt-4 font-opensans text-justify'>
                  At Grand Bishoftu Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our experienced medical specialists work tirelessly to ensure every patient's well-being through advanced treatments and personalized care.
                </p>
          </div>
      

        <div className='sm:flex flex-row gap-8 text-center mt-4 '>

          <div className='bg-white border w-80 h-40 border-white  text-left transition-transform duration-300 hover:scale-105 pt-4 pb-2 shadow-md '>
                <img src= {star} className='px-5 mb-4 w-18'/>
                <p className='px-5 mb-2'>Compassionate Care</p>
                <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className='bg-white border flex-row text-left items-center w-80 h-40 justify-center border-white pt-4 pb-2 transition-transform duration-300 hover:scale-105 shadow-md '>
                <img src= {heart} className='px-5 mb-4 w-19'/>
                <p className='px-5'>Compassionate Care</p>
                <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
        </div>

        </div>
      

    </div>
  ) 
}

export default Homeone;
