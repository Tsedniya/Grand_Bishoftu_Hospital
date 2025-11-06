import React from 'react'
import hospital from "../assets/hospital.jpg";


const About = () => {
  return (
    <div>
      <div className='flex-col'>
        <p className='text-center font-poppins mt-35 text-6xl text-sky-400'>About</p>
        <p className="text-center text-gray-700 mt-2 mx-65 mb-4">Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach.</p>
      </div>
      
      <div className='flex '>
      {/*left*/}
      <div className='flex-col ml-20 mt-14  '>
        <p className='text-gray-700 text-4xl font-bold'>Commited to Excellence in HealthCare</p>
        <div className='max-w-2xl '>
            <p className='mt-8 text-gray-700 text-justify leading-relaxed'>At Grand Bishoftu Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our experienced medical specialists work tirelessly to ensure the well-being of every patient, offering advanced treatments, personalized care, and a patient-first approach. </p>
            <p className='mt-8 text-gray-700 text-justify leading-relaxed'>We strive to create a safe and welcoming environment where health, comfort, and trust come first.Providing trusted healthcare services with compassion and excellence. Our experienced medical specialists are committed to ensuring the well-being of every patient through advanced treatment, personalized care, and a patient-first approach</p>
        </div>
        </div>
           
        {/*right*/}
        <div>
           <img className="ml-8 w-140 mr-14 mt-14 rounded-2xl" src={hospital}/>
        </div>
        </div>
        
        
    </div>

    
  )
}

export default About