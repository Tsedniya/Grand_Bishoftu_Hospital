import React from 'react'
import Hero from '../components/Hero'
import Homeone from '../components/Homeone'
import Hometwo from '../components/Hometwo'
import Meet from '../components/Meet'
import ContactForm from '../components/ContactForm'
import Frequently from  '../components/Frequently'
import Partners from "../components/partners";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Homeone/>
      <Hometwo/>
      <Meet/>
      <ContactForm/>
      <Partners />
      <Frequently/>
      
    </div>
  )
}

export default Home
