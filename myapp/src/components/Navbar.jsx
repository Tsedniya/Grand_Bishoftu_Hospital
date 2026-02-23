import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import x from '../assets/x.svg';
import { useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 w-full h-[50px] bg-[#023E8A] z-70">
        <div className="
          max-w-7xl mx-auto h-full
          flex items-center
          justify-center lg:justify-between
          px-4 sm:px-6 lg:px-8
        ">
          {/* Phone + Email */}
          <div className="flex items-center gap-6 text-white text-sm font-semibold">
            <div className="flex items-center gap-1">
              <h3 className="text-base sm:text-lg">+251-977434445</h3>
            </div>

            <a
              href="https://www.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-base sm:text-lg">Facebook</h3>
            </a>

            <a
              href="https://www.tiktok.com/@grand_bishoftu_hospital?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-base sm:text-lg">Tiktok</h3>
            </a>

          </div>

          {/* Email desktop */}
          <div className="hidden lg:flex items-center gap-2 text-white text-base font-semibold">
            <span>grandbishoftuhospital@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="fixed top-10 left-0 w-full flex items-center justify-between px-6 sm:px-8 py-2 bg-white z-70 mt-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-12 rounded-full border border-black" src={logo} alt="logo" />
          <span className="text-2xl font-opensans font-bold text-gray-600">
            <span className="hidden sm:inline">Grand Bishoftu Hospital</span>
            <span className="inline sm:hidden">GBH</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-bold text-base items-center">
          <NavLink to="/" className="hover:text-black hover:font-semibold hover:border-[#023E8A] hover:border-b-2  pb-1">Home</NavLink>
          <NavLink to="/about" className="hover:text-black hover:font-semibold hover:border-[#023E8A] hover:border-b-2 pb-1">About</NavLink>
          <NavLink to="/services" className="hover:text-black hover:font-semibold hover:border-[#023E8A] hover:border-b-2 pb-1">Services</NavLink>
          <NavLink to="/contact" className="hover:text-black hover:font-semibold hover:border-[#023E8A] hover:border-b-2 pb-1">Contact</NavLink>
          <NavLink to="/contact" className="px-3 py-2 bg-sky-500 md:text-center text-white rounded-2xl hover:opacity-85 hover:rounded-none transition-all duration-300">
            Make Appointment
          </NavLink>
        </ul>

        {/* Mobile menu icon */}
        <img 
          src={menu} 
          alt="menu" 
          onClick={() => setVisible(true)} 
          className="w-8 h-8 cursor-pointer md:hidden"
        />

        {/* Slide-out Mobile Menu */}
        <div
          className={`
            fixed top-0 right-0 h-screen bg-white
            transition-all duration-300 ease-in-out
            z-[100]
            ${visible ? 'w-full' : 'w-0'}
          `}
        >
          <div className="flex flex-col p-6">
            <img 
              src={x} 
              alt="close" 
              onClick={() => setVisible(false)} 
              className="w-8 h-8 self-end cursor-pointer transition-transform duration-200 hover:rotate-90"
            />
            <ul className="flex flex-col items-start pl-6 mt-8 space-y-4 text-lg font-medium text-black overflow-hidden">
              <NavLink to="/" onClick={() => setVisible(false)} className="hover:border-b-2 ">Home</NavLink>
              <NavLink to="/about" onClick={() => setVisible(false)} className="hover:border-b-2 ">About</NavLink>
              <NavLink to="/services" onClick={() => setVisible(false)} className="hover:border-b-2 ">Services</NavLink>
              <NavLink to="/contact" onClick={() => setVisible(false)} className="hover:border-b-2 ">Contact</NavLink>

              {/* Mobile Make Appointment Button */}
              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className="px-3 py-2 bg-sky-500 text-white rounded-2xl hover:opacity-85 hover:rounded-none transition-all duration-300"
              >
                Make Appointment
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;