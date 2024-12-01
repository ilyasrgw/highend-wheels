import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    user_id,
    start_date,
    end_date,
    // numNights,
    price,
    num_of_passengers,
    status,
    created_at,
    cars: { brand, model, images: rawImages },
  } = booking;

  const defaultImage = "/placeholder.jpg";

  let images;
  try {
    images = Array.isArray(rawImages) ? rawImages : JSON.parse(rawImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    images = [defaultImage];
  }

  console.log("Parsed Images:", images);

  const imageUrl = images.length > 0 ? images[0] : defaultImage;

  return (
    <div className="flex border ">
      <div className="relative h-32 aspect-square">
        {
          <Image
            src={imageUrl}
            alt={`${brand} ${model}`}
            fill
            className="object-cover border-r"
          />
        }
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          {/* <h3 className="text-xl font-semibold">
            {numNights} days  {name}
          </h3> */}
          {isPast(new Date(start_date)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(new Date(start_date), "EEE, MMM dd yyyy")} (
          {isToday(new Date(start_date))
            ? "Today"
            : formatDistanceFromNow(start_date)}
          ) &mdash; {format(new Date(end_date), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${price}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {num_of_passengers} passenger{num_of_passengers > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Rented {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l  w-[100px]">
        {!isPast(start_date) ? (
          <>
            {" "}
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />{" "}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
