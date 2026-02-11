import React, { useRef, useEffect, useState } from "react";

const ContactUs = () => {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full py-24 flex justify-center items-start bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://demo.divi-pixel.com/vetcare/wp-content/uploads/sites/32/2022/12/fbc-Asset-1.svg')",
 }}
    >
      <div className="w-full max-w-lg">
        <div
          ref={formRef}
          className={`
            sticky top-24 bg-white rounded-xl shadow-xl p-8 w-full transform transition-all duration-800 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }
          `}
        >
          <h2 className="text-3xl font-bold text-[#023E8A] mb-4 text-center">
            Book a Free Consulting
          </h2>

          <p className="text-gray-600 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            augue neque, venenatis id urna ut, interdum auctor enim.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 bg-[#023E8A] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
