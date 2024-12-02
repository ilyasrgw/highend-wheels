import ReservationList from "@/app/_components/ReservationList";
import { authOptions } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const bookings = await getBookings(session.user.user_id);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link
            className="underline hover:text-accent-400 transition-colors text-primary-700"
            href="/cars"
          >
            luxury cars &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
