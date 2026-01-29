import React from 'react'
import Hero from '../components/Hero'
import HeroSecond from '../components/HeroSecond'
import TitleAbout from '../components/TitleAbout'
import Homeone from '../components/Homeone'
import Departements from '../components/Departements'


const Home = () => {
  return (
    <div>
      <HeroSecond />
      <Homeone/>
      <Departements/>
    </div>
  )
}

export default Home
