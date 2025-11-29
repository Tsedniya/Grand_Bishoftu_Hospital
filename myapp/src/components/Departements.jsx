import React from 'react'
import patient from '../assets/patient.jpg'

const Departements = () => {
  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
     
     
        <div className='bg-white border w-80 h-100 rounded-2xl border-sky-400 mb-5  transition-transform duration-300 hover:scale-105 shadow-md '>
             <img src={patient}  className='h-35 w-100 object-cover rounded-t-lg' />
            <p>Cardiology</p>
            <p>Comprehensive cardiovascular care with advanced diagnostic techniques and treatment options for heart conditions, ensuring optimal cardiac health for all patients.</p>
        </div>
    

    <div className='bg-white border w-80 h-100 border-white rounded-2xl mb-7 transition-transform duration-300 hover:scale-105 shadow-md '>

    </div>

    <div className='bg-white border w-80 h-100 border-white mb-7 rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md '>

    </div>

    <div className='bg-white border w-80 h-100 border-white mb-7 rounded-2xl transition-transform duration-300 hover:scale-105 shadow-md '>

    </div>

    <div className='bg-white border w-80 h-100 border-white rounded-2xl mb-7 transition-transform duration-300 hover:scale-105 shadow-md '>

    </div>
       
        
    </div>
  )
}

export default Departements