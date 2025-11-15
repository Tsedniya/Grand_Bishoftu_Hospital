import React from 'react'
import Hero from '../components/Hero'
import TitleAbout from '../components/TitleAbout'

const Home = () => {
  return (
    <div>
      <Hero />
      <TitleAbout className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' />
    </div>
  )
}

export default Home
