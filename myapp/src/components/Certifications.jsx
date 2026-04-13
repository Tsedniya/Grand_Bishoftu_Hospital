import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

const awards = [
  {
    icon: <Award size={28} />,
    title: "Excellence in Healthcare",
    desc: "Recognized for outstanding patient care and service quality.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified Medical Standards",
    desc: "Meets international healthcare and safety standards.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Trusted Professionals",
    desc: "Award-winning specialists with proven expertise.",
  },
];

const AwardsSection = () => {
  return (
    <div className="bg-gray-100 py-12 mt-10 pt-28">
      <h2 className="text-center text-3xl sm:text-4xl font-poppins text-[#023E8A] mb-8 ">
        Awards & Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20">
        {awards.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            <div className="text-[#023E8A] flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;