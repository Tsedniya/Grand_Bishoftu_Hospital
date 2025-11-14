import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const goTo = (path) => navigate(path);

  
  return (
        <div className='bg-blue-50 py-12 px-15 w-full'>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                 <img className="w-12 rounded-full border border-gray" src={logo} alt="logo" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-sky-400 bg-clip-text text-transparent">
                      Grand Bishoftu Hospital
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                   Our experienced medical specialists work tirelessly to ensure the well-being of every patient, offering advanced treatments, personalized care, and a patient-first approach.
                </p>
              </div>
              
            <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goTo("/")}
                  className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/about")}
                  className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/services")}
                  className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/contact")}
                  className="text-gray-700 hover:text-sky-400 transition-colors font-bold text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 font-bold">
                <strong className="text-gray-700 ">Phone:</strong> 0933219523 
              </li>
              <li className="text-gray-400 font-bold">
                <strong className="text-gray-700">Email:</strong> Yanchiwnesh@gmail.com
              </li>
              <li className="text-gray-400 font-bold">
                <strong className="text-gray-700">Address:</strong> Bole Ambassador Hotel 2nd Floor
              </li>
              <li className="text-gray-400 font-bold">
                <strong className="text-gray-700">Hours:</strong> Mon-Fri 9AM-6PM, Sat 9AM-4PM
              </li>
            </ul>
          </div>





          </div>



       </div>





  
  )
}

export default Footer