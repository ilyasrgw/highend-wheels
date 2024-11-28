"use client";
import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector() {
  // CHANGE
  const price_per_day = 23;
  const discount = 23;
  const num_days = 2;
  const price = 23;
  const range = { from: null, to: null };

  // SETTINGS
  const min_booking_length = 1;
  const max_booking_length = 4;

  return (
    <div className="flex flex-col gap-4 w-full  max-w-2xl ">
      <div className="place-self-center">
        <DayPicker
          mode="range"
          min={min_booking_length + 1}
          max={max_booking_length}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
        />
      </div>

      <div className="flex items-center justify-between bg-primary-800 text-primary-100 p-4 rounded">
        <div className="flex items-center gap-6">
          <p className="text-lg">
            {discount > 0 ? (
              <>
                <span className="font-bold text-2xl">
                  ${price_per_day - discount}
                </span>
                <span className="line-through ml-2">${price_per_day}</span>
              </>
            ) : (
              <span className="font-bold text-2xl">${price_per_day}</span>
            )}
            <span className="text-sm ml-1">/day</span>
          </p>

          {num_days > 0 && (
            <p className="bg-accent-600 px-3 py-1 rounded text-primary-900 font-semibold">
              {num_days} days
            </p>
          )}

          <p>
            <span className="font-bold uppercase text-sm">Total:</span>{" "}
            <span className="font-semibold text-xl">${price}</span>
          </p>
        </div>

        {range.from || range.to ? (
          <button
            className="text-sm px-4 py-2 bg-primary-700 hover:bg-primary-600 rounded transition"
            onClick={resetRange}
          >
            Clear Dates
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;