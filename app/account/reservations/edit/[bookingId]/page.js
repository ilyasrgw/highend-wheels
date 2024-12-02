import Button from "@/app/_components/Button";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCar } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = await params;
  const { num_of_passengers, observations, car_id } = await getBooking(
    bookingId
  );
  const { seating_capacity } = await getCar(car_id);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-white py-8 px-12 text-lg flex gap-6 flex-col rounded-md shadow-md"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="num_of_passengers" className="text-gray-700">
            How many passengers?
          </label>
          <select
            name="num_of_passengers"
            id="num_of_passengers"
            defaultValue={num_of_passengers}
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
            defaultValue={observations}
            className="px-5 py-3 bg-gray-100 text-gray-600 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <Button pendingLabel="Updating...">Update reservation</Button>
        </div>
      </form>
    </div>
  );
}
