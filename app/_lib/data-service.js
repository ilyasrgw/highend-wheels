import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";
import { notFound } from "next/navigation";

/////////////
// GET

export async function getCar(id) {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCarPrice(id) {
  const { data, error } = await supabase
    .from("cars")
    .select("price_per_day, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCars = async function (
  orderBy = "brand",
  limit = 4,
  offset = 0,
  seating_capacity = null
) {
  let query = supabase
    .from("cars")
    .select(
      "id, brand, model, seating_capacity, price_per_day, availability, description, discount, images"
    )
    .order(orderBy)
    .range(offset, offset + limit - 1);

  if (seating_capacity) {
    query = query.eq("seating_capacity", seating_capacity);
  }
  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
};

// Guests are uniquely identified by their email address
export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getBookings(user_id) {
  const { data, error, count } = await supabase
    .from("bookings")
    // We actually also need data on the cars as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, start_date, end_date,  num_of_passengers, price, user_id, car_id, cars(brand,model, images)"
    )
    .eq("user_id", user_id)
    .order("start_date");

  if (error) {
    console.error(error);
    throw new Error("Cars could not get loaded");
  }

  return data;
}

export async function getBookedDatesByCarId(car_id) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all cars
  const { data, error } = await supabase
    .from("bookings")
    .select("start_date, end_date")
    .eq("car_id", car_id)
    .gte("start_date", today)
    .or(`status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Cars could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start_date: new Date(booking.start_date),
        end_date: new Date(booking.end_date),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// CREATE

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateUser(id, updatedFields) {
  const { data, error } = await supabase
    .from("users")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("User could not be updated");
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
