import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-white text-lg font-semibold rounded shadow-md hover:scale-105 transition-transform"
      >
        Go to homepage
      </Link>
    </main>
  );
}

export default NotFound;