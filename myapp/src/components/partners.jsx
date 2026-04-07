import { motion } from "framer-motion";

const partners = [
  "Abyssinia Bank",
  "Abyssinia Group of Industries",
  "Commercial Bank of Ethiopia",
  "East Africa Industrial Park",
  "East Africa Agribusiness",
  "Elsewedy Cables",
  "Ethio Life & General Insurance",
  "Ethiopian Steel Profiling",
  "G-Global Gas",
  "Humedica",
  "Oromia Bank",
  "Sentinel Steel",
  "Tadash Steel",
  "Ethio Telecom",
  "TK Hotel",
  "Unilever",
  "Unlimited Packaging",
];

const Partners = () => {
  return (
    <div className="bg-white py-10 overflow-hidden">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        Our Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["100%", "-100%"] }} // RIGHT → LEFT
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="min-w-[150px] h-20 flex items-center justify-center bg-gray-100 rounded-lg shadow"
            >
              <span className="font-semibold text-gray-700">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;