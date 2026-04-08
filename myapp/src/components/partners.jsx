import { motion } from "framer-motion";

// 👉 imports stay the same
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
  { name: "Abyssinia Bank", logo: photo50 },
  { name: "Abyssinia Group of Industries", logo: photo59 },
  { name: "Commercial Bank of Ethiopia", logo: photo61 },
  { name: "East Africa Industrial Park", logo: photo58 },
  { name: "East Africa Agribusiness", logo: photo63 },
  { name: "Elsewedy Cables", logo: photo53 },
  { name: "Ethio Life & General Insurance", logo: photo57 },
  { name: "Ethiopian Steel Profiling", logo: photo56 },
  { name: "G-Global Gas", logo: photo64 },
  { name: "Humedica", logo: photo60 },
  { name: "Oromia Bank", logo: photo62 },
  { name: "Sentinel Steel", logo: photo55 },
  { name: "Tadash Steel", logo: null }, 
  { name: "Ethio Telecom", logo: photo54 },
  { name: "TK Hotel", logo: photo51 },
  { name: "Unilever", logo: photo52 },
  { name: "Unlimited Packaging", logo: null }, 
];

const Partners = () => {
  return (
    <div className="bg-white py-15">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-6 text-[#023E8A] ">
        Our Partners
      </h2>

      <div className="relative w-full overflow-hidden h-28 flex items-center">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="min-w-[140px] h-20 flex items-center justify-center bg-gray-100 rounded-lg shadow p-3"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-gray-700 text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;