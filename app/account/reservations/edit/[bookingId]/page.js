export default function Page({ params }) {
  // CHANGE
  const reservationId = 23;
  const seating_capacity = 2;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form className="bg-white py-8 px-12 text-lg flex gap-6 flex-col rounded-md shadow-md">
        <div className="space-y-2">
          <label htmlFor="numPassengers" className="text-gray-700">
            How many passengers?
          </label>
          <select
            name="numPassengers"
            id="numPassengers"
            className="px-5 py-3 bg-gray-100 text-gray-500 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of passengers...
            </option>
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
          <label htmlFor="observations" className="text-gray-700">
            Anything we should know about your booking?
          </label>
          <textarea
            name="observations"
            className="px-5 py-3 bg-gray-100 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="btn-form">Update reservation</button>
        </div>
      </form>
    </div>
  );
}
