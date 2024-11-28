import CarCard from "./CarCard";
import { getCars } from "../_lib/data-service";
import LoadMoreButton from "./LoadMoreButton";
import { unstable_noStore as noStore } from "next/cache";

async function CarList({ filter }) {
  // noStore();
  const initialсars = await getCars("brand", 4, 0);

  let filteredcars;
  if (filter === "all") filteredcars = initialсars;

  if (filter === "roadster")
    filteredcars = initialсars.filter((car) => car.seating_capacity === 2);

  if (filter === "sedan")
    filteredcars = initialсars.filter((car) => car.seating_capacity >= 4);

  return <LoadMoreButton displayedcars={filteredcars} filter={filter} />;
}

export default CarList;
