import React from 'react'
import Hero from '../components/Hero'
import HeroSecond from '../components/HeroSecond'
import TitleAbout from '../components/TitleAbout'
import Homeone from '../components/Homeone'
import Hometwo from '../components/Hometwo'
import Meet from '../components/Meet'
import ContactUs from '../components/ContactUs'



const Home = () => {
  return (
    <div>
      <HeroSecond />
      <Homeone/>
      <Hometwo/>
      <Meet/>
      <ContactUs/>
      
    </div>
  )
}

export default Home
