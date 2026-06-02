import { motion } from "framer-motion";

// Logo imports
import photo50 from "../assets/new/photo50.jpg";
import photo51 from "../assets/new/photo51.jpg";
import photo52 from "../assets/new/photo52.jpg";
import photo53 from "../assets/new/photo53.jpg";
import photo54 from "../assets/new/photo54.jpg";
import photo55 from "../assets/new/photo55.jpg";
import photo56 from "../assets/new/photo56.jpg";
import photo57 from "../assets/new/photo57.jpg";
import photo58 from "../assets/new/photo58.jpg";
import photo59 from "../assets/new/photo59.jpg";
import photo60 from "../assets/new/photo60.jpg";
import photo61 from "../assets/new/photo61.jpg";
import photo62 from "../assets/new/photo62.jpg";
import photo63 from "../assets/new/photo63.jpg";
import photo64 from "../assets/new/photo64.jpg";

const partners = [
  { name: "Ethio Telecom", logo: photo54 },
  { name: "Commercial Bank of Ethiopia", logo: photo61 },
  { name: "Unilever", logo: photo52 },
  { name: "Abyssinia Bank", logo: photo50 },
  { name: "Abyssinia Group of Industries", logo: photo59 },
  { name: "East Africa Industrial Park", logo: photo58 },
  { name: "East Africa Agribusiness", logo: photo63 },
  { name: "TK Hotel", logo: photo51 },
  { name: "Unlimited Packaging", logo: null },
  { name: "Oromia Bank", logo: photo62 },
  { name: "Elsewedy Cables", logo: photo53 },
  { name: "Ethio Life & General Insurance", logo: photo57 },
  { name: "Ethiopian Steel Profiling", logo: photo56 },
  { name: "G-Global Gas", logo: photo64 },
  { name: "Humedica", logo: photo60 },
  { name: "Sentinel Steel", logo: photo55 },
  { name: "Tadash Steel", logo: null },
];

const Partners = () => {
  return (
    <section className="bg-white py-14 md:py-20 mt-8 md:mt-14 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">

        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#0d1f2d] leading-tight mt-3">
          Our Partners
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-[#0b6e6e] text-sm md:text-base tracking-[2px] font-medium leading-relaxed">
          Partnering to provide quality healthcare and patient care
        </p>
      </div>

      {/* Logos */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-20 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[180px] h-24 flex items-center justify-center"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                  className="
                    max-h-20
                    w-auto
                    object-contain
                    transition-all
                    duration-500
                    hover:scale-110
                    hover:brightness-110
                  "
                />
              ) : (
                <span
                  className="
                    text-base
                    font-medium
                    text-gray-700
                    hover:text-[#0b6e6e]
                    transition-colors
                  "
                >
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;