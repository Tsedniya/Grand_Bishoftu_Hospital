import React from 'react'
import opration from '../assets/opration.jpg'

const Homeone = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-10 ' >
        {/*Left*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
           <img className='rounded-2xl transition-transform duration-300 hover:scale-90' src={opration} alt=""/>
        </div>


        <div className='w-full sm:w-1/2'>
               
        </div>
    </div>
  )
}

export default Homeone