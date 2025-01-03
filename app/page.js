import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24 flex justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Picture of a green Lamborghini"
        />
      </div>

      <div className=" z-10 text-center absolute top-16    ">
        <h1 className="text-8xl text-primary-500 mb-10 tracking-tight font-normal">
          Welcome
        </h1>
        <Link
          href="/cars"
          className="bg-accent-500  px-6 py-4  text-primary-800 text-lg font-semibold hover:bg-accent-600 fade-in transition-all shadow-md hover:shadow-lg "
        >
          Explore our luxury cars
        </Link>
      </div>
    </main>
  );
}
