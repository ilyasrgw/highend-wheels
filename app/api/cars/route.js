import { getCars } from "@/app/_lib/data-service";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const seating_capacity = searchParams.get("seating_capacity");

  const limit = 4;
  const offset = (page - 1) * limit;

  try {
    let cars = await getCars(
      "brand",
      limit,
      offset,
      seating_capacity === "roadster"
        ? 2
        : seating_capacity === "sedan"
        ? 4
        : null
    );

    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch cars" }), {
      status: 500,
    });
  }
}
