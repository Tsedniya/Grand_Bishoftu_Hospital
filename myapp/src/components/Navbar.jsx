import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import menu from '../assets/menu.svg';
import { useState, useEffect } from 'react';
import x from '../assets/x.svg';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled]= useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (path) => {
    navigate(path);
    setVisible(false); // closes menu on mobile
  };
  
  return (
 <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-7 sm:px-6 py-4 text-white bg-black/50 drop-shadow-lg shadow-md z-50">

      {/* Logo and Name */}
      <div className="flex items-center space-x-2">
        <img className="w-12 rounded-full border border-gray-900" src={logo} alt="logo" />
        
        <span className="text-2xl font-poppins font-bold text-sky-400">
          {visible ? 'GBH' : (
            <>
              <span className="hidden sm:inline">Grand Bishoftu Hospital</span>
              <span className="inline sm:hidden">GBH</span>
            </>
          )}
        </span>
      </div>


      {/* Navbar Links (visible on larger screens) */}
      <ul className="hidden md:flex gap-6 text-sky-400 font-bold text-base">
        <NavLink to="/" className="hover:text-black hover:font-bold">Home</NavLink>
        <NavLink to="/about" className="hover:text-black hover:font-bold">About</NavLink>
        <NavLink to="/services" className="hover:text-black hover:font-bold">Services</NavLink>
        <NavLink to="/contact" className="hover:text-black hover:font-bold">Contact</NavLink>
      </ul>

      
      <img 
        src={menu} 
        alt="menu" 
        onClick={() => setVisible(true)} 
        className="w-8 h-8 cursor-pointer sm:hidden"
      />

      {/* Slide-out Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col p-6">
          {/* Close Button */}
         
              <img 
                src={x} 
                alt="close" 
                onClick={() => setVisible(false)} 
                className="w-8 h-8 self-end cursor-pointer transition-transform duration-200 hover:rotate-90"
              />

          
          
          {/* Mobile Links */}
          <ul className="flex flex-col items-center mt-8 space-y-4 text-lg font-medium text-black overflow-hidden">
            <NavLink to="/" onClick={() => setVisible(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)}>About</NavLink>
            <NavLink to="/services" onClick={() => setVisible(false)}>Services</NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)}>Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;