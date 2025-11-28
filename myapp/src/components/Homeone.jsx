import React from 'react'
import opration from '../assets/opration.jpg'

const Homeone = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-10 ' >
        {/*Left*/}
        <div className='relative w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
           <img className='rounded-2xl' src={opration} alt=""/>
           <div className='absolute right-0 bottom-0 bg-sky-400 z-50 h-50 text-gray-700 font-semibold'>
             <p>25+</p>
           </div>
        </div>


        <div className='w-full sm:w-1/2'>
                <p>pull request</p>
        </div>
    </div>
  )
}

export default Homeone