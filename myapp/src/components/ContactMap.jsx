import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full  px-4 sm:px-8 md:px-16 md:mt-5 -mt-5 mb-10 md:mb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Map */}
        <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.622538926956!2d39.01717157482392!3d8.746684193097973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b7300628e2387%3A0xec52644e52886287!2sGrand%20Bishoftu%20Hospital!5e0!3m2!1sen!2set!4v1709450700000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grand Bishoftu Hospital"
          ></iframe>
        </div>

        {/* Right: Text / Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#023E8A] mb-4">
            Visit Our Hospital
          </h2>
          <p className="text-lg mb-4">
            Find us at our main location or reach out for directions. We are here to provide
            exceptional healthcare with compassion and expertise.
          </p>
          <div className="text-lg">
            <p className="mb-2">
              <strong>Address:</strong> Bishoftu,Inova-Behind Yaden Hotel
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +251 977434445
            </p>
            <p className="mb-2">
              <strong>Email:</strong> grandbishoftuhospital@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
