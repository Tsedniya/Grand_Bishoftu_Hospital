import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {
  Phone,
  Mail,
  Facebook,
  MapPin,
  Linkedin,
   Music2,
   MusicIcon
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  return (
    <footer className="bg-[#0d1f2d] px-6 md:px-16 lg:px-24 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
        
        {/* Brand - Larger column */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Grand Bishoftu Hospital"
              className="w-11 h-11 rounded-xl border border-white/20 flex-shrink-0"
            />
            <h3 className="text-xl font-semibold text-[#5dc8c8] tracking-tight whitespace-nowrap font-playfair ">
              Grand Bishoftu Hospital
            </h3>
          </div>

          <p className="text-white/60 text-[13px] leading-relaxed">
            A leading multi-specialty hospital committed to delivering 
              high-quality healthcare with advanced technology 
            and experienced professionals.
          </p>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider">SERVICES</h4>
          <ul className="space-y-2.5 text-white/60 text-sm">
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Emergency Care</button></li>
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Laboratory Services</button></li>
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Pharmacy</button></li>
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Surgical Services</button></li>
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Diagnostic Imaging</button></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider">ABOUT US</h4>
          <ul className="space-y-2.5 text-white/60 text-sm">
            <li><button onClick={() => goTo("/")} className="hover:text-white transition">Home</button></li>
            <li><button onClick={() => goTo("/about")} className="hover:text-white transition">Our Story</button></li>
            <li><button onClick={() => goTo("/services")} className="hover:text-white transition">Medical Services</button></li>
            <li><button onClick={() => goTo("/contact")} className="hover:text-white transition">Contact Us</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider">CONTACT</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex gap-2">
              <MapPin size={18} className="text-[#5dc8c8] mt-0.5 flex-shrink-0" />
              <span>Bishoftu, Ethiopia<br />Behind Yaden Hotel</span>
            </li>

            <li>
              <a href="tel:+251977434445" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} className="text-[#5dc8c8]" /> +251 977 434 445
              </a>
            </li>

            <li>
              <a href="tel:+251978434445" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} className="text-[#5dc8c8]" /> +251 978 434 445
              </a>
            </li>

            <li>
              <a href="mailto:grandbishoftuhospital@gmail.com" className="flex items-center gap-2 hover:text-white transition break-all">
                <Mail size={18} className="text-[#5dc8c8]" /> grandbishoftuhospital@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Grand Bishoftu Hospital. All Rights Reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#5dc8c8] transition"
          >
            <Facebook size={18} className="text-white" />
          </a>

          <a
            href="https://www.tiktok.com/@grand_bishoftu_hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#5dc8c8] transition"
          >
            <Music2 size={18} className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/p/Grand-Bishoftu-Hospital-100064801448190/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#5dc8c8] transition"
          >
            <Linkedin size={18} className="text-white" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;