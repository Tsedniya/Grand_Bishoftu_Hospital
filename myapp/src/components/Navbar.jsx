import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { Hospital } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white shadow-md z-50 rounded-full my-5 mx-15">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Hospital className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Grand Bishoftu Hospital
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-sky-400 transition-colors">Home</NavLink>
        <NavLink to="/about" className="hover:text-sky-400 transition-colors">About</NavLink>
        <NavLink to="/services" className="hover:text-sky-400 transition-colors">Services</NavLink>
        <NavLink to="/contact" className="hover:text-sky-400 transition-colors">Contact</NavLink>
      </ul>
    </nav>

  )
}

export default Navbar