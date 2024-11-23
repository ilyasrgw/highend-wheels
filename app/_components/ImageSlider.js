"use client";
import Image from "next/image";
import { useState } from "react";

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
    <div className="w-full  ">
      <div className="relative w-full h-[400px] ">
        <Image
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${brand} ${model}`}
          fill
          className="object-cover rounded-md fade-in image-transition"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black transition-all"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black transition-all"
            >
              Next
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
              className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${
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
                className="object-cover w-full h-full "
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
