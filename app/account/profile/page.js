import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { authOptions } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = await getUser(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your profile
      </h2>

      <p className="text-lg mb-8 text-primary-500">
        Providing the following information will make your rental process faster
        and smoother. See you soon!
      </p>
      <UpdateProfileForm user={user}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-gray-100  text-gray-700 w-full shadow-sm rounded-md border border-gray-300"
          defaultCountry={user.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
