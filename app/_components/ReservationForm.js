"use client";
import { useState } from "react";
import { useReservation } from "./ReservationContext";

function ReservationForm({ car }) {
  const { range } = useReservation();
  const { seating_capacity } = car;

  const [numPassengers, setNumPassengers] = useState("");

  const handlePassengerChange = (e) => {
    setNumPassengers(e.target.value);
  };

  return (
    <div className="scale-[1.01]  mx-auto  px-4">
      <div className="bg-primary-900 text-primary-100 px-4 md:px-16  py-2 flex justify-between items-center overflow-hidden  ">
        <p>Logged in as</p>
      </div>

      <form className="bg-primary-900 py-6 px-4 md:py-8 md:px-12 text-lg flex flex-col gap-6 max-w-xl mx-auto">
        <div className="space-y-2">
          <label htmlFor="numPassengers" className="text-primary-50">
            How many passengers?
          </label>
          <select
            name="numPassengers"
            id="numPassengers"
            className="px-4 py-2 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm"
            value={numPassengers}
            onChange={handlePassengerChange}
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
          <label htmlFor="additionalInfo" className="text-primary-50">
            Additional information
          </label>
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            className="px-4 py-2 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="E.g., preferred pickup location, drop-off time, child seat requirement..."
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-300 text-sm md:text-base">
            Start by selecting a car
          </p>
          <button
            className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold rounded hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
            disabled={!numPassengers}
          >
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
