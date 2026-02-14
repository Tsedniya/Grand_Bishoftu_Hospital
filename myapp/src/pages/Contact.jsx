import React from 'react'
import ContactForm from '../components/ContactForm'
import EmergencyBox from '../components/EmergencyBox'

const Contact = () => {
  return (
    <div className='mt-40 mb-10'>
      <EmergencyBox/>
       <ContactForm/>
    </div>
  )
}

export default Contact