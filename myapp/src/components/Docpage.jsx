import React from "react";
import { Clock, Stethoscope } from "lucide-react";

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
      description:
        "Experienced in diagnosing and managing neurological disorders including stroke and rehabilitation care.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-michael",
      img: photo48,
      name: "Dr. Michael Abdisa",
      specialty: "Urologist",
      description:
        "Specializes in urinary tract and male reproductive system conditions, including kidney stones and prostate care.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "5+ years",
    },
    {
      id: "dr-addis",
      img: photo45,
      name: "Dr. Addis Gezahegn",
      specialty: "Dermatology",
      description:
        "Expert in diagnosing and treating skin conditions, with a focus on both medical and cosmetic dermatology.",
      available: "Saturday 2:30–6:30 LT",
      experience: "5 years",
    },
    {
      id: "dr-yeshi",
      img: photo42,
      name: "Dr. Yeshi Teshome",
      specialty: "Senior Ophthalmologist",
      description:
        "Specialist in eye diseases, vision correction, and advanced ophthalmic procedures.",
      available: "Monday–Friday 8:00–11:00 LT",
      experience: "10+ years",
    },
    {
      id: "dr-amanuel",
      img: photo47,
      name: "Dr. Amanuel Tebikew",
      specialty: "Plastic and Reconstructive Surgeon",
      description:
        "Performs reconstructive and cosmetic procedures aimed at restoring function and enhancing appearance.",
      available: "Tuesday 3:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-tatek",
      img: photo44,
      name: "Dr. Tatek Belay",
      specialty: "General Surgeon",
      description:
        "Performs a wide range of surgical procedures with emphasis on safe and effective patient care.",
      available: "Tuesday–Friday 8:00–11:00 LT",
      experience: "4 years",
    },
    {
      id: "dr-bekan",
      img: photo46,
      name: "Dr. Bekan Eshetu",
      specialty: "Pediatrics",
      description:
        "Focused on child health, development, and preventive care from infancy through adolescence.",
      available: "Monday–Friday 9:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-shibiru",
      img: photo40,
      name: "Dr. Shibiru Dula",
      specialty: "Senior Obstetrician & Gynecologist",
      description:
        "Experienced in pregnancy care, childbirth, and treatment of women's reproductive health conditions.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-segni",
      img: photo27,
      name: "Dr. Segni Bekele",
      specialty: "Laparoscopic Surgeon",
      description:
        "Performs minimally invasive surgeries that allow faster recovery and reduced post-operative pain.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-dejene",
      img: photo40,
      name: "Dr. Dejene Degu",
      specialty: "Senior Pediatrician",
      description:
        "Provides advanced pediatric care including growth monitoring and disease prevention.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-tsion",
      img: photo40,
      name: "Dr. Tsion Mekasha",
      specialty: "General Practitioner",
      description:
        "Offers comprehensive primary care including diagnosis, treatment, and long-term health management.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
    {
      id: "dr-habib",
      img: photo37,
      name: "Dr. Habib Ebrahim",
      specialty: "Pathologist",
      description:
        "Specializes in diagnosing diseases through laboratory testing and tissue analysis.",
      available: "Tuesday 8:00–11:00 LT",
      experience: "9 years",
    },
  ];

  return (
    <div className="min-h-screen bg-white mb-12 mt-32">
      {/* Hero */}
      <section className="relative bg-white py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-6xl text-[#023E8A] font-poppins">
            Meet Our Doctors
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl font-opensans">
          Our experienced medical professionals provide compassionate care.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden rounded-xl bg-gray-100">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-5 flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {doc.name}
              </h2>
              <p className="mt-1 text-[#023E8A] font-medium">
                {doc.specialty}
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed font-opensans">
                {doc.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-sm">
              <p className="flex items-center gap-2 font-opensans sm:text-base">
                <Clock size={16} color="#023E8A"  /> {doc.available}
              </p>
              <p className="flex items-center gap-2 mt-1 font-opensans sm:text-base">
                <Stethoscope size={16} color="#023E8A"  /> {doc.experience} of experience
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DocPage;