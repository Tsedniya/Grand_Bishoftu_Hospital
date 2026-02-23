import React, { useState } from "react";

const FlipCard = ({
  frontTitle,
  frontText,
  backTitle,
  backText,
  frontImage,
  backImage,
  bg = "bg-sky-200",
}) => {
  const [flipped, setFlipped] = useState(false);

  // only allow click flipping on mobile / tablet
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      className="
        group perspective cursor-pointer
        w-[90%] h-40
        md:w-[90%] md:h-40
        lg:w-80 lg:h-70
      "
      onClick={handleClick}
    >
      <div
        className={`
          relative w-full h-full
          transition-transform duration-700
          transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
          lg:group-hover:rotate-y-180
        `}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 ${bg} shadow-xl text-white p-4 flex flex-col justify-center items-center backface-hidden`}
        >
          {frontImage && (
            <img
              src={frontImage}
              alt={frontTitle}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}

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
          {backImage && (
            <img
              src={backImage}
              alt={backTitle}
              className="w-16 h-16 mb-4 object-contain"
            />
          )}

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
