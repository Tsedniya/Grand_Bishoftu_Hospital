import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { Hospital } from 'lucide-react';


const Navbar = () => {
  return (
  <nav className="fixed top-0 left-0 right-0 mx-7 my-5 flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-md z-50">
  <div className="flex items-center space-x-2">
    <Hospital className="h-8 w-8 text-blue-600" />
    <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
      Grand Bishoftu Hospital
    </span>
  </div>

  <ul className="flex gap-6 text-gray-700 font-medium">
    <NavLink to="/" className="text-gray-700 hover:text-sky-400 transition-colors">
        <p>Home</p>
        <hr className='w-13 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/about" className="text-gray-700 hover:text-sky-400  transition-colors">
        <p>About</p>
        <hr className='w-13 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/services" className="text-gray-700 hover:text-sky-400  transition-colors">
        <p>Services</p>
        <hr className='w-13 border-none h-[1.5px] bg-sky-400 hidden'/>
    </NavLink>
    <NavLink to="/contact" className="text-gray-700 hover:text-sky-400  transition-colors">
        <p>Contact</p>
        <hr className='w-2/4 border-none h-[1.5px] hover:text-sky-400 hidden'/>
    </NavLink>
  </ul>
</nav>



  )
}

export default Navbar