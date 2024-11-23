import Image from "next/image";
import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.png";

export const metadata = {
  title: "About us",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to HighEnd Wheels
        </h1>

        <div className="space-y-8">
          <p>
            Welcome to HighEnd Wheels, where luxury meets performance. We
            specialize in providing the finest collection of high-performance
            cars, carefully curated for the discerning driver who demands only
            the best. Our cars aren’t just about speed; they are about an
            experience. From sleek curves to advanced technology, each vehicle
            in our fleet is a masterpiece that combines aesthetics with power,
            bringing you an unparalleled driving experience.
          </p>
          <p>
            At HighEnd Wheels, we understand that driving isn’t just a necessity
            — it’s an art. Whether you’re looking for a car for an unforgettable
            weekend getaway or something to turn heads at an exclusive event,
            our selection offers a range of options to suit your every need.
          </p>
          {/* <p>
            This is where memorable moments are made, surrounded by nature's
            splendor. It's a place to slow down, relax, and feel the joy of
            being together in a beautiful setting.
          </p> */}
        </div>
      </div>

      <div className="col-span-2">
        <Image src={image1} alt="A hand holding car keys" />
      </div>

      <div className="col-span-2">
        <Image src={image2} alt="A view from the car salon" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          A Vision for the Future
        </h1>

        <div className="space-y-8">
          <p>
            Though HighEnd Wheels was founded in 2024, we have big dreams. In
            just a short time, we’ve set our sights on becoming a global leader
            in luxury car rentals, offering more than just vehicles but an
            unforgettable journey. Our mission is to push the boundaries of
            what’s possible, continuously improving and evolving to deliver the
            highest standards in the automotive world.
          </p>
          <p>
            With a passion for innovation and an eye on the future, we aim to
            offer a seamless experience, from booking to driving, ensuring that
            every moment with us is nothing short of extraordinary. We are proud
            of where we’ve started, but the road ahead is even more exciting.
          </p>

          <div>
            <a
              href="/cars"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
