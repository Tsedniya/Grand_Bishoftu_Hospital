import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Install: npm install lucide-react

const faqData = [
  {
    question: "How long will I be waiting?",
    answer: "Waiting time depends on your appointment type and patient flow. Most consultations take 15–30 minutes.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we provide pediatric care for children of all ages with specialized medical professionals.",
  },
  {
    question: "Can I book emergency treatment?",
    answer: "Yes, emergency services are available. Please call our emergency line for immediate assistance.",
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Monday to Friday from 8:00 AM to 8:00 PM and weekends from 9:00 AM to 5:00 PM.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We accept most major insurance providers. Contact our reception for details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f0f9f9] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-[#0d1f2d] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#0b6e6e] text-lg max-w-md mx-auto">
            Everything you need to know about our services and appointments
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left transition-all hover:bg-gray-50"
              >
                <span className="text-lg font-semibold pr-6 tracking-tight whitespace-nowrap font-playfair text-[#0d1f2d] leading-tight">
                  {item.question}
                </span>
                
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all duration-300 border 
                  ${openIndex === index 
                    ? 'bg-teal-600 border-teal-600 text-white rotate-180' 
                    : 'bg-gray-100 border-gray-200 group-hover:border-teal-200 text-gray-400'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-[17px] tracking-tight whitespace-nowrap font-playfair text-2xl text-[#0d1f2d] leading-tight">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;