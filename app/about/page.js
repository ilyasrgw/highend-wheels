import Image from "next/image";
import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.png";
import Link from "next/link";

export const metadata = {
  title: "About us",
};

export default function Page() {
  return (
    <div className="space-y-12 md:space-y-20 px-4 md:px-8 image-transition mb-16">
      {/* Intro Section */}
      <div className="text-center space-y-4 md:space-y-6 ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-accent-400">
          Welcome to HighEnd Wheels
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Elevate your driving experience with luxury, performance, and
          unmatched style.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center ">
        <div className="col-span-3 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to HighEnd Wheels, where luxury meets performance. We
            specialize in providing the finest collection of high-performance
            cars, carefully curated for the discerning driver who demands only
            the best. Our cars aren’t just about speed; they are about an
            experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you’re looking for a car for an unforgettable weekend
            getaway or something to turn heads at an exclusive event, our
            selection offers a range of options to suit your every need.
          </p>
        </div>
        <div className="col-span-2">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src={image1}
              alt="A hand holding car keys"
              className="object-cover w-full h-80 "
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center ">
        <div className="col-span-2 md:order-1 order-2">
          <div className=" relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 ">
            <Image
              src={image2}
              alt="A view from the car salon"
              className="object-cover w-full h-64 md:h-auto"
            />
          </div>
        </div>
        <div className="col-span-3 space-y-6 md:order-2 order-1 ">
          <h2 className="text-4xl font-bold text-accent-400 md:order-1 sm:order-1">
            A Vision for the Future
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Though HighEnd Wheels was founded in 2024, we have big dreams. In
            just a short time, we’ve set our sights on becoming a global leader
            in luxury car rentals.
          </p>
          <Link
            href="/cars"
            className="inline-flex items-center justify-center bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-white text-lg font-semibold rounded shadow-lg hover:scale-105 transition-transform space-x-2 hover:shadow-xl "
          >
            <span>Explore our cars</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
