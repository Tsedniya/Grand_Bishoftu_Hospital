import React from 'react'
import Hero from '../components/Hero'
import Homeone from '../components/Homeone'
import Hometwo from '../components/Hometwo'
import Meet from '../components/Meet'
import ContactForm from '../components/ContactForm'
import Frequently from  '../components/Frequently'
import Partners from "../components/partners";
import LatestNewsEvents from '../components/LatestNewsEvents';
import HospitalStats from '../components/HospitalStats'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Homeone/>
      <Hometwo/>
      <Meet/>
      <HospitalStats/>
      <ContactForm/>
      <LatestNewsEvents />
      <Partners />
      <Frequently/>
      
    </div>
  )
}

export default Home
