import React, { useState } from "react";

const ContactFaqData = [
  {
    question: "How can I contact the hospital?",
    answer:
      "You can reach us by phone at +251 978434445, email at grandbishoftuhospital@gmail.com, or by filling out our contact form.",
  },
  {
    question: "Where is the hospital located?",
    answer:
      "Grand Bishoftu Hospital is located at Bishoftu,Inova-Behind Yaden Hotel, Ethiopia. You can also find directions on our map.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Appointments can be booked online through our website, by phone, or directly at the hospital reception.",
  },
  {
    question: "What are the hospital's visiting hours?",
    answer:
      "Visiting hours are Monday to Friday from 8:00 AM to 8:00 PM, and weekends from 9:00 AM to 5:00 PM.",
  },
  {
    question: "Is there emergency contact available?",
    answer:
      "Yes, our emergency line is available 24/7. Please call immediately in case of any urgent medical needs.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 -mt-10 md:mt-1">
      <div className="max-w-4xl mx-auto ">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#023E8A] font-poppins leading-tight">
            Contact FAQs
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl font-opensans">
            Find answers to common questions about contacting us and visiting the hospital.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {ContactFaqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 hover:bg-gray-100 transition"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;
