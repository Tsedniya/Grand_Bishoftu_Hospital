import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex'>
        {/*<!-- Left side: Logo or name -->*/}
        <div class="text-center md:text-left">
            <h2 class="text-xl font-semibold text-white">Grand Bishoftu Hospital</h2>
            <p class="text-sm text-gray-400">Providing quality healthcare since 2002</p>
        </div>

    {/*<!-- Center: Navigation links -->*/}
    <div class="flex flex-wrap justify-center gap-4 text-sm">
      <a href="/" class="hover:text-white transition">Home</a>
      <a href="/about" class="hover:text-white transition">About</a>
      <a href="/services" class="hover:text-white transition">Services</a>
      <a href="/contact" class="hover:text-white transition">Contact</a>
    </div>

    <div class="flex justify-center gap-4">
      <a href="#" class="hover:text-white transition"><i class="fab fa-facebook"></i></a>
      <a href="#" class="hover:text-white transition"><i class="fab fa-twitter"></i></a>
      <a href="#" class="hover:text-white transition"><i class="fab fa-instagram"></i></a>
    </div>

      <div class="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
           © 2025 Grand Bishoftu Hospital. All rights reserved.
      </div>

    </div>
  )
}

export default Footer