"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageSlider({ images, brand, model }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleThumbnailClick = (index) => setCurrentImageIndex(index);

  return (
    <div className="w-3/4 mx-auto ">
      <div className="relative w-full h-[300px] md:h-[400px] ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            fill
            alt={`Car ${brand} ${model}`}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-lg ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0"
            }`}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="z-20 absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black transition-all "
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="z-20 absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black transition-all"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-3 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-16 h-16 border-2 rounded-full overflow-hidden ${
                index === currentImageIndex
                  ? "border-accent-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={image}
                width={64}
                height={64}
                alt={`Thumbnail of ${brand} ${model}`}
                className="object-cover w-full h-full rounded-full "
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
