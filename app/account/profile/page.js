import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  const countryFlag = "/pt.jpg";
  const nationality = "portugal";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your profile
      </h2>

      <p className="text-lg mb-8 text-primary-500">
        Providing the following information will make your rental process faster
        and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-gray-100  text-gray-700 w-full shadow-sm rounded-md border border-gray-300"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
