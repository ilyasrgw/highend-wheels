import CarCard from "@/app/_components/CarCard";
import { getCars } from "../_lib/data-service";
import CarList from "../_components/CarList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const revalidate = 3600;

export const metadata = {
  title: "Cars",
};

export default async function Page({ searchParams }) {
  const { seating_capacity } = await searchParams;

  const filter = seating_capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cars
      </h1>
      <p className="text-primary-500 text-lg mb-10">
        Rent a Sports in your city with Elite Rent-a-Car. Choose from various
        upscale car brands such as Mercedes-Benz, Aston Martin, Porsche,
        Bentley, Lamborghini, Chevrolet, Ferrari, McLaren and many more… Custom
        delivery available.
      </p>
      <div className="flex justify-center">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CarList filter={filter} />
      </Suspense>
    </div>
  );
}
