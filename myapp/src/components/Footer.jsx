import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
        <div className='bg-blue-50 py-12 px-15 w-full'>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
           
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-sky-400 bg-clip-text text-transparent">
                      Grand Bishoftu Hospital
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Your premier destination for professional skin care treatments. We specialize exclusively in advanced skin
                  care solutions designed to enhance your natural beauty and promote healthy, radiant skin.
                </p>
                <p className="text-sm text-gray-500">Licensed • Certified • Trusted by 100+ clients</p>
              </div>
          </div>



       </div>


  
  )
}

export default Footer