import React from 'react'
import ContactForm from '../components/ContactForm'
import EmergencyBox from '../components/EmergencyBox'

const Contact = () => {
  return (
    <div className='mt-28 mb-10'>
      <ContactForm/>
      <EmergencyBox/>
     
    </div>
  )
}

export default Contact