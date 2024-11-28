"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFIlter = searchParams.get("seating_capacity") ?? "all";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("seating_capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-500 border-opacity-15 flex space-x-4 p-1 rounded-lg">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFIlter={activeFIlter}
      >
        All cars
      </Button>
      <Button
        filter="roadster"
        handleFilter={handleFilter}
        activeFIlter={activeFIlter}
      >
        Roadsters
      </Button>

      <Button
        filter="sedan"
        handleFilter={handleFilter}
        activeFIlter={activeFIlter}
      >
        Sedans
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFIlter, children }) {
  return (
    <button
      className={` px-5 py-2 transition-all duration-300 ease-in-out hover:bg-primary-600 hover:text-white hover:rounded-lg ${
        filter === activeFIlter
          ? "bg-primary-600 text-white rounded-lg"
          : "bg-transparent text-primary-600"
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
