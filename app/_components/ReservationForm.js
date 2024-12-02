"use client";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import { createBooking } from "../_lib/actions";
import Button from "./Button";
import { useReservation } from "./ReservationContext";

function ReservationForm({ car, user }) {
  const { range, resetRange } = useReservation();
  const { seating_capacity, price_per_day, discount, id } = car;
  const start_date = range.from;
  const end_date = range.to;

  const num_days = differenceInDays(end_date, start_date);
  const price = num_days * (price_per_day - discount);
  const bookingData = { start_date, end_date, num_days, price, car_id: id };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]  mx-auto  px-4">
      <div className="bg-primary-900 text-primary-100 px-4 md:px-16  py-2 flex justify-between items-center overflow-hidden  ">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <div className="relative h-8 w-8">
            <Image
              className="rounded-full"
              src={user.image}
              alt={user.name}
              fill
              sizes="32px" // Ensure proper sizing
            />
          </div>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-6 px-4 md:py-8 md:px-12 text-lg flex flex-col gap-6  mx-auto "
      >
        <div className="space-y-2">
          <label htmlFor="num_of_passengers" className="text-primary-50">
            How many passengers?
          </label>
          <select
            name="num_of_passengers"
            id="num_of_passengers"
            className="px-4 py-2 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option value="">Select number of passengers...</option>
            {Array.from({ length: seating_capacity }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "passenger" : "passengers"}
                </option>
              )
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations" className="text-primary-50">
            Additional information
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-4 py-2 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="E.g., preferred pickup location, drop-off time, child seat requirement..."
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {!(start_date && end_date) ? (
            <p className="text-primary-300 text-sm md:text-base">
              Start by selecting a car
            </p>
          ) : (
            <Button pendingLabel="Reserving...">Reserve now</Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
