import React from "react";

const FlipCard = ({
  frontTitle,
  frontText,
  backTitle,
  backText,
  frontImage,
  backImage, // ✅ new prop for back image
  bg = "bg-sky-200",
}) => {
  return (
    <div
      className="
        group perspective
        w-[90%] h-40
        md:w-[90%] md:h-40
        lg:w-80 lg:h-70
      "
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

        {/* Front */}
        <div
          className={`absolute inset-0 ${bg} shadow-xl text-white p-4 flex flex-col justify-center items-center backface-hidden`}
        >
          {/* Front Image */}
          {frontImage && (
            <img
              src={frontImage}
              alt={frontTitle}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}

          {/* Front Text */}
          <h3 className="text-xl font-semibold text-center">
            {frontTitle}
          </h3>
          <p className="text-lg opacity-90 text-center">
            {frontText}
          </p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 ${bg} shadow-xl text-white p-6 flex flex-col justify-center items-center rotate-y-180 backface-hidden`}
        >
          {/* Back Image */}
          {backImage && (
            <img
              src={backImage}
              alt={backTitle}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}

          {/* Back Text */}
          <h3 className="text-xl font-semibold mb-2 text-center">
            {backTitle}
          </h3>
          <p className="text-center text-lg opacity-90">
            {backText}
          </p>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
