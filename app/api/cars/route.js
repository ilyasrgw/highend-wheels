import { getCars } from "@/app/_lib/data-service";

getCars;

// Путь к вашему data-service, если он существует
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1; // Номер страницы (по умолчанию 1)
  const limit = 4; // Количество машин на странице
  const offset = (page - 1) * limit; // Сдвиг

  try {
    const cars = await getCars("brand", limit, offset); // Функция, которая извлекает машины с пагинацией
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
