import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);

    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                  <div className="flex items-center gap-3">
                      <img 
                          className="w-15 rounded-full border border-gray-700"
                          src={logo}
                          alt="logo"
                      />
                      <span className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-sky-400 bg-clip-text text-transparent">
                          Grand Bishoftu Hospital
                      </span>
                  </div>

                  <p className="mt-6 text-sm text-gray-700 font-bold">
                      Our experienced medical specialists work tirelessly to ensure the well-being of every patient.
                  </p>
              </div>

                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-sky-400">Company</h2>
                           <ul className="space-y-2">
                                <li>
                                  <button
                                    onClick={() => goTo("/")}
                                    className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                                  >
                                    Home
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => goTo("/about")}
                                    className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                                  >
                                    About Us
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => goTo("/services")}
                                    className="text-gray-700 font-bold hover:text-sky-400 transition-colors text-sm"
                                  >
                                    Services
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => goTo("/contact")}
                                    className="text-gray-700 hover:text-sky-400 transition-colors font-bold text-sm"
                                  >
                                    Contact
                                  </button>
                                </li>
                              </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-sky-400">Get in touch</h2>
                        <div className="text-sm text-gray-700 font-bold space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-gray-700 text-xs md:text-sm pb-5">
                Copyright 2024 © Grand Bishoftu Hospital. All Right Reserved.
            </p>
        </footer>
    );
};

 
export default Footer;
