import ImageSlider from "@/app/_components/ImageSlider";
import { getCar } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export async function generateMetadata({ params }) {
  const { brand, model } = await getCar(params.carId);
  return { title: `${brand} ${model}` };
}

export default async function Page({ params }) {
  const car = await getCar(params.carId);

  const {
    id,
    brand,
    model,
    seating_capacity,
    price_per_day,
    discount,
    images: rawImages,
    description,
  } = car;

  const defaultImage = "/placeholder.jpg";
  let images;
  try {
    images = Array.isArray(rawImages) ? rawImages : JSON.parse(rawImages);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    images = [defaultImage];
  }

  const carImages = images.length > 0 ? images : [defaultImage];

  return (
    <div className="max-w-4xl mx-auto mt-2 flex flex-col items-center image-transition ">
      <ImageSlider images={carImages} brand={brand} model={model} />

      <div className="mt-6 text-center">
        <h3 className="text-accent-500 font-black text-5xl mb-5">
          {brand} {model}
        </h3>

        <p className="text-lg text-primary-400 mb-6">{description}</p>

        <ul className="flex flex-col gap-4 mb-6 items-center">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{seating_capacity}</span>{" "}
              passengers
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">Can be picked up wherever you want</span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-4xl font-semibold ">Reserve today.</h2>
      </div>
    </div>
  );
}
