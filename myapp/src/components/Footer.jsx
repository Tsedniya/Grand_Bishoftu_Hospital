import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
        <div className="flex flex-col items-center justify-between  gap-6 text-center">
        {/* <!-- Left side: Logo or name --> */}
        <div>
            <h2 className="text-xl font-semibold text-white">Grand Bishoftu Hospital</h2>
            <p className="text-sm text-gray-400">
                Providing quality healthcare since 2002
            </p>
        </div>

        {/* <!-- Center: Navigation links --> */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm">
        <Link href="/" className="hover:text-white transition">Home</Link>
        <Link href="/about" className="hover:text-white transition">About</Link>
        <Link href="/services" className="hover:text-white transition">Services</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* <!-- Right side: Social icons --> */}
        <div className="flex justify-center gap-4 text-lg">
        <Link href="#" className="hover:text-white transition"></Link>
        <Link href="#" className="hover:text-white transition"></Link>
        <Link href="#" className="hover:text-white transition"></Link>
        </div>

        {/* <!-- Bottom text --> */}
        <div className="text-sm text-gray-400 mt-4 border-t border-gray-700 pt-4">
             © {new Date().getFullYear()} Grand Bishoftu Hospital. All rights reserved.
        </div>
    </div>


  
  )
}

export default Footer