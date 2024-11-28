import Car from "@/app/_components/Car";
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

  return (
    <>
      <Car car={car} />
      <div className="w-full max-w-6xl mx-auto mt-2 flex flex-col items-center image-transition md:space-y-12 space-y-8 ">
        <div className="w-full px-4 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 text-accent-500 ">
            Reserve {car.brand} today.
          </h2>
          <Suspense fallback={<Spinner />}>
            <Reservation car={car} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
