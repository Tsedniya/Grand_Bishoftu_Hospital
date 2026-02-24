import React, { useState } from "react";

const faqData = [
  {
    question: "How long will I be waiting?",
    answer:
      "Waiting time depends on your appointment type and patient flow. Most consultations take 15–30 minutes.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we provide pediatric care for children of all ages with specialized medical professionals.",
  },
  {
    question: "Can I book emergency treatment?",
    answer:
      "Yes, emergency services are available. Please call our emergency line for immediate assistance.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 8:00 AM to 8:00 PM and weekends from 9:00 AM to 5:00 PM.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance providers. Contact our reception for details.",
  },
];

const FAQ = () => {
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
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl font-opensans">
            Find answers to common questions about our services and appointments.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
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

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
