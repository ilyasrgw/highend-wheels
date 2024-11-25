import CarCard from "./CarCard";
import { getCars } from "../_lib/data-service";
import LoadMoreButton from "./LoadMoreButton";

async function CarList() {
  const initialсars = await getCars("brand", 4, 0);

  return <LoadMoreButton initialсars={initialсars} />;
}

export default CarList;
