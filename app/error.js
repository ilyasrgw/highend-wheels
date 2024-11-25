"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-white text-lg font-semibold rounded shadow-md hover:scale-105 transition-transform"
      >
        Try again
      </button>
    </main>
  );
}
