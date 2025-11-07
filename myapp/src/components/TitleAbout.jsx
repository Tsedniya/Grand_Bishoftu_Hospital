import React from 'react'
import hospital from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg"
import inside from "../assets/inside.jpg"


const About = () => {
  return (
   <div className="pt-20">
      <div className='flex flex-col items-center px-4 md:px-16'>
        <p className='text-center font-poppins text-3xl md:text-6xl text-sky-400 mt-8 md:mt-16'>About</p>
        <p className="text-center text-gray-700 mt-4 md:mt-6 mx-0 md:mx-16 mb-4 ">
          Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
        </p>
      </div>
     <hr className="border-gray-200 border-t-2 mt-8" />



    <div className='my-15 flex flex-col md:flex-row gap-10 items-center md:items-start'>
      {/* Image */}
      <img className='w-full md:max-w-[450px] rounded-2xl' src={hospital} alt=''/>
      
      {/* Text */}
      <div className='flex-1 flex flex-col justify-center gap-6 text-gray-600 text-justify'>
        <p>
          At Grand Bishoftu Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our experienced medical specialists work tirelessly to ensure the well-being of every patient, offering advanced treatments, personalized care, and a patient-first approach.
        </p>
        <p className='mt-5'>
          We strive to create a safe and welcoming environment where health, comfort, and trust come first. Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.
        </p>
      </div>
      </div>


    <div className='my-15 flex flex-col md:flex-row gap-10 items-center md:items-start'>
       
        <div className='w-full flex md:max-w-[200px] ' >
          <img  className="border border-gray-500 rounded-2xl"src={doctor} alt=''/>
          <img className="ml-12 border border-gray-500 rounded-2xl" src={inside} alt=''/>
        </div>
     


    </div>

     





</div>


    
  )
}

export default About