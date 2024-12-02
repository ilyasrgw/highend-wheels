import { getServerSession } from "next-auth";
import { getBookedDatesByCarId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { authOptions } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

async function Reservation({ car }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCarId(car.id),
  ]);

  const session = await getServerSession(authOptions);
  console.log(bookedDates);

  return (
    <div className="flex md:gap-12 flex-col lg:flex-row gap-4 w-full   ">
      <DateSelector settings={settings} bookedDates={bookedDates} car={car} />

      {session?.user ? (
        <ReservationForm car={car} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
