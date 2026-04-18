import React from 'react';
import TitleAbout from '../components/TitleAbout';
import RatingBox from '../components/RatingBox';
import Treatment from '../components/Treatment';
import Mission from '../components/mission';
import TestimonialSlider from "../components/TestimonialSlider";


const About = () => {
  return (
    <div >
 
      <Mission/>
      <TitleAbout/>
      <Treatment/>
      <TestimonialSlider />
       

    </div>
  )
}

export default About