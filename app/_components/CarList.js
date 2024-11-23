import CarCard from "./CarCard";
import { getCars } from "../_lib/data-service";

async function CarList() {
  const cars = await getCars();
  if (!cars.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
}

export default CarList;
