"use client";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CarCard({ car }) {
  const {
    id,
    brand,
    model,
    seating_capacity,
    price_per_day,
    discount,
    images: rawImages,
  } = car;

  console.log("Car data:", car);
  console.log("Images:", rawImages);

  const defaultImage = "/placeholder.jpg";

  let images;
  try {
    images = Array.isArray(rawImages) ? rawImages : JSON.parse(rawImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    images = [defaultImage];
  }

  console.log("Parsed Images:", images);

  const carImages = images.length > 0 ? images : [defaultImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);

  const handlePrev = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + carImages.length) % carImages.length
    );

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  console.log("Current image URL:", carImages[currentImageIndex]);

  return (
    <div className="grid">
      <div className="relative w-full h-[300px] md:h-[400px]">
        {carImages.map((image, index) => (
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
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="z-20 absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded transition-all duration-300 hover:bg-black"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="z-20 absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded transition-all duration-300 hover:bg-black"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
      {carImages.length > 1 && (
        <div className="flex justify-center gap-3 mt-4">
          {carImages.map((image, index) => (
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
                className="object-cover w-full h-full rounded-full"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col justify-between ">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3 text-center ">
            {brand} {model}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-400">
              For up to <span className="font-bold">{seating_capacity}</span>{" "}
              passengers
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${price_per_day - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${price_per_day}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${price_per_day}</span>
            )}
            <span className="text-primary-200">/ day</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t text-right">
          <Link
            href={`/cars/${id}`}
            className="py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/carpixel.net-2023-lamborghini-huracan-tecnica-us-116678-hd.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXJwaXhlbC5uZXQtMjAyMy1sYW1ib3JnaGluaS1odXJhY2FuLXRlY25pY2EtdXMtMTE2Njc4LWhkLmpwZyIsImlhdCI6MTczMjIyNTU2OSwiZXhwIjoxNzYzNzYxNTY5fQ.SvBh6nkE89Mlqsy9_CPGweysn9NIM591iIS0aG8Mp6c&t=2024-11-21T21%3A46%3A11.094Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/carpixel.net-2023-lamborghini-huracan-tecnica-us-116683-hd.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXJwaXhlbC5uZXQtMjAyMy1sYW1ib3JnaGluaS1odXJhY2FuLXRlY25pY2EtdXMtMTE2NjgzLWhkLmpwZyIsImlhdCI6MTczMjIyNTkzOSwiZXhwIjoxNzYzNzYxOTM5fQ.dWYoyhpCez814wgGEgis0PaCHJKHB4iaMniV88SCBh0&t=2024-11-21T21%3A52%3A20.997Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/carpixel.net-2023-lamborghini-huracan-tecnica-us-116684-hd.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXJwaXhlbC5uZXQtMjAyMy1sYW1ib3JnaGluaS1odXJhY2FuLXRlY25pY2EtdXMtMTE2Njg0LWhkLmpwZyIsImlhdCI6MTczMjIyNTk2NywiZXhwIjoxNzYzNzYxOTY3fQ.GvfhXMC7dbWGEgjpti-NEchyZtToF_UXWxkM9b37zNc&t=2024-11-21T21%3A52%3A48.827Z",
];

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/car-004.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXItMDA0LnBuZyIsImlhdCI6MTczMjI2MTg4OSwiZXhwIjoxNzYzNzk3ODg5fQ.vfaQdGps3xbI4q5v1Ulu1-lUGZ7CHYrvj_892iXceGc&t=2024-11-22T07%3A51%3A31.187Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/ezgif-4-3c8e78b2fe.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9lemdpZi00LTNjOGU3OGIyZmUuanBnIiwiaWF0IjoxNzMyMjYxOTUwLCJleHAiOjE3NjM3OTc5NTB9.61bxR_1rumJKwCL-ywgYJt9O-8yIArg2MU4m5kDmTe4&t=2024-11-22T07%3A52%3A31.922Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/ezgif-4-e5f8cc2a13.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9lemdpZi00LWU1ZjhjYzJhMTMuanBnIiwiaWF0IjoxNzMyMjYxOTc0LCJleHAiOjE3NjM3OTc5NzR9.zAu5P5ew2jhcIc43QozTQozqo-RkUK8Zj9akfm8FC0c&t=2024-11-22T07%3A52%3A55.817Z",
];

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/car-001.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXItMDAxLnBuZyIsImlhdCI6MTczMjI2MjcxNiwiZXhwIjoxNzYzNzk4NzE2fQ.kD8jxGXjlw9FSeStAFLcK5n6wekQxNlRlAuO2Ymg2po&t=2024-11-22T08%3A05%3A18.187Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/img1_16642823212.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9pbWcxXzE2NjQyODIzMjEyLmpwZyIsImlhdCI6MTczMjI2MjczOCwiZXhwIjoxNzYzNzk4NzM4fQ.Z8IryX59eH7mlfI1Rwa6cueMzS_Tg5AD6pz--eJphsY&t=2024-11-22T08%3A05%3A40.335Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/img2_16642823212.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9pbWcyXzE2NjQyODIzMjEyLmpwZyIsImlhdCI6MTczMjI2Mjc1MSwiZXhwIjoxNzYzNzk4NzUxfQ.g5WW3lihvojJdeL9swT2ZzwUmzgkn4CY1AfWND0U2kg&t=2024-11-22T08%3A05%3A53.142Z",
];

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/car-003.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9jYXItMDAzLnBuZyIsImlhdCI6MTczMjI2MjgwNSwiZXhwIjoxNzYzNzk4ODA1fQ.N2tnfDiaBZL2YtYCzbGZCbiE4ZVtya2eOWjmkOGHe5U&t=2024-11-22T08%3A06%3A47.088Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/Rent-Porsche-911-Dubai-Side.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9SZW50LVBvcnNjaGUtOTExLUR1YmFpLVNpZGUuanBnIiwiaWF0IjoxNzMyMjYyODIyLCJleHAiOjE3NjM3OTg4MjJ9.ei7PczKgsY5UxU8Asuxchc2tRF8REYNzfam9_g_4hPw&t=2024-11-22T08%3A07%3A04.170Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/zo1qwYsW5sE.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy96bzFxd1lzVzVzRS5qcGciLCJpYXQiOjE3MzIyNjI4MjksImV4cCI6MTc2Mzc5ODgyOX0.iiIazeBSi9ioTkFKvE1cW9rFewoylXlhTB_Hu7Fl6y4&t=2024-11-22T08%3A07%3A11.312Z",
];

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/img1_17309744032.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9pbWcxXzE3MzA5NzQ0MDMyLmpwZWciLCJpYXQiOjE3MzIyODM3NTgsImV4cCI6MTc2MzgxOTc1OH0.rb1u27d8cTyRX4zTBARg6GPGC7QoP088kj1HhH8ttkY&t=2024-11-22T13%3A55%3A59.001Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/img2_17309744032.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9pbWcyXzE3MzA5NzQ0MDMyLmpwZWciLCJpYXQiOjE3MzIyODM3ODksImV4cCI6MTc2MzgxOTc4OX0.etvz54dTKsH_gYy5nXZ8kMJICAN8jYXqgF-mvb4Vp_s&t=2024-11-22T13%3A56%3A29.665Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/17309744032.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy8xNzMwOTc0NDAzMi5qcGVnIiwiaWF0IjoxNzMyMjgzODI1LCJleHAiOjE3NjM4MTk4MjV9.blKLRqZn9vE1IL91A2TO93sJVWYqEdCR3BZ6MeC3nSg&t=2024-11-22T13%3A57%3A05.659Z",
];

[
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/mclaren.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9tY2xhcmVuLmpwZyIsImlhdCI6MTczMjI4NDE3MSwiZXhwIjoxNzYzODIwMTcxfQ.sfn88S9U7S4Rd3TUE0Yy2f6VGdnT8KPo8hUACgBJQqg&t=2024-11-22T14%3A02%3A52.363Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/mclaren2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9tY2xhcmVuMi5qcGciLCJpYXQiOjE3MzIyODQyMDAsImV4cCI6MTc2MzgyMDIwMH0.0AzxTWD7kqcZR-LWD6WK8w1Jx3KYN8V7fNev0YqoVFk&t=2024-11-22T14%3A03%3A20.719Z",
  "https://beacloupijguxbuaihoo.supabase.co/storage/v1/object/sign/photos%20of%20cars/mclaren3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaG90b3Mgb2YgY2Fycy9tY2xhcmVuMy5qcGciLCJpYXQiOjE3MzIyODQyMzQsImV4cCI6MTc2MzgyMDIzNH0.lyfNOgy9M3ad0htlcX68LNNutJuo--FHz6_cP9xvWAU&t=2024-11-22T14%3A03%3A55.153Z",
];
