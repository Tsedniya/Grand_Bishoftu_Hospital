import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  return (
    <footer className="px-6 bg-[#023E8A] md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">

      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">

        {/* Logo + Info */}
        <div className="md:max-w-96">
          <div className="flex items-start gap-3">

            <img
              className="w-15 rounded-full border border-gray-900"
              src={logo}
              alt="logo"
            />

            <div className="mt-3 flex flex-col gap-1">

              <span className="text-2xl font-bold text-white">
                Grand Bishoftu Hospital
              </span>

              <span className="text-base font-bold text-white">
                Address: Bishoftu, Ethiopia
              </span>

              <span className="text-base font-bold text-white">
                Inova-Behind Yaden Hotel
              </span>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-white hover:text-sky-300 transition-colors duration-300"
              >
                Facebook
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@grand_bishoftu_hospital?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-white hover:text-sky-300 transition-colors duration-300"
              >
                TikTok
              </a>

            </div>
          </div>
        </div>

        {/* Links + Contact */}
        <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-20">

          {/* Navigation */}
          <div>
            <h2 className="font-semibold sm:text-base text-sm mb-5 text-white">
              Our Hospital
            </h2>

            <ul className="space-y-2">

              <li>
                <button
                  onClick={() => goTo("/")}
                  className="text-white font-bold sm:text-base text-sm hover:text-sky-300 transition-colors duration-300"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/about")}
                  className="text-white font-bold sm:text-base text-sm hover:text-sky-300 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/services")}
                  className="text-white font-bold sm:text-base text-sm hover:text-sky-300 transition-colors duration-300"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo("/contact")}
                  className="text-white font-bold sm:text-base text-sm hover:text-sky-300 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-5 sm:text-base text-sm text-white">
              Get in touch
            </h2>

            <div className="sm:text-base text-sm text-white font-bold space-y-3">

              <a
                href="tel:+251977434445"
                className="flex items-center gap-2 hover:text-sky-300 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+251-977434445</span>
              </a>

              <a
                href="tel:+251978434445"
                className="flex items-center gap-2 hover:text-sky-300 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+251-978434445</span>
              </a>

              <a
                href="mailto:grandbishoftuhospital@gmail.com"
                className="flex items-center gap-2 hover:text-sky-300 transition-colors duration-300"
              >
                <Mail size={18} />
                <span>grandbishoftuhospital@gmail.com</span>
              </a>

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