import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import { useState } from 'react';
import { Phone, Mail, X } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `pb-1 transition-all hover:text-[#0b6e6e] ${
      isActive
        ? "text-[#0b6e6e] font-semibold border-b-2 border-[#0b6e6e]"
        : "text-gray-600 hover:border-b hover:border-[#0b6e6e]/30"
    }`;

  return (
    <>
      {/* Top Info Bar - Reduced Height */}
      <div className="fixed top-0 left-0 w-full h-[42px] bg-[#0b6e6e] z-70">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-6 text-white text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+251-977434445</span>
            </div>

            <Link to="https://web.facebook.com/..." target="_blank" className="hover:underline">
              Facebook
            </Link>

            <Link to="https://www.tiktok.com/..." target="_blank" className="hover:underline">
              Tiktok
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-white text-xs font-medium">
            <Mail className="w-4 h-4" />
            <span>grandbishoftuhospital@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Increased Height */}
      <nav className="fixed top-[42px] left-0 w-full flex items-center justify-between px-6 sm:px-8 py-5 bg-white z-70 shadow-md border-b border-[#5dc8c8]/20">

        {/* Logo - Slightly Bigger */}
        <div className="flex items-center space-x-3">
          <img
            className="w-11 h-11 rounded-2xl border border-[#5dc8c8]/30"
            src={logo}
            alt="Grand Bishoftu Hospital"
          />
          <span className="font-playfair text-[19px] font-semibold tracking-tight text-[#0b6e6e]">
            <span className="hidden sm:inline">Grand Bishoftu Hospital</span>
            <span className="inline sm:hidden">GBH</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-[13px] font-medium items-center">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/doctors" className={navLinkClass}>
            Doctors
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="px-5 py-2 bg-[#0b6e6e] text-white rounded-lg text-[13px] font-medium hover:bg-[#5dc8c8] transition"
          >
            Contact Us
          </NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <img
          src={menu}
          alt="menu"
          onClick={() => setVisible(true)}
          className="w-8 h-8 cursor-pointer md:hidden"
        />

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-screen bg-white transition-all duration-300 z-100 shadow-2xl ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
          <div className="relative h-full w-full p-6">

            <X
              onClick={() => setVisible(false)}
              className="absolute top-6 right-6 w-9 h-9 cursor-pointer text-[#0b6e6e]"
            />

            <div className="flex flex-col pt-16">
              <ul className="flex flex-col space-y-6 text-base font-medium text-gray-700">

                {["Home", "About", "Doctors", "Services"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setVisible(false)}
                    className="hover:text-[#0b6e6e]"
                  >
                    {item}
                  </NavLink>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setVisible(false)}
                  className="mt-4 px-6 py-3 bg-[#0b6e6e] text-white rounded-lg inline-block w-fit hover:bg-[#5dc8c8] transition"
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