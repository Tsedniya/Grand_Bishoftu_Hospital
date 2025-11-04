import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { Hospital } from 'lucide-react';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 mx-15 rounded-full bg-white px-6 py-3">
  
           <div className="flex items-center space-x-2">
            <Hospital className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
               Grand Bishoftu Hospital
            </span>
          </div>

  
        <ul className="flex justify-center gap-6 text-4px text-gray-200 font-medium">
            <NavLink to="/" className=" text-gray-700 hover:text-sky-400 ransition-colors">Home</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-sky-400 ransition-colors">About</NavLink>
            <NavLink to="/services" className="text-gray-700 hover:text-sky-400 ransition-colors">Services</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-sky-400 ransition-colors">Contact</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-sky-400 ransition-colors">About</NavLink>
            <NavLink to="/services" className="text-gray-700 hover:text-sky-400 ransition-colors">Services</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-sky-400 ransition-colors">Contact</NavLink>

        </ul>

    </div>

  )
}

export default Navbar