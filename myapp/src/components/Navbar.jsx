import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import x from '../assets/x.svg';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
            <div className="flex items-center gap-1">
              <h3 className="text-base sm:text-lg">+251-977434445</h3>
            </div>
           <Link
              to="https://web.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-base sm:text-lg">Facebook</h3>
            </Link>
            <Link
              to="https://www.tiktok.com/@grand_bishoftu_hospital?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <h3 className="text-base sm:text-lg">Tiktok</h3>
            </Link>
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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `pb-1 transition ${
                isActive
                  ? "text-black font-semibold border-b-2 border-[#023E8A]"
                  : "text-gray-600 hover:text-black hover:font-semibold hover:border-b-2 hover:border-[#023E8A]"
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
                  ? "text-black font-semibold border-b-2 border-[#023E8A]"
                  : "text-gray-600 hover:text-black hover:font-semibold hover:border-b-2 hover:border-[#023E8A]"
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
                  ? "text-black font-semibold border-b-2 border-[#023E8A]"
                  : "text-gray-600 hover:text-black hover:font-semibold hover:border-b-2 hover:border-[#023E8A]"
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
            <button className="flex items-center gap-1 pb-1 transition text-gray-600 font-bold hover:text-black hover:font-semibold">
              Services {serviceDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {serviceDropdown && (
              <ul className="absolute top-full left-0 w-40 z-50 bg-white shadow-lg rounded-md py-2 flex flex-col">
                <NavLink
                  to="/services"
                  onClick={() => setServiceDropdown(false)}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-[#023E8A]"
                >
                  Departements
                </NavLink>
                <NavLink
                  to="/awards"
                  onClick={() => setServiceDropdown(false)}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-[#023E8A]"
                >
                  Awards
                </NavLink>
              </ul>
            )}
          </li>

          <NavLink
            to="/contact"
            className="px-6 py-2 bg-sky-500 md:text-center text-white rounded-2xl hover:opacity-85 hover:rounded-none transition-all duration-300"
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
          className={`fixed top-0 right-0 h-screen bg-white transition-all duration-300 ease-in-out z-[100] ${visible ? 'w-full' : 'w-0'}`}
        >
          <div className="flex flex-col p-6">
            <img
              src={x}
              alt="close"
              onClick={() => setVisible(false)}
              className="w-8 h-8 self-end cursor-pointer transition-transform duration-200 hover:rotate-90"
            />

            <ul className="flex flex-col items-start pl-6 mt-8 space-y-4 text-lg font-medium text-black overflow-hidden">
              <NavLink to="/" onClick={() => setVisible(false)} className="hover:border-b-2">Home</NavLink>
              <NavLink to="/about" onClick={() => setVisible(false)} className="hover:border-b-2">About</NavLink>
              <NavLink to="/doctors" onClick={() => setVisible(false)} className="hover:border-b-2">Doctors</NavLink>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col items-start">
                <button
                  onClick={() => setServiceDropdown(!serviceDropdown)}
                  className="flex items-center gap-1 text-black font-medium text-lg"
                >
                  Services {serviceDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {serviceDropdown && (
                  <ul className="flex flex-col pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/services"
                      onClick={() => {
                        setVisible(false);
                        setServiceDropdown(false);
                      }}
                      className="px-2 py-1 hover:bg-gray-100 hover:text-[#023E8A] rounded-md"
                    >
                      Departements
                    </NavLink>
                    <NavLink
                      to="/awards"
                      onClick={() => {
                        setVisible(false);
                        setServiceDropdown(false);
                      }}
                      className="px-2 py-1 hover:bg-gray-100 hover:text-[#023E8A] rounded-md"
                    >
                      Awards
                    </NavLink>
                  </ul>
                )}
              </div>

              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className="px-6 py-2 bg-sky-500 text-white rounded-2xl hover:opacity-85 hover:rounded-none transition-all duration-300"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;