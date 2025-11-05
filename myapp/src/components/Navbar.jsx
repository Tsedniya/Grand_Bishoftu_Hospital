import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Hospital } from 'lucide-react';


const Navbar = () => {
  return (
  <nav className="fixed top-0 left-0 right-0 mx-13 my-5 flex items-center justify-between px-6 py-1 bg-white rounded-full shadow-md z-50">
  <div className="flex items-center space-x-2">
    <img className='w-12 rounded-full border border-gray' src={logo} alt="logo"/>
    <span className="text-2xl  text-gray-700">
      Grand Bishoftu Hospital
    </span>
  </div>

  <ul className="flex gap-6 text-gray-700 font-medium">
    <NavLink to="/" className="mx-auto hover:text-sky-400 hover:font-bold text-gray-700  transition-colors">
        <p>Home</p>
        <hr className='mx-auto w-10 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/about" className="text-gray-700 hover:text-sky-400  hover:font-bold transition-colors">
        <p>About</p>
        <hr className='mx-auto w-10 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/services" className="text-gray-700 hover:text-sky-400 hover:font-bold transition-colors">
        <p>Services</p>
        <hr className='mx-auto w-10 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/contact" className="text-gray-700 hover:text-sky-400 hover:font-bold transition-colors">
        <p>Contact</p>
        <hr className='mx-auto w-10 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
  </ul>
</nav>



  )
}

export default Navbar