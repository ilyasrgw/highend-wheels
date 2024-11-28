import { getBookedDatesByCarId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ car }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCarId(car.id),
  ]);

  return (
    <div className="flex md:gap-12 flex-col lg:flex-row gap-4 w-full   ">
      <DateSelector settings={settings} bookedDates={bookedDates} car={car} />

      <ReservationForm car={car} />
    </div>
  );
}

export default Reservation;
