import React from 'react';

import photo49 from "../assets/new/photo49.jpg";
import photo48 from "../assets/new/photo48.jpg";
import photo45 from "../assets/new/photo45.jpg";
import photo44 from "../assets/new/photo44.jpg";
import photo37 from "../assets/new/photo37.jpg";
import photo42 from "../assets/new/photo42.jpg";
import photo46 from "../assets/new/photo46.jpg";
import photo47 from "../assets/new/photo47.jpg";
import photo40 from "../assets/new/photo40.jpg";
import photo27 from "../assets/new/photo27.jpg";

const DocPage = () => {
    const doctors = [
        {
            id: "dr-dereje",
            img: photo49,
            name: "Dr. Dereje Melka",
            specialty: "Neurology",
            description: "Experienced in stroke management and neurological rehabilitation.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-michael",
            img: photo48,
            name: "Dr. Michael Abdisa",
            specialty: "Urologist",
            description: "Focused on neurological disorders with expertise in brain and nervous system disorders.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "5 + years"
        },
        {
            id: "dr-addis",
            img: photo45,
            name: "Dr. Addis Gezahegn",
            specialty: "Dermatology",
            description: "Specialist in skin conditions, cosmetic dermatology, and long-term skin care treatment.",
            available: "Saturday 2:30-6:30 LT",
            experience: "5 years"
        },
        {
            id: "dr-yeshi",
            img: photo42,
            name: "Dr. Yeshi Teshome",
            specialty: "Senior Ophthalmologist",
            description: "Expert in eye care, vision correction, and advanced ophthalmic treatments.",
            available: "Monday-Friday 8:00-11:00 LT",
            experience: "3 1/2 years"
        },
        {
            id: "dr-amanuel",
            img: photo47,
            name: "Dr. Amanuel Tebikew",
            specialty: "Plastic and Reconstructive Surgeon",
            description: "Specializes in reconstructive and cosmetic surgery with focus on patient confidence.",
            available: "Tuesday 3:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-tatek",
            img: photo44,
            name: "Dr. Tatek Belay",
            specialty: "General Surgeon",
            description: "Experienced in a wide range of surgical procedures with a patient-first approach.",
            available: "Tuesday-Friday 8:00-11:00 LT",
            experience: "4 years"
        },
        {
            id: "dr-bekan",
            img: photo46,
            name: "Dr. Bekan Eshetu",
            specialty: "Pediatrics",
            description: "Focused on child health, growth, and long-term wellness.",
            available: "Monday-Friday 9:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-shibiru",
            img: photo40,
            name: "Dr. Shibiru Dula",
            specialty: "Senior Obstetrician & Gynecologist",
            description: "Expert in women's health, pregnancy care, and advanced gynecological treatments.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-segni",
            img: photo27,
            name: "Dr. Segni Bekele",
            specialty: "Laparoscopic Surgeon",
            description: "Specialist in minimally invasive laparoscopic procedures ensuring faster recovery and precision care.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-dejene",
            img: photo40,
            name: "Dr. Dejene Degu",
            specialty: "Senior Pediatrician",
            description: "Dedicated to child health, growth monitoring, and preventive pediatric care.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-tsion",
            img: photo40,
            name: "Dr. Tsion Mekasha",
            specialty: "General Practitioner",
            description: "Provides comprehensive primary care, diagnosis, and ongoing patient management.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        },
        {
            id: "dr-habib",
            img: photo37,
            name: "Dr. Habib Ebrahim",
            specialty: "Pathologist",
            description: "Expert in disease diagnosis through laboratory analysis and advanced pathology techniques.",
            available: "Tuesday 8:00-11:00 LT",
            experience: "9 years"
        }
    ];

    return (
        <div className='min-h-screen bg-white mb-12 mt-32'>
            {/* Hero Section */}
            <section className='relative bg-white py-10 px-4 text-center '>
                <div className='max-w-3xl mx-auto'>
                    <h1 className="text-center font-poppins text-3xl md:text-6xl text-[#023E8A] ">
                        Meet Our Doctors
                    </h1>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className='max-w-6xl mx-auto px-4 py-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {doctors.map((doc) => (
                    <div
                        key={doc.id}
                        id={doc.id}
                        className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col overflow-hidden'
                    >
                        {/* Doctor Image */}
                        <div className='h-56 w-full overflow-hidden rounded-xl bg-gray-100'>
                            <img
                                src={doc.img}
                                alt={doc.name}
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                            />
                        </div>

                        {/* Doctor Info */}
                        <div className='mt-5 flex-1'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {doc.name}
                            </h2>
                            <p className='mt-1 text-[#023E8A] font-medium'>
                                {doc.specialty}
                            </p>
                            <p className='mt-3 text-sm leading-relaxed font-opensans sm:text-base '>
                                {doc.description}
                            </p>
                        </div>

                        {/* Contact & Experience */}
                        <div className='mt-6 pt-4 border-t border-gray-100 text-sm'>
                            <p className='flex items-center gap-2 font-opensans sm:text-base'>
                                📧 {doc.available}
                            </p>
                            <p className='flex items-center gap-2 mt-1 font-opensans sm:text-base'>
                                🩺 {doc.experience} of experience
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DocPage;