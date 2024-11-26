"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("seating_capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-500 border-opacity-15 flex rounded-lg">
      <button
        className="px-5 py-2 hover:bg-primary-600 hover:text-white hover:rounded-lg "
        onClick={() => handleFilter("all")}
      >
        All cars
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-600 hover:text-white hover:rounded-lg "
        onClick={() => handleFilter("roadster")}
      >
        Roadsters
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-600 hover:text-white hover:rounded-lg "
        onClick={() => handleFilter("sedan")}
      >
        Sedans
      </button>
    </div>
  );
}

export default Filter;
