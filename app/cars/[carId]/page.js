import ImageSlider from "@/app/_components/ImageSlider";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import {
  getBookedDatesByCarId,
  getCar,
  getCars,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { carId } = await params;
  const car = await getCar(carId);
  if (!car) {
    throw new Error(`Car with ID ${carId} not found`);
  }
  const { brand, model } = car;
  return {
    title: `${brand} ${model}`,
  };
}

export async function generateStaticParams() {
  const cars = await getCars();
  const ids = cars.map((car) => ({
    carId: String(car.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  const { carId } = await params;

  const car = await getCar(carId);

  // const settings = await getSettings();

  // const bookedDates = await getBookedDatesByCarId(carId);

  const {
    id,
    brand,
    model,
    seating_capacity,
    price_per_day,
    discount,
    images: rawImages,
    description,
  } = car;

  const defaultImage = "/placeholder.jpg";
  let images;
  try {
    images = Array.isArray(rawImages) ? rawImages : JSON.parse(rawImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    images = [defaultImage];
  }

  const carImages = images.length > 0 ? images : [defaultImage];

  return (
    <div className="w-full mx-auto mt-2 flex flex-col items-center image-transition md:space-y-12 space-y-8 ">
      <ImageSlider images={carImages} brand={brand} model={model} />

      <div className="mt-6 text-center">
        <h3 className="text-accent-500 font-black text-3xl md:text-5xl mb-5">
          {brand} {model}
        </h3>

        <p className="text-base md:text-lg text-primary-400 mb-6">
          {description}
        </p>

        <ul className="flex flex-col gap-4 mb-6 items-center">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="md:text-lg text-base">
              For up to <span className="font-bold">{seating_capacity}</span>{" "}
              passengers
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="md:text-lg text-base">
              Can be picked up wherever you want
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full px-4 ">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 text-accent-500 ">
          Reserve {car.brand} today.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation car={car} />
        </Suspense>
      </div>
    </div>
  );
}
