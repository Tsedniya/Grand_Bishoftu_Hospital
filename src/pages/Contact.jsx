import React from 'react'
import ContactForm from '../components/ContactForm';
import EmergencyBox from '../components/EmergencyBox';
import ContactMap from '../components/ContactMap';
import ContactFAQ from '../components/ContactFAQ';

const Contact = () => {
  return (
    <div className='mt-25'>
      <EmergencyBox/>
      <ContactForm/>
      <ContactFAQ/>
      <ContactMap/>
  
     
     
    </div>
  )
}

export default Contact