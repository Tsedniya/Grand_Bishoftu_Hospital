import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

  return (
    <footer className="px-6 bg-[#023E8A] md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">

        {/* Logo + Title + Paragraph */}
        <div className="md:max-w-96">
          <div className="flex items-start gap-3">
            <img 
              className="w-15 rounded-full font-bold border border-gray-900"
              src={logo}
              alt="logo"
            />

            <div className="mt-3 flex flex-col gap-1">
              <span className="text-2xl font-bold text-white">
                Grand Bishoftu Hospital
              </span>
              <span className="text-base font-bold text-white">
                <strong>Address:</strong> Bishoftu, Ethiopia
              </span>
              <span className="text-base font-bold text-white">
                 Inova-Behind Yaden Hotel
              </span>
              
              <span className="text-base font-bold text-white">
                 <a
                  href="https://www.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:opacity-80 transition"
                >
                  <span className="text-base">Facebook</span>
                </a>
              </span>
              <span className="text-base font-bold text-white">
                  <a
                  href="https://www.tiktok.com/@grand_bishoftu_hospital?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:opacity-80 transition"
                >
                  <span className="text-base">Tiktok</span>
                </a>
              </span>

            </div>
          </div>
        </div>

        {/* Links + Contact */}
        <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-20">

          <div>
            <h2 className="font-semibold sm:text-base text-sm mb-5 text-white">Our Hospital</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goTo("/")}
                  className="text-white font-bold sm:text-base text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/about")}
                  className="text-white font-bold sm:text-base text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/services")}
                  className="text-white font-bold sm:text-base text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo("/contact")}
                  className="text-white font-bold sm:text-base text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 sm:text-base text-sm text-white">Get in touch</h2>
            <div className="sm:text-base text-sm text-white font-bold space-y-2">
              <p>+251-977434445</p>
              <p>+251-978434445</p>
              <p>grandbishoftuhospital@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      <p className="pt-4 text-center text-white font-bold sm:text-base text-sm pb-5">
          © {new Date().getFullYear()} Grand Bishoftu Hospital. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
