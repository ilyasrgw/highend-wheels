"use client";

import { useState } from "react";
import CarCard from "./CarCard";

export default function LoadMoreButton({ initialсars }) {
  const [cars, setCars] = useState(initialсars);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreCars = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/cars?page=${page + 1}`);
      const newCars = await res.json();

      if (!newCars.length) return;
      setCars((prevCars) => [...prevCars, ...newCars]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more cars:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-6 image-transition">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <button
        onClick={loadMoreCars}
        disabled={loading}
        className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-500 mt-8"
      >
        {loading ? "Loading..." : "Load More Cars"}
      </button>
    </div>
  );
}
