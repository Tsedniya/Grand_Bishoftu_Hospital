import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.svg'


const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 mx-10 rounded-full bg-amber-900 px-6 py-3">
  
  <img className="w-10 h-auto" src={logo} alt="Logo" />

  
  <ul className="flex justify-center gap-6 text-sm text-gray-200 font-medium">
    <NavLink to="/" className="hover:text-amber-300">Home</NavLink>
    <NavLink to="/about" className="hover:text-amber-300">About</NavLink>
    <NavLink to="/services" className="hover:text-amber-300">Services</NavLink>
    <NavLink to="/contact" className="hover:text-amber-300">Contact</NavLink>
    <NavLink to="/about" className="hover:text-amber-300">About</NavLink>
    <NavLink to="/services" className="hover:text-amber-300">Services</NavLink>
    <NavLink to="/contact" className="hover:text-amber-300">Contact</NavLink>

  </ul>

  {/* Button */}
  <button className="bg-white text-amber-900 px-4 py-2 rounded-full font-semibold hover:bg-amber-300 transition">
    App
  </button>
</div>

  )
}

export default Navbar