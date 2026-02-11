import React from 'react';
import patient from '../assets/patient.jpg';
import pulse from '../assets/pulse.svg';
import brain from '../assets/brain.svg';
import bone from '../assets/bone.svg';
import baby from '../assets/baby.svg';
import ambulance from '../assets/ambulance.svg';
import shield from '../assets/shield.svg';
import photo_1 from '../assets/photo_1.jpg';
import photo_2 from '../assets/photo_2.jpg';
import photo from '../assets/photo.jpg';
import men from '../assets/men.jpg';
import cancer from '../assets/cancer.jpg';
import stethoscope from '../assets/stethoscope.svg';
import bubbles from '../assets/bubbles.svg';
import testtube from '../assets/testtube.svg';
import camera from '../assets/camera.svg';
import eye from '../assets/eye.svg';
import pill from '../assets/pill.svg';

const Departements = () => {
  const departments = [
    {
      title: 'Cardiology',
      desc: 'Comprehensive cardiovascular care with advanced diagnostic techniques and treatment options for heart conditions, ensuring optimal cardiac health for all patients.',
      img: patient,
      icon: pulse,
    },
    {
      title: 'Neurology',
      desc: 'Expert neurological care specializing in brain and nervous system disorders, providing cutting-edge treatments and compassionate support for neurological conditions.',
      img: photo,
      icon: brain,
    },
    {
      title: 'Orthopedics',
      desc: 'Advanced musculoskeletal care focusing on bones, joints, and muscles with innovative surgical and non-surgical treatment approaches for mobility restoration.',
      img: photo_1,
      icon: bone,
    },
    {
      title: 'Pediatrics',
      desc: 'Specialized healthcare for children from infancy through adolescence, offering comprehensive medical care in a child-friendly environment with experienced pediatric specialists.',
      img: photo_2,
      icon: baby,
    },
    {
      title: 'Oncology',
      desc: 'Comprehensive cancer care with multidisciplinary approach, offering advanced treatment options, clinical trials, and compassionate support throughout the cancer journey.',
      img: cancer,
      icon: shield,
    },
    {
      title: 'Emergency Care',
      desc: 'Round-the-clock emergency medical services with rapid response capabilities, state-of-the-art equipment, and experienced emergency physicians for critical care.',
      img: men,
      icon: ambulance,
    },
    {
      title: 'Pulmonology',
      desc: 'Specialized care for respiratory and lung conditions including asthma, pneumonia, tuberculosis, and chronic lung diseases, providing advanced diagnosis and personalized treatment for better breathing health.',
      img:  men, 
      icon: stethoscope, 
    },

    {
      title: 'Laboratory Services',
      desc: 'Comprehensive diagnostic testing services providing accurate and timely analysis of blood, urine, and other samples to support disease detection, monitoring, and effective treatment decisions.',
      img:  men,
      icon: testtube,
    },

    {
      title: 'Infectious Disease',
      desc: 'Expert care for the prevention, diagnosis, and treatment of bacterial, viral, and fungal infections, offering advanced therapies and infection control to protect patient health and safety.',
      img:  men,
      icon: bubbles,
    },

    {
      title: 'Laparoscopic Surgery',
      desc: 'Minimally invasive surgical procedures using advanced technology and small incisions, ensuring faster recovery, less pain, and improved patient outcomes across various medical conditions.',
      img:  men,
      icon: camera,
    },

    {
      title: 'Ophthalmology',
      desc: 'Comprehensive eye care services including diagnosis and treatment of vision problems, eye diseases, and surgical procedures to maintain and improve overall eye health.',
      img:  men,
      icon: eye,
    },

    {
      title: 'Gynecology',
      desc: 'Specialized healthcare services focused on women’s reproductive health, providing diagnosis, treatment, and preventive care for various gynecological conditions in a supportive environment.',
      img:  men,
      icon: ambulance,
    },
    {
      title: 'Urology',
      desc: 'Comprehensive care for disorders of the urinary tract and male reproductive system, including kidney stones, prostate issues, urinary infections, and infertility treatments, using advanced diagnostics and therapies.',
      img: men,  
      icon: ambulance, 
    },

    {
      title: 'Plastic Surgery',
      desc: 'Expert reconstructive and cosmetic surgery services for restoring function, correcting defects, and enhancing appearance, including procedures for burns, injuries, congenital defects, and aesthetic improvements.',
      img: men,  
      icon: ambulance, 
    },
    {
      title: 'Pharmacy',
      desc: 'Comprehensive pharmacy services providing safe and effective medication management, prescription dispensing, patient counseling, and guidance to ensure optimal therapeutic outcomes.',
      img: men, 
      icon: pill, 
    },




  ];

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-4 sm:px-6">
      <div className="flex flex-col items-center mt-25 mb-15">
        <p className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] mt-8 md:mt-16">
          services
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 w-full h-auto mb-6"
          >
            <img
              src={dept.img}
              alt={dept.title}
              className="rounded-t-2xl w-full h-36 object-cover"
            />

            {/* ✅ circle color updated here */}
            <div className="absolute -top-7 left-4 sm:left-10 flex items-center justify-center rounded-full bg-[#023E8A] w-14 h-14 overflow-hidden">
              <img
                src={dept.icon}
                alt={`${dept.title} icon`}
                className="w-8 h-8 object-cover"
              />
            </div>

            <p className="mt-6 px-4 sm:px-7 text-2xl font-bold text-[#40ABD7]">
              {dept.title}
            </p>

            <p className="mt-2 px-4 sm:px-7 text-justify">{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departements;
