import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import ImageSlider from "./ImageSlider";

function Car({ car }) {
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
    <>
      <ImageSlider images={carImages} brand={brand} model={model} />

      <div className="mt-6 text-center">
        <h3 className="text-accent-500 font-black text-3xl md:text-5xl mb-5">
          {brand} {model}
        </h3>

        <p className="text-base md:text-lg text-primary-400 mb-6">
          {description}
        </p>

        <ul className="flex flex-col gap-4 mb-6 items-center">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="md:text-lg text-base">
              For up to <span className="font-bold">{seating_capacity}</span>{" "}
              passengers
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="md:text-lg text-base">
              Can be picked up wherever you want
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Car;
