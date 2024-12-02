"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";

export async function updateUser(formData) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("You must be logged in");
  const national_id = formData.get("national_id");
  const [nationality, country_flag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(national_id))
    throw new Error("Please provide a valid national ID");
  const updateData = { nationality, country_flag, national_id };
  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.user_id);

  if (error) throw new Error("User could not be updated");
  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("You must be logged in");

  // Object.entries(formData.entries());

  const newBooking = {
    ...bookingData,
    user_id: session.user.user_id,
    num_of_passengers: Number(formData.get("num_of_passengers")),
    observations: formData.get("observations").slice(0, 1000),
    price: bookingData.price,
    isPaid: false,
    status: "unconfirmed",
  };

  const { data, error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");
  revalidatePath(`/cars/${bookingData.car_id}`);
  redirect("/cars/thankyou");
}

export async function deleteReservation(bookingId) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("You must be logged in");

  const userBookings = await getBookings(session.user.user_id);
  const userBookingIds = userBookings.map((booking) => booking.id);
  if (!userBookingIds.includes(bookingId))
    throw new Error("You are now allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));
  // 1) Authentication
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("You must be logged in");
  // 2) Authorization
  const userBookings = await getBookings(session.user.user_id);
  const userBookingIds = userBookings.map((booking) => booking.id);
  if (!userBookingIds.includes(bookingId))
    throw new Error("You are now allowed to update this booking");
  // 3) Building update data
  const updateData = {
    num_of_passengers: Number(formData.get("num_of_passengers")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 4) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();
  // 5) Error handling
  if (error) throw new Error("Booking could not be updated");

  // 6) Revalidation
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  // 7) Redirecting
  redirect("/account/reservations");
}

// export async function handleSignIn() {
//   redirect("/api/auth/signin?callbackUrl=/account");
// }
