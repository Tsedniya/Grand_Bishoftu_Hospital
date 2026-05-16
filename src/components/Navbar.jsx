import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Phone, Mail } from "lucide-react";
import { X } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 w-full h-[50px] bg-[#023E8A] z-70">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8">
          {/* Phone + Socials */}
          <div className="flex items-center gap-6 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <h3 className="text-sm">+251-977434445</h3>
            </div>
            <Link
              to="https://web.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-sm">Facebook</h3>
            </Link>
            <Link
              to="https://www.tiktok.com/@grand_bishoftu_hospital?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-sm">Tiktok</h3>
            </Link>
          </div>

          {/* Email desktop */}
          <div className="hidden lg:flex items-center gap-2 text-white text-sm font-semibold">
            <Mail className="w-4 h-4 text-white" />
            <span>grandbishoftuhospital@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="fixed top-10 left-0 w-full flex items-center justify-between px-6 sm:px-8 py-2 bg-white z-70 mt-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-10 rounded-full border border-black" src={logo} alt="logo" />
          <span className="text-xl font-opensans font-bold text-gray-600">
            <span className="hidden sm:inline">Grand Bishoftu Hospital</span>
            <span className="inline sm:hidden">GBH</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-bold text-base items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `pb-1 transition ${
                isActive
                  ? "text-black font-semibold border-b-2 border-[#023E8A] text-sm"
                  : "text-gray-600 text-sm hover:text-black hover:font-semibold hover:border-b-2 hover:border-[#023E8A]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `pb-1 transition ${
                isActive
                  ? "text-black font-semibold border-b-2 border-[#023E8A] text-sm"
                  : "text-gray-600 hover:text-black hover:font-semibold text-sm hover:border-b-2 hover:border-[#023E8A]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `pb-1 transition ${
                isActive
                  ? "text-black font-semibold border-b-2 border-[#023E8A] text-sm"
                  : "text-gray-600 hover:text-black hover:font-semibold text-sm hover:border-b-2 hover:border-[#023E8A]"
              }`
            }
          >
            Doctors
          </NavLink>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `pb-1 transition ${
                  isActive
                    ? "text-black font-semibold border-b-2 border-[#023E8A] text-sm"
                    : "text-gray-600 hover:text-black hover:font-semibold text-sm hover:border-b-2 hover:border-[#023E8A]"
                }`
              }
            >
              Services
            </NavLink>
          </li>

          <NavLink
            to="/contact"
            className="px-4 py-2 bg-sky-500 text-white rounded-xl text-sm hover:bg-sky-600 transition-all duration-300"
          >
            Contact Us
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
          className={`fixed top-0 right-0 h-screen bg-white transition-all duration-300 ease-in-out z-[100] shadow-2xl ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}
        >
          <div className="relative h-full w-full p-6">
            
            {/* Close Button - Fixed at Top Right */}
            <X
              onClick={() => setVisible(false)}
              className="absolute top-6 right-6 w-9 h-9 cursor-pointer text-black transition-transform duration-200 hover:rotate-90"
            />

            {/* Menu Content */}
            <div className="flex flex-col pt-16 h-full">
              <ul className="flex flex-col items-start space-y-4 text-lg font-medium text-gray-800">
                <NavLink 
                  to="/" 
                  onClick={() => setVisible(false)} 
                  className="hover:text-[#023E8A] transition-colors text-sm"
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={() => setVisible(false)} 
                  className="hover:text-[#023E8A] transition-colors text-sm"
                >
                  About
                </NavLink>
                <NavLink 
                  to="/doctors" 
                  onClick={() => setVisible(false)} 
                  className="hover:text-[#023E8A] transition-colors text-sm"
                >
                  Doctors
                </NavLink>
                <NavLink 
                  to="/services" 
                  onClick={() => setVisible(false)} 
                  className="hover:text-[#023E8A] transition-colors text-sm"
                >
                  Services
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setVisible(false)}
                  className="mt-1 px-4 py-2 bg-sky-500 text-sm text-white rounded-xl hover:bg-sky-600 transition-all duration-300 inline-block w-fit"
                >
                  Contact Us
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;